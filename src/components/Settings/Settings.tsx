import { FC } from "react"
import { Clock } from "../../models/Clock"
import ClockForm from "./ClockForm"

interface SettingsProps {
	clocks: Clock[]
	updateClock: (newClock: Clock, index: number) => void
}

const Settings: FC<SettingsProps> = ({ clocks, updateClock }) => {
	return (
		<>
			{clocks.map((clock, index) => {
				return (
					<ClockForm
						key={clock.id}
						clock={clock}
						onUpdateClock={(newClock: Clock) =>
							updateClock(newClock, index)
						}
					/>
				)
			})}
		</>
	)
}

export default Settings
