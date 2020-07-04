import React from 'react';

const Card = ({id, name, sprite, height, weight}) => {
	return (
		<div className="tc bg-white dib w5 br3 pa3 ma2 grow bw2 shadow-5">
			<div>
				<img alt="default front sprite" src={sprite} />
				<h3>#{id} {name.toUpperCase()}</h3>
				<h4 className="tl">Height: {(height/3.048).toFixed(2)} ft</h4>
				<h4 className="tl">Weight: {(weight/4.536).toFixed(2)} lbs</h4>				
			</div>
		</div>
	)
}


export default Card;