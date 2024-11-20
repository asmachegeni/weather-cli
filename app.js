const { configDotenv } = require("dotenv")
const yargs = require("yargs")
const loadInfo = require('./utils/weather')
configDotenv()
yargs.command({
    command: "weather",
    describe: "show weather information",
    builder: {
        "city": {
            alias: "c",
            describe: "show weather for the city",
            type: "string",
            demandOption: true
        },
        "units": {
            alias: "u",
            type: "string"
        },
        "exclude": {
            alias: "e",
            type: "string"
        }, "lang": {
            alias: "l",
            type: "string"
        }
    }
    ,
    handler: (args) => loadInfo(args)
})

yargs.parse()