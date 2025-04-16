const areasOfInterest = [
    "técnologia",
    "direito",
    "educação",
    "saúde",
    "engenharia",
    "ciências sociais",
    "ciências exatas",
    "ciências biológicas",
    "artes",
    "humanas",
    "ciências da computação",
    "design",
    "administração",
    "economia",
    "comunicação",
    "marketing",
    "psicologia",
    "sociologia",
    "antropologia",
    "filosofia",
    "história",
    "geografia",
    "matemática",
    "física",
    "química",
    "biologia",
    "estatística",
];

const potentialMatches = [
    {
        id: 1,
        name: "João Silva",
        location: "São Paulo, SP",
        interests: ["técnologia", "ciências sociais"],
        bio: "Estudante de ciências sociais, apaixonado por tecnologia e inovação."
    },
    {
        id: 2,
        name: "Ana Beatriz Rocha",
        location: "Rio de Janeiro, RJ",
        interests: ["direito", "história"],
        bio: "Advogada especializada em direitos humanos com paixão por história."
    },
    {
        id: 3,
        name: "Carlos Eduardo Lima",
        location: "Belo Horizonte, MG",
        interests: ["engenharia", "matemática"],
        bio: "Engenheiro civil que adora resolver problemas matemáticos complexos."
    },
    {
        id: 4,
        name: "Mariana Costa",
        location: "Porto Alegre, RS",
        interests: ["saúde", "biologia"],
        bio: "Médica residente em pediatria com especial interesse em biologia molecular."
    },
    {
        id: 5,
        name: "Pedro Henrique Alves",
        location: "Salvador, BA",
        interests: ["ciências da computação", "física"],
        bio: "Desenvolvedor de software com fascínio por física quântica."
    },
    {
        id: 6,
        name: "Juliana Santos",
        location: "Brasília, DF",
        interests: ["educação", "psicologia"],
        bio: "Pedagoga pesquisando métodos de ensino baseados em psicologia cognitiva."
    },
    {
        id: 7,
        name: "Lucas Martins",
        location: "Curitiba, PR",
        interests: ["design", "artes"],
        bio: "Designer gráfico que também produz arte digital experimental."
    },
    {
        id: 8,
        name: "Fernanda Oliveira",
        location: "Recife, PE",
        interests: ["administração", "economia"],
        bio: "Executiva de negócios com MBA em economia internacional."
    },
    {
        id: 9,
        name: "Rafael Pereira",
        location: "Fortaleza, CE",
        interests: ["comunicação", "sociologia"],
        bio: "Jornalista investigativo com formação em sociologia."
    },
    {
        id: 10,
        name: "Beatriz Nunes",
        location: "Manaus, AM",
        interests: ["marketing", "estatística"],
        bio: "Especialista em marketing digital que utiliza análise estatística em campanhas."
    },
    {
        id: 11,
        name: "Gabriel Souza",
        location: "Florianópolis, SC",
        interests: ["ciências exatas", "química"],
        bio: "Pesquisador em química analítica com base sólida em ciências exatas."
    },
    {
        id: 12,
        name: "Isabela Ferreira",
        location: "Vitória, ES",
        interests: ["humanas", "filosofia"],
        bio: "Professora de filosofia com ampla formação em ciências humanas."
    },
    {
        id: 13,
        name: "Thiago Ramos",
        location: "Natal, RN",
        interests: ["antropologia", "geografia"],
        bio: "Antropólogo que realiza pesquisas de campo em comunidades isoladas."
    },
    {
        id: 14,
        name: "Camila Castro",
        location: "João Pessoa, PB",
        interests: ["ciências biológicas", "biologia"],
        bio: "Bióloga marinha apaixonada por conservação de ecossistemas."
    },
    {
        id: 15,
        name: "Rodrigo Mendes",
        location: "Campo Grande, MS",
        interests: ["técnologia", "engenharia"],
        bio: "Engenheiro de software desenvolvendo soluções inovadoras para smart cities."
    },
    {
        id: 16,
        name: "Patrícia Gomes",
        location: "Teresina, PI",
        interests: ["saúde", "psicologia"],
        bio: "Psicóloga clínica com especialização em saúde mental coletiva."
    },
    {
        id: 17,
        name: "Vinícius Torres",
        location: "Maceió, AL",
        interests: ["matemática", "física"],
        bio: "Físico teórico que utiliza matemática avançada em suas pesquisas."
    },
    {
        id: 18,
        name: "Laura Barbosa",
        location: "Aracaju, SE",
        interests: ["artes", "história"],
        bio: "Curadora de museu com especialização em história da arte."
    },
    {
        id: 19,
        name: "Felipe Cardoso",
        location: "Cuiabá, MT",
        interests: ["geografia", "sociologia"],
        bio: "Geógrafo analisando padrões sociais em áreas urbanas."
    },
    {
        id: 20,
        name: "Daniela Moreira",
        location: "Palmas, TO",
        interests: ["educação", "filosofia"],
        bio: "Filósofa que desenvolve materiais didáticos para ensino fundamental."
    }
]

export { areasOfInterest, potentialMatches };