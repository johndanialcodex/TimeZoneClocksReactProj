import { useState } from "react"
import { Clock } from "./models/Clock"
import "./App.css"
import clocksData from "./utils/clocksData"
import Clocks from "./components/Clock/Clocks"
import Settings from "./components/Settings/Settings"

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
			<h1 className="header">World Clocks 🌍</h1>
			<Settings
				clocks={clocks}
				addClock={addClock}
			/>
			<Clocks
				clocks={clocks}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</>
	)
}

export default App
