module.exports = {
  "packagerConfig": {
    "ignore": "\\.git(ignore|modules)|node_modules/(.cache|.cli-ngcc)|.vscode|src|e2e|.editorconfig|.eslintrc.json|.npmrc|angular.json|angular.webpack.js|main.js.map|main.ts|tsconfig.json|tsconfig.serve.json"
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "project_xenomorph",
        // "certificateFile": process.env['WINDOWS_PFX_FILE'],
        // "certificatePassword": process.env['WINDOWS_PFX_PASSWORD'],
        "signWithParams": `/f ${process.env['WINDOWS_PFX_FILE']} /p ${process.env['WINDOWS_PFX_PASSWORD']} /tr http://timestamp.comodoca.com /td sha256 /fd sha256 /sha1`
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
