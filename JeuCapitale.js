const MONDE_EN = ["Cook_Islands","Niue","Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso","Burundi","Cambodia","Cameroon","Canada","Cape_Verde","Central_African_Republic","Chad","Chile","China","Colombia","Comoros","Democratic_Republic_of_the_Congo","Republic_of_the_Congo","Costa_Rica","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","East_Timor","Ecuador","Egypt","El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory_Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","North_Korea","South_Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall_Islands","Mauritania","Mauritius","Mexico","Federated_States_of_Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria","North_Macedonia","Norway","Oman","Pakistan","Palestine","Palau","Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia","Saint_Vincent_and_the_Grenadines","Samoa","San_Marino","Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles","Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia","South_Africa","Spain","Sri_Lanka","Sudan","South_Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad_and_Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu","Vatican_City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

const TRAD = {"Afrique du Sud":"South_Africa","Afghanistan":"Afghanistan","Albanie":"Albania","Alg??rie":"Algeria","Allemagne":"Germany","Andorre":"Andorra","Angola":"Angola","Antigua-et-Barbuda":"Antigua_and_Barbuda","Arabie Saoudite":"Saudi_Arabia","Argentine":"Argentina","Arm??nie":"Armenia","Australie":"Australia","Autriche":"Austria","Azerba??djan":"Azerbaijan","Bahamas":"Bahamas","Bahre??n":"Bahrain","Bangladesh":"Bangladesh","Barbade":"Barbados","Belgique":"Belgium","Belize":"Belize","B??nin":"Benin","Bhoutan":"Bhutan","Bi??lorussie":"Belarus","Birmanie":"Myanmar","Bolivie":"Bolivia","Bosnie-Herz??govine":"Bosnia_and_Herzegovina","Botswana":"Botswana","Br??sil":"Brazil","Brunei":"Brunei","Bulgarie":"Bulgaria","Burkina Faso":"Burkina_Faso","Burundi":"Burundi","Cambodge":"Cambodia","Cameroun":"Cameroon","Canada":"Canada","Cap-Vert":"Cape_Verde","Chili":"Chile","Chine":"China","Chypre":"Cyprus","Colombie":"Colombia","Comores":"Comoros","Cor??e du Nord":"North_Korea","Cor??e du Sud":"South_Korea","Costa Rica":"Costa_Rica","C??te d\'Ivoire":"Ivory_Coast","Croatie":"Croatia","Cuba":"Cuba","Danemark":"Denmark","Djibouti":"Djibouti","Dominique":"Dominica","??gypte":"Egypt","??mirats arabes unis":"United_Arab_Emirates","??quateur":"Ecuador","??rythr??e":"Eritrea","Espagne":"Spain","Eswatini":"Eswatini","Estonie":"Estonia","??tats-Unis":"United_States","??thiopie":"Ethiopia","Fidji":"Fiji","Finlande":"Finland","France":"France","Gabon":"Gabon","Gambie":"Gambia","G??orgie":"Georgia","Ghana":"Ghana","Gr??ce":"Greece","Grenade":"Grenada","Guatemala":"Guatemala","Guin??e":"Guinea","Guin??e ??quatoriale":"Equatorial_Guinea","Guin??e-Bissau":"Guinea-Bissau","Guyana":"Guyana","Ha??ti":"Haiti","Honduras":"Honduras","Hongrie":"Hungary","??les Cook":"Cook_Islands","??les Marshall":"Marshall_Islands","Inde":"India","Indon??sie":"Indonesia","Irak":"Iraq","Iran":"Iran","Irlande":"Ireland","Islande":"Iceland","Isra??l":"Israel","Italie":"Italy","Jama??que":"Jamaica","Japon":"Japan","Jordanie":"Jordan","Kazakhstan":"Kazakhstan","Kenya":"Kenya","Kirghizistan":"Kyrgyzstan","Kiribati":"Kiribati","Kosovo":"Kosovo","Kowe??t":"Kuwait","Laos":"Laos","Lesotho":"Lesotho","Lettonie":"Latvia","Liban":"Lebanon","Liberia":"Liberia","Libye":"Libya","Liechtenstein":"Liechtenstein","Lituanie":"Lithuania","Luxembourg":"Luxembourg","Mac??doine du nord":"North_Macedonia","Madagascar":"Madagascar","Malaisie":"Malaysia","Malawi":"Malawi","Maldives":"Maldives","Mali":"Mali","Malte":"Malta","Maroc":"Morocco","Maurice":"Mauritius","Mauritanie":"Mauritania","Mexique":"Mexico","Micron??sie":"Federated_States_of_Micronesia","Moldavie":"Moldova","Monaco":"Monaco","Mongolie":"Mongolia","Mont??n??gro":"Montenegro","Mozambique":"Mozambique","Namibie":"Namibia","Nauru":"Nauru","N??pal":"Nepal","Nicaragua":"Nicaragua","Niger":"Niger","Nigeria":"Nigeria","Niue":"Niue","Norv??ge":"Norway","Nouvelle-Z??lande":"New_Zealand","Oman":"Oman","Ouganda":"Uganda","Ouzb??kistan":"Uzbekistan","Pakistan":"Pakistan","Palaos":"Palau","Palestine":"Palestine","Panama":"Panama","Papouasie-Nouvelle-Guin??e":"Papua_New_Guinea","Paraguay":"Paraguay","Pays-Bas":"Netherlands","P??rou":"Peru","Philippines":"Philippines","Pologne":"Poland","Portugal":"Portugal","Qatar":"Qatar","R??publique centrafricaine":"Central_African_Republic","R??publique d??mocratique du Congo":"Democratic_Republic_of_the_Congo","R??publique Dominicaine":"Dominican_Republic","R??publique du Congo":"Republic_of_the_Congo","R??publique tch??que":"Czech_Republic","Roumanie":"Romania","Royaume-Uni":"United_Kingdom","Russie":"Russia","Rwanda":"Rwanda","Saint-Kitts-et-Nevis":"Saint_Kitts_and_Nevis","Saint-Vincent-et-les-Grenadines":"Saint_Vincent_and_the_Grenadines","Sainte-Lucie":"Saint_Lucia","Saint-Marin":"San_Marino","Salomon":"Solomon_Islands","Salvador":"El_Salvador","Samoa":"Samoa","S??o Tom??-et-Principe":"Sao_Tome_and_Principe","S??n??gal":"Senegal","Serbie":"Serbia","Seychelles":"Seychelles","Sierra Leone":"Sierra_Leone","Singapour":"Singapore","Slovaquie":"Slovakia","Slov??nie":"Slovenia","Somalie":"Somalia","Soudan":"Sudan","Soudan du Sud":"South_Sudan","Sri Lanka":"Sri_Lanka","Su??de":"Sweden","Suisse":"Switzerland","Suriname":"Suriname","Syrie":"Syria","Tadjikistan":"Tajikistan","Tanzanie":"Tanzania","Tchad":"Chad","Tha??lande":"Thailand","Timor oriental":"East_Timor","Togo":"Togo","Tonga":"Tonga","Trinit??-et-Tobago":"Trinidad_and_Tobago","Tunisie":"Tunisia","Turkm??nistan":"Turkmenistan","Turquie":"Turkey","Tuvalu":"Tuvalu","Ukraine":"Ukraine","Uruguay":"Uruguay","Vanuatu":"Vanuatu","Vatican":"Vatican_City","Venezuela":"Venezuela","Vi??t Nam":"Vietnam","Y??men":"Yemen","Zambie":"Zambia","Zimbabwe":"Zimbabwe"};

const CAPITALES = ["Pretoria","Kaboul","Tirana","Alger","Berlin","Andorre-la-Vieille","Luanda","Saint John???s","Riyad","Buenos Aires","Erevan","Canberra","Vienne","Bakou","Nassau","Manama","Dacca","Bridgetown","Bruxelles","Belmopan","Porto-Novo","Thimphou","Minsk","Naypyidaw","Sucre","Sarajevo","Gaborone","Brasilia","Bandar Seri Begawan","Sofia","Ouagadougou","Gitega","Phnom Penh","Yaound??","Ottawa","Praia","Santiago","P??kin","Nicosie","Bogota","Moroni","Pyongyang","S??oul","San Jos??","Yamoussoukro","Zagreb","La Havane","Copenhague","Djibouti","Roseau","Le Caire","Abou Dabi","Quito","Asmara","Madrid","Mbabane","Tallinn","Washington","Addis-Abeba","Suva","Helsinki","Paris","Libreville","Banjul","Tbilissi","Accra","Ath??nes","Saint-Georges","Guatemala","Conakry","Malabo","Bissau","Georgetown","Port-au-Prince","Tegucigalpa","Budapest","Avarua","Majuro","New Delhi","Jakarta","Bagdad","T??h??ran","Dublin","Reykjavik","J??rusalem","Rome","Kingston","Tokyo","Amman","Noursoultan","Nairobi","Bichkek","Tarawa-Sud","Pristina","Kowe??t","Vientiane","Maseru","Riga","Beyrouth","Monrovia","Tripoli","Vaduz","Vilnius","Luxembourg","Skopje","Antananarivo","Kuala Lumpur","Lilongwe","Mal??","Bamako","La Valette","Rabat","Port-Louis","Nouakchott","Mexico","Palikir","Chi??in??u","Monaco","Oulan-Bator","Podgorica","Maputo","Windhoek","Yaren","Katmandou","Managua","Niamey","Abuja","Alofi","Oslo","Wellington","Mascate","Kampala","Tachkent","Islamabad","Ngerulmud","Ramallah","Panama","Port Moresby","Asuncion","Amsterdam","Lima","Manille","Varsovie","Lisbonne","Doha","Bangui","Kinshasa","Saint-Domingue","Brazzaville","Prague","Bucarest","Londres","Moscou","Kigali","Basseterre","Kingstown","Castries","Saint-Marin","Honiara","San Salvador","Apia","S??o Tom??","Dakar","Belgrade","Victoria","Freetown","Singapour","Bratislava","Ljubljana","Mogadiscio","Khartoum","Djouba","Sri Jayawardenapura","Stockholm","Berne","Paramaribo","Damas","Douchanb??","Dodoma","N???Djam??na","Bangkok","Dili","Lom??","Nuku??alofa","Port-d???Espagne","Tunis","Achgabat","Ankara","Funafuti","Kiev","Montevideo","Port-Vila","Vatican","Caracas","Hano??","Sanaa","Lusaka","Harare"];

const MONDE_FR = ["Afrique du Sud","Afghanistan","Albanie","Alg??rie","Allemagne","Andorre","Angola","Antigua-et-Barbuda","Arabie Saoudite","Argentine","Arm??nie","Australie","Autriche","Azerba??djan","Bahamas","Bahre??n","Bangladesh","Barbade","Belgique","Belize","B??nin","Bhoutan","Bi??lorussie","Birmanie","Bolivie","Bosnie-Herz??govine","Botswana","Br??sil","Brunei","Bulgarie","Burkina Faso","Burundi","Cambodge","Cameroun","Canada","Cap-Vert","Chili","Chine","Chypre","Colombie","Comores","Cor??e du Nord","Cor??e du Sud","Costa Rica","C??te d\'Ivoire","Croatie","Cuba","Danemark","Djibouti","Dominique","??gypte","??mirats arabes unis","??quateur","??rythr??e","Espagne","Eswatini","Estonie","??tats-Unis","??thiopie","Fidji","Finlande","France","Gabon","Gambie","G??orgie","Ghana","Gr??ce","Grenade","Guatemala","Guin??e","Guin??e ??quatoriale","Guin??e-Bissau","Guyana","Ha??ti","Honduras","Hongrie","??les Cook","??les Marshall","Inde","Indon??sie","Irak","Iran","Irlande","Islande","Isra??l","Italie","Jama??que","Japon","Jordanie","Kazakhstan","Kenya","Kirghizistan","Kiribati","Kosovo","Kowe??t","Laos","Lesotho","Lettonie","Liban","Liberia","Libye","Liechtenstein","Lituanie","Luxembourg","Mac??doine du nord","Madagascar","Malaisie","Malawi","Maldives","Mali","Malte","Maroc","Maurice","Mauritanie","Mexique","Micron??sie","Moldavie","Monaco","Mongolie","Mont??n??gro","Mozambique","Namibie","Nauru","N??pal","Nicaragua","Niger","Nigeria","Niue","Norv??ge","Nouvelle-Z??lande","Oman","Ouganda","Ouzb??kistan","Pakistan","Palaos","Palestine","Panama","Papouasie-Nouvelle-Guin??e","Paraguay","Pays-Bas","P??rou","Philippines","Pologne","Portugal","Qatar","R??publique centrafricaine","R??publique d??mocratique du Congo","R??publique Dominicaine","R??publique du Congo","R??publique tch??que","Roumanie","Royaume-Uni","Russie","Rwanda","Saint-Kitts-et-Nevis","Saint-Vincent-et-les-Grenadines","Sainte-Lucie","Saint-Marin","Salomon","Salvador","Samoa","S??o Tom??-et-Principe","S??n??gal","Serbie","Seychelles","Sierra Leone","Singapour","Slovaquie","Slov??nie","Somalie","Soudan","Soudan du Sud","Sri Lanka","Su??de","Suisse","Suriname","Syrie","Tadjikistan","Tanzanie","Tchad","Tha??lande","Timor oriental","Togo","Tonga","Trinit??-et-Tobago","Tunisie","Turkm??nistan","Turquie","Tuvalu","Ukraine","Uruguay","Vanuatu","Vatican","Venezuela","Vi??t Nam","Y??men","Zambie","Zimbabwe"];

const EUROPE = ["Albanie","Allemagne","Andorre","Autriche","Belgique","Bi??lorussie","Bosnie-Herz??govine","Bulgarie","Chypre","Croatie","Danemark","Espagne","Estonie","Finlande","France","Gr??ce","Hongrie","Irlande","Islande","Italie","Kosovo","Lettonie","Liechtenstein","Lituanie","Luxembourg","Mac??doine du nord","Malte","Moldavie","Monaco","Mont??n??gro","Norv??ge","Pays-Bas","Pologne","Portugal","R??publique tch??que","Roumanie","Royaume-Uni","Russie","Saint-Marin","Serbie","Slovaquie","Slov??nie","Su??de","Suisse","Ukraine","Vatican"]

const AFRIQUE = ["Afrique du Sud","Alg??rie","Angola","B??nin","Botswana","Burkina Faso","Burundi","Cameroun","Cap-Vert","R??publique centrafricaine","Comores","R??publique du Congo","R??publique d??mocratique du Congo","C??te d???Ivoire","Djibouti","??gypte","??rythr??e","Eswatini","??thiopie","Gabon","Gambie","Ghana","Guin??e","Guin??e-Bissau","Guin??e ??quatoriale","Kenya","Lesotho","Liberia","Libye","Madagascar","Malawi","Mali","Maroc","Maurice","Mauritanie","Mozambique","Namibie","Niger","Nigeria","Ouganda","Rwanda","S??o Tom??-et-Principe","S??n??gal","Seychelles","Sierra Leone","Somalie","Soudan","Soudan du Sud","Tanzanie","Tchad","Togo","Tunisie","Zambie","Zimbabwe"]

const AMERIQUE = ["Antigua-et-Barbuda","Argentine","Bahamas","Barbade","Belize","Bolivie","Br??sil","Canada","Chili","Colombie","Costa Rica","Cuba","R??publique Dominicaine","Dominique","??quateur","??tats-Unis","Grenade","Guatemala","Guyana","Ha??ti","Honduras","Jama??que","Mexique","Nicaragua","Panama","Paraguay","P??rou","Saint-Kitts-et-Nevis","Saint-Vincent-et-les-Grenadines","Sainte-Lucie","Salvador","Suriname","Trinit??-et-Tobago","Uruguay","Venezuela"]

const ASIE = ["Afghanistan","Arabie Saoudite","Arm??nie","Azerba??djan","Bahre??n","Bangladesh","Bhoutan","Birmanie","Brunei","Cambodge","Chine","Cor??e du Nord","Cor??e du Sud","??mirats arabes unis","G??orgie","Inde","Indon??sie","Irak","Iran","Isra??l","Japon","Jordanie","Kazakhstan","Kirghizistan","Kowe??t","Laos","Liban","Malaisie","Maldives","Mongolie","N??pal","Oman","Ouzb??kistan","Palestine","Pakistan","Philippines","Qatar","Singapour","Sri Lanka","Syrie","Tadjikistan","Tha??lande","Timor oriental","Turkm??nistan","Turquie","Vi??t Nam","Y??men"]

const OCEANIE = ["Australie","??les Cook","Fidji","Kiribati","??les Marshall","Micron??sie","Nauru","Niue","Nouvelle-Z??lande","Palaos","Papouasie-Nouvelle-Guin??e","Salomon","Samoa","Tonga","Tuvalu","Vanuatu"];

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
  str1 = str1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/-/g,"").replace(/'/g,"");
  str2 = str2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/-/g,"").replace(/'/g,"");
  return(str1 == str2)
}










