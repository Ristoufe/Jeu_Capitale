const MONDE_EN = ["Cook_Islands","Niue","Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso","Burundi","Cambodia","Cameroon","Canada","Cape_Verde","Central_African_Republic","Chad","Chile","China","Colombia","Comoros","Democratic_Republic_of_the_Congo","Republic_of_the_Congo","Costa_Rica","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","East_Timor","Ecuador","Egypt","El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory_Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","North_Korea","South_Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall_Islands","Mauritania","Mauritius","Mexico","Federated_States_of_Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria","North_Macedonia","Norway","Oman","Pakistan","Palestine","Palau","Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia","Saint_Vincent_and_the_Grenadines","Samoa","San_Marino","Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles","Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia","South_Africa","Spain","Sri_Lanka","Sudan","South_Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad_and_Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu","Vatican_City","Venezuela","Vietnam","Yemen","Zambia"];

const TRAD = {"Afrique du Sud":"South_Africa","Afghanistan":"Afghanistan","Albanie":"Albania","Algérie":"Algeria","Allemagne":"Germany","Andorre":"Andorra","Angola":"Angola","Antigua-et-Barbuda":"Antigua_and_Barbuda","Arabie Saoudite":"Saudi_Arabia","Argentine":"Argentina","Arménie":"Armenia","Australie":"Australia","Autriche":"Austria","Azerbaïdjan":"Azerbaijan","Bahamas":"Bahamas","Bahreïn":"Bahrain","Bangladesh":"Bangladesh","Barbade":"Barbados","Belgique":"Belgium","Belize":"Belize","Bénin":"Benin","Bhoutan":"Bhutan","Biélorussie":"Belarus","Birmanie":"Myanmar","Bolivie":"Bolivia","Bosnie-Herzégovine":"Bosnia_and_Herzegovina","Botswana":"Botswana","Brésil":"Brazil","Brunei":"Brunei","Bulgarie":"Bulgaria","Burkina Faso":"Burkina_Faso","Burundi":"Burundi","Cambodge":"Cambodia","Cameroun":"Cameroon","Canada":"Canada","Cap-Vert":"Cape_Verde","Chili":"Chile","Chine":"China","Chypre":"Cyprus","Colombie":"Colombia","Comores":"Comoros","Corée du Nord":"North_Korea","Corée du Sud":"South_Korea","Costa Rica":"Costa_Rica","Côte d\'Ivoire":"Ivory_Coast","Croatie":"Croatia","Cuba":"Cuba","Danemark":"Denmark","Djibouti":"Djibouti","Dominique":"Dominica","Égypte":"Egypt","Émirats arabes unis":"United_Arab_Emirates","Équateur":"Ecuador","Érythrée":"Eritrea","Espagne":"Spain","Eswatini":"Eswatini","Estonie":"Estonia","États-Unis":"United_States","Éthiopie":"Ethiopia","Fidji":"Fiji","Finlande":"Finland","France":"France","Gabon":"Gabon","Gambie":"Gambia","Géorgie":"Georgia","Ghana":"Ghana","Grèce":"Greece","Grenade":"Grenada","Guatemala":"Guatemala","Guinée":"Guinea","Guinée équatoriale":"Equatorial_Guinea","Guinée-Bissau":"Guinea-Bissau","Guyana":"Guyana","Haïti":"Haiti","Honduras":"Honduras","Hongrie":"Hungary","Îles Cook":"Cook_Islands","Îles Marshall":"Marshall_Islands","Inde":"India","Indonésie":"Indonesia","Irak":"Iraq","Iran":"Iran","Irlande":"Ireland","Islande":"Iceland","Israël":"Israel","Italie":"Italy","Jamaïque":"Jamaica","Japon":"Japan","Jordanie":"Jordan","Kazakhstan":"Kazakhstan","Kenya":"Kenya","Kirghizistan":"Kyrgyzstan","Kiribati":"Kiribati","Kosovo":"Kosovo","Koweït":"Kuwait","Laos":"Laos","Lesotho":"Lesotho","Lettonie":"Latvia","Liban":"Lebanon","Liberia":"Liberia","Libye":"Libya","Liechtenstein":"Liechtenstein","Lituanie":"Lithuania","Luxembourg":"Luxembourg","Macédoine du nord":"North_Macedonia","Madagascar":"Madagascar","Malaisie":"Malaysia","Malawi":"Malawi","Maldives":"Maldives","Mali":"Mali","Malte":"Malta","Maroc":"Morocco","Maurice":"Mauritius","Mauritanie":"Mauritania","Mexique":"Mexico","Micronésie":"Federated_States_of_Micronesia","Moldavie":"Moldova","Monaco":"Monaco","Mongolie":"Mongolia","Monténégro":"Montenegro","Mozambique":"Mozambique","Namibie":"Namibia","Nauru":"Nauru","Népal":"Nepal","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","Niue":"Niue","Norvège":"Norway","Nouvelle-Zélande":"New_Zealand","Oman":"Oman","Ouganda":"Uganda","Ouzbékistan":"Uzbekistan","Pakistan":"Pakistan","Palaos":"Palau","Palestine":"Palestine","Panama":"Panama","Papouasie-Nouvelle-Guinée":"Papua_New_Guinea","Paraguay":"Paraguay","Pays-Bas":"Netherlands","Pérou":"Peru","Philippines":"Philippines","Pologne":"Poland","Portugal":"Portugal","Qatar":"Qatar","République centrafricaine":"Central_African_Republic","République démocratique du Congo":"Democratic_Republic_of_the_Congo","République Dominicaine":"Dominican_Republic","République du Congo":"Republic_of_the_Congo","République tchèque":"Czech_Republic","Roumanie":"Romania","Royaume-Uni":"United_Kingdom","Russie":"Russia","Rwanda":"Rwanda","Saint-Kitts-et-Nevis":"Saint_Kitts_and_Nevis","Saint-Vincent-et-les-Grenadines":"Saint_Vincent_and_the_Grenadines","Sainte-Lucie":"Saint_Lucia","Saint-Marin":"San_Marino","Salomon":"Solomon_Islands","Salvador":"El_Salvador","Samoa":"Samoa","São Tomé-et-Principe":"Sao_Tome_and_Principe","Sénégal":"Senegal","Serbie":"Serbia","Seychelles":"Seychelles","Sierra Leone":"Sierra_Leone","Singapour":"Singapore","Slovaquie":"Slovakia","Slovénie":"Slovenia","Somalie":"Somalia","Soudan":"Sudan","Soudan du Sud":"South_Sudan","Sri Lanka":"Sri_Lanka","Suède":"Sweden","Suisse":"Switzerland","Suriname":"Suriname","Syrie":"Syria","Tadjikistan":"Tajikistan","Tanzanie":"Tanzania","Tchad":"Chad","Thaïlande":"Thailand","Timor oriental":"East_Timor","Togo":"Togo","Tonga":"Tonga","Trinité-et-Tobago":"Trinidad_and_Tobago","Tunisie":"Tunisia","Turkménistan":"Turkmenistan","Turquie":"Turkey","Tuvalu":"Tuvalu","Ukraine":"Ukraine","Uruguay":"Uruguay","Vanuatu":"Vanuatu","Vatican":"Vatican_City","Venezuela":"Venezuela","Viêt Nam":"Vietnam","Yémen":"Yemen","Zambie":"Zambia","Zimbabwe":"Zambia"};

