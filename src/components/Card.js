"use client";

import { useEffect, useState } from "react";

export default function OrderCard(props) {
  const [trade, setTrade] = useState([]);
  const { userid, token } = props;
 
  const FetchTrade = async () => {
    if (userid) {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/trade/${userid}`;
        console.log("url", url);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/trade/${userid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
     
        setTrade(data?.trades);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    FetchTrade();
  }, [userid]);

  return (
    <>
      {trade &&
        trade.map((item) => (
          <>
            <div
              key={item._id}
              className="w-full h-16 flex items-center text-left text-white px-2 border-b-[2px] pt-4 border-secondary rounded-lg"
            >
              <p className="w-[15%]"> {item?.updatedAt} </p>
              <p className="w-[10%]"> {item?.symbol} </p>
              <p className="w-[20%]"> {item?.CoinCode} </p>
              <p className="w-[10%]"> {item?.price} </p>
              <p className="w-[10%]"> $ -0.00 </p>
              <p className="w-[10%]"> -0.24% </p>
              <p className="w-[10%]"> {item?.type} </p>
              <p className="w-[10%]"> true </p>
              <p className="w-[10%]"> {item?.price}</p>
            </div>
          </>
        ))}
    </>
  );
}
