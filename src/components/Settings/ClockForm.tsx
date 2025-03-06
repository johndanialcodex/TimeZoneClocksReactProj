import { FC } from "react"
import { Clock } from "../../models/Clock"

interface ClockFormProps {
	clock: Clock
	onUpdateClock: (newClock: Clock) => void
}

const ClockForm: FC<ClockFormProps> = ({ clock, onUpdateClock }) => {
	return (
		<div>
			<div>Time Zone</div>
			<div>{clock.city}</div>

			<label
				className="checkbox"
				htmlFor="digital"
			>
				Digital
			</label>
			<input
				type="checkbox"
				id="digital"
				name="digital"
			/>
			<button>Delete</button>
		</div>
	)
}

export default ClockForm
