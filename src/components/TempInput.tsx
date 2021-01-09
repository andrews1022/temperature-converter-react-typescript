import React from 'react';

interface Props {
	type: string;
	value: number;
	convertTemp: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const TempInput: React.FC<Props> = ({ type, value, convertTemp }) => {
	return (
		<div className='temp__group'>
			<label className='temp__label'>{type}</label>
			<div className='temp__wrapper'>
				<input
					className='temp__input'
					type='number'
					name={`${type}-input`}
					id={`${type}-input`}
					value={value}
					onChange={convertTemp}
				/>
				<span className='temp__span'></span>
			</div>
		</div>
	);
};

export default TempInput;
