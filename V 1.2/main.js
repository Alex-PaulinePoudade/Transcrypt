let couleur = "#760000";
//let couleur = "#005DDD";
//let couleur = "#288A00";
//let couleur = "#5C5C5C";



function initialisation () {
	if (window.innerHeight > 530 && window.innerWidth > 830 && window.innerWidth < window.innerHeight) {
		document.getElementById("contenuContact").style.maxHeight = window.innerHeight - 200 + "px";
	}
	else {
		document.getElementById("contenuContact").style.maxHeight = window.innerHeight - 100 + "px";
	}
	
	document.getElementById("contenuMessage").style.maxHeight = window.innerHeight - 257 + "px";
	document.getElementById("contenuMessage").style.minHeight = window.innerHeight - 257 + "px";
	document.getElementById("pageListeUtilisateurs").style.display = "none";
	//demander un code identificateur
	document.getElementById("nameUser").value = "User_12345678";  // on met le code de l'user normalement

}

function nouvelleTaille () {

	let tailleInput = document.getElementById("messageAEnvoyer").scrollHeight;
	let tailleSpan = document.getElementById("envoyerMessage").style.height;

	if (window.innerHeight > 530 && window.innerWidth > 830 && window.innerWidth < window.innerHeight) {
		if (tailleInput>800){
			document.getElementById("contenuMessage").style.maxHeight = window.innerHeight - parseInt(tailleSpan.slice(0, -1)) - 250 + "px";
			document.getElementById("contenuMessage").style.minHeight = window.innerHeight - parseInt(tailleSpan.slice(0, -1)) - 250 + "px";
		}
		else {
			document.getElementById("contenuMessage").style.maxHeight = window.innerHeight - tailleInput - 370 + "px";
			document.getElementById("contenuMessage").style.minHeight = window.innerHeight - tailleInput - 370 + "px";
		}
	}

	else {
		if (tailleInput>200){
			document.getElementById("contenuMessage").style.maxHeight = window.innerHeight - parseInt(tailleSpan.slice(0, -1)) -177 + "px";
			document.getElementById("contenuMessage").style.minHeight = window.innerHeight - parseInt(tailleSpan.slice(0, -1)) -177 + "px";
		}
		else {
			document.getElementById("contenuMessage").style.maxHeight = window.innerHeight - tailleInput - 208 + "px";
			document.getElementById("contenuMessage").style.minHeight = window.innerHeight - tailleInput - 208 + "px";
		}
		
		if (window.innerWidth > 830) {
			document.getElementById("main").style.display = "initial";
			document.getElementById("contenuContact").style.display = "initial";
		}
		else if (document.getElementById("main").style.display != "none" && document.getElementById("contenuContact").style.display != "none") {
			document.getElementById("main").style.display = "initial";
			document.getElementById("contenuContact").style.display = "none";
		}
	}


	if (window.innerHeight <= 530) {
		afficherListeConversations();
	}
}



//class Message{
	//constructor(me, others, valeur){             // si l'auteur est l'utilisateur, on pose me = 1 et others prend lavaleur du code identificateur de la cible du message
		//this.me = me;				  	 		 // si l'auteur n'est est pas l'utilisateur, others prend lavaleur du code identificateur de la source du message
		//this.others = others;
		//this.valeur = valeur;
	//}

	function afficherMessage (me, others, valeur){

    	/*let bool = false;

    	let listeDiscussions = document.querySelectorAll(".convContainers");

		listeDiscussions.forEach(function(userId) {
			document.getElementById(userId.getAttribute("id")).style.display = "none";
  			if (userId.getAttribute("id") == others.toString()) {
  				bool = true;
  			}
		});

		if (bool==false) {
			let messageIntro = document.createElement("div");
			messageIntro.setAttribute("class", "messageIntro");
			messageIntro.appendChild(document.createTextNode("Cette conversation est sécurisée"));
			let convContainer = document.createElement("div");
			convContainer.setAttribute("id", others.toString());
			convContainer.setAttribute("class", "convContainers");
			convContainer.appendChild(messageIntro);
			document.getElementById("contenuMessage").appendChild(convContainer);
			afficherContact(others.toString(), valeur);
		} */

		//document.getElementById(others.toString()).style.display = "initial";   // deja fait dans afficherConversationContact

		let myMessage = document.createElement("p");
    	let myContainer = document.createElement("article");
    
		if (me==1){
			myMessage.setAttribute("class", "fromUser");
    	  	myContainer.setAttribute("class", "rightContainer");
		}
		else {
			myMessage.setAttribute("class", "toUser");
    	  	myContainer.setAttribute("class", "leftContainer");
		}
    	
    	myMessage.appendChild(document.createTextNode(valeur));
    
    	myContainer.appendChild(myMessage);
    
    	document.getElementById(others.toString()).appendChild(myContainer);

    	document.getElementById("derniersMots"+others).innerHTML = valeur;

    	afficherConversationContact(others+"case");

    	document.getElementById("contenuMessage").scrollTo(0, document.getElementById("contenuMessage").scrollHeight);

    	if (couleur == "#760000") {
    		orange();
    	}
    	else if (couleur == "#005DDD") {
    		bleu();
    	}
    	else if (couleur == "#288A00") {
    		vert();
    	}
    	else {
    		blanc();
    	}
	}