const CAPITALES = ["Pretoria","Kaboul","Tirana","Alger","Berlin","Andorre-la-Vieille","Luanda","Saint John’s","Riyad","Buenos Aires","Erevan","Canberra","Vienne","Bakou","Nassau","Manama","Dacca","Bridgetown","Bruxelles","Belmopan","Porto-Novo","Thimphou","Minsk","Naypyidaw","Sucre","Sarajevo","Gaborone","Brasilia","Bandar Seri Begawan","Sofia","Ouagadougou","Gitega","Phnom Penh","Yaoundé","Ottawa","Praia","Santiago","Pékin","Nicosie","Bogota","Moroni","Pyongyang","Séoul","San José","Yamoussoukro","Zagreb","La Havane","Copenhague","Djibouti","Roseau","Le Caire","Abou Dabi","Quito","Asmara","Madrid","Mbabane","Tallinn","Washington","Addis-Abeba","Suva","Helsinki","Paris","Libreville","Banjul","Tbilissi","Accra","Athènes","Saint-Georges","Guatemala","Conakry","Malabo","Bissau","Georgetown","Port-au-Prince","Tegucigalpa","Budapest","Avarua","Majuro","New Delhi","Jakarta","Bagdad","Téhéran","Dublin","Reykjavik","Jérusalem","Rome","Kingston","Tokyo","Amman","Noursoultan","Nairobi","Bichkek","Tarawa-Sud","Pristina","Koweït","Vientiane","Maseru","Riga","Beyrouth","Monrovia","Tripoli","Vaduz","Vilnius","Luxembourg","Skopje","Antananarivo","Kuala Lumpur","Lilongwe","Malé","Bamako","La Valette","Rabat","Port-Louis","Nouakchott","Mexico","Palikir","Chișinău","Monaco","Oulan-Bator","Podgorica","Maputo","Windhoek","Yaren","Katmandou","Managua","Niamey","Abuja","Alofi","Oslo","Wellington","Mascate","Kampala","Tachkent","Islamabad","Ngerulmud","Ramallah","Panama","Port Moresby","Asuncion","Amsterdam","Lima","Manille","Varsovie","Lisbonne","Doha","Bangui","Kinshasa","Saint-Domingue","Brazzaville","Prague","Bucarest","Londres","Moscou","Kigali","Basseterre","Kingstown","Castries","Saint-Marin","Honiara","San Salvador","Apia","São Tomé","Dakar","Belgrade","Victoria","Freetown","Singapour","Bratislava","Ljubljana","Mogadiscio","Khartoum","Djouba","Sri Jayawardenapura","Stockholm","Berne","Paramaribo","Damas","Douchanbé","Dodoma","N’Djaména","Bangkok","Dili","Lomé","Nukuʻalofa","Port-d’Espagne","Tunis","Achgabat","Ankara","Funafuti","Kiev","Montevideo","Port-Vila","Vatican","Caracas","Hanoï","Sanaa","Lusaka","Harare"];

