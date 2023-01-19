import React from 'react';
let user = {
	name: "Roma",
	age: 27
}

export const Mutability=()=>{
	return (
		<div>
			{user.age = user.age + 1}
		</div>
	)
}