//}



//class Contact{
	//constructor(nom, lastMessage){
		//this.nom = nom;
		//this.lastMessage = lastMessage;
	//}

	function afficherContact (nom, lastMessage){
    
	let boxContact = document.createElement("div");
    let nameContact = document.createElement("h1");
    let latestWord = document.createElement("p");
    
    boxContact.setAttribute("id", nom + "case");
    boxContact.setAttribute("onclick", "afficherConversationContact(this.id)");
    boxContact.setAttribute("class", "caseContact");
    nameContact.setAttribute("class", "nomContact");
    latestWord.setAttribute("class", "derniersMots");
    latestWord.setAttribute("id", "derniersMots"+nom);
    
    nameContact.appendChild(document.createTextNode("User_"+nom));
    latestWord.appendChild(document.createTextNode(lastMessage));
    
    boxContact.appendChild(nameContact);
    boxContact.appendChild(latestWord);
    
    document.getElementById("contenuContact").appendChild(boxContact);

    document.getElementById("messageAEnvoyer").dataCible = nom;

    if (couleur == "#760000") {
    	orange();
    }
    else if (couleur == "#005DDD") {
    	bleu();
    }
    else if (couleur == "#288A00") {
    	vert();
    }
    else {
    	blanc();
    }
}

//}




function send() {
	let message = document.getElementById("messageAEnvoyer").value;
	if (1) {
		let cible = document.getElementById("messageAEnvoyer").dataCible;
		// envoyer au serveur, la cible est contenue dans la var cible en string !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		afficherMessage(1, parseInt(cible),  document.getElementById("messageAEnvoyer").value);

		document.getElementById("messageAEnvoyer").value="";
		nouvelleTaille();
	}
}

let lastInputLetterCode=13;

function maybeSend(e) {
	if(e.keyCode==13 && lastInputLetterCode != 13 && document.getElementById("messageAEnvoyer").dataCible != ""){
		send();
	}
	let taille = document.getElementById("messageAEnvoyer").scrollHeight;
	if (window.innerHeight > 530 && window.innerWidth > 830 && window.innerWidth < window.innerHeight) {
		if (taille < 800) {
			document.getElementById("envoyerMessage").style.height = taille + 110 + "px";
			document.getElementById("messageAEnvoyer").style.height = taille + "px";
		}
		
	}
	else if(taille < 200){
		document.getElementById("envoyerMessage").style.height = taille + 30 + "px";
	}
	nouvelleTaille();
	
	if (lastInputLetterCode = 13){
		clean(e);
	}
	lastInputLetterCode = e.keyCode;
}

function clean(e){
	if(e.keyCode==13){
		document.getElementById("messageAEnvoyer").value="";
		if (window.innerHeight > 530 && window.innerWidth > 830 && window.innerWidth < window.innerHeight) {
			document.getElementById("messageAEnvoyer").style.height = "110px";
		}
		else {
			document.getElementById("envoyerMessage").style.height = "80px";
		}
		nouvelleTaille();
	}
}

function boutonSend (){
	send();
	lastInputLetterCode = 13;
}

function afficherConversationContact (e) {   // l'appeler aussi quand on recoit un message de qui que ce soit
	document.getElementById("messageAEnvoyer").dataCible = e.slice(0, -4);

	let listeContacts = document.querySelectorAll(".caseContact");
	listeContacts.forEach(function(userId) {
			document.getElementById(userId.getAttribute("id")).style.backgroundColor = "#1F1F1F";
	});
	document.getElementById(e).style.backgroundColor = couleur;

	let listeDiscussions = document.querySelectorAll(".convContainers");
	listeDiscussions.forEach(function(userId) {
			document.getElementById(userId.getAttribute("id")).style.display = "none";
	});
	document.getElementById(e.slice(0, -4)).style.display = "initial";

	let boite = document.getElementById(e);
	let pseudoAssocie = boite.firstChild.innerHTML;
	document.getElementById("barreContact").innerHTML = pseudoAssocie;

	document.getElementById("contenuMessage").scrollTo(0, document.getElementById("contenuMessage").scrollHeight);

	if(window.innerWidth <= 830 || window.innerWidth < window.innerHeight){
		document.getElementById("contenuContact").style.display = "none";
		document.getElementById("main").style.display = "initial";
	}

	nouvelleTaille();
	azertyuiop({"78459625":"User_78459625", "96542578":"bob", "42657830":"marlet"});
}


