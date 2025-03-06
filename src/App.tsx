import { useState } from "react"
import { Clock } from "./models/Clock"
import "./App.css"
import clocksData from "./utils/clocksData"
import Clocks from "./components/Clock/Clocks"
import Settings from "./components/Settings/Settings"
import ResizeBar from "./components/Clock/resizeBar"
// import AnalogClock from "./AnalogClock"
// import ResizeBar from "./resizeBar"

function App() {
	const [clocks, setClocks] = useState<Clock[]>([])

	const addClock = (newClock: Clock) => {
		setClocks([...clocks, newClock])
	}

	const updateClock = (newClock: Clock, index: number) => {
		const newClocks = [...clocks]
		const newClockData = clocksData.find(
			(clockData) => newClock.timeZone === clockData.timeZone
		)
		newClocks[index] = {
			...newClockData!,
			isDigital: newClock.isDigital,
		}
		setClocks(newClocks)
	}

	const deleteClock = (indexToDelete: number) => {
		setClocks(clocks.filter((_, index) => index !== indexToDelete))
	}

	return (
		<>
		{/* <div className="resize-bar">
		<ResizeBar />
		</div> */}
		<h1 className="header">World Clocks</h1>
			<Settings
				clocks={clocks}
				addClock={addClock}
			/>
				{/* <ResizeBar /> */}
			<Clocks
				clocks={clocks}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</>
	)
}

export default App
