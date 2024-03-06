import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run chatroom:serve',
        production: 'nx run chatroom:preview',
      },
      ciWebServerCommand: 'nx run chatroom:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
