import Navbar from "../../components/Navbar";
import Script from "next/script";

export default function TradingLayout({ children }) {
  return (
    <>
 
        <section className="w-full h-full">
         
          <Script
            src="https://s3.tradingview.com/tv.js"
            strategy="beforeInteractive"
          />
           <Navbar />
           {children}
        </section>
   
    </>
  );
}
