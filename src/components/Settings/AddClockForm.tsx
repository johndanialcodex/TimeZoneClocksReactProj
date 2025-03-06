import React, { useState, FC } from "react"
import { Clock } from "../../models/Clock"
import clocksData, { timeZonesList } from "../../utils/clocksData"

const AddClockForm: FC<{
	onAddClock: (newClock: Clock) => void
	clocks: Clock[]
}> = ({ onAddClock, clocks }) => {
	const [timeZone, setTimeZone] = useState("")
	const [isDigital, setIsDigital] = useState(false)

	const unusedTimeZonesList = timeZonesList.filter(
		(timezone) => !clocks.find((clock) => clock.timeZone === timezone)
	)

	const handleTimeZoneChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		const newTimeZone = e.target.value
		setTimeZone(newTimeZone)
	}

	const handleIsDigitalChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValue = e.target.checked
		setIsDigital(newValue)
	}

	const handleAddClock = () => {
		const clockData = clocksData.find(
			(clockData) => timeZone === clockData.timeZone
		)
		if (!clockData) throw new Error("timeZone not found")

		const newClock: Clock = {
			id: clockData.id!,
			timeZone,
			isDigital,
			offsetTime: clockData.offsetTime,
			city: clockData.city,
			flag: clockData.flag,
		}
		onAddClock(newClock)
		setTimeZone("")
		setIsDigital(false)
	}

	return (
		<div className="add-clock-settings">
			<label>
				<select
					className="timezone-dropdown"
					value={timeZone}
					onChange={handleTimeZoneChange}
				>
					<option
						value=""
						disabled
						selected
					>
						Select a timezone...
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

			<label className="add-digital-check">
				Digital?
				<input
					type="checkbox"
					checked={isDigital}
					onChange={handleIsDigitalChange}
				/>
			</label>

			<button
				className="add-btn"
				onClick={handleAddClock}
				disabled={!timeZone.length}
			>
				ADD CLOCK
			</button>
		</div>
	)
}

export default AddClockForm
