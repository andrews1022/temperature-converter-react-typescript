import React from 'react';

interface TempInputProps {
	tempType: string;
	tempState: any;
	dispatch: any;
}

const TempInput = ({ tempType, tempState, dispatch }: TempInputProps) => (
	<div className='temp__group'>
		<label className='temp__label' htmlFor={`temp_${tempType}`}>
			{tempType}
		</label>
		<input
			className='temp__input'
			type='number'
			name={`temp_${tempType}`}
			id={`temp_${tempType}`}
			value={tempState[tempType]}
			onChange={(e) => dispatch({ type: `convert_${tempType}`, payload: e.target.value })}
		/>
	</div>
);

export default TempInput;
