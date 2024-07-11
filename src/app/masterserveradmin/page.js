"use client"

import { useState, useContext } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import { AppContext } from "../../context/context"

export default function Login() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const { dispatch } = useContext(AppContext)

	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async () => {
		const payload = {
			email: email,
			password: password
		}

		await axios
			.post(`${API_BASE_URL}/auth/loginAdmin`, payload)
			?.then((res) => {
				console.log(res)
				if (res?.status === 200) {
					toast?.success("Sign in successful!")
					dispatch({
						type: "SET_ACCESS_TOKEN",
						payload: res?.data?.accessToken
					})
					router?.push("/masterserveradmin/home")
				}
			})
			?.catch((err) => {
				console.log(err)
				toast?.error("Error!")
			})
	}

	return (
		<div className="h-screen w-screen bg-black flex flex-col gap-10 items-center justify-center">
			<p className="text-3xl font-semibold text-white">Login</p>
			<div className="w-[500px] p-10 rounded-xl flex flex-col items-center gap-10 bg-primary shadow-lg shadow-secondary">
				<div className="w-full flex flex-col gap-2">
					<p className="font-semibold text-secondary">Email:</p>
					<input
						className="w-full h-12 rounded-xl border px-3"
						type="email"
						placeholder="example@example.com"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
				</div>
				<div className="w-full flex flex-col gap-2">
					<p className="font-semibold text-secondary">Password:</p>
					<input
						className="w-full h-12 rounded-xl border px-3"
						type="password"
						placeholder="**********"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
				</div>
			</div>
			<button
				className="bg-secondary h-12 w-40 flex items-center justify-center text-white font-semibold rounded-lg shadow-xl"
				onClick={handleSubmit}
			>
				Submit
			</button>
		</div>
	)
}