function chercherNouveauContact(e) {
	sentId = document.getElementById("idNouveauContact").value;
	let bool = false;

    	let listeDiscussions = document.querySelectorAll(".convContainers");

		listeDiscussions.forEach(function(userId) {
  			if (userId.getAttribute("id") == sentId) {
  				bool = true;
  			}
		});
	if((e.keyCode==13 || e == 13) && bool==false && sentId!=""){
		document.getElementById("idNouveauContact").value = "";
		let messageIntro = document.createElement("div");
		messageIntro.setAttribute("class", "messageIntro");
		messageIntro.appendChild(document.createTextNode("Cette conversation est sécurisée"));
		let convContainer = document.createElement("div");
		convContainer.setAttribute("id", sentId);
		convContainer.setAttribute("class", "convContainers");
		convContainer.appendChild(messageIntro);
		document.getElementById("contenuMessage").appendChild(convContainer);
		afficherContact(sentId, ""); 
		let sentIdUser = sentId+"case";
		afficherConversationContact(sentIdUser);
		 
		                      // afficherContact(id, "");
		//doesUserBe(parseInt(sentId));             // vérifier que c'est pas un float
	}
}



function changeArea () {
	document.getElementById("main").style.display = "none";
	document.getElementById("contenuContact").style.display = "initial";
}






function help () {
	document.getElementById("contenu").style.display = "none";
	document.getElementsByTagName("header")[0].style.display = "none";
	document.getElementById("pageAide").style.display = "initial";
	document.getElementsByTagName("body")[0].style.overflowY = "auto";
}

function public () {
	//dire au serveur
	document.getElementById("prive").style.opacity = "1";
	document.getElementById("public").style.opacity = ".6";
}

function prive () {	
	//dire au serveur
	document.getElementById("public").style.opacity = "1";
	document.getElementById("prive").style.opacity = ".6";
}

function afficherListeUtilisateurs () {
	//alert(window.innerWidth);
	document.getElementById("contenu").style.display = "none";
	document.getElementsByTagName("header")[0].style.display = "none";
	document.getElementById("pageListeUtilisateurs").style.display = "initial";
	afficherListe(exListeUser);
}

function afficherListeConversations () {
	document.getElementById("contenu").style.display = "flex";
	document.getElementsByTagName("header")[0].style.display = "flex";
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
	document.getElementById("pageListeUtilisateurs").style.display = "none";
	document.getElementById("pageAide").style.display = "none";
	nouvelleTaille();
}

function chercheUser () {
// soit x le nb d'utilisateurs en public
}

function afficherPagePrecedente () {
	let NumeroPage = document.getElementById("page").innerHTML;
	let variableDureANommer = NumeroPage.indexOf("/");
	let pageActive = document.getElementById("page").innerHTML.slice(0,variableDureANommer);
	let pageRestantes = document.getElementById("page").innerHTML.slice(variableDureANommer,NumeroPage.lenght)

	if (pageActive != 1) {
		pageActive = parseInt(pageActive);
		pageActive -=1;
		document.getElementById("page").innerHTML = pageActive.toString()+pageRestantes;
		chercheUser();
	}
}

function afficherPageSuivante () {
	let NumeroPage = document.getElementById("page").innerHTML;
	let variableDureANommer = NumeroPage.indexOf("/");
	let pageActive = document.getElementById("page").innerHTML.slice(0,variableDureANommer);
	let pageRestantes = document.getElementById("page").innerHTML.slice(variableDureANommer,NumeroPage.lenght)

	if (pageActive != pageRestantes.slice(1, pageRestantes.lenght)) {
		pageActive = parseInt(pageActive);
		pageActive += 1;
		document.getElementById("page").innerHTML = pageActive.toString()+pageRestantes;
		chercheUser();
	}
}

function clicBoutonAjouterUtilisateur (e) {
	afficherListeConversations();
	let idDM = e.slice(0,8);
	document.getElementById("idNouveauContact").value = idDM;
	chercherNouveauContact(13);
}

let monPseudo = "User_1"
let userid = 78945652;
function changerPseudo () {

	if (document.getElementById("nameUser").value != "") {



		document.getElementById("VotreID").innerHTML = "Votre ID était: "+userid;
		if (window.innerHeight > 530 && window.innerWidth > 830 && window.innerWidth < window.innerHeight) {
			document.getElementById("VotreID").style.fontSize = "40px";
		}
		else {
			document.getElementById("VotreID").style.fontSize = "15px";
		}
		let monPseudo = document.getElementById("nameUser").value;           
	}








	else {
		document.getElementById("nameUser").value = monPseudo;
	}

}
	/*$.ajax( {
    type: "POST",
    url: "/changepseudo",
    data: JSON.stringify({"userid":userid, "usercode":usercode, "newpseudo":monPseudo),
    contentType: "application/json",
    dataType: 'json',
})
    .fail(function (){
        alert("La requête de changement de pseudo a echoué")
    })
    .done(function (){
        alert("La requête a réussie")
    })
    .always(function (){
        alert("Sera exécuté dans tous les cas")
    });
}*/

