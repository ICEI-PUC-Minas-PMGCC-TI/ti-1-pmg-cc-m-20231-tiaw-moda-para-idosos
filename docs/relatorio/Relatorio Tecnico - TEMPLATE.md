# Informações do Projeto
`TÍTULO DO PROJETO`  

Old Fashioned

`CURSO` 

Ciência da Computação

## Participantes

Os membros do grupo são: 
 - Sophia Carrazza Ventorim de Sousa
 - Brenda Cristina Martins Araújo
 - Breno Pires Santos

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

A moda é um dos setores de maior movimentação de capital no mundo, mas quase inteiramente focada no público jovem, com uma grande exclusão da terceira idade nesse meio. Segundo o SPC Brasil (Serviço de Proteção ao Cliente), das 36 milhões de pessoas acima de 60 anos na população brasileira, 34% sente falta dos produtos de moda quando vão às compras. Dessa forma, existe uma relação conflituosa entre os idosos e a atualização nas tendências atuais sobre moda, na qual eles não conseguem procurar ou encontrar roupas condizentes com seu estilo único, personalidade e orçamento, e acabam por se contentar com roupas determinadas padrões da terceira idade e logo têm a autoestima diminuída por não se sentirem representados pelo próprio estilo.



## Objetivos

Objetivo geral: <br>
Visto o problema da inexistência de uma moda orientada para os idosos, o projeto Old Fashioned visa desenvolver um software que auxilia pessoas da terceira idade a escolher e adquirir roupas condizentes com o estilo, personalidade e evento desejado, por meio de um layout que mostra produtos linkados a lojas de acordo com os filtros selecionados (orçamento, coloração pessoal ou cor do próprio produto, personalidade e evento) para fazê-las se sentirem bem com o próprio estilo.

Objetivos específicos: 
 - Tornar mais fácil a busca dos idosos por roupas que condizem com seu estilo e para inspiração de estilo.
 - Deixar a interface e o layout simples e grande para facilitar o entendimento 
 - Criar uma ferramenta de likes para salvar em pastas diferentes criadas pelo usuário.
 - Adicionar quizzes de coloração pessoal e de personalidade básicos para aumentar a efetividade dos filtros.
 - Adicionar layouts que simulem chats para trazer dinamicidade e estímulo.
 - Deixar a proposta final inovadora para ajudar eficientemente o público-alvo.



## Justificativa

A criação do Old Fashioned foi influenciada pela percepção da dificuldade que muitos de nossos avós têm com a moda, seja ao procurar roupas que gostem, seja por pensar em peças que sejam adequadas a eles em determinados eventos. Ao analisarmos o dia a dia e as pesquisas sobre nossa realidade, vimos a importância da criação de um projeto que ajude os idosos a encontrar seu estilo em uma indústria que os exclui e que assume que essa parcela não se importa com sua própria aparência. Uma das grandes necessidades da população idosa, por exemplo, é a modelagem específica, que não é vista nas roupas do mercado. Além disso, um relatório do Sebrae de 2016 apontou que 73% dos consumidores idosos classificam o atendimento no varejo como regular, algo claramente resultante da falta de marketing voltado para esse público, e também da falta de acessibilidade em empresas que não consideram essa parcela ao criar blogs e aplicativos voltados à moda.

Ainda assim, segundo dados da multinacional de painéis de consumo Kantar, famílias de idosos apresentam índices positivos de consumo e gastam mais na compra de todas as categorias quando comparados com a média geral da população. Portanto, é visível que esse é um nicho que não pode mais ser ignorado no mercado. Assim, o projeto auxiliará a parcela sênior da sociedade a escolher e adquirir roupas condizentes com o estilo, tamanho, personalidade e evento desejado, com uma interface acessível e lúdica, já que, independentemente da idade, o importante é se sentir bem com a própria imagem. 




## Público-Alvo

Geral: <br>

