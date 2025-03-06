import { FC } from "react"
import { Clock } from "../../models/Clock"
import DigitalClock from "./DigitalClock"

const Clocks: FC<{ clocks: Clock[] }> = ({ clocks }) => {
	return (
		<>
			{clocks.map((clock) => (
				<DigitalClock
					key={clock.id}
					clock={clock}
				/>
			))}
		</>
	)
}

export default Clocks
