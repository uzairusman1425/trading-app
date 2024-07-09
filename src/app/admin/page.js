"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = () => {
		router?.push("/admin/home")
	}

	return (
		<div className="h-screen w-screen bg-sky-50 flex flex-col gap-10 items-center justify-center">
			<p className="text-3xl font-semibold">Login</p>
			<div className="w-[500px] p-10 border border-sky-500 rounded-xl flex flex-col items-center gap-10 bg-white shadow-xl">
				<div className="w-full flex flex-col gap-2">
					<p className="font-semibold">Email:</p>
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
					<p className="font-semibold">Password:</p>
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
				className="bg-sky-500 h-12 w-40 flex items-center justify-center text-white font-semibold rounded-lg shadow-xl"
				onClick={handleSubmit}
			>
				Submit
			</button>
		</div>
	)
}
