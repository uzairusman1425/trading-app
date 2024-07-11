"use client";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [passwordhidden, setPasswordHidden] = useState(true);
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const HandlePasswordInput = (e) => {
    e.preventDefault();
    setPasswordHidden(!passwordhidden);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.info("Email and password are required");
      return;
    }

    try {
      const response = await fetch("185.224.139.104:8080/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const { accessToken, refreshToken } = data;
      Cookies.set("accessToken", accessToken, { expires: 7, path: "/" });
      Cookies.set("refreshToken", refreshToken, { expires: 7, path: "/" });
      if (response.ok) {
        toast.success("Login successful");
        router.push("/trading");
      } else {
        toast.warn(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full min-h-screen  flex items-center justify-center bg-white">
        <form className="login card w-[300px] sm:w-[350px] md:w-[500px] xl:w-3/12 h-[700px] bg-black flex flex-col gap-4 items-center justify-start pt-10   shadow-2xl  rounded-lg ">
          <Image src={"/logo.webp"} alt="logo" width={200} height={200} />
          <div className="w-full h-full flex flex-col  items-center pt-4 gap-4 justify-start">
            <div className="email bg-primary flex w-9/12 items-center h-14 rounded-full px-3 gap-2">
              <CiUser className="text-secondary text-2xl font-bold" />
              <input
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                className="bg-primary outline-none text-white w-full"
                placeholder="Email"
              />
            </div>
            <div className="password relative bg-primary flex w-9/12 items-center h-14 rounded-full px-3 gap-2  ">
              <CiLock className="text-secondary text-2xl font-bold" />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type={passwordhidden ? "password" : "text"}
                className="bg-primary outline-none text-white w-full"
                placeholder="Password"
              />
              <button
                className="text-secondary absolute right-4"
                onClick={HandlePasswordInput}
              >
                {passwordhidden ? <LuEye /> : <FaEyeSlash />}
              </button>
            </div>
            <Link href={""} className="text-gray-400">
              Forget Your Password?
            </Link>
            <button
              onClick={handleLogin}
              className="w-[250px] h-[40px] rounded-full bg-secondary text-white font-bold"
            >
              Log In
            </button>
            <button className="text-white font-bold">Sign Up</button>
          </div>
        </form>
      </section>
    </>
  );
}
