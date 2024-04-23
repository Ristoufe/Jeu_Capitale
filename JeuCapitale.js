COUNTRIES_PER_CONTINENT = {"world": [], "africa": [], "america": [], "asia": [], "europe": [], "oceania": []}

for (const [key, value] of Object.entries(COUNTRIES)) {
	COUNTRIES_PER_CONTINENT["world"].push(key);
	COUNTRIES_PER_CONTINENT[value.continent].push(key);
}




let language = 1;

function tt(hash) {
	return TRANSLATION_TABLE[hash][language];
}


// Update front page for selected language
document.getElementById("p_title").innerHTML = tt("Title");
document.getElementById("button_start_game").innerHTML = tt("Play");
document.getElementById("button_options").innerHTML = tt("Options");



// Utils

function randint(min, max) {
	return (Math.round(Math.random()*max + min));
}


function is_similar(str1, str2) {
  str1 = str1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/-/g,"").replace(/'/g,"").replace(" ","");
  str2 = str2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/-/g,"").replace(/'/g,"").replace(" ","");
  return(str1 == str2);
}










// Variables

let current_score = 0;
let current_turn = 0;
let selected_country;
let remaining_countries;
let is_return_pressed = true;
const PRINCIPALE = document.getElementById("principale");
let errors = [];

// Variables Options
let options = {
	enable_flags : true,
	gamemode : "simple",
	number_of_country : 198,
	selected_countries : COUNTRIES_PER_CONTINENT["world"],
	selected_continents : {"africa":true,"america":true,"asia":true,"europe":true,"oceania":true,"error":false}
}









// #region Menu

function start_game() {
	remaining_countries = [...options.selected_countries];
	errors = [];
	switch (options.gamemode) {
		case "simple":
			next_turn_simple();
			break;
		case "hard":
			next_turn_hard();
			break;
		case "flag_only":
			next_turn_flag_only();
			break;
	}
}

function restart() {
	current_score = 0;
	current_turn = 0;
	PRINCIPALE.innerHTML =
		'<p>' + tt("Title") + '</p>' +
		'<button onclick="start_game()">' + tt("Play") + '</button>' +
		'<br><button onclick="show_options()">' + tt("Options") + '</button>';
}

function show_end_game() {
	PRINCIPALE.innerHTML =
		'<p>' + tt("You Have Finished") +
		'<br>' +
		tt("Your Score Is") + current_score + ' / ' + current_turn + '</p>' +
		'<button onclick="restart()">' + tt("Restart") + '</button>';
}

// #endregion


// #region Hard

function next_turn_hard() {
	if (current_turn < options.number_of_country) {
		selected_country = remaining_countries.splice(randint(0, remaining_countries.length - 1), 1);

		PRINCIPALE.innerHTML =
			'<button onclick="restart()" id="button_back">' + tt("Back") + '</button>' +
			'<p>' + tt("Instruction") + tt(selected_country) + '</p>' +
			'<input type="text" id="input_answer" onkeypress="give_answer_hard(event)">' +
			'<br>' +
			'<p>' + current_score + ' / ' + current_turn + '</p>';

		if (options.enable_flags) {
			let img_flag = document.createElement("img");
			img_flag.src = "Drapeaux\\Flag_of_" + selected_country + ".svg";
			img_flag.alt = tt("Flag Of") + tt(selected_country);
			img_flag.width = 250;
			img_flag.height = 166;
			PRINCIPALE.insertBefore(img_flag, document.getElementById("input_answer"));
			PRINCIPALE.insertBefore(document.createElement("br"), document.getElementById("input_answer"));
			PRINCIPALE.insertBefore(document.createElement("br"), document.getElementById("input_answer"));
		}
		document.getElementById("input_answer").focus();
		current_turn++;
		return;
	}
	show_end_game();
}


function handle_enter_down_hard(event) {
	if (event.key == "Enter" && !is_return_pressed) {
		next_turn_hard();
		remove_enter_listener_hard();
	}
	is_return_pressed = false;
}

function remove_enter_listener_hard() {
	document.removeEventListener('keyup', handle_enter_down_hard, true);
}

