import { useState, useEffect, FC } from "react"
import { Clock } from "../../models/Clock"
import "./DigitalClock.css"

interface DigitalClockProps {
	clock: Clock
	is12hr: boolean
}
const DigitalClock: FC<DigitalClockProps> = ({ clock, is12hr }) => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	const formattedTime = time.toLocaleTimeString("en-US", {
		timeZone: clock.timeZone,
		hour12: is12hr,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	})

	return (
		<>
			<div className="digital-clock">
				<div className="digital-time">{formattedTime}</div>
			</div>
			<div className="city-name">
				{clock.city}
				{" " + clock.flag}
			</div>
			<div className="timeZone">{clock.timeZone}</div>
			<div className="utc-time">{clock.offsetTime}</div>
		</>
	)
}

export default DigitalClock