function azertyuiop (result){
	let listeIds = [];
	let listeContacts = document.querySelectorAll(".caseContact");
	listeContacts.forEach(function(userId) {
		let ID = userId.getAttribute("id");
		listeIds.push(ID.slice(0,-4));
	});

		let i = 0;
		let pseudo = document.querySelectorAll(".caseContact > .nomContact");
		listeIds.forEach(function(userId) {
			if (pseudo[i] != result[userId]) {
				pseudo[i].innerHTML = result[userId];
			}
			i+=1;
		})
}




let exListeUser = {"nrenvoyes":30,"correspondants": [["Gabi",85485652],["Chichi",78525426],["AP",65210236],["Dani",85741203],["benki",89857463],["Antoine92",87569235],["Gertrude",96857402],["Kylian", 45875485],["babouche",96325801],["p",10000000], ["Gabi",85485652],["Chichi",78525426],["AP",65210236],["Dani",85741203],["benki",89857463],["Antoine92",87569235],["Gertrude",96857402],["Kylian", 45875485],["babouche",96325801],["p",10000000],["Gabi",85485652],["Chichi",78525426],["AP",65210236],["Dani",85741203],["benki",89857463],["Antoine92",87569235],["Gertrude",96857402],["Kylian", 45875485],["babouche",96325801],["p",10000000]]};






function afficherListe (result) { //de la forme {"nrenvoyes": int , "correspondants": une liste de couple (pseudo, id)}
	let pageActive = 1;
	document.getElementById("listeUtilisateurs").innerHTML = "";


	let notreTableau = document.getElementById("listeUtilisateurs");
	
	let ligneTab = document.createElement("tr");
	
	let casePseudo = document.createElement("th");
	casePseudo.appendChild(document.createTextNode("Pseudo"));
	
	let caseID = document.createElement("th");
	caseID.appendChild(document.createTextNode("Identifiant"));

	let caseDM = document.createElement("th");
	caseDM.appendChild(document.createTextNode("Ecrire"));
	
	ligneTab.appendChild(casePseudo);
	ligneTab.appendChild(caseID);
	ligneTab.appendChild(caseDM);
	
	notreTableau.appendChild(ligneTab);

	document.getElementById("page").innerHTML = pageActive+"/"+(Math.floor(result["nrenvoyes"]/10+1));

    for (let i = (pageActive-1)*10; i < result["nrenvoyes"]; i += 1) {
		afficherElementOfList(result["correspondants"][i]);
    }
    if (couleur == "#760000") {
    	orange();
    }
    else if (couleur == "#005DDD") {
    	bleu();
    }
    else if (couleur == "#288A00") {
    	vert();
    }
    else {
    	blanc();
    }
}

function afficherElementOfList (infoUsers) {
	let notreTableau = document.getElementById("listeUtilisateurs");
	
	let ligneTab = document.createElement("tr");
	
	let casePseudo = document.createElement("td");
	casePseudo.appendChild(document.createTextNode(infoUsers[0]));
	
	let caseID = document.createElement("td");
	caseID.appendChild(document.createTextNode(infoUsers[1]));

	let caseDM = document.createElement("td");
	let boutonDM = document.createElement("button");
	boutonDM.setAttribute("class", "boutonAjouterUtilisateur");
	boutonDM.setAttribute("id", infoUsers[1] + "listeUsers");
	boutonDM.setAttribute("onclick", "clicBoutonAjouterUtilisateur(this.id)");
	caseDM.appendChild(boutonDM);
	
	ligneTab.appendChild(casePseudo);
	ligneTab.appendChild(caseID);
	ligneTab.appendChild(caseDM);
	
	notreTableau.appendChild(ligneTab);

	document.getElementById(infoUsers[1] + "listeUsers").innerHTML = "+";
}




