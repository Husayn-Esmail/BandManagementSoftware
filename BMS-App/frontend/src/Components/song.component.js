//import React, { useState, useEffect } from 'react';

function Song() {
	return(
		<div className="base-component song border-top border-end border-bottom p-4">
		<div className="d-flex slideouthead">
			<h2>Song Name</h2>
			<button>x</button>
		</div>
		<div className="d-flex justify-content-start divi">
		<div className="unordered">
			<ul className="list-group">
			<li className="list-group-item d-flex">
				<p>Key:</p>
				<p>A</p>
			</li>
			<li className="list-group-item d-flex">
				<p>Chords:</p>
				<p>Cm A G</p>
			</li>
			<li className="list-group-item">
				<p>Lead</p>
				<p>Person</p>
			</li>
			<li className="list-group-item">
				<p>Starting</p>
				<p>Person</p>
			</li>
			<li className="list-group-item">
				<p>Ending</p>
				<p>Person</p>
			</li>	
			<li className="list-group-item">
				<p>Position</p>
				<p>0</p>
			</li>
			</ul>
		</div>
		<div className="notes">
			<p>Notes</p>
			<p>my notes go here</p>
		</div>

		<div className="transpose">
			<h5>Transpose</h5>
			<p>value</p>
			<p>+1</p>
			<button>+</button>
			<button>-</button>
		</div>
		<div className="d-flex dangerzone">
			<button>Edit</button>
			<button>Delete</button>
		</div>
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
		<h2 className="text-center">List Name</h2>
		<div className="list-items d-flex justify-content-center">
		<ul className="list-group list">
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
		</div>
	);

}


export { Song, SongList };
