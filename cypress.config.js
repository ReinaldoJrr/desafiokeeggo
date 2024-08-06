const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@cypress/cucumber-preprocessor');
const path = require('path');

// Define a configuração do Cypress
module.exports = defineConfig({
  e2e: {
    // Configura o plugin do Cucumber
    setupNodeEvents(on, config) {
      // Adiciona o pré-processador do Cucumber
      addCucumberPreprocessorPlugin(on, config);

      // Configura o pré-processador do Cucumber
      on('file:preprocessor', require('@badeball/cypress-cucumber-preprocessor').default);

      // Outros plugins ou configurações podem ser adicionados aqui
      return config;
    },

    // Define o padrão de arquivos de especificação
    specPattern: 'cypress/e2e/**/*.feature', // Caminho para seus arquivos .feature

    // Configurações adicionais (opcional)
    baseUrl: 'https://advantageonlineshopping.com', // URL base para os testes
    viewportWidth: 1280, // Largura da viewport
    viewportHeight: 720, // Altura da viewport
    // Outras opções de configuração do Cypress podem ser adicionadas aqui
  },
});