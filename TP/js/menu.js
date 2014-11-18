pagesDisponibles = new Array();
pagesDisponibles[0] = ["Accueil", "index.htm", "Bienvenue sur " + projet["nom"]];
pagesDisponibles[1] = ["Recherche", "recherche.htm", "Votre recherche de BD"];
pagesDisponibles[2] = ["Commande", "commande.htm", "Votre panier"];

function affichePageMenu(pageSelectionnee) {
    var affiche_menu = new String();
    var i = new Number();

    affiche_menu += '<div id="menu">' + '<ul>';

    for (i = 0; i < pagesDisponibles.length; i++)
    {
        if (pagesDisponibles[i][1] == pageSelectionnee)
            cssSelect = " class=\"select\"";
        else
            cssSelect = "";
        affiche_menu += "<li" + cssSelect + "><a href=\"" + pagesDisponibles[i][1] + "\" title=\"" + pagesDisponibles[i][0] + "\">" + pagesDisponibles[i][0] + "</a></li>";
    }
    affiche_menu += '</ul>' + '</div>';
    document.write(affiche_menu);
}