const MONDE_FR = ["Afrique du Sud","Afghanistan","Albanie","Algérie","Allemagne","Andorre","Angola","Antigua-et-Barbuda","Arabie Saoudite","Argentine","Arménie","Australie","Autriche","Azerbaïdjan","Bahamas","Bahreïn","Bangladesh","Barbade","Belgique","Belize","Bénin","Bhoutan","Biélorussie","Birmanie","Bolivie","Bosnie-Herzégovine","Botswana","Brésil","Brunei","Bulgarie","Burkina Faso","Burundi","Cambodge","Cameroun","Canada","Cap-Vert","Chili","Chine","Chypre","Colombie","Comores","Corée du Nord","Corée du Sud","Costa Rica","Côte d\'Ivoire","Croatie","Cuba","Danemark","Djibouti","Dominique","Égypte","Émirats arabes unis","Équateur","Érythrée","Espagne","Eswatini","Estonie","États-Unis","Éthiopie","Fidji","Finlande","France","Gabon","Gambie","Géorgie","Ghana","Grèce","Grenade","Guatemala","Guinée","Guinée équatoriale","Guinée-Bissau","Guyana","Haïti","Honduras","Hongrie","Îles Cook","Îles Marshall","Inde","Indonésie","Irak","Iran","Irlande","Islande","Israël","Italie","Jamaïque","Japon","Jordanie","Kazakhstan","Kenya","Kirghizistan","Kiribati","Kosovo","Koweït","Laos","Lesotho","Lettonie","Liban","Liberia","Libye","Liechtenstein","Lituanie","Luxembourg","Macédoine du nord","Madagascar","Malaisie","Malawi","Maldives","Mali","Malte","Maroc","Maurice","Mauritanie","Mexique","Micronésie","Moldavie","Monaco","Mongolie","Monténégro","Mozambique","Namibie","Nauru","Népal","Nicaragua","Niger","Nigeria","Niue","Norvège","Nouvelle-Zélande","Oman","Ouganda","Ouzbékistan","Pakistan","Palaos","Palestine","Panama","Papouasie-Nouvelle-Guinée","Paraguay","Pays-Bas","Pérou","Philippines","Pologne","Portugal","Qatar","République centrafricaine","République démocratique du Congo","République Dominicaine","République du Congo","République tchèque","Roumanie","Royaume-Uni","Russie","Rwanda","Saint-Kitts-et-Nevis","Saint-Vincent-et-les-Grenadines","Sainte-Lucie","Saint-Marin","Salomon","Salvador","Samoa","São Tomé-et-Principe","Sénégal","Serbie","Seychelles","Sierra Leone","Singapour","Slovaquie","Slovénie","Somalie","Soudan","Soudan du Sud","Sri Lanka","Suède","Suisse","Suriname","Syrie","Tadjikistan","Tanzanie","Tchad","Thaïlande","Timor oriental","Togo","Tonga","Trinité-et-Tobago","Tunisie","Turkménistan","Turquie","Tuvalu","Ukraine","Uruguay","Vanuatu","Vatican","Venezuela","Viêt Nam","Yémen","Zambie","Zimbabwe"];

