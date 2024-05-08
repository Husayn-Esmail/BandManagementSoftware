//import React, { useState, useEffect } from 'react';

function Song() {
	return(
		<div className="base-component">
		<div className="d-flex">
		</div>
		<p>I am a single song, put a ring on me</p>
		</div>
	);

}


function SongList() {
//	const [songs, setChords] = useState(null);
	
//	useEffect(() => {
	// empty effect because it's got no data yet

//	}, []);


	return(
		<div className="base-component">
		<ul className="list-group">
		<li className="list-group-item flex">
			<div className="d-flex flex-row">
				<p className="px-4">0</p>
				<p>SongName</p>
		{// i need to justify the chords to the end

		}
				<p>C A G</p>
			</div>
		</li>

		</ul>
		<p>I am a list of songs</p>
		</div>

	);

}


export { Song, SongList };
