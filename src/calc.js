/*
** signe: '*', '+', '-', '/'
** gauche: un nombre non negatif
** droite: un nombre plus petit que 430
**
** La fonction renvoie le resultat du calcul
**
** La fonction renvoie null en cas d'erreur
*/


function calculatrice(signe, gauche, droite) {
    var result = null;
	
	
	if (!signe || !gauche || !droite) {
		return null;
	}
	
	if (gauche <0) {
		return null;
	}
	
	if (droite >= 430){
		return null;
	}
	
	if(signe=='+'){
		result = gauche + droite;
	}
	
	if(signe=='-'){
		result = gauche - droite;
	}
	
	if(signe=='*'){
		result = gauche * droite;
	}
	
	if(signe=='/'){
		result = gauche / droite;
	}

    return result;
}
 
module.exports = calculatrice;