const EUROPE = ["Albanie","Allemagne","Andorre","Autriche","Belgique","Biélorussie","Bosnie-Herzégovine","Bulgarie","Chypre","Croatie","Danemark","Espagne","Estonie","Finlande","France","Grèce","Hongrie","Irlande","Islande","Italie","Kosovo","Lettonie","Liechtenstein","Lituanie","Luxembourg","Macédoine du nord","Malte","Moldavie","Monaco","Monténégro","Norvège","Pays-Bas","Pologne","Portugal","République tchèque","Roumanie","Royaume-Uni","Russie","Saint-Marin","Serbie","Slovaquie","Slovénie","Suède","Suisse","Ukraine","Vatican"]

const AFRIQUE = ["Afrique du Sud","Algérie","Angola","Bénin","Botswana","Burkina Faso","Burundi","Cameroun","Cap-Vert","République centrafricaine","Comores","République du Congo","République démocratique du Congo","Côte d\'Ivoire","Djibouti","Égypte","Érythrée","Eswatini","Éthiopie","Gabon","Gambie","Ghana","Guinée","Guinée-Bissau","Guinée équatoriale","Kenya","Lesotho","Liberia","Libye","Madagascar","Malawi","Mali","Maroc","Maurice","Mauritanie","Mozambique","Namibie","Niger","Nigeria","Ouganda","Rwanda","São Tomé-et-Principe","Sénégal","Seychelles","Sierra Leone","Somalie","Soudan","Soudan du Sud","Tanzanie","Tchad","Togo","Tunisie","Zambie","Zimbabwe"]

const AMERIQUE = ["Antigua-et-Barbuda","Argentine","Bahamas","Barbade","Belize","Bolivie","Brésil","Canada","Chili","Colombie","Costa Rica","Cuba","République Dominicaine","Dominique","Équateur","États-Unis","Grenade","Guatemala","Guyana","Haïti","Honduras","Jamaïque","Mexique","Nicaragua","Panama","Paraguay","Pérou","Saint-Kitts-et-Nevis","Saint-Vincent-et-les-Grenadines","Sainte-Lucie","Salvador","Suriname","Trinité-et-Tobago","Uruguay","Venezuela"]

const ASIE = ["Afghanistan","Arabie Saoudite","Arménie","Azerbaïdjan","Bahreïn","Bangladesh","Bhoutan","Birmanie","Brunei","Cambodge","Chine","Corée du Nord","Corée du Sud","Émirats arabes unis","Géorgie","Inde","Indonésie","Irak","Iran","Israël","Japon","Jordanie","Kazakhstan","Kirghizistan","Koweït","Laos","Liban","Malaisie","Maldives","Mongolie","Népal","Oman","Ouzbékistan","Palestine","Pakistan","Philippines","Qatar","Singapour","Sri Lanka","Syrie","Tadjikistan","Thaïlande","Timor oriental","Turkménistan","Turquie","Viêt Nam","Yémen"]

const OCEANIE = ["Australie","Îles Cook","Fidji","Kiribati","Îles Marshall","Micronésie","Nauru","Niue","Nouvelle-Zélande","Palaos","Papouasie-Nouvelle-Guinée","Salomon","Samoa","Tonga","Tuvalu","Vanuatu"];

const PAYS_CAPITALES = {};
for (let i = MONDE_FR.length - 1; i >= 0; i--) {
	PAYS_CAPITALES[MONDE_FR[i]] = CAPITALES[i];
}










//Fonctions Maths Utiles

function randint(min, max) {
	return (Math.round(Math.random()*max + min));
}


function soustraire_tableau(tab1, tab2) {
	for (var i = tab1.length - 1; i >= 0; i--) {
		if (tab2.includes(tab1[i])) {
			tab1.splice(i, 1);
		}
	}
	return tab1
}


