import React, { useState, FC } from "react"
import { Clock } from "../../models/Clock"
import clocksData from "../../utils/clocksData"

interface ClockFormProps {
	clock: Clock
	onUpdateClock: (newClock: Clock) => void
}

const ClockForm: FC<ClockFormProps> = ({ clock, onUpdateClock }) => {
	const [timeZone, setTimeZone] = useState(clock.timeZone)
	const [isDigital, setIsDigital] = useState(clock.isDigital)

	const handleTimeZoneChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		const newTimeZone = e.target.value
		setTimeZone(newTimeZone)
		onUpdateClock({ ...clock, timeZone: newTimeZone })
	}

	const handleIsDigitalChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValue = e.target.checked
		setIsDigital(newValue)
		onUpdateClock({ ...clock, isDigital: newValue })
	}

	return (
		<div className="clock-form">
			<label>
				Time Zone:
				<select
					value={timeZone}
					onChange={handleTimeZoneChange}
				>
					{clocksData.map((tz) => (
						<option
							key={tz.id}
							value={tz.timeZone}
						>
							{tz.timeZone}
						</option>
					))}
				</select>
			</label>

			<label>
				Digital?
				<input
					type="checkbox"
					checked={isDigital}
					onChange={handleIsDigitalChange}
				/>
			</label>
		</div>
	)
}

export default ClockForm