/*
document.getElementById("idNouveauContact").value = "1";
chercherNouveauContact(13);
document.getElementById("idNouveauContact").value = "2";
chercherNouveauContact(13);
document.getElementById("idNouveauContact").value = "3";
chercherNouveauContact(13);
document.getElementById("idNouveauContact").value = "4";
chercherNouveauContact(13);
document.getElementById("idNouveauContact").value = "5";
chercherNouveauContact(13);
document.getElementById("idNouveauContact").value = "6";
chercherNouveauContact(13);
document.getElementById("idNouveauContact").value = "7";
chercherNouveauContact(13);
document.getElementById("idNouveauContact").value = "8";
chercherNouveauContact(13);

document.getElementById("idNouveauContact").value = "78459625";
chercherNouveauContact(13);

document.getElementById("idNouveauContact").value = "96542578";
chercherNouveauContact(13);

document.getElementById("idNouveauContact").value = "42657830";
chercherNouveauContact(13);


afficherMessage (0, 78459625, "Bonjour, comment vas-tu ?");
afficherMessage (1, 78459625, "Ça va très bien, merci");
afficherMessage (1, 78459625, "Quelle belle messagerie");
afficherMessage (0, 78459625, "Tu ne crois pas si bien dire mon ami, elle est surtout chiffrée de façon innovante et solide. Et en plus, elle ne conserve aucune donnée et elle a été créée par un groupe français.");
afficherMessage (1, 78459625, "C’est super !");
afficherMessage (0, 78459625, "Si tu veux rencontrer l’équipe qui l’a créée, rends toi sur le lien https://www.orion-hub.fr/w/c7d2df35-5189-4620-9931-5da432640d2a");
afficherMessage (1, 78459625, "Merci beaucoup, à bientôt");

afficherMessage (0, 96542578, "Bonjour, comment vas-tu ?");
afficherMessage (1, 96542578, "Ça va très bien, merci");
afficherMessage (1, 96542578, "Quelle belle messagerie");
afficherMessage (0, 96542578, "Tu ne crois pas si bien dire mon ami, elle est surtout chiffrée de façon innovante et solide. Et en plus, elle ne conserve aucune donnée et elle a été créée par un groupe français.");
afficherMessage (1, 96542578, "C’est super !");
afficherMessage (0, 96542578, "Si tu veux rencontrer l’équipe qui l’a créée, rends toi sur le lien https://www.orion-hub.fr/w/c7d2df35-5189-4620-9931-5da432640d2a");
afficherMessage (1, 96542578, "Merci");
afficherMessage (1, 96542578, "Quand veux-tu que nous nous rencontrions ?");

afficherMessage (0, 42657830, "Bonjour, comment vas-tu ?");
afficherMessage (1, 42657830, "Ça va très bien, merci");
afficherMessage (1, 42657830, "Quelle belle messagerie");
afficherMessage (0, 42657830, "Tu ne crois pas si bien dire mon ami, elle est surtout chiffrée de façon innovante et solide. Et en plus, elle ne conserve aucune donnée et elle a été créée par un groupe français.");
afficherMessage (1, 42657830, "C’est super !");
afficherMessage (0, 42657830, "Si tu veux rencontrer l’équipe qui l’a créée, rends toi sur le lien https://www.orion-hub.fr/w/c7d2df35-5189-4620-9931-5da432640d2a");
afficherMessage (1, 42657830, "Ce projet m'a l'air très bien...");


*/







//let couleur = "#760000";
//let couleur = "#005DDD";
//bleu();

function orange() {
	couleur = "#760000";
	
	let fromUser = document.querySelectorAll(".fromUser");
	fromUser.forEach(function(e){
		e.style.backgroundColor = "#981E00";
		e.style.boxShadow = "0px 0px 30px 0px #691500";
	});

	let toUser = document.querySelectorAll(".toUser");
	toUser.forEach(function(e){
		e.style.backgroundColor = "#420000";
		e.style.boxShadow = "0px 0px 30px 0px #350000";
	});

	let boutonAjouterUtilisateur = document.querySelectorAll(".boutonAjouterUtilisateur");
	boutonAjouterUtilisateur.forEach(function(e){
		e.style.backgroundColor = "#D34D00";
	});

	let caseContact = document.querySelectorAll(".caseContact");
	caseContact.forEach(function(e){
		e.style.borderColor = "#D34D00";
	});

	let hdeux = document.querySelectorAll("h2");
	hdeux.forEach(function(e){
		e.style.color = "#D34D00";
	});

	let htrois = document.querySelectorAll("h3");
	htrois.forEach(function(e){
		e.style.color = "#D34D00";
	});

	document.getElementById("barreContact").style.backgroundColor = "#D34D00";
	document.getElementById("boutonEnvoie").style.backgroundColor = "#760000";
	document.getElementById("contenuMessage").style.border = "4px solid #D34D00";
	document.getElementById("contenuContact").style.border = "4px solid #D34D00";
	document.getElementById("contenuContact").style.backgroundColor = "#D34D00";
	document.getElementById("contenu").style.backgroundColor = "#D34D00";
	document.getElementById("envoyerMessage").style.backgroundColor = "#D34D00";
	document.getElementById("typeProfile").style.backgroundColor = "#D34D00";
	document.getElementById("boutonListeUtilisateurs").style.backgroundColor = "#AD0000";
	document.getElementById("public").style.backgroundColor = couleur;
	document.getElementById("prive").style.backgroundColor = couleur;
	document.getElementById("idNouveauContact").style.backgroundColor = "#7D2D00";
	document.getElementById("messageAEnvoyer").style.backgroundColor = "#7D2D00";
	document.getElementById("nomNouveauContact").style.backgroundColor = "#CB4900";
	let idcase = document.getElementById("messageAEnvoyer").dataCible;
	document.getElementById(idcase + "case").style.backgroundColor = couleur;
	document.getElementById("boutonRetour").style.backgroundColor = "#6D2900";

	document.getElementById("barreContact").style.color = "white";
}

