/* 
  Brasil in Cena - Base de Dados Editorial e Factual Completa (5 Regiões)
  Voz e Estilo: Revista Cultural Brasileira Contemporânea
  - Texto natural, claro, informativo, levemente formal, sem clichês vazios
*/

const BRASIL_DATA = {
    regioes: {
        norte: {
            id: "norte",
            nome: "Norte",
            cor: "#3D7A3F",
            estados: ["Amazonas", "Pará", "Acre", "Amapá", "Rondônia", "Roraima", "Tocantins"],
            siglas: ["AM", "PA", "AC", "AP", "RO", "RR", "TO"],
            resumo: "A bacia amazônica concentra a maior rede de rios navegáveis do país. O transporte fluvial, a coleta da castanha e do açaí e o manejo do pirarucu orientam a economia e o cotidiano das cidades e comunidades ribeirinhas.",
            dadosObjetivos: {
                estadosQtd: "7 estados",
                biomaPrincipal: "Floresta Amazônica e Cerrado",
                area: "3.853.676 km² (45% do território nacional)",
                populacao: "17,3 milhões de habitantes"
            },
            manifestacoesDestaque: ["Carimbó", "Círio de Nazaré", "Festival de Parintins", "Marabaixo"],
            saboresDestaque: ["Tacacá", "Maniçoba", "Pato no Tucupi", "Pirarucu de Casaca"],
            territorioInfo: "Na Região Norte, os rios cumprem o papel de rodovias. A rotina das populações locais é ditada pelas estações de cheia e vazante, com técnicas tradicionais de pesca, farinha de mandioca d'água e preservação florestal.",
            imagemHero: "../assets/img/norte/hero_norte_amazo.webp"
        },
        nordeste: {
            id: "nordeste",
            nome: "Nordeste",
            cor: "#C8872A",
            estados: ["Maranhão", "Piauí", "Ceará", "Rio Grande do Norte", "Paraíba", "Pernambuco", "Alagoas", "Sergipe", "Bahia"],
            siglas: ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"],
            resumo: "Com mais de 3 mil quilômetros de litoral e o semiárido da Caatinga no interior, o Nordeste reúne manifestações de matriz africana, ibérica e indígena, da poesia em xilogravura aos ritmos de frevo e maracatu.",
            dadosObjetivos: {
                estadosQtd: "9 estados",
                biomaPrincipal: "Caatinga, Mata Atlântica e Cerrado",
                area: "1.554.291 km² (18% do Brasil)",
                populacao: "54,6 milhões de habitantes"
            },
            manifestacoesDestaque: ["Frevo", "Maracatu", "Literatura de Cordel", "Festas Juninas", "Bumba Meu Boi"],
            saboresDestaque: ["Acarajé", "Baião de Dois", "Caruru", "Moqueca Baiana", "Bolo de Rolo"],
            territorioInfo: "A formação histórica do Nordeste está ligada aos primeiros núcleos urbanos do Brasil colônia, aos ciclos da cana-de-açúcar e do couro. A cultura sertaneja construiu formas próprias de convivência com o clima seco, visíveis na música de sanfona e nas festas de São João.",
            imagemHero: "https://images.unsplash.com/photo-154172703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop"
        },
        centro_oeste: {
            id: "centro-oeste",
            nome: "Centro-Oeste",
            cor: "#A34424",
            estados: ["Goiás", "Mato Grosso", "Mato Grosso do Sul", "Distrito Federal"],
            siglas: ["GO", "MT", "MS", "DF"],
            resumo: "Ponto de encontro entre o Cerrado, o Pantanal e o início da Amazônia. Abriga as nascentes das bacias do Prata, do Tocantins e do São Francisco, além de cidades históricas do ciclo do ouro e a capital federal.",
            dadosObjetivos: {
                estadosQtd: "3 estados + Distrito Federal",
                biomaPrincipal: "Cerrado e Pantanal",
                area: "1.606.371 km² (19% do Brasil)",
                populacao: "16,5 milhões de habitantes"
            },
            manifestacoesDestaque: ["Cavalhadas de Pirenópolis", "Cururu e Siriri", "Festa do Divino", "Viola de Cocho"],
            saboresDestaque: ["Empadão Goiano", "Arroz com Pequi", "Caldo de Piranha", "Pintado a Urucum"],
            territorioInfo: "A ocupação do Centro-Oeste foi impulsionada pelas bandeiras mineradoras no século XVIII e pela transferência da capital para Brasília em 1960. O Pantanal mantém comunidades tradicionais de peões e pescadores artesanais.",
            imagemHero: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop"
        },
        sudeste: {
            id: "sudeste",
            nome: "Sudeste",
            cor: "#132E5C",
            estados: ["Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"],
            siglas: ["ES", "MG", "RJ", "SP"],
            resumo: "Região de maior densidade populacional e econômica do país, onde cidades barrocas do século XVIII convivem com a produção cultural urbana, as escolas de samba cariocas e a culinária caipira e mineira.",
            dadosObjetivos: {
                estadosQtd: "4 estados",
                biomaPrincipal: "Mata Atlântica e Cerrado",
                area: "924.511 km² (11% do Brasil)",
                populacao: "84,8 milhões de habitantes"
            },
            manifestacoesDestaque: ["Congada", "Folia de Reis", "Samba Carioca", "Jongo", "Fandango Caiçara"],
            saboresDestaque: ["Pão de Queijo", "Feijão Tropeiro", "Feijoada", "Moqueca Capixaba"],
            territorioInfo: "O relevo montanhoso da Serra do Mar e da Mantiqueira moldou as rotas históricas do ouro e do café. Hoje, a região reúne patrimônios reconhecidos pela UNESCO, como o conjunto arquitetônico de Ouro Preto e as paisagens do Rio de Janeiro.",
            imagemHero: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop"
        },
        sul: {
            id: "sul",
            nome: "Sul",
            cor: "#5B4A8A",
            estados: ["Paraná", "Rio Grande do Sul", "Santa Catarina"],
            siglas: ["PR", "RS", "SC"],
            resumo: "Caracterizado pelo clima subtropical com quatro estações bem definidas, planaltos de araucárias e campos de pastoreio. A cultura local combina hábitos dos tropeiros e das populações indígenas com tradições de imigrantes alemães, italianos, poloneses e ucranianos.",
            dadosObjetivos: {
                estadosQtd: "3 estados",
                biomaPrincipal: "Mata das Araucárias e Pampa",
                area: "576.774 km² (7% do Brasil)",
                populacao: "29,9 milhões de habitantes"
            },
            manifestacoesDestaque: ["Fandango Caiçara", "Dança das Fitas", "Chula Gaúcha", "Oktoberfest", "Festa da Uva"],
            saboresDestaque: ["Barreado", "Arroz Carreteiro", "Chimarrão", "Tainha na Telha"],
            territorioInfo: "As rotas tropeiras que ligavam o Rio Grande do Sul a São Paulo no século XVIII criaram paradas que deram origem a cidades como Lages e Ponta Grossa. O consumo comunitário do chimarrão e a culinária à base de carne de charque e pinhão permanecem presentes.",
            imagemHero: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop"
        }
    },

    culturasGerais: [
        {
            numero: "01",
            titulo: "Carimbó",
            local: "Pará · Marajó e Litoral",
            imagem: "assets/img/norte/Carimbo.jpg",
            texto: "No Pará, o carimbó reúne dança, música e instrumentos tradicionais em uma manifestação que continua presente em diferentes comunidades ribeirinhas e litorâneas. As mulheres dançam descalças com saias floridas ao ritmo do curimbó, tambor feito de tronco escavado."
        },
        {
            numero: "02",
            titulo: "Frevo",
            local: "Pernambuco · Recife e Olinda",
            imagem: "assets/img/norte/frevo.jpg",
            texto: "Surgido nas ruas do Recife no final do século XIX, o frevo combina metais de bandas militares com passos rápidos influenciados pela capoeira. O uso da sombrinha colorida serve como elemento visual e contrapeso nos saltos acrobáticos."
        },
        {
            numero: "03",
            titulo: "Congada e Folia de Reis",
            local: "Minas Gerais e Vale do Paraíba",
            imagem: "assets/img/sudeste/congada.jpg",
            texto: "Auto dramatizado que reconstitui a coroação dos Reis do Congo em irmandades religiosas negras desde o século XVIII. Os cortejos utilizam caixas de madeira, cantos tradicionais e vestimentas bordadas com fitas coloridas."
        },
        {
            numero: "04",
            titulo: "Fandango Caiçara",
            local: "Litoral de São Paulo e Paraná",
            imagem: "assets/img/sudeste/fandango_caicara.jpg",
            texto: "Prática musical e coreográfica das comunidades pesqueiras da Mata Atlântica. Os bailes eram realizados ao fim dos mutirões de trabalho agrícola, acompanhados por rabeca de caxeta, viola caiçara e o ritmo marcado pelos tamancos de madeira no assoalho."
        },
        {
            numero: "05",
            titulo: "Cavalhadas de Pirenópolis",
            local: "Goiás · Pirenópolis",
            imagem: "assets/img/centro_oeste/Cavalhadas.jpg",
            texto: "Encenação equestre realizada durante a Festa do Divino Espírito Santo, com registros desde 1826. Doze cavaleiros vestidos de azul (Cristãos) e doze de vermelho (Mouros) realizam manobras e corridas com lanças em uma arena ao ar livre."
        }
    ],

    gastronomia: [
        {
            id: "tacaca",
            nome: "Tacacá na Cuia",
            estado: "PA / AM",
            regiao: "Norte",
            imagem: "assets/img/norte/Tacaca_culi.webp",
            ingredientes: "Tucupi amarelo fermentado, goma de tapioca, folhas frescas de jambu, camarão seco salgado e pimenta-de-cheiro.",
            descricao: "Servido quente em cuias naturais de cuité, o Tacacá tem como base o tucupi extraído da raiz da mandioca-brava após cozimento rigoroso. O jambu confere a sensação eletrizante de amortecimento nos lábios, marco da cozinha da floresta.",
            origem: "Origem pré-colonial indígena nos rios Tapajós e Amazonas, mantido vivo pelas tradicionais bancas de rua das tacacazeiras.",
            curiosidade: "Não se utiliza colher para tomar tacacá: a cuia é levada diretamente à boca com auxílio de um palito de tucumã para pescar o camarão e o jambu."
        },
        {
            id: "acaraje",
            nome: "Acarajé das Baianas",
            estado: "BA",
            regiao: "Nordeste",
            imagem: "assets/img/nordeste/Acarajé_culi.webp",
            ingredientes: "Feijão-fradinho descascado e moído, cebola ralada, azeite de dendê virgem, vatapá cremoso, caruru e camarão seco defumado.",
            descricao: "Massa leve e aerada batida vigorosamente em gamela de madeira e frita no azeite de dendê em ebulição. Crocante por fora e macio por dentro, é recheado com vatapá, caruru e pimenta da Bahia.",
            origem: "Matriz religiosa do povo Iorubá da Nigéria e Benim, alimento sagrado dedicado a Iansã e levado às ruas pelas mulheres negras libertas.",
            curiosidade: "O Ofício das Baianas de Acarajé é Patrimônio Cultural Imaterial do Brasil registrado pelo IPHAN desde 2005."
        },
        {
            id: "baiao",
            nome: "Baião de Dois Sertanejo",
            estado: "CE / PB",
            regiao: "Nordeste",
            imagem: "assets/img/nordeste/Baião_culi.webp",
            ingredientes: "Arroz agulhinha, feijão-de-corda fresco, queijo de coalho tostado, manteiga de garrafa, coentro e carne de sol desfiada.",
            descricao: "A união de sobrevivência do sertanejo: cozinhar o arroz e o feijão juntos na mesma panela para economizar água e lenha nos tempos de seca severa. Finalizado com cubos dourados de queijo coalho e manteiga de garrafa.",
            origem: "Interior do Ceará e sertão paraibano, celebrizado nacionalmente na canção de Luiz Gonzaga e Humberto Teixeira em 1950.",
            curiosidade: "A expressão 'baião' remete à dança rítmica nordestina em que os pares dançam abraçados e inseparáveis, assim como o arroz e o feijão."
        },
        {
            id: "arroz_pequi",
            nome: "Arroz com Pequi",
            estado: "GO / MT",
            regiao: "Centro-Oeste",
            imagem: "assets/img/centro_oeste/Arroz_pequi_culi.webp",
            ingredientes: "Arroz solto, caroços inteiros de pequi amarelo do Cerrado, alho socado, cebola, banha de porco e cheiro-verde.",
            descricao: "O pequi tinge os grãos de arroz de um amarelo profundo e impregna o prato com seu aroma floral oleoso e penetrante, característico da vegetação do Planalto Central.",
            origem: "Culinária dos tropeiros e populações indígenas que habitavam as campinas do Cerrado muito antes da exploração do ouro.",
            curiosidade: "Nunca morda o caroço do pequi: a polpa deve ser apenas raspada delicadamente com os dentes dianteiros, pois seu núcleo contém centenas de espinhos afiados minúsculos."
        },
        {
            id: "pao_de_queijo",
            nome: "Pão de Queijo da Canastra",
            estado: "MG",
            regiao: "Sudeste",
            imagem: "assets/img/sudeste/pao_de_queijo_culi.jpg",
            ingredientes: "Polvilho azedo de mandioca, queijo Minas Artesanal de casca lavada e curado, ovos caipiras, banha e leite cru.",
            descricao: "Quitanda colonial assada em forno quente, de casca finíssima crocante e miolo úmido, aerado e elástico. O sabor ácido e marcante provém da fermentação natural do polvilho e da cura do queijo cru.",
            origem: "Fazendas do ciclo do ouro no século XVIII, quando a farinha de trigo era privilégio da corte e a mandioca supria as necessidades da cozinha caipira.",
            curiosidade: "O modo tradicional de fazer o Queijo Minas Artesanal da região da Canastra e Serro foi reconhecido pelo IPHAN como Patrimônio Cultural Imaterial."
        },
        {
            id: "feijoada",
            nome: "Feijoada à Brasileira",
            estado: "RJ / SP",
            regiao: "Sudeste",
            imagem: "assets/img/sudeste/Feijoada_culi.jpg",
            ingredientes: "Feijão-preto, carne-seca, costelinha de porco salgada, lombo, paio, linguiça calabresa, louro, laranja e farofa amanteigada.",
            descricao: "Cozimento lento e encorpado de feijão preto com carnes nobres e embutidos defumados. Servida com arroz branco, couve refogada no alho, rodelas de laranja e torresmo estaladiço.",
            origem: "Evolução urbana no Rio de Janeiro do século XIX a partir de cozidos portugueses adaptados com o feijão preto nativo da América do Sul.",
            curiosidade: "A feijoada consolidou-se como o prato de reunião das rodas de samba e dos barracões das escolas de samba aos sábados."
        },
        {
            id: "arroz_carreteiro",
            nome: "Arroz de Carreteiro",
            estado: "RS",
            regiao: "Sul",
            imagem: "assets/img/sul/Arroz_Carreteiro_culi.webp",
            ingredientes: "Arroz, carne de charque bovino dessalgada e picada na ponta da faca, cebola picada, alho, tomate e salsinha.",
            descricao: "Prato rústico e calórico preparado em uma única panela de ferro preta sobre brasas de lenha de campo. A gordura do charque frito carameliza a cebola e confere cor âmbar intensa ao arroz.",
            origem: "Criado pelos condutores de carretas puxadas por bois (carreteiros) que cruzavam os pampas gaúchos transportando cargas no século XIX.",
            curiosidade: "O charque salgado e seco ao vento minuano era a única forma de conservar carne bovina durante viagens que duravam semanas pelos campos sulinos."
        },
        {
            id: "manicoba",
            nome: "Maniçoba Paraense",
            estado: "PA",
            regiao: "Norte",
            imagem: "assets/img/norte/Manicoba_culi.webp",
            ingredientes: "Maniva triturada (folha da mandioca-brava), toucinho, charque, costelinha defumada, paio e folhas de louro da mata.",
            descricao: "Conhecida como a feijoada amazônica sem feijão: folhas verdes da mandioca cozidas em caldeirões por sete dias ininterruptos até a completa eliminação do ácido cianídrico.",
            origem: "Herança culinária dos povos indígenas Tupinambás da foz do Amazonas, posteriormente consorciada com os embutidos coloniais.",
            curiosidade: "É o prato ritualístico do Círio de Nazaré: as panelas de maniçoba são acesas uma semana antes do cortejo para alimentar as famílias e peregrinos."
        }
    ],

    objetosVivos: [
        {
            id: "cuia_tacaca",
            regiao: "norte",
            corRegiao: "#2A6B45",
            nome: "Cuia de Tacacá & Jambu",
            subtitulo: "Recipiente Botânico & Saberes da Floresta",
            origem: "Santarém e Belém · Pará",
            coord: "02°26′S · 54°42′W",
            material: "Fruto de Cuité polido e tingido com cumatezeiro",
            imagem: "assets/img/norte/Tacaca_culi.webp",
            descricao: "A cuia artesanal de cuité conserva a temperatura escaldante do tucupi enquanto as folhas de jambu despertam o formigamento elétrico na boca do ribeirinho.",
            acervo: "OFÍCIO DAS CUIAZEIRAS · IPHAN 2015"
        },
        {
            id: "sombrinha_frevo",
            regiao: "nordeste",
            corRegiao: "#C47D2B",
            nome: "Sombrinha de Frevo",
            subtitulo: "Cinética Urbana & Resistência da Capoeira",
            origem: "Recife e Olinda · Pernambuco",
            coord: "08°03′S · 34°52′W",
            material: "Varetas metálicas, madeira torneada e cetim multicolorido",
            imagem: "assets/img/norte/frevo.jpg",
            descricao: "Nascida como arma de defesa disfarçada pelos capoeiristas do século XIX, a sombrinha atua como giroscópio cinético nos saltos acrobáticos no paralelepípedo.",
            acervo: "PATRIMÔNIO IMATERIAL DA HUMANIDADE · UNESCO"
        },
        {
            id: "viola_cocho",
            regiao: "centro-oeste",
            corRegiao: "#B8532F",
            nome: "Viola de Cocho & Pequi",
            subtitulo: "Cordas Pantaneiras & Madeira Escavada",
            origem: "Corumbá e Cuiabá · Pantanal",
            coord: "19°00′S · 57°39′W",
            material: "Tronco único de sarã escavado e cordas de tripa",
            imagem: "assets/img/centro_oeste/viola_caipira_card.webp",
            descricao: "Escavada em tora maciça como um cocho de alimentar gado, a viola pantaneira afina os cururus e siriris sob a sombra das árvores de pequi do Cerrado.",
            acervo: "MODO DE FAZER VIOLA DE COCHO · IPHAN 2005"
        },
        {
            id: "rabeca_caicara",
            regiao: "sudeste",
            corRegiao: "#1E3A63",
            nome: "Rabeca de Caxeta & Café",
            subtitulo: "Luthieria da Mata Atlântica & Fogo Caipira",
            origem: "Iguape e Cananéia · Litoral Paulista",
            coord: "24°42′S · 47°33′W",
            material: "Madeira leve de caxeta, crina de cavalo e breu de pinho",
            imagem: "assets/img/sudeste/fandango_caicara.jpg",
            descricao: "Entalhada à mão pelos pescadores artesanais caiçaras para conduzir os mutirões do fandango, acompanhada pelo café coado no pano e o pão de queijo da roça.",
            acervo: "SABERES TRADICIONAIS CAIÇARAS · IPHAN"
        },
        {
            id: "cuia_chimarrao",
            regiao: "sul",
            corRegiao: "#6B538C",
            nome: "Cuia de Porongo & Bomba",
            subtitulo: "Ritual Campeiro & Vento dos Pampas",
            origem: "Bagé e Missões · Rio Grande do Sul",
            coord: "31°19′S · 54°06′W",
            material: "Porongo seco curtido, alpaca forjada e prata",
            imagem: "assets/img/sul/chimarrao_card.webp",
            descricao: "Roda comunitária e democrática herdada dos povos Guaranis: a água quente a 75°C extrai os taninos da erva-mate nos invernos de geada do Sul.",
            acervo: "TRADIÇÃO DO CHIMARRÃO · CULTURA PAMPEANA"
        }
    ],

    calendarioEventos: {
        "JAN": [
            { nome: "Lavagem do Bonfim", estado: "BA", regiao: "Nordeste", desc: "Cortejo em Salvador onde baianas com trajes tradicionais sobem a Colina Sagrada para lavar o adro da Igreja do Bonfim com água de cheiro e flores." },
            { nome: "Folia de Reis", estado: "MG / SP / GO", regiao: "Sudeste / Centro-Oeste", desc: "Grupos de cantadores e instrumentistas percorrem casas do interior celebrando a visita dos Reis Magos com violas, caixas e sanfonas." }
        ],
        "FEV": [
            { nome: "Carnaval de Pernambuco", estado: "PE", regiao: "Nordeste", desc: "Desfile do Galo da Madrugada no centro do Recife e os blocos de frevo e nações de maracatu pelas ladeiras de Olinda." },
            { nome: "Carnaval de Salvador", estado: "BA", regiao: "Nordeste", desc: "Desfiles de trios elétricos e blocos afro tradicionais como Ilê Aiyê, Filhos de Gandhy e Olodum nos circuitos da cidade." },
            { nome: "Desfiles das Escolas de Samba", estado: "RJ / SP", regiao: "Sudeste", desc: "Apresentações com alegorias, baterias e sambas-enredo dedicados à memória, à literatura e à história brasileira no Sambódromo." }
        ],
        "MAR": [
            { nome: "Procissão do Fogaréu", estado: "GO", regiao: "Centro-Oeste", desc: "Tradição que ocorre na Cidade de Goiás na Semana Santa, com homens encapuzados (farricocos) carregando tochas acesas pelas ruas de pedra." }
        ],
        "ABR": [
            { nome: "Festa da Penha", estado: "ES", regiao: "Sudeste", desc: "Romarias e cortejos náuticos e terrestres que convergem para o Convento da Penha, fundado no século XVI em Vila Velha." },
            { nome: "Paixão de Cristo de Nova Jerusalém", estado: "PE", regiao: "Nordeste", desc: "Espetáculo de teatro ao ar livre realizado em uma cidade-teatro construída no município de Brejo da Madre de Deus." }
        ],
        "MAI": [
            { nome: "Festa do Divino Espírito Santo", estado: "GO / MA / SP", regiao: "Centro-Oeste / Nordeste", desc: "Celebração que reúne cortejos do Império do Divino, toques de caixa das caixeiras do Maranhão e alvoradas com violeiros." }
        ],
        "JUN": [
            { nome: "Festas Juninas de Caruaru e Campina Grande", estado: "PE / PB", regiao: "Nordeste", desc: "Concentração de quadrilhas estilizadas, forró pé-de-serra, fogueiras e barracas de comidas de milho no agreste e sertão." },
            { nome: "Festival Folclórico de Parintins", estado: "AM", regiao: "Norte", desc: "Disputa temática de três noites na arena do Bumbódromo entre as agremiações do Boi Garantido (Vermelho) e Caprichoso (Azul)." },
            { nome: "Bumba Meu Boi do Maranhão", estado: "MA", regiao: "Nordeste", desc: "Grupos de diferentes sotaques (matraca, zabumba, orquestra e costa de mão) se apresentam em arraiais por todo o estado." }
        ],
        "JUL": [
            { nome: "Festa do Divino de Alcântara", estado: "MA", regiao: "Nordeste", desc: "Tradição bicentenária de cortejos imperiais com trajes de época pelas ladeiras históricas de Alcântara." }
        ],
        "AGO": [
            { nome: "Festa de Nossa Senhora da Boa Morte", estado: "BA", regiao: "Nordeste", desc: "Celebração conduzida pela irmandade de mulheres negras em Cachoeira, no Recôncavo Baiano, com missas, procissões e samba de roda." }
        ],
        "SET": [
            { nome: "Semana Farroupilha", estado: "RS", regiao: "Sul", desc: "Encontros em piquetes e acampamentos que relembram a história dos tropeiros e a Revolução de 1835 com música e culinária campeira." }
        ],
        "OUT": [
            { nome: "Círio de Nazaré", estado: "PA", regiao: "Norte", desc: "Reúne mais de dois milhões de devotos em Belém no segundo domingo de outubro, acompanhando a berlinda com a imagem da Virgem e a corda dos promesseiros." },
            { nome: "Oktoberfest de Blumenau", estado: "SC", regiao: "Sul", desc: "Festival que reúne manifestações de canto coral, trajes típicos e culinária de imigração alemã no Vale do Itajaí." }
        ],
        "NOV": [
            { nome: "Encontro Nacional de Maracatus", estado: "PE / CE", regiao: "Nordeste", desc: "Cortejos de nações centenárias de Maracatu Nação (Baque Virado) e Maracatu Rural (Baque Solto)." }
        ],
        "DEZ": [
            { nome: "Congada da Lapa e Vale do Paraíba", estado: "PR / SP", regiao: "Sul / Sudeste", desc: "Encerramento das festas de fim de ano com grupos de Moçambique, Catupé e Congos saudando São Benedito." }
        ]
    }
};

if (typeof window !== 'undefined') {
    window.BRASIL_DATA = BRASIL_DATA;
}
if (typeof module !== 'undefined') {
    module.exports = BRASIL_DATA;
}
