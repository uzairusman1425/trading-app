import Image from "next/image"
import { HomeIcon } from "@heroicons/react/24/solid"

export default function Home() {
	return (
		<div className="h-screen w-screen bg-primary flex flex-col">
			<div className="h-32 w-full bg-black shadow-xl gap-10 px-5 flex items-center">
				<Image src={"/logo.webp"} alt="logo" height={100} width={100} />
			</div>
			<div className="flex-1 p-10">
				<p className="text-3xl font-semibold text-secondary">
					All Users
				</p>
			</div>
		</div>
	)
}
