//import React, { useState, useEffect } from 'react';

function Song() {
	return(
		<div className="base-component song border-top border-end border-bottom p-4">
		<h2>Song Name</h2>
		<div className="d-flex">
		<ul className="list-group">
		<li className="list-group-item">
			<p>Key</p>
			<p>A</p>
		</li>
		<li className="list-group-item">
			<p>Chords</p>
			<p>Cm A G</p>
		</li>
		<li>
			<p>Lead</p>
			<p>Person</p>
		</li>
		<li>
			<p>Starting</p>
			<p>Person</p>
		</li>
		<li>
			<p>Ending</p>
			<p>Person</p>
		</li>
	
		<li>
			<p>Position</p>
			<p>0</p>
		</li>
		</ul>
		<p>Notes</p>
		<p>my notes go here</p>

		<h5>Transpose</h5>
		<p>value</p>
		<p>+1</p>
		<button>+</button>
		<button>-</button>
		<button>Edit</button>
		<button>Delete</button>
		</div>
		<p>I am a single song, put a ring on me</p>
		</div>
	);

}


function showSong() {
	const s = document.getElementsByClassName("song")[0];

	if (window.getComputedStyle(s, null).display === "none") {
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
