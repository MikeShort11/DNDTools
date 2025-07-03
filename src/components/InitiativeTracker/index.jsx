import '../../App.css';
import './initiative.css';

class Fighter {
	constructor(name, health, initiative = false, statusEffect = "none") {
		this.name = name;
		this.health = health;
		this.statusEffect = statusEffect;

		this.initiative = initiative === false
			? Math.floor(Math.random() * 21)
			: initiative;
	}
}

let fighter_list = [];

// Add fighters to the list
function addFighters(name, health, initiative = false, statusEffect = "none") {
	fighter_list.push(new Fighter(name, health, initiative, statusEffect));
}

// Test data
addFighters("Aragorn", 25, 18, "None");
addFighters("Goblin", 10);

function Tracker() {
	return (
		<>
			<div className="InitiativeTrackerItem" id="InitiativeItem">
				<div className="InitiativeTrackerDetail" id="InitiativeSlot">Initiative</div>
				<div className="InitiativeTrackerDetail" id="Name">Name</div>
				<div className="InitiativeTrackerDetail" id="Health">Health</div>
				<div className="InitiativeTrackerDetail" id="StatusEffects">Status Effect</div>
			</div>

			{fighter_list.map((fighter, index) => (
				<div className="InitiativeTrackerItem" id="InitiativeItem" key={index}>
					<div className="InitiativeTrackerDetail" id="InitiativeSlot">{fighter.initiative}</div>
					<div className="InitiativeTrackerDetail" id="Name">{fighter.name}</div>
					<div className="InitiativeTrackerDetail" id="Health">{fighter.health}</div>
					<div className="InitiativeTrackerDetail" id="StatusEffects">{fighter.statusEffect}</div>
				</div>
			))}
		</>
	);
}

export default Tracker;

