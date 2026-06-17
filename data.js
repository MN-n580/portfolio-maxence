const COMPETENCES = {
  a: {
    cle: "a",
    lettre: "A",
    nom: "Administrer",
    sousTitre: "Infrastructures réseaux et systèmes",
    items: [
      { code: "RT1-Admin", statement: "Configuration d'architectures réseaux et services", desc: ["Maîtrise des équipements Cisco, routage inter-VLAN, et sécurisation par ACL.", "Gestion et administration de serveurs Linux."] }
    ]
  },
  b: {
    cle: "b",
    lettre: "B",
    nom: "Connecter",
    sousTitre: "Télécommunications et architectures physiques",
    items: [
      { code: "RT2-Conn", statement: "Déploiement et routage des architectures de transmission", desc: ["Modélisation et simulation de réseaux complexes sous Cisco Packet Tracer (projets Colmar/Strasbourg)."] }
    ]
  },
  c: {
    cle: "c",
    lettre: "C",
    nom: "Programmer",
    sousTitre: "Développement web full-stack et applications informatique",
    items: [
      { code: "RT3-Prog", statement: "Création d'applications et gestion de bases de données", desc: ["Conception de projets full-stack avec le framework Django et langage Python.", "Modélisation de bases de données relationnelles (SQL, MySQL, Microsoft Access)."] }
    ]
  }
};

const PARCOURS = [
  { 
    date: "2025 - 2026", 
    titre: "BUT Réseaux et Télécommunications", 
    desc: "Spécialisation en administration système, sécurité des infrastructures et projets d'intégration (SAÉ)." 
  },
  { 
    date: "2023 - 2025", 
    titre: "BTS CIEL", 
    desc: "Cybersécurité, Informatique et réseaux, Électronique. Base solide en développement bas niveau, solutions connectées et sécurité." 
  },
  { 
    date: "2023", 
    titre: "Baccalauréat STI2D SIN", 
    desc: "Sciences et Technologies de l'Industrie et du Développement Durable, spécialité Systèmes d'Information et Numérique." 
  }
];

const PROJETS = [
  { titre: "Application Ludothèque", resume: "Développement complet d'une application web sous Django avec base de données MySQL et exports de schémas.", tags: ["Django", "Python", "MySQL", "CSS"], ce: ["RT3-Prog"] },
  { titre: "Architecture Réseau Lab", resume: "Maquettons et configurations de routeurs et switchs avec gestion fine des VLANs et déploiement d'ACLs.", tags: ["Cisco", "Packet Tracer", "ACL"], ce: ["RT1-Admin", "RT2-Conn"] }
];

const compNomComplet = { a: "Administrer les réseaux", b: "Connecter les systèmes", c: "Programmer les applications" };