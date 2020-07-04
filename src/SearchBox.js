import React from 'react';

const SearchBox = () => {

	return (
		<div className='dib w-40 tr pa2 dib'>
			<input 
			className='tc pa3 ba b--blue bg-white'
			type='search' 
			placeholder='search pokemon' 
			/>
		</div>
		);
}

export default SearchBox;