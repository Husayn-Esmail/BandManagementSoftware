//import React, { useState, useEffect } from 'react';

function Song() {
	return(
		<div className="base-component song">
		<div className="d-flex">
		</div>
		<p>I am a single song, put a ring on me</p>
		</div>
	);

}


function showSong() {
	const s = document.getElementsByClassName("song")[0];

	if (window.getComputedStyle(s, null).display == "none") {
		s.style.display = "block"
	} else {
		s.style.display = "none"
	}
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
					<p className="flex-grow-1"><button onClick={showSong}>SongName</button></p>
					<p className="pe-5">C A G</p>
			</li>
			<li className="list-group-item d-flex item">
					<p className="pe-4">0</p>
					<p className="flex-grow-1">SongName2</p>
					<p className="pe-5">C A G</p>
			</li>
		</ul>

		<Song />
		</div>
	);

}


export { Song, SongList };
