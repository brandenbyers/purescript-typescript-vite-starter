import { PluginOption, defineConfig } from 'vite'
import { exec } from 'child_process'

function purescriptPlugin(): PluginOption {
  return {
    name: 'purescript-watch',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.purs')) {
        console.log('PureScript file updated')
        const command =
          'spago bundle --platform browser --bundle-type module --source-maps --minify --outfile=src/pure.js'
        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error.message}`)
            return
          }
          if (stderr) {
            console.error(`Stderr: ${stderr}`)
            return
          }
          console.log(`Stdout: ${stdout}`)
          server.ws.send({
            type: 'full-reload',
            path: '*',
          })
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [purescriptPlugin()],
})
