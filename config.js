import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['573027866596', 'EDER💻⁷', true]]

global.botNumberCode = ''
global.confirmCode = ''

global.suittag = ['573027866596']
global.mods = []
global.prems = []


global.packname = 'ᥫ᭡nexus bot-𝙈𝘿ꨄ'
global.author = 'eder'
global.wm = '𓆩Nexus bot-𝐌𝐃𓆪'
global.wm2 = '✦nexus bot-𝗠𝗗✦'
global.jxtxn = 'eder'
global.cb = '⏤͟͟͞͞Nexus bot-ＭＤ'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '51929972576'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})