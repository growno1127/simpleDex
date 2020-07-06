import React from 'react';
import Card from './Card';

const CardList = ({test}) =>
{
	//for each pokemon
	//get id, name, front sprite, height, weight

	return (
			<div>
			{
		    test.map((poke, i) => {
		    	return (
		   			 <Card 
		   			 	key = {i}
		   			 	id={test[i].id} 
		   			 	name={test[i].name} 
		   			 	sprite={test[i].sprites.front_default}
		   				height={test[i].height}
		   				weight={test[i].weight}
		   			 	/>
		    		);
		  		  })
				}
			</div>
		);
}

export default CardList;