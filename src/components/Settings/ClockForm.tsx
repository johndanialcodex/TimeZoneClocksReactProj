import React, { useState, FC } from "react"
import { Clock } from "../../models/Clock"
import { timeZonesList } from "../../utils/clocksData"
import "./ClockForm.css"

interface ClockFormProps {
	clock: Clock
	onUpdateClock: (newClock: Clock) => void
	onDeleteClock: () => void
	clocks: Clock[]
}

const ClockForm: FC<ClockFormProps> = ({
	clock,
	onUpdateClock,
	onDeleteClock,
	clocks,
}) => {
	const [timeZone, setTimeZone] = useState(clock.timeZone)
	const [isDigital, setIsDigital] = useState(clock.isDigital)
	const unusedTimeZonesList = timeZonesList.filter(
		(timezone) =>
			clocks.findIndex((clock) => clock.timeZone === timezone) === -1
	)

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
		<div className="add-clock-form">
			<label>
				Time Zone:
				<select
					value={timeZone}
					onChange={handleTimeZoneChange}
				>
					<option
						value={timeZone}
						selected
					>
						{timeZone}
					</option>
					{unusedTimeZonesList.map((timezone) => (
						<option
							key={timezone}
							value={timezone}
						>
							{timezone}
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
			<button onClick={onDeleteClock}>Delete</button>
		</div>
	)
}

export default ClockForm
