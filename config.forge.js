module.exports = {
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
