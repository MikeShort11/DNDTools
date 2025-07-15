import React from 'react';
import '../../App.css';
import './initiative.css';


export default function Tracker() {
	const [open, setOpen] = React.useState(false);
	const [modalPosition, setModalPosition] = React.useState({ top: 0, left: 0 });
	const [numRows, setNumRows] = React.useState(5);

	const healthReferance = React.useRef(null);


	const addRow = () => setNumRows(numRows + 1);
	const delRow = () => setNumRows(numRows - 1);


	const handleClose = (event) => {
		healthReferance.current = event.target;
		setOpen(false);
	}
	const handleOpen = (event) => {
		const rect = event.target.getBoundingClientRect();
		// Set modal position just below the textarea
		setModalPosition({
			top: rect.bottom + window.scrollY,  // vertical position (bottom of textarea + scroll offset)
			left: rect.left + window.scrollX    // horizontal position (left edge + scroll offset)
		});
		healthReferance.current = event.target;
		setOpen(true);
	};

	const addHealth = () => {
		let incrementVal = Number(document.getElementById('incrementNum').value);
		if (healthReferance.current && !isNaN(incrementVal)) {
			const health = parseInt(healthReferance.current.value) || 0;
			healthReferance.current.value = health + incrementVal;
		}
	}

	const subHealth = () => {
		let incrementVal = Number(document.getElementById('incrementNum').value);
		if (healthReferance.current && !isNaN(incrementVal)) {
			const health = parseInt(healthReferance.current.value) || 0;
			healthReferance.current.value = health - incrementVal;
		}
	}

	const rollInitiatve = (event) => {
		const initiativeItem = event.target.closest('.InitiativeTrackerItem'); //gets the div with items
		const textarea = initiativeItem.querySelector('#InitiativeSlot'); //gets the textArea

		if (textarea) {
			const d20Roll = Math.floor(Math.random() * 20) + 1;
			textarea.value = (d20Roll).toString();
		}
	}

	let rows = [];

	for (let i = 0; i < numRows; i++) {
		rows.push(
			<div className="InitiativeTrackerItem" id="InitiativeItem" key={i}>
				<div className='InitiativeTrackerDetail'>
					<textarea className='InitiativeTrackerDetail' id="InitiativeSlot" placeholder="10" />
					<button id="initiativeRollBtn" onClick={rollInitiatve}>Roll</button>
				</div>
				<textarea className="InitiativeTrackerDetail" id="Name" placeholder="Name" />
				<textarea
					className="InitiativeTrackerDetail"
					id="Health"
					defaultValue="0"
					onClick={handleOpen}
				/>
				<textarea className="InitiativeTrackerDetail" id="StatusEffects" placeholder="Effects" />
			</div>
		)
	}

	return (
		<div>
			{/* Label for the Tracker */}
			<div className="InitiativeTrackerItem" id="InitiativeItem">
				<div className="InitiativeTrackerLabel" id="InitiativeSlot">Initiative</div>
				<div className="InitiativeTrackerLabel" id="Name">Name</div>
				<div className="InitiativeTrackerLabel" id="Health">Health</div>
				<div className="InitiativeTrackerLabel" id="StatusEffects">Status Effect</div>
			</div>

			{/* render the rows*/}
			{rows}

			{/*add control buttons to the bottom */}
			<div className="bottomButtons">
				<button onClick={addRow}>Add Row</button>
				<button onClick={delRow}>Remove Row</button>
				<button onClick={addRow}>sort</button>
				<button onClick={addRow}></button>
			</div>

			{/*render the modal for add and subbtract health */}
			{open && (
				<div className="modal-content"
					style={{
						position: 'absolute',
						top: modalPosition.top,
						left: modalPosition.left
					}}
				>
					<input type='number' defaultValue='1' id='incrementNum'></input>
					<button onClick={addHealth}>+</button>
					<button onClick={subHealth}>-</button>
					<button onClick={handleClose}>Close</button>
				</div>
			)}

		</div>
	);
}

