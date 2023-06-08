let links = document.querySelectorAll(".gridBtn");
let grid = [
 [null, null, null],
 [null, null, null],
 [null, null, null]
];

let currentPlayer = 1;
let finish = false;

for (let i = 0; i < links.length; i++) {

	let link = links[i];
	link.addEventListener("click", function (e) {

	e.preventDefault();
	let cellIsOccupied =
		e.currentTarget.classList.contains("player2")||
		e.currentTarget.classList.contains("player1");
	if 
		(!cellIsOccupied && !finish) {
		e.currentTarget.classList.toggle(`player${currentPlayer}`);
		let row = e.currentTarget.getAttribute("data-row");
		let column = e.currentTarget.getAttribute("data-column");
		grid[row][column] = currentPlayer;

		if (checkOrizzontale(currentPlayer)) {
		finish = true;
		let win = document.querySelector(".victory h2");
		win.innerHTML = `Ha vinto il giocatore ${currentPlayer}`;
		document.querySelector(".victory").classList.remove("hidden");
		} 
		else if (checkVerticale(currentPlayer)) {
		finish = true;
		let win = document.querySelector(".victory h2");
		win.innerHTML = `Ha vinto il giocatore ${currentPlayer}`;
		document.querySelector(".victory").classList.remove("hidden");
		} 
		else if (checkDiagonale(currentPlayer)) {
		finish = true;
		let win = document.querySelector(".victory h2");
		win.innerHTML = `Ha vinto il giocatore ${currentPlayer}`;
		document.querySelector(".victory").classList.remove("hidden");
		} 
		else if (checkPareggio()) {
		finish = true;
		let win = document.querySelector(".victory h2");
		win.innerHTML = `I giocatori hanno pareggiato`;
		document.querySelector(".victory").classList.remove("hidden");
		} 
		 else {
		currentPlayer = currentPlayer === 1 ? 2 : 1;
		}
	}
	});
}

function checkOrizzontale(currentPlayer) {
	if (
	grid[0][0] === currentPlayer &&
	grid[0][1] === currentPlayer &&
	grid[0][2] === currentPlayer
	) {
	return true;
	}
	 else if (
	grid[1][0] === currentPlayer &&
	grid[1][1] === currentPlayer &&
	grid[1][2] === currentPlayer
	) {
	return true;
	}
	 else if (
	grid[2][0] === currentPlayer &&
	grid[2][1] === currentPlayer &&
	grid[2][2] === currentPlayer
	) {
	return true;
	}
	return false;
}

function checkVerticale(currentPlayer) {
	if (
	grid[0][0] === currentPlayer &&
	grid[1][0] === currentPlayer &&
	grid[2][0] === currentPlayer
	) {
	return true;
	}
	 else if (
	grid[0][1] === currentPlayer &&
	grid[1][1] === currentPlayer &&
	grid[2][1] === currentPlayer
	) {
	return true;
	}
	 else if (
	grid[0][2] === currentPlayer &&
	grid[1][2] === currentPlayer &&
	grid[2][2] === currentPlayer
	) {
	return true;
	}
	return false;
}

function checkDiagonale(currentPlayer) {
	if (
	grid[0][0] === currentPlayer &&
	grid[1][1] === currentPlayer &&
	grid[2][2] === currentPlayer
	) {
	return true;
	} else if (
	grid[0][2] === currentPlayer &&
	grid[1][1] === currentPlayer &&
	grid[2][0] === currentPlayer
	) {
	return true;
	}
	return false;
}

function checkPareggio() {
	for (let row = 0; row < grid.length; row++) {
	for (let col = 0; col < grid[row].length; col++) {
		if (grid[row][col] === null) {
		return false;
		}
	}
	}
	return true;
}


