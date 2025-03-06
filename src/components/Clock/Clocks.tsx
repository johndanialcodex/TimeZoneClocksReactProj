import { FC } from "react"
import { Clock } from "../../models/Clock"
import "./Clocks.css"
import ClockDisplay from "./ClockDisplay"

interface ClocksProps {
	clocks: Clock[]
	updateClock: (newClock: Clock, index: number) => void
	deleteClock: (indexToDelete: number) => void
}

const Clocks: FC<ClocksProps> = ({
	clocks,
	updateClock,
	deleteClock,
}) => {
	return (
		<>
			<div className="clocks-wrapper">
				{clocks.map((clock, index) => (
					<ClockDisplay
						key={clock.id}
						clock={clock}
						onUpdateClock={(newClock: Clock) =>
							updateClock(newClock, index)
						}
						onDeleteClock={() => deleteClock(index)}
					/>
				))}
			</div>
		</>
	)
}

export default Clocks
