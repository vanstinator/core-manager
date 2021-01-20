module.exports = {
  "packagerConfig": {
    "ignore": "\\.git(ignore|modules)|node_modules/(.cache|.cli-ngcc)|.vscode|src|e2e|.editorconfig|.eslintrc.json|.npmrc|angular.json|angular.webpack.js|main.js.map|main.ts|tsconfig.json|tsconfig.serve.json"
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "project_xenomorph",
        "certificateFile": process.env['WINDOWS_PFX_FILE'],
        "certificatePassword": process.env['WINDOWS_PFX_PASSWORD']

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
