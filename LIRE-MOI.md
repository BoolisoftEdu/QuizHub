# Quiz de pharmacologie — version Netlify

Cette version inclut les 33 questions, le corrigé, les résultats communs à tous les appareils, les exports Excel/CSV, les réglages formateur (durée et tentatives) et la reprise sur le même navigateur. Les champs étudiant sont nom et prénom.

## Publication recommandée depuis un dépôt Git

1. Décompresser ce ZIP. Mettre son contenu dans un dépôt Git privé (GitHub, GitLab ou Bitbucket). `netlify.toml` doit être à la racine du dépôt.
2. Dans Netlify, importer un projet existant depuis ce dépôt. Netlify détecte `netlify.toml` : commande `npm run build`, dossier publié `public`, fonctions `netlify/functions`.
3. Dans les variables d’environnement du projet, ajouter `ADMIN_PASSWORD` avec votre propre mot de passe formateur. La variable doit être disponible à l’exécution des Functions (scope Functions si proposé). Ne pas l’inscrire dans les fichiers du dépôt.
4. Lancer ou relancer le déploiement après configuration du mot de passe. Netlify installe la dépendance et déploie aussi les fonctions serveur.
5. Choisir un nom de projet neutre dans Netlify, par exemple `quiz-pharmacologie-ifsi` s’il est disponible. L’adresse réelle sera affichée par Netlify après publication : aucun nom de personne ou d’entreprise n’est imposé par ce projet.
6. Tester une copie avec un nom fictif, puis vérifier sa présence dans Espace formateur et télécharger l’export Excel. Tester aussi une interruption et une reprise sur iPhone avant diffusion à la promotion.

Ne pas déposer uniquement le dossier `public` par glisser-déposer : cela n’installe pas les fonctions nécessaires à la sauvegarde des résultats. Le ZIP contient le projet source complet à importer et construire.

## Résultats centralisés

Les fonctions utilisent un stockage Netlify Blobs de site nommé `quizpharma-data`, en lecture forte. Ce n’est pas un stockage lié à un déploiement : les données restent dans le même site lors des mises à jour. Les étudiants ne disposent d’aucun accès direct au stockage ; les listes de résultats et exports sont protégés par la connexion formateur.

Un nouveau projet Netlify commence avec des données et des paramètres neufs. Les résultats déjà enregistrés sur l’ancien lien ChatGPT ne sont pas transférés dans ce ZIP. Exporter ces résultats en Excel depuis l’ancien site avant la transition. Les étudiants doivent terminer leur tentative sur l’ancien lien ; leur reprise ne se transfère pas au nouveau domaine.

Ne pas supprimer le site ou son stockage. Conserver des exports Excel réguliers. Une offre gratuite reste soumise aux quotas Netlify : surveiller l’utilisation avant une évaluation collective.

## Réglages pédagogiques

Se connecter à Espace formateur avec la valeur de `ADMIN_PASSWORD` choisie lors de l’installation. Par défaut : sans chronomètre, tentatives illimitées, reprise autorisée.

Une tentative est comptée au lancement, y compris si elle est abandonnée. Une reprise autorisée ne consomme pas de nouvelle tentative. Les modifications des paramètres concernent les nouvelles tentatives. Le chronomètre continue pendant une absence. Si l’étudiant revient après l’échéance, la copie est clôturée avec les réponses déjà sauvegardées. Quand la page est fermée, la copie expirée n’apparaît dans les résultats qu’après retour de l’étudiant et envoi automatique ; aucune tâche de clôture en arrière-plan n’est incluse.

L’identité repose sur le nom et le prénom déclarés, sans compte vérifié : deux homonymes peuvent partager le compteur et un changement de nom peut contourner la limite. Ne pas employer ce mécanisme comme authentification d’examen surveillé. Les demandes de démarrage simultanées ne sont pas verrouillées par transaction. La reprise exige le même navigateur et son stockage conservé, hors suppression des données ou navigation privée. Une connexion Internet est nécessaire pour sauvegarder les réponses.

## Vérifications locales

Avec Node.js 22 ou plus récent : `npm install`, puis `npm test` et `npm run build`.
Pour une prévisualisation avec les services Netlify, utiliser Netlify CLI et `netlify dev` après avoir configuré un mot de passe local dans un fichier `.env` non partagé. La validation finale de l’enregistrement et du mot de passe doit être faite sur votre site déployé.


## Mise à jour : suivi progressif et envoi automatique

Le bouton Suivant est actif seulement lorsqu’au moins une réponse est sélectionnée. Il valide les choix de la question courante, pour les QCS comme pour les QCM. Une modification de la réponse annule sa validation jusqu’au prochain clic sur Suivant. Le clic sur Suivant de la dernière question envoie automatiquement la copie si toutes les questions ont été validées. Sinon, utiliser les numéros pour revenir aux questions non validées, puis cliquer sur Suivant pour chacune. Le bouton Terminer est supprimé. La copie est envoyée automatiquement après validation de toutes les questions ou lorsque le temps expire. En cas d’échec de cet envoi automatique, une nouvelle tentative est effectuée après 5 secondes tant que la page reste ouverte.

Les réponses et la position sont sauvegardées après une courte temporisation à chaque modification. Elles deviennent visibles dans le tableau formateur, même avant la fin du quiz. Une copie est mise à jour sous le même identifiant : elle n’est pas ajoutée plusieurs fois. Le tableau est actualisé toutes les 10 secondes lorsqu’il est ouvert. Les notes en cours sont provisoires. La moyenne et les taux de réussite sont calculés sur les copies terminées ; les exports incluent aussi les copies en cours avec leur état et leur progression.

La rubrique Réussite par question affiche désormais l’énoncé complet et les bonnes réponses avec leur texte. Le détail individuel affiche également le texte de la question, la réponse choisie et le corrigé. Les corrigés sont réservés au formateur et aux copies terminées côté étudiant.

Pour installer cette mise à jour : remplacer les fichiers du projet dans le même dépôt GitHub, en conservant tous les dossiers. Netlify redéploie après validation des modifications. Garder le même site Netlify et sa variable ADMIN_PASSWORD pour conserver l’accès et les données existantes. Aucun changement de nom du stockage n’est effectué. Actualiser le navigateur après publication.