Homens e mulheres acima de 60 anos, casados, com filhos e netos e que são aposentados. Moradores tanto da capital quanto do interior, que desejam encontrar uma forma mais fácil de achar ideias de roupas para vestir e comprar de acordo com a moda atual e que, ao mesmo tempo, sejam adequadas para o tamanho e o estilo deles. 

Específico por variáveis:
 - Geográfica: Moram no Brasil, embora pessoas de todos os países consigam utilizar o site, e vivem na zona urbana.

 - Demográfica: Indivíduos com mais de 60 anos (idosos), normalmente casados ou viúvos, com filhos, aposentados e de situação social média.

 - Psicográfica: Possuem um estilo de vida mais calmo, com hábitos saudáveis e interesses em eventos sociais dentro da zona de conforto (encontros de família e de igreja, por exemplo) e em se sentir bem no geral, incluindo sua própria aparência.

 - Comportamental: É um público que vem crescendo muito no meio digital, possui um comportamento facilmente influenciável pela mídia e tem grande potencial de crescer no nicho da moda e-commerce, já que a moda sênior também é emergente no cenário atual. No entanto, os idosos ainda têm grande dificuldade com a falta de acessibilidade e interfaces intuitivas construídas para eles na internet, o que deve ser um fator de mudança no projeto para encaixá-lo corretamente no perfil da terceira idade.


 
# Especificações do Projeto

A seguir encontram-se as personas, empatias e propostas de valor, além de fluxos e histórias de usuários. Em um todo, essa seção é focada na idealização do usuário. 
Para isso, as ferramentas utilizadas para esta construção foram o site Miro, as entrevistas para a criação das personas e do design inteligente, o site Thispersondoesnotexist para a idealização da aparência dos personas, a criação de Google Docs compartilhados para a aglutinação de ideias em um só documento, o site Trello para a organização dessas tarefas no geral e, por fim, diversas pesquisas sobre o assunto da moda para idosos com a finalidade de compreender melhor as dores e os remédios para a realidade do nosso usuário e finalmente criar suas histórias e mapas de empatia e de valor.



## Personas, Empatia e Proposta de Valor

As personas do projeto Old Fashioned são idosos que são amigos desde a infância quando moravam na mesma cidade. Mesmo com muitas semelhanças, como a dificuldade de encontrar roupas que os agradem e estejam de acordo com a moda atual e pensamentos parecidos, cada um possui personalidades bastante distintas uma da outra, e sentem a necessidade de encontrar sua própria imagem distinta por meio do estilo. Assim, Esmeralda, Antônio e Viviane serão muito bem atendidos pelo site Old Fashioned, o qual agrupa os clientes e as lojas de roupas sem afiliações com o site (para ser uma busca imparcial monetariamente).

> - Antônio <br>
![Persona](images/persona1.png)
![Empatia](images/empatia1.png)
![Valor](images/valor1.png)

> - Esmeralda <br>
![Persona](images/persona2.png)
![Empatia](images/empatia2.png)
![Valor](images/valor2.png)

> - Viviane <br>
![Persona](images/persona3.png)
![Empatia](images/empatia3.png)
![Valor](images/valor3.png)




## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... | QUERO/PRECISO ... `FUNCIONALIDADE`                 |PARA ... `MOTIVO/VALOR`                                                                         |
|-----------|----------------------------------------------------|------------------------------------------------------------------------------------------------|
| Antonio   | Comprar roupas esportivas de forma facilitada      | Para conseguir assistir os jogos de futebol utilizando o uniforme dos times favoritos dos netos|
| Esmeralda | Se atualizar nas tendências de moda                | Para se inserir na moda atual.                                                                 |
| Viviane   | Necessito de roupas mais variadas                  | Para poder ter um visual para cada ocasião de sua vida.                                        |
| Esmeralda | Preciso de ajuda na minha indecisão.               | Para diminuir o tempo que eu gasto para me arrumar.                                            |
| Antonio   | Preciso de um menu de fácil entendimento           | Para eu poder navegar mais facilmente pelo site, sem precisar da ajuda dos meus netos.         |
| Viviane   | Gostaria de um filtro para escolher a cor da roupa | O filtro seria importante para eu poder realizar meu sonho de ter uma roupa de cada cor.       |
| Admin     | Poder de abrir chat com qualquer cliente           | Realizar um suporte individualizado                                                            |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário faça uma pesquisa. | ALTA | 
|RF-002| Opção do usuário criar uma conta. | MÉDIA |
|RF-003| Permitir a criação de listas dos produtos favoritos. | BAIXA |
|RF-004| Opção de realização de testes para especificidade da busca. | MÉDIA |
|RF-005| Possibilidade de "dialogar" com o mascote. | BAIXA |
|RF-005| Espaço para avaliação e descrição dos produtos| MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Site responsivo e com design intuitivo e simples. | ALTA | 
|RNF-002| Layout acessível. | ALTA | 
|RNF-003| Banco de dados para armazenar as credenciais dos usuários. | ALTA | 
|RNF-004| Atualizações diárias de produtos novos. | ALTA | 
|RNF-005| Interfaces com características casuais e "íntimas". | MEDIA | 
|RNF-006| Algoritmo para identificar os gostos do cliente e recomendar itens de seu interesse. | ALTA | 
|RNF-007| Páginas informativas sobre o assunto da moda. | BAIXA | 
|RNF-008| Páginas de ajuda e suporte disponíveis em 24 horas. | MEDIA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A sprint deverá ser entregue até o final do dia 16/04.|
|02| Não pode ser desenvolvido um módulo de backend. |
|03| O projeto deve utilizar somente HTML,CSS e JS.  |
|04| A evolução do projeto deve ser acompanhada por várias reuniões . |
|05| O projeto deverá ter a participação de todos os membros envolvidos.  |



# Projeto de Interface

A Interface do Projeto Old Fashioned foi pensada para apresentar um layout que, ao mesmo tempo que é elegante, também é acessível para o usuário idoso. Tornamos a acessibilidade um dos focos principais para a aparência e a funcionalidade do site, com a adição de letras maiores e caixas de texto destacadas que se diferem o bastante ao ponto de separarem cada informação de forma eficaz e de simples entendimento. Além disso, implementamos elementos que deixam o site com um aspecto mais casual e lúdico para combinar com o perfil de usuário, como cores que representam o calor e a alegria, o layout que simula chats de conversação com o mascote para dar um tom de intimidade com o cliente, muitas opções de filtros e especificações para agradar qualquer tipo de gostos e a implementação de páginas de ajuda e de contato para suporte, com tutoriais de como utilizar cada interface do site caso ainda haja dúvidas. Portanto, a Old Fashioned visa um projeto de interface intuitivo e simplificado para todos os clientes.



## User Flow

![UserFlow](images/flowmap.png)