function ressemble(str1, str2) {
  str1 = str1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/-/g,"").replace(/'/g,"").replace(" ","");
  str2 = str2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/-/g,"").replace(/'/g,"").replace(" ","");
  return(str1 == str2)
}










//Variables

var score = 0;
var tour = 0;
var pays;
var liste_pays;
var isPressed = true;
const PRINCIPALE = document.getElementById("principale");
var liste_ereurs = [];

//Variables Options
var options = {
	mode_de_jeu : "simple",
	nombre_pays : 198,
	liste_pays_stable : MONDE_FR,
	continents_selectionnes : {"afrique":true,"amerique":true,"asie":true,"europe":true,"oceanie":true,"erreur":false}
}









//Acceuil

function jouer() {
	switch (options.mode_de_jeu) {
		case"simple":
			jouer_simple();
			break;
		case"difficile":
			jouer_difficile();
			break;
	}
}

function recommencer() {
	score = 0;
	tour = 0;
	PRINCIPALE.innerHTML = '<p>Quiz Capitales</p><button onclick="jouer()" id="bouton">Jouer</button><br><button onclick="option()" id="option">Options</button>'
}










// Difficile

function jouer_difficile() {
	liste_pays = [...options.liste_pays_stable];
	liste_ereurs = [];
	tour_suivant_difficile();
}

function tour_suivant_difficile() {
	if (tour < options.nombre_pays) {
		pays = liste_pays.splice(randint(0, liste_pays.length - 1), 1);
		PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p id="texte">Trouver la capitale de : ' + pays + '</p><img src="Drapeaux\\Flag_of_' + TRAD[pays] + '.svg" alt="Drapeau de ' + pays + '" width="250" height="166"><br><br><input type="text" id="reponse" onkeypress="reponse(event)"><br><p>' + score + ' / ' + tour + '</p>';
		document.getElementById("reponse").focus();
		tour++;
	}
	else {
		PRINCIPALE.innerHTML = '<p id="texte">Vous avez terminez.<br> Votre score est de ' + score + ' / ' + tour + '</p><button onclick="recommencer()">Recommencer</button>';
	}
}


function handleEnterDown(eventKeyboard) {
	if (eventKeyboard.key == "Enter" && !isPressed) {
		tour_suivant_difficile();
		removeListener();
	}
	isPressed = false;
}

function removeListener() {
	document.removeEventListener('keyup', handleEnterDown, true);
}

function reponse(event) {
	if (event.key === "Enter" && document.getElementById("reponse").value != "") {
		document.addEventListener('keyup', handleEnterDown, true);
		isPressed = true;
		if (ressemble(document.getElementById("reponse").value, PAYS_CAPITALES[pays])) {
			score++;
			PRINCIPALE.innerHTML = '<button onclick="recommencer(); removeListener()" id="retour">Retour</button><p id="texte">Correct, la capitale de ' + pays + ' était ' + PAYS_CAPITALES[pays] + '<br>+1</p><button onclick="tour_suivant_difficile(); removeListener()">Continuer</button><p>' + score + ' / ' + tour + '</p>';
		}
		else {
			PRINCIPALE.innerHTML = '<button onclick="recommencer(); removeListener()" id="retour">Retour</button><p id="texte">Faux, la capitale de ' + pays + ' était ' + PAYS_CAPITALES[pays] + '</p><button onclick="tour_suivant_difficile(); removeListener()">Continuer</button><p>' + score + ' / ' + tour + '</p>';
			liste_ereurs.push(pays[0]);
		}
	}
}










//Simple

function jouer_simple() {
	liste_pays = [...options.liste_pays_stable];
	liste_ereurs = [];
	tour_suivant_simple();
}


function tour_suivant_simple() {
	if (tour < options.nombre_pays) {
		pays = liste_pays.splice(randint(0, liste_pays.length - 1), 1);
		PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p id="texte">Trouver la capitale de : ' + pays + '</p><img src="Drapeaux\\Flag_of_' + TRAD[pays] + '.svg" alt="Drapeau de ' + pays + '" width="250" height="166"><br><br><button onclick="reveler_capitale()">Reveler la capitale</button><p>' + score + ' / ' + tour + '</p>';
		tour++;
	}
	else {
		PRINCIPALE.innerHTML = '<p id="texte">Vous avez terminez.<br> Votre score est de ' + score + ' / ' + tour + '</p><button onclick="recommencer()">Recommencer</button>';
	}
}