function give_answer_hard(event) {
	let given_answer = document.getElementById("input_answer").value;
	if (event.key != "Enter" || given_answer == "") {
		return;
	}

	document.addEventListener('keyup', handle_enter_down_hard, true);
	is_return_pressed = true;

	PRINCIPALE.innerHTML =
		'<button onclick="restart(); remove_enter_listener_hard()" id="button_back">' + tt("Back") + '</button>' +
		'<p id="p_text"></p>' +
		'<button onclick="next_turn_hard(); remove_enter_listener_hard()">' + tt("Continue") + '</button>' +
		'<p id="p_score"></p>';

	if (is_similar(given_answer, tt(COUNTRIES[selected_country]["capital"]))) {
		document.getElementById("p_text").innerHTML = 
			tt("Correct The Capital Of") + tt(selected_country) + tt("Is") + tt(COUNTRIES[selected_country]["capital"]) +
			'<br>' +
			'+1';
		current_score++;
	}
	else {
		document.getElementById("p_text").innerHTML =
			tt("Incorrect The Capital Of") + tt(selected_country) + tt("Is") + tt(COUNTRIES[selected_country]["capital"]);
			errors.push(selected_country[0]);
	}
	document.getElementById("p_score").innerHTML = current_score + ' / ' + current_turn;
}


// #endregion


// #region Simple

function next_turn_simple() {
	if (current_turn < options.number_of_country) {
		selected_country = remaining_countries.splice(randint(0, remaining_countries.length - 1), 1);
		PRINCIPALE.innerHTML =
			'<button onclick="restart(); remove_enter_listener_simple()" id="button_back">' + tt("Back") + '</button>' +
			'<p>' + tt("Instruction") + tt(selected_country) + '</p>' +
			'<button onclick="reveal_answer(); remove_enter_listener_simple()" id="button_reveal">' + tt("Reveal Capital") + '</button>' +
			'<p>' + current_score + ' / ' + current_turn + '</p>';
		
		
		if (options.enable_flags) {
			let img_flag = document.createElement("img");
			img_flag.src = "Drapeaux\\Flag_of_" + selected_country + ".svg";
			img_flag.alt = tt("Flag Of") + tt(selected_country);
			img_flag.width = 250;
			img_flag.height = 166;
			PRINCIPALE.insertBefore(img_flag, document.getElementById("button_reveal"));
			PRINCIPALE.insertBefore(document.createElement("br"), document.getElementById("button_reveal"));
			PRINCIPALE.insertBefore(document.createElement("br"), document.getElementById("button_reveal"));
		}

		document.addEventListener('keyup', handle_enter_down_simple, true);
		is_return_pressed = false;

		current_turn++;
		return;
	}
	show_end_game();
}

function handle_enter_down_simple(event) {
	if (event.key == "Enter" && !is_return_pressed) {
		remove_enter_listener_simple();
		reveal_answer();
	}
	is_return_pressed = false;
}

function remove_enter_listener_simple() {
	document.removeEventListener('keyup', handle_v_or_f_down_simple, true);
}


function handle_v_or_f_down_simple(event) {
	if (event.key == "v") {
		remove_v_or_f_listener_simple();
		validate_correct_answer();
	}
	else if (event.key == "f") {
		remove_v_or_f_listener_simple();
		validate_incorrect_answer();
	}
}

function remove_v_or_f_listener_simple() {
	document.removeEventListener("keyup", handle_v_or_f_down_simple, true);
}

function reveal_answer() {
	PRINCIPALE.innerHTML =
		'<button onclick="restart(); remove_v_or_f_listener_simple()" id="button_back">' + tt("Back") + '</button>' +
		'<p>' + tt("The Capital Of") + tt(selected_country) + tt("Is") + tt(COUNTRIES[selected_country]["capital"]) + '. ' + tt("Where You Right") + ' ?</p>' +
		'<button onclick="validate_correct_answer(); remove_v_or_f_listener_simple()">' + tt("Yes") + '</button>' +
		'<button onclick="validate_incorrect_answer(); remove_v_or_f_listener_simple()">' + tt("No") + '</button><p>' +
		current_score + ' / ' + (current_turn - 1) + '</p>';
	document.addEventListener("keyup", handle_v_or_f_down_simple, true);
}


function validate_correct_answer() {
	current_score++;
	next_turn_simple();
}


