import React from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import { Chord, ChordsList, CreateChord } from "./add-chord.component";




export default function NavBar() {
	return(
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<a href="/chords" className="ms-3 navbar-brand">
					BandManagementSoftware
				</a>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">

						<Link to={"/chords"} className="nav-link">
						Chords
						</Link>	

					</li>
					<li className="nav-item">
						<Link to={"/add"} className="nav-link">
							Add
						</Link>

					</li>
				</div>
			</nav>

			<div className="container mt-3">
				<Routes>
					<Route path="/" element={<ChordsList/>} />
					<Route path="/chords" element={<ChordsList/>}/>
					<Route path="/add" element={<CreateChord/>}/>
					<Route path="/chords/:id" element={<Chord/>} />
				</Routes>

			</div>
		</div>
	);

}
