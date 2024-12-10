const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporterOptions: {
      reportDir: 'cypress/reports',    // Caminho onde o relatório será salvo
      overwrite: true,                 // Sobrescreve relatórios antigos
      html: true,                      // Gera apenas o relatório HTML
      json: false,                     // Desabilita a geração de arquivos JSON
      // A opção `reportFilename` pode ser usada para garantir que o nome do relatório seja fixo
      reportFilename: 'relatorio-mochawesome.html',
      // Adicionando o option `merge: false` para evitar tentativa de mesclagem de JSON
      merge: false,
    },
  },
});
