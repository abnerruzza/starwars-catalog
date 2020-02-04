# Frontend Engineer Challenge

## Star wars Catalog
Este é um catálogo baseado na api https://swapi.co/documentation.

## Instalação
Primeiro clonar o projeto na máquina com o git.
```sh
git clone git@bitbucket.org:abnerruza/starwars-challenge.git
```

Executar o comando npm de instalação na pasta do projeto para baixar os pacotes dependentes 
```sh
npm install
```

Executar o comando npm de inicialização do projeto em modo desenvolvimento
```sh
npm start

ou

npm run start
```

## Definições do Projeto
A estrutura de pastas do projeto segue o modelo MVC
```text
-src
 |- Assets // Imagens e fonts que precisam ser copiadas no processo de bundle
 |- Components // Todos os componentes secundários que serão chamados em alguma view
 |- Config // Arquivos de configurações como Rotas e Variaveis de ambiente
 |- Controllers // Chamados pelas Rotas
 |- Hooks // Hooks genéricos do sistema
 |- Models // Tipos de dados que serão apresentados no sistema
 |- Services // Serviços que buscam nas apis retornando para o controller
 |- Views // Views que são chamadas pelos controllers
```
