# Ajouter Cloudflare au dépôt existant — 04_UE211_Examen_Blanc_2_Cloudflare

Ce ZIP est un complément, pas une application complète. Il réutilise public/ et netlify/functions/lib/quiz.mjs du dépôt existant. Ne remplacer aucun fichier Netlify. Ne pas envoyer le ZIP seul sur GitHub.

## 1. Ajouter ces fichiers
Décompresser puis ajouter le CONTENU de ce ZIP à la racine de votre dépôt existant, au même niveau que package.json et netlify.toml :
- wrangler.jsonc
- CLOUDFLARE_INSTALLATION.md
- cloudflare/worker.mjs
- cloudflare/schema.sql

Il ne faut pas ajouter le dossier enveloppe 04_UE211_Examen_Blanc_2_Ajout_Cloudflare à la racine : ajouter directement ses fichiers et le dossier cloudflare. Le dépôt doit déjà contenir public/index.html, public/static/app.js et netlify/functions/lib/quiz.mjs. Si le dépôt existant possède déjà wrangler.jsonc ou un dossier cloudflare, ne pas les écraser sans comparaison : ces compléments visent les dépôts Netlify d'origine.

Avant le commit : garder les builds Netlify arrêtés si vous ne voulez pas de nouvelle publication. Si les builds sont actifs, même l'ajout de fichiers sans remplacement peut déclencher un déploiement.

## 2. Créer D1 dans Cloudflare
Dans Storage & databases > D1, créer la base `quizpharma-cloudflare`. Copier son UUID dans le champ database_id de wrangler.jsonc à la place de REMPLACER_PAR_ID_D1, en conservant les guillemets. Ne pas modifier binding: DB.
Dans la console SQL D1, exécuter le contenu de cloudflare/schema.sql :

```sql
CREATE TABLE IF NOT EXISTS records (key TEXT PRIMARY KEY, value TEXT NOT NULL);
```

## 3. Relier le dépôt existant à Cloudflare
Workers & Pages > Create application > Import a repository : sélectionner ce dépôt et la branche où vous avez ajouté les fichiers.
- Nom Worker : `quizpharma-cloudflare`.
- Dossier racine : racine du dépôt (où se trouvent package.json, netlify.toml et le nouveau wrangler.jsonc).
- Commande de compilation : vide. Ne pas reprendre npm run build de Netlify.
- Commande de déploiement : `npx --yes --package=wrangler@4 wrangler deploy`. Cloudflare télécharge et lance Wrangler, aucun terminal local ni modification de package.json requis.
Déployer. Noter le lien workers.dev réellement retourné.
Dans Settings > Variables and Secrets, ajouter le secret ADMIN_PASSWORD avec le mot de passe formateur de votre choix. Enregistrer/déployer la modification selon l'interface. Vérifier dans Bindings que DB pointe sur la bonne base.

## 4. Tester
Faire une tentative sous un nom fictif. Se connecter en formateur depuis un autre navigateur, vérifier les résultats et l'export. Tester également sur iPhone. Aucun site n'est publié par le simple ajout de ce ZIP.

## Hébergement et données
Netlify continue d'utiliser ses fichiers actuels et sa base Netlify. Cloudflare utilise D1 avec les mêmes questions et la même interface du dépôt. Les deux bases ne sont PAS synchronisées. La nouvelle base est vide : exporter les anciens résultats Netlify avant transition, terminer les sessions existantes et reconfigurer les règles du formateur. Les compteurs de tentatives ne sont pas transférés. Distribuer les nouveaux liens Cloudflare pour les nouvelles sessions.

Par défaut Cloudflare sert directement l'application. Option de secours : ajouter dans vars du fichier wrangler.jsonc une clé NETLIFY_ORIGIN avec votre URL https://...netlify.app. Via le lien Cloudflare, les fichiers publics sont alors demandés à Netlify puis remplacés par la copie Cloudflare si échec, délai >2,5 s ou contenu inattendu. Les API restent chez Cloudflare/D1. Un ancien lien netlify.app entièrement suspendu ne peut pas basculer tout seul. Cette option ne synchronise pas les anciennes bases.
Les empreintes ASSET_HASHES servent à vérifier les fichiers Netlify. Après une modification de public/, Cloudflare servira sa nouvelle copie lorsque les anciennes empreintes ne correspondent plus. Vous pouvez simplement laisser NETLIFY_ORIGIN absent pour ne pas utiliser ce mécanisme.

## Limites
Les quotas gratuits Cloudflare sont partagés entre les applications : Workers 100 000 requêtes/jour et 10 ms CPU par requête; D1 5 millions de lignes lues et 100 000 écrites/jour. Une réponse peut générer plusieurs appels et écritures. Aucune garantie de capacité pour 200 étudiants × 240 questions sans mesure. Le secours Netlify ne protège pas contre un quota Cloudflare/D1.

Le secret ADMIN_PASSWORD doit être défini dans Cloudflare, jamais dans GitHub. Ne pas déposer de résultats nominatifs dans le dépôt. L'identification étudiant par nom/prénom reste déclarative.

Compatibilité vérifiée sur les sources fournies, sans modification des fichiers Netlify. Validation réelle sur Cloudflare et test de charge restent à effectuer.
