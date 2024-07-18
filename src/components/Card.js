export default function OrderCard(props) {
	const { trades } = props

	return (
		<>
			{trades &&
				trades.map((item) => (
					<div
						key={item._id}
						className="w-full h-16 flex items-center text-left text-white px-2 border-b-[2px] pt-4 border-secondary rounded-lg"
					>
						<p className="w-[15%]"> {item?.updatedAt} </p>
						<p className="w-[10%]"> {item?.symbol} </p>
						<p className="w-[20%]"> {item?.CoinCode} </p>
						<p className="w-[10%]"> {item?.amount} </p>
						<p className="w-[10%]"> {item ? item.gains : ""} </p>
						<p className="w-[10%]">
							{" "}
							{item ? item.gains_percent : ""}{" "}
						</p>
						<p className="w-[10%]"> {item?.type} </p>
						<p className="w-[10%]"> true </p>
						<p className="w-[10%]"> {item?.price}</p>
					</div>
				))}
		</>
	)
}
