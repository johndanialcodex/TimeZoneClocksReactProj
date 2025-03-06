import { FC } from "react";
import { Clock } from "../../models/Clock";
import DigitalClock from "./DigitalClock";
import ClockForm from "../Settings/ClockForm";
import "./Clocks.css";
import AnalogClock from "../../AnalogClock";

interface ClocksProps {
	clocks: Clock[];
	updateClock: (newClock: Clock, index: number) => void;
 	deleteClock: (indexToDelete: number) => void;
}

const Clocks: FC<ClocksProps> = ({
	clocks,
	updateClock,
	deleteClock,
}) => {
	return (
		<>
      		{clocks.map((clock, index) => (
        		<div className="clock-form-container" key={clock.id}>
          	{clock.isDigital ? (
            	<DigitalClock clock={clock} />
          	) : (
            	<AnalogClock clock={clock} />
          	)}
          	<ClockForm
           	 	clocks={clocks}
            	clock={clock}
            	onUpdateClock={(newClock: Clock) => updateClock(newClock, index)}
            	onDeleteClock={() => deleteClock(index)}
          	/>
        	</div>
    	))}
    	</>
	);
};

export default Clocks;

