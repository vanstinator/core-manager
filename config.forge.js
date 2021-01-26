module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./icons/icon",
    ignore: "\\.git(ignore|modules)|node_modules/(.cache|.cli-ngcc)|.vscode|e2e|.editorconfig|.eslintrc.json|.npmrc|angular.json|angular.webpack.js|main.js.map|main.ts|tsconfig.json|tsconfig.serve.json|.env|icons",
      asar: true,
      darwinDarkModeSupport: 'true',
      // icon: 'electron-app/resources/icon',
      name: 'Core Manager',
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
      },
      extendInfo: {
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: false,
          NSExceptionDomains: {
            'downloads.coremanager.app': {
              NSTemporaryExceptionAllowsInsecureHTTPSLoads: false,
              NSIncludesSubdomains: false,
              NSTemporaryExceptionAllowsInsecureHTTPLoads: true,
              NSTemporaryExceptionMinimumTLSVersion: "1.0",
              NSTemporaryExceptionRequiresForwardSecrecy: false
            }
          }
        }
    }
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        remoteReleases: `https://downloads.coremanager.app/update/win32/0.0.0`,
        signWithParams: `/f ${process.env['WINDOWS_PFX_FILE']} /p ${process.env['CERTIFICATE_PASSWORD']} /tr http://timestamp.comodoca.com /td sha256`
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: [
        "darwin"
      ]
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO'
      }
    }
  ]
}
