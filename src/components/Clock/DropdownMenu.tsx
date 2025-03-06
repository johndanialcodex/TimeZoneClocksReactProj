import { useState } from "react"

const timeZones: string[] = Intl.supportedValuesOf("timeZone")

const TimeZoneDropdown: React.FC = () => {
	const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
		Intl.DateTimeFormat().resolvedOptions().timeZone
	)

	const handleChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedTimeZone(event.target.value)
	}

	return (
		<div>
			<label htmlFor="timeZone">Select Time Zone:</label>
			<select
				id="timeZone"
				value={selectedTimeZone}
				onChange={handleChange}
			>
				{timeZones.map((zone) => (
					<option
						key={zone}
						value={zone}
					>
						{zone}
					</option>
				))}
			</select>
			<p>Selected Time Zone: {selectedTimeZone}</p>
		</div>
	)
}

export default TimeZoneDropdown
