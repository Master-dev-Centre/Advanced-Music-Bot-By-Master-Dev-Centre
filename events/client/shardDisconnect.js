const chalk = require("chalk");

module.exports = (client, event, id) => {
    console.log(chalk.redBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Disconnected`))
}
//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd