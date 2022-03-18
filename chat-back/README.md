

  <p align="center">Back-end do chat


## Projeto

Foi desenvolvido um backend para uma avaliação profissional, com o objetivo de criar um chat real-time, em nestJS framework do nodeJs, e utilizando o socktio, o cliente precisa fazer um login para se autenticar, sem essa autenticação não é possivel acessar a area de chat.

## Installation


yarn install


## Running the app


yarn run start:dev


## Descrição do que foi realizado

Foi feito um autenticação, por meio do nome do usuario e senha, apos isso, é feito a criação de um token que o front end vai poder utilizar para criação das urls com segurança e foi adicionado essa segurança em todo o backend, sem o login inicial não é possivel fazer uso das funcionalidades. Para fazer o chat foi utilizado o socktion, criando uma ligação simples de envio e recebimento de mensagem, do client e do server. No login utilizei um banco sqlite, simples so para realizar as conexoes com o banco e salvamente dos dados e utilizei o prisma ORM, para interliga o banco com o projeto.
  

 ## Funcionalidades e rotas
  
  Todos os caminhos foram feitos no 'localhost:3000'
  
 <br> Para a criação do usuario a rota é: '/user' </br>
 <br>  Para ser feito o login a rota é: '/login' </br>
  <br> O chat fica no 'localhost:3000'.</br>
  
  ## Conclusão
  
  Tive bastante dificuldade com o desenvolvimento, mesmo entendendo cada parte do socktio, mostrou que preciso conhecer mais dessa funcionalidade, tambem tive um aprendizado muito grande com o nestJs, foi meu primeir projeto nele, antes, ja tinha estudado, mas, nao criado com ele, gero um interesse ainda maior em conhecer ele. 
  No final o projeto nao saiu como eu queria, tive alguns problemas principalmente com o chat, fazendo que ele ficasse bem mais simples do que deveria, e a parte de login mais complexo.
  
  
 
