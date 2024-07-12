"use client";
import Navbar from "../../components/Navbar";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaWallet } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';
import OrderCard from "../../components/Card";
import Script from "next/script";
import dynamic from 'next/dynamic';
 
  

const TradingViewWidget = dynamic(() => import('../../components/TradingView'), {
  ssr: false
});


export default function Trading() {
  const [isBuyModalVisible, setIsBuyModalVisible] = useState(false);
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [isSellModalVisisble, setIsSellModalVisible] = useState(false);
  const buyRef = useRef();
  const sortref = useRef();
  const sellRef = useRef();
  const [buyNow, setBuyNow] = useState(true);
  const [sortNow, setSortNow] = useState(true);
  const [buyAt, setBuyAt] = useState(true);
  const [sortAt, setSortAt] = useState(true);
  const [sellNowDiv, setsellNowDiv] = useState(true);
  const [sellSortDiv, setsellSortDiv] = useState(true);
  const [sellNow, setSellNow] = useState(true);
  const [sellAt, setSellAt] = useState(true);
  const[userId,setUserId]=useState('')
  const [selectedCoin, setSelectedCoin] = useState("BITSTAMP:BTCUSD");
  const [orderType,setOrderType]=useState('buynow')
  const [buyNowAmount, setBuyNowAmount] = useState('');
  const [buyAtPrice, setBuyAtPrice] = useState('');
  const [userdata,setUserData]=useState("")
  const [amountbalace,setAmountbalance]=useState("")


  
  


  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleOutsideClick = (e) => {
    if (buyRef.current && !buyRef.current.contains(e.target)) {
      setIsBuyModalVisible(false);
    }
    if (sortref.current && !sortref.current.contains(e.target)) {
      setIsSortModalVisible(false);
    }
    if (sellRef.current && !sellRef.current.contains(e.target)) {
      setIsSellModalVisible(false);
    }
  };
const token = Cookies.get('accessToken')


  const FetchUser = async ()=>{
    const response = await fetch('http://185.224.139.104:8080/users/single',{
      method:'POST',
       headers : {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
     
    })
    const data= await response.json();
   
    setAmountbalance(data?.user.accountBalance)
    console.log(data?.user.wallet?.balance)
    setUserData(data)
    setUserId(data?.user?._id)
  }
  
  useEffect(()=>{
    FetchUser()

  },[])





  useEffect(() => {
    if (isBuyModalVisible || isSortModalVisible || isSellModalVisisble) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isBuyModalVisible, isSortModalVisible, isSellModalVisisble]);

  const handleBuyNow = () => {
    setBuyNow(true);
    setBuyAt(true);
  };

  const handleBuyAt = () => {
    setBuyNow(false);
    setBuyAt(false);
  };

  const handleSortnow = () => {
    setSortNow(true);
    setSortAt(true);
  };

  const handleSortat = () => {
    setSortNow(false);
    setSortAt(false);
  };

  const HandleSellNow = () => {
    setSortNow(true);
    setSortAt(true);
  };
  
  const HandleSellAt = () => {
    setSortNow(false);
    setSortAt(false);
  };

  const HandleSellNowDiv = () => {
    setsellNowDiv(false);
    setsellSortDiv(true);
  };

  const HandleSellSortDiv = () => {
    setsellNowDiv(true);
    setsellSortDiv(false);
  };


  const handleOrderTypeChange = (e) => {
    setOrderType(e.target.value);
  };

  

  const handleBuyAmountChange = (e) => {
    setBuyNowAmount(e.target.value);
  };

  const handleBuyAtPriceChange = (e) => {
    setBuyAtPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (orderType === 'buyNow') {
    //   await callBuyNowAPI();
    // } else if (orderType === 'buyAt') {
    //   await callBuyAtAPI();
    // }
  };

  // const callBuyNowAPI = async () => {
  //   // Replace with actual API endpoint and request
  //   const response = await fetch('http://185.224.139.104:8080/trade/669057cb5ad0fbbcaa05de0e', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ amount:buyNowAmount,symbol:selectedCoin }),
  //   });

  //   if (response.ok) {
  //     console.log('Buy Now successful');
  //   } else {
  //     console.error('Buy Now failed');
  //   }
  // };

  // const callBuyAtAPI = async () => {
  //   // Replace with actual API endpoint and request
  //   const response = await fetch('/api/buy-at', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ amount: buyAmount, price: buyAtPrice }),
  //   });

  //   if (response.ok) {
  //     console.log('Buy At successful');
  //   } else {
  //     console.error('Buy At failed');
  //   }
  // };



  return (
    <>
    <Script src="https://s3.tradingview.com/tv.js" strategy="afterInteractive" />
      <section className="w-full h-full flex relative flex-col lg:flex-row">
        <div className="TradingGraph w-full lg:w-[70%] h-full ">
          <div id="tradingview-widget-container" className="h-[800px]">
            <TradingViewWidget symbol={selectedCoin} />
          </div>
        </div>
        <div className="SiderButtons w-full  lg:w-[30%] h-[800px] bg-black flex flex-col gap-4 items-center justify-start">
          <label htmlFor="1" className="text-xl text-white font-bold">
            Choose A Coin
          </label>
          <select
            value={selectedCoin}
            onChange={handleCoinChange}
            name="Coin"
            id="1"
            className="w-[60%] h-12 flex outline-none"
          >
            <option value="BITSTAMP:BTCUSD">Bitcoin</option>
            <option value="BINANCE:ETHUSDT">Ethereum</option>
            <option value="BINANCE:DOGEUSDT">Doge Coin</option>
            <option value="NASDAQ:TSLA">Tesla</option>
          </select>
          <div className="holdings w-[65%] h-[400px] border-2 shadow-md shadow-secondary border-secondary rounded-lg flex flex-col gap-10 items-start pl-4 justify-center">
            <div className="flex items-center gap-2">
              <LuCircleDollarSign className="text-2xl text-secondary" />
              <h1 className="font-bold text-2xl text-white">Total Assets : 0 </h1>
            </div>
            <div className="flex items-center gap-2">
              <FaWallet className="text-2xl text-secondary" />
              <h1 className="font-bold text-white text-2xl">Balance : {amountbalace} </h1>
            </div>
            <div className="flex items-center gap-2">
              <FaHouseUser className="text-2xl text-secondary" />
              <h1 className="font-bold text-white text-2xl">Holdings : 0 </h1>
            </div>
            <div className="flex items-center gap-2">
              <FaHouseUser className="text-2xl text-secondary" />
              <h1 className="font-bold text-white text-2xl">
                Sorted Holdings : 0
              </h1>
            </div>
          </div>
          <div className="buttons flex items-center gap-4">
            <button
              onClick={() => setIsBuyModalVisible(!isBuyModalVisible)}
              className="bg-secondary text-white font-bold px-5 py-3 rounded-lg"
            >
              Buy
            </button>
            <button
              onClick={() => setIsSortModalVisible(!isSortModalVisible)}
              className="bg-secondary text-white font-bold px-5 py-3 rounded-lg"
            >
              Sort
            </button>
            <button
              onClick={() => setIsSellModalVisible(!isSellModalVisisble)}
              className="bg-secondary text-white font-bold px-5 py-3 rounded-lg"
            >
              Sell
            </button>
          </div>
          <div>
            <button className="bg-secondary text-white font-bold px-5 py-3 rounded-lg mt-4">
              Reset
            </button>
          </div>
        </div>
      </section>
      <div className="w-full h-full bg-black pt-10 overflow-x-auto flex items-center justify-center pb-10">
        <div className="w-full sm:w-[90%] h-full flex flex-col gap-2  text-[8px] lg:text-[12px]">
          <h1 className="text-secondary text-xl font-bold text-center mt-2">
            ORDER TABLE
          </h1>
          <div className="w-full h-12 flex items-center text-left mt-4 text-white px-2 border-[2px] border-secondary rounded-lg">
            <p className="w-[15%]"> Time </p>
            <p className="w-[10%]"> Coin </p>
            <p className="w-[20%]"> CoinCode</p>
            <p className="w-[10%]"> Amount</p>
            <p className="w-[10%]"> Gains </p>
            <p className="w-[10%]"> Gains Percent </p>
            <p className="w-[10%]"> Type </p>
            <p className="w-[10%]"> Order </p>
            <p className="w-[10%]"> Completed Price At</p>
          </div>
         <OrderCard userid={userId} token={token}/>
        
        
        </div>
      </div>

      {isBuyModalVisible && (
      <div className="buy fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <form
          ref={buyRef}
          className="buycontent w-[300px] sm:w-[400px] lg:w-3/12 flex flex-col items-start pl-4 justify-center gap-10 h-[350px] bg-black border-2 border-secondary rounded-lg overflow-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white font-semibold">Buy Modal</h1>
          <div className="radio-inputs flex text-white items-center gap-4 font-semibold">
            <h1>Order Type:</h1>
            <label htmlFor="buyNow">Buy Now</label>
            <input
              value="buyNow"
              onChange={handleOrderTypeChange}
              type="radio"
              name="orderType"
              id="buyNow"
              checked={orderType === 'buyNow'}
            />
            <label htmlFor="buyAt">Buy At</label>
            <input
              value="buyAt"
              onChange={handleOrderTypeChange}
              type="radio"
              name="orderType"
              id="buyAt"
              checked={orderType === 'buyAt'}
            />
          </div>
          <div className="buy-amount flex text-white items-center gap-2">
            <h1>Buy Amount:</h1>
            <input
              type="number"
              className="w-[60%] h-8 outline-none text-black"
              placeholder="Quantity in ($)"
              value={buyNowAmount}
              onChange={handleBuyAmountChange}
            />
          </div>
          {orderType === 'buyAt' && (
            <div className="buy-at-price flex text-white items-center gap-2">
              <h1>Buy At Price:</h1>
              <input
                type="number"
                className="w-[60%] h-8 outline-none text-black"
                placeholder="Price"
                value={buyAtPrice}
                onChange={handleBuyAtPriceChange}
              />
            </div>
          )}
          <button className="bg-secondary text-white font-bold w-[100px] h-10 rounded-lg">
            Buy
          </button>
        </form>
      </div>
    )}



      {isSortModalVisible && (
        <div className="buy fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={sortref}
            className="buycontent w-[300px] sm:w-[400px] lg:w-3/12 flex flex-col items-start pl-4 justify-center gap-10 h-[350px] bg-black border-2 border-secondary rounded-lg overflow-auto"
          >
            <h1 className="text-white font-semibold">Sell Modal</h1>
            <div className="radio-inputs flex text-white items-center gap-4 font-semibold">
              <h1>Order Type:</h1>
              <label htmlFor="sortnow">Sort Now</label>
              <input
                value={sortNow}
                onChange={handleSortnow}
                type="radio"
                name="sortnow"
                id="sort"
              />
              <label htmlFor="sortat">Sort At</label>
              <input
                value={sortAt}
                onChange={handleSortat}
                type="radio"
                name="sortnow"
                id="sort"
              />
            </div>
            <div className="buy-amount flex text-white items-center gap-2">
              <h1>Sort Amount:</h1>
              <input
                type="number"
                className="w-[60%] h-8 outline-none"
                placeholder="Quantity in ($)"
              />
            </div>
            {!sortAt && (
              <div className="buy-at-price flex text-white items-center gap-2">
                <h1>Sort At Price: </h1>
                <input
                  type="number"
                  className="w-[60%] h-8 outline-none"
                  placeholder="Price"
                />
              </div>
            )}
            <button className="bg-secondary text-white font-bold w-[100px] h-10 rounded-lg">
              Sort
            </button>
          </div>
        </div>
      )}

      {isSellModalVisisble && (
        <div className="buy fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={sellRef}
            className="buycontent w-[300px] sm:w-[400px] lg:w-3/12 flex flex-col items-start pl-4 justify-center gap-10 h-[350px] bg-black border-2 border-secondary rounded-lg overflow-auto"
          >
            <div className="w-full flex items-center gap-4">
              <button
                className={` font-semibold hover:text-secondary hover:underline ${
                  sellNowDiv ? "text-white" : "text-secondary"
                }`}
                onClick={HandleSellNowDiv}
              >
                Sell Now
              </button>
              <button
                className={` font-semibold hover:text-secondary hover:underline ${
                  sellSortDiv ? "text-white" : "text-secondary"
                }`}
                onClick={HandleSellSortDiv}
              >
                Sell At
              </button>
            </div>

            {!sellNowDiv && (
              <>
                <div className="radio-inputs flex text-white items-center gap-4 font-semibold">
                  <h1>Order Type:</h1>
                  <label htmlFor="sortnow">Sort Now</label>
                  <input
                    value={sellNow}
                    onChange={HandleSellNow}
                    type="radio"
                    name="sellnow"
                    id="sort"
                  />
                  <label htmlFor="sortat">Sort At</label>
                  <input
                    value={sellAt}
                    onChange={HandleSellAt}
                    type="radio"
                    name="sellnow"
                    id="sort"
                  />
                </div>

                <div className="buy-amount flex text-white items-center gap-2">
                  <h1>Sell Amount:</h1>
                  <input
                    type="number"
                    className="w-[60%] h-8 outline-none"
                    placeholder="Quantity in ($)"
                  />
                </div>

                {!sortAt && (
                  <div className="buy-at-price flex text-white items-center gap-2">
                    <h1>Sell At Price:</h1>
                    <input
                      type="number"
                      className="w-[60%] h-8 outline-none"
                      placeholder="Price"
                    />
                  </div>
                )}
                <button className="bg-secondary text-white font-bold w-[100px] h-10 rounded-lg">
                  Sell
                </button>
              </>
            )}

            {!sellSortDiv && (
              <>
                <div className="radio-inputs flex text-white items-center gap-4 font-semibold">
                  <h1>Order Type:</h1>
                  <label htmlFor="sortnow">Sort Now</label>
                  <input
                    value={sellNow}
                    onChange={HandleSellNow}
                    type="radio"
                    name="sellnow"
                    id="sort"
                  />
                  <label htmlFor="sortat">Sort At</label>
                  <input
                    value={sellAt}
                    onChange={HandleSellAt}
                    type="radio"
                    name="sellnow"
                    id="sort"
                  />
                </div>

                <div className="buy-amount flex text-white items-center gap-2">
                  <h1>Sell Amount:</h1>
                  <input
                    type="number"
                    className="w-[60%] h-8 outline-none"
                    placeholder="Quantity in ($)"
                  />
                </div>
                {!sortAt && (
                  <div className="buy-at-price flex text-white items-center gap-2">
                    <h1>Sell At Sort Price:</h1>
                    <input
                      type="number"
                      className="w-[60%] h-8 outline-none"
                      placeholder="Price"
                    />
                  </div>
                )}
                <button className="bg-secondary text-white font-bold w-[100px] h-10 rounded-lg">
                  Sell Sort
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}