import { FC } from "react"
import { Clock } from "../../models/Clock"
// import ClockForm from "./ClockForm"
import "./Settings.css"
import AddClockForm from "./AddClockForm"

interface SettingsProps {
	clocks: Clock[]
	addClock: (newClock: Clock) => void
	// updateClock: (newClock: Clock, index: number) => void
	// deleteClock: (indexToDelete: number) => void
}

const Settings: FC<SettingsProps> = ({
	clocks,
	addClock,
	// updateClock,
	// deleteClock
}) => {
	return (
		<div className="settings-form">
			<h2 className="settings">Add A New Time Zone</h2>

			<AddClockForm
				clocks={clocks}
				onAddClock={addClock}
			/>
			{/* {clocks.map((clock, index) => (
				<ClockForm
					key={clock.id}
					clock={clock}
                    onUpdateClock={(newClock: Clock) =>
                        updateClock(newClock, index)
                    }
					onDeleteClock={() => deleteClock(index)}
				/>
			))} */}
		</div>
	)
}

export default Settings
