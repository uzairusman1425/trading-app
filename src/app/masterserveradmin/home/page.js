"use client"

import { useContext } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { EyeIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import { AppContext } from "../../../context/context"

export default function Home() {
	const router = useRouter()

	const { state } = useContext(AppContext)

	const users = [
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		},
		{
			fullName: "John Doe",
			email: "john@example.com",
			password: "123456789",
			server: "192.16.1.1",
			balance: 500
		}
	]

	console.log(state?.accessToken)

	return (
		<div className="h-screen w-screen bg-primary flex flex-col">
			<div className="h-32 w-full bg-black shadow-xl gap-10 px-5 flex items-center">
				<Image src={"/logo.webp"} alt="logo" height={100} width={100} />
			</div>
			<div className="flex-1 flex flex-col gap-5 p-10">
				<div className="flex flex-row items-center justify-between w-full">
					<p className="text-3xl font-semibold text-secondary">
						All Users
					</p>
					<button
						className="h-12 w-40 flex items-center justify-center rounded-xl bg-secondary text-white font-semibold"
						onClick={() => {
							router?.push("/masterserveradmin/add-user")
						}}
					>
						Add
					</button>
				</div>
				<div className="max-h-[70vh] flex-1 flex flex-col gap-5 border border-secondary rounded-xl py-5">
					<div className="w-full flex flex-row items-center justify-evenly">
						<p className="text-white text-lg font-semibold text-center w-[15%]">
							Full Name
						</p>
						<p className="text-white text-lg font-semibold text-center w-[30%]">
							Email
						</p>
						<p className="text-white text-lg font-semibold text-center w-[10%]">
							Password
						</p>
						<p className="text-white text-lg font-semibold text-center w-[10%]">
							Server
						</p>
						<p className="text-white text-lg font-semibold text-center w-[10%]">
							Balance
						</p>
						<p className="text-white text-lg font-semibold text-center w-[10%]">
							Actions
						</p>
					</div>
					<div className="h-[1px] w-full bg-secondary" />
					<div className="flex-1 flex flex-col gap-5 py-5 overflow-y-auto scrollbar-none">
						{users?.map((item, key) => {
							return (
								<div
									className="w-full flex flex-row items-center justify-evenly"
									key={key}
								>
									<p className="text-white text-sm truncate text-center w-[15%]">
										{item?.fullName}
									</p>
									<p className="text-white text-sm truncate text-center w-[30%]">
										{item?.email}
									</p>
									<p className="text-white text-sm truncate text-center w-[10%]">
										{item?.password}
									</p>
									<p className="text-white text-sm truncate text-center w-[10%]">
										{item?.server}
									</p>
									<p className="text-white text-sm truncate text-center w-[10%]">
										${item?.balance}
									</p>
									<div className="flex flex-row gap-2 items-center justify-center w-[10%]">
										<button
											onClick={() => {
												router?.push(
													`/masterserveradmin/user-trades/${key}`
												)
											}}
										>
											<EyeIcon className="size-5 text-secondary" />
										</button>
										<button
											onClick={() => {
												router?.push(
													`/masterserveradmin/edit-user/${key}`
												)
											}}
										>
											<PencilSquareIcon className="size-5 text-secondary" />
										</button>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
