<h1>Bussiness Food</h1>
<p>Este é um projeto, divertido com estética minimalista, facil de usar, testar e entender.</p>
<p>O projeto serve como um cardápio online para donos de negócios da industria alimentícia, como por exemplo restaurantes, lanchonetes, etc.</p>
<p> Nele, os donos conseguem manter seu estoque sobre a luz do conhecimento, adicionar produtos, editar, exluir e ver.</p>
<p>Por ser um software desenvolvido pensado para admnistradores, o acesso a todas as funcionalidades necessitam de autenticação</p>

![Bussines Food](https://github.com/Pedro26fer/menu_online/assets/98784118/3ef4355f-cba8-4248-8555-a0eac9a5a5eb)

<h1>⚒️ Ferramentas</h1>
<p>Front-end</p>
<ul>
  <li>React-js</li>
  <li>Vite - Pela velocidade e performance que entrega ao rodar o projeto</li>
  <li>Typescript - Inevitável é saber dos tipos de dados que estam sendo enviados e manipulados</li>
  <li>Styled-Components - Pela arquitetura modularizada que se mantem. Cada componente tem seu estilo próprio</li>
  <li>JsonWebToken</li>
  <li>axios</li>
  <li>react-query - Pela facilidade em manipular atualizações vindas do servidor</li>
  <li>react-router-dom</li>
  <li>react-hook-form</li>
  <li>yup</li>
  <li>bcrypt</li>
</ul>
<p>Back-end</p>
<ul>
  <li>Node-js</li>
  <li>Nest-js</li>
  <li>Typescript</li>
  <li>TypeORM</li>
  <li>PostgreSQL</li>
</ul>

<h2>✔️ Rodando o projeto</h2>
<p>Toda a aplicação foi dockerizada, backend, frontend e banco de dados têm, cada um, o seu próprio container que se comunicam entre si graças ao docker-compose</p>
<p>Dessa forma, para rodar o projeto em sua máquina somente será necessário os seguintes passos</p>
<ol>
  <li>Clone este repositório para sua maquina local</li>
  <li>Abra o terminal na pasta que contém o arquivo docker-compose</li>
  <li>Rode o comando "docker compose up --build"</li>
</ol>
<p>Isso levantará todos os conteiners e você pode visualizar a aplicação no navegador na URL http://localhost:5173/</p>

<p>Você será redirecionado para a página de cadastro. Não se preocupe, a sua senha é hasheada antes de ir para o banco de dados do conteiner</p>
<p>Uma vez cadastrado, você pode se logar e navegar pelas funcionalidades do software.</p>