function validate_incorrect_answer() {
	errors.push(selected_country[0]);
	next_turn_simple();
}

// #endregion


// #region Flag Only

function next_turn_flag_only() {
	if (current_turn < options.number_of_country) {
		selected_country = remaining_countries.splice(randint(0, remaining_countries.length - 1), 1);

		PRINCIPALE.innerHTML =
			'<button onclick="restart()" id="button_back">' + tt("Back") + '</button>' +
			'<br>' +
			'<p>' + tt("Instruction Flag Only Country") + '</p>' +
			'<img src="Drapeaux\\Flag_of_' + selected_country + '.svg" alt="' + tt("Flag To Guess") + '" width="250" height="166">' +
			'<br>' +
			'<br>' +
			'<input type="text" id="input_answer" onkeypress="give_country_flag_only(event)">' +
			'<br>' +
			'<p>' + current_score + ' / ' + current_turn + '</p>';
		
		document.getElementById("input_answer").focus();
		current_turn++;
		return;
	}
	show_end_game();
}

function handle_enter_down_flag_only(event) {
	if (event.key == "Enter" && !is_return_pressed) {
		next_turn_flag_only();
		remove_enter_listener_flag_only();
	}
	is_return_pressed = false;
}

function remove_enter_listener_flag_only() {
	document.removeEventListener('keyup', handle_enter_down_flag_only, true);
}

function give_country_flag_only(event) {
	let given_answer = document.getElementById("input_answer").value;
	if (event.key != "Enter" || given_answer == "") {
		return;
	}

	PRINCIPALE.innerHTML =
		'<button onclick="restart()" id="button_back">' + tt("Back") + '</button>' +
		'<p id="p_text"></p>' +
		'<p>' + tt("Instruction Flag Only Capital") + '</p>' +
		'<input type="text" id="input_answer" onkeypress="give_capital_flag_only(event)">' +
		'<p id="p_score"></p>';

	document.getElementById("input_answer").focus();

	if (is_similar(given_answer, tt(selected_country))) {
		document.getElementById("p_text").innerHTML = 
			tt("Correct, The Country Was") + tt(selected_country) +
			'<br>' +
			'+1';
		current_score++;
	}
	else {
		document.getElementById("p_text").innerHTML =
			tt("Incorrect, The Country Was") + tt(selected_country);
			errors.push(selected_country[0]);
	}
	document.getElementById("p_score").innerHTML = current_score + ' / ' + current_turn;
}

function give_capital_flag_only(event) {
	let given_answer = document.getElementById("input_answer").value;
	if (event.key != "Enter" || given_answer == "") {
		return;
	}

	document.addEventListener('keyup', handle_enter_down_flag_only, true);
	is_return_pressed = true;

	PRINCIPALE.innerHTML =
		'<button onclick="restart(); remove_enter_listener_flag_only()" id="button_back">' + tt("Back") + '</button>' +
		'<p id="p_text"></p>' +
		'<button onclick="next_turn_hard(); remove_enter_listener_flag_only()">' + tt("Continue") + '</button>' +
		'<p id="p_score"></p>';
	current_turn++;

	if (is_similar(given_answer, tt(COUNTRIES[selected_country]["capital"]))) {
		document.getElementById("p_text").innerHTML = 
			tt("Correct The Capital Of") + tt(selected_country) + tt("Is") + tt(COUNTRIES[selected_country]["capital"]) +
			'<br>' +
			'+1';
		current_score++;
	}
	else {
		document.getElementById("p_text").innerHTML =
			tt("Incorrect The Capital Of") + tt(selected_country) + tt("Is") + tt(COUNTRIES[selected_country]["capital"]);
			errors.push(selected_country[0]);
	}
	document.getElementById("p_score").innerHTML = current_score + ' / ' + current_turn;
}

// #endregion

// #region Options

