"use client"

import { useRef, useEffect } from "react"
import { createChart, ColorType } from "lightweight-charts"

export default function ChartComponent(props) {
	const {
		data,
		colors: {
			backgroundColor = "black",
			lineColor = "#2962FF",
			textColor = "#ca2a5c",
			areaTopColor = "#2962FF",
			areaBottomColor = "rgba(41, 98, 255, 0.28)"
		} = {}
	} = props

	const chartContainerRef = useRef()

	useEffect(() => {
		const handleResize = () => {
			chart.applyOptions({ width: chartContainerRef.current.clientWidth })
		}

		const chart = createChart(chartContainerRef.current, {
			layout: {
				background: { type: ColorType.Solid, color: backgroundColor },
				textColor
			},
			width: chartContainerRef.current.clientWidth,
			height: 800
		})

		// Create the Main Series (Candlesticks)
		const mainSeries = chart.addCandlestickSeries()
		// Set the data for the Main Series
		mainSeries.setData(data)

		chart.timeScale().fitContent()

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)

			chart.remove()
		}
	}, [
		data,
		backgroundColor,
		lineColor,
		textColor,
		areaTopColor,
		areaBottomColor
	])

	return <div ref={chartContainerRef} />
}
