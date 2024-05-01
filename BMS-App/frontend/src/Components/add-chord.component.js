import React, { useState, useEffect } from 'react';
import ChordDataService from "../services/chord.service";


function Chord() {
	return (
		<div className="base-component">
			<p>I display a single chord</p>	
		</div>
	);

}

function ChordsList() {
	const [chords, setChords] = useState(null);

	useEffect(() => {

		const getChords = async () => {
			ChordDataService.getAll()
			.then(response => {
				console.log(response.data);
				setChords(response.data);
			})
			.catch(e => {
				console.log(e)
			});


		};
		getChords();
	}, []);
	console.log(` chors are : ${chords}`);


	return(
		<div className="base-component">
		<ul>
		<p>i swear it's rendering</p>
		{chords ? (
			chords.map((item) => (
				<li key={item.id}>
					<p> rendered</p>
					<p>{item.id}</p>
					<p>{item.note}</p>
					<p>{item.interval}</p>
				</li>
			))
		): (

			<p>waiting</p>
		)
		}
			</ul>
		</div>
	);

}

function CreateChord() {
	
	const initialChordState = {
		id: null,
		note: "",
		interval: 0,
	};

	const [chord, setChord] = useState(initialChordState);
	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setChord({ ...chord, [name]: value });
	};


	const saveChord = () => {
		var data = {
			note: chord.note,
			interval: chord.interval
		};

		ChordDataService.create(data)
			.then(response => {
				setChord({
					id: response.data.id,
					note: response.data.note,
					interval: response.data.interval
				});
				setSubmitted(true);
				console.log(response.data);
			})
			.catch(e => {
				console.log(e)
			});
	};


	const newChord = () => {
		setChord(initialChordState);
		setSubmitted(false);
	};


	return(
		<div className="submit-form">
		{
			// conditional render
		}
		{submitted ? (
			<div>
				<h4> You Submitted Successfully!</h4>
				<button className="btn btn-success" onClick={newChord}>
				Add
				</button>
			</div>
		) : (
			<div>
			<div className="form-group">
				<label htmlFor="note">Note</label>
				<input
					type="text"
					className="form-control"
					id="note"
					required
					value={chord.note}
					onChange={handleInputChange}
					name="note"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="interval">Interval</label>
					<input
					type="number"
					className="form-control"
					id="interval"
					required
					value={chord.interval}
					onChange={handleInputChange}
					name="interval"
				/>
			</div>
				<button onClick={saveChord} className="btn btn-success">
				Submit
				</button>
			</div>
		)}
			<p>I display chords</p>
		</div>
	);
}


export { Chord, ChordsList, CreateChord };

