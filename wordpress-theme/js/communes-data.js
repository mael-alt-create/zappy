/**
 * communes-data.js
 * Base de données exhaustive du modèle territorial des Communes du Bénin 🇧🇯
 * Conforme à la réforme structurelle de la décentralisation (Code de l'Administration Territoriale 2022)
 * Intègre les 12 départements, les 77 communes, et le profilage immersif des villes majeures.
 */

const COMMUNES_DATABASE = {
  // Départements et liste des 77 communes
  departments: [
    { id: "alibori", name: "Alibori", chefLieu: "Kandi", communes: ["Banikoara", "Gogounou", "Kandi", "Karimama", "Malanville", "Ségbana"] },
    { id: "atacora", name: "Atacora", chefLieu: "Natitingou", communes: ["Boukoumbé", "Cobly", "Kérou", "Kouandé", "Matéri", "Natitingou", "Pehunco", "Tanguiéta", "Toucountouna"] },
    { id: "atlantique", name: "Atlantique", chefLieu: "Allada", communes: ["Abomey-Calavi", "Allada", "Kpomassè", "Ouidah", "Sô-Ava", "Toffo", "Tori-Bossito", "Zè"] },
    { id: "borgou", name: "Borgou", chefLieu: "Parakou", communes: ["Bembèrèkè", "Kalalé", "N'Dali", "Nikki", "Parakou", "Pèrèrè", "Sinendé", "Tchaourou"] },
    { id: "collines", name: "Collines", chefLieu: "Dassa-Zoumè", communes: ["Bantè", "Dassa-Zoumè", "Glazoué", "Ouèssè", "Savalou", "Savè"] },
    { id: "couffo", name: "Couffo", chefLieu: "Aplahoué", communes: ["Aplahoué", "Djakotomey", "Dogbo", "Klouékanmè", "Lalo", "Toviklin"] },
    { id: "donga", name: "Donga", chefLieu: "Djougou", communes: ["Bassila", "Copargo", "Djougou", "Ouaké"] },
    { id: "littoral", name: "Littoral", chefLieu: "Cotonou", communes: ["Cotonou"] },
    { id: "mono", name: "Mono", chefLieu: "Lokossa", communes: ["Athiémé", "Bopa", "Comè", "Grand-Popo", "Houéyogbé", "Lokossa"] },
    { id: "oueme", name: "Ouémé", chefLieu: "Porto-Novo", communes: ["Adjarra", "Adjohoun", "Aguégués", "Akpro-Missérété", "Avrankou", "Bonou", "Dangbo", "Porto-Novo", "Sèmè-Kpodji"] },
    { id: "plateau", name: "Plateau", chefLieu: "Pobè", communes: ["Adja-Ouèrè", "Ifangni", "Kétou", "Pobè", "Sakété"] },
    { id: "zou", name: "Zou", chefLieu: "Abomey", communes: ["Abomey", "Agbangnizoun", "Bohicon", "Covè", "Djidja", "Ouinhi", "Za-Kpota", "Zagnanado", "Zogbodomey"] }
  ],

  // Profils détaillés et personnalisés pour les grandes villes & communes emblématiques
  profiles: {
    "cotonou": {
      id: "cotonou",
      name: "Cotonou",
      status: "Commune à statut particulier",
      statusBadge: "Capitale Économique",
      department: "Littoral",
      slogan: "Métropole d'Avenir et Porte Océane de l'Afrique de l'Ouest",
      description: "Poumon économique du Bénin, Cotonou est une métropole vibrante bordée par l'Océan Atlantique et le lac Nokoué. Hub de commerce international, de diplomatie et de culture contemporaine.",
      themeColor: "#059669", // Vert Bénin dynamique
      accentColor: "#F59E0B", // Or solaire
      badgeColor: "#065F46",
      bgGradient: "linear-gradient(135deg, #064E3B 0%, #065F46 50%, #0F766E 100%)",
      mayor: "Luc Sètondji ATROKPO",
      mayorTitle: "Maire de la Ville de Cotonou, Président de l'ANCB",
      se: "Ange Paterne AMOUSSOUGAN",
      seTitle: "Secrétaire Exécutif de la Mairie",
      population: "1 250 000 hab.",
      superficie: "79 km²",
      arrondissementsCount: 13,
      quartiersCount: 144,
      satisfactionRate: "94.8%",
      budget: "24.6 Milliards FCFA (Budget 2026)",
      emergencyNumber: "Police : 166 | SAMU : 130 | Pompiers : 118",
      contact: {
        address: "Hôtel de Ville, Place du Souvenir, Cotonou",
        email: "contact@cotonou.mairie.bj",
        phone: "+229 21 30 11 20",
        hours: "Lun - Ven : 08h00 - 12h30 & 14h00 - 17h30"
      },
      heroImages: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=80"
      ],
      highlights: [
        {
          title: "Monument de l'Amazone",
          category: "Patrimoine & Fierté",
          badge: "Symbole National",
          desc: "Statue majestueuse de 30 mètres en bronze rendant hommage aux Agoodjié, amazones guerrières du Dahomey.",
          location: "Esplanade des Amazones, Boulevard de la Marina",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Marché International Dantokpa",
          category: "Commerce & Vitalité",
          badge: "Plus grand marché d'Afrique de l'Ouest",
          desc: "Carrefour commercial régional de 18 hectares brassant les marchandises et commerçants de toute la sous-région.",
          location: "Bordure lagunaire de Cotonou",
          image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Place de l'Étoile Rouge",
          category: "Histoire & Urbanisme",
          badge: "Incontournable",
          desc: "Emblématique carrefour circulaire au cœur des flux urbains, symbole de la période révolutionnaire réaménagé.",
          location: "Croisement des grands axes de Cotonou",
          image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Plage de Fidjrossè & Route des Pêches",
          category: "Loisirs & Tourisme balnéaire",
          badge: "Nouvelle Marina",
          desc: "Front de mer moderne aménagé avec pistes cyclables, restaurants côtiers et couchers de soleil sur l'Atlantique.",
          location: "Fidjrossè - Cotonou Ouest",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
        }
      ],
      circuits: [
        {
          name: "Circuit Marina & Modernité Urbaine",
          duration: "1 Demi-journée",
          distance: "8 km",
          steps: ["Place de l'Amazone", "Palais des Congrès", "Boulevard de la Marina", "Plage de Fidjrossè"]
        },
        {
          name: "Immersion Populaire & Fluviale",
          duration: "1 Journée",
          distance: "12 km",
          steps: ["Marché Dantokpa", "Berges du Lac Nokoué", "Embarcadère pour Ganvié", "Marché artisanal de Cotonou"]
        }
      ],
      alerts: [
        {
          type: "info",
          title: "Campagne e-Services ANIP 2026",
          message: "Délivrance instantanée des actes sécurisés aux guichets des 13 arrondissements."
        }
      ]
    },

    "porto-novo": {
      id: "porto-novo",
      name: "Porto-Novo",
      status: "Commune à statut particulier",
      statusBadge: "Capitale Politique & Historique",
      department: "Ouémé",
      slogan: "Hogbonou, Cité Patrimoniale des Arts, de la Culture et de la Biodiversité",
      description: "Capitale historique du Bénin, Porto-Novo enchante par son architecture afro-brésilienne unique, ses sanctuaires Zangbéto, sa riche tradition royale et son écrin naturel en bordure de lagune.",
      themeColor: "#1E3A8A", // Indigo royal & lagune
      accentColor: "#F59E0B", // Or noble
      badgeColor: "#172554",
      bgGradient: "linear-gradient(135deg, #172554 0%, #1E3A8A 50%, #2563EB 100%)",
      mayor: "Charlemagne N. YANKOTY",
      mayorTitle: "Maire de la Ville de Porto-Novo",
      se: "Danielle V. GBENOU",
      seTitle: "Secrétaire Exécutif de la Mairie",
      population: "315 000 hab.",
      superficie: "110 km²",
      arrondissementsCount: 5,
      quartiersCount: 66,
      satisfactionRate: "93.4%",
      budget: "9.2 Milliards FCFA (Budget 2026)",
      emergencyNumber: "Police : 166 | SAMU : 130 | Sapeurs-Pompiers : 118",
      contact: {
        address: "Hôtel de Ville de Porto-Novo, Quartier Attakè",
        email: "contact@portonovo.mairie.bj",
        phone: "+229 20 21 28 50",
        hours: "Lun - Ven : 08h00 - 12h30 & 14h00 - 17h30"
      },
      heroImages: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80"
      ],
      highlights: [
        {
          title: "Grande Mosquée de Porto-Novo",
          category: "Architecture & Patrimoine",
          badge: "Chef d'œuvre Afro-Brésilien",
          desc: "Construite au début du XXe siècle par les Agudas revenus du Brésil, elle rappelle les églises baroques de Salvador de Bahia.",
          location: "Centre-ville historique",
          image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Musée Honmè (Palais du Roi Toffa)",
          category: "Histoire Royale",
          badge: "Trésor Royal",
          desc: "Ancien palais des souverains du royaume de Xogbonu, préservant instruments rituels, trônes et appartements royaux.",
          location: "Quartier Honmè",
          image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Jardin des Plantes et de la Nature (JPN)",
          category: "Biodiversité & Sérénité",
          badge: "Forêt Sacrée Urbaine",
          desc: "Havre écologique de 3,7 hectares abritant des arbres centenaires sacrés, plantes médicinales et singes à ventre rouge.",
          location: "Face à l'Assemblée Nationale",
          image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Berges Lagunaires & Quai des Pêcheurs",
          category: "Nature & Écotourisme",
          badge: "Écotourisme",
          desc: "Promenade paysagère le long de la lagune de Porto-Novo offrant des excursions en pirogue vers les villages lacustres.",
          location: "Berges du Sud de la ville",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
        }
      ],
      circuits: [
        {
          name: "Circuit Afro-Brésilien & Palais Royaux",
          duration: "1 Journée",
          distance: "5 km à pied",
          steps: ["Grande Mosquée", "Musée Honmè", "Musée d'Ethnographie Alexandre Adandé", "Jardin des Plantes"]
        }
      ],
      alerts: [
        {
          type: "success",
          title: "Festival des Masques et Traditions de Porto-Novo",
          message: "Prochaine édition culturelle réunissant les confréries Zangbéto et Gèlèdè."
        }
      ]
    },

    "ouidah": {
      id: "ouidah",
      name: "Ouidah",
      status: "Commune touristique & historique",
      statusBadge: "Capitale Mondiale du Vodun",
      department: "Atlantique",
      slogan: "Glexwé, Cité Historique, Berceau du Vodun et Terre du Pardon Mémoriel",
      description: "Cœur spirituel et mémoriel d'Afrique de l'Ouest, Ouidah est un haut-lieu mondial de recueillement, célèbre pour sa Route des Esclaves, le Temple des Pythons et les légendaires Vodun Days.",
      themeColor: "#DC2626", // Rouge rituel et latérite
      accentColor: "#F59E0B", // Or
      badgeColor: "#991B1B",
      bgGradient: "linear-gradient(135deg, #7F1D1D 0%, #991B1B 50%, #B91C1C 100%)",
      mayor: "Christian HOUETCHENOUM",
      mayorTitle: "Maire de la Commune de Ouidah",
      se: "Koffi Clément ADANGBE",
      seTitle: "Secrétaire Exécutif de la Mairie",
      population: "195 000 hab.",
      superficie: "364 km²",
      arrondissementsCount: 10,
      quartiersCount: 88,
      satisfactionRate: "96.1%",
      budget: "4.8 Milliards FCFA (Budget 2026)",
      emergencyNumber: "Commissariat : 166 | Santé : +229 21 34 10 05",
      contact: {
        address: "Hôtel de Ville de Ouidah, Face Place du Marché",
        email: "tourisme-citoyen@ouidah.bj",
        phone: "+229 21 34 11 02",
        hours: "Lun - Ven : 08h00 - 12h30 & 14h00 - 17h30"
      },
      heroImages: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80"
      ],
      highlights: [
        {
          title: "La Porte du Non-Retour",
          category: "Mémoire Mondiale UNESCO",
          badge: "Patrimoine de l'Humanité",
          desc: "Monument sculptural érigé face à l'Océan marquant l'ultime étape de la déportation des captifs africains lors de la traite.",
          location: "Plage de Djègbadji",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Le Temple des Pythons",
          category: "Spiritualité & Coutumes",
          badge: "Sanctuaire Sacré",
          desc: "Sanctuaire vivant dédié à Dan, divinité protectrice incarnée par les pythons royaux circulant librement.",
          location: "Face à la Basilique de l'Immaculée Conception",
          image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "La Forêt Sacrée de Kpassè",
          category: "Légendes & Nature",
          badge: "Haut-Lieu Ancestral",
          desc: "Forêt peuplée de sculptures contemporaines monumentales rendant hommage au Roi fondateur Kpassè métamorphosé en iroko.",
          location: "Entrée Nord de Ouidah",
          image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "La Route des Esclaves (4 km)",
          category: "Pèlerinage Historique",
          badge: "Chemin Émotionnel",
          desc: "Parcours mémoriel jalonné par la Place Chacha, l'Arbre de l'Oubli, la Case Zomaï et l'Arbre du Retour.",
          location: "De la Place Chacha jusqu'à la plage",
          image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80"
        }
      ],
      circuits: [
        {
          name: "Circuit Pèlerinage de la Mémoire & Vodun",
          duration: "Journée entière",
          distance: "6.5 km",
          steps: ["Fort Portugais", "Temple des Pythons", "Place Chacha", "Case Zomaï", "Porte du Non-Retour"]
        }
      ],
      alerts: [
        {
          type: "warning",
          title: "Vodun Days Internationaux",
          message: "Réservation des pass officiels et hébergements ouverte sur le portail de la commune."
        }
      ]
    },

    "abomey": {
      id: "abomey",
      name: "Abomey",
      status: "Commune historique & culturelle",
      statusBadge: "Cité des Rois du Dahomey",
      department: "Zou",
      slogan: "Cité Impériale des Rois du Danxomè et Berceau des Amazones Guerrières",
      description: "Capitale historique du puissant royaume du Danxomè, Abomey abrite les prestigieux Palais Royaux classés au patrimoine mondial de l'UNESCO, symboles de résistance et de fierté séculaire.",
      themeColor: "#B45309", // Terre de barre & ocre royal
      accentColor: "#F59E0B",
      badgeColor: "#78350F",
      bgGradient: "linear-gradient(135deg, #78350F 0%, #92400E 50%, #B45309 100%)",
      mayor: "Antoine DJEDOU",
      mayorTitle: "Maire de la Ville Historique d'Abomey",
      se: "Rock S. DOSSOU",
      seTitle: "Secrétaire Exécutif de la Mairie",
      population: "140 000 hab.",
      superficie: "142 km²",
      arrondissementsCount: 7,
      quartiersCount: 41,
      satisfactionRate: "92.8%",
      budget: "3.7 Milliards FCFA (Budget 2026)",
      emergencyNumber: "Commissariat : 166 | Hôpital de Zone : +229 22 50 03 10",
      contact: {
        address: "Hôtel de Ville d'Abomey, Quartier Goho",
        email: "contact@abomey.mairie.bj",
        phone: "+229 22 50 02 18",
        hours: "Lun - Ven : 08h00 - 12h30 & 14h00 - 17h30"
      },
      heroImages: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80"
      ],
      highlights: [
        {
          title: "Palais Royaux d'Abomey (UNESCO)",
          category: "Patrimoine Mondial",
          badge: "Classé UNESCO",
          desc: "Complexe royal fondé sous le Roi Houégbadja, orné de bas-reliefs en terre cuite et abritant les trônes royaux montés sur crânes ennemis.",
          location: "Cœur historique d'Abomey",
          image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Statue du Roi Béhanzin à Goho",
          category: "Héros National",
          badge: "Symbole de Résistance",
          desc: "Monument majestueux représentant l'illustre souverain en geste d'opposition stoïque à la pénétration coloniale.",
          location: "Place Goho",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Village Souterrain d'Agongointo",
          category: "Archéologie Militaire",
          badge: "Découverte Unique",
          desc: "Réseau de galeries et de maisons souterraines de repli creusé au XVIe siècle par les guerriers fon.",
          location: "Périphérie d'Abomey-Bohicon",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
        }
      ],
      circuits: [
        {
          name: "Épopée Royale & Dynasties du Danxomè",
          duration: "1 Journée",
          distance: "7 km",
          steps: ["Place Goho", "Musée Historique d'Abomey", "Palais du Roi Guézo", "Marché Houndjro"]
        }
      ],
      alerts: []
    },

    "parakou": {
      id: "parakou",
      name: "Parakou",
      status: "Commune à statut particulier",
      statusBadge: "Métropole du Nord-Bénin",
      department: "Borgou",
      slogan: "Carrefour Économique et Cité Hospitalière du Grand Septentrion",
      description: "Plus grande ville du Nord du Bénin, Parakou est un carrefour stratégique agro-pastoral, ferroviaire et commercial reliant le sud maritime aux pays sahéliens (Niger, Burkina Faso, Nigeria).",
      themeColor: "#0D9488", // Vert émeraude septentrional
      accentColor: "#F59E0B",
      badgeColor: "#115E59",
      bgGradient: "linear-gradient(135deg, #115E59 0%, #0F766E 50%, #0D9488 100%)",
      mayor: "Inoussa Chabi ZIME",
      mayorTitle: "Maire de la Ville de Parakou",
      se: "Hyacinthe ELEGBEDE",
      seTitle: "Secrétaire Exécutif de la Mairie",
      population: "350 000 hab.",
      superficie: "441 km²",
      arrondissementsCount: 3,
      quartiersCount: 58,
      satisfactionRate: "91.9%",
      budget: "8.4 Milliards FCFA (Budget 2026)",
      emergencyNumber: "Commissariat Central : 166 | Urgences CHUD : +229 23 61 03 30",
      contact: {
        address: "Hôtel de Ville de Parakou, Avenue Tibona",
        email: "contact@parakou.mairie.bj",
        phone: "+229 23 61 02 45",
        hours: "Lun - Ven : 08h00 - 12h30 & 14h00 - 17h30"
      },
      heroImages: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80"
      ],
      highlights: [
        {
          title: "Musée de Plein Air de Parakou",
          category: "Ethnographie & Habitat",
          badge: "Patrimoine Vivant",
          desc: "Parc paysager reconstituant l'habitat traditionnel des ethnies du Nord (Bariba, Somba, Peulh, Dendi).",
          location: "Quartier Zongo",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Grand Marché Arzèkè",
          category: "Commerce Régional",
          badge: "Pôle Commercial",
          desc: "Immense marché couvert moderne où s'échangent coton, karité, ignames, bétail et textiles tissés du Nord.",
          location: "Centre des affaires de Parakou",
          image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Place Tabera & Rond-Point Hubert Maga",
          category: "Repères Urbains",
          badge: "Cœur Citadin",
          desc: "Monuments rendant hommage au premier président du Bénin et célébrant la fraternité des peuples du septentrion.",
          location: "Avenue Centrale",
          image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80"
        }
      ],
      circuits: [
        {
          name: "Circuit Saveurs & Métiers du Grand Nord",
          duration: "1 Demi-journée",
          distance: "10 km",
          steps: ["Gare historique OCBN", "Musée de Plein Air", "Ateliers de tissage Bariba", "Marché Arzèkè"]
        }
      ],
      alerts: []
    },

    "nikki": {
      id: "nikki",
      name: "Nikki",
      status: "Commune impériale & historique",
      statusBadge: "Cité de la Gaani & Empire Bariba",
      department: "Borgou",
      slogan: "Capitale Historique de l'Empire des Baatombu et Gardienne de la Cavalerie Gaani",
      description: "Siège de l'Empire de Nikki et résidence du vénérable souverain Sina Boko, Nikki est le sanctuaire de la haute culture équestre et de la célèbre fête rituelle de la Gaani.",
      themeColor: "#7C3AED", // Pourpre impérial & parade
      accentColor: "#F59E0B",
      badgeColor: "#5B21B6",
      bgGradient: "linear-gradient(135deg, #4C1D95 0%, #5B21B6 50%, #7C3AED 100%)",
      mayor: "Roland Gounou LAFIA",
      mayorTitle: "Maire de la Commune de Nikki",
      se: "Kader S. BIO GUERA",
      seTitle: "Secrétaire Exécutif de la Mairie",
      population: "185 000 hab.",
      superficie: "3 171 km²",
      arrondissementsCount: 7,
      quartiersCount: 72,
      satisfactionRate: "93.1%",
      budget: "3.2 Milliards FCFA (Budget 2026)",
      emergencyNumber: "Commissariat : 166 | Santé : +229 23 63 01 12",
      contact: {
        address: "Mairie de Nikki, Enceinte administrative, Nikki",
        email: "contact@nikki.mairie.bj",
        phone: "+229 23 63 00 24",
        hours: "Lun - Ven : 08h00 - 12h30 & 14h00 - 17h30"
      },
      heroImages: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80"
      ],
      highlights: [
        {
          title: "Palais Impérial de l'Empereur Sina Boko",
          category: "Tradition & Pouvoir Ancestral",
          badge: "Siège Royal",
          desc: "Palais séculaire où réside la cour impériale bariba, rythmé par le conseil des dignitaires et les trompes royales Kakaki.",
          location: "Centre historique de Nikki",
          image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Arène Royale de la Gaani",
          category: "Fête Équestre Mondiale",
          badge: "Événement Majeur",
          desc: "Espace solennel des grandes parades de cavaliers caparaçonnés exécutant des prouesses devant la tribune impériale.",
          location: "Face au Palais Impérial",
          image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80"
        }
      ],
      circuits: [
        {
          name: "Circuit Impérial Baatombu",
          duration: "1 Journée",
          distance: "15 km",
          steps: ["Palais du Sina Boko", "Musée de Nikki", "Tombeau des Rois défunts", "Arène de la Gaani"]
        }
      ],
      alerts: [
        {
          type: "info",
          title: "Festival de la Gaani 2026",
          message: "Consultez le protocole d'accueil des délégations et le calendrier rituel."
        }
      ]
    },

    "natitingou": {
      id: "natitingou",
      name: "Natitingou",
      status: "Commune écotouristique & montagneuse",
      statusBadge: "Porte de l'Atacora & Pendjari",
      department: "Atacora",
      slogan: "Cité des Châteaux Tata Somba, des Cascades et Sanctuaire de la Pendjari",
      description: "Niché au creux de la chaîne montagneuse de l'Atacora, Natitingou offre des panoramas époustouflants, la culture fascinante des Bétammaribè et constitue la porte d'entrée du Parc National de la Pendjari.",
      themeColor: "#EA580C", // Ocre grès & coucher de soleil
      accentColor: "#10B981", // Vert nature
      badgeColor: "#9A3412",
      bgGradient: "linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)",
      mayor: "Taté OUINDEYAMA",
      mayorTitle: "Maire de la Commune de Natitingou",
      se: "Kouagou D. N'DAH",
      seTitle: "Secrétaire Exécutif de la Mairie",
      population: "135 000 hab.",
      superficie: "3 045 km²",
      arrondissementsCount: 9,
      quartiersCount: 65,
      satisfactionRate: "95.2%",
      budget: "3.4 Milliards FCFA (Budget 2026)",
      emergencyNumber: "Commissariat : 166 | Parc Pendjari Gardes : +229 23 83 00 15",
      contact: {
        address: "Hôtel de Ville de Natitingou, Quartier Eni",
        email: "tourisme@natitingou.mairie.bj",
        phone: "+229 23 82 12 10",
        hours: "Lun - Ven : 08h00 - 12h30 & 14h00 - 17h30"
      },
      heroImages: [
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80"
      ],
      highlights: [
        {
          title: "Châteaux Forts Tata Somba (Bétammaribè)",
          category: "Architecture Vernaculaire UNESCO",
          badge: "Patrimoine Mondial",
          desc: "Habitations traditionnelles fortifiées à deux étages, véritables forteresses d'argile conçues pour la défense et la vie familiale.",
          location: "Pays Otammari / Boukoumbé - Natitingou",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Chutes d'eau de Kota",
          category: "Écotourisme & Fraîcheur",
          badge: "Site Naturel",
          desc: "Cascade spectaculaire nichée dans un cirque boisé, idéale pour la baignade rafraîchissante et les pique-niques nature.",
          location: "À 15 km au sud de Natitingou",
          image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Musée des Arts et Traditions Populaires",
          category: "Culture Otammari",
          badge: "Musée Régional",
          desc: "Installé dans l'ancien bâtiment colonial de la préfecture, il retrace les rites d'initiation et la vie matérielle de l'Atacora.",
          location: "Centre-ville de Natitingou",
          image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
        }
      ],
      circuits: [
        {
          name: "Circuit Falaises, Tatas & Cascades",
          duration: "2 Jours",
          distance: "45 km",
          steps: ["Musée de Natitingou", "Chutes de Kota", "Mirador de Kouaba", "Visite d'un Tata Somba habité"]
        }
      ],
      alerts: []
    }
  },

  // Catalogue des démarches administratives citoyennes (Interfaçable avec service-public.bj et anip.bj)
  procedures: [
    {
      id: "acte-naissance",
      category: "etat-civil",
      categoryName: "État Civil & Identité",
      title: "Extrait d'Acte de Naissance Sécurisé & NPI",
      badge: "100% Numérisé",
      partner: "ANIP / Mairie",
      delay: "Immédiat ou 24h",
      cost: "1 000 FCFA",
      requirements: ["Numéro Personnel d'Identification (NPI)", "Ancien volet n°1 ou certificat d'accouchement", "Pièce d'identité d'un parent ou tuteur"],
      description: "Délivrance de l'acte de naissance biométrique sécurisé avec QR-code d'authentification nationale.",
      linkUrl: "https://eservices.anip.bj"
    },
    {
      id: "certificat-residence",
      category: "citoyennete",
      categoryName: "Citoyenneté & Légalisation",
      title: "Certificat de Résidence Communal",
      badge: "Guichet Arrondissement",
      partner: "Arrondissement & Mairie",
      delay: "24h à 48h",
      cost: "1 500 FCFA",
      requirements: ["Attestation du Chef de Quartier / Village", "Copie de la pièce d'identité (CIP ou Carte Biométrique)", "Facture SBEE ou SONEB récente"],
      description: "Attestation légale certifiant le domicile effectif du requérant au sein du territoire de la commune.",
      linkUrl: "https://service-public.bj"
    },
    {
      id: "permis-construire",
      category: "urbanisme",
      categoryName: "Urbanisme & Foncier",
      title: "Permis de Construire (PC)",
      badge: "Direction Services Techniques",
      partner: "Mairie / Ordre des Architectes",
      delay: "15 jours ouvrables",
      cost: "Selon barème de surface",
      requirements: ["Titre Foncier ou Attestation de Détention Coutumière (ADC)", "Plan architectural visé par l'Ordre des Architectes", "Plan de situation géoréférencé"],
      description: "Autorisation obligatoire préalable à toute édification de bâtiment résidentiel, commercial ou industriel.",
      linkUrl: "https://service-public.bj"
    },
    {
      id: "mariage-civil",
      category: "etat-civil",
      categoryName: "État Civil & Identité",
      title: "Célébration de Mariage Civil",
      badge: "Officier d'État Civil",
      partner: "Mairie Centrale & Arrondissements",
      delay: "Publication des bans (15 jours)",
      cost: "15 000 FCFA à 30 000 FCFA",
      requirements: ["Extraits d'actes de naissance sécurisés des époux", "Certificats prénuptiaux", "Pièces d'identité des témoins majeurs", "Certificat de résidence"],
      description: "Organisation de la cérémonie civile sous l'autorité du Maire ou de ses officiers délégués.",
      linkUrl: "https://service-public.bj"
    },
    {
      id: "aodp-commerce",
      category: "economie",
      categoryName: "Commerces & Affaires",
      title: "Autorisation d'Occupation du Domaine Public (AODP)",
      badge: "Direction des Affaires Économiques",
      partner: "Régie des Marchés & Voirie",
      delay: "7 jours",
      cost: "Redevance mensuelle selon m²",
      requirements: ["Formulaire communal de demande", "Copie registre IFU", "Plan sommaire d'implantation de l'étal ou kiosque"],
      description: "Titre temporaire autorisant l'installation d'une terrasse, kiosque ou étal commercial sur le domaine public communal.",
      linkUrl: "https://service-public.bj"
    },
    {
      id: "legalisation-documents",
      category: "citoyennete",
      categoryName: "Citoyenneté & Légalisation",
      title: "Légalisation et Certification Conforme",
      badge: "Minute express",
      partner: "Tous les arrondissements",
      delay: "Moins de 30 minutes",
      cost: "500 FCFA / document",
      requirements: ["Document original", "Photocopie lisible à certifier", "Pièce d'identité"],
      description: "Certification de conformité matérielle des copies d'actes administratifs ou privés.",
      linkUrl: "https://service-public.bj"
    }
  ],

  // Catégories de signalements pour "Allô Mairie / Ma Commune Propre"
  incidentCategories: [
    { id: "voirie", name: "Voirie & Nids-de-poule", icon: "road", desc: "Dégradation de chaussée, pavés déchaussés, trou dangereux" },
    { id: "eclairage", name: "Éclairage Public", icon: "lamp", desc: "Lampadaire éteint, poteau endommagé, zone d'obscurité" },
    { id: "salubrite", name: "Salubrité & Dépotoirs sauvages", icon: "trash", desc: "Ordures abandonnées, caniveau bouché, encombrants" },
    { id: "inondation", name: "Eaux pluviales & Inondations", icon: "cloud-rain", desc: "Stagnation d'eau, refoulement de collecteur, risque d'inondation" },
    { id: "nuisance", name: "Nuisances sonores & Tranquillité", icon: "volume-2", desc: "Bruit excessif nocturne, occupation illégale, sécurité" }
  ],

  // Textes de gouvernance et structure réformée de 2022
  governanceModel: {
    reformYear: 2022,
    lawReference: "Loi n°2021-14 portant Code de l'Administration Territoriale en République du Bénin",
    pillars: [
      {
        role: "Le Conseil Communal & Le Maire",
        nature: "Organe Politique et Délibérant",
        description: "Présidé par le Maire entouré des Adjoints et des Conseillers, il définit les orientations stratégiques, vote le budget, adopte le Plan de Développement Communal (PDC) et veille à l'expression de la démocratie participative locale."
      },
      {
        role: "Le Secrétaire Exécutif (SE)",
        nature: "Organe de Gestion & Ordonnateur du Budget",
        description: "Clé de voûte de la réforme structurelle, le SE est l'ordonnateur unique du budget communal. Il gère l'administration municipale, passe les marchés publics, recrute le personnel technique et garantit la rigueur et la transparence des finances."
      },
      {
        role: "Les Directions Techniques",
        nature: "Pôles d'Excellence Opérationnels",
        description: "Composées des Services Techniques (DST), Affaires Domaniales et Environnementales (DADE), Services Financiers (DAF), et Systèmes d'Information (DSI), chargées de la mise en œuvre concrète des projets sur le terrain."
      }
    ]
  }
};

// Export universel (Browser global & Node compatible)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMMUNES_DATABASE;
}
