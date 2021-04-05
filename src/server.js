const express = require("express")
const server = express()
const routes = require("./routes")


// isso é para configurar o ejs e mandar somente o html
server.set('view engine', 'ejs')
// ele vai jogar um arquivo para o get para rodad que nesse caso é liberar os arquivos estaticos. A outra função é dizer que os arquivos estaticos estão na pasta "public" 
server.use(express.static("public"))

server.use(routes)
server.listen(3000, ()=> console.log('rodando'))
// função para rodar o server 3000 significa a porta e a arrow function é para roda algo no servidor nesse caso é console.log
// a porta 3000 está rodando na maquina que roda o nodejs ou seja no meu pc

// npm i nodemon -D é um pacote utilizado pelos desenvolvedores para autalizar o servidor autamaticamente sem precisar ligar e desligar o servidor

// precisamos ir para o package,json e lá terá uma linha nova devDependecias nodemom. E preciso mudar na propriedade script "test" para "dev"  e com "nodemom." como valor da propriedade e mundar o valor da propriedae "main:" para src/server.js 

// para rodar o servidor precisa digitar npm run dev