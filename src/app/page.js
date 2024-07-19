"use client"
import { CiUser } from "react-icons/ci"
import Image from "next/image"
import Link from "next/link"
import { LuEye } from "react-icons/lu"
import { useState } from "react"
import { FaEyeSlash } from "react-icons/fa6"
import { CiLock } from "react-icons/ci"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import axios from "axios"
import toast from "react-hot-toast"

export default function Login() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const [passwordHidden, setPasswordHidden] = useState(true)
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const HandlePasswordInput = (e) => {
		e.preventDefault()
		setPasswordHidden(!passwordHidden)
	}

	const handleLogin = async (e) => {
		e.preventDefault()

		if (!email || !password) {
			toast.info("Email and password are required")
			return
		}

		await axios
			.post(`${API_BASE_URL}/auth/login`, { email, password })
			?.then((res) => {
				console.log(res)
				Cookies.set("accessToken", res?.data?.accessToken)
				Cookies.set("refreshToken", res?.data?.refreshToken)
				Cookies.set("userId", res?.data?.userDetails?._id)
				toast.success("Login successful")
				router.push("/trading")
			})
			?.catch((err) => {
				console.log(err)
				toast.error(err?.response?.data?.message || "Login failed")
			})
	}

	return (
		<>
			<section className="w-full min-h-screen  flex items-center justify-center bg-white">
				<form className="login card w-[300px] sm:w-[350px] md:w-[500px] xl:w-3/12 h-[700px] bg-black flex flex-col gap-4 items-center justify-start pt-10   shadow-2xl  rounded-lg ">
					<Image
						src={"/logo.webp"}
						alt="logo"
						width={200}
						height={200}
					/>
					<div className="w-full h-full flex flex-col  items-center pt-4 gap-4 justify-start">
						<div className="email bg-primary flex w-9/12 items-center h-14 rounded-full px-3 gap-2">
							<CiUser className="text-secondary text-2xl font-bold" />
							<input
								value={email}
								onChange={(e) => {
									setEmail(e.target.value)
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
									setPassword(e.target.value)
								}}
								value={password}
								type={passwordHidden ? "password" : "text"}
								className="bg-primary outline-none text-white w-full"
								placeholder="Password"
							/>
							<button
								className="text-secondary absolute right-4"
								onClick={HandlePasswordInput}
							>
								{passwordHidden ? <LuEye /> : <FaEyeSlash />}
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
						<button className="text-white font-bold">
							Sign Up
						</button>
					</div>
				</form>
			</section>
		</>
	)
}