//Variables

var score = 0;
var tour = 0;
var pays;
var liste_pays;
const PRINCIPALE = document.getElementById("principale");
var liste_ereurs = [];

//Variables Options
var mode_de_jeu ="simple";
var nombre_pays = 198;
var liste_pays_stable = MONDE_FR;
var continents_selectionnes = {"afrique":true,"amerique":true,"asie":true,"europe":true,"oceanie":true,"erreur":false}









//Acceuil

function jouer() {
	switch (mode_de_jeu) {
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
	liste_pays = [...liste_pays_stable];
	liste_ereurs = [];
	tour_suivant_difficile();
}


function tour_suivant_difficile() {
	if (tour < nombre_pays) {
		pays = liste_pays.splice(randint(0, liste_pays.length - 1), 1);
		PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p id="texte">Trouver la capitale de : ' + pays + '</p><img src="Drapeaux\\Flag_of_' + TRAD[pays] + '.svg" alt="Drapeau de ' + pays + '" width="250" height="166"><br><br><input type="text" id="reponse"><br><br><button onclick="reponse()">Envoyer</button><p>' + score + ' / ' + tour + '</p>';
		tour++;
	}
	else {
		PRINCIPALE.innerHTML = '<p id="texte">Vous avez terminez.<br> Votre score est de ' + score + ' / ' + tour + '</p><button onclick="recommencer()">Recommencer</button>';
	}
}


function reponse() {
	if (ressemble(document.getElementById("reponse").value, PAYS_CAPITALES[pays])) {
		score++;
		PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p id="texte">Correct, +1 point</p><button onclick="tour_suivant_difficile()">Continuer</button><p>' + score + ' / ' + tour + '</p>';
	}
	else {
		PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p id="texte">Faux, la capitale de ' + pays + ' ??tait ' + PAYS_CAPITALES[pays] + '</p><button onclick="tour_suivant_difficile()">Continuer</button><p>' + score + ' / ' + tour + '</p>';
	}
}










//Simple

function jouer_simple() {
	liste_pays = [...liste_pays_stable];
	liste_ereurs = [];
	tour_suivant_simple();
}


function tour_suivant_simple() {
	if (tour < nombre_pays) {
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
		liste_pays_stable = [];
		document.getElementById("erreur").checked = false;
	}
	if (!document.getElementById("afrique").checked & !document.getElementById("amerique").checked & !document.getElementById("asie").checked & !document.getElementById("europe").checked & !document.getElementById("oceanie").checked) {
		document.getElementById(pays_choisit).checked = true;
	}
	else if (document.getElementById(pays_choisit).checked) {
		liste_pays_stable = liste_pays_stable.concat(eval(pays_choisit.toUpperCase()));
		continents_selectionnes[pays_choisit] = true;
	}
	else {
		liste_pays_stable = soustraire_tableau(liste_pays_stable, eval(pays_choisit.toUpperCase()));
		continents_selectionnes[pays_choisit] = false;
	}
	nb_pays(nombre_pays);
}


function erreur() {
	if (liste_ereurs.length == 0) {
		document.getElementById("erreur").checked = false;
		alert("Vous n'avez pas encore fait d'erreurs")
	}
	else if (document.getElementById("erreur").checked) {
		document.getElementById("afrique").checked = false;
		document.getElementById("amerique").checked = false;
		document.getElementById("asie").checked = false;
		document.getElementById("europe").checked = false;
		document.getElementById("oceanie").checked = false;
		liste_pays_stable = [...liste_ereurs];
		continents_selectionnes = {"afrique": false,"amerique": false,"asie": false,"europe": false,"oceanie": false,"erreur": true};
		nb_pays(nombre_pays);
	}
	else {
		document.getElementById("afrique").checked = true;
		liste_pays_stable = [...AFRIQUE];
	}
}


function nb_pays(nombre) {
	if (nombre >= liste_pays_stable.length) {
		document.getElementById("nombre_pays").value = liste_pays_stable.length;
		nombre_pays = liste_pays_stable.length;
	}
	else if (nombre <= 0) {
		document.getElementById("nombre_pays").value = 1;
		nombre_pays = 1;
	}
	else {
		nombre_pays = nombre;
	}
}


function option() {
	PRINCIPALE.innerHTML = '<button onclick="recommencer()" id="retour">Retour</button><p>Mode de Jeu :</p><label for="simple">Simple</label><input type="radio" name="mode_de_jeu" id="simple" value="simple" checked onChange="mode_de_jeu = this.value"><br><label for="difficile">Difficile</label><input type="radio" name="mode_de_jeu" id="difficile" value="difficile" onChange="mode_de_jeu = this.value"><p>Nombre de pays :</p><input type=number value="' + nombre_pays + '" id="nombre_pays" onInput="nb_pays(this.value)"><p>Pays :</p><p>Afrique<input type="checkbox" onChange="selection_pays(this.id)" id="afrique"><br>Amerique<input type="checkbox" onChange="selection_pays(this.id)" id="amerique"><br>Asie<input type="checkbox" onChange="selection_pays(this.id)" id="asie"><br>Europe<input type="checkbox" onChange="selection_pays(this.id)" id="europe"><br>Oceanie<input type="checkbox" onChange="selection_pays(this.id)" id="oceanie"><br>Erreurs<input type="checkbox" onChange="erreur()" id="erreur"></p>';
		for (let continent in continents_selectionnes) {
			document.getElementById(continent).checked = continents_selectionnes[continent];
	}
}
