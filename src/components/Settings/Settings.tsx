import { FC } from "react"
import { Clock } from "../../models/Clock"
// import ClockForm from "./ClockForm"
import "./Settings.css"
import AddClockForm from "./AddClockForm"

interface SettingsProps {
	clocks: Clock[]
	addClock: (newClock: Clock) => void
}

const Settings: FC<SettingsProps> = ({ clocks, addClock }) => {
	return (
		<div className="settings-form">
			<h2 className="settings-title">Add A New Time Zone</h2>

			<AddClockForm
				clocks={clocks}
				onAddClock={addClock}
			/>
		</div>
	)
}

export default Settings