function reveler_capitale() {
	PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p id="texte">La capitale de ' + pays + ' est ' + PAYS_CAPITALES[pays] + '. Aviez vous correct ?</p><button onclick="oui()" id="oui">Oui</button><button onclick="non()" id="non">Non</button><p>' + score + ' / ' + (tour - 1) + '</p>';
}


function oui() {
	score++;
	tour_suivant_simple();
}
function non() {
	liste_ereurs.push(pays[0]);
	tour_suivant_simple();
}










//Options

function selection_pays(pays_choisit) {
	if (document.getElementById("erreur").checked) {
		options.liste_pays_stable = [];
		options.continents_selectionnes["erreur"] = false;
		document.getElementById("erreur").checked = false;
	}
	if (!document.getElementById("afrique").checked & !document.getElementById("amerique").checked & !document.getElementById("asie").checked & !document.getElementById("europe").checked & !document.getElementById("oceanie").checked) {
		document.getElementById(pays_choisit).checked = true;
	}
	else if (document.getElementById(pays_choisit).checked) {
		options.liste_pays_stable = options.liste_pays_stable.concat(eval(pays_choisit.toUpperCase()));
		options.continents_selectionnes[pays_choisit] = true;
	}
	else {
		options.liste_pays_stable = soustraire_tableau(options.liste_pays_stable, eval(pays_choisit.toUpperCase()));
		options.continents_selectionnes[pays_choisit] = false;
	}
	nb_pays(options.nombre_pays);
}


function erreur() {
	if (liste_ereurs.length == 0 & document.getElementById("erreur").checked) {
		document.getElementById("erreur").checked = false;
		alert("Vous n'avez pas encore fait d'erreurs")
	}
	else if (document.getElementById("erreur").checked) {
		document.getElementById("afrique").checked = false;
		document.getElementById("amerique").checked = false;
		document.getElementById("asie").checked = false;
		document.getElementById("europe").checked = false;
		document.getElementById("oceanie").checked = false;
		options.liste_pays_stable = [...liste_ereurs];
		options.continents_selectionnes = {"afrique": false,"amerique": false,"asie": false,"europe": false,"oceanie": false,"erreur": true};
		nb_pays(options.nombre_pays);
	}
	else {
		document.getElementById("afrique").checked = true;
		options.liste_pays_stable = [...AFRIQUE];
	}
}


function nb_pays(nombre) {
	if (nombre >= options.liste_pays_stable.length) {
		document.getElementById("options.nombre_pays").value = options.liste_pays_stable.length;
		options.nombre_pays = options.liste_pays_stable.length;
	}
	else if (nombre <= 0) {
		document.getElementById("options.nombre_pays").value = 1;
		options.nombre_pays = 1;
	}
	else {
		options.nombre_pays = nombre;
	}
}


function option() {
	PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p>Mode de Jeu :</p><label for="simple">Simple</label><input type="radio" name="options.mode_de_jeu" id="simple" value="simple" onChange="options.mode_de_jeu = this.value"><br><label for="difficile">Difficile</label><input type="radio" name="options.mode_de_jeu" id="difficile" value="difficile" onChange="options.mode_de_jeu = this.value"><p>Nombre de pays :</p><input type=number value="' + options.nombre_pays + '" id="options.nombre_pays" onInput="nb_pays(this.value)"><p>Pays :</p><p>Afrique<input type="checkbox" onChange="selection_pays(this.id)" id="afrique"><br>Amerique<input type="checkbox" onChange="selection_pays(this.id)" id="amerique"><br>Asie<input type="checkbox" onChange="selection_pays(this.id)" id="asie"><br>Europe<input type="checkbox" onChange="selection_pays(this.id)" id="europe"><br>Oceanie<input type="checkbox" onChange="selection_pays(this.id)" id="oceanie"><br>Erreurs<input type="checkbox" onChange="erreur()" id="erreur"></p>';
	for (let continent in options.continents_selectionnes) {
		document.getElementById(continent).checked = options.continents_selectionnes[continent];
	}
	if (options.mode_de_jeu == "simple") {
		document.getElementById("simple").checked = true;
	}
	else{
		document.getElementById("difficile").checked = true;
	}
}
