"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

export default function EditUser({ params }) {
	const router = useRouter()

	return (
		<div className="h-screen w-screen bg-primary flex flex-col">
			<div className="h-32 w-full bg-black shadow-xl gap-10 px-5 flex items-center">
				<Image src={"/logo.webp"} alt="logo" height={100} width={100} />
			</div>
			<div className="flex-1 flex flex-col gap-10 p-10">
				<div className="flex flex-row items-center justify-between w-full">
					<p className="text-3xl font-semibold text-secondary">
						Edit User
					</p>
					<button className="h-12 w-40 flex items-center justify-center rounded-xl bg-secondary text-white font-semibold">
						Delete
					</button>
				</div>
				<div className="w-full grid grid-cols-4 place-items-center gap-10">
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Full Name</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="text"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Email</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="text"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Password</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="text"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Server</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="text"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-secondary text-lg">Balance</p>
						<input
							className="h-10 w-72 rounded-lg px-3"
							type="number"
						/>
					</div>
				</div>
				<div className="flex flex-row items-center justify-end gap-10 w-full">
					<button className="h-12 w-40 flex items-center justify-center rounded-xl bg-secondary text-white font-semibold">
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
