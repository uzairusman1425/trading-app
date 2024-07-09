import { CiUser } from "react-icons/ci"
import Image from "next/image"
import Link from "next/link"

export default function Login() {
	return (
		<>
			<section className="w-screen h-screen  flex items-center justify-center bg-white">
				<div className="login card w-[500px] h-[700px] bg-black flex flex-col gap-4 items-center justify-start pt-10   shadow-2xl  rounded-lg ">
					<Image
						src={"/logo.webp"}
						alt="logo"
						width={200}
						height={200}
					/>
					<div className="w-full h-full flex flex-col  items-center pt-4 gap-4 justify-start  ">
						<div className="username bg-primary flex w-9/12 items-center h-14 rounded-full px-2 gap-2  ">
							<CiUser className="text-secondary text-2xl font-bold" />
							<input
								type="text"
								className="bg-primary outline-none text-white"
								placeholder="Username"
							/>
						</div>
						<div className="username bg-primary flex w-9/12 items-center h-14 rounded-full px-2 gap-2  ">
							<CiUser className="text-secondary text-2xl font-bold" />
							<input
								type="password"
								className="bg-primary outline-none text-white"
								placeholder="Password"
							/>
						</div>
						<Link href={""} className="text-gray-400">
							Forget Your Password?
						</Link>
						<button className="w-[250px] h-[40px] rounded-full bg-secondary text-white font-bold">
							Log In
						</button>
						<button className="text-white font-bold">
							Sign Up
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
