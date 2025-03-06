import { useEffect, useState, FC } from "react"
import { Clock } from "../../models/Clock"
import "./analogClock.css"

interface AnalogClockProps {
	clock: Clock
}

const AnalogClock: FC<AnalogClockProps> = ({ clock }) => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: clock.timeZone,
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false,
	})
	const parts = formatter.formatToParts(time)
	const hours =
		Number(parts.find((part) => part.type === "hour")?.value) || 0
	const minutes =
		Number(parts.find((part) => part.type === "minute")?.value) || 0
	const seconds =
		Number(parts.find((part) => part.type === "second")?.value) || 0

	const hourAngle = (hours % 12) * 30 + minutes * 0.5
	const minuteAngle = minutes * 6
	const secondAngle = seconds * 6

	return (
		<div>
			<div className="clock">
				<div className="dot"></div>
				<div className="hour twelve">12</div>
				<div className="hour one">1</div>
				<div className="hour two">2</div>
				<div className="hour three">3</div>
				<div className="hour four">4</div>
				<div className="hour five">5</div>
				<div className="hour six">6</div>
				<div className="hour seven">7</div>
				<div className="hour eight">8</div>
				<div className="hour nine">9</div>
				<div className="hour ten">10</div>
				<div className="hour eleven">11</div>
				<div
					className="hour-hand"
					style={{ transform: `rotateZ(${hourAngle}deg)` }}
				></div>
				<div
					className="minute-hand"
					style={{ transform: `rotateZ(${minuteAngle}deg)` }}
				></div>
				<div
					className="second-hand"
					style={{ transform: `rotateZ(${secondAngle}deg)` }}
				></div>
			</div>
			<div className="analog-label">
				<div className="city-name">{clock.city}{" "+clock.flag}</div>
				<div className="timeZone">{clock.timeZone}</div>
				<div className="utc-time">{clock.offsetTime}</div>
			</div>
		</div>
	)
}

export default AnalogClock
