import Navbar from "../../components/Navbar"

export default function  TradingLayout({children}){
    return(
        <>
        
        <Navbar/>
        {children}
        <script
        type="text/javascript"
        src="https://s3.tradingview.com/tv.js"
      ></script>
        </>
    )
}