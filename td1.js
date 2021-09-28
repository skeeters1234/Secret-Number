let secret_number=9;
let guess_count=0;
let guess_limit=3;
let valeur_de_sauvegarde=0;  // j'ai eu l'idée de crée une valeur de sauvegarde parce que quand je générais des valeurs au hasard parfois c'était supérieur à 3 du coup le programme s'arrêtait directement à cause de la condition while 

function random(min,max){
    return Math.round(Math.random()*(max-min)+min)  // ici j'avais eu l'idee d'utuliser la fonction Math.random() pour générer des nombres mais c'était juste entre 0 et 1 (avec 1 exclu). Une personne expliquait que le Math.round permet d'avoir un entier le plus proche et le calcul entre parenthèse j'ai bien comprris les explications
}


while(guess_count < guess_limit){  // on a un nombre de 3 coups max sinon on sort de la boucle et on a "Perdu"
  
    guess_count=random(0,9);
    
    if(guess_count==secret_number){
      console.log("Vous avez gagné"); // on affiche dans la console 
      break; // si on a trouvé le nombre secret on n'a pas besoin de refaire des coups donc on sort 
    }
    guess_count=valeur_de_sauvegarde+1; // on incrémente la valeur à chaque coup 
    valeur_de_sauvegarde=guess_count;
}

console.log("Vous avez perdu");