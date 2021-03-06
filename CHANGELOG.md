## <small>1.3.2 (2021-02-24)</small>

* fix(ui): allow core to be downloaded for multiple platforms ([d2c7cbf](https://github.com/vanstinator/project-xenomorph/commit/d2c7cbf))



## <small>1.3.1 (2021-02-24)</small>

* chore: release v1.3.1 ([31c89d6](https://github.com/vanstinator/project-xenomorph/commit/31c89d6))
* fix(core): platform should be enum rather than array ([24371d8](https://github.com/vanstinator/project-xenomorph/commit/24371d8))



## 1.3.0 (2021-02-22)

* chore: release v1.3.0 ([cf81c05](https://github.com/vanstinator/project-xenomorph/commit/cf81c05))
* fix(core): make sure platform is sortable in data table ([68c5113](https://github.com/vanstinator/project-xenomorph/commit/68c5113))
* fix(ui): update tooltips ([b8e50bc](https://github.com/vanstinator/project-xenomorph/commit/b8e50bc))
* feat(ui): advanced filtering ui toggle ([3936cd2](https://github.com/vanstinator/project-xenomorph/commit/3936cd2))



## <small>1.2.1 (2021-02-11)</small>

* chore: release v1.2.1 ([fff6c9f](https://github.com/vanstinator/project-xenomorph/commit/fff6c9f))
* fix(core): use asar ([e25ee9e](https://github.com/vanstinator/project-xenomorph/commit/e25ee9e))



## 1.2.0 (2021-02-11)

* chore: release v1.2.0 ([ca1644d](https://github.com/vanstinator/project-xenomorph/commit/ca1644d))
* feat(ui): use a custom titlebar on win32 ([58dbbc4](https://github.com/vanstinator/project-xenomorph/commit/58dbbc4))
* feat(ui): use custom themed scrollbar ([ca86323](https://github.com/vanstinator/project-xenomorph/commit/ca86323))



## <small>1.1.2 (2021-02-05)</small>

* chore: release v1.1.2 ([c20123d](https://github.com/vanstinator/project-xenomorph/commit/c20123d))
* fix(core): create "Game Cores" if it doesn't exist on start ([2bb46f0](https://github.com/vanstinator/project-xenomorph/commit/2bb46f0))
* fix(ui): progress spinner was off center ([35bdf0c](https://github.com/vanstinator/project-xenomorph/commit/35bdf0c))



## <small>1.1.1 (2021-02-02)</small>

* chore: release v1.1.1 ([ff3456d](https://github.com/vanstinator/project-xenomorph/commit/ff3456d))
* fix(build): properly escape regex ([a82cef9](https://github.com/vanstinator/project-xenomorph/commit/a82cef9))



## 1.1.0 (2021-02-02)

* chore: release v1.1.0 ([d1511b0](https://github.com/vanstinator/project-xenomorph/commit/d1511b0))
* chore(build): only upload installers as artifacts to github (#27) ([d126625](https://github.com/vanstinator/project-xenomorph/commit/d126625)), closes [#27](https://github.com/vanstinator/project-xenomorph/issues/27)
* fix(ui): change ref was causing UI elements to become non-responsive ([b9c5384](https://github.com/vanstinator/project-xenomorph/commit/b9c5384))
* feat(core): add snes9x cores ([55311a6](https://github.com/vanstinator/project-xenomorph/commit/55311a6))
* feat(core): allow mapping one core to many platforms #22 ([f8641cf](https://github.com/vanstinator/project-xenomorph/commit/f8641cf)), closes [#22](https://github.com/vanstinator/project-xenomorph/issues/22)
* feat(core): custom pms paths (#25) ([018cebf](https://github.com/vanstinator/project-xenomorph/commit/018cebf)), closes [#25](https://github.com/vanstinator/project-xenomorph/issues/25)
* feat(ui): automatically detected dark-mode (#26) ([ddc8477](https://github.com/vanstinator/project-xenomorph/commit/ddc8477)), closes [#26](https://github.com/vanstinator/project-xenomorph/issues/26)
* feat(ui): rewrite UI with angular material ([89a2470](https://github.com/vanstinator/project-xenomorph/commit/89a2470))



## <small>1.0.4 (2021-01-30)</small>

* chore: release v1.0.4 ([be16f7f](https://github.com/vanstinator/project-xenomorph/commit/be16f7f))
* chore(ui): move electron logic to service ([bf1fba8](https://github.com/vanstinator/project-xenomorph/commit/bf1fba8))
* feat(ui): show helpful error when rom unavailable ([103244d](https://github.com/vanstinator/project-xenomorph/commit/103244d))
* fix(build): don't generate deltas unless we're explicitly releasing (#20) ([18538bb](https://github.com/vanstinator/project-xenomorph/commit/18538bb)), closes [#20](https://github.com/vanstinator/project-xenomorph/issues/20)
* fix(build): rename win32 binary. fixes delta updates ([1e8cf6c](https://github.com/vanstinator/project-xenomorph/commit/1e8cf6c))
* fix(core): log successful path detection correctly ([44667e5](https://github.com/vanstinator/project-xenomorph/commit/44667e5))



## <small>1.0.3 (2021-01-27)</small>

* chore: release v1.0.3 ([a255318](https://github.com/vanstinator/project-xenomorph/commit/a255318))
* chore(build): check for updates every 10 minutes rather than minute ([9c81058](https://github.com/vanstinator/project-xenomorph/commit/9c81058))
* chore(build): make use of delta updates on windows (#9) ([370ea51](https://github.com/vanstinator/project-xenomorph/commit/370ea51)), closes [#9](https://github.com/vanstinator/project-xenomorph/issues/9)
* chore(build): turn on cloud builds now that we're open source (#10) ([8b2dbd3](https://github.com/vanstinator/project-xenomorph/commit/8b2dbd3)), closes [#10](https://github.com/vanstinator/project-xenomorph/issues/10)
* chore(license): add mit license ([79dd822](https://github.com/vanstinator/project-xenomorph/commit/79dd822))
* feat(core): add higan_sfc for mac ([d3d6e4a](https://github.com/vanstinator/project-xenomorph/commit/d3d6e4a))
* fix(ui): remove jank on startup ([22f2e41](https://github.com/vanstinator/project-xenomorph/commit/22f2e41))
* Update README.md ([139f732](https://github.com/vanstinator/project-xenomorph/commit/139f732))



## <small>1.0.2 (2021-01-26)</small>

* chore: release v1.0.2 ([51473e4](https://github.com/vanstinator/project-xenomorph/commit/51473e4))
* fix(core): game gear mapping was incorrect ([8e195bd](https://github.com/vanstinator/project-xenomorph/commit/8e195bd))



## <small>1.0.1 (2021-01-26)</small>

* chore: release v1.0.1 ([d2742e3](https://github.com/vanstinator/project-xenomorph/commit/d2742e3))
* fix(build): do not generate deltas ([00a54c6](https://github.com/vanstinator/project-xenomorph/commit/00a54c6))



## 1.0.0 (2021-01-26)

* chore: release v1.0.0 ([986dbaa](https://github.com/vanstinator/project-xenomorph/commit/986dbaa))



## <small>0.0.11 (2021-01-26)</small>

* chore: release v0.0.11 ([78e1394](https://github.com/vanstinator/project-xenomorph/commit/78e1394))
* chore(build): build delta updates for win32 ([54c8ab3](https://github.com/vanstinator/project-xenomorph/commit/54c8ab3))
* chore(build): remove nsexceptions for old domain ([d560d5f](https://github.com/vanstinator/project-xenomorph/commit/d560d5f))
* fix(ui): better error message when PMS is not detected ([90d9137](https://github.com/vanstinator/project-xenomorph/commit/90d9137))
* Create README.md ([df662a5](https://github.com/vanstinator/project-xenomorph/commit/df662a5))



## <small>0.0.10 (2021-01-26)</small>

* chore: release v0.0.10 ([1c0ad3a](https://github.com/vanstinator/project-xenomorph/commit/1c0ad3a))
* fix(ui): mac icns was corrupted for whatever reason ([85b145f](https://github.com/vanstinator/project-xenomorph/commit/85b145f))



## <small>0.0.9 (2021-01-26)</small>

* chore: release v0.0.9 ([96a9332](https://github.com/vanstinator/project-xenomorph/commit/96a9332))
* chore(build): use the correct binary name ([b78cd55](https://github.com/vanstinator/project-xenomorph/commit/b78cd55))
* chore(core): remove useless keywords from package.json ([82e17a2](https://github.com/vanstinator/project-xenomorph/commit/82e17a2))
* chore(core): simplify game core representation ([5ceebc1](https://github.com/vanstinator/project-xenomorph/commit/5ceebc1))
* chore(core): transpile to es2020 ([c0fd846](https://github.com/vanstinator/project-xenomorph/commit/c0fd846))
* chore(core): update branding metadata (#8) ([1635e8c](https://github.com/vanstinator/project-xenomorph/commit/1635e8c)), closes [#8](https://github.com/vanstinator/project-xenomorph/issues/8)
* chore(core): use new domain for update server ([0c22ff4](https://github.com/vanstinator/project-xenomorph/commit/0c22ff4))
* feat(ui): add button linking out to core info page where applicable ([e1069c5](https://github.com/vanstinator/project-xenomorph/commit/e1069c5))
* fix(ui): make multi-platform cores look better ([060c888](https://github.com/vanstinator/project-xenomorph/commit/060c888))



## <small>0.0.8 (2021-01-25)</small>

* chore: release v0.0.8 ([fc92e7c](https://github.com/vanstinator/project-xenomorph/commit/fc92e7c))
* chore(core): ignore dist in tsconfig ([4514cd2](https://github.com/vanstinator/project-xenomorph/commit/4514cd2))
* feat(build): build and ship dmg ([062dee5](https://github.com/vanstinator/project-xenomorph/commit/062dee5))



## <small>0.0.7 (2021-01-24)</small>

* chore: release v0.0.7 ([f6396d1](https://github.com/vanstinator/project-xenomorph/commit/f6396d1))
* fix(ui): extra html fluff ([fd36141](https://github.com/vanstinator/project-xenomorph/commit/fd36141))



## <small>0.0.6 (2021-01-24)</small>

* chore: release v0.0.6 ([8a159c9](https://github.com/vanstinator/project-xenomorph/commit/8a159c9))
* chore(build): update release scripts ([899af50](https://github.com/vanstinator/project-xenomorph/commit/899af50))
* fix(build): fix ts compilation errors ([4dc8fa7](https://github.com/vanstinator/project-xenomorph/commit/4dc8fa7))
* feat(core): improve download ui experience (#7) ([dca7252](https://github.com/vanstinator/project-xenomorph/commit/dca7252)), closes [#7](https://github.com/vanstinator/project-xenomorph/issues/7)



## <small>0.0.5 (2021-01-24)</small>

* chore: release v0.0.5 ([e9b195c](https://github.com/vanstinator/project-xenomorph/commit/e9b195c))
* chore(core): log uncaught errors ([d0fab56](https://github.com/vanstinator/project-xenomorph/commit/d0fab56))
* fix(mac): allow insecure update loading from nuts server ([242b9c9](https://github.com/vanstinator/project-xenomorph/commit/242b9c9))



## <small>0.0.4 (2021-01-24)</small>

* chore: release v0.0.4 ([c7171fe](https://github.com/vanstinator/project-xenomorph/commit/c7171fe))
* fix(ui): use new core structure to fix filtering bugs ([902bef9](https://github.com/vanstinator/project-xenomorph/commit/902bef9))



## <small>0.0.3 (2021-01-24)</small>

* chore: release v0.0.3 ([41b637a](https://github.com/vanstinator/project-xenomorph/commit/41b637a))
* chore(build): tweak release.yml ([6c64e0e](https://github.com/vanstinator/project-xenomorph/commit/6c64e0e))



## <small>0.0.2 (2021-01-24)</small>

* chore: release v0.0.2 ([4e6bc01](https://github.com/vanstinator/project-xenomorph/commit/4e6bc01))
* chore: release v0.0.2 ([4d4e232](https://github.com/vanstinator/project-xenomorph/commit/4d4e232))
* chore(build): cache node modules correctly ([2412789](https://github.com/vanstinator/project-xenomorph/commit/2412789))
* chore(build): don't inject mac certs on self-hosted ([620fc50](https://github.com/vanstinator/project-xenomorph/commit/620fc50))
* chore(build): run builds on push on self hosted runners ([1ea8e07](https://github.com/vanstinator/project-xenomorph/commit/1ea8e07))
* chore(build): run releases on self-hosted hardware ([119e36b](https://github.com/vanstinator/project-xenomorph/commit/119e36b))
* chore(build): try building on self-hosted mac ([fb6044d](https://github.com/vanstinator/project-xenomorph/commit/fb6044d))
* fix(core): bump version back down ([06aec26](https://github.com/vanstinator/project-xenomorph/commit/06aec26))
* fix(mac): use correct auto update url ([ad95d16](https://github.com/vanstinator/project-xenomorph/commit/ad95d16))
* fix(ui): button margins were wrong ([88d59d8](https://github.com/vanstinator/project-xenomorph/commit/88d59d8))
* fix(ui): incorrect core mapping ([9304ec9](https://github.com/vanstinator/project-xenomorph/commit/9304ec9))
* fix(ui): properly implement core name filter ([5f1ac4c](https://github.com/vanstinator/project-xenomorph/commit/5f1ac4c))
* fix(ui): remove dead toast code ([efefe9a](https://github.com/vanstinator/project-xenomorph/commit/efefe9a))
* feat(core): add a bunch more cores/platforms ([b7022d4](https://github.com/vanstinator/project-xenomorph/commit/b7022d4))
* feat(core): sign macOS builds on self-hosted hardware ([0a4eb36](https://github.com/vanstinator/project-xenomorph/commit/0a4eb36))
* feat(ui): improve the UI and searchability for cores ([57edffe](https://github.com/vanstinator/project-xenomorph/commit/57edffe))
* feat(ui): support some basic filtering ([f481df7](https://github.com/vanstinator/project-xenomorph/commit/f481df7))



## <small>0.0.1 (2021-01-23)</small>

* chore: change release scripts ([3f843d2](https://github.com/vanstinator/project-xenomorph/commit/3f843d2))
* chore: release v0.0.1 ([853aaf1](https://github.com/vanstinator/project-xenomorph/commit/853aaf1))
* chore(main): remove custom squirrel code ([dd7bb37](https://github.com/vanstinator/project-xenomorph/commit/dd7bb37))



## <small>0.0.1-alpha.13 (2021-01-22)</small>

* chore: release v0.0.1-alpha.13 ([0093c0b](https://github.com/vanstinator/project-xenomorph/commit/0093c0b))
* fix(win32): updates still aren't taking properly ([5cc987b](https://github.com/vanstinator/project-xenomorph/commit/5cc987b))



## <small>0.0.1-alpha.12 (2021-01-22)</small>

* chore: release v0.0.1-alpha.12 ([d1039b5](https://github.com/vanstinator/project-xenomorph/commit/d1039b5))
* fix(mac): fix a variety of mac specific issues ([fcea236](https://github.com/vanstinator/project-xenomorph/commit/fcea236))
* fix(win32): app startup wouldn't properly register shortcuts ([4348b0e](https://github.com/vanstinator/project-xenomorph/commit/4348b0e))



## <small>0.0.1-alpha.11 (2021-01-22)</small>

* chore: release v0.0.1-alpha.11 ([9f99d06](https://github.com/vanstinator/project-xenomorph/commit/9f99d06))
* fix(build): remove broken button ([90d1569](https://github.com/vanstinator/project-xenomorph/commit/90d1569))



## <small>0.0.1-alpha.10 (2021-01-22)</small>

* chore: release v0.0.1-alpha.10 ([dfab5e7](https://github.com/vanstinator/project-xenomorph/commit/dfab5e7))
* chore(core): break out handlers into sub modules ([151490d](https://github.com/vanstinator/project-xenomorph/commit/151490d))
* chore(ui): temporarily hide update logic ([6db7c7d](https://github.com/vanstinator/project-xenomorph/commit/6db7c7d))
* feat(core): clean up everything ([398ecc9](https://github.com/vanstinator/project-xenomorph/commit/398ecc9))
* feat(core): wire up core delete and update actions ([d84c352](https://github.com/vanstinator/project-xenomorph/commit/d84c352))



## <small>0.0.1-alpha.9 (2021-01-21)</small>

* chore: release v0.0.1-alpha.9 ([9da7bb1](https://github.com/vanstinator/project-xenomorph/commit/9da7bb1))
* chore(build): package as asar ([beb4ffe](https://github.com/vanstinator/project-xenomorph/commit/beb4ffe))
* chore(core): move tsc output to sub dir and launch app in that context ([3a4ef1b](https://github.com/vanstinator/project-xenomorph/commit/3a4ef1b))



## <small>0.0.1-alpha.8 (2021-01-21)</small>

* chore: release v0.0.1-alpha.8 ([4b50ab2](https://github.com/vanstinator/project-xenomorph/commit/4b50ab2))
* chore(build): stop building mac until we get signing working ([2a4771d](https://github.com/vanstinator/project-xenomorph/commit/2a4771d))
* fix(core): actually fix updates ([17e0f25](https://github.com/vanstinator/project-xenomorph/commit/17e0f25))



## <small>0.0.1-alpha.7 (2021-01-21)</small>

* chore: release v0.0.1-alpha.7 ([11cc70b](https://github.com/vanstinator/project-xenomorph/commit/11cc70b))
* chore(build): only build releases once ([76ac911](https://github.com/vanstinator/project-xenomorph/commit/76ac911))



## <small>0.0.1-alpha.6 (2021-01-21)</small>

* chore: release v0.0.1-alpha.6 ([a312114](https://github.com/vanstinator/project-xenomorph/commit/a312114))
* fix(core): malformed update url ([f0a0396](https://github.com/vanstinator/project-xenomorph/commit/f0a0396))
* fix(main): handle squirrel startup quickly ([c0f74b8](https://github.com/vanstinator/project-xenomorph/commit/c0f74b8))



## <small>0.0.1-alpha.5 (2021-01-21)</small>

* chore: release v0.0.1-alpha.5 ([642d8e2](https://github.com/vanstinator/project-xenomorph/commit/642d8e2))
* chore(core): bunch of new eslint rules ([ef5a5bd](https://github.com/vanstinator/project-xenomorph/commit/ef5a5bd))
* feat(core): handle updates and other squirrel nits ([dbbe452](https://github.com/vanstinator/project-xenomorph/commit/dbbe452))
* feat(main): add logger ([9f2e783](https://github.com/vanstinator/project-xenomorph/commit/9f2e783))
* fix(main): pms file path detection in windows ([e386459](https://github.com/vanstinator/project-xenomorph/commit/e386459))



## <small>0.0.1-alpha.4 (2021-01-20)</small>

* chore: release v0.0.1-alpha.4 ([f7c1e07](https://github.com/vanstinator/project-xenomorph/commit/f7c1e07))
* feat(core): start signing windows builds (#5) ([71b3791](https://github.com/vanstinator/project-xenomorph/commit/71b3791)), closes [#5](https://github.com/vanstinator/project-xenomorph/issues/5)



## <small>0.0.1-alpha.3 (2021-01-20)</small>

* chore: release v0.0.1-alpha.3 ([0c965e2](https://github.com/vanstinator/project-xenomorph/commit/0c965e2))
* chore(oops): remove .env and ignore ([0b418e8](https://github.com/vanstinator/project-xenomorph/commit/0b418e8))
* chore(ui): clean up unused code ([9e9721a](https://github.com/vanstinator/project-xenomorph/commit/9e9721a))
* fix(build): bump down to npm@6 ([4158d48](https://github.com/vanstinator/project-xenomorph/commit/4158d48))
* fix(deps): package-lock.json was out of date ([f8a7b15](https://github.com/vanstinator/project-xenomorph/commit/f8a7b15))
* feat(build): wire up build and actions steps (#2) ([b0f5015](https://github.com/vanstinator/project-xenomorph/commit/b0f5015)), closes [#2](https://github.com/vanstinator/project-xenomorph/issues/2)
* feat(core): scaffold pms library directory detection (#4) ([68d6334](https://github.com/vanstinator/project-xenomorph/commit/68d6334)), closes [#4](https://github.com/vanstinator/project-xenomorph/issues/4)
* feat(core): wire up core downloads and unzips ([1237aa4](https://github.com/vanstinator/project-xenomorph/commit/1237aa4))
* feat(ui): bootstrap angular ui (#3) ([a2cf6da](https://github.com/vanstinator/project-xenomorph/commit/a2cf6da)), closes [#3](https://github.com/vanstinator/project-xenomorph/issues/3)
* Initial Commit ([9024354](https://github.com/vanstinator/project-xenomorph/commit/9024354))



