import Image from "next/image";
export default function Navbar(){
    return(
        <>
         <div className="navbar w-full h-28 bg-black flex items-center gap-4 justify-center">
            <Image src={"/logo.webp"} alt="logo" width={100} height={100} />
            <h1 className="font-bold text-xl text-white">LASER TRADER</h1>

            </div>
        </>
    )
}