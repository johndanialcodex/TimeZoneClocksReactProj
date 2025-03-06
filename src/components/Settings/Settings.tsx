import { FC } from "react"
import { Clock } from "../../models/Clock"
import ClockForm from "./ClockForm"
import "./Settings.css"

interface SettingsProps {
	clocks: Clock[]
	updateClock: (newClock: Clock, index: number) => void
    addClock: () => void
}

const Settings: FC<SettingsProps> = ({
	clocks,
	updateClock,
	addClock,
}) => {
	return (
		<div className="settings">
			<h2>Settings</h2>

			{clocks.map((clock, index) => (
				<ClockForm
					key={clock.id}
					clock={clock}
                    onUpdateClock={(newClock: Clock) =>
                        updateClock(newClock, index)
                    }
				/>
			))}

			<button onClick={addClock}>Add Clock</button>
		</div>
	)
}

export default Settings
