const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];

// work out the radom function to give a random element ID from the array, needs to get a random element till it hits the max password length

let generatePassword = document.getElementById("hero--pass-btn");
let blahblah = document.getElementById("pass-field-1");
let blahblahTwo = document.getElementById("pass-field-2");

function getRandom() {
	let passwords = "";
	let PasswordsTwo = "";
	for (let i = 0; i < 12; i++) {
		let randomINT = Math.floor(Math.random() * characters.length);
		let randomINT2 = Math.floor(Math.random() * characters.length);
		passwords += characters[randomINT];
		PasswordsTwo += characters[randomINT2];

		blahblah.textContent = passwords;
		blahblahTwo.textContent = PasswordsTwo;
	}
	return passwords;
}

generatePassword.addEventListener("click", getRandom);

// Generate passwords , create variable that has empty string
// return value from the randomINT into empty string twice

// generate 2 x passwords into 2 variables
// call function which now has to populate 2 different
