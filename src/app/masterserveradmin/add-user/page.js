"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import axios from "axios"
import toast from "react-hot-toast"

export default function AddUser() {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const router = useRouter()

	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [server, setServer] = useState("")
	const [balance, setBalance] = useState(0)

	const handleSubmit = async () => {
		const payload = {
			email: email,
			password: password,
			server: server,
			fullName: fullName,
			accountBalance: balance
		}

		await axios
			.post(`${API_BASE_URL}/auth/register`, payload)
			?.then((res) => {
				console.log(res)
				if (res?.status === 200) {
					toast?.success("User created successfully!")
					router?.back()
				}
			})
			?.catch((err) => {
				console.log(err)
				toast?.error("Error!")
			})
	}

	return (
		<div className="h-screen w-screen bg-primary flex flex-col">
			<div className="h-32 w-full bg-black shadow-xl gap-10 px-5 flex items-center">
				<Image src={"/logo.webp"} alt="logo" height={100} width={100} />
			</div>
			<div className="flex-1 flex flex-col gap-10 p-10">
				<p className="text-3xl font-semibold text-secondary">
					Add User
				</p>
				<div className="w-full grid grid-cols-4 place-items-center gap-10">
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Full Name</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="text"
							value={fullName}
							onChange={(e) => {
								setFullName(e.target.value)
							}}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Email</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value)
							}}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Password</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Server</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="text"
							value={server}
							onChange={(e) => {
								setServer(e.target.value)
							}}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Balance</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="number"
							value={balance}
							onChange={(e) => {
								setBalance(e.target.value)
							}}
						/>
					</div>
				</div>
				<div className="flex flex-row items-center justify-end gap-10 w-full">
					<button
						className="h-12 w-40 flex items-center justify-center rounded-xl bg-secondary text-white font-semibold"
						onClick={handleSubmit}
					>
						Save
					</button>
					<button
						className="h-12 w-40 flex items-center justify-center rounded-xl bg-white text-secondary font-semibold"
						onClick={() => {
							router?.back()
						}}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}
