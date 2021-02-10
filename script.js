
/**Étape 4.1 : Javascript, a¨chage d'un pop-up */
/**une fonction */
//function showCity() { alert(villeCourante); }
/**variable */
//let villeCourante = "Lyon"
/**une fonction console.log */
//function showCity() { console.log(villeCourante); }
/** ça affiche la ville courante Lyon  */
/**Étape 4.2 : Javascript, connecter un menu à un affchage*/
function showCity() {
    // 1. Récupérer la valeur courante du menu
    // Pour ça on va faire :
    let nomVilleSelectionnee = document.getElementById("menu").value;
    // 2. Récupérer la liste de toutes les div correspondant à une div de météo
    // Pour ça on va faire :
    let cities = document.getElementsByClassName("ville");
    // 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
    // TODO : definir l : la taille max de votre tableau cities
    for (var i=0; i<3; i++) {
    cities[i].style.display= "none";
    if (cities[i].id==nomVilleSelectionnee ) {
    // garder l'element visible -> 
    cities[i].style.display= "block";
    } 
    else {
    // cacher l'element -> 
    cities[i].style.display= "none";
    }
    }
    }
	