function bleu () {
	couleur = "#005DDD";

	let fromUser = document.querySelectorAll(".fromUser");
	fromUser.forEach(function(e){
		e.style.backgroundColor = "#0071AD";
		e.style.boxShadow = "0px 0px 30px 0px #004569";
	});

	let toUser = document.querySelectorAll(".toUser");
	toUser.forEach(function(e){
		e.style.backgroundColor = "#004D76";
		e.style.boxShadow = "0px 0px 30px 0px #00273B";
	});

	let boutonAjouterUtilisateur = document.querySelectorAll(".boutonAjouterUtilisateur");
	boutonAjouterUtilisateur.forEach(function(e){
		e.style.backgroundColor = "#133056";
	});

	let caseContact = document.querySelectorAll(".caseContact");
	caseContact.forEach(function(e){
		e.style.borderColor = "#133056";
	});

	let hdeux = document.querySelectorAll("h2");
	hdeux.forEach(function(e){
		e.style.color = "#0097FF";
	});

	let htrois = document.querySelectorAll("h3");
	htrois.forEach(function(e){
		e.style.color = "#0097FF";
	});

	document.getElementById("barreContact").style.backgroundColor = "#133056";
	document.getElementById("boutonEnvoie").style.backgroundColor = "#004EB8";
	document.getElementById("contenuMessage").style.border = "4px solid #133056";
	document.getElementById("contenuContact").style.border = "4px solid #133056";
	document.getElementById("contenuContact").style.backgroundColor = "#133056";
	document.getElementById("contenu").style.backgroundColor = "#133056";
	document.getElementById("envoyerMessage").style.backgroundColor = "#133056";
	document.getElementById("typeProfile").style.backgroundColor = "#133056";
	document.getElementById("boutonListeUtilisateurs").style.backgroundColor = "#0059D3";
	document.getElementById("public").style.backgroundColor = couleur;
	document.getElementById("prive").style.backgroundColor = couleur;
	document.getElementById("idNouveauContact").style.backgroundColor = "#001E47";
	document.getElementById("messageAEnvoyer").style.backgroundColor = "#001E47";
	document.getElementById("nomNouveauContact").style.backgroundColor = "#00347C";
	let idcase = document.getElementById("messageAEnvoyer").dataCible;
	document.getElementById(idcase + "case").style.backgroundColor = couleur;
	document.getElementById("boutonRetour").style.backgroundColor = "#0059D3";

	document.getElementById("barreContact").style.color = "white";
}

function vert () {
	couleur = "#288A00";

	let fromUser = document.querySelectorAll(".fromUser");
	fromUser.forEach(function(e){
		e.style.backgroundColor = "#278800";
		e.style.boxShadow = "0px 0px 30px 0px #185400";
	});

	let toUser = document.querySelectorAll(".toUser");
	toUser.forEach(function(e){
		e.style.backgroundColor = "#0F3300";
		e.style.boxShadow = "0px 0px 30px 0px #0C2900";
	});

	let boutonAjouterUtilisateur = document.querySelectorAll(".boutonAjouterUtilisateur");
	boutonAjouterUtilisateur.forEach(function(e){
		e.style.backgroundColor = "#595959";
	});

	let caseContact = document.querySelectorAll(".caseContact");
	caseContact.forEach(function(e){
		e.style.borderColor = "#134D00";
	});

	let hdeux = document.querySelectorAll("h2");
	hdeux.forEach(function(e){
		e.style.color = "#30C200";
	});

	let htrois = document.querySelectorAll("h3");
	htrois.forEach(function(e){
		e.style.color = "#30C200";
	});

	document.getElementById("barreContact").style.backgroundColor = "#134D00";
	document.getElementById("boutonEnvoie").style.backgroundColor = "#249000";
	document.getElementById("contenuMessage").style.border = "4px solid #134D00";
	document.getElementById("contenuContact").style.border = "4px solid #134D00";
	document.getElementById("contenuContact").style.backgroundColor = "#134D00";
	document.getElementById("contenu").style.backgroundColor = "#134D00";
	document.getElementById("envoyerMessage").style.backgroundColor = "#134D00";
	document.getElementById("typeProfile").style.backgroundColor = "#134D00";
	document.getElementById("boutonListeUtilisateurs").style.backgroundColor = "#32AD00";
	document.getElementById("public").style.backgroundColor = couleur;
	document.getElementById("prive").style.backgroundColor = couleur;
	document.getElementById("idNouveauContact").style.backgroundColor = "#082100";
	document.getElementById("messageAEnvoyer").style.backgroundColor = "#082100";
	document.getElementById("nomNouveauContact").style.backgroundColor = "#717171";
	let idcase = document.getElementById("messageAEnvoyer").dataCible;
	document.getElementById(idcase + "case").style.backgroundColor = couleur;
	document.getElementById("boutonRetour").style.backgroundColor = "#32AD00";

	document.getElementById("barreContact").style.color = "white";
}

