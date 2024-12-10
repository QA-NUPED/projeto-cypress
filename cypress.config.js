const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Usando o Mochawesome como reporter
  e2e: {
    setupNodeEvents(on, config) {
      // Inicializa o plugin do Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Configuração para os relatórios
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome', // Diretório para salvar os relatórios
      overwrite: true,                        // Não sobrescrever os relatórios
      html: true,                              // Gerar relatórios em HTML
      json: true                               // Gerar relatórios em JSON
    }
  },
});