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
		<div className="songlist-container">
		<ul className="list-group list align-self-center">
			<li className="list-group-item d-flex item">
					<p className="pe-4">0</p>
					<p className="flex-grow-1">SongName</p>
					<p className="pe-5">C A G</p>
			</li>
		</ul>

		<Song />
		</div>

	);

}


export { Song, SongList };
