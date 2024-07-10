"use client";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { CiServer } from "react-icons/ci";

export default function Register() {
  const [passwordhidden, setPasswordHidden] = useState(true);

  const HandlePasswordInput = (e) => {
    e.preventDefault();
    setPasswordHidden(!passwordhidden);
  };

  return (
    <section className="w-full min-h-screen  flex items-center justify-center bg-white">
      <div className="login card w-[300px] sm:w-[350px] md:w-[500px] xl:w-3/12 h-[800px] bg-black flex flex-col gap-4 items-center justify-start pt-10   shadow-2xl  rounded-lg ">
        <Image src={"/logo.webp"} alt="logo" width={200} height={200} />
        <div className="w-full h-full flex flex-col  items-center pt-4 gap-4 justify-start">
          <div className="username bg-primary flex w-9/12 items-center h-14 rounded-full px-3 gap-2">
            <CiUser className="text-secondary text-2xl font-bold" />
            <input
              type="text"
              className="bg-primary outline-none text-white w-full"
              placeholder="Username"
            />
          </div>
          <div className="server bg-primary flex w-9/12 items-center h-14 rounded-full px-3 gap-2">
            <CiServer className="text-secondary text-2xl font-bold" />
            <input
              type="text"
              className="bg-primary outline-none text-white w-full"
              placeholder="Server Name"
            />
          </div>
          <div className="password  bg-primary flex w-9/12 items-center h-14 rounded-full px-3 gap-2  ">
            <CiLock className="text-secondary text-2xl font-bold" />
            <input
              type="password"
              className="bg-primary outline-none text-white w-full"
              placeholder="Password"
            />
          </div>
          <div className="password  bg-primary flex w-9/12 items-center h-14 rounded-full px-3 gap-2  ">
            <CiLock className="text-secondary text-2xl font-bold" />
            <input
              type="password"
              className="bg-primary outline-none text-white w-full"
              placeholder="Confirm Password"
            />
          </div>

          <button className="w-[250px] mt-4 h-[40px] rounded-full bg-secondary text-white font-bold">
            Create Account
          </button>
          <button className="text-white font-bold">Sign In</button>
        </div>
      </div>
    </section>
  );
}
