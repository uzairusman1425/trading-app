"use client"

import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import axios from "axios"
import toast from "react-hot-toast"
import Switch from "react-switch"
import { AppContext } from "../../../../context/context"

export default function UserTrades({ params }) {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

	const router = useRouter()

	const { state } = useContext(AppContext)

	const [breached, setBreached] = useState(false)
	const [trades, setTrades] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get(`${API_BASE_URL}/users/${params?.slug}`, {
					headers: {
						Authorization: `Bearer ${state?.accessToken}`
					}
				})
				?.then((res) => {
					console.log(res)
					setTrades(res?.data?.user?.trades)
					setBreached(
						res?.data?.user?.status === "active" ? true : false
					)
				})
				?.catch((err) => {
					console.error(err)
				})
		})()
	}, [state, params, API_BASE_URL])

	const updateStatus = async (checked) => {
		setBreached(checked)

		const payload = {
			status: breached ? "deactivated" : "active"
		}

		await axios
			.put(
				`${API_BASE_URL}/users/updateStatus/${params?.slug}`,
				payload,
				{
					headers: {
						Authorization: `Bearer ${state?.accessToken}`
					}
				}
			)
			?.then((res) => {
				console.log(res)
				setBreached(res?.data?.user?.status === "active" ? true : false)
				toast?.success(res?.data?.message)
			})
			?.catch((err) => {
				console.error(err)
			})
	}

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
								onChange={updateStatus}
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
										{item?.symbol}
									</p>
									<p className="text-white text-sm truncate text-center w-[15%]">
										{item?.amount}
									</p>
									<p className="text-white text-sm truncate text-center w-[15%]">
										${item?.price}
									</p>
									<p className="text-white text-sm truncate text-center w-[10%]">
										{item?.type}
									</p>
									<div className="flex items-center justify-center w-[15%]">
										<button
											className="h-6 w-16 rounded bg-white text-secondary text-xs flex items-center justify-center"
											onClick={async () => {
												await axios
													.delete(
														`${API_BASE_URL}/trade/${params?.slug}/${item?._id}`,
														{
															headers: {
																Authorization: `Bearer ${state?.accessToken}`
															}
														}
													)
													?.then((res) => {
														console.log(res)
														setTrades(
															res?.data?.trades
														)
														toast?.success(
															res?.data?.message
														)
													})
													?.catch((err) => {
														console.error(err)
													})
											}}
										>
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