function blanc () {
	let i = 0;
	let couleurPossible = ["#BC2200","#A200BC","#30BC00","#4700BC","#9ABC00","#BC0058","#00BC58","#BC6700","#00B6BC","#0033BC",];
	couleur = "#5C5C5C";

	let fromUser = document.querySelectorAll(".fromUser");
	fromUser.forEach(function(e){
		e.style.backgroundColor = couleurPossible[i];
		e.style.boxShadow = "0px 0px 20px 0px " + couleurPossible[i];
		if (i==9) {
			i=0;
		}
		i+=1;
	});

	let toUser = document.querySelectorAll(".toUser");
	toUser.forEach(function(e){
		e.style.backgroundColor = couleurPossible[i];
		e.style.boxShadow = "0px 0px 30px 0px " + couleurPossible[i];
		if (i==9) {
			i=0;
		}
		i+=1;
	});

	let boutonAjouterUtilisateur = document.querySelectorAll(".boutonAjouterUtilisateur");
	boutonAjouterUtilisateur.forEach(function(e){
		e.style.backgroundColor = "#5F5F5F";
	});

	let caseContact = document.querySelectorAll(".caseContact");
	caseContact.forEach(function(e){
		e.style.borderColor = "#CCCCCC";
	});

	let hdeux = document.querySelectorAll("h2");
	hdeux.forEach(function(e){
		e.style.color = "white";
	});

	let htrois = document.querySelectorAll("h3");
	htrois.forEach(function(e){
		e.style.color = "white";
	});

	document.getElementById("barreContact").style.backgroundColor = "#CCCCCC";
	document.getElementById("boutonEnvoie").style.backgroundColor = "#292929";
	document.getElementById("input").style.backgroundColor = "#292929";
	document.getElementById("contenuMessage").style.border = "4px solid #CCCCCC";
	document.getElementById("contenuContact").style.border = "4px solid #CCCCCC";
	document.getElementById("contenuContact").style.backgroundColor = "#CCCCCC";
	document.getElementById("contenu").style.backgroundColor = "#CCCCCC";
	document.getElementById("envoyerMessage").style.backgroundColor = "#CCCCCC";
	document.getElementById("typeProfile").style.backgroundColor = "#CCCCCC";
	document.getElementById("boutonListeUtilisateurs").style.backgroundColor = "#292929";
	document.getElementById("public").style.backgroundColor = couleur;
	document.getElementById("prive").style.backgroundColor = couleur;
	document.getElementById("idNouveauContact").style.backgroundColor = "#444444";
	document.getElementById("messageAEnvoyer").style.backgroundColor = "#444444";
	document.getElementById("nomNouveauContact").style.backgroundColor = "#3B3B3B";
	let idcase = document.getElementById("messageAEnvoyer").dataCible;
	document.getElementById(idcase + "case").style.backgroundColor = couleur;
	document.getElementById("boutonRetour").style.backgroundColor = "#292929";

	document.getElementById("barreContact").style.color = "#4E4E4E";
}

/*function css () {
	//alert(window.innerHeight);
	if (window.innerHeight <= 530) {
		document.querySelector("link").href = "style2.css";
		//alert(document.querySelector("link").href);                               /////////////////////
	}
	else if(/Android|iPhone/i.test(navigator.userAgent) || window.innerHeight > window.innerWidth || window.innerWidth <= 630) {
		document.querySelector("link").href = "style3.css";
		//alert(document.querySelector("link").href);                               /////////////////////
	}
	else {
		document.querySelector("link").href = "style1.css";
		//alert(document.querySelector("link").href);                               /////////////////////
	}
}*/





const inputMyImg = document.getElementById("inputImg");

