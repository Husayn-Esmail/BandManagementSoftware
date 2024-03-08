import React from 'react';

function Chord() {
	return (
		<div className="base-component">
			<p>I display a single chord</p>	
		</div>
	);

}

function ChordsList() {
	return(
		<div className="base-component">
			<p>I show all the chords</p>
		</div>
	);

}

function CreateChord() {
	return(
		<div className="base-component">
			<p>I display chords</p>
		</div>
	);
}


export { Chord, ChordsList, CreateChord };

