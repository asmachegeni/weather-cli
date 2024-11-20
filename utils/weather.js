const Axios = require("./axios")
const chalk = require('chalk')
const loadInfo = (args) => {
    console.clear()
    console.log(chalk.bgMagenta('loading information ....'))
    Axios.get(`?q=${args.city}&appid=${process.env.API_KEY}&exclude=current&lang=${args.lang ?? 'fa'}&units=${args.units ?? 'metric'}`).then(res => {
        console.clear();
        const description = res.data.weather[0].description;
        const test = { name: res.data.name, desc: description, ...res.data.main, }
        console.table(test)
    })
}
module.exports = loadInfo