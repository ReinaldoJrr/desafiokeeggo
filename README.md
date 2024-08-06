# Desafio Keeggo
Requisitos para Automação
- Node.js: v20.15.1
- Inicializar novo projeto: npm init -y
# Package.json
Adicionar:
- "type": "module",
- "node": "v20.15.1",
- "cypress:web": "npx cypress open",
- "cypress:headless": "npx cypress run --browser electron"
Executar: npm i -g ntl (listar quais script tem no package.json)
- Abra o cypress
# cypress.config.js
- chromeWebSecurity: false,
E2E
- baseUrl ""
- testIsolation: false
