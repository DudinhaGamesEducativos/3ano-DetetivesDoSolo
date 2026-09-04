/**
 * ==============================================================================
 * SIMULADOR DE PERMEABILIDADE DO SOLO - "DETETIVES DO SOLO"
 * ==============================================================================
 * Com Interdisciplinaridade:
 * - Ciências da Natureza: Permeabilidade, porosidade e retenção de água
 * - História: Povos caiçaras, comunidades ribeirinhas e famílias colonizadoras
 * - Geografia: Regiões do Brasil com foco no Meio-Oeste de Santa Catarina
 * - Matemática (3º ano EF / 8 anos): Multiplicação, divisão, metade/dobro e PROPORÇÃO
 * - Linguagem intuitiva dos mililitros (ml) comparados a caixinhas de suco e copos
 * ==============================================================================
 */

// ==============================================================================
// 1. BANCO DE DADOS CIENTÍFICO, INTERDISCIPLINAR E MATEMÁTICO DOS SOLOS
// ==============================================================================
const SOIL_DATABASE = [
  {
    id: "areia_praia",
    name: "Areia do Litoral (Praia dos Caiçaras)",
    category: "Solo Arenoso",
    soilFamily: "areia",
    badgeColor: "#fbc02d",
    color: "#f4d06f",
    coords: { x: 12, y: 80 },
    icon: "🏖️",
    plantsAnswer: "❌ Quase nenhuma planta! Só alguns tufinhos de capim bem resistente perto das dunas. Como os grãos de areia não seguram água nem adubo, as plantinhas comuns morreriam de sede aqui.",
    sensory: {
      tamanho: "Grãozinhos soltos e médios, parecendo açúcar cristal ou farofa.",
      cor: "Amarelinha bem clara, da cor de casca de banana madura ou biscoito maria.",
      odor: "Tem cheirinho gostoso de brisa salgadinha do mar e de dia de sol.",
      aparencia: "Muito solta! Quando você pega na mão e abre os dedos, ela escorrega todinha sem grudar."
    },
    geography: {
      regiao: "Região Sul e Sudeste (Litoral do Brasil)",
      detalhes: "Faixa litorânea de praias banhadas pelo Oceano Atlântico, com clima quente e úmido e muito vento."
    },
    historySociety: "No litoral do Brasil vivem os <strong>povos caiçaras</strong>, que são comunidades tradicionais de pescadores artesanais. Há milhares de anos, povos indígenas antigos viviam nessas praias e formavam os <em>sambaquis</em> (montanhas de conchas e restos de peixes). A areia não serve para plantar alface ou milho, mas os caiçaras usam as restingas e o mar para buscar peixes frescos e o sustento de suas famílias!",
    mathChallenge: {
      concept: "Multiplicação & Proporção (O Triplo!)",
      question: "🎣 Um pescador caiçara pegou 3 redes de pesca. Em cada rede havia 6 peixes. Quantos peixes ele pescou ao todo?",
      options: [12, 18, 24],
      correctIndex: 1, // 18
      explanation: "🎉 Muito bem! Se 1 rede tem 6 peixes, 3 redes têm o triplo: 3 × 6 = 18 peixes fresquinhos!"
    },
    flowSpeed: 3.5,
    filteredMl: 185,
    retainedMl: 15,
    permeability: "Altíssima (Drenagem Muito Rápida)",
    proportionText: "Proporção de 9 para 1: de cada 10 ml de água, 9 ml descem correndo!",
    observation: "A água passou como um raio pelos espaços grandes entre os grãos de areia! Quase os 200 ml (a caixinha de suco inteira!) caíram no copo inferior."
  },
  {
    id: "terra_sc_oeste",
    name: "Terra Fértil do Meio-Oeste de Santa Catarina",
    category: "Solo Humífero / Argilo-Arenoso",
    soilFamily: "terra_escura",
    badgeColor: "#2e7d32",
    color: "#422817",
    coords: { x: 80, y: 22 },
    icon: "🌽",
    plantsAnswer: "✅ Sim! Muitas plantas viçosas! Pés de milho altos, lavouras de soja verdinhas e parreiras carregadas de uva. Essa terra é cheia de comida boa para as raízes.",
    sensory: {
      tamanho: "Pedacinhos macios e fofinhos, parecendo farelo de bolo de chocolate.",
      cor: "Marrom bem escuro, quase preta, da cor de chocolate amargo.",
      odor: "Cheiro delicioso de mato vivo e terra fresca de horta!",
      aparencia: "Fofinha e macia como algodão. Se você apertar na mão, ela vira um bolinho que desmancha fácil."
    },
    geography: {
      regiao: "Região Sul (Meio-Oeste de Santa Catarina)",
      detalhes: "Região de morros e planaltos com cidades como Chapecó, Joaçaba, Concórdia e Videira. O inverno é bem frio e às vezes tem geada branquinha no chão!"
    },
    historySociety: "Essa terra é o grande coração da agricultura de Santa Catarina! Famílias de <strong>colonizadores imigrantes</strong> (como italianos e alemães) e caboclos trabalharam duro na terra. Eles descobriram que esse solo escuro é excelente para plantar <strong>milho e soja</strong>, que servem de alimento para a famosa pecuária da região: criação de <strong>porcos (suínos)</strong>, <strong>frangos</strong> e <strong>gado de leite</strong>! Além disso, a terra produz <strong>uvas doces</strong> para sucos e vinhos coloniais deliciosos.",
    mathChallenge: {
      concept: "Proporção & Multiplicação (Arranjo em Fileiras)",
      question: "🌽 O agricultor de Joaçaba plantou 4 fileiras de milho. Em cada fileira há 5 pés de milho. Quantos pés de milho ele plantou?",
      options: [15, 20, 25],
      correctIndex: 1, // 20
      explanation: "🎉 Acertou em cheio! 4 fileiras com 5 pés em cada formam: 4 × 5 = 20 pés de milho!"
    },
    flowSpeed: 6.5,
    filteredMl: 105,
    retainedMl: 95,
    permeability: "Média Equilibrada (Perfeita para Plantas)",
    proportionText: "Proporção de Metade e Metade (1 para 1): guarda 100 ml e deixa passar 100 ml!",
    observation: "A água desceu no ritmo ideal! Guardou quase a metade exata de 1 copo (cerca de 100 ml) para as plantinhas e deixou a outra metade passar limpa."
  },
  {
    id: "argila_vermelha",
    name: "Argila Vermelha de Barranco (Oeste de SC)",
    category: "Solo Argiloso",
    soilFamily: "argila",
    badgeColor: "#d84315",
    color: "#b72f1b",
    coords: { x: 84, y: 76 },
    icon: "🧱",
    plantsAnswer: "❌ Não havia plantas no barranco! A argila é dura como uma pedra quando está seca no sol e fica grudada sem espaço de ar quando molha. As plantinhas comuns não conseguem esticar suas raízes nela.",
    sensory: {
      tamanho: "Grãos microscópicos, tão pequenininhos que parecem um pó vermelho ou amido.",
      cor: "Vermelho-tijolo forte, parecendo colorau ou páprica de cozinhar.",
      odor: "Cheiro forte de barro molhado e pedra antiga.",
      aparencia: "Parece massinha de modelar! Quando molhada, gruda na bota de um jeito que é difícil de tirar."
    },
    geography: {
      regiao: "Região Sul e Sudeste (Cortes de Estradas e Morros)",
      detalhes: "Muito comum nos barrancos de Santa Catarina e Paraná. Solos pesados que protegem encostas de deslizamentos quando têm mata."
    },
    historySociety: "A terra vermelha e argilosa foi essencial para os <strong>colonizadores e povos originários</strong>! Como a argila fica durinha quando seca ou queima no forno, eles a usavam para moldar tijolos maciços, telhas para cobrir as casas de madeira e panelas de barro para cozinhar comida quentinha no fogão a lenha.",
    mathChallenge: {
      concept: "Divisão & Partilha Justa (Repartir em partes iguais)",
      question: "🧱 Um oleiro moldou 12 tijolos de barro e quer colocar igualmente em 3 caixas. Quantos tijolos vão em cada caixa?",
      options: [4, 6, 8],
      correctIndex: 0, // 4
      explanation: "🎉 Excelente raciocínio! 12 tijolos divididos em 3 caixas dão: 12 ÷ 3 = 4 tijolos em cada caixa!"
    },
    flowSpeed: 13.0,
    filteredMl: 25,
    retainedMl: 175,
    permeability: "Baixíssima (Quase Impermeável)",
    proportionText: "Proporção Invertida: o barro segura quase 8 partes de cada 8 partes de água!",
    observation: "A água formou uma poça no topo! De 200 ml, desceu apenas um dedinho (25 ml). A argila segurou quase a caixinha de água todinha."
  },
  {
    id: "vaso_lavanda",
    name: "Vaso de Flores com Lavanda Perfumada",
    category: "Substrato Enriquecido Leve",
    soilFamily: "terra_escura",
    badgeColor: "#7e57c2",
    color: "#4e342e",
    coords: { x: 88, y: 44 },
    icon: "🪻",
    plantsAnswer: "✅ Sim! Um arbusto lindo de lavanda com flores roxinhas muito cheirosas que atraem borboletas e abelhas alegres.",
    sensory: {
      tamanho: "Mistura fofinha de pedacinhos de casquinhas de madeira e terra escura.",
      cor: "Marrom café com pontinhos claros de pedrinhas respiráveis.",
      odor: "Um perfume relaxante e suave de flor misturado com terra limpa, lembrando sabonete cheiroso!",
      aparencia: "Muito leve e soltinha, parece algodão com farelo de bolo."
    },
    geography: {
      regiao: "Região Sul (Serras e Jardins Catarinenses)",
      detalhes: "A lavanda ama o clima fresco das cidades altas de Santa Catarina, como Fraiburgo, Lages e São Joaquim."
    },
    historySociety: "As flores de lavanda foram trazidas pelos <strong>imigrantes europeus</strong> que vieram morar no Sul. As mães e avós colhiam as flores de lavanda, secavam no sol e colocavam em saquinhos de pano dentro das gavetas de roupas para deixar um cheirinho gostoso e acalmar o soninho das crianças!",
    mathChallenge: {
      concept: "Proporção & Multiplicação",
      question: "🪻 Se cada vasinho de lavanda tem 4 flores roxinhas, quantas flores teremos em 5 vasinhos iguais?",
      options: [16, 20, 25],
      correctIndex: 1, // 20
      explanation: "🎉 Isso aí! 5 vasinhos com 4 flores cada: 5 × 4 = 20 flores perfumadas!"
    },
    flowSpeed: 5.5,
    filteredMl: 110,
    retainedMl: 90,
    permeability: "Boa Permeabilidade",
    proportionText: "Proporção equilibrada: deixa a terra úmida sem encharcar as raízes.",
    observation: "A água passou sem afogar a raiz da lavanda, filtrando cerca de metade do copo."
  },
  {
    id: "terra_chuva",
    name: "Terra Úmida de Chuva Recente",
    category: "Solo Humífero Fresco",
    soilFamily: "terra_escura",
    badgeColor: "#0288d1",
    color: "#372418",
    coords: { x: 50, y: 16 },
    icon: "🌧️",
    plantsAnswer: "✅ Sim! Gramado verdinho e flores silvestres cheias de gotinhas brilhando como diamantes nas folhas.",
    sensory: {
      tamanho: "Grãozinhos macios coladinhos pela umidade fresca da água.",
      cor: "Marrom bem escuro, parecendo achocolatado molhado com leite.",
      odor: "Aquele famoso cheirinho inconfundível de 'chuva na terra' (petricor)!",
      aparencia: "Úmida e friazinha ao toque, uma delícia de amassar com os dedos."
    },
    geography: {
      regiao: "Região Sul (Clima Subtropical Chuvoso)",
      detalhes: "Em Santa Catarina, as chuvas são bem distribuídas o ano todo, mantendo os rios cheios e a terra sempre fresca."
    },
    historySociety: "A água da chuva era muito comemorada pelas <strong>famílias de agricultores e colonizadores</strong>! Eles guardavam a água pura que caía do telhado em cisternas para beber, cozinhar e regar as hortas familiares onde produziam verduras sem agrotóxicos.",
    mathChallenge: {
      concept: "Proporção da Metade (Divisão por 2)",
      question: "🌧️ Uma caixinha de suco tem 200 ml. Se você beber a metade agora, quantos ml sobraram para depois?",
      options: [50, 100, 150],
      correctIndex: 1, // 100
      explanation: "🎉 Perfeito! A metade de 200 ml é 200 ÷ 2 = 100 ml (exatamente meio copo d'água)!"
    },
    flowSpeed: 6.8,
    filteredMl: 100,
    retainedMl: 100,
    permeability: "Equilibrada (Excelente Retenção)",
    proportionText: "Proporção exata de 50% e 50% (metade guardada e metade filtrada).",
    observation: "Equilíbrio absoluto: reteve exatamente 100 ml e liberou 100 ml de água limpa."
  },
  {
    id: "terra_laranjeira",
    name: "Terra Adubada embaixo de Laranjeira",
    category: "Solo com Adubo Orgânico",
    soilFamily: "terra_escura",
    badgeColor: "#f57c00",
    color: "#271b12",
    coords: { x: 64, y: 36 },
    icon: "🍊",
    plantsAnswer: "✅ Sim! Uma laranjeira enorme e cheia de folhas, com várias laranjas docinhas e amarelas penduradas nos galhos.",
    sensory: {
      tamanho: "Pedaços macios de folhas decompostas e casquinhas de frutas.",
      cor: "Pretinha como carvão apagado ou terra de mata fechada.",
      odor: "Cheirinho de terra enriquecida com uma lembrança cítrica de folha de laranjeira amassada.",
      aparencia: "Super fofa, parecendo uma esponja preta esfarelada cheia de pequenos nutrientes."
    },
    geography: {
      regiao: "Região Sul e Sudeste (Pomares Familiares)",
      detalhes: "Pomares de frutas cítricas espalhados pelas chácaras e sítios do interior de Santa Catarina e São Paulo."
    },
    historySociety: "Os <strong>colonizadores do Meio-Oeste</strong> não jogavam restos de comida no lixo! Eles faziam a <em>compostagem caseira</em>: cascas de mandioca, restos de frutas e esterco das criações de porcos e gado eram colocados embaixo das árvores para virar adubo natural. Essa terra escura é super fértil e cheia de energia!",
    mathChallenge: {
      concept: "Divisão & Repartição Igualitária",
      question: "🍊 A laranjeira deu 15 laranjas docinhas. Se a vovó dividir igualmente entre seus 3 netinhos, quantas laranjas cada um ganha?",
      options: [4, 5, 6],
      correctIndex: 1, // 5
      explanation: "🎉 Certinho! 15 laranjas divididas por 3 crianças: 15 ÷ 3 = 5 laranjas para cada uma saborear!"
    },
    flowSpeed: 7.2,
    filteredMl: 85,
    retainedMl: 115,
    permeability: "Média (Grande Reserva de Água)",
    proportionText: "Proporção de esponja: retém mais da metade do copo para as raízes.",
    observation: "A matéria orgânica reteve mais da metade da caixinha de água (115 ml), garantindo hidratação no calor."
  },
  {
    id: "varzea_ribeirinha",
    name: "Solo de Várzea do Rio (Povos Ribeirinhos)",
    category: "Solo Aluvial / Silte e Argila",
    soilFamily: "terra_escura",
    badgeColor: "#00796b",
    color: "#3e2723",
    coords: { x: 30, y: 84 },
    icon: "🛶",
    plantsAnswer: "✅ Sim! Capins altos de brejo, taboas e plantas aquáticas que adoram ter as raízes mergulhadas na lama fresca.",
    sensory: {
      tamanho: "Mistura fina de silte do rio com argila suave.",
      cor: "Marrom acinzentada, como doce de leite escuro.",
      odor: "Cheiro característico de água de rio doce com pedras e musgos verdes.",
      aparencia: "Parece um creme ou mingau molhado quando perto da margem."
    },
    geography: {
      regiao: "Região Norte (Amazônia) e Bacias dos Rios do Sul/Centro-Oeste",
      detalhes: "Margens dos grandes rios como o Rio Uruguai (em SC) e o Rio Amazonas (no Norte)."
    },
    historySociety: "Nas margens dos rios vivem as <strong>comunidades ribeirinhas</strong>! Eles constroem casas de madeira erguidas sobre estacas altas (chamadas <em>palafitas</em>) para não inundar quando o rio sobe. As crianças usam pequenos barcos e canoas para ir à escola. Quando o rio enche e depois recua, ele deixa nas margens essa terra fértil cheia de nutrientes onde os ribeirinhos plantam mandioca, feijão e milho!",
    mathChallenge: {
      concept: "Divisão & Medida",
      question: "🛶 Os ribeirinhos têm 20 sacos de milho para transportar em 4 canoas iguais. Quantos sacos cada canoa vai levar?",
      options: [4, 5, 6],
      correctIndex: 1, // 5
      explanation: "🎉 Isso aí! 20 sacos divididos em 4 canoas dão: 20 ÷ 4 = 5 sacos por canoa, equilibrando o peso!"
    },
    flowSpeed: 8.5,
    filteredMl: 60,
    retainedMl: 140,
    permeability: "Baixa a Média",
    proportionText: "Proporção de 3 para 1: de cada 4 partes de água, 3 ficam retidas.",
    observation: "Drenou devagar e guardou 140 ml (mais de meio copo d'água) na sua estrutura aluvial."
  },
  {
    id: "barro_olaria",
    name: "Barro de Olaria Artesanal",
    category: "Argila Pura Plástica",
    soilFamily: "argila",
    badgeColor: "#b71c1c",
    color: "#a8321d",
    coords: { x: 74, y: 86 },
    icon: "🏺",
    plantsAnswer: "❌ Nenhuma planta! Esse barro puro é extraído bem no fundo do chão, onde a luz do sol e as sementes não chegam.",
    sensory: {
      tamanho: "Partículas tão finas que não dá para enxergar separadas, formam uma pasta lisa.",
      cor: "Vermelho escuro brilhante quando molhado.",
      odor: "Cheiro marcante de vaso de cerâmica novo ou filtro de barro da vovó.",
      aparencia: "Parece massa de brigadeiro que não desgruda da colher! Super maleável para fazer bichinhos e potes."
    },
    geography: {
      regiao: "Regiões Sul, Sudeste e Nordeste",
      detalhes: "Olaria tradicional presente em cidades históricas de todo o país."
    },
    historySociety: "Antes de existirem geladeiras e canos de plástico, os brasileiros usavam <strong>filtros de barro e moringas</strong> feitos com essa argila para manter a água sempre fresquinha e purificada! Essa arte foi ensinada pelos povos indígenas aos primeiros colonizadores e permanece viva até hoje.",
    mathChallenge: {
      concept: "Multiplicação & Proporção (O Quádruplo)",
      question: "🏺 Um artesão faz 4 panelas de barro em 1 dia. Quantas panelas ele fará em 4 dias trabalhando no mesmo ritmo?",
      options: [12, 16, 20],
      correctIndex: 1, // 16
      explanation: "🎉 Muito bom! 4 dias fazendo 4 panelas cada dia: 4 × 4 = 16 panelas de barro!"
    },
    flowSpeed: 14.0,
    filteredMl: 20,
    retainedMl: 180,
    permeability: "Mínima / Impermeável",
    proportionText: "Proporção quase total: segura 180 ml de 200 ml!",
    observation: "A água empoçou no topo do barro! Quase a caixinha de suco inteira de água (180 ml) ficou presa."
  },
  {
    id: "areia_duna",
    name: "Areia Fina de Duna (Joaquina / Florianópolis)",
    category: "Solo Arenoso Fino",
    soilFamily: "areia",
    badgeColor: "#ffb300",
    color: "#f8e192",
    coords: { x: 14, y: 55 },
    icon: "💨",
    plantsAnswer: "❌ Não havia plantas! O vento forte sopra a areia e muda as dunas de lugar o tempo todo, então as sementinhas não conseguem se prender.",
    sensory: {
      tamanho: "Grãos arredondados e soltinhos polidos pelo vento constante.",
      cor: "Branco-amarelado bem clarinho, como areia de praia fofa.",
      odor: "Cheirinho de ar quente de praia sem cheiro de terra.",
      aparencia: "Escorrega como pó dentro de uma ampulheta mágica do tempo!"
    },
    geography: {
      regiao: "Região Sul (Litoral de Santa Catarina)",
      detalhes: "Grandes dunas de areia como as da Praia da Joaquina e dos Ingleses em Florianópolis."
    },
    historySociety: "As dunas de Santa Catarina foram moldadas pelos ventos ao longo de milhares de anos. Antigamente, os <strong>vigias caiçaras</strong> subiam no topo das dunas mais altas para avistar quando os grandes cardumes de peixes (como a tainha) se aproximavam da praia no inverno!",
    mathChallenge: {
      concept: "Multiplicação Simples",
      question: "💨 Três amigos foram brincar na duna. Cada um encontrou 4 conchinhas. Quantas conchinhas acharam no total?",
      options: [9, 12, 15],
      correctIndex: 1, // 12
      explanation: "🎉 Acertou! 3 amigos com 4 conchinhas cada: 3 × 4 = 12 conchinhas da praia!"
    },
    flowSpeed: 3.8,
    filteredMl: 180,
    retainedMl: 20,
    permeability: "Altíssima",
    proportionText: "Proporção rápida: escorre quase 90% da água despejada.",
    observation: "A água passou velozmente, restando apenas um fundinho úmido na areia."
  },
  {
    id: "argila_cinzenta",
    name: "Argila Cinzenta de Brejo",
    category: "Solo Argiloso Fino",
    soilFamily: "argila",
    badgeColor: "#546e7a",
    color: "#607d8b",
    coords: { x: 18, y: 22 },
    icon: "🩶",
    plantsAnswer: "❌ Quase nada onde o barro está exposto, apenas pequenas algas verdes escorregadias.",
    sensory: {
      tamanho: "Super fina e grudenta como graxa vegetal.",
      cor: "Cinza escura como chumbo ou cimento molhado.",
      odor: "Cheiro de pântano e água parada.",
      aparencia: "Muito escorregadia! Se pisar sem bota, o pé desliza como no sabão."
    },
    geography: {
      regiao: "Regiões Sul e Sudeste",
      detalhes: "Áreas baixas de várzeas e fundos de vales entre as serras."
    },
    historySociety: "A argila cinzenta é rica em minerais e já foi usada no passado para impermeabilizar o fundo de açudes e represas para criar peixes como carpas e tilápias no interior do Sul.",
    mathChallenge: {
      concept: "Divisão & Metade",
      question: "🐟 No açude havia 16 peixinhos. A metade deles eram carpas coloridas. Quantas carpas havia?",
      options: [6, 8, 10],
      correctIndex: 1, // 8
      explanation: "🎉 Excelente! A metade de 16 peixes é 16 ÷ 2 = 8 carpas nadando felizes!"
    },
    flowSpeed: 12.5,
    filteredMl: 30,
    retainedMl: 170,
    permeability: "Muito Baixa",
    proportionText: "Proporção impermeável: retém mais de 85% do copo.",
    observation: "Funcionou como uma vedação natural, segurando quase toda a água no topo."
  },
  {
    id: "areia_riacho",
    name: "Areia com Cascalho de Riacho do Interior",
    category: "Solo Arenoso-Pedregoso",
    soilFamily: "areia",
    badgeColor: "#8d6e63",
    color: "#d7ccc8",
    coords: { x: 26, y: 44 },
    icon: "🪨",
    plantsAnswer: "❌ Não há plantas no meio das pedrinhas da correnteza, pois a força da água arrasta qualquer brotinho.",
    sensory: {
      tamanho: "Mistura de pedrinhas roladas lisinhas e areia grossa.",
      cor: "Cores variadas: cinza, branco, bege e marrom.",
      odor: "Cheiro gostoso e refrescante de cachoeira e água limpa da serra.",
      aparencia: "Parece cascalho de fundo de aquário com peixinhos coloridos."
    },
    geography: {
      regiao: "Região Sul (Meio-Oeste e Planalto Serrano de SC)",
      detalhes: "Riachos límpidos que descem das encostas da Serra Geral em Santa Catarina."
    },
    historySociety: "Os primeiros <strong>tropeiros e colonizadores</strong> paravam com seus cavalos e mulas nesses riachos de pedras e areia para descansar, beber água pura e acampar sob as araucárias antes de seguir viagem com as cargas de alimentos.",
    mathChallenge: {
      concept: "Proporção & Multiplicação",
      question: "🪨 Um tropeiro levava 2 mulas cargueiras. Cada mula levava 5 sacos de farinha. Quantos sacos levavam juntas?",
      options: [8, 10, 12],
      correctIndex: 1, // 10
      explanation: "🎉 Isso aí! 2 mulas vezes 5 sacos: 2 × 5 = 10 sacos de alimento no lombo dos animais!"
    },
    flowSpeed: 2.8,
    filteredMl: 190,
    retainedMl: 10,
    permeability: "Altíssima (Drenagem Instantânea)",
    proportionText: "Drenagem quase total: 19 de cada 20 partes descem na hora.",
    observation: "A água escorreu quase instantaneamente pelas frestas das pedras."
  },
  {
    id: "terra_roxa_colono",
    name: "Terra Roxa Tradicional dos Colonizadores",
    category: "Latossolo Vermelho Fértil",
    soilFamily: "terra_escura",
    badgeColor: "#4e342e",
    color: "#5c241a",
    coords: { x: 42, y: 68 },
    icon: "🌾",
    plantsAnswer: "✅ Sim! Muitas plantações viçosas de trigo, soja e milho. As sementes encontram aqui os melhores minerais da natureza.",
    sensory: {
      tamanho: "Grânulos pequenos e redondinhos, que os colonos chamavam carinhosamente de 'grãos de café'.",
      cor: "Apesar de se chamar 'roxa', ela é um vermelho-escuro profundo (do italiano 'rossa').",
      odor: "Cheiro agradável de terra pura e arado novo.",
      aparencia: "Muito fértil e solta, não empedra facilmente como a argila comum."
    },
    geography: {
      regiao: "Regiões Sul e Sudeste (Paraná, Santa Catarina e São Paulo)",
      detalhes: "Originada da decomposição de lavas de antigos vulcões que existiram no Brasil há milhões de anos!"
    },
    historySociety: "Quando os imigrantes italianos chegaram ao Brasil, eles olhavam para essa terra avermelhada e diziam: <em>'Terra Rossa!'</em> (Terra Vermelha em italiano). Os brasileiros entenderam 'Terra Roxa' e o nome pegou! Essa terra atraiu milhares de famílias de <strong>colonizadores</strong> porque tudo o que se planta nela cresce forte e alimenta cidades inteiras!",
    mathChallenge: {
      concept: "Proporção & Dobro",
      question: "🌾 Um saco de sementes planta 1 canteiro de trigo. Para plantar o dobro (2 canteiros), de quantos sacos precisaremos?",
      options: [2, 3, 4],
      correctIndex: 0, // 2
      explanation: "🎉 Certíssimo! O dobro de 1 saco é 2 × 1 = 2 sacos de sementes! Proporção direta!"
    },
    flowSpeed: 6.2,
    filteredMl: 102,
    retainedMl: 98,
    permeability: "Média Equilibrada (Perfeição Agrícola)",
    proportionText: "Proporção perfeita de 1 para 1 (metade retida / metade filtrada).",
    observation: "Guardou cerca de 100 ml (metade do copo) e filtrou a outra metade perfeitamente limpa."
  }
];

