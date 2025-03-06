import { useState } from "react"
import { Clock } from "./models/Clock"
import "./App.css"
import clocksData from "./utils/clocksData"
import Clocks from "./components/Clock/Clocks"
import Settings from "./components/Settings/Settings"

function App() {

	const [clocks, setClocks] = useState<Clock[]>(clocksData)

  const addClock = () => {

  }
  
  const updateClock = (newClock: Clock, index: number) => {
    const newClocks = [...clocks]
    newClocks[index] = newClock
    setClocks(newClocks)
  }

  const deleteClock = (id: number) => {
    setClocks(clocks.filter(clock => clock.id !== id))
  }


	return (
		<>
      <Settings clocks={clocks} updateClock={updateClock} />
      <Clocks clocks={clocks} />
      {/* <DigitalClock /> */}
		</>
	)
}

export default App

/*
• Responsibilities:

• Ensure clocks update every second with setInterval.
*/
