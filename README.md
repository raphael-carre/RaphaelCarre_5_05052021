Orinoco - Projet 5 Développeur web - OpenClassooms
==================================================

Pour être en mesure de tester cette application web vous avez deux possibilités :
- Utiliser l'application depuis GitHub Pages
- Utiliser l'application en local


Utilisation de l'application depuis GitHub Pages
------------------------------------------------

Le back-end de l'application est déployé chez Heroku.  
Le front-end étant, lui, accessible sur GitHub Pages, il suffit d'aller à cette adresse depuis votre navigateur :

<https://raphael-carre.github.io/RaphaelCarre_5_05052021/public/>


Utilisation de l'application en local
-------------------------------------

### Back-end

Pour utiliser l'application en local vous devez d'abord cloner le dépôt du back-end et installer ses dépendances.  
Créez un nouveau dossier, puis, depuis votre terminal, placez vous dans ce dossier et lancez cette commande :

    git clone https://github.com/OpenClassrooms-Student-Center/JWDP5.git ./ && npm install

Lancez ensuite la commande :

    node server

### Front-end

De la même façon, clonez ensuite le dépôt du front-end et installez ses dépendances.  
Créez donc un autre dossier, puis, depuis celui-ci, lancez cette commande dans le terminal :

    git clone https://github.com/raphael-carre/RaphaelCarre_5_05052021.git ./ && npm install

Une fois l'installation terminée, pour lancer la compilation du code en local, toujours depuis ce dossier, utilisez la commande  :

    npm start

Pour finir, allez à cette adresse depuis votre navigateur :

<http://localhost:8080/public/>