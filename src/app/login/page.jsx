import { CiUser } from "react-icons/ci";
import Logo from '../../../public/logo.webp'
import Image from "next/image";
import Link from "next/link";



export default function(){
    return(
        <>
        <section className="w-screen h-screen  flex items-center justify-center bg-white">
            <div className="login card w-[500px] h-[700px] bg-[#1d1d27] flex flex-col gap-4 items-center justify-start pt-10   shadow-2xl  rounded-lg ">
                <Image src={Logo} width={200} height={200}/>
              <div className="w-full h-full flex flex-col  items-center pt-4 gap-4 justify-start  ">
              <div className="username bg-[#2a293b] flex w-9/12 items-center h-14 rounded-full px-2 gap-2  ">
                    <CiUser className="text-[#662946] text-2xl font-bold"/>
                    <input type="text" className="bg-[#2a293b] outline-none text-white"  placeholder="Username"/>
                </div>
                <div className="username bg-[#2a293b] flex w-9/12 items-center h-14 rounded-full px-2 gap-2  ">
                    <CiUser className="text-[#662946] text-2xl font-bold"/>
                    <input type="password" className="bg-[#2a293b] outline-none text-white"  placeholder="Password"/>
                </div>
                <Link href={''} className="text-gray-400">Forget Your Password?</Link>
                <button className="w-[250px] h-[40px] rounded-full bg-[#ca2a5c] text-white font-bold">Log In</button>
                <button className="text-white font-bold">Sign Up</button>

              </div>
            </div>

        </section>
        </>
    )
}