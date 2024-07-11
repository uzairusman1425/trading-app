"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Switch from "react-switch"

export default function UserTrades({ params }) {
	const router = useRouter()

	const [breached, setBreached] = useState(false)

	const trades = [
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		},
		{
			name: "BTC",
			quantity: 1.0023,
			totalPrice: 150,
			status: "open"
		}
	]

	return (
		<div className="h-screen w-screen bg-primary flex flex-col">
			<div className="h-32 w-full bg-black shadow-xl gap-10 px-5 flex items-center">
				<Image src={"/logo.webp"} alt="logo" height={100} width={100} />
			</div>
			<div className="flex-1 flex flex-col gap-5 p-10">
				<div className="flex flex-row items-center justify-between w-full">
					<p className="text-3xl font-semibold text-secondary">
						All Trades
					</p>
					<div className="flex flex-row items-center gap-5">
						<div className="flex flex-row items-center gap-3">
							<Switch
								checkedIcon={false}
								uncheckedIcon={false}
								onColor="#ca2a5c"
								height={20}
								width={35}
								onChange={(checked) => {
									setBreached(checked)
								}}
								checked={breached}
							/>
							<p className="text-secondary">Breached</p>
						</div>
						<button
							className="h-12 w-40 flex items-center justify-center rounded-xl bg-secondary text-white font-semibold"
							onClick={() => {
								router?.back()
							}}
						>
							Back
						</button>
					</div>
				</div>
				<div className="max-h-[70vh] flex-1 flex flex-col gap-5 border border-secondary rounded-xl py-5">
					<div className="w-full flex flex-row items-center justify-evenly">
						<p className="text-white text-lg font-semibold text-center w-[30%]">
							Token Name
						</p>
						<p className="text-white text-lg font-semibold text-center w-[15%]">
							Quantity
						</p>
						<p className="text-white text-lg font-semibold text-center w-[15%]">
							Total Price
						</p>
						<p className="text-white text-lg font-semibold text-center w-[10%]">
							Status
						</p>
						<p className="text-white text-lg font-semibold text-center w-[15%]">
							Actions
						</p>
					</div>
					<div className="h-[1px] w-full bg-secondary" />
					<div className="flex-1 flex flex-col gap-5 py-5 overflow-y-auto scrollbar-none">
						{trades?.map((item, key) => {
							return (
								<div
									className="w-full flex flex-row items-center justify-evenly"
									key={key}
								>
									<p className="text-white text-sm truncate text-center w-[30%]">
										{item?.name}
									</p>
									<p className="text-white text-sm truncate text-center w-[15%]">
										{item?.quantity}
									</p>
									<p className="text-white text-sm truncate text-center w-[15%]">
										${item?.totalPrice}
									</p>
									<p className="text-white text-sm truncate text-center w-[10%]">
										{item?.status}
									</p>
									<div className="flex items-center justify-center w-[15%]">
										<button className="h-6 w-16 rounded bg-white text-secondary text-xs flex items-center justify-center">
											Delete
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
