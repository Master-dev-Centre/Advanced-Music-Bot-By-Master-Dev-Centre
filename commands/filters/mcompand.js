const { MessageEmbed } = require('discord.js');
const delay = require('delay');

module.exports = {
    config: {
        name: "mcompand",
        description: "Turning on mcompand filter",
        category: "filters",
        accessableby: "Member",
        aliases: ["mp"]
    },
    run: async (client, message) => {
        const msg = await message.channel.send("Processing.....")
        
        const queue = client.distube.getQueue(message);
        if (!queue) msg.edit(`There is nothing in the queue right now!`)
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")

        client.distube.setFilter(message, "mcompand")

        const embed = new MessageEmbed()
            .setAuthor({ name: 'Turned on: Mcompand', iconURL: 'https://cdn.discordapp.com/emojis/758423098885275748.gif'})
            .setColor('#2f3136');

        await delay(5000);
        msg.edit({ content: ' ', embeds: [embed] })
    }
}; /// testing version

//All Copyright Go To Master Dev Centre
//Join Support Server if you need help: https://discord.gg/5RPRWM9RBd