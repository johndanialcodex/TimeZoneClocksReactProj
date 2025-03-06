import { useState, useEffect, FC } from "react"
import { Clock } from "../../models/Clock"
import "./DigitalClock.css"
import ClockForm from "../Settings/ClockForm"

interface DigitalClockProps {
	clock: Clock
	isToggled: boolean
}
const DigitalClock: FC<DigitalClockProps> = ({
	clock,
	isToggled,
}) => {
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
		hour12: !isToggled,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	})

	return (
		<>
			<div className="digital-clock">
				<div className="digital-time">{formattedTime}</div>
			</div>
			<div className="city-name">{clock.city}</div>
			<div className="timeZone">{clock.timeZone}</div>
			<div className="utc-time">{clock.offsetTime}</div>
		</>
	)
}

export default DigitalClock
