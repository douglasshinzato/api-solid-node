// Configuração para que o vitest entenda os paths com @;
// Não esquecer de colocar "type": "module" no package.json

import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
})
