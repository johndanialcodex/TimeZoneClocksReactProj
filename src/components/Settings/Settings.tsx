import React from 'react';
import { Clock } from '../../types';
import ClockForm from './ClockForm';
import './Settings.css';

interface SettingsProps {
  clocks: Clock[];
  updateClock: (id: number, updatedFields: Partial<Clock>) => void;
  addClock: () => void;
}

const Settings: React.FC<SettingsProps> = ({ clocks, updateClock, addClock }) => {
  return (
    <div className="settings">
      <h2>Settings</h2>

      {clocks.map((clock) => (
        <ClockForm
          key={clock.id}
          clock={clock}
          updateClock={updateClock}
        />
      ))}

      <button onClick={addClock}>Add Clock</button>
    </div>
  );
};

export default Settings;
