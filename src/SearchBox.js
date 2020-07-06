import React from 'react';

const SearchBox = ({searchChange}) => {

	return (
		<div className="dib pa3">
			<input 
			className="tc pa3 ma ba b--blue bg-white"
			type="search" 
			placeholder="Search Pokemon" 
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;