const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'do6yar',
  e2e: {
  baseUrl: "http://text.local/wp-login.php?loggedout=true&wp_lang=en_US",

  },
});