// ==============================================================================
// 2. OS 3 SOLOS EXCLUSIVOS DO EXPERIMENTO 2 (FASE 2) COM PROPORÇÃO E "MLS"
// ==============================================================================
const PHASE2_CANONICAL_SOILS = [
  {
    stationIndex: 0,
    name: "Areia",
    category: "Solo Arenoso",
    icon: "🏖️",
    badgeColor: "#fbc02d",
    color: "#f4d06f",
    flowSpeed: 3.5,
    filteredMl: 185,
    retainedMl: 15,
    permeability: "Altíssima",
    tintWater: false,
    proportionPhrase: "⚡ Quase o copo inteiro desceu! (Proporção de 9 para 1: 185 ml filtrados e só 15 ml retidos)",
    observation: "A água passou correndo pelos espaços grandes da areia! Quase todo o copo de 200 ml escorreu para baixo. A areia quase não retém umidade."
  },
  {
    stationIndex: 1,
    name: "Terra Escura de Jardim",
    category: "Solo Humífero",
    icon: "🌱",
    badgeColor: "#2e7d32",
    color: "#422817",
    flowSpeed: 6.5,
    filteredMl: 105,
    retainedMl: 95,
    permeability: "Média (Equilibrada)",
    tintWater: true,
    proportionPhrase: "⭐ Proporção de Metade e Metade (1 para 1): reteve cerca de 100 ml (metade da caixinha de suco) para as plantas!",
    observation: "A água infiltrou no ritmo perfeito! O solo absorveu a metade exata da água (cerca de 100 ml) como uma esponja fresca e deixou a outra metade passar."
  },
  {
    stationIndex: 2,
    name: "Argila",
    category: "Solo Argiloso",
    icon: "🧱",
    badgeColor: "#d84315",
    color: "#b72f1b",
    flowSpeed: 13.0,
    filteredMl: 25,
    retainedMl: 175,
    permeability: "Baixíssima (Quase Impermeável)",
    tintWater: true,
    proportionPhrase: "🔒 Proporção Invertida: quase toda a água (175 ml) ficou presa no barro, descendo só um dedinho no fundo (25 ml)!",
    observation: "A água empoçou no funil! As partículas finas da argila selaram a passagem. Ela segurou quase todo o copo de água, causando barro grudento."
  }
];

