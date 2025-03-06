import React, { useState, FC } from "react"
import { Clock } from "../../models/Clock"
// import { timeZonesList } from "../../utils/clocksData"
import "./ClockForm.css"

interface ClockFormProps {
	clock: Clock
	onUpdateClock: (newClock: Clock) => void
	onDeleteClock: () => void
	is12hr: boolean
	on12hrToggle: () => void
}

const ClockForm: FC<ClockFormProps> = ({
	clock,
	onUpdateClock,
	onDeleteClock,
	is12hr,
	on12hrToggle,
}) => {
	const [isDigital, setIsDigital] = useState(clock.isDigital)

	const handleIsDigitalChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValue = e.target.checked
		setIsDigital(newValue)
		onUpdateClock({ ...clock, isDigital: newValue })
	}

	return (
		<div>
			<div className="clock-settings">
				<label className="checkbox">
					Digital?
					<input
						className="digital-check"
						type="checkbox"
						checked={isDigital}
						onChange={handleIsDigitalChange}
					/>
				</label>
				<div>
					{isDigital && (
						<button
							className="hour-toggle"
							onClick={on12hrToggle}
						>
							{is12hr ? "24HR" : "12HR"}
						</button>
					)}

					<button
						className="delete-btn"
						onClick={onDeleteClock}
					>
						DELETE
					</button>
				</div>
			</div>
		</div>
	)
}

export default ClockForm
