export interface TempState {
	celsius: number;
	fahrenheit: number;
	kelvin: number;
}

export const initialTemps: TempState = {
	celsius: 0,
	fahrenheit: 0,
	kelvin: 0
};

export type Actions =
	| { type: 'convert_celsius'; payload: number }
	| { type: 'convert_fahrenheit'; payload: number }
	| { type: 'convert_kelvin'; payload: number }
	| { type: 'reset_temps' };

export const tempReducer = (state: TempState, action: Actions): TempState => {
	switch (action.type) {
		case 'convert_celsius':
			return {
				...state,
				celsius: +action.payload,
				fahrenheit: +(+action.payload * 1.8 + 32).toFixed(2),
				kelvin: +(+action.payload + 273.15).toFixed(2)
			};

		case 'convert_fahrenheit':
			return {
				...state,
				celsius: +((+action.payload - 32) / 1.8).toFixed(2),
				fahrenheit: +action.payload,
				kelvin: +((+action.payload - 32) / 1.8 + 273.15).toFixed(2)
			};

		case 'convert_kelvin':
			return {
				...state,
				celsius: +(+action.payload - 273.15).toFixed(2),
				fahrenheit: +((+action.payload - 273.15) * 1.8 + 32).toFixed(2),
				kelvin: +action.payload
			};

		case 'reset_temps':
			return initialTemps;

		default:
			return state;
	}
};