inputMyImg.addEventListener("change",  function () {

	const reader = new FileReader();
 	reader.addEventListener("load", function () {

 		if(document.getElementById("messageAEnvoyer").dataCible != ""){

			const uploaded_image = reader.result;

    			let other = parseInt(document.getElementById("messageAEnvoyer").dataCible);

    			let myImg = document.createElement("img");
    			let myContainer = document.createElement("article");

				myImg.setAttribute("class", "fromUser");
    			myContainer.setAttribute("class", "rightContainer");

    			myImg.setAttribute("src", uploaded_image);
    			myImg.setAttribute("margin", "10px");


    			myContainer.appendChild(myImg);
    			document.getElementById(other.toString()).appendChild(myContainer);

    			afficherConversationContact(other+"case");

    			document.getElementById("derniersMots"+other).innerHTML = "- PHOTO -";

    			document.getElementById("contenuMessage").scrollTo(0, document.getElementById("contenuMessage").scrollHeight);



	    		if (couleur == "#760000") {
    				orange();
    			}
    			else if (couleur == "#005DDD") {
    				bleu();
    			}
    			else if (couleur == "#288A00") {
    				vert();
    			}
    			else {
    				blanc();
    			}

		}
    	
 	});

 	reader.readAsDataURL(this.files[0]);


 	let i = 0;
	var selectedFile = document.getElementById('inputImg').files[0];
	reader.onload = function(event) {
		alert(reader.result);
		alert(reader.result.length);
		let message = crypt(Math.floor(78945612/10000), crypt(78945612%10000, reader.result));
		alert(message);
	};
	reader.readAsText(selectedFile);
	
});













































































function pi_ser(j, n, prec){
    /*
    Calcule la somme des 16^(n-k)/(8k + j) pour k allant de 0 à D
    où D est une valeur de sécurité assure une certaine précision des décimales jusqu'au rang n + prec

    On travaille avec des bigint puisqu'on se retrouve avec des nombres d'au moins prec chiffres hex, soit 4prec chiffres binaires.
    La limite des entiers normalement utilisés en javascript est 2^53 - 1, (attribut publique MAX_SAFE_INTEGER de la classe Number)
     */

    let D = BigInt(pi_dn(n, prec));
    let D4 = 4n*D;//Pour faire des "bitshifts" de base 16;
    n = BigInt(n);

    let d = BigInt(j); //denominateur
    let s = 0n; // somme

    // Comme on s'intéresse uniquement aux décimales à partir du rang n, on peut calculer sous modulo les premiers membres de la somme
    for (var k = 0n; k < n+1n ; k++){
        s += (((16n**(n-k))%d)<<D4)/d; //
        d += 8n;
    }

    let t = 0n;
    let e = D4 - 4n;
    d = 8n*k + BigInt(j);

    //On continue de sommer jusqu'à ce que les membres de la somme soit
    while(true){
        let dt = (1n<<e)/d;
        if (!dt){
            break;
        }
        t += dt;
        e -= 4n;
        d += 8n;
    }
    return (s + t) ;
}

function pi_hex(n, prec){
    /*
    calcul avec BBP : on obtient un bandeau de pi de longueur prec débutant à la position n, en hexadécimal
     */
	n=Math.abs(Math.floor(n));
	prec=Math.abs(Math.floor(prec));
	n-=1;
	let a=[4n,2n,1n,1n]; //coef de séries dans BBP
	let j=[1n,4n,5n,6n];
	let D = BigInt(pi_dn(n, prec));
	//n = BigInt(n);
	let x = (a[0]*pi_ser(j[0], n, prec)
        - a[1]*pi_ser(j[1], n, prec)
        - a[2]*pi_ser(j[2], n, prec)
        - a[3]*pi_ser(j[3], n, prec)
        ) & (16n**D - 1n);

    prec = BigInt(prec);
	x = x / 16n**(D - prec);
	x = x.toString(16);
	return x;
}


function pi_dn(n,prec){
    /*
    Calcul de D qui va assurer la précision des décimales du calcul de pi jusqu'au rang n+prec+1
     */
	return Math.floor(Number(Math.log(n + prec + 1)/Math.log(16) + prec + 3));
}

//TRANSCRYPT

 function xor_two_str(a,b){
     /*
     Applique l'opérateur ou exclusif entre deux châines de caractères : a msg direct en str(caractères ascii)et b hexa en str après calculs
     */
     let xored = "";
     for (let i = 0; i < a.length;i++){
     	// char code at donne valeur du code ascii du caractère entre parenthèses
         let u = (a.charCodeAt(i)^b.charCodeAt(i%b.length));//xor puis conversion en hex
         u = u.toString();
        let c = String.fromCharCode(u);
         xored = xored + c;

     }
     return xored;
 }


function crypt(clef, msg){
    /*
    Applique transcrypt à msg avec une clef donnée
     */
    return xor_two_str(msg,pi_hex(clef, msg.length)); // renvoie le message chiffré
 }

function decrypt(clef, msg){
    /*
    Inverse de crypt.
     */
    return xor_two_str(msg, pi_hex(clef, msg.length));
 }