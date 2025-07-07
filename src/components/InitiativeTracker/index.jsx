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
		if (healthReferance.current) {
			const newHealth = parseInt(healthReferance.current.value) || 0;
			healthReferance.current.value = newHealth + 1;
		}
	}

	const subHealth = () => {
		if (healthReferance.current) {
			const newHealth = parseInt(healthReferance.current.value) || 0;
			healthReferance.current.value = newHealth - 1;
		}
	}

	let rows = [];

	for (let i = 0; i < numRows; i++) {
		rows.push(
			<div className="InitiativeTrackerItem" id="InitiativeItem" key={i}>
				<textarea className="InitiativeTrackerDetail" id="InitiativeSlot" placeholder="10" />
				<textarea className="InitiativeTrackerDetail" id="Name" placeholder="Name" />
				<textarea
					className="InitiativeTrackerDetail"
					id="Health"
					defaultValue="0"
					onClick={handleOpen}
				/>
				<textarea className="InitiativeTrackerDetail" id="StatusEffects" defaultValue="Effects" />
			</div>
		)
	}

	return (
		<>
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
				<button onClick={addRow}></button>
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
					<button onClick={handleClose}>Close</button>
					<button onClick={addHealth}>+1</button>
					<button onClick={subHealth}>-1</button>

				</div>
			)}

		</>
	);
}

