import React from 'react';
import './App.css';
import {FCC} from "./Files/FCC";
import {TrainingJS} from "./Files/TrainingJS";
import {MainJS} from "./Files/MainJS";
import {Mutability} from "./Mutability/Mutability";

function App() {
	return (
		<div className={"App"}>
			<FCC/>
			<TrainingJS/>
			<MainJS/>
			<Mutability/>
		</div>
	);
}

export default App;
