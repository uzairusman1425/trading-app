import Navbar from "../../components/Navbar"
import TradingViewScript from "../../components/Script"

export default function  TradingLayout({children}){
    return(
        <>
        
        <Navbar/>
        {children}
       <TradingViewScript/>
        </>
    )
}