// ==============================================================================
// 3. SISTEMA DE ÁUDIO SINTETIZADO (WEB AUDIO API)
// ==============================================================================
class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.06);
  }

  playStep() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, this.audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(80, this.audioCtx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.04);
  }

  playCollect() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const startTime = this.audioCtx.currentTime + idx * 0.08;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.25);
    });
  }

  playPour() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    const bufferSize = this.audioCtx.sampleRate * 0.6;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.2;
    }
    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.audioCtx.currentTime);
    filter.frequency.linearRampToValueAtTime(1000, this.audioCtx.currentTime + 0.3);
    filter.frequency.linearRampToValueAtTime(300, this.audioCtx.currentTime + 0.6);
    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.6);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioCtx.destination);
    noise.start();
  }

  playDrip() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    const pitch = 1400 + Math.random() * 300;
    osc.frequency.setValueAtTime(pitch, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, this.audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.08);
  }

  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.audioCtx) return;
    const chords = [
      { notes: [440, 554, 659], time: 0, dur: 0.2 },
      { notes: [440, 554, 659], time: 0.22, dur: 0.2 },
      { notes: [523, 659, 783], time: 0.44, dur: 0.2 },
      { notes: [587, 739, 880], time: 0.68, dur: 0.6 }
    ];
    chords.forEach(c => {
      c.notes.forEach(freq => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const startTime = this.audioCtx.currentTime + c.time;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + c.dur);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + c.dur);
      });
    });
  }
}

