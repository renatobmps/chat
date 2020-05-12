chat = [
    {
        periodo: `Scripts Iniciais`,
        categoria: [
            {
                nome: `Solicitação de dados`,
                scripts: [
                    {
                        id: "analista",
                        input: [
                            `${analista.nome}`,
                        ],
                        titulo: `Abertura de Sessão`,
                        texto: `Olá, agradeço por contatar o suporte técnico Dell. Meu nome é ${analista.nome}. Por favor, informe o nome do titular da compra, 2 Telefones com DDD. Está com o equipamento em mãos?`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Solicitar Service TAG`,
                        texto: `Por favor, poderia informar a Etiqueta de Serviço da máquina em falha? O código pode ser localizado em uma etiqueta colada no equipamento, junto ao Código de Serviço Expresso, e possui 7 dígitos.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Solicitar Express Service Code`,
                        texto: `A etiqueta de serviço não confere, por favor verifique se está correta ou forneça o express service code. Ele fica ao lado da service TAG, composto apenas de números e possui 11 dígitos.`,
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Tag Divergente`,
                        texto: `Por favor, poderia confirmar a Etiqueta de Serviço da máquina em falha? Possui 7 caracteres entre letras e números, e pode ser localizado em uma etiqueta colada no equipamento.`,
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Clientes com Múltiplas Tags`,
                        texto: `Nessa situação, é possível seguirmos com o reparo dos equipamentos pelo suporte via e-mail. A vantagem do suporte por e-mail é que o você não precisa aguardar em linha até concluirmos todas as aberturas de chamado. Darei continuidade no atendimento de 1 TAG, para as demais, por favor entre em contato via email no seguinte endereço: br_techsupport@dell.com. Eles o responderão em até 4 horas.`,
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Script de endereço (Pessoa física)`,
                        texto: `A fim de garantir máxima eficiência e velocidade na resolução do seu problema, antes de iniciarmos os testes, pode por favor me confirmar alguns dados? Preciso das informações do endereço onde se encontra o seu equipamento Dell, como rua, número, complemento (se houver), bairro, cidade, estado e CEP.
                        Preciso também do seu CPF e data de nascimento. Assim, caso haja necessidade de um chamado técnico eu já tenho seus dados em mãos.`,
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Script de endereço (Pessoa Jurídica)`,
                        texto: `A fim de garantir máxima eficiência e velocidade na resolução do seu problema, antes de iniciarmos os testes, pode por favor me confirmar alguns dados? Preciso das informações do endereço onde se encontra o seu equipamento Dell, como rua, número, complemento (se houver), bairro, cidade, estado e CEP.
                        Preciso também do CNPJ e Inscrição Estadual da empresa. Assim, caso haja necessidade de um chamado técnico eu já tenho seus dados em mãos.`,
                    },
                ]
            },
            {
                nome: `Continuidade`,
                scripts: [
                    {
                        id: "",
                        input: [
                            `${cliente.telefone}`,
                        ],
                        titulo: `Queda de sessão`,
                        texto: `Vamos dar início nos testes para solucionar o problema da máquina. Caso a sessão caia, peço que NÃO retorne ao chat, eu retornarei no telefone ${cliente.telefone}, se eu não conseguir o contato, irei te encaminhar um e-mail e ficarei no aguardo da sua resposta.`
                    },
                    {
                        id: "",
                        input: [
                            `${cliente.email}`,
                        ],
                        titulo: `Ownership`,
                        texto: `Durante todos os procedimentos eu serei o responsável do seu caso, caso haja dúvidas ou deseje informações é só responder o e-mail que te enviei no endereço ${cliente.email}. Poderia confirmar o recebimento?`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Script de BTTR`,
                        texto: `Me informe uma janela de horário (2 horas) em que possua disponibilidade para o nosso contato via telefone, se necessário, ou caso não tenha disponibilidade para nos atender devido serviço, estudo e etc, vamos te enviar um link de acesso remoto, assim conseguimos acessar sua máquina na sua presença e dar continuidade ao suporte.`
                    },
                    {
                        id: "",
                        input: [
                            `${analista.entrada}`,
                            `${analista.saida}`
                        ],
                        titulo: `Retorno Via e-mail (Cliente)`,
                        texto: `Se possível de preferência das ${analista.entrada} até às ${analista.saida} que é o meu horário de trabalho. Acompanhe sempre sua caixa de entrada, pois as atualizações sobre o seu caso se dará principalmente por e-mail ou SMS.`
                    },
                ]
            },
            {
                nome: `Não irá continuar`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `Transferência`,
                        texto: `Agradeço pelas informações. Verifiquei no sistema que sua garantia é atendida por outro setor. Irei transferir, mas peço que aguarde e quando aparecer a opção "Sair desta página", clique para a sessão ser transferida para o próximo agente. Agradecemos o contato.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Cliente sem maquina`,
                        texto: `Bom, neste caso precisamos que entre em contato com a máquina em mãos para realizarmos os testes. Reforço que nosso atendimento é de segunda a sexta-feira das 08:00 as 20:00.`
                    }
                ]
            }
        ]
    },
    {
        periodo: `Troubleshootings`,
        categoria: [
            {
                nome: `Templates`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `Templates de escalações`,
                        texto: `<a href="templates.html" target="_blank"><button><i class="material-icons">dashboard</i>Clique aqui</button></a>`
                    }
                ]
            },
            {
                nome: `Acesso remoto`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `Acesso remoto I`,
                        texto: `Posso realizar um acesso remoto em seu equipamento, para efetuar algumas configurações? Neste período o (a) Sr. (a) deve permanecer próximo ao equipamento.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Acesso remoto II`,
                        texto: `Informo que durante o acesso remoto é possível visualizar tudo o que estiver em sua tela. Dessa forma, orientamos que feche documentos pessoais, bem como acesso a sites de banco, e-mail e redes sociais.`
                    },
                ]
            },
            {
                nome: `Testes`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `Drenagem de energia`,
                        texto: `Retire todos os periféricos conectados ao equipamentos, bateria e carregador. Pressione o botão Power por 40 segundos, após isso, conecte somente o carregador e ligue o equipamento.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `EPSA (F12)`,
                        texto: `Iremos rodar o teste EPSA, que verifica o hardware do seu equipamento DELL.
                        Ligue o computador pressionando a tecla F12 repetidamente (quando aparece o logo da Dell). Escolha a opção DIAGNOSTICS. Quando aparecer o teste de LCD sua tela ficaré colorida, caso esteja visualizando as cores corretamente, aperte a tecla Y para continuar o teste. Caso ocorra algum erro, o equipamento apresentara um código seguido de beeps. Se ocorrer, me informe o código de erro e o validation.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `EPSA (FN+POWER)`,
                        texto: `Iremos rodar o teste EPSA, que verifica o hardware do seu equipamento DELL.
                        Com o equipamento desligado, mantenha a Tecla FN pressionada e ligue o equipamento.
                        Quando aparecer o teste de LCD sua tela ficará colorida, caso esteja visualizando as cores corretamente, aperte a tecla Y para continuar o teste. Caso ocorra algum erro, o equipamento apresentara um código seguido de beeps. Se ocorrer, me informe o código de erro e o validation.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `LCD BIST`,
                        texto: `Os notebooks Dell têm uma ferramenta de diagnóstico integrada que ajuda a determinar se a anormalidade na tela é um problema inerente à LCD (tela) do notebook Dell. 
                        Pressione e mantenha pressionada a tecla D e ligue o equipamento para entrar no modo Teste Automático Integrado (BIST) do LCD.
                        A tela exibirá várias barras coloridas e alterará as cores na tela inteira para vermelho, verde e azul.
                        Me informe se nesse teste , você vê alguma anormalidade na tela, Tire uma foto e me encaminhe para análise.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Solicitar PPID`,
                        texto: `Por favor, poderia informar o número serial da peça? O serial esté em uma etiqueta (branca ou preta) colada na própria peça com um código de 23 dígitos começando por 2 letras e seguido de um 0. Normalmente inicia com MY, TH, BR ou CN e termina com A00, A01.`
                    }
                ]
            },
            {
                nome: `DPS`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `Abertura de Break Fix sem diagnostico`,
                        texto: `Levando em conta suas informações, estou abrindo o chamado técnico, mas não garanto que teremos assertividade na resolução do problema relatado. Pode ser que o caso não seja resolvido no primeiro chamado e o técnico terá que analisar o equipamento por completo, fazendo com que a máquina fique parada por um período maior.`
                    },
                    {
                        id: "",
                        input: [
                            `${atendimento.dps}`,
                            `${atendimento.eticket}`
                        ],
                        titulo: `Chamado RTD - MIS`,
                        texto: `Agradeço por aguardar, o número do chamado é ${atendimento.dps}. O equipamento deve ser postado em uma Agencia dos Correios utilizando a Autorização de Postagem ${atendimento.eticket}. O prazo para entregar o equipamento é de 7 dias a partir de hoje. Peço que tome nota de alguns procedimentos que deve tomar antes de postar a máquina nos Correios:
                        - Efetue o backup de seus dados antes de entregar o equipamento
                        - Devem ser enviados junto com a máquina, os CDs que foram recebidos (Sistema Operacional, Mídia de Restauração, Drivers, Softwares, etc.)
                        - Deve ser enviado o Username e Senha do Windows ou removê-la.
                        - Deve ser enviado o Adaptador AC e a Bateria, mesmo se eles não apresentarem problemas.
                        - Cópia da nota fiscal.
                        - Deve usar a caixa original. Se você não possuir a caixa original, poderá comprar uma nos Correios e condicionar o equipamento de forma correta, para evitar danos físicos no envio. A caixa deve permanecer aberta para inspeção visual antes de ser enviado.`
                    },
                    {
                        id: "",
                        input: [
                            `${atendimento.dps}`,
                            `${atendimento.cis}`
                        ],
                        titulo: `Chamado RTD - CIS`,
                        texto: `Agradeço por aguardar, o número do chamado é ${atendimento.dps}. O equipamento deverá ser levado para a prestadora PROXXI no endereço: ${atendimento.cis}.
                        Peço que tome nota de alguns procedimentos que deve tomar antes de levar a máquina:
                        - Efetue o backup de seus dados antes de entregar o equipamento
                        - Devem ser enviados junto com a máquina, os CDs que foram recebidos (Sistema Operacional, Mádia de Restauração, Drivers, Softwares, etc.)
                        - Deve ser enviado o Username e Senha do Windows ou removê-la.
                        - Deve ser enviado o Adaptador AC e a Bateria, mesmo se eles não apresentarem problemas.
                        - Cópia da nota fiscal.`
                    }
                ]
            }
        ]
    },
    {
        periodo: `Scripts de encerramento`,
        categoria: [
            {
                nome: `Padrão de encerramento`,
                scripts: [
                    {
                        id: "",
                        input: [
                            `${cliente.telefone}`
                        ],
                        titulo: `Queda de sessão`,
                        texto: `Vamos dar início nos testes para solucionar o problema da máquina. Caso a sessão caia, peço que NÃO retorne ao chat, eu retornarei no telefone ${cliente.telefone}, se eu não conseguir o contato, irei te encaminhar um e-mail e ficarei no aguardo da sua resposta.`
                    },
                    {
                        id: "",
                        input: [
                            `${analista.entrada}`,
                            `${analista.saida}`
                        ],
                        titulo: `Retorno Via e-mail (Cliente)`,
                        texto: `Se possível de preferência das ${analista.entrada} até às ${analista.saida} que é o meu horário de trabalho. Acompanhe sempre sua caixa de entrada, pois as atualizações sobre o seu caso se dará principalmente por e-mail ou SMS.`
                    },
                    {
                        id: "",
                        input: [
                            `${cliente.email}`
                        ],
                        titulo: `Ownership`,
                        texto: `Durante todos os procedimentos eu serei o responsável do seu caso, caso haja dúvidas ou deseje informações é só responder o e-mail que te enviei no endereço ${cliente.email}. Poderia confirmar o recebimento?`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Encerramento de Sessão`,
                        texto: 'A Dell agradece, tenha um ótimo dia.\n\nDell drivers e downloads: http://www.dell.com/support/home/br/pt/brbsdt1?~ck=mn\nCanal da Dell no youtube: https://www.youtube.com/user/DellVlog\nCommunity Forums: https://www.dell.com/community/Comunidade-da-Dell/ct-p/Portuguese\nSupportAssist: https://www.dell.com/support/contents/br/pt/brbsdt1/article/product-support/self-support-knowledgebase/software-and-downloads/supportassist'
                    }
                ]
            },
            {
                nome: `Cliente inativo`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `3 minutos sem resposta`,
                        texto: `A fim de garantir a qualidade deste atendimento, necessito que tenhamos interação em nossa conversação. Caso persista o elevado tempo de resposta, essa sessão será finalizada por inatividade.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Sem inicio de Sondagem e depois de 1 Minuto sem resposta`,
                        texto: `Como não temos a sua resposta, estamos encerrando essa sessão.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Com inicio de Sondagem e depois de 1 Minuto sem resposta`,
                        texto: `Como não temos a sua resposta, estamos encerrando essa sessão. Entrarei em contato no telefone informado na sessão.`
                    }
                ]
            },
            {
                nome: `Outros encerramentos`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `Fechamento Ri1`,
                        texto: `Eu vou te enviar um e-mail encerramento de protocolo, eu fico com o seu caso por 10 dias, se estiver com dificuldades ou alguma dúvida, responde o e-mail que eu te posiciono.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Fora de garantia`,
                        texto: `Prezado cliente, o sistema informa que sua máquina está fora de garantia, contudo pelo chat atendemos exclusivamente máquinas com a garantia vigente. Para que o suporte seja fornecido com mais qualidade, por favor entre em contato via 0800 970 3355 opção 4. Caso sua máquina possua garantia vigente e o nosso sistema esteja desatualizado, por favor informe ao suporte via telefone para atualizações devidas. Lembre-se de estar com sua Nota Fiscal e a máquina em mãos.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `CID (Equipamento sem Accidental Damage (Validar Oracle / solicitar analise L2) - Transferir para OOP)`,
                        texto: `Este equipamento não possui o serviço "Proteção contra danos acidentais" que cobre acidentes como derramamento de líquidos, quedas e oscilações de voltagem, cobrindo os prejuízos de danos não intencionais durante o período da garantia. Nesse caso, irei solicitar que o setor responsável entre em contato para fazer a cotação do serviço.`
                    }
                ]
            },
            {
                nome: `Outros setores`,
                scripts: [
                    {
                        id: "",
                        input: [],
                        titulo: `Social Media`,
                        texto: `Verifiquei que o time de mídias sociais foi acionado e possui um protocolo de atendimento em andamento. Portanto, peço por gentileza que aguarde o contato do responsável para seguir com o caso. De qualquer forma, deixarei registrado no sistema o seu contato para que retornem o mais rápido possível.`
                    },
                    {
                        id: "",
                        input: [],
                        titulo: `Transferência para outro setor`,
                        texto: `Agradeço pelas informações. Verifiquei no sistema que sua garantia é atendida por outro setor. Irei transferir, mas peço que aguarde e quando aparecer a opção "Sair desta página", clique para a sessão ser transferida para o próximo agente. Agradecemos o contato.`
                    }
                ]
            }
        ]
    },
]