import React, { useState } from 'react';
import { Clock } from '../../types';

interface ClockFormProps {
  clock: Clock;
  updateClock: (id: number, updatedFields: Partial<Clock>) => void;
}

const ClockForm: React.FC<ClockFormProps> = ({ clock, updateClock }) => {
  const [timeZone, setTimeZone] = useState(clock.timeZone);
  const [isDigital, setIsDigital] = useState(clock.isDigital);

  const handleTimeZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTimeZone = e.target.value;
    setTimeZone(newTimeZone);
    updateClock(clock.id, { timeZone: newTimeZone });
  };

  const handleIsDigitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setIsDigital(newValue);
    updateClock(clock.id, { isDigital: newValue });
  };

  return (
    <div className="clock-form">
      <label>
        Time Zone:
        <select value={timeZone} onChange={handleTimeZoneChange}>
          <option value="America/Detroit">America/Detroit</option>
          <option value="Asia/Seoul">Asia/Seoul</option>
          <option value="Pacific/Tahiti">Pacific/Tahiti</option>
          <option value="Iceland">Iceland</option>
    
        </select>
      </label>

      <label>
        Digital?
        <input
          type="checkbox"
          checked={isDigital}
          onChange={handleIsDigitalChange}
        />
      </label>
    </div>
  );
};

export default ClockForm;