const sounds = new SoundManager();

// ==============================================================================
// 4. ESTADO GLOBAL DA APLICAÇÃO
// ==============================================================================
const AppState = {
  currentScreen: "character_select",
  character: "leo",
  playerPos: { x: 50, y: 50 },
  inventory: [],
  collectedSoilIds: new Set(),
  currentInspectingSoil: null,
  activeFilterSimulations: new Map(),
  completedStationsCount: 0,
  mathAnsweredMap: new Map() // soilId -> boolean (se já acertou o desafio)
};

// ==============================================================================
// 5. ELEMENTOS VETORIAIS (SVG) DOS AVATARES
// ==============================================================================
const AVATAR_SVGS = {
  leo: `
    <svg viewBox="0 0 100 120" width="100%" height="100%">
      <ellipse cx="50" cy="114" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
      <rect x="36" y="78" width="10" height="28" rx="5" fill="#8d6e63"/>
      <rect x="54" y="78" width="10" height="28" rx="5" fill="#8d6e63"/>
      <ellipse cx="40" cy="106" rx="7" ry="5" fill="#4e342e"/>
      <ellipse cx="60" cy="106" rx="7" ry="5" fill="#4e342e"/>
      <rect x="32" y="44" width="36" height="36" rx="8" fill="#2e7d32"/>
      <polygon points="44,44 56,44 50,60" fill="#fbc02d"/>
      <rect x="36" y="58" width="8" height="10" rx="2" fill="#1b5e20"/>
      <rect x="56" y="58" width="8" height="10" rx="2" fill="#1b5e20"/>
      <rect x="24" y="48" width="8" height="24" rx="4" fill="#2e7d32"/>
      <rect x="68" y="48" width="8" height="24" rx="4" fill="#2e7d32"/>
      <circle cx="28" cy="74" r="5" fill="#ffcc80"/>
      <circle cx="72" cy="74" r="5" fill="#ffcc80"/>
      <ellipse cx="50" cy="30" rx="18" ry="20" fill="#ffcc80"/>
      <circle cx="43" cy="28" r="3" fill="#212121"/>
      <circle cx="57" cy="28" r="3" fill="#212121"/>
      <circle cx="44" cy="27" r="1" fill="#ffffff"/>
      <circle cx="58" cy="27" r="1" fill="#ffffff"/>
      <path d="M 44 38 Q 50 44 56 38" stroke="#d84315" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 32 26 Q 32 14 50 14 Q 68 14 68 26 Q 60 22 50 24 Q 40 22 32 26 Z" fill="#5d4037"/>
      <ellipse cx="50" cy="15" rx="22" ry="7" fill="#689f38"/>
      <path d="M 36 15 Q 50 2 64 15 Z" fill="#558b2f"/>
      <path d="M 40 16 Q 50 22 68 18" stroke="#33691e" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="75" cy="80" r="7" fill="none" stroke="#fbc02d" stroke-width="2.5"/>
      <line x1="72" y1="84" x2="68" y2="92" stroke="#8d6e63" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,
  bia: `
    <svg viewBox="0 0 100 120" width="100%" height="100%">
      <ellipse cx="50" cy="114" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
      <rect x="36" y="78" width="10" height="28" rx="5" fill="#33691e"/>
      <rect x="54" y="78" width="10" height="28" rx="5" fill="#33691e"/>
      <ellipse cx="40" cy="106" rx="7" ry="5" fill="#5d4037"/>
      <ellipse cx="60" cy="106" rx="7" ry="5" fill="#5d4037"/>
      <rect x="32" y="44" width="36" height="36" rx="8" fill="#f57c00"/>
      <polygon points="44,44 56,44 50,60" fill="#ffffff"/>
      <rect x="36" y="58" width="8" height="10" rx="2" fill="#e65100"/>
      <rect x="56" y="58" width="8" height="10" rx="2" fill="#e65100"/>
      <rect x="24" y="48" width="8" height="24" rx="4" fill="#f57c00"/>
      <rect x="68" y="48" width="8" height="24" rx="4" fill="#f57c00"/>
      <circle cx="28" cy="74" r="5" fill="#ffe0b2"/>
      <circle cx="72" cy="74" r="5" fill="#ffe0b2"/>
      <circle cx="26" cy="38" r="8" fill="#422213"/>
      <circle cx="74" cy="38" r="8" fill="#422213"/>
      <ellipse cx="24" cy="50" rx="6" ry="12" fill="#422213"/>
      <ellipse cx="76" cy="50" rx="6" ry="12" fill="#422213"/>
      <ellipse cx="50" cy="30" rx="18" ry="20" fill="#ffe0b2"/>
      <circle cx="43" cy="28" r="3.2" fill="#2e7d32"/>
      <circle cx="57" cy="28" r="3.2" fill="#2e7d32"/>
      <circle cx="44" cy="27" r="1.2" fill="#ffffff"/>
      <circle cx="58" cy="27" r="1.2" fill="#ffffff"/>
      <path d="M 44 38 Q 50 44 56 38" stroke="#d84315" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="50" cy="14" rx="22" ry="7" fill="#fbc02d"/>
      <path d="M 36 14 Q 50 0 64 14 Z" fill="#f9a825"/>
      <circle cx="60" cy="14" r="4" fill="#d84315"/>
      <rect x="20" y="70" width="12" height="16" rx="2" fill="#8d6e63"/>
      <rect x="22" y="73" width="8" height="10" fill="#ffffff"/>
    </svg>
  `
};

// ==============================================================================
// 6. INICIALIZAÇÃO
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderCharacterSelection();
  renderMapDecorations();
  renderCollectionPoints();
  updateInventoryHUD();
});

function setupEventListeners() {
  const btnMute = document.getElementById("btn-toggle-sound");
  if (btnMute) {
    btnMute.addEventListener("click", () => {
      const muted = sounds.toggleMute();
      btnMute.textContent = muted ? "🔇" : "🔊";
      btnMute.title = muted ? "Ativar Efeitos Sonoros" : "Desativar Som";
    });
  }

  document.getElementById("btn-start-adventure")?.addEventListener("click", () => {
    sounds.playClick();
    transitionToPhase1();
  });

  document.getElementById("btn-start-experiment")?.addEventListener("click", () => {
    if (AppState.inventory.length === 3) {
      sounds.playClick();
      transitionToPhase2();
    }
  });

  const btnCloseModal = document.getElementById("btn-close-modal");
  const modalBackdrop = document.getElementById("modal-soil-inspect");
  if (btnCloseModal && modalBackdrop) {
    btnCloseModal.addEventListener("click", () => closeInspectModal());
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeInspectModal();
    });
  }

  document.getElementById("btn-collect-sample")?.addEventListener("click", () => {
    handleCollectCurrentSample();
  });

  const mapContainer = document.getElementById("map-container");
  if (mapContainer) {
    mapContainer.addEventListener("click", (e) => {
      if (e.target.closest(".collection-point")) return;

      const rect = mapContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const pctX = Math.max(5, Math.min(95, (clickX / rect.width) * 100));
      const pctY = Math.max(10, Math.min(95, (clickY / rect.height) * 100));

      spawnClickIndicator(mapContainer, clickX, clickY);
      movePlayerTo(pctX, pctY);
    });
  }

  window.addEventListener("keydown", (e) => {
    if (AppState.currentScreen !== "phase_1") return;
    if (document.getElementById("modal-soil-inspect")?.classList.contains("open")) return;

    const step = 4;
    let newX = AppState.playerPos.x;
    let newY = AppState.playerPos.y;

    if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") newY = Math.max(10, newY - step);
    else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") newY = Math.min(95, newY + step);
    else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") newX = Math.max(5, newX - step);
    else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") newX = Math.min(95, newX + step);
    else return;

    e.preventDefault();
    movePlayerTo(newX, newY);
  });

  document.querySelectorAll(".dpad-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dir = btn.dataset.dir;
      const step = 6;
      let newX = AppState.playerPos.x;
      let newY = AppState.playerPos.y;

      if (dir === "up") newY = Math.max(10, newY - step);
      if (dir === "down") newY = Math.min(95, newY + step);
      if (dir === "left") newX = Math.max(5, newX - step);
      if (dir === "right") newX = Math.min(95, newX + step);

      movePlayerTo(newX, newY);
    });
  });

  document.getElementById("btn-restart-simulation")?.addEventListener("click", () => resetGameToBeginning());
  document.getElementById("btn-open-report")?.addEventListener("click", () => openConclusionModal());
  document.getElementById("btn-test-all")?.addEventListener("click", () => testAllFiltersSimultaneously());
  document.getElementById("btn-close-conclusion")?.addEventListener("click", () => {
    document.getElementById("modal-conclusion")?.classList.remove("open");
  });
}

// ==============================================================================
// 7. SELEÇÃO DE PERSONAGEM
// ==============================================================================
function renderCharacterSelection() {
  const previewLeo = document.getElementById("preview-leo");
  const previewBia = document.getElementById("preview-bia");

  if (previewLeo) previewLeo.innerHTML = AVATAR_SVGS.leo;
  if (previewBia) previewBia.innerHTML = AVATAR_SVGS.bia;

  const cardLeo = document.getElementById("card-avatar-leo");
  const cardBia = document.getElementById("card-avatar-bia");

  if (cardLeo && cardBia) {
    cardLeo.addEventListener("click", () => {
      sounds.playClick();
      AppState.character = "leo";
      cardLeo.classList.add("selected");
      cardBia.classList.remove("selected");
    });

    cardBia.addEventListener("click", () => {
      sounds.playClick();
      AppState.character = "bia";
      cardBia.classList.add("selected");
      cardLeo.classList.remove("selected");
    });
  }
}

// ==============================================================================
// 8. FASE 1: CENÁRIO 2D & MOVIMENTAÇÃO
// ==============================================================================
function transitionToPhase1() {
  AppState.currentScreen = "phase_1";
  switchScreen("screen-phase-1");

  const playerEl = document.getElementById("player-character");
  if (playerEl) {
    playerEl.innerHTML = AVATAR_SVGS[AppState.character];
    updatePlayerVisualPos();
  }
}

function renderMapDecorations() {
  const mapContainer = document.getElementById("map-container");
  if (!mapContainer) return;

  const decorations = [
    { x: 50, y: 35, icon: "🌳", size: 48, title: "Árvore de Floresta" },
    { x: 64, y: 32, icon: "🍊", size: 36, title: "Laranjeira Carregada" },
    { x: 88, y: 40, icon: "🪻", size: 34, title: "Vaso de Lavanda" },
    { x: 80, y: 15, icon: "🌽", size: 34, title: "Lavoura de Milho (Meio-Oeste SC)" },
    { x: 86, y: 24, icon: "🍇", size: 32, title: "Parreira de Uva (SC)" },
    { x: 92, y: 18, icon: "🐷", size: 32, title: "Pecuária Suína do Oeste Catarinense" },
    { x: 8, y: 12, icon: "⛰️", size: 48, title: "Serras e Morros" },
    { x: 20, y: 90, icon: "🛶", size: 34, title: "Canoa dos Pescadores Ribeirinhos" },
    { x: 10, y: 74, icon: "🐟", size: 28, title: "Peixe da Pesca Caiçara" }
  ];

  decorations.forEach(dec => {
    const el = document.createElement("div");
    el.className = "scenery-prop";
    el.style.left = `${dec.x}%`;
    el.style.top = `${dec.y}%`;
    el.style.fontSize = `${dec.size}px`;
    el.textContent = dec.icon;
    el.title = dec.title;
    mapContainer.appendChild(el);
  });
}

function renderCollectionPoints() {
  const container = document.getElementById("collection-points-container");
  if (!container) return;
  container.innerHTML = "";

  SOIL_DATABASE.forEach(soil => {
    const point = document.createElement("div");
    point.className = "collection-point";
    point.id = `point-${soil.id}`;
    point.style.left = `${soil.coords.x}%`;
    point.style.top = `${soil.coords.y}%`;
    point.title = `Clique para investigar: ${soil.name}`;

    point.innerHTML = `
      <div class="point-bubble">
        <span style="font-size: 22px;">${soil.icon}</span>
      </div>
    `;

    point.addEventListener("click", (e) => {
      e.stopPropagation();
      movePlayerTo(soil.coords.x, soil.coords.y, () => {
        openInspectModal(soil);
      });
    });

    container.appendChild(point);
  });
}

function movePlayerTo(pctX, pctY, onArrivalCallback = null) {
  const player = document.getElementById("player-character");
  if (!player) return;

  AppState.playerPos.x = pctX;
  AppState.playerPos.y = pctY;

  player.classList.add("walking");
  sounds.playStep();
  updatePlayerVisualPos();

  setTimeout(() => {
    player.classList.remove("walking");
    if (onArrivalCallback) onArrivalCallback();
  }, 420);
}

function updatePlayerVisualPos() {
  const player = document.getElementById("player-character");
  if (!player) return;
  player.style.left = `${AppState.playerPos.x}%`;
  player.style.top = `${AppState.playerPos.y}%`;
}

function spawnClickIndicator(parent, x, y) {
  const ripple = document.createElement("div");
  ripple.className = "click-indicator";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  parent.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

// ==============================================================================
// 9. MODAL DE INSPEÇÃO CIENTÍFICA, INTERDISCIPLINAR E MATEMÁTICA
// ==============================================================================
function openInspectModal(soil) {
  sounds.playClick();
  AppState.currentInspectingSoil = soil;

  const modal = document.getElementById("modal-soil-inspect");
  const title = document.getElementById("modal-soil-title");
  const badgeCategory = document.getElementById("modal-soil-category");
  const jarDisplay = document.getElementById("modal-jar-preview");

  const plantsEl = document.getElementById("modal-plants-answer");
  const sensoryTamanhoEl = document.getElementById("sensory-tamanho");
  const sensoryCorEl = document.getElementById("sensory-cor");
  const sensoryOdorEl = document.getElementById("sensory-odor");
  const sensoryAparenciaEl = document.getElementById("sensory-aparencia");
  const geoRegionEl = document.getElementById("modal-geo-region");
  const historyTextEl = document.getElementById("modal-history-text");

  // Campos de Matemática
  const mathTagEl = document.getElementById("math-concept-tag");
  const mathQuestionEl = document.getElementById("math-question-text");
  const mathOptionsContainer = document.getElementById("math-options-container");
  const mathFeedbackEl = document.getElementById("math-feedback-text");
  const btnCollect = document.getElementById("btn-collect-sample");

  if (title) title.innerHTML = `${soil.icon} ${soil.name}`;
  if (badgeCategory) {
    badgeCategory.textContent = `${soil.category} (Família: ${soil.soilFamily.toUpperCase()})`;
    badgeCategory.style.backgroundColor = `${soil.badgeColor}22`;
    badgeCategory.style.color = soil.badgeColor;
  }

  // Frasco ilustrado
  if (jarDisplay) {
    jarDisplay.innerHTML = `
      <div style="width: 80px; height: 95px; border-radius: 8px 8px 16px 16px; border: 3px solid #78909c; background: #e0f2f1; position: relative; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
        <div style="position: absolute; top: -6px; left: 50%; transform: translateX(-50%); width: 44px; height: 12px; background: #d7ccc8; border: 2px solid #8d6e63; border-radius: 3px;"></div>
        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 65%; background: ${soil.color}; border-top: 2px solid rgba(0,0,0,0.15);"></div>
      </div>
      <div class="jar-badge" style="background: ${soil.badgeColor};">${soil.category}</div>
    `;
  }

  // 1. Havia plantas aqui?
  if (plantsEl) {
    plantsEl.innerHTML = `<strong>Havia plantas aqui?</strong><br>${soil.plantsAnswer}`;
  }

  // 2. Sensorial para 8 anos
  if (sensoryTamanhoEl) sensoryTamanhoEl.textContent = soil.sensory.tamanho;
  if (sensoryCorEl) sensoryCorEl.textContent = soil.sensory.cor;
  if (sensoryOdorEl) sensoryOdorEl.textContent = soil.sensory.odor;
  if (sensoryAparenciaEl) sensoryAparenciaEl.textContent = soil.sensory.aparencia;

  // 3 & 4. Geografia e História
  if (geoRegionEl) {
    geoRegionEl.innerHTML = `<strong>🗺️ ${soil.geography.regiao}:</strong> ${soil.geography.detalhes}`;
  }
  if (historyTextEl) {
    historyTextEl.innerHTML = soil.historySociety;
  }

  // 5. Desafio Matemático Interativo (Multiplicação, Divisão e Proporção)
  if (mathTagEl && mathQuestionEl && mathOptionsContainer && mathFeedbackEl) {
    mathTagEl.textContent = soil.mathChallenge.concept;
    mathQuestionEl.textContent = soil.mathChallenge.question;
    mathOptionsContainer.innerHTML = "";
    mathFeedbackEl.textContent = "";

    soil.mathChallenge.options.forEach((opt, optIndex) => {
      const btnOpt = document.createElement("button");
      btnOpt.className = "btn-math-opt";
      btnOpt.textContent = opt;

      btnOpt.addEventListener("click", () => {
        if (optIndex === soil.mathChallenge.correctIndex) {
          sounds.playCollect();
          btnOpt.classList.add("correct");
          mathFeedbackEl.innerHTML = soil.mathChallenge.explanation;
          mathFeedbackEl.style.color = "#2e7d32";
          AppState.mathAnsweredMap.set(soil.id, true);
        } else {
          sounds.playClick();
          btnOpt.classList.add("wrong");
          mathFeedbackEl.textContent = "Tente de novo! Conte as partes ou grupos com calma 💡";
          mathFeedbackEl.style.color = "#c62828";
          setTimeout(() => btnOpt.classList.remove("wrong"), 1000);
        }
      });

      mathOptionsContainer.appendChild(btnOpt);
    });
  }

  // Configuração do botão de coleta
  if (btnCollect) {
    const alreadyCollected = AppState.collectedSoilIds.has(soil.id);
    const isFull = AppState.inventory.length >= 3;

    if (alreadyCollected) {
      btnCollect.disabled = true;
      btnCollect.textContent = "✅ Amostra Já Guardada";
    } else if (isFull) {
      btnCollect.disabled = true;
      btnCollect.textContent = "🎒 Mochila Cheia (3/3 Solos Prontos!)";
    } else {
      btnCollect.disabled = false;
      btnCollect.textContent = `📦 Coletar para o Laboratório (${soil.soilFamily.toUpperCase()})`;
    }
  }

  modal?.classList.add("open");
}

function closeInspectModal() {
  document.getElementById("modal-soil-inspect")?.classList.remove("open");
  AppState.currentInspectingSoil = null;
}

function handleCollectCurrentSample() {
  const soil = AppState.currentInspectingSoil;
  if (!soil) return;

  if (AppState.inventory.length < 3 && !AppState.collectedSoilIds.has(soil.id)) {
    AppState.inventory.push(soil);
    AppState.collectedSoilIds.add(soil.id);
    sounds.playCollect();

    const mapPoint = document.getElementById(`point-${soil.id}`);
    if (mapPoint) {
      mapPoint.classList.add("collected");
      setTimeout(() => mapPoint.remove(), 400);
    }

    updateInventoryHUD();
    closeInspectModal();

    if (AppState.inventory.length === 3) {
      const btnStartLab = document.getElementById("btn-start-experiment");
      if (btnStartLab) {
        btnStartLab.disabled = false;
        btnStartLab.classList.add("pulse-animation");
      }
      showToastAlert("🎉 3 Amostras Coletadas! Clique em 'Iniciar Experimento de Filtragem'!");
    } else {
      showToastAlert(`✨ Amostra de '${soil.name}' guardada! (${AppState.inventory.length}/3)`);
    }
  }
}

function updateInventoryHUD() {
  const counterText = document.getElementById("counter-samples");
  if (counterText) {
    counterText.textContent = `${AppState.inventory.length}/3`;
  }

  const slotLabels = [
    { label: "Solo 1", defaultIcon: "🏖️" },
    { label: "Solo 2", defaultIcon: "🌱" },
    { label: "Solo 3", defaultIcon: "🧱" }
  ];

  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`slot-${i}`);
    if (!slot) continue;

    if (AppState.inventory[i]) {
      const sample = AppState.inventory[i];
      slot.classList.add("filled");
      slot.innerHTML = `
        <span>${sample.icon}</span>
        <div class="slot-tooltip">${sample.name}</div>
      `;
    } else {
      slot.classList.remove("filled");
      slot.innerHTML = `
        <span style="opacity: 0.35;">${slotLabels[i].defaultIcon}</span>
        <div class="slot-tooltip">Amostra ${i + 1} Vazia</div>
      `;
    }
  }
}

function showToastAlert(msg) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.style.position = "fixed";
    toast.style.bottom = "24px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(100px)";
    toast.style.background = "#1b5e20";
    toast.style.color = "white";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "50px";
    toast.style.fontWeight = "700";
    toast.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
    toast.style.zIndex = "300";
    toast.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.transform = "translateX(-50%) translateY(0)";

  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(120px)";
  }, 3400);
}

// ==============================================================================
// 10. FASE 2: O EXPERIMENTO DE FILTRAGEM (EXCLUSIVO: AREIA, TERRA ESCURA, ARGILA)
// COM LINGUAGEM DE PROPORÇÃO E "MLS"
// ==============================================================================
function transitionToPhase2() {
  AppState.currentScreen = "phase_2";
  AppState.completedStationsCount = 0;
  switchScreen("screen-phase-2");
  setupCanonicalLaboratoryStations();
}

function setupCanonicalLaboratoryStations() {
  const bench = document.getElementById("lab-bench-container");
  if (!bench) return;
  bench.innerHTML = "";

  PHASE2_CANONICAL_SOILS.forEach((soil, idx) => {
    const station = document.createElement("div");
    station.className = "filter-station";
    station.id = `station-${idx}`;

    station.innerHTML = `
      <div class="filter-header-tag">
        <span class="station-label">Filtro ${idx + 1} (${soil.category})</span>
        <h3 class="soil-name-tag">${soil.icon} ${soil.name}</h3>
      </div>

      <div class="pour-control-area">
        <!-- Jarro de água animado -->
        <div class="water-pitcher-anim" id="pitcher-${idx}">
          <svg viewBox="0 0 50 50" width="48" height="48">
            <path d="M 12 10 L 38 10 L 34 44 C 34 46, 16 46, 16 44 Z" fill="#b3e5fc" stroke="#0288d1" stroke-width="2.5"/>
            <path d="M 17 22 L 33 22 L 32 42 Q 25 44 18 42 Z" fill="#29b6f6"/>
            <path d="M 36 16 C 46 16, 46 38, 33 38" fill="none" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>

        <button class="btn btn-pour-water" id="btn-pour-${idx}">
          💧 Despejar 200 ml (1 copo cheio / 1 caixinha de suco!)
        </button>

        <div class="water-stream-inflow" id="inflow-stream-${idx}"></div>
      </div>

      <div class="apparatus-view">
        <div class="stand-rod"></div>
        <div class="stand-clamp"></div>

        <!-- Funil com papel de filtro e solo -->
        <div class="funnel-glass">
          <div class="funnel-cone">
            <div class="funnel-water-top" id="funnel-water-${idx}"></div>
            <div class="funnel-soil-bed" id="funnel-soil-${idx}" style="background: ${soil.color};">
              <div style="position: absolute; bottom: 0; width: 100%; height: 6px; background: rgba(255,255,255,0.85); border-top: 1px dashed #cfd8dc;"></div>
            </div>
          </div>
          <div class="funnel-stem">
            <div class="funnel-stem-flow" id="stem-flow-${idx}"></div>
          </div>
        </div>

        <!-- Gotejamento -->
        <div class="dripping-container">
          <div class="water-drop" id="water-drop-${idx}"></div>
        </div>

        <!-- Béquer de vidro graduado com marca de METADE destacada -->
        <div class="beaker-glass">
          <div class="beaker-graduations">
            <div class="grad-mark">200ml (Copo Cheio)</div>
            <div class="grad-mark">150ml (3/4)</div>
            <div class="grad-mark mark-half">⭐ 100ml (METADE)</div>
            <div class="grad-mark">50ml (1/4)</div>
          </div>
          <div class="beaker-water-level ${soil.tintWater ? 'slight-tint' : ''}" id="beaker-level-${idx}">
            <div class="water-surface-ripple"></div>
          </div>
        </div>
      </div>

      <div class="volume-readout" id="volume-readout-${idx}">
        Água no Copo: <strong>0 ml</strong> / 200 ml
      </div>

      <!-- Card de Resultados com Proporção -->
      <div class="filter-results-card" id="results-card-${idx}">
        <p style="color: #78909c; text-align: center;">Clique em <strong>Despejar 200 ml</strong> para observar a proporção de água que passa!</p>
      </div>
    `;

    bench.appendChild(station);

    const btnPour = station.querySelector(`#btn-pour-${idx}`);
    btnPour.addEventListener("click", () => {
      runCanonicalFiltrationExperiment(idx, soil);
    });
  });

  updateLabStatusFooter();
}

