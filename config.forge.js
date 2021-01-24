module.exports = {
  packagerConfig: {
    asar: true,
    ignore: "\\.git(ignore|modules)|node_modules/(.cache|.cli-ngcc)|.vscode|e2e|.editorconfig|.eslintrc.json|.npmrc|angular.json|angular.webpack.js|main.js.map|main.ts|tsconfig.json|tsconfig.serve.json|.env",
      asar: true,
      darwinDarkModeSupport: 'true',
      // icon: 'electron-app/resources/icon',
      name: 'project-xenomorph',
      osxSign: {
        entitlements: './bin/entitlements.plist',
        'entitlements-inherit': './bin/entitlements.plist',
        'gatekeeper-assess': false,
        hardenedRuntime: true,
        identity: 'Developer ID Application: Justin Vanderhooft (2RSKA7RG4C)'
      },
      osxNotarize: {
        appleId: process.env['APPLE_ID'],
        appleIdPassword: process.env['APPLE_ID_PASSWORD']
      }
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "project_xenomorph",
        signWithParams: `/f ${process.env['WINDOWS_PFX_FILE']} /p ${process.env['CERTIFICATE_PASSWORD']} /tr http://timestamp.comodoca.com /td sha256`
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: [
        "darwin"
      ]
    }
  ]
}
