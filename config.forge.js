module.exports = {
  "packagerConfig": {
    "asar": true,
    "ignore": "\\.git(ignore|modules)|node_modules/(.cache|.cli-ngcc)|.vscode|e2e|.editorconfig|.eslintrc.json|.npmrc|angular.json|angular.webpack.js|main.js.map|main.ts|tsconfig.json|tsconfig.serve.json|.env"
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "project_xenomorph",
        // "certificateFile": process.env['WINDOWS_PFX_FILE'],
        // "certificatePassword": process.env['WINDOWS_PFX_PASSWORD'],
        "signWithParams": `/f ${process.env['WINDOWS_PFX_FILE']} /p ${process.env['WINDOWS_PFX_PASSWORD']} /tr http://timestamp.comodoca.com /td sha256`
      }
    },
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    }
  ]
}
