README — Trouv&Taf (Front-end React)

Trouv&Taf est une application web permettant de mettre en relation des étudiants à la recherche d'un emploi, d’un stage ou d’une alternance, avec des entreprises qui publient des offres et gèrent les candidatures.

Ce projet a été réalisé dans le cadre d'un TP et repose sur une architecture React + API REST.

Installation & Lancement du projet

git clone le projet dans un fichier a laide de : 
- 'git clone https://github.com/ParmeSimon/codeBustersTp4.git'

se positioner dans /frontend et :
- 'npm install'

lancer le front :
- 'npm run dev'

Fonctionnalités

Côté étudiant
- Gestion du profil : Nom / CV (lien) / Github / Portfolio / Compétences (ajout / suppression dynamique)
- Mise à jour du profil via une popup
- Affichage des offres sous forme de cartes : Image / Description / Mots-clés
- Filtres dynamiques : Par type de contrat / Par ville / Par recherche (titre / description)
- Postuler à des offres

Côté Entreprise
- Gestion du profil
- Mise à jour du profil via une popup
- Création d’une offre dans une popup : Titre / Description / Contrat / Localisation / Mots-clés dynamiques (tags)
- Modification d’une offre existante
- Suppression d’une offre
- Affichage des candidats sous forme de cartes
- Mise à jour du statut candidat (Reçu / En cours d'examen / Entretien / Refusé / Accepté)
