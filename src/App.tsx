import { useState } from "react"
import { Clock } from "./models/Clock"
import "./App.css"
import clocksData from "./utils/clocksData"
import Clocks from "./components/Clock/Clocks"
import Settings from "./components/Settings/Settings"
import AnalogClock from "./AnalogClock"
import ResizeBar from "./resizeBar"

function App() {
	const [clocks, setClocks] = useState<Clock[]>(clocksData)

	const addClock = () => {}

	const updateClock = (newClock: Clock, index: number) => {
		const newClocks = [...clocks]
		newClocks[index] = newClock
		setClocks(newClocks)
	}

	const deleteClock = (id: number) => {
		setClocks(clocks.filter((clock) => clock.id !== id))
	}

	return (
		<>
			<AnalogClock />
			<ResizeBar />
			<Settings
				clocks={clocks}
				updateClock={updateClock}
				addClock={addClock}
			/>
			<Clocks clocks={clocks} />
			{/* <DigitalClock /> */}
		</>
	)
}

export default App
