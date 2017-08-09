function envoiMessage()
{
	var mail = document.getElementById('mail').value;
	var titre = document.getElementById('titre').value;
	var message = document.getElementById('message').value;
	var Erreur = 0;
	var Erreur_msg = '';
	
	if (mail.length < 1 || !verifMail(mail)) {
		Erreur ++;
		Erreur_msg += 'Mail ';
	}
	
	if (titre.length < 1) {
		Erreur ++;
		Erreur_msg += ' Titre ';
	}
	
	if (message == '') {
		Erreur ++;
		Erreur_msg += ' Message ';
	}

	if(Erreur > 0){
		alert('Il y a ' + Erreur + ' erreurs dans le formulaire. Les champs ' + Erreur_msg + 'sont mal renseignés');
	}
	else
	{
		alert("Votre message à bien été envoyé");
	}
}

function verifMail(mail)
{
	var regexmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
	if(regexmail.test(mail))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function ajouterMail()
{
	if(document.getElementsByClassName("mailCC").length < 5)
		{
			var divMail = document.createElement("div");
			divMail.className = "mailCC col-xs-12 col-sm-12 col-md-12 col-lg-12";
			
			var inputMail = document.createElement("input");
			inputMail.type = "text";
			inputMail.placeholder = "Entrez l'adresse e-mail qui recevra une copie";
			inputMail.className = "form-control";
			
			divMail.appendChild(inputMail);
			
			var mails = document.getElementById("blocMails");
			mails.appendChild(divMail);
		}
	else
		{
			alert("Nous sommes désolés, vous ne pouvez ajouter que 5 mail en CC au maximum");
		
		}
}