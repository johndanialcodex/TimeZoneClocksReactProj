import { FC, useState } from "react"
import { Clock } from "../../models/Clock"
import AnalogClock from "./AnalogClock"
import DigitalClock from "./DigitalClock"
import ClockForm from "../Settings/ClockForm"

const ClockDisplay: FC<{
	clock: Clock
	onUpdateClock: (newClock: Clock) => void
	onDeleteClock: () => void
}> = ({ clock, onUpdateClock, onDeleteClock }) => {
	const [is12hr, setIs12hr] = useState(true)

	const handle12hrToggle = () => {
		setIs12hr((prev) => !prev)
	}
	return (
		<div
			className="clock-form-container"
			key={clock.id}
		>
			{clock.isDigital ? (
				<DigitalClock
					clock={clock}
					is12hr={is12hr}
				/>
			) : (
				<AnalogClock clock={clock} />
			)}
			<ClockForm
				clock={clock}
				onUpdateClock={(newClock: Clock) => onUpdateClock(newClock)}
				onDeleteClock={onDeleteClock}
				is12hr={is12hr}
				on12hrToggle={handle12hrToggle}
			/>
		</div>
	)
}

export default ClockDisplay
