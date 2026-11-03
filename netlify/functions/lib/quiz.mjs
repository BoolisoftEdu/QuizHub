const assets={};
const QUESTIONS=[
  {
    "id": 1,
    "type": "QCS",
    "text": "Concernant les objectifs du traitement médicamenteux de l’angor, laquelle des propositions suivantes est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Le traitement vise uniquement à diminuer la pression artérielle."
      },
      {
        "key": "B",
        "text": "Le traitement symptomatique a pour objectif de réduire les symptômes d’angor."
      },
      {
        "key": "C",
        "text": "Les médicaments anti-angineux augmentent les besoins en oxygène du myocarde."
      },
      {
        "key": "D",
        "text": "Les bêta-bloquants sont contre-indiqués dans la prévention cardiovasculaire secondaire."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Le traitement de l’angor a un double objectif : soulager les crises douloureuses et prévenir les complications cardiovasculaires."
  },
  {
    "id": 2,
    "type": "QCS",
    "text": "Parmi les médicaments utilisés dans l’angor, lequel joue un rôle majeur dans la prévention cardiovasculaire secondaire ?",
    "options": [
      {
        "key": "A",
        "text": "Les dérivés nitrés"
      },
      {
        "key": "B",
        "text": "Les antagonistes calciques"
      },
      {
        "key": "C",
        "text": "Les bêta-bloquants"
      },
      {
        "key": "D",
        "text": "Les diurétiques"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Les bêta-bloquants diminuent le travail du cœur et participent à la prévention cardiovasculaire secondaire après un événement coronarien."
  },
  {
    "id": 3,
    "type": "QCS",
    "text": "Concernant les antagonistes calciques, laquelle des propositions suivantes est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Ils sont indiqués dans l'angor."
      },
      {
        "key": "B",
        "text": "Ils sont utilisés pour traiter les infections."
      },
      {
        "key": "C",
        "text": "Ils augmentent systématiquement la fréquence cardiaque."
      },
      {
        "key": "D",
        "text": "Ils sont contre-indiqués dans l'hypertension artérielle."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Les antagonistes calciques sont utilisés dans le traitement de l’angor et de l’hypertension artérielle."
  },
  {
    "id": 4,
    "type": "QCS",
    "text": "Parmi les médicaments suivants, lequel est un antagoniste calcique spécifique ?",
    "options": [
      {
        "key": "A",
        "text": "Aténolol"
      },
      {
        "key": "B",
        "text": "Furosémide"
      },
      {
        "key": "C",
        "text": "Amlodipine"
      },
      {
        "key": "D",
        "text": "Aspirine"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "L’amlodipine est un antagoniste calcique. L’aténolol est un bêta-bloquant, le furosémide un diurétique et l’aspirine un antiagrégant plaquettaire."
  },
  {
    "id": 5,
    "type": "QCS",
    "text": "Parmi les médicaments suivants, lequel est utilisé dans le traitement des infections à herpès virus ?",
    "options": [
      {
        "key": "A",
        "text": "Amoxicilline"
      },
      {
        "key": "B",
        "text": "Valaciclovir"
      },
      {
        "key": "C",
        "text": "Paracétamol"
      },
      {
        "key": "D",
        "text": "Furosémide"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Le valaciclovir est un antiviral utilisé contre les infections à herpès virus."
  },
  {
    "id": 6,
    "type": "QCS",
    "text": "Concernant la primo-infection par le VIH, laquelle des propositions suivantes est vraie?",
    "options": [
      {
        "key": "A",
        "text": "Elle est toujours asymptomatique."
      },
      {
        "key": "B",
        "text": "Elle est symptomatique dans 50 à 80 % des cas."
      },
      {
        "key": "C",
        "text": "Elle provoque systématiquement une méningite."
      },
      {
        "key": "D",
        "text": "Elle dure plusieurs années."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "La primo-infection VIH peut provoquer un syndrome pseudo-grippal ou mononucléosique."
  },
  {
    "id": 7,
    "type": "QCS",
    "text": "Concernant la maladie ulcéreuse gastro-duodénale, laquelle des propositions suivantes est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "L’ulcère gastrique survient le plus souvent entre 20 et 30 ans."
      },
      {
        "key": "B",
        "text": "L’ulcère duodénal est plus fréquent chez la femme."
      },
      {
        "key": "C",
        "text": "Le pic d’incidence de l’ulcère gastrique se situe autour de 60 ans."
      },
      {
        "key": "D",
        "text": "La maladie ulcéreuse ne peut pas guérir spontanément."
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "L’ulcère gastrique est plus fréquent chez les sujets âgés, alors que l’ulcère duodénal touche souvent des patients plus jeunes."
  },
  {
    "id": 8,
    "type": "QCS",
    "text": "Concernant l'association des diurétiques, laquelle des propositions suivantes est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Deux diurétiques de la même classe peuvent être associés sans risque."
      },
      {
        "key": "B",
        "text": "L'association de deux diurétiques de la même classe est recommandée pour augmenter l'efficacité."
      },
      {
        "key": "C",
        "text": "Il ne faut jamais associer deux molécules appartenant à la même classe de diurétiques."
      },
      {
        "key": "D",
        "text": "Les diurétiques thiazidiques doivent toujours être associés entre eux."
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Associer deux diurétiques de la même classe augmente les effets indésirables sans réel bénéfice thérapeutique."
  },
  {
    "id": 9,
    "type": "QCS",
    "text": "Concernant les herpès virus, laquelle des propositions suivantes est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Les infections à herpès sont toujours graves."
      },
      {
        "key": "B",
        "text": "Après la primo-infection, le virus peut rester latent à vie."
      },
      {
        "key": "C",
        "text": "Le stress empêche la réactivation du virus."
      },
      {
        "key": "D",
        "text": "Les nouveau-nés ne sont pas concernés par les formes graves."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Les herpès virus persistent à l’état latent dans l’organisme et peuvent se réactiver."
  },
  {
    "id": 10,
    "type": "QCS",
    "text": "Quel est l'objectif principal du traitement prescrit chez un patient atteint d'hypothyroïdie ?",
    "options": [
      {
        "key": "A",
        "text": "Compenser le manque d'hormones thyroïdiennes"
      },
      {
        "key": "B",
        "text": "Réduire la sécrétion d'hormones thyroïdiennes"
      },
      {
        "key": "C",
        "text": "Augmenter la sécrétion des hormones surrénaliennes"
      },
      {
        "key": "D",
        "text": "Supprimer l'activité de la glande thyroïde"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Le traitement de l’hypothyroïdie repose sur une hormonothérapie substitutive (lévothyroxine)."
  },
  {
    "id": 11,
    "type": "QCS",
    "text": "Pour exercer leur action contre le VIH, les INTI doivent :",
    "options": [
      {
        "key": "A",
        "text": "Être métabolisés par le foie en métabolites actifs."
      },
      {
        "key": "B",
        "text": "Subir une bi- ou tri-phosphorylation à l'intérieur de la cellule."
      },
      {
        "key": "C",
        "text": "Inhiber les enzymes hépatiques."
      },
      {
        "key": "D",
        "text": "Induire les enzymes du cytochrome P450"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Les INTI doivent être activés dans la cellule avant d’inhiber la transcriptase inverse du VIH."
  },
  {
    "id": 12,
    "type": "QCS",
    "text": "La dobutamine exerce principalement son action en stimulant quels types de récepteurs adrénergiques ?",
    "options": [
      {
        "key": "A",
        "text": "Les récepteurs α-adrénergiques"
      },
      {
        "key": "B",
        "text": "Les récepteurs β1 uniquement"
      },
      {
        "key": "C",
        "text": "Les récepteurs β2 uniquement"
      },
      {
        "key": "D",
        "text": "Les récepteurs β1 et β2"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "La dobutamine est principalement un agoniste β1, augmentant la force de contraction cardiaque."
  },
  {
    "id": 13,
    "type": "QCS",
    "text": "Chez un patient présentant une insuffisance cardiaque, quel traitement injectable est le plus fréquemment utilisé pour réduire la surcharge hydrosodée ?",
    "options": [
      {
        "key": "A",
        "text": "Un diurétique distal"
      },
      {
        "key": "B",
        "text": "Un diurétique thiazidique"
      },
      {
        "key": "C",
        "text": "Un bloqueur de la rénine"
      },
      {
        "key": "D",
        "text": "Un diurétique de l'anse de Henlé"
      }
    ],
    "correct": [
      "D"
    ],
    "feedback": "Le furosémide est le diurétique injectable le plus utilisé pour traiter les poussées d’insuffisance cardiaque congestive."
  },
  {
    "id": 14,
    "type": "QCS",
    "text": "Chez une femme utilisant une contraception orale combinée, quel facteur augmente particulièrement le risque d'accident vasculaire ?",
    "options": [
      {
        "key": "A",
        "text": "La pratique régulière d'une activité physique"
      },
      {
        "key": "B",
        "text": "La perte de poids"
      },
      {
        "key": "C",
        "text": "Le tabagisme"
      },
      {
        "key": "D",
        "text": "La diminution de la consommation de sel"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Le tabac associé à une contraception œstroprogestative augmente fortement le risque thromboembolique et vasculaire."
  },
  {
    "id": 15,
    "type": "QCS",
    "text": "Quelle complication est reconnue comme étant associée à la contraception hormonale ?",
    "options": [
      {
        "key": "A",
        "text": "Cancer de l'estomac"
      },
      {
        "key": "B",
        "text": "Augmentation du poids de naissance"
      },
      {
        "key": "C",
        "text": "Thrombose veineuse"
      },
      {
        "key": "D",
        "text": "Cancer du pancréas"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "La thrombose veineuse est une complication reconnue des contraceptifs hormonaux."
  },
  {
    "id": 16,
    "type": "QCS",
    "text": "Concernant la tolérance des médicaments appliqués sur la peau, quelle proposition est fausse ?",
    "options": [
      {
        "key": "A",
        "text": "Ils peuvent être à l'origine d'effets systémiques après absorption."
      },
      {
        "key": "B",
        "text": "Ils peuvent provoquer une allergie de contact."
      },
      {
        "key": "C",
        "text": "Leur pouvoir irritant peut entraîner des effets indésirables locaux."
      },
      {
        "key": "D",
        "text": "Ils ne provoquent jamais de réaction allergique."
      }
    ],
    "correct": [
      "D"
    ],
    "feedback": "Les médicaments topiques peuvent provoquer des allergies de contact ainsi que des effets locaux ou systémiques."
  },
  {
    "id": 17,
    "type": "QCS",
    "text": "Chez un patient présentant des douleurs intenses liées à un cancer, à quelle catégorie d’antalgiques appartient l’Oxycontin® (oxycodone) ?",
    "options": [
      {
        "key": "A",
        "text": "Palier 1"
      },
      {
        "key": "B",
        "text": "Palier 2"
      },
      {
        "key": "C",
        "text": "Palier 1 et 2"
      },
      {
        "key": "D",
        "text": "Palier 3"
      }
    ],
    "correct": [
      "D"
    ],
    "feedback": "L’oxycodone est un opioïde fort classé parmi les antalgiques de palier III de l’OMS."
  },
  {
    "id": 18,
    "type": "QCS",
    "text": "Un patient reçoit un traitement anticoagulant par AVK. Parmi les médicaments suivants, lequel peut-il recevoir ?",
    "options": [
      {
        "key": "A",
        "text": "La warfarine"
      },
      {
        "key": "B",
        "text": "L’aspirine"
      },
      {
        "key": "C",
        "text": "L’héparine"
      },
      {
        "key": "D",
        "text": "La daltéparine"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "La warfarine est un antivitamine K (AVK). L’héparine et la daltéparine appartiennent à une autre famille d’anticoagulants."
  },
  {
    "id": 19,
    "type": "QCS",
    "text": "Parmi les médicaments suivants, lequel est utilisé dans le traitement de l’asthme ?",
    "options": [
      {
        "key": "A",
        "text": "Les antagonistes bêta-adrénergiques"
      },
      {
        "key": "B",
        "text": "La théophylline"
      },
      {
        "key": "C",
        "text": "Les antihistaminiques H1"
      },
      {
        "key": "D",
        "text": "Les antidépresseurs"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "La théophylline est un bronchodilatateur pouvant être utilisé dans l’asthme."
  },
  {
    "id": 20,
    "type": "QCS",
    "text": "Parmi les propositions suivantes, indiquez laquelle est vraie : Parmi les médicaments suivants, lequel est un hypnotique ?",
    "options": [
      {
        "key": "A",
        "text": "Midazolam (HYPNOVEL®)"
      },
      {
        "key": "B",
        "text": "Sufentanil (SUFENTA®)"
      },
      {
        "key": "C",
        "text": "Dobutamine"
      },
      {
        "key": "D",
        "text": "Atracurium (TRACRIUM®)"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Le midazolam est une benzodiazépine à effet hypnotique utilisée notamment en anesthésie et en sédation."
  },
  {
    "id": 21,
    "type": "QCM",
    "text": "Concernant les déterminants du débit cardiaque, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "La précharge correspond à la quantité de sang qui arrive dans le cœur avant la contraction."
      },
      {
        "key": "B",
        "text": "L'inotropie correspond à la fréquence cardiaque."
      },
      {
        "key": "C",
        "text": "Une bonne inotropie entraîne une contraction cardiaque forte."
      },
      {
        "key": "D",
        "text": "La postcharge correspond à la résistance contre laquelle le cœur doit éjecter le sang."
      },
      {
        "key": "E",
        "text": "Une mauvaise inotropie entraîne une contraction plus puissante du cœur."
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "feedback": "La précharge correspond au remplissage du cœur avant la contraction.L'inotropie correspond à la force de contraction du muscle cardiaque.La postcharge est la résistance contre laquelle le ventricule doit éjecter le sang."
  },
  {
    "id": 22,
    "type": "QCM",
    "text": "Quels facteurs participent à la diminution du taux de glucose dans le sang ?",
    "options": [
      {
        "key": "A",
        "text": "Le glucagon"
      },
      {
        "key": "B",
        "text": "L'hormone de croissance"
      },
      {
        "key": "C",
        "text": "L'insuline"
      },
      {
        "key": "D",
        "text": "L'exercice physique"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "feedback": "L'insuline diminue la glycémie.L'activité physique favorise la consommation du glucose par les muscles."
  },
  {
    "id": 23,
    "type": "QCM",
    "text": "À quel(s) moment(s) l'éducation thérapeutique (ETP) doit-elle être proposée à une personne vivant avec le VIH ?",
    "options": [
      {
        "key": "A",
        "text": "Lors de l'annonce du diagnostic"
      },
      {
        "key": "B",
        "text": "Lors de l'instauration du traitement antirétroviral"
      },
      {
        "key": "C",
        "text": "En cas de difficultés d'observance thérapeutique"
      },
      {
        "key": "D",
        "text": "En cas d'échec du traitement"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "L'ETP doit être proposée à toutes les étapes importantes de la prise en charge : annonce du diagnostic, mise en route du traitement, difficultés d'observance ou échec thérapeutique."
  },
  {
    "id": 24,
    "type": "QCM",
    "text": "À propos du débit cardiaque (DC), quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Le débit cardiaque est égal au volume d'éjection multiplié par la fréquence cardiaque."
      },
      {
        "key": "B",
        "text": "Une augmentation de la fréquence cardiaque augmente toujours le débit cardiaque sans limite."
      },
      {
        "key": "C",
        "text": "Au-delà d'une certaine fréquence cardiaque, le débit cardiaque peut diminuer."
      },
      {
        "key": "D",
        "text": "La précharge influence le volume de sang disponible pour l'éjection."
      },
      {
        "key": "E",
        "text": "La postcharge facilite l'éjection du sang par le cœur."
      }
    ],
    "correct": [
      "A",
      "C",
      "D"
    ],
    "feedback": "DC = Volume d'éjection systolique × Fréquence cardiaque. Une fréquence cardiaque trop élevée réduit le temps de remplissage ventriculaire et peut diminuer le débit cardiaque. La précharge influence le volume de sang éjecté."
  },
  {
    "id": 25,
    "type": "QCM",
    "text": "Concernant les dérivés nitrés, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Ils provoquent une vasodilatation des vaisseaux sanguins."
      },
      {
        "key": "B",
        "text": "Ils augmentent le travail du cœur."
      },
      {
        "key": "C",
        "text": "Ils permettent de soulager rapidement la douleur angineuse."
      },
      {
        "key": "D",
        "text": "Ils diminuent l'apport sanguin au myocarde."
      },
      {
        "key": "E",
        "text": "Ils sont utilisés dans l'angor."
      }
    ],
    "correct": [
      "A",
      "C",
      "E"
    ],
    "feedback": "Les dérivés nitrés provoquent une vasodilatation.Ils soulagent rapidement la douleur angineuse.Ils sont utilisés dans le traitement de l'angor.Ils diminuent le travail du cœur et améliorent l'apport en oxygène."
  },
  {
    "id": 26,
    "type": "QCM",
    "text": "Concernant la surveillance infirmière d'un patient recevant des dérivés nitrés, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Surveiller la tension artérielle."
      },
      {
        "key": "B",
        "text": "Surveiller la fréquence cardiaque."
      },
      {
        "key": "C",
        "text": "Surveiller la douleur thoracique."
      },
      {
        "key": "D",
        "text": "Surveiller systématiquement la glycémie."
      },
      {
        "key": "E",
        "text": "Surveiller uniquement la température."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "La surveillance porte principalement sur :la tension artérielle,la fréquence cardiaque,l'efficacité sur la douleur thoracique."
  },
  {
    "id": 27,
    "type": "QCM",
    "text": "Quels sont les effets indésirables possibles des dérivés nitrés ?",
    "options": [
      {
        "key": "A",
        "text": "Hypotension."
      },
      {
        "key": "B",
        "text": "Céphalées."
      },
      {
        "key": "C",
        "text": "Bouffées de chaleur."
      },
      {
        "key": "D",
        "text": "Vertiges."
      },
      {
        "key": "E",
        "text": "Bradycardie sévère constante."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Les principaux effets indésirables sont :hypotension,céphalées,bouffées vasomotrices,vertiges."
  },
  {
    "id": 28,
    "type": "QCM",
    "text": "Concernant les infections à herpès virus, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Les infections sont bénignes dans la majorité des cas."
      },
      {
        "key": "B",
        "text": "Les personnes immunodéprimées sont plus à risque de formes graves."
      },
      {
        "key": "C",
        "text": "Les infections à herpès guérissent définitivement après la primo-infection."
      },
      {
        "key": "D",
        "text": "Le nouveau-né fait partie des populations fragiles."
      },
      {
        "key": "E",
        "text": "Les formes graves sont fréquentes chez tous les patients."
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "feedback": "Les infections sont le plus souvent bénignes.Les immunodéprimés et les nouveau-nés sont plus exposés aux formes graves.Le virus persiste dans l'organisme toute la vie."
  },
  {
    "id": 29,
    "type": "QCM",
    "text": "À propos de l'herpès virus, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Après la primo-infection, le virus peut rester latent à vie."
      },
      {
        "key": "B",
        "text": "Le stress peut favoriser une réactivation de l'herpès."
      },
      {
        "key": "C",
        "text": "L'immunodéficience peut favoriser une réactivation virale."
      },
      {
        "key": "D",
        "text": "L'herpès oculaire fait partie des formes graves possibles."
      },
      {
        "key": "E",
        "text": "La réactivation correspond à la disparition du virus."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Le virus reste latent à vie.Le stress et l'immunodépression favorisent les réactivations.L'herpès oculaire est une forme grave pouvant menacer la vision.La réactivation ne correspond pas à la disparition du virus. 30 B, D Feedback : Ils sont utilisés pour préparer la peau avant un geste invasif. Il est déconseillé de mélanger différents antiseptiques. Ils ne remplacent pas les antibiotiques lors d'une infection."
  },
  {
    "id": 30,
    "type": "QCM",
    "text": "Dans quelles situations les antiseptiques sont-ils principalement utilisés ?",
    "options": [
      {
        "key": "A",
        "text": "Pour éliminer tous les types de micro-organismes sans exception."
      },
      {
        "key": "B",
        "text": "Pour préparer la peau avant une injection ou un acte invasif."
      },
      {
        "key": "C",
        "text": "Pour remplacer les antibiotiques lors d'une infection."
      },
      {
        "key": "D",
        "text": "Il est recommandé de ne pas mélanger différents antiseptiques."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "feedback": "Les antiseptiques servent notamment à préparer la peau avant un geste invasif. Il est déconseillé de mélanger différents antiseptiques ; ils ne remplacent pas les antibiotiques."
  },
  {
    "id": 31,
    "type": "QCM",
    "text": "Quels sont les principaux objectifs du traitement antirétroviral chez une personne vivant avec le VIH ?",
    "options": [
      {
        "key": "A",
        "text": "Maintenir un taux de CD4 supérieur à 500/mm³."
      },
      {
        "key": "B",
        "text": "Obtenir une charge virale inférieure à 50 copies/ml."
      },
      {
        "key": "C",
        "text": "Réduire le risque de transmission du virus."
      },
      {
        "key": "D",
        "text": "Diminuer le taux de CD4 en dessous de 500/mm³."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Les objectifs sont : maintenir ou restaurer l'immunité (CD4), ,obtenir une charge virale indétectable (< 50 copies/ml), réduire le risque de transmission du VIH."
  },
  {
    "id": 32,
    "type": "QCM",
    "text": "Parmi les traitements suivants, lesquels peuvent être prescrits chez un patient présentant un angor ?",
    "options": [
      {
        "key": "A",
        "text": "Les inhibiteurs de l'enzyme de conversion (IEC)."
      },
      {
        "key": "B",
        "text": "Les inhibiteurs calciques."
      },
      {
        "key": "C",
        "text": "Les dérivés nitrés."
      },
      {
        "key": "D",
        "text": "Les bêta-bloquants."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Tous ces traitements peuvent être prescrits selon le profil du patient : IEC, inhibiteurs calciques, dérivés nitrés, bêta-bloquants."
  },
  {
    "id": 33,
    "type": "QCM",
    "text": "Concernant la noradrénaline, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "C'est un puissant vasoconstricteur agissant principalement sur les récepteurs α1."
      },
      {
        "key": "B",
        "text": "Elle est indiquée dans l'état de choc septique."
      },
      {
        "key": "C",
        "text": "Son délai d'action est d'environ 1 à 2 minutes."
      },
      {
        "key": "D",
        "text": "Sa demi-vie est supérieure à 1 heure."
      },
      {
        "key": "E",
        "text": "Elle est contre-indiquée en situation de détresse vitale."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "La noradrénaline est un puissant vasoconstricteur α1. C'est le traitement de référence du choc septique. Son effet débute rapidement, en 1 à 2 minutes. Sa demi-vie est très courte (quelques minutes), donc D est faux. Elle est utilisée justement dans les situations de détresse vitale, donc E est faux."
  }
];
const json=(d,status=200,headers={})=>Response.json(d,{status,headers:{'Cache-Control':'no-store',...headers}});
async function sign(value,secret){let k=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('')}
async function isAdmin(req,env){let c=req.headers.get('Cookie')?.match(/quizadmin=([^;]+)/)?.[1];if(!c||!env.ADMIN_PASSWORD)return false;let [expiry,sig]=c.split('.');return Number(expiry)>Date.now()&&sig===await sign(expiry,env.ADMIN_PASSWORD)}
async function rows(env){let all=[],cursor;do{let l=await env.BUCKET.list({prefix:'submissions/',cursor});all.push(...await Promise.all(l.objects.map(async o=>JSON.parse(await(await env.BUCKET.get(o.key)).text()))));cursor=l.truncated?l.cursor:undefined}while(cursor);return all.sort((a,b)=>b.created_at.localeCompare(a.created_at))}
const equal=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
export default {async fetch(req,env){try{const path=new URL(req.url).pathname;const handled=await attemptRoutes(req,env,path);if(handled)return handled;if(assets[path])return new Response(assets[path][0],{headers:{'Content-Type':assets[path][1]}});
if(path==='/api/questions')return json(QUESTIONS.map(({id,type,text,options})=>({id,type,text,options})));
if(path==='/api/admin/login'&&req.method==='POST'){let d=await req.json();if(!env.ADMIN_PASSWORD||d.password!==env.ADMIN_PASSWORD)return json({error:'Mot de passe incorrect.'},401);let exp=String(Date.now()+8*3600000);return json({ok:true},200,{'Set-Cookie':`quizadmin=${exp}.${await sign(exp,env.ADMIN_PASSWORD)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`})}
if(path==='/api/admin/logout')return json({ok:true},200,{'Set-Cookie':'quizadmin=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'});
if(path==='/api/admin/me')return json({admin:await isAdmin(req,env)});
if(path.startsWith('/api/admin/')){if(!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(path.endsWith('/questions'))return json(QUESTIONS);let data=await rows(env);if(path.endsWith('/results'))return json({results:data});if(path.endsWith('/export.csv')||path.endsWith('/export.xlsx'))return exportData(data,path.endsWith('.xlsx'));}
if(path==='/api/submit'&&req.method==='POST'){if(Number(req.headers.get('Content-Length'))>150000)return json({error:'Copie trop volumineuse'},413);let d=await req.json();const attempt=await readObject(env,'attempts/'+d.attempt_token+'.json');if(!attempt||attempt.submitted)return json({error:'Tentative invalide ou déjà envoyée.'},409);if(attempt.deadline&&Date.now()>attempt.deadline+5000)d.answers=attempt.answers;d.nom=attempt.nom;d.prenom=attempt.prenom;d.groupe='';let nom=String(d.nom||'').trim(),prenom=String(d.prenom||'').trim(),groupe=String(d.groupe||'').trim();if(nom.length<2||nom.length>80||prenom.length<2||prenom.length>80||groupe.length>70)return json({error:'Nom et prénom obligatoires (2 à 80 caractères).'},400);let answers={},score=0,review=[];for(let q of QUESTIONS){let a=d.answers?.[q.id]||[];if(!Array.isArray(a)||a.some(v=>!q.options.some(o=>o.key===v))||new Set(a).size!==a.length||(q.type==='QCS'&&a.length>1))return json({error:'Réponse invalide'},400);let success=equal(a,q.correct);answers[q.id]=a;score+=Number(success);review.push({...q,selected:a,success})}let id=attempt.id;let row={id,nom,prenom,groupe,created_at:new Date().toISOString(),score,total:QUESTIONS.length,score20:Math.round(score*2000/QUESTIONS.length)/100,duration_seconds:Math.max(0,Math.min(Number(d.duration_seconds)||0,86400)),answers};row.duration_seconds=Math.round((Math.min(Date.now(),attempt.deadline||Date.now())-attempt.started_at)/1000);await env.BUCKET.put('submissions/'+id+'.json',JSON.stringify(row));attempt.submitted=true;await env.BUCKET.put('attempts/'+d.attempt_token+'.json',JSON.stringify(attempt));return json({...row,review});}
return json({error:'Page introuvable'},404)}catch(e){return json({error:'Erreur du serveur. Réessayez.'},500)}}};
const xml=s=>String(s??'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
function zip(files){let chunks=[],central=[],offset=0;const enc=new TextEncoder();const header=(n)=>new DataView(new ArrayBuffer(n));function crc(bytes){let c=0xffffffff;for(let b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}for(let [name,content]of Object.entries(files)){let n=enc.encode(name),b=enc.encode(content),c=crc(b),h=header(30);h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint32(14,c,true);h.setUint32(18,b.length,true);h.setUint32(22,b.length,true);h.setUint16(26,n.length,true);chunks.push(new Uint8Array(h.buffer),n,b);let z=header(46);z.setUint32(0,0x02014b50,true);z.setUint16(4,20,true);z.setUint16(6,20,true);z.setUint32(16,c,true);z.setUint32(20,b.length,true);z.setUint32(24,b.length,true);z.setUint16(28,n.length,true);z.setUint32(42,offset,true);central.push(new Uint8Array(z.buffer),n);offset+=30+n.length+b.length}let size=central.reduce((s,b)=>s+b.length,0),e=header(22);e.setUint32(0,0x06054b50,true);e.setUint16(8,Object.keys(files).length,true);e.setUint16(10,Object.keys(files).length,true);e.setUint32(12,size,true);e.setUint32(16,offset,true);return new Blob([...chunks,...central,e.buffer])}
function exportData(data,xlsx){let matrix=[['ID','Date UTC','Nom','Prénom','Groupe','Score','Total','Note /20','Durée (s)',...QUESTIONS.map(q=>'Q'+q.id+' réponse'),...QUESTIONS.map(q=>'Q'+q.id+' résultat')],...data.map(r=>[r.id,r.created_at,r.nom,r.prenom,r.groupe,r.score,r.total,r.score20,r.duration_seconds,...QUESTIONS.map(q=>(r.answers[q.id]||[]).join(', ')),...QUESTIONS.map(q=>Number(equal(r.answers[q.id]||[],q.correct)))])];if(!xlsx)return new Response('\ufeff'+matrix.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(';')).join('\r\n'),{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename=resultats_quiz.csv'}});let sheet='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'+matrix.map(r=>'<row>'+r.map(x=>typeof x==='number'?`<c><v>${x}</v></c>`:`<c t="inlineStr"><is><t>${xml(x)}</t></is></c>`).join('')+'</row>').join('')+'</sheetData></worksheet>';let files={'[Content_Types].xml':'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>','_rels/.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>','xl/workbook.xml':'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Résultats" sheetId="1" r:id="rId1"/></sheets></workbook>','xl/_rels/workbook.xml.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>','xl/worksheets/sheet1.xml':sheet};return new Response(zip(files),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','Content-Disposition':'attachment; filename=resultats_quiz.xlsx'}})}
const defaultSettings={timed:false,minutes:30,max_attempts:0,allow_resume:true};
async function readObject(env,key){let o=await env.BUCKET.get(key);return o?JSON.parse(await o.text()):null}
async function attemptRoutes(req,env,path){
if(path==='/api/settings'||path==='/api/admin/settings'){if(path.includes('/admin/')&&!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(req.method==='POST'){let s=await req.json();if(typeof s.timed!=='boolean'||typeof s.allow_resume!=='boolean'||!Number.isInteger(s.minutes)||s.minutes<1||s.minutes>240||!Number.isInteger(s.max_attempts)||s.max_attempts<0||s.max_attempts>100)return json({error:'Durée : 1 à 240 minutes. Tentatives : 0 à 100.'},400);await env.BUCKET.put('config/settings.json',JSON.stringify({timed:s.timed,minutes:s.minutes,max_attempts:s.max_attempts,allow_resume:s.allow_resume}));return json({ok:true})}return json(await readObject(env,'config/settings.json')||defaultSettings)}
if(path==='/api/start'&&req.method==='POST'){let d=await req.json(),nom=String(d.nom||'').trim(),prenom=String(d.prenom||'').trim();if(nom.length<2||nom.length>80||prenom.length<2||prenom.length>80)return json({error:'Nom et prénom obligatoires.'},400);const identity=(nom+'|'+prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ');let settings=await readObject(env,'config/settings.json')||defaultSettings;let previous=d.token?await readObject(env,'attempts/'+d.token+'.json'):null;if(previous&&!previous.submitted&&previous.identity===identity&&previous.allow_resume){return json(previous)}let count=0,cursor;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);if(a.identity===identity)count++}cursor=l.truncated?l.cursor:undefined}while(cursor);let old=(await rows(env)).filter(r=>(r.nom+'|'+r.prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ')===identity);let attemptSubmissionIds=new Set();cursor=undefined;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);attemptSubmissionIds.add(a.id)}cursor=l.truncated?l.cursor:undefined}while(cursor);count+=old.filter(r=>!attemptSubmissionIds.has(r.id)).length;if(settings.max_attempts&&count>=settings.max_attempts)return json({error:'Nombre maximal de tentatives atteint. Contactez votre formateur.'},403);let now=Date.now(),a={token:crypto.randomUUID(),id:now*1000+crypto.getRandomValues(new Uint16Array(1))[0]%1000,identity,nom,prenom,started_at:now,deadline:settings.timed?now+settings.minutes*60000:null,allow_resume:settings.allow_resume,answers:{},submitted:false};await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json(a)}
if(path==='/api/progress'&&req.method==='POST'){let d=await req.json(),a=await readObject(env,'attempts/'+d.token+'.json');if(!a||a.submitted)return json({error:'Tentative terminée'},409);if(a.deadline&&Date.now()>a.deadline)return json({error:'Temps écoulé'},409);if(!d.answers||typeof d.answers!=='object'||JSON.stringify(d.answers).length>30000)return json({error:'Réponses invalides'},400);a.answers=d.answers;a.current=Number.isInteger(d.current)?Math.max(0,Math.min(QUESTIONS.length-1,d.current)):0;await env.BUCKET.put('attempts/'+d.token+'.json',JSON.stringify(a));return json({ok:true})}
return null}