function runCanonicalFiltrationExperiment(idx, soil) {
  const btnPour = document.getElementById(`btn-pour-${idx}`);
  if (btnPour.disabled) return;
  btnPour.disabled = true;

  sounds.playPour();

  const pitcher = document.getElementById(`pitcher-${idx}`);
  const inflowStream = document.getElementById(`inflow-stream-${idx}`);
  const funnelWater = document.getElementById(`funnel-water-${idx}`);
  const funnelSoil = document.getElementById(`funnel-soil-${idx}`);
  const stemFlow = document.getElementById(`stem-flow-${idx}`);
  const waterDrop = document.getElementById(`water-drop-${idx}`);
  const beakerLevel = document.getElementById(`beaker-level-${idx}`);
  const volumeReadout = document.getElementById(`volume-readout-${idx}`);
  const resultsCard = document.getElementById(`results-card-${idx}`);

  pitcher?.classList.add("pouring");
  inflowStream?.classList.add("active");

  setTimeout(() => {
    if (funnelWater) funnelWater.style.height = "50%";
    if (funnelSoil) funnelSoil.classList.add("soaked");

    setTimeout(() => {
      pitcher?.classList.remove("pouring");
      inflowStream?.classList.remove("active");
    }, 700);

    setTimeout(() => {
      if (stemFlow) stemFlow.style.height = "100%";
      if (waterDrop) waterDrop.classList.add("animating");

      const totalDurationSec = soil.flowSpeed;
      const targetVolume = soil.filteredMl;
      const targetHeightPct = (targetVolume / 200) * 88;

      let currentVolume = 0;
      const startTime = performance.now();
      const totalDurationMs = totalDurationSec * 1000;

      const dripSoundInterval = setInterval(() => {
        sounds.playDrip();
      }, Math.max(160, Math.min(800, (totalDurationSec / targetVolume) * 20000)));

      const animInterval = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(1, elapsed / totalDurationMs);
        const easeProgress = 1 - Math.pow(1 - progress, 2);

        currentVolume = Math.round(targetVolume * easeProgress);
        const currentHeightPct = targetHeightPct * easeProgress;
        const waterRemainingOnTop = Math.max(0, 50 * (1 - easeProgress * 1.2));

        if (beakerLevel) beakerLevel.style.height = `${currentHeightPct}%`;
        if (funnelWater) funnelWater.style.height = `${waterRemainingOnTop}%`;

        // Linguagem de ml com proporção intuitiva
        let proportionTag = "";
        if (currentVolume >= 95 && currentVolume <= 105) {
          proportionTag = " (Chegou na METADE!)";
        } else if (currentVolume > 160) {
          proportionTag = " (Quase o copo inteiro!)";
        } else if (currentVolume < 40 && currentVolume > 0) {
          proportionTag = " (Apenas um dedinho no fundo!)";
        }

        if (volumeReadout) {
          volumeReadout.innerHTML = `Água no Copo: <strong>${currentVolume} ml</strong> / 200 ml <span style="font-size:0.75rem; color:#0288d1;">${proportionTag}</span>`;
        }

        if (progress >= 1) {
          clearInterval(animInterval);
          clearInterval(dripSoundInterval);

          if (waterDrop) waterDrop.classList.remove("animating");
          if (stemFlow) stemFlow.style.height = "0%";

          displayStationResults(idx, soil, resultsCard);

          AppState.completedStationsCount++;
          updateLabStatusFooter();
        }
      }, 50);

      AppState.activeFilterSimulations.set(idx, animInterval);
    }, 800);
  }, 500);
}

