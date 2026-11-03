import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
for(const p of ['netlify/functions/api.mjs','netlify/functions/lib/quiz.mjs','public/static/app.js']) execFileSync(process.execPath,['--check',p]);
if(!readFileSync('public/index.html','utf8').includes('settingsForm')) throw Error('Paramètres absents');
console.log('Quiz et fonctions prêts pour Netlify.');