## Wireframes
 
 - Homepage do site com botões para as diversas opções de testes, login e signup, ajuda e suporte, os favoritos salvos e uma página de informações sobre teoria das cores:
 ![Wireframe](images/homepage.png)


 - Inicio do teste para a apresentação das roupas com um chat que simula uma conversação:
 ![Wireframe](images/teste-qual-evento.png)


 - Página em que o usuário seleciona os filtros para deixar o teste de pesquisa mais específico, ainda dentro da conversação:
 ![Wireframe](images/teste-filtros.png)


 - Página de resultado da pesquisa, em que o mascote, na conversação, responde o usuário com as melhores escolhas:
 ![Wireframe](images/teste-resultado.png)


 - Layout da apresentação de uma peça de roupa, com sua descrição (tamanho, textura, materiais), aspectos que fazem essa roupa ser compatível com o usuário e a opção de curti-la:
 ![Wireframe](images/peca.png)


 - Layout da apresentação de uma peça de roupa como o outro, mas com a especificação de que ela já está curtida pelo usuário:
 ![Wireframe](images/peca-curtida.png)


 - Página da resposta de uma busca rápida feita pelo usuário com as opções de vestimentas:
 ![Wireframe](images/pag-busca.png)


 - Página com as pastas de peças de roupas salvas que o usuário já criou de acordo com seu interesse:
 ![Wireframe](images/pastas-curtidas.png)


 - Página com as peças de roupas salvas dentro de uma pasta selecionada:
 ![Wireframe](images/fav1.png)


 - Layout da página de como a conta do usuário será apresentada:
 ![Wireframe](images/minha-conta.png)


 - Página da inserção de dados pelo usuário para a entrada em uma conta já existente no site:
 ![Wireframe](images/login.png)


 - Página da inserção de dados pelo usuário para a criação de uma conta no site, com informações necessárias na hora do teste-busca de roupas (gênero e idade):
 ![Wireframe](images/sign-up.png)


 - Página com elementos de ajuda, acessibilidade, informações e uma caixa para mensagens ao sistema de suporte caso necessário:
 ![Wireframe](images/ajuda.png)


 - Wireframe da página de informações sobre a teoria das cores na moda, com as especificações do que cada uma representa e pode passar aos olhos alheios para auxiliar o usuário na decisão da cor de uma roupa:
 ![Wireframe](images/cor.png)


 - Wireframe da página do teste de personalidade com o link para um teste externo e o reconhecimento desse resultado para especificar e deixar os testes-busca mais eficazes para o usuário:
 ![Wireframe](images/teste-de-personalidade2.png)


 - Link para o protótipo interativo do site:
 [Prototipo Interativo](https://marvelapp.com/prototype/7742bb2)


# Metodologia

A metodologia usada no projeto Old Fashioned, usufruiu de diversas ferramentas de trabalho para o melhor planejamento e funcionamento do site.<br>
Tais quais: <br>

 - Github - Para o repositório do projeto, incluindo a documentação e controle de versão. <br>
 - Trello - Utilizado para a organização e designação de tarefas de cada componente do grupo e o quadro kanban. <br>
 - Miro - O Miro foi utilizado para produzir o processo de Design Thinking, feito em conjunto por meio de reuniões de discussão e análise das entrevistas e pesquisas realizadas. <br>
 - WireframeCC - Tal aplicação foi utilizada para a construção do layout dos wireframes feitos para o projeto. <br>
 - MarvelApp - Foi utilizado para a construção do protótipo interativo, usando a base criada no WireframeCC e também para a realização do userflow. <br>
 - Google Docs - Utilizado para a aglutinação de ideias retiradas de pesquisas e entrevistas em um só documento. <br>
 - Discord - O Discord foi a plataforma utilizada para a realização das reuniões para produção e discussão do projeto. <br>
 - PowerPoint - Para a criação dos slides de apresentação do projeto.
 - SlidesGo - Para a seleção de um template adequado para o powerpoint.



## Divisão de Papéis

[Divisao de Papeis - Link](https://trello.com/b/h3I0xK2p/divis%C3%A3o-de-pap%C3%A9is-tiaw)<br>
![Divisao de Papeis](images/divisao-de-papeis.png)

[Kanban - Link](https://trello.com/b/bItzCrxk/kanban-template-tiaw) <br>
![Kanban](images/kanban-template.png)



## Ferramentas


| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVMU7S6fM=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-moda-para-idosos | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com (criamos uma conta no heroku) | 
|Protótipo Interativo | MavelApp | https://marvelapp.com/prototype/7742bb2 | 




## Controle de Versão

O Controle de Versão foi criado pelo Git.

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

https://www.sebrae.com.br/sites/PortalSebrae/artigos/mercado-da-moda-para-a-terceira-idade-oportunidade-para-empreender,4408a81234761810VgnVCM100000d701210aRCRD

https://elle.com.br/moda/por-que-as-novas-geracoes-estao-obcecadas-com-a-moda-da-terceira-idade

https://jornalismorio.espm.br/destaque/o-setor-da-moda-e-a-exclusao-da-terceira-idade/

https://www.portaldoenvelhecimento.com.br/moda-especifica-para-idosos-quase-nao-existe/

https://acvida.com.br/familias/moda-sem-idade/

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
