function rollCube(cube) {
	var xRand = getRandom(3, 0) * 90;
	var yRand = getRandom(2, 0) * 90;

	cube.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;

	console.log(getResult(xRand, yRand));
	
}

function getRandom(max, min) {
	let randFloat = Math.random();
	randFloat*= max-min;
	randFloat+=min;

	return Math.floor(randFloat);
}

function posMod(n, m) {
	return ((n % m)+m)%m;

}

function getResult(rotX, rotY) {
	let countX = posMod(rotX / 90, 4);
	if (countX === 1) return 6; // bottom
	if (countX === 3) return 5; // top

	let countY = posMod(rotY / 90 + countX, 4);
	
	return [1, 4, 2, 3][countY];
}
