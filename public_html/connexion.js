function connexion()
{
	var identifiant = document.getElementById('identifiant').value;
	var mdp = document.getElementById('mdp').value;
	var Erreur = 0;
	var Erreur_msg = '';
	

	if (identifiant.length < 1) {
		Erreur ++;
		Erreur_msg += ' Identifiant ';
	}
	
	if (mdp == '') {
		Erreur ++;
		Erreur_msg += ' Mot de passe ';
	}

	if(Erreur > 0){
		alert('Il y a ' + Erreur + ' erreurs dans le formulaire. Les champs ' + Erreur_msg + 'sont vides');
	}
	else
	{
		alert("Vérification de vos identifiants...");
	}
}