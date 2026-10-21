/* 
  Brasil in Cena — Dossiê Ambiental: Terra, Tecnologia & Futuro
  Motor do Modal Reutilizável e Base Editorial Regional Verificada
*/

const SUSTENTABILIDADE_DOSSIER_DATA = {
    norte: {
        cadernoLabel: "CADERNO 01 · REGIÃO NORTE",
        themes: {
            "energia-limpa": {
                num: "01",
                category: "01 — Energia limpa",
                subtag: "Sistemas Isolados & Fotovoltaica",
                title: "Sol Entre Igarapés: A Transição dos Sistemas Isolados na Amazônia",
                image: "../assets/img/norte/hero_norte_amazo.webp",
                imageAlt: "Floresta Amazônica e rios da Região Norte sob luz solar",
                imageCaption: "Bacia Amazônica · Sistemas Isolados e Transição Energética",
                imageCoord: "02°26′S · 54°42′W",
                intro: "Na imensidão amazônica, onde estender linhas de transmissão por centenas de quilômetros de floresta densa e rios caudalosos encontra barreiras técnicas e ambientais, milhões de moradores dependem historicamente dos chamados Sistemas Isolados — redes elétricas locais desconectadas do Sistema Interligado Nacional (SIN).",
                research: [
                    "Estudos de planejamento da Empresa de Pesquisa Energética (EPE) para o atendimento aos Sistemas Isolados (SISOL) e diretrizes do Ministério de Minas e Energia (MME) mostram que a geração no interior da Região Norte ainda recorre de forma expressiva a usinas termelétricas movidas a óleo diesel. Para alterar esse quadro, políticas públicas federais — como o programa Energias da Amazônia e a vertente Mais Luz para a Amazônia, integrada ao programa Luz para Todos — priorizam a instalação de sistemas solares fotovoltaicos individuais ou em microrredes com armazenamento em baterias.",
                    "A tecnologia fotovoltaica off-grid capta a radiação solar abundante na faixa equatorial e armazena a eletricidade em bancos de baterias estacionárias, garantindo suprimento contínuo mesmo durante a noite ou sob nebulosidade tropical, sem necessidade de derrubar faixas de mata nativa para a passagem de cabos de alta tensão."
                ],
                regionalRelation: [
                    "No cotidiano das comunidades ribeirinhas, reservas extrativistas e terras indígenas do Amazonas, Pará, Acre, Amapá, Rondônia e Roraima, os rios operam como as únicas vias de abastecimento. Durante décadas, a eletricidade dependeu de barcaças carregadas de óleo diesel subindo os rios Solimões, Negro, Purus, Juruá e Tapajós.",
                    "Quando a geração solar substitui o motor estacionário a combustão na beira do igarapé, transforma-se a paisagem sonora e econômica da vila: cessa o ruído constante do gerador a diesel e torna-se possível conservar o pescado, congelar polpas de açaí e cupuaçu, bombear água potável e manter postos de saúde refrigerados e escolas conectadas."
                ],
                impacts: [
                    "Oportunidades: redução expressiva da queima de combustíveis fósseis e das emissões de gases de efeito estufa na Amazônia, diminuição do custo da Conta de Consumo de Combustíveis (CCC) e fortalecimento da bioeconomia comunitária com refrigeração local.",
                    "Desafios: logística complexa para instalação e assistência técnica em calhas de rios distantes, necessidade de capacitação de moradores locais para manutenção preventiva e gestão adequada do descarte e reciclagem das baterias ao final de sua vida útil sob clima quente e úmido."
                ],
                sources: [
                    {
                        institution: "EPE — Empresa de Pesquisa Energética",
                        title: "Planejamento do Atendimento aos Sistemas Isolados (SISOL)",
                        url: "https://www.epe.gov.br/pt/areas-de-atuacao/energia-eletrica/planejamento-dos-sistemas-isolados"
                    },
                    {
                        institution: "Ministério de Minas e Energia (MME)",
                        title: "Programa Nacional de Universalização do Acesso e Uso da Energia Elétrica — Luz para Todos / Amazônia",
                        url: "https://www.gov.br/mme/pt-br/assuntos/programas/luz-para-todos"
                    }
                ]
            },
            "tecnologia-verde": {
                num: "02",
                category: "02 — Tecnologia verde",
                subtag: "Sensoriamento Orbital & Agroflorestas",
                title: "Satélites no Céu e Agroflorestas no Chão: Ciência para a Floresta Produtiva",
                image: "../assets/img/norte/Açaí_tigela_culi.webp",
                imageAlt: "Frutos e colheita de açaí na Amazônia",
                imageCaption: "Manejo de Açaí e Sistemas Agroflorestais · Amazônia Oriental",
                imageCoord: "01°27′S · 48°30′W",
                intro: "No Norte, tecnologia verde não significa impor pacotes agrícolas homogêneos sobre o ecossistema, mas articular o monitoramento orbital de alta precisão com tecnologias agroflorestais que regeneram áreas alteradas e valorizam a biodiversidade com a floresta em pé.",
                research: [
                    "Em escala territorial, o Instituto Nacional de Pesquisas Espaciais (INPE) opera os sistemas PRODES e DETER, referências científicas mundiais em sensoriamento remoto que utilizam satélites para mapear taxas anuais de corte raso e emitir alertas diários de degradação e desmatamento na Amazônia Legal. Esses dados públicos orientam o planejamento territorial e a responsabilização ambiental.",
                    "Na escala da propriedade rural e dos territórios tradicionais, a Embrapa Amazônia Oriental e unidades parceiras na região desenvolvem e validam Sistemas Agroflorestais (SAFs) e protocolos de Manejo Florestal de Impacto Reduzido. Nos SAFs, cultivos agrícolas temporários (como mandioca, feijão e milho) são consorciados no mesmo espaço com espécies perenes nativas de alto valor cultural e econômico, como o açaizeiro, o cacaueiro, o cupuaçuzeiro, a castanheira-do-brasil e essências florestais."
                ],
                regionalRelation: [
                    "Os solos amazônicos, em grande parte ácidos e dependentes da ciclagem rápida de nutrientes da serapilheira (a camada de folhas e matéria orgânica que cai das árvores), degradam-se rapidamente quando expostos de forma contínua ao sol equatorial e às chuvas torrenciais. Ao imitar a arquitetura estratificada da própria mata nativa, as agroflorestas no Pará, Amazonas, Rondônia, Acre e Tocantins protegem o solo, sequestram carbono e garantem colheitas escalonadas ao longo do ano.",
                    "A rastreabilidade por georreferenciamento e o manejo técnico de açaizais nativos de várzea no estuário amazônico permitem conciliar o saber ribeirinho ancestral com padrões sanitários e ambientais exigidos pelos mercados nacional e internacional."
                ],
                impacts: [
                    "Oportunidades: recuperação produtiva de pastagens degradadas, cumprimento do Código Florestal com geração de renda familiar e fortalecimento das cadeias da sociobiodiversidade amazônica.",
                    "Desafios: ampliar a conectividade digital no interior para acesso a dados agrometeorológicos, expandir a assistência técnica e extensão rural (ATER) e implantar agroindústrias locais para que o valor agregado dos bioprodutos permaneça nas comunidades da região."
                ],
                sources: [
                    {
                        institution: "Embrapa Amazônia Oriental",
                        title: "Pesquisas em Sistemas Agroflorestais (SAFs), Manejo Florestal e Bioeconomia",
                        url: "https://www.embrapa.br/amazonia-oriental"
                    },
                    {
                        institution: "INPE — Instituto Nacional de Pesquisas Espaciais",
                        title: "Plataforma TerraBrasilis — Monitoramento PRODES e DETER da Amazônia Legal",
                        url: "http://terrabrasilis.dpi.inpe.br/"
                    }
                ]
            },
            "residuos-reuso": {
                num: "03",
                category: "03 — Resíduos e reuso",
                subtag: "Saneamento Fluvial & Biomassa Amazônica",
                title: "O Desafio das Margens: Coleta, Saneamento e Reuso Orgânico na Bacia",
                image: "../assets/img/norte/Doce_Buriti_culi.webp",
                imageAlt: "Frutos e insumos botânicos da floresta amazônica",
                imageCaption: "Insumos da Sociobiodiversidade e Reaproveitamento Orgânico · Norte",
                imageCoord: "01°18′S · 48°28′W",
                intro: "Gerir resíduos sólidos em uma região onde rios de dimensões oceânicas substituem rodovias e onde cidades inteiras dialogam com áreas de várzea e igarapés impõe desafios logísticos singulares ao saneamento ambiental brasileiro.",
                research: [
                    "Os dados consolidados pelo Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR), vinculado ao Ministério do Meio Ambiente e Mudança do Clima, apontam que a Região Norte registra os menores índices nacionais de cobertura de coleta domiciliar regular e de presença de programas municipais formais de coleta seletiva, além de enfrentar obstáculos estruturais para a erradicação completa de vazadouros a céu aberto.",
                    "Em contrapartida, pesquisas conduzidas por universidades da região e pela Embrapa investigam soluções de economia circular adaptadas à realidade amazônica: o reaproveitamento dos volumosos resíduos orgânicos do beneficiamento de frutos nativos — especialmente o caroço de açaí, a casca de cupuaçu, o ouriço da castanha e a manipueira da mandioca — na compostagem orgânica, na produção de carvão vegetal ativado, em substratos para mudas e como biomassa energética."
                ],
                regionalRelation: [
                    "Em capitais como Belém, Manaus, Macapá, Porto Velho e Rio Branco, bem como nas cidades ribeirinhas, o descarte irregular de plásticos e resíduos domésticos atinge diretamente os igarapés urbanos, sendo arrastado para os grandes rios durante o período das cheias.",
                    "Ao mesmo tempo, milhares de batedeiras artesanais de açaí geram diariamente toneladas de caroços nas feiras e bairros nortistas. Transformar esse resíduo fibroso em adubo para hortas periurbanas ou combustível renovável para olarias e caldeiras locais converte um passivo urbano em recurso produtivo."
                ],
                impacts: [
                    "Oportunidades: estruturação de cooperativas de catadores, logística reversa fluvial para embalagens plásticas e aproveitamento energético e agrícola de resíduos agroextrativistas.",
                    "Desafios: grandes distâncias e isolamento geográfico que encarecem o transporte de recicláveis até centros industriais, limitação de áreas secas e geologicamente adequadas para aterros sanitários em terrenos alagáveis de várzea e necessidade de investimentos públicos contínuos."
                ],
                sources: [
                    {
                        institution: "SINIR — Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos",
                        title: "Portal Oficial e Painéis de Monitoramento da Gestão de Resíduos Sólidos no Brasil",
                        url: "https://sinir.gov.br/"
                    },
                    {
                        institution: "Embrapa Amazônia Oriental",
                        title: "Publicações Técnicas sobre Compostagem e Aproveitamento de Resíduos Agroindustriais na Amazônia",
                        url: "https://www.embrapa.br/amazonia-oriental/busca-de-publicacoes"
                    }
                ]
            },
            "clima-territorio": {
                num: "04",
                category: "04 — Clima e território",
                subtag: "El Niño, Vazantes & Risco de Fogo",
                title: "Quando os Rios Baixam: El Niño, Estiagens e o Equilíbrio Hidrológico da Floresta",
                image: "../assets/img/norte/amazonas_card.webp",
                imageAlt: "Confluência de rios na Bacia Amazônica",
                imageCaption: "Bacia do Rio Negro e Solimões · Dinâmica Hidrológica Amazônica",
                imageCoord: "03°08′S · 59°54′W",
                intro: "Na Amazônia, o ritmo da vida coletiva, da navegação e da pesca obedece ao pulso secular das cheias e vazantes. Quando fenômenos climáticos de grande escala alteram o regime de chuvas sobre a bacia, o impacto repercute da copa das árvores ao leito dos rios.",
                research: [
                    "Segundo materiais informativos do Instituto Nacional de Pesquisas Espaciais (INPE) e a nota técnica conjunta elaborada pelo INPE, INMET, Funceme e CENSIPAM (que apontou alta probabilidade de configuração do fenômeno El Niño no segundo semestre de 2026), o aquecimento anômalo das águas superficiais do Oceano Pacífico Equatorial modifica a circulação atmosférica tropical. Esse deslocamento das correntes ascendentes e descendentes de ar costuma inibir a formação de nuvens de chuva sobre parte das regiões Norte e Nordeste.",
                    "Os órgãos científicos ressaltam, contudo, que esses impactos não são automáticos nem uniformes em todos os municípios: a severidade e a distribuição espacial das estiagens dependem da intensidade do fenômeno, da combinação com anomalias de temperatura no Oceano Atlântico Tropical e das características locais de cada sub-bacia hidrográfica."
                ],
                regionalRelation: [
                    "Quando episódios severos de déficit de precipitação se confirmam na Região Norte, a descida acentuada do nível dos rios expõe bancos de areia e pedrais, interrompendo a navegação de barcos de linha e voadeiras que levam alimentos, água potável e atendimento médico a comunidades ribeirinhas e indígenas.",
                    "A redução do volume hídrico e o aumento da temperatura da água em lagos de várzea afetam a oxigenação e a reprodução dos peixes, base alimentar da população nortista. Paralelamente, o ar mais seco e quente reduz a umidade da floresta, tornando áreas próximas a frentes de desmatamento e pastagens altamente vulneráveis à propagação do fogo."
                ],
                impacts: [
                    "Oportunidades: uso dos boletins climáticos sazonais e alertas antecipados do INPE, INMET e CENSIPAM para planejar o abastecimento de comunidades isoladas, posicionar brigadas de prevenção a incêndios e fortalecer a conservação florestal como barreira natural contra extremos climáticos.",
                    "Desafios: enfrentar os impactos das queimadas sobre a qualidade do ar e a saúde respiratória nas cidades e aldeias, garantir segurança hídrica e alimentar durante vazantes extremas e conter a degradação florestal que retroalimenta o aquecimento regional."
                ],
                sources: [
                    {
                        institution: "INPE — Instituto Nacional de Pesquisas Espaciais",
                        title: "O que precisamos saber sobre o El Niño e seus impactos para o Brasil",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/o-que-precisamos-saber-sobre-o-el-nino-e-seus-impactos-para-o-brasil"
                    },
                    {
                        institution: "INPE / INMET / Funceme / CENSIPAM",
                        title: "Nota técnica conjunta aponta alta probabilidade de El Niño no segundo semestre de 2026",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/nota-tecnica-conjunta-aponta-alta-probabilidade-de-el-nino-no-segundo-semestre-de-2026"
                    }
                ]
            }
        }
    },

    nordeste: {
        cadernoLabel: "CADERNO 02 · REGIÃO NORDESTE",
        themes: {
            "energia-limpa": {
                num: "01",
                category: "01 — Energia limpa",
                subtag: "Eólica, Fotovoltaica & Hidrogênio Solar",
                title: "Ventos, Sol e Hidrogênio Solar: A Nova Geografia Energética do Nordeste",
                image: "../assets/img/nordeste/hero_nordeste.webp",
                imageAlt: "Horizonte ensolarado do sertão nordestino",
                imageCaption: "Sertão e Costa Oriental · Potencial Solar e Eólico do Nordeste",
                imageCoord: "06°41′S · 36°39′W",
                intro: "Impulsionado pelos ventos alísios constantes e por uma das mais altas taxas de radiação solar do globo, o Nordeste assumiu papel central na geração elétrica renovável do país e abriga pesquisas científicas de fronteira sobre novos materiais para combustíveis limpos.",
                research: [
                    "Dados divulgados pelo Ministério da Integração e do Desenvolvimento Regional (MIDR) e pela Sudene demonstram como o Fundo de Desenvolvimento do Nordeste (FDNE) tem financiado a expansão da infraestrutura energética no interior. Entre os exemplos documentados estão as unidades III e VI da Central Geradora Eólica Seridó — nos municípios de Parelhas (RN) e Santa Luzia (PB), que receberam R$ 173 milhões do FDNE para operar dez aerogeradores com 45 MW de potência instalada desde janeiro de 2024 — e o Complexo Solar Monte Verde — em Lajes, Jandaíra e Pedro Avelino (RN), em operação desde abril de 2024 com R$ 411 milhões de apoio do fundo e 212 MW distribuídos em quatro usinas fotovoltaicas.",
                    "No campo da inovação científica experimental, o Centro de Tecnologias Estratégicas do Nordeste (CETENE/MCTI), sediado no Recife (PE), em parceria com a UFPE, investiga células solares de perovskita (buscando substituir solventes tóxicos e o chumbo por estanho e bismuto) e desenvolve novos materiais nanoestruturados para a produção sustentável de hidrogênio solar. Nos estudos em células fotoeletroquímicas, nanotubos de dióxido de titânio modificados com nanocristais semicondutores aproveitam a luz solar para promover a quebra da molécula de água e liberar hidrogênio verde em escala laboratorial."
                ],
                regionalRelation: [
                    "A instalação de grandes parques eólicos e solares no semiárido do Rio Grande do Norte, Paraíba, Ceará, Piauí, Bahia e Pernambuco descentraliza a geração elétrica brasileira e leva investimentos a pequenos municípios afastados das metrópoles. Como a operação automatizada das usinas emprega um número reduzido de técnicos permanentes após o término das obras, as contrapartidas sociais exigidas nos financiamentos públicos tornam-se fundamentais para enraizar benefícios duradouros no território.",
                    "Nos projetos apoiados pelo FDNE no Seridó e em Monte Verde, essas ações incluíram instalação de energia solar no hospital municipal de Parelhas, qualificação de trabalhadores e inclusão feminina na construção civil com o SENAI-RN, formação de guias de turismo de base comunitária no Geoparque Seridó (UNESCO), incentivo à agricultura familiar sem agrotóxicos e plantio de 125 mil mudas nativas em 50 hectares."
                ],
                impacts: [
                    "Oportunidades: consolidação do Nordeste como exportador de energia limpa para o Sistema Interligado Nacional, dinamização de pequenos negócios locais durante os canteiros de obras e formação de capital científico próprio em nanotecnologia e hidrogênio verde no CETENE.",
                    "Desafios: garantir que os contratos de arrendamento de terras e o licenciamento de parques eólicos e solares respeitem as comunidades tradicionais, a agricultura familiar e a fauna da Caatinga, além de assegurar financiamento contínuo de longo prazo para que pesquisas experimentais — como o hidrogênio solar fotoeletroquímico e as células de perovskita — avancem dos protótipos de bancada à aplicação industrial."
                ],
                sources: [
                    {
                        institution: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
                        title: "Projetos de energia renovável no Nordeste impulsionam desenvolvimento com apoio do FDNE",
                        url: "https://www.gov.br/mdr/pt-br/noticias/projetos-de-energia-renovavel-no-nordeste-impulsionam-desenvolvimento-com-apoio-do-fdne"
                    },
                    {
                        institution: "CETENE — Centro de Tecnologias Estratégicas do Nordeste (MCTI)",
                        title: "Pesquisas em energia limpa, células solares de perovskita e hidrogênio verde no Nordeste",
                        url: "https://www.gov.br/cetene/pt-br/assuntos/noticias/cetene-de-olho-no-futuro-da-energia-renovavel-com-pesquisa-sobre-celulas-solares-de-perovskita"
                    },
                    {
                        institution: "SBPMat / CETENE & UFPE",
                        title: "Artigo em destaque: Otimizando nanotubos para a produção de hidrogênio verde por fotoeletrocatálise solar",
                        url: "https://www.sbpmat.org.br/pt/artigo-em-destaque-otimizando-nanotubos-para-a-producao-de-hidrogenio-verde/"
                    }
                ]
            },
            "tecnologia-verde": {
                num: "02",
                category: "02 — Tecnologia verde",
                subtag: "Barragens Subterrâneas & Convivência com o Semiárido",
                title: "Água Guardada no Subsolo: Tecnologias Hídricas e Agroecologia na Caatinga",
                image: "../assets/img/nordeste/Cajuzinho_culi.webp",
                imageAlt: "Frutos e produção alimentar adaptada ao Semiárido nordestino",
                imageCaption: "Agroecologia e Convivência com o Semiárido · Interior Nordestino",
                imageCoord: "09°23′S · 40°30′W",
                intro: "No Semiárido brasileiro, onde as chuvas se concentram em poucos meses e a taxa de evaporação anual supera com folga os volumes precipitados, as tecnologias verdes mais eficazes são aquelas que retêm a umidade no solo e dialogam com a ecologia da Caatinga.",
                research: [
                    "Pesquisas desenvolvidas pela Embrapa Semiárido (sediada em Petrolina-PE) em articulação com redes de organizações sociais consolidaram o conjunto de tecnologias hídricas e produtivas voltadas à convivência com o Semiárido. Entre elas destacam-se as barragens subterrâneas, os barreiros-trincheira, as cisternas de enxurrada, o reuso de águas cinzas domésticas para produção de forragem e a irrigação localizada por gotejamento.",
                    "A barragem subterrânea funciona por meio de uma parede impermeável (construída com lona plástica resistente ou argila compactada) escavada transversalmente ao leito de riachos temporários até alcançar a camada rochosa. Ao barrar o escoamento subsuperficial da água da chuva, a estrutura mantém o solo encharcado a montante sem deixar a lâmina d'água exposta ao vento e ao sol intenso."
                ],
                regionalRelation: [
                    "Nas áreas de baixada e vales aluviais do sertão pernambucano, baiano, paraibano, cearense, potiguar, piauiense, sergipano e alagoano, guardar a água nos poros da terra evita a perda por evaporação típica dos açudes rasos abertos e viabiliza o plantio de vazante de feijão, milho, mandioca, hortaliças e fruteiras durante a estação seca.",
                    "Em paralelo, a Biofábrica do CETENE utiliza biotecnologia de cultivo in vitro para produzir mudas sadias de espécies frutíferas e nativas da Caatinga e da Mata Atlântica, fortalecendo arranjos produtivos da agricultura familiar e projetos de recomposição vegetal no Nordeste."
                ],
                impacts: [
                    "Oportunidades: autonomia alimentar e hídrica para famílias agricultoras e comunidades quilombolas, diversificação de cultivos sem uso de agrotóxicos e fortalecimento de bancos comunitários de sementes crioulas.",
                    "Desafios: necessidade de seleção técnica criteriosa dos solos para evitar processos de salinização, manutenção periódica das estruturas de captação e ampliação da assistência técnica rural continuada nos municípios do semiárido."
                ],
                sources: [
                    {
                        institution: "Embrapa Semiárido",
                        title: "Tecnologias de Captação de Água da Chuva, Barragens Subterrâneas e Convivência com o Semiárido",
                        url: "https://www.embrapa.br/semiarido"
                    },
                    {
                        institution: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
                        title: "Políticas de Segurança Hídrica, Programa Água Doce e Revitalização de Bacias",
                        url: "https://www.gov.br/mdr/pt-br/assuntos/seguranca-hidrica"
                    }
                ]
            },
            "residuos-reuso": {
                num: "03",
                category: "03 — Resíduos e reuso",
                subtag: "Redes de Catadores, Consórcios & Economia Circular",
                title: "Do Sertão ao Litoral: Redes de Catadores, Reciclagem e Gestão de Resíduos",
                image: "../assets/img/nordeste/Pelourinho_card.webp",
                imageAlt: "Centro histórico urbano na Região Nordeste",
                imageCaption: "Cidades Históricas, Litoral e Sertão · Gestão de Resíduos no Nordeste",
                imageCoord: "12°58′S · 38°30′W",
                intro: "Das capitais costeiras que recebem milhões de visitantes aos municípios sertanejos de pequeno porte, a gestão de resíduos sólidos no Nordeste atravessa o desafio de superar passivos históricos de descarte inadequado por meio de consórcios regionais e inclusão socioeconômica de catadores.",
                research: [
                    "Os diagnósticos reunidos pelo Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR) mostram que, embora a cobertura de coleta urbana no Nordeste tenha avançado, a região ainda apresenta índices de coleta seletiva formal abaixo da média nacional e concentra grande número de municípios que necessitam de soluções consorciadas para substituir lixões por aterros sanitários e centrais de triagem.",
                    "Iniciativas regionais documentadas pelo Ministério da Integração e do Desenvolvimento Regional (MIDR) evidenciam o impacto positivo do apoio direto à cadeia da reciclagem: no interior do Rio Grande do Norte, por exemplo, contrapartidas de projetos apoiados pelo FDNE fortaleceram a rede de catadores Recicla Seridó com entrega de equipamentos e capacitação, além de mobilizarem 12 mil estudantes em 12 municípios na campanha RN+Limpo para educação ambiental e recolhimento de resíduos eletrônicos."
                ],
                regionalRelation: [
                    "Na faixa litorânea dos nove estados nordestinos, a coleta seletiva e a redução do lixo plástico têm relação direta com a preservação de manguezais, estuários, dunas e recifes de corais, berçários da pesca artesanal e do turismo cultural.",
                    "Já na agroindústria e no comércio urbano, ganham espaço pesquisas sobre o reaproveitamento de cascas de coco-verde para fabricação de vasos e mantas de contenção de encostas, bem como o uso de óleo de fritura reciclado e resíduos agropecuários estudados pelo CETENE para síntese de biocombustíveis."
                ],
                impacts: [
                    "Oportunidades: geração de trabalho e renda para cooperativas de catadores, redução de custos municipais por meio de consórcios públicos de manejo de resíduos sólidos e transformação de resíduos orgânicos de feiras livres em composto para a agricultura urbana e periurbana.",
                    "Desafios: garantir sustentabilidade financeira para a operação de aterros sanitários em municípios pequenos, ampliar a separação domiciliar entre resíduos secos e úmidos e estruturar a logística reversa no interior."
                ],
                sources: [
                    {
                        institution: "SINIR — Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos",
                        title: "Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos — Painéis e Planos",
                        url: "https://sinir.gov.br/"
                    },
                    {
                        institution: "Ministério da Integração e do Desenvolvimento Regional (MIDR)",
                        title: "Apoio à rede de catadores Recicla Seridó e educação ambiental em projetos do FDNE",
                        url: "https://www.gov.br/mdr/pt-br/noticias/projetos-de-energia-renovavel-no-nordeste-impulsionam-desenvolvimento-com-apoio-do-fdne"
                    }
                ]
            },
            "clima-territorio": {
                num: "04",
                category: "04 — Clima e território",
                subtag: "El Niño, Regime de Chuvas & Caatinga",
                title: "O Pulso da Caatinga: El Niño, Irregularidade Pluviométrica e Resiliência Hídrica",
                image: "../assets/img/nordeste/Baião_culi.webp",
                imageAlt: "Grãos de feijão-de-corda e cultura alimentar do sertão nordestino",
                imageCaption: "Cultivos de Sequeiro e Clima Semiárido · Região Nordeste",
                imageCoord: "07°13′S · 39°18′W",
                intro: "Único bioma exclusivamente brasileiro, a Caatinga desenvolveu ao longo de milênios mecanismos botânicos notáveis para atravessar a estiagem e florescer às primeiras chuvas. Contudo, anomalias climáticas globais e pressões de uso do solo exigem vigilância permanente sobre os recursos hídricos regionais.",
                research: [
                    "De acordo com o Instituto Nacional de Pesquisas Espaciais (INPE) e a nota técnica conjunta emitida pelo INPE, INMET, Funceme e CENSIPAM (que apontou probabilidade superior a 95% de consolidação do El Niño no segundo semestre de 2026), o aquecimento das águas superficiais do Pacífico Equatorial altera a circulação atmosférica de grande escala, aumentando a subsidência (movimento descendente do ar) sobre o norte e o nordeste da América do Sul, o que tende a inibir a formação de nuvens chuvosas.",
                    "Os meteorologistas destacam que os efeitos do El Niño no Nordeste não ocorrem de modo uniforme em todos os estados ou municípios: o volume real da quadra chuvosa depende fortemente da configuração térmica do Oceano Atlântico Tropical (o chamado Dipolo do Atlântico), que influencia o posicionamento da Zona de Convergência Intertropical (ZCIT), principal sistema gerador de chuvas no norte da região."
                ],
                regionalRelation: [
                    "Quando episódios de El Niño coincidem com condições desfavoráveis no Atlântico, o sertão e o agreste podem registrar redução expressiva nas precipitações, veranicos prolongados e temperaturas elevadas, reduzindo a recarga de açudes e barragens e impactando a agricultura familiar de sequeiro — baseada no milho, no feijão-de-corda e na mandioca — e a pecuária caprina e bovina.",
                    "Além disso, em áreas onde a vegetação nativa da Caatinga foi suprimida de maneira desordenada, a combinação de secas severas e chuvas concentradas intensifica a erosão superficial e agrava os núcleos de susceptibilidade à desertificação."
                ],
                impacts: [
                    "Oportunidades: integração entre os boletins de monitoramento climático da Funceme, INPE e INMET, a gestão dos reservatórios e eixos do Rio São Francisco e os programas de recomposição florestal da Caatinga para proteger o solo e as nascentes.",
                    "Desafios: mitigar as perdas agrícolas em anos de estiagem severa, ampliar o acesso à água potável e de produção em comunidades rurais difusas e frear o desmatamento ilegal da vegetação xerófila."
                ],
                sources: [
                    {
                        institution: "INPE — Instituto Nacional de Pesquisas Espaciais",
                        title: "O que precisamos saber sobre o El Niño e seus impactos para o Brasil",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/o-que-precisamos-saber-sobre-o-el-nino-e-seus-impactos-para-o-brasil"
                    },
                    {
                        institution: "INPE / INMET / Funceme / CENSIPAM",
                        title: "Nota técnica conjunta aponta alta probabilidade de El Niño no segundo semestre de 2026",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/nota-tecnica-conjunta-aponta-alta-probabilidade-de-el-nino-no-segundo-semestre-de-2026"
                    }
                ]
            }
        }
    },

    "centro-oeste": {
        cadernoLabel: "CADERNO 03 · REGIÃO CENTRO-OESTE",
        themes: {
            "energia-limpa": {
                num: "01",
                category: "01 — Energia limpa",
                subtag: "Solar, Hidrelétrica & Biomassa do Campo",
                title: "Sol do Planalto, Águas e Biomassa: A Matriz Energética do Coração do País",
                image: "../assets/img/centro_oeste/boiadeira_card.webp",
                imageAlt: "Horizonte aberto do Planalto Central e campos do Centro-Oeste",
                imageCaption: "Planalto Central & Bacias Hidrográficas · Matriz Renovável",
                imageCoord: "15°47′S · 47°52′W",
                intro: "Berço de rios que correm para três das maiores bacias hidrográficas da América do Sul e banhado por intensa insolação nos meses secos, o Centro-Oeste articula geração hidrelétrica, expansão solar fotovoltaica e bioenergia derivada das cadeias agroindustriais.",
                research: [
                    "Levantamentos do Balanço Energético Nacional da Empresa de Pesquisa Energética (EPE) e estudos da Embrapa Agroenergia evidenciam o crescimento expressivo da região em duas frentes complementares à hidroeletricidade: a geração distribuída solar fotovoltaica (tanto em centros urbanos como Brasília, Goiânia, Cuiabá e Campo Grande quanto em propriedades rurais) e a cogeração de bioeletricidade e biocombustíveis a partir da biomassa da cana-de-açúcar, do milho e de resíduos florestais e agropecuários em Goiás, Mato Grosso e Mato Grosso do Sul.",
                    "A sazonalidade climática do Cerrado favorece a complementaridade energética: durante o período seco entre maio e setembro, quando a vazão dos rios diminui nos reservatórios hidrelétricos, o céu aberto sem nebulosidade eleva o rendimento dos painéis fotovoltaicos e coincide com o auge da colheita e moagem da biomassa sucroenergética."
                ],
                regionalRelation: [
                    "Nas fazendas e agroindústrias do Planalto Central, a geração própria de energia limpa alimenta pivôs de irrigação, unidades de secagem e armazenamento de grãos e sistemas de climatização na avicultura e suinocultura, reduzindo perdas de transmissão em áreas distantes dos grandes centros urbanos.",
                    "Ao mesmo tempo, a relação entre energia e território exige cautela especial na bacia do Alto Paraguai: estudos hidrológicos e ambientais alertam que a instalação de múltiplas Pequenas Centrais Hidrelétricas (PCHs) nos rios que descem do planalto em direção à planície pantaneira precisa ser rigorosamente avaliada para não alterar o pulso natural das cheias nem reter os sedimentos e nutrientes que sustentam a pesca e a biodiversidade do Pantanal."
                ],
                impacts: [
                    "Oportunidades: aproveitamento energético de resíduos agrícolas na própria região produtora, descentralização da oferta elétrica via energia solar e fortalecimento da transição para biocombustíveis de baixa emissão de carbono.",
                    "Desafios: compatibilizar a expansão hidrelétrica e de linhas de transmissão com a proteção integral das nascentes do Cerrado e do regime hidrológico do Pantanal, além de modernizar as redes rurais de distribuição."
                ],
                sources: [
                    {
                        institution: "EPE — Empresa de Pesquisa Energética",
                        title: "Balanço Energético Nacional (BEN) e Estudos de Bioenergia e Geração Distribuída",
                        url: "https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-ben"
                    },
                    {
                        institution: "Embrapa Agroenergia",
                        title: "Pesquisa, Desenvolvimento e Inovação em Biomassa, Biocombustíveis e Bioenergia",
                        url: "https://www.embrapa.br/agroenergia"
                    }
                ]
            },
            "tecnologia-verde": {
                num: "02",
                category: "02 — Tecnologia verde",
                subtag: "Agricultura de Precisão, Sensores & Irrigação",
                title: "Sensores, Drones e Irrigação Inteligente: Ciência para Poupar Água e Solo no Cerrado",
                image: "../assets/img/centro_oeste/cristalina.jpg",
                imageAlt: "Águas cristalinas e vegetação preservada no Centro-Oeste",
                imageCaption: "Mananciais do Centro-Oeste & Manejo Sustentável da Água",
                imageCoord: "21°07′S · 56°28′W",
                intro: "Nas chapadas do Centro-Oeste, onde a produção agropecuária em larga escala divide o território com as cabeceiras de águas vitais para o continente, o uso de sensores, imagens orbitais e manejo biológico busca elevar a eficiência do uso da água e recuperar solos degradados.",
                research: [
                    "Pesquisas conduzidas pela Embrapa Cerrados (Planaltina-DF), Embrapa Arroz e Feijão (Santo Antônio de Goiás-GO) e pela rede de Agricultura Digital da Embrapa integram ferramentas de agricultura de precisão — como mapeamento detalhado da fertilidade do solo por zonas de manejo, monitoramento de lavouras por drones e satélites e aplicação localizada de corretivos e bioinsumos — com tecnologias de irrigação inteligente.",
                    "Para evitar o uso excessivo de recursos hídricos em sistemas de pivô central durante a estação seca do Cerrado, softwares de manejo da irrigação desenvolvidos pela Embrapa cruzam dados de estações meteorológicas automáticas, sensores de umidade do solo e coeficientes de evapotranspiração da planta, indicando ao produtor o momento exato e a lâmina de água estritamente necessária."
                ],
                regionalRelation: [
                    "Por abrigar as áreas de recarga dos aquíferos Guarani, Urucuia e Bambuí e as nascentes que formam as bacias Amazônica, Tocantins-Araguaia, São Francisco e Platina, o Cerrado é conhecido como a 'caixa-d'água do Brasil'. O desperdício hídrico ou a compactação do solo comprometem diretamente a infiltração da água da chuva que mantém os rios perenes na estiagem.",
                    "Associadas ao Sistema Plantio Direto na palhada e à Integração Lavoura-Pecuária-Floresta (ILPF), essas tecnologias permitem recuperar pastagens degradadas em Goiás, Mato Grosso e Mato Grosso do Sul, mantendo o solo coberto, reduzindo a temperatura superficial da terra e aumentando o estoque de carbono orgânico."
                ],
                impacts: [
                    "Oportunidades: redução significativa do consumo de água e de energia elétrica na agricultura irrigada, diminuição do uso de insumos químicos por meio de aplicação em taxa variável e controle biológico, e conservação de remanescentes nativos.",
                    "Desafios: democratizar o acesso a sensores, conectividade rural e assistência técnica para pequenos e médios produtores familiares e coibir a captação irregular de água em bacias hidrográficas sob estresse hídrico."
                ],
                sources: [
                    {
                        institution: "Embrapa Cerrados",
                        title: "Manejo de Irrigação, Conservação de Água e Solo e Sistemas Sustentáveis no Cerrado",
                        url: "https://www.embrapa.br/cerrados"
                    },
                    {
                        institution: "Embrapa",
                        title: "Portfólio e Tema de Pesquisa: Agricultura de Precisão e Digital",
                        url: "https://www.embrapa.br/tema-agricultura-de-precisao"
                    }
                ]
            },
            "residuos-reuso": {
                num: "03",
                category: "03 — Resíduos e reuso",
                subtag: "Biodigestores Rurais & Gestão Urbana",
                title: "Do Dejeto ao Biogás e ao Adubo: Economia Circular no Campo e nas Cidades",
                image: "../assets/img/centro_oeste/Arroz_pequi_culi.webp",
                imageAlt: "Frutos do Cerrado e produção alimentar regional",
                imageCaption: "Ciclo de Nutrientes, Agroindústria e Reaproveitamento no Cerrado",
                imageCoord: "16°40′S · 49°15′W",
                intro: "Da intensa produção de proteína animal e grãos no interior ao crescimento acelerado das áreas metropolitanas de Brasília, Goiânia, Cuiabá e Campo Grande, o reaproveitamento de resíduos orgânicos e recicláveis tornou-se estratégico para proteger os mananciais do Planalto Central.",
                research: [
                    "No setor agropecuário, estudos técnicos difundidos pela Embrapa demonstram a eficácia dos biodigestores anaeróbios para o tratamento do grande volume de dejetos gerados pela suinocultura e pelos confinamentos bovinos no Centro-Oeste. Dentro da câmara impermeável do biodigestor, a fermentação bacteriana sem oxigênio converte a carga orgânica poluente em biogás (utilizado para gerar energia elétrica e térmica na própria fazenda) e em biofertilizante líquido e sólido rico em nitrogênio, fósforo e potássio.",
                    "No âmbito urbano, o Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR) registra que a região possui alta taxa de cobertura de coleta domiciliar (próxima a 95%), mas ainda enfrenta o desafio de substituir áreas de disposição inadequada em municípios do interior e de ampliar a triagem seletiva e a compostagem."
                ],
                regionalRelation: [
                    "Em polos agroindustriais como Rio Verde (GO), Lucas do Rio Verde (MT) e Dourados (MS), integrar os biodigestores à fertirrigação planejada de lavouras e pastagens fecha o ciclo de nutrientes dentro da propriedade, evitando a contaminação de córregos e lençóis freáticos e reduzindo a dependência de fertilizantes minerais importados.",
                    "Paralelamente, a logística reversa de embalagens vazias de defensivos agrícolas e o fortalecimento de cooperativas de catadores e catadoras de materiais recicláveis e de frutos nativos (como o aproveitamento integral da casca do pequi e do baru) articulam conservação ambiental e geração de renda."
                ],
                impacts: [
                    "Oportunidades: abatimento de emissões de metano na pecuária intensiva, geração de biofertilizantes para solos do Cerrado e expansão de consórcios intermunicipais para gestão compartilhada de resíduos sólidos urbanos.",
                    "Desafios: custo de implantação e manutenção operacional de sistemas de biodigestão para produtores menores e necessidade de ampliar a coleta seletiva porta a porta e os pátios de compostagem municipal nas cidades da região."
                ],
                sources: [
                    {
                        institution: "SINIR — Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos",
                        title: "Painéis Nacionais de Gestão de Resíduos Sólidos e Logística Reversa",
                        url: "https://sinir.gov.br/"
                    },
                    {
                        institution: "Embrapa Suínos e Aves / Embrapa Cerrados",
                        title: "Tecnologias de Biodigestão, Tratamento de Dejetos e Uso Agronômico de Biofertilizantes",
                        url: "https://www.embrapa.br/suinos-e-aves"
                    }
                ]
            },
            "clima-territorio": {
                num: "04",
                category: "04 — Clima e território",
                subtag: "Secas, Ondas de Calor & Risco de Incêndios",
                title: "O Ciclo da Seca e do Fogo: Extremos Climáticos no Cerrado e no Pantanal",
                image: "../assets/img/centro_oeste/hero_centro_oeste.webp",
                imageAlt: "Paisagem alagada e vegetação do Pantanal no Centro-Oeste",
                imageCaption: "Planície Pantaneira e Bacia do Alto Paraguai · Equilíbrio Hídrico",
                imageCoord: "17°40′S · 57°20′W",
                intro: "Regido pelo contraste natural entre a estação chuvosa de verão e a longa estiagem de inverno, o Centro-Oeste vê seus dois grandes biomas — o Cerrado e o Pantanal — sob crescente pressão quando ondas de calor extremo, atrasos nas chuvas e ação humana ampliam o risco de secas e grandes incêndios.",
                research: [
                    "De acordo com publicações técnicas do Instituto Nacional de Pesquisas Espaciais (INPE) e notas conjuntas com o INMET sobre o fenômeno El Niño — incluindo os alertas sobre a alta probabilidade de atuação do evento no segundo semestre de 2026 —, a fase quente do Pacífico Equatorial costuma favorecer temperaturas acentuadamente acima da média histórica e maior irregularidade na distribuição das chuvas de primavera e verão no Centro-Oeste.",
                    "Embora os impactos não atinjam todos os municípios de maneira idêntica, a persistência de bloqueios atmosféricos e ondas de calor reduz drasticamente a umidade relativa do ar e resseca a biomassa vegetal acumulada, criando condições meteorológicas críticas para a propagação rápida do fogo monitorada pelos satélites do Programa Queimadas do INPE."
                ],
                regionalRelation: [
                    "No Pantanal, o pulso anual de inundação depende das chuvas que caem nas terras altas do Cerrado, onde nascem o Rio Paraguai e seus afluentes (como o Cuiabá, o São Lourenço, o Taquari e o Miranda). Quando chove menos nas cabeceiras, a cheia pantaneira encolhe, lagoas secam e camadas profundas de matéria orgânica (turfa e serapilheira) ficam expostas a incêndios severos que ameaçam a fauna silvestre — como a onça-pintada, a anta e o tuiuiú — e as comunidades tradicionais ribeirinhas.",
                    "No Cerrado, ainda que muitas espécies arbóreas possuam adaptações evolutivas ao fogo natural da estação chuvosa, os incêndios antrópicos recorrentes no auge da seca atingem matas de galeria e veredas de buritis sensíveis às chamas, comprometendo a proteção das nascentes."
                ],
                impacts: [
                    "Oportunidades: adoção do Manejo Integrado do Fogo (MIF) — que realiza queimas prescritas preventivas em épocas úmidas com base no conhecimento tradicional e científico para reduzir o combustível seco — e uso do monitoramento orbital em tempo real do INPE para resposta rápida de brigadas.",
                    "Desafios: conter o uso ilegal do fogo para limpeza de áreas, restaurar matas ciliares e cabeceiras degradadas no Planalto e adaptar a gestão hídrica e agropecuária à maior frequência de ondas de calor."
                ],
                sources: [
                    {
                        institution: "INPE — Instituto Nacional de Pesquisas Espaciais",
                        title: "O que precisamos saber sobre o El Niño e seus impactos para o Brasil",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/o-que-precisamos-saber-sobre-o-el-nino-e-seus-impactos-para-o-brasil"
                    },
                    {
                        institution: "INPE — Programa Queimadas",
                        title: "Portal de Monitoramento Orbital de Focos Ativos e Risco de Fogo no Cerrado e no Pantanal",
                        url: "https://terrabrasilis.dpi.inpe.br/queimadas/portal/"
                    }
                ]
            }
        }
    },

    sudeste: {
        cadernoLabel: "CADERNO 04 · REGIÃO SUDESTE",
        themes: {
            "energia-limpa": {
                num: "01",
                category: "01 — Energia limpa",
                subtag: "Geração Distribuída, Fotovoltaica & Bioenergia",
                title: "Tetos Solares e Bioenergia: A Diversificação da Matriz no Eixo Urbano-Industrial",
                image: "../assets/img/sudeste/hero_sudeste.webp",
                imageAlt: "Serras e relevo montanhoso da Região Sudeste ao amanhecer",
                imageCaption: "Serras de Minas e Vale do Paraíba · Transição Energética no Sudeste",
                imageCoord: "22°25′S · 44°58′W",
                intro: "Maior centro consumidor de eletricidade do país, o Sudeste construiu sua industrialização sobre as grandes usinas hidrelétricas das bacias do Grande, Paranaíba, Paraná e Paraíba do Sul, mas hoje lidera uma rápida descentralização energética baseada no sol e na biomassa.",
                research: [
                    "Dados oficiais da Empresa de Pesquisa Energética (EPE) e da Agência Nacional de Energia Elétrica (ANEEL) apontam que São Paulo e Minas Gerais figuram no topo nacional da geração solar fotovoltaica distribuída — instalada em telhados residenciais, galpões industriais, comércios e propriedades rurais —, além de abrigarem grandes parques solares centralizados no Norte de Minas e no Triângulo Mineiro.",
                    "Complementando a energia solar e hídrica, o interior paulista e mineiro responde pela maior parcela nacional da produção de etanol e da bioeletricidade gerada a partir da queima do bagaço e da palha da cana-de-açúcar, enquanto grandes aterros sanitários metropolitanos do Rio de Janeiro e de São Paulo convertem o biogás da decomposição de resíduos urbanos em energia elétrica."
                ],
                regionalRelation: [
                    "Aproximar a geração elétrica dos locais onde vivem mais de 84 milhões de pessoas reduz as perdas técnicas nas extensas linhas de transmissão e ajuda a preservar o nível dos reservatórios hidrelétricos do subsistema Sudeste/Centro-Oeste durante os meses secos de outono e inverno.",
                    "Das cooperativas cafeeiras do Sul de Minas e da serra capixaba aos polos tecnológicos do interior paulista e fluminense, a geração solar compartilhada tem permitido reduzir custos operacionais para pequenas empresas, escolas públicas e produtores rurais."
                ],
                impacts: [
                    "Oportunidades: geração de milhares de empregos técnicos na cadeia de instalação e manutenção fotovoltaica, aproveitamento energético de resíduos sucroenergéticos e urbanos e maior segurança hídrico-energética nos períodos de estiagem.",
                    "Desafios: modernizar as redes de distribuição das concessionárias para gerenciar o fluxo bidirecional de energia solar, reforçar a resiliência da rede elétrica frente a tempestades severas e ordenar a ocupação do solo de grandes usinas solares em áreas rurais."
                ],
                sources: [
                    {
                        institution: "EPE — Empresa de Pesquisa Energética",
                        title: "Balanço Energético Nacional (BEN) e Estudos de Expansão da Geração",
                        url: "https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-ben"
                    },
                    {
                        institution: "ANEEL — Agência Nacional de Energia Elétrica",
                        title: "Sistema de Informações de Geração da ANEEL (SIGA) e Geração Distribuída",
                        url: "https://www.gov.br/aneel/pt-br/centrais-de-conteudos/relatorios-e-indicadores/geracao"
                    }
                ]
            },
            "tecnologia-verde": {
                num: "02",
                category: "02 — Tecnologia verde",
                subtag: "Restauração Florestal, Bioinsumos & Sensores",
                title: "Restauração da Mata Atlântica, Sensores Ambientais e Agricultura de Baixo Carbono",
                image: "../assets/img/sudeste/fandango_caicara.jpg",
                imageAlt: "Comunidade tradicional e vegetação da Mata Atlântica no Sudeste",
                imageCaption: "Mata Atlântica e Comunidades Tradicionais · Conservação e Ciência",
                imageCoord: "24°42′S · 47°33′W",
                intro: "Onde a urbanização intensa e séculos de ciclos econômicos fragmentaram a cobertura vegetal original, a ciência ambiental no Sudeste desenvolve tecnologias para restaurar mananciais da Mata Atlântica, monitorar a qualidade da água e substituir insumos químicos por soluções biológicas.",
                research: [
                    "Unidades científicas de referência nacional sediadas na região — como a Embrapa Meio Ambiente (Jaguariúna-SP), a Embrapa Instrumentação (São Carlos-SP) e a Embrapa Solos (Rio de Janeiro-RJ) — lideram pesquisas em bioinsumos agrícolas (fungos e bactérias benéficos para controle biológico e fixação de nutrientes), sensores ópticos e eletroquímicos para detecção de poluentes hídricos e metodologias de restauração ecológica e zoneamento agroecológico.",
                    "Em paralelo, programas estaduais e municipais de Pagamento por Serviços Ambientais (PSA) e restauração florestal utilizam geotecnologias e seleção de espécies nativas para recompor matas ciliares e áreas de recarga hídrica nas serras da Mantiqueira, do Mar, da Canastra e do Caparaó."
                ],
                regionalRelation: [
                    "A segurança hídrica das regiões metropolitanas de São Paulo, Rio de Janeiro, Belo Horizonte, Grande Vitória e Campinas depende diretamente das chamadas 'florestas produtoras de água'. As raízes da Mata Atlântica e dos campos de altitude funcionam como esponjas naturais que infiltram a água das chuvas de verão no lençol freático e evitam a erosão das encostas montanhosas.",
                    "Na cafeicultura mineira e capixaba, nos cinturões hortifrutigranjeiros fluminenses e paulistas e nas comunidades caiçaras do Vale do Ribeira e da Costa Verde, o manejo agroecológico e os sistemas agroflorestais aliam conservação da biodiversidade e produção de alimentos limpos."
                ],
                impacts: [
                    "Oportunidades: recuperação de nascentes e bacias hidrográficas críticas (como as dos rios Paraíba do Sul, Doce, Piracicaba-Capivari-Jundiaí e Velhas), redução do uso de agrotóxicos próximo a mananciais e valorização de produtos de origem sustentável.",
                    "Desafios: alto custo de restauração florestal em terrenos íngremes dominados por gramíneas exóticas, pressão da especulação imobiliária sobre áreas verdes periurbanas e controle da poluição industrial e doméstica nos rios metropolitanos."
                ],
                sources: [
                    {
                        institution: "Embrapa Meio Ambiente",
                        title: "Pesquisas em Bioinsumos, Sustentabilidade Ambiental e Recuperação de Ecossistemas",
                        url: "https://www.embrapa.br/meio-ambiente"
                    },
                    {
                        institution: "Embrapa Solos",
                        title: "Levantamento, Conservação do Solo e da Água e Zoneamento Agroecológico",
                        url: "https://www.embrapa.br/solos"
                    }
                ]
            },
            "residuos-reuso": {
                num: "03",
                category: "03 — Resíduos e reuso",
                subtag: "Economia Circular Urbana & Cooperativas",
                title: "A Escala da Metrópole: Economia Circular, Triagem e Recuperação de Materiais",
                image: "../assets/img/sudeste/sp_card.webp",
                imageAlt: "Paisagem metropolitana densa na Região Sudeste",
                imageCaption: "Eixo Metropolitano do Sudeste · Gestão de Resíduos Urbanos e Reciclagem",
                imageCoord: "23°33′S · 46°38′W",
                intro: "Concentrando mais de quatro décimos da população brasileira e o maior parque industrial e comercial do país, o Sudeste gera diariamente dezenas de milhares de toneladas de resíduos sólidos urbanos, tornando a reciclagem, a compostagem e a logística reversa imperativos ambientais e econômicos.",
                research: [
                    "Segundo os relatórios nacionais do Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR) e inventários estaduais como os da Companhia Ambiental do Estado de São Paulo (CETESB), o Sudeste apresenta a maior cobertura de coleta regular de resíduos do Brasil (superior a 98%) e a maior proporção de disposição final em aterros sanitários licenciados.",
                    "A região também concentra a maior rede de indústrias recicladoras do país (papel, alumínio, plásticos, vidro e aço), centrais mecanizadas e cooperativas de catadores, além de iniciativas de pátios públicos de compostagem que transformam restos de feiras livres e podas de árvores urbanas em composto orgânico para parques e agricultura periurbana."
                ],
                regionalRelation: [
                    "Nas manchas urbanas conurbadas da Grande São Paulo, do Grande Rio, da Região Metropolitana de Belo Horizonte e da Grande Vitória, a escassez de áreas disponíveis para novos aterros sanitários obriga os municípios a transportarem rejeitos por distâncias cada vez maiores, elevando custos públicos e emissões de carbono no transporte.",
                    "Por isso, o trabalho das cooperativas de catadores, os pontos de entrega voluntária (ecopontos) para resíduos da construção civil e volumosos e os sistemas de logística reversa de embalagens e eletroeletrônicos são vitais para evitar o assoreamento de galerias pluviais, rios urbanos e baías costeiras como a de Guanabara e a de Santos."
                ],
                impacts: [
                    "Oportunidades: fortalecimento da economia circular industrial, geração de renda formal para milhares de catadores cooperativados, desvio de resíduos orgânicos dos aterros via compostagem e aproveitamento de biogás.",
                    "Desafios: elevar o percentual efetivo de separação domiciliar entre resíduos secos e orgânicos nas grandes cidades, combater pontos viciados de descarte irregular de entulho e apoiar municípios de pequeno porte no interior mineiro, fluminense, capixaba e paulista."
                ],
                sources: [
                    {
                        institution: "SINIR — Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos",
                        title: "Painéis Oficiais de Gestão de Resíduos Sólidos Urbanos e Logística Reversa",
                        url: "https://sinir.gov.br/"
                    },
                    {
                        institution: "CETESB — Companhia Ambiental do Estado de São Paulo",
                        title: "Inventário Estadual de Resíduos Sólidos Urbanos e Monitoramento Ambiental",
                        url: "https://cetesb.sp.gov.br/residuossolidos/"
                    }
                ]
            },
            "clima-territorio": {
                num: "04",
                category: "04 — Clima e território",
                subtag: "Encostas, Recursos Hídricos & Eventos Extremos",
                title: "Entre a Estiagem nos Reservatórios e as Chuvas de Encosta: Riscos Climáticos no Sudeste",
                image: "../assets/img/sudeste/rj_corcovado_card.webp",
                imageAlt: "Relevo montanhoso costeiro e ocupação urbana no Sudeste",
                imageCaption: "Serra do Mar, Maciços Costeiros e Metrópoles · Resiliência Climática",
                imageCoord: "22°57′S · 43°12′W",
                intro: "Do paredão granítico da Serra do Mar às represas que abastecem as megalópoles, a geografia do Sudeste experimenta de modo agudo a dualidade dos extremos climáticos contemporâneos: ora secas e ondas de calor que pressionam os mananciais, ora tempestades concentradas que desafiam encostas e vales urbanos.",
                research: [
                    "Estudos do Instituto Nacional de Pesquisas Espaciais (INPE) sobre o fenômeno El Niño indicam que, na Região Sudeste, o evento costuma associar-se ao predomínio de temperaturas acima da média histórica — favorecendo ondas de calor — e à irregularidade no regime de chuvas. Por estar em uma zona de transição entre os padrões tropicais e subtropicais, o território também é fortemente influenciado pela Zona de Convergência do Atlântico Sul (ZCAS) e pela passagem de sistemas frontais oceânicos.",
                    "Monitoramentos do Centro Nacional de Monitoramento e Alertas de Desastres Naturais (CEMADEN) e da Agência Nacional de Águas e Saneamento Básico (ANA) mostram que a região concentra elevado número de municípios suscetíveis tanto a eventos geo-hidrológicos (deslizamentos de terra e inundações bruscas sob chuvas extremas de verão) quanto a crises de disponibilidade hídrica em anos de precipitação deficitária."
                ],
                regionalRelation: [
                    "Na Região Serrana e Costa Verde fluminense, no Litoral Norte paulista, na Zona da Mata e Região Metropolitana de Minas Gerais e no sul e serra do Espírito Santo, a ocupação histórica de encostas íngremes e fundos de vale agrava o impacto de episódios de chuva extrema em poucas horas.",
                    "Já nos grandes centros urbanos impermeabilizados pelo asfalto, o efeito de ilha de calor intensifica as tempestades convectivas e os alagamentos, enquanto períodos prolongados de estiagem exigem gestão integrada de sistemas produtores estratégicos como o Cantareira, o Paraíba do Sul e o Guandu."
                ],
                impacts: [
                    "Oportunidades: expansão das redes de radares meteorológicos, pluviômetros automáticos e alertas antecipados do CEMADEN e das Defesas Civis, adoção de soluções baseadas na natureza (parques lineares, jardins de chuva e reflorestamento de encostas) e gestão integrada de bacias hidrográficas pela ANA.",
                    "Desafios: reduzir a vulnerabilidade habitacional em áreas de risco geológico nas periferias metropolitanas, ampliar a permeabilidade do solo urbano e preparar a infraestrutura de água e energia para oscilações térmicas e pluviométricas extremas."
                ],
                sources: [
                    {
                        institution: "INPE — Instituto Nacional de Pesquisas Espaciais",
                        title: "O que precisamos saber sobre o El Niño e seus impactos para o Brasil",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/o-que-precisamos-saber-sobre-o-el-nino-e-seus-impactos-para-o-brasil"
                    },
                    {
                        institution: "CEMADEN — Centro Nacional de Monitoramento e Alertas de Desastres Naturais",
                        title: "Monitoramento Geo-Hidrológico, Secas e Alertas de Desastres Naturais",
                        url: "https://www.gov.br/cemaden/pt-br"
                    },
                    {
                        institution: "ANA — Agência Nacional de Águas e Saneamento Básico",
                        title: "Monitoramento Hidrológico, Conjuntura dos Recursos Hídricos e Segurança Hídrica",
                        url: "https://www.gov.br/ana/pt-br"
                    }
                ]
            }
        }
    },

    sul: {
        cadernoLabel: "CADERNO 05 · REGIÃO SUL",
        themes: {
            "energia-limpa": {
                num: "01",
                category: "01 — Energia limpa",
                subtag: "Hidrelétrica, Fotovoltaica, Biogás & RenovaPR",
                title: "Da Força das Águas ao Biogás e ao Sol no Campo: A Matriz Renovável do Sul",
                image: "../assets/img/sul/cataratas_card.webp",
                imageAlt: "Águas caudalosas na bacia do Rio Iguaçu e Paraná na Região Sul",
                imageCaption: "Bacias do Paraná, Iguaçu e Uruguai · Energia Limpa no Sul",
                imageCoord: "25°41′S · 54°26′W",
                intro: "Conhecido mundialmente pela potência hidrelétrica das águas dos rios Paraná, Iguaçu e Uruguai, o Sul do Brasil vem protagonizando uma segunda revolução energética silenciosa: a geração distribuída de eletricidade solar e de biogás dentro das pequenas e médias propriedades rurais.",
                research: [
                    "Uma das políticas públicas regionais mais expressivas documentadas nesse segmento é o Programa Paraná Energia Rural Renovável (RenovaPR), coordenado pela Secretaria da Agricultura e do Abastecimento (SEAB) em conjunto com o Instituto de Desenvolvimento Rural do Paraná (IDR-Paraná). O programa apoia a instalação de sistemas de geração distribuída a partir de fontes renováveis — com destaque para a energia solar fotovoltaica e o biogás/biometano — em unidades produtivas rurais, oferecendo suporte técnico extensionista e subvenção econômica para equalizar ou zerar taxas de juros em linhas de financiamento rural.",
                    "De forma convergente, nos três estados sulistas (Paraná, Santa Catarina e Rio Grande do Sul), dados da Empresa de Pesquisa Energética (EPE) apontam a rápida adesão de cooperativas agroindustriais e agricultores familiares à geração fotovoltaica e ao aproveitamento energético da biomassa florestal e agropecuária."
                ],
                regionalRelation: [
                    "A paisagem rural do Sul caracteriza-se pela forte presença da agricultura familiar integrada a cooperativas de avicultura, suinocultura, bovinocultura de leite, fumicultura, fruticultura e grãos. Essas atividades demandam energia elétrica ininterrupta para resfriadores de leite, ordenhadeiras, ventilação e aquecimento de aviários, silos e agroindústrias coloniais.",
                    "Ao produzir a própria eletricidade nos telhados dos galpões ou a partir dos resíduos da propriedade, o produtor rural reduz drasticamente o custo da tarifa elétrica e conquista maior segurança produtiva diante de quedas na rede rural."
                ],
                impacts: [
                    "Oportunidades: fortalecimento da renda e da permanência dos jovens na agricultura familiar, descentralização da matriz elétrica estadual e aproveitamento da estrutura cooperativista sulista para difundir energias renováveis.",
                    "Desafios: necessidade de reforço e ampliação das redes elétricas trifásicas no meio rural para escoar a geração distribuída, manutenção dos equipamentos frente a tempestades severas e continuidade das linhas de crédito subvencionado."
                ],
                sources: [
                    {
                        institution: "Secretaria da Agricultura e do Abastecimento do Paraná (SEAB) / IDR-Paraná",
                        title: "Programa Paraná Energia Rural Renovável — RenovaPR",
                        url: "https://www.agricultura.pr.gov.br/Pagina/Parana-Energia-Rural-Renovavel"
                    },
                    {
                        institution: "EPE — Empresa de Pesquisa Energética",
                        title: "Balanço Energético Nacional (BEN) e Estudos de Geração Distribuída e Biogás",
                        url: "https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-ben"
                    }
                ]
            },
            "tecnologia-verde": {
                num: "02",
                category: "02 — Tecnologia verde",
                subtag: "Biodigestores, Biometano & Agropecuária",
                title: "Biodigestores e Saneamento Produtivo: Quando a Agropecuária Gera Energia e Adubo",
                image: "../assets/img/sul/Vinícolas_card.webp",
                imageAlt: "Paisagem agrícola e vitivinicultura nas serras da Região Sul",
                imageCaption: "Produção Rural Integrada e Tecnologias Ambientais · Região Sul",
                imageCoord: "29°10′S · 51°31′W",
                intro: "No oeste do Paraná, no oeste de Santa Catarina e no norte do Rio Grande do Sul — regiões que concentram a maior densidade de criação de suínos e aves do país —, a pesquisa agropecuária desenvolveu soluções tecnológicas para transformar dejetos animais em biogás, biometano e fertilizantes orgânicos.",
                research: [
                    "Pesquisas conduzidas há décadas pela Embrapa Suínos e Aves (sediada em Concórdia, SC), em articulação com centros tecnológicos e órgãos de extensão rural como o IDR-Paraná e a Epagri, aperfeiçoaram sistemas de biodigestão anaeróbia, compostagem automatizada e tratamento de efluentes adaptados ao clima subtropical do Sul.",
                    "Nos biodigestores, os dejetos passam por fermentação bacteriana em ambiente vedado sem oxigênio. O processo captura o biogás — evitando que o metano seja lançado diretamente na atmosfera — e permite sua conversão em energia elétrica, energia térmica ou biometano purificado (combustível veicular equivalente ao gás natural), enquanto o efluente estabilizado torna-se um biofertilizante seguro para o solo."
                ],
                regionalRelation: [
                    "Em regiões de relevo acidentado e vales fluviais densamente ocupados por pequenas propriedades rurais no Sul, o excesso de dejetos sem tratamento adequado representava historicamente grave risco de contaminação de nascentes, poços e rios das bacias do Uruguai, Iguaçu e Paraná.",
                    "A criação de condomínios de agroenergia e redes coletivas de biogás permite que propriedades vizinhas enviem seus efluentes a unidades compartilhadas de processamento, utilizando a energia térmica gerada para aquecer aviários e pocilgas durante os dias gelados do inverno sulista."
                ],
                impacts: [
                    "Oportunidades: proteção da qualidade da água nas bacias hidrográficas rurais, substituição do diesel e do GLP por biometano e biogás nas propriedades e cooperativas, e reciclagem de nutrientes (fósforo e nitrogênio) nas lavouras.",
                    "Desafios: viabilizar modelos associativos ou equipamentos de menor custo para pequenos produtores individuais e manter o controle técnico rigoroso da dosagem de biofertilizantes de acordo com a capacidade de absorção do solo."
                ],
                sources: [
                    {
                        institution: "Embrapa Suínos e Aves",
                        title: "Tecnologias Ambientais para Tratamento de Dejetos, Biodigestores e Produção de Biogás",
                        url: "https://www.embrapa.br/suinos-e-aves"
                    },
                    {
                        institution: "Governo do Estado do Paraná — SEAB / IDR-Paraná",
                        title: "Incentivo ao Biogás e Biometano no Programa Paraná Energia Rural Renovável (RenovaPR)",
                        url: "https://www.agricultura.pr.gov.br/Pagina/Parana-Energia-Rural-Renovavel"
                    }
                ]
            },
            "residuos-reuso": {
                num: "03",
                category: "03 — Resíduos e reuso",
                subtag: "Coleta Seletiva, Reciclagem & Compostagem",
                title: "Coleta Seletiva, Compostagem e Educação Ambiental nas Cidades Sulistas",
                image: "../assets/img/sul/cucas_alemas_culi.webp",
                imageAlt: "Culinária tradicional e ingredientes coloniais da Região Sul",
                imageCaption: "Cultura Comunitária, Feiras e Valorização de Resíduos Orgânicos · Sul",
                imageCoord: "27°35′S · 48°32′W",
                intro: "Com histórico pioneiro na implantação de programas municipais de separação de lixo desde o fim da década de 1980, a Região Sul apresenta os maiores índices proporcionais de municípios com coleta seletiva no Brasil e avança na compostagem de resíduos orgânicos.",
                research: [
                    "Segundo os levantamentos reunidos pelo Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR), o Sul registra cobertura quase universal de coleta regular urbana (entre 97% e 98%) e lidera proporcionalmente em presença de iniciativas municipais de coleta seletiva e associação com cooperativas e associações de catadores.",
                    "Além da reciclagem de materiais secos (papel, plástico, metal e vidro), políticas públicas alinhadas ao Plano Nacional de Resíduos Sólidos (Planares/MMA) e experiências municipais de destaque — como os programas históricos de separação em Curitiba (PR) e os pátios comunitários e municipais de compostagem em Florianópolis (SC) — focam na valorização da fração orgânica, que representa cerca de metade do peso dos resíduos domiciliares."
                ],
                regionalRelation: [
                    "Tanto nas capitais quanto nas cidades médias do Vale do Itajaí, do Norte do Paraná e da Serra Gaúcha, a integração entre coleta seletiva, feiras agroecológicas e agroindústrias locais permite reaproveitar cascas, restos vegetais, podas urbanas e subprodutos regionais — como o bagaço da uva das vinícolas serranas e resíduos da indústria ervateira e arrozeira — na produção de adubo orgânico e substratos.",
                    "A educação ambiental comunitária mostra-se igualmente decisiva nas zonas costeiras de Santa Catarina, do Paraná e do Rio Grande do Sul para proteger restingas, lagoas costeiras e áreas de pesca artesanal da poluição por resíduos plásticos."
                ],
                impacts: [
                    "Oportunidades: aumento da vida útil dos aterros sanitários, redução das emissões de gás metano na decomposição de resíduos úmidos, fortalecimento das cooperativas de triagem e produção de composto para hortas escolares e agricultura urbana.",
                    "Desafios: ampliar a taxa real de recuperação de recicláveis frente ao crescimento do consumo de embalagens descartáveis, estender a coleta seletiva às comunidades rurais e reconstruir infraestruturas de saneamento e triagem em municípios atingidos por enchentes."
                ],
                sources: [
                    {
                        institution: "SINIR — Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos",
                        title: "Painéis e Indicadores Nacionais sobre Coleta Seletiva, Reciclagem e Destinação Final",
                        url: "https://sinir.gov.br/"
                    },
                    {
                        institution: "Ministério do Meio Ambiente e Mudança do Clima (MMA)",
                        title: "Plano Nacional de Resíduos Sólidos (Planares) e Estratégias de Compostagem",
                        url: "https://www.gov.br/mma/pt-br/assuntos/meio-ambiente-urbano-recursos-hidricos-qualidade-ambiental/residuos-solidos"
                    }
                ]
            },
            "clima-territorio": {
                num: "04",
                category: "04 — Clima e território",
                subtag: "El Niño, Chuvas Intensas & Prevenção de Enchentes",
                title: "O Regime das Águas no Sul: El Niño, Chuvas Intensas e Prevenção de Enchentes",
                image: "../assets/img/sul/chimarrao_card.webp",
                imageAlt: "Campos e paisagem rural do Sul do Brasil",
                imageCaption: "Bacias Subtropicais, Campos Sulinos e Adaptação Climática",
                imageCoord: "29°40′S · 53°42′W",
                intro: "Ao contrário do Norte e do Nordeste — onde o fenômeno El Niño costuma inibir as chuvas —, a Região Sul sente a fase quente do Pacífico por meio do aumento expressivo da precipitação e da frequência de tempestades severas, exigindo preparo permanente de suas cidades e bacias hidrográficas.",
                research: [
                    "De acordo com o Instituto Nacional de Pesquisas Espaciais (INPE) e a nota técnica conjunta emitida pelo INPE, INMET, Funceme e CENSIPAM (que apontou alta probabilidade de configuração do El Niño no segundo semestre de 2026), o aquecimento anômalo do Pacífico Equatorial intensifica o jato subtropical de ventos em altitude e o transporte de umidade da Amazônia em direção ao Sul do Brasil.",
                    "Esse padrão atmosférico favorece a formação de sistemas convectivos persistentes e bloqueia a passagem rápida das frentes frias, resultando na tendência de volumes de chuva muito acima da média histórica — especialmente nos meses de primavera e início do verão. Os institutos ressaltam que a localização exata e a severidade dos eventos extremos dependem também da temperatura do Oceano Atlântico Sul e do relevo de cada bacia."
                ],
                regionalRelation: [
                    "Em bacias hidrográficas de vales encaixados e rios de resposta rápida — como os vales do Taquari, Caí, Sinos, Pardo, Jacuí e Lagoa dos Patos no Rio Grande do Sul, o Vale do Itajaí e o Rio Tubarão em Santa Catarina e a bacia do Iguaçu e litoral do Paraná —, episódios sucessivos de chuva torrencial provocam cheias repentinas, enxurradas, inundações urbanas e deslizamentos de encostas.",
                    "No meio rural, embora anos sem El Niño (como em fases de La Niña) costumem trazer estiagens severas para as lavouras de verão no Sul, o excesso de chuvas nos períodos de El Niño prejudica a colheita de culturas de inverno (como o trigo), favorece doenças fúngicas nos parreirais e pomares e acelera a erosão hídrica dos solos agrícolas."
                ],
                impacts: [
                    "Oportunidades: fortalecimento dos sistemas integrados de alerta meteorológico e hidrológico (INPE, INMET, CEMADEN e Defesas Civis), conservação e restauração de matas ciliares, banhados e campos nativos do Pampa e da Mata de Araucárias (que retêm água e amortecem o pico das cheias) e adoção de práticas conservacionistas de solo no campo.",
                    "Desafios: revisar planos diretores urbanos e diretrizes de habitação em planícies de inundação e encostas instáveis, modernizar sistemas de drenagem e contenção de cheias e apoiar a adaptação climática da infraestrutura municipal e rural."
                ],
                sources: [
                    {
                        institution: "INPE — Instituto Nacional de Pesquisas Espaciais",
                        title: "O que precisamos saber sobre o El Niño e seus impactos para o Brasil",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/o-que-precisamos-saber-sobre-o-el-nino-e-seus-impactos-para-o-brasil"
                    },
                    {
                        institution: "INPE / INMET / Funceme / CENSIPAM",
                        title: "Nota técnica conjunta aponta alta probabilidade de El Niño no segundo semestre de 2026",
                        url: "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/nota-tecnica-conjunta-aponta-alta-probabilidade-de-el-nino-no-segundo-semestre-de-2026"
                    }
                ]
            }
        }
    }
};