function choose_continent(continent) {
	// If nothing is choosen then do nothing
	if (!document.getElementById("africa").checked &&
		!document.getElementById("america").checked &&
		!document.getElementById("asia").checked &&
		!document.getElementById("europe").checked &&
		!document.getElementById("oceania").checked &&
		!document.getElementById("error").checked) {
		document.getElementById(continent).checked = true;
		return;
	}
	// If a continent is choosen while previous mode was error then it removes error
	if (document.getElementById("error").checked) {
		options.selected_countries = [];
		options.selected_continents["error"] = false;
		document.getElementById("error").checked = false;
	}
	if (document.getElementById(continent).checked) {
		options.selected_countries = options.selected_countries.concat(COUNTRIES_PER_CONTINENT[continent]);
		options.selected_continents[continent] = true;
	}
	else {
		options.selected_countries = options.selected_countries.filter(
			item => !COUNTRIES_PER_CONTINENT[continent].includes(item));
		options.selected_continents[continent] = false;
	}
	update_number_of_country(options.number_of_country);
}


function choose_error() {
	if (errors.length == 0 && document.getElementById("error").checked) {
		document.getElementById("error").checked = false;
		alert(tt("Alert Errors"));
		return;
	}
	if (!document.getElementById("error").checked) {
		document.getElementById("error").checked = true;
		return;
	}

	document.getElementById("africa").checked = false;
	document.getElementById("america").checked = false;
	document.getElementById("asia").checked = false;
	document.getElementById("europe").checked = false;
	document.getElementById("oceania").checked = false;
	options.selected_countries = [...errors];
	options.selected_continents = {"africa": false,"america": false,"asia": false,"europe": false,"oceania": false,"error": true};
	update_number_of_country(options.number_of_country);
}


function update_number_of_country(n) {
	if (n >= options.selected_countries.length) {
		document.getElementById("options.number_of_country").value = options.selected_countries.length;
		options.number_of_country = options.selected_countries.length;
	}
	else if (n <= 0) {
		document.getElementById("options.number_of_country").value = 1;
		options.number_of_country = 1;
	}
	else {
		options.number_of_country = n;
	}
}


function change_language(new_language) {
	language = parseInt(new_language);
	show_options();
}

function show_options() {
	PRINCIPALE.innerHTML =
		'<button onclick="restart()" id="button_back">' + tt("Back") + '</button>' +
		'<select name="language" id="select_language" onchange="change_language(this.value)">' +
		'<option value="1">Français</option>' +
		'<option value="0">English</option></select>' +
		'<p>' + tt("Flags") + ' :<input type="checkbox" id="flag_checkbox" onChange="options.enable_flags = this.checked"></p>' +
		'<p>' + tt("Gamemode") + ' :</p>' +
		'<label for="simple">' + tt("Simple") + '</label>' +
		'<input type="radio" name="radio_gamemode" id="simple" value="simple" onChange="options.gamemode = this.value">' +
		'<br>' +
		'<label for="hard">' + tt("Hard") + '</label>' +
		'<input type="radio" name="radio_gamemode" id="hard" value="hard" onChange="options.gamemode = this.value">' +
		'<br>' +
		'<label for="flag_only">' + tt("Only Flags") + '</label>' +
		'<input type="radio" name="radio_gamemode" id="flag_only" value="flag_only" onChange="options.gamemode = this.value">' +
		'<p>' + tt("Number Of Country") + ' :</p>' +
		'<input type=number value="' + options.selected_countries.length + '" id="options.number_of_country" onInput="update_number_of_country(this.value)">' +
		'<p>' + tt("Countries") + ' :</p>' +
		'<p>' + tt("Africa") + '<input type="checkbox" onChange="choose_continent(this.id)" id="africa"><br>' +
		tt("America") + '<input type="checkbox" onChange="choose_continent(this.id)" id="america"><br>' +
		tt("Asia") + '<input type="checkbox" onChange="choose_continent(this.id)" id="asia"><br>' +
		tt("Europe") + '<input type="checkbox" onChange="choose_continent(this.id)" id="europe"><br>' +
		tt("Oceania") + '<input type="checkbox" onChange="choose_continent(this.id)" id="oceania"><br>' +
		tt("Errors") + '<input type="checkbox" onChange="choose_error()" id="error"></p>';
	for (let continent in options.selected_continents) {
		document.getElementById(continent).checked = options.selected_continents[continent];
	}
	document.getElementById("select_language").value = "" + language;
	if (options.enable_flags) {
		document.getElementById("flag_checkbox").checked = true;
	}
	document.getElementById(options.gamemode).checked = true;
}

// #endregion