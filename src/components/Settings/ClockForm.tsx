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

	const [isToggled, setIsToggled] = useState(false)

	const toggle = () => setIsToggled((prev) => !prev)

	return (
		<div>
		<div className="clock-settings">
			{/* <label>
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
			</label> */}

			<label className="digital-check">
				Digital?
				<input
					type="checkbox"
					checked={isDigital}
					onChange={handleIsDigitalChange}
				/>
			</label>
				<div>
			<button className="hour-toggle" onClick={toggle}>{isToggled ? "12HR" : "24HR"}</button>

			<button className="delete-btn" onClick={onDeleteClock}>Delete</button>
			</div>
		</div>
		</div>
	)
}

export default ClockForm