function initSustentabilidadeDossier() {
    const backdrop = document.getElementById('env-dossier-modal');
    if (!backdrop) return;

    const modalCard = backdrop.querySelector('.env-dossier-modal-card');
    const catPillEl = document.getElementById('env-modal-cat-pill');
    const regionTagEl = document.getElementById('env-modal-region-tag');
    const kickerEl = document.getElementById('env-modal-kicker');
    const titleEl = document.getElementById('env-modal-title');
    const leadEl = document.getElementById('env-modal-lead');
    const figureEl = document.getElementById('env-modal-figure');
    const imgEl = document.getElementById('env-modal-img');
    const captionTextEl = document.getElementById('env-modal-caption-text');
    const captionCoordEl = document.getElementById('env-modal-caption-coord');
    const researchContainer = document.getElementById('env-modal-research');
    const regionalContainer = document.getElementById('env-modal-regional');
    const impactsContainer = document.getElementById('env-modal-impacts');
    const sourcesListEl = document.getElementById('env-modal-sources-list');
    const scrollArea = backdrop.querySelector('.env-modal-scroll-area');
    const closeButtons = backdrop.querySelectorAll('[data-env-modal-close]');

    const secPesquisa = researchContainer ? researchContainer.closest('.env-modal-block') : null;
    const secTerritorio = regionalContainer ? regionalContainer.closest('.env-modal-block') : null;
    const secImpactos = impactsContainer ? impactsContainer.closest('.env-modal-block') : null;
    const secFontes = backdrop.querySelector('.env-modal-sources-box');
    const sectionsGrid = backdrop.querySelector('.env-modal-sections-grid');

    let setModalChapter = null;

    // Injetar barra de navegação por capítulos no modal (Nível 2 = exploração guiada; Nível 3 = aprofundamento e fontes)
    if (sectionsGrid && !backdrop.querySelector('.env-modal-tabs-bar')) {
        const tabsBar = document.createElement('div');
        tabsBar.className = 'env-modal-tabs-bar';
        tabsBar.setAttribute('role', 'tablist');
        tabsBar.setAttribute('aria-label', 'Capítulos da reportagem');

        const tabsDef = [
            { id: 'pesquisa', label: '01 · Pesquisa', nextLabel: 'Próximo: 02 · Relação com o Território →' },
            { id: 'territorio', label: '02 · Território', nextLabel: 'Próximo: 03 · Impactos & Futuro →' },
            { id: 'impactos', label: '03 · Impactos', nextLabel: 'Próximo: Fontes Consultadas →' },
            { id: 'fontes', label: 'Fontes Oficiais', nextLabel: 'Exibir dossiê completo (todos os capítulos) →' },
            { id: 'all', label: 'Ler tudo', isAll: true, nextLabel: '← Voltar à leitura por capítulos (01 · Pesquisa)' }
        ];

        const labelSpan = document.createElement('span');
        labelSpan.className = 'env-modal-tabs-label';
        labelSpan.textContent = 'Capítulos:';
        tabsBar.appendChild(labelSpan);

        const tabBtns = [];
        tabsDef.forEach(def => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = def.isAll ? 'env-modal-tab-btn env-modal-tab-all' : 'env-modal-tab-btn';
            btn.setAttribute('role', 'tab');
            btn.dataset.envTab = def.id;
            btn.textContent = def.label;
            tabsBar.appendChild(btn);
            tabBtns.push(btn);
        });

        sectionsGrid.parentNode.insertBefore(tabsBar, sectionsGrid);

        const stepNav = document.createElement('div');
        stepNav.className = 'env-modal-step-nav';
        const nextChapterBtn = document.createElement('button');
        nextChapterBtn.type = 'button';
        nextChapterBtn.className = 'env-modal-next-chapter-btn';
        stepNav.appendChild(nextChapterBtn);

        if (secFontes) {
            secFontes.insertAdjacentElement('afterend', stepNav);
        } else {
            sectionsGrid.insertAdjacentElement('afterend', stepNav);
        }

        let currentTab = 'pesquisa';

        setModalChapter = function (tabId) {
            currentTab = tabId;
            tabBtns.forEach(b => {
                const active = b.dataset.envTab === tabId;
                b.classList.toggle('is-active', active);
                b.setAttribute('aria-selected', active ? 'true' : 'false');
            });

            const showAll = tabId === 'all';
            if (secPesquisa) secPesquisa.classList.toggle('env-modal-chapter-hidden', !showAll && tabId !== 'pesquisa');
            if (secTerritorio) secTerritorio.classList.toggle('env-modal-chapter-hidden', !showAll && tabId !== 'territorio');
            if (secImpactos) secImpactos.classList.toggle('env-modal-chapter-hidden', !showAll && tabId !== 'impactos');
            if (secFontes) secFontes.classList.toggle('env-modal-chapter-hidden', !showAll && tabId !== 'fontes');

            const currentDef = tabsDef.find(d => d.id === tabId);
            if (currentDef) {
                nextChapterBtn.textContent = currentDef.nextLabel;
            }
        };

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                setModalChapter(btn.dataset.envTab);
            });
        });

        nextChapterBtn.addEventListener('click', () => {
            if (currentTab === 'pesquisa') setModalChapter('territorio');
            else if (currentTab === 'territorio') setModalChapter('impactos');
            else if (currentTab === 'impactos') setModalChapter('fontes');
            else if (currentTab === 'fontes') setModalChapter('all');
            else setModalChapter('pesquisa');

            if (tabsBar && scrollArea) {
                tabsBar.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    let lastFocusedTrigger = null;

    function renderParagraphs(container, paragraphs) {
        if (!container) return;
        container.innerHTML = (paragraphs || [])
            .map(p => `<p class="modal-text-block">${p}</p>`)
            .join('');
    }

    function openEnvModal(regionKey, themeKey, triggerEl) {
        const regData = SUSTENTABILIDADE_DOSSIER_DATA[regionKey];
        if (!regData || !regData.themes || !regData.themes[themeKey]) return;

        const item = regData.themes[themeKey];
        lastFocusedTrigger = triggerEl || document.activeElement;

        if (catPillEl) catPillEl.textContent = item.category;
        if (regionTagEl) regionTagEl.textContent = regData.cadernoLabel;
        if (kickerEl) kickerEl.textContent = `${item.category} · ${item.subtag}`;
        if (titleEl) titleEl.textContent = item.title;
        if (leadEl) leadEl.textContent = item.intro;

        if (item.image && figureEl && imgEl) {
            imgEl.src = item.image;
            imgEl.alt = item.imageAlt || item.title;
            if (captionTextEl) captionTextEl.textContent = item.imageCaption || item.subtag;
            if (captionCoordEl) captionCoordEl.textContent = item.imageCoord || '';
            figureEl.style.display = 'block';
        } else if (figureEl) {
            figureEl.style.display = 'none';
        }

        renderParagraphs(researchContainer, item.research);
        renderParagraphs(regionalContainer, item.regionalRelation);
        renderParagraphs(impactsContainer, item.impacts);

        if (sourcesListEl) {
            sourcesListEl.innerHTML = (item.sources || []).map(src => `
                <li class="env-source-item">
                    <span class="env-source-inst">${src.institution}</span>
                    <span class="env-source-work">${src.title}</span>
                    <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="env-source-link">
                        <span>Consultar conteúdo original</span>
                        <span aria-hidden="true">↗</span>
                    </a>
                </li>
            `).join('');
        }

        if (typeof setModalChapter === 'function') {
            setModalChapter('pesquisa');
        }

        backdrop.classList.add('open');
        backdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        if (scrollArea) {
            scrollArea.scrollTop = 0;
        }

        const primaryCloseBtn = backdrop.querySelector('.env-modal-close-btn');
        if (primaryCloseBtn) {
            setTimeout(() => primaryCloseBtn.focus(), 30);
        }
    }

    function closeEnvModal() {
        if (!backdrop.classList.contains('open')) return;
        backdrop.classList.remove('open');
        backdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
            lastFocusedTrigger.focus();
            lastFocusedTrigger = null;
        }
    }

    // Vincular botões das 4 matérias editoriais
    const themeTriggers = document.querySelectorAll('.env-editorial-row[data-env-theme]');
    themeTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const regionKey = btn.getAttribute('data-env-region');
            const themeKey = btn.getAttribute('data-env-theme');
            openEnvModal(regionKey, themeKey, btn);
        });
    });

    // Botões de fechar
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeEnvModal();
        });
    });

    // Fechar ao clicar fora do conteúdo interno (no backdrop)
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            closeEnvModal();
        }
    });

    // Impedir propagação indevida de cliques dentro do card do modal
    if (modalCard) {
        modalCard.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Fechar com Escape e manter ciclo de foco (Focus Trap) acessível por teclado
    document.addEventListener('keydown', (e) => {
        if (!backdrop.classList.contains('open')) return;

        if (e.key === 'Escape') {
            e.preventDefault();
            closeEnvModal();
            return;
        }

        if (e.key === 'Tab' && modalCard) {
            const focusableSelectors = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';
            const focusableEls = Array.from(modalCard.querySelectorAll(focusableSelectors))
                .filter(el => el.offsetParent !== null);

            if (focusableEls.length === 0) return;

            const firstEl = focusableEls[0];
            const lastEl = focusableEls[focusableEls.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstEl || !modalCard.contains(document.activeElement)) {
                    e.preventDefault();
                    lastEl.focus();
                }
            } else {
                if (document.activeElement === lastEl || !modalCard.contains(document.activeElement)) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSustentabilidadeDossier);
} else {
    initSustentabilidadeDossier();
}
