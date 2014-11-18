projet = new Array();
projet["nom"] = "BDPhilia";
projet["auteur"] = "fred";
projet["copy"] = "&copy; 2009 votre entreprise";


affiche_bandeau = "";
function affichePageBandeauHaut() {
    affiche_bandeau = '<div id="bandeau">' + '</div>';
    document.write(affiche_bandeau);
}


function affichePageTitre(pageSelectionnee)
	{
		var i = new Number();
		for (i = 0; i < pagesDisponibles.length; i++)
			if(pagesDisponibles[i][1] == pageSelectionnee)
				document.write("<div id=\"titre\"><h1>"+pagesDisponibles[i][2]+"</h1></div>");
	}

function affichePagePied()
	{
		var piedHtml = new String();
		piedHtml += "<div id=\"pied\">";
		piedHtml += "<span>"+projet["copy"]+" - ";
		piedHtml += "Réalisé par "+projet["auteur"]+"</span></div>";
		document.write(piedHtml);
	}