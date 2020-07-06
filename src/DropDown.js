import React from 'react';

const DropDown = ({dropDownChange}) => {

	return(
		<div className ="dib pa3">

					<select className="tc pa3 ma ba b--blue bg-whit" onChange={dropDownChange}>
						<option value="pokedexorder">Pokedex Order</option>
						<option value="height">Height</option>
						<option value="weight">Weight</option>
					</select>

		</div>
	);
}

export default DropDown;