function displayStationResults(idx, soil, cardEl) {
  if (!cardEl) return;
  cardEl.classList.add("completed");
  cardEl.innerHTML = `
    <div class="result-metric-row">
      <span class="result-metric-label">Permeabilidade:</span>
      <span class="result-metric-value" style="color: ${soil.badgeColor};">${soil.permeability}</span>
    </div>
    <div class="result-metric-row">
      <span class="result-metric-label">Água que Escorreu:</span>
      <span class="result-metric-value">${soil.filteredMl} ml (de 200 ml)</span>
    </div>
    <div class="result-metric-row">
      <span class="result-metric-label">Água que Ficou Retida:</span>
      <span class="result-metric-value">${soil.retainedMl} ml</span>
    </div>
    <div class="result-proportion-highlight">
      📐 <strong>Ideia de Proporção:</strong> ${soil.proportionPhrase}
    </div>
    <div class="result-observation-text">
      <strong>🔍 O que aconteceu:</strong> ${soil.observation}
    </div>
  `;
}

function testAllFiltersSimultaneously() {
  PHASE2_CANONICAL_SOILS.forEach((soil, idx) => {
    const btn = document.getElementById(`btn-pour-${idx}`);
    if (btn && !btn.disabled) {
      runCanonicalFiltrationExperiment(idx, soil);
    }
  });
}

function updateLabStatusFooter() {
  const statusEl = document.getElementById("lab-status-text");
  const btnReport = document.getElementById("btn-open-report");

  if (statusEl) {
    statusEl.innerHTML = `Filtros testados: <strong>${AppState.completedStationsCount} de 3</strong>`;
  }

  if (AppState.completedStationsCount >= 3) {
    sounds.playFanfare();
    if (btnReport) {
      btnReport.disabled = false;
      btnReport.classList.add("pulse-animation");
    }
    showToastAlert("🎓 Experimento completo! Clique em 'Ver Conclusão e Relatório'!");
  }
}

// ==============================================================================
// 11. MODAL DE CONCLUSÃO & RELATÓRIO DO CIENTISTA E MATEMÁTICO
// ==============================================================================
function openConclusionModal() {
  sounds.playClick();
  const modal = document.getElementById("modal-conclusion");
  const tableBody = document.getElementById("conclusion-table-body");

  if (tableBody) {
    tableBody.innerHTML = "";
    const sorted = [...PHASE2_CANONICAL_SOILS].sort((a, b) => b.filteredMl - a.filteredMl);

    sorted.forEach((s, rank) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>#${rank + 1}</strong> ${s.icon} ${s.name}</td>
        <td><span style="font-weight:700; color:${s.badgeColor};">${s.permeability}</span></td>
        <td><strong>${s.filteredMl} ml</strong> (Escorreu)</td>
        <td><strong>${s.retainedMl} ml</strong> (Retido)</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  modal?.classList.add("open");
}

function resetGameToBeginning() {
  sounds.playClick();

  AppState.inventory = [];
  AppState.collectedSoilIds.clear();
  AppState.completedStationsCount = 0;
  AppState.playerPos = { x: 50, y: 50 };
  AppState.mathAnsweredMap.clear();

  updateInventoryHUD();

  const btnStartLab = document.getElementById("btn-start-experiment");
  if (btnStartLab) {
    btnStartLab.disabled = true;
    btnStartLab.classList.remove("pulse-animation");
  }

  const btnReport = document.getElementById("btn-open-report");
  if (btnReport) {
    btnReport.disabled = true;
    btnReport.classList.remove("pulse-animation");
  }

  document.getElementById("modal-conclusion")?.classList.remove("open");
  document.getElementById("modal-soil-inspect")?.classList.remove("open");

  renderCollectionPoints();

  AppState.currentScreen = "character_select";
  switchScreen("screen-character-select");
}

function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId)?.classList.add("active");
}
