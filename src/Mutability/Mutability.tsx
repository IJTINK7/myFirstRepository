import React from 'react';
let user = {
	name: "Roma",
	age: 27
}
let newUser = user
let admins = [
	user,
	{
		name: "Anton",
		age: 24
	}

]
console.log(admins[1])
export const Mutability=()=>{

	return (
		<div>
			<div>{user.age = user.age + 1}</div>
			<div>{newUser.age =  28}</div>
			<div>{user.age}</div>
		</div>
	)
}