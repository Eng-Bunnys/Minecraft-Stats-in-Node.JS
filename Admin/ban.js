const SlashCommand = require('../../utils/slashCommands');

const {
    delay
} = require('../../utils/engine')

const {
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require('discord.js')

const {
    Developers,
    Partners
  } = require('../../config/GBFconfig.json')

const colors = require('../../GBFColor.json');
const emojis = require('../../GBFEmojis.json');
const title = require('../../gbfembedmessages.json');

const blacklistSchema = require("../../schemas/blacklist-schemas")

module.exports = class BanSlash extends SlashCommand {
    constructor(client) {
        super(client, {
            name: "ban",
            category: "Admin",
            description: "Bans a user from bot access",
            usage: "/ban <user>",
            examples: "/ban firecristal",

            options: [{
                name: 'user',
                type: 'USER',
                description: 'The user to ban',
                required: true,
            }, {
                name: 'reason',
                type: 'USER',
                description: "Reason for the ban"
            }],

            devOnly: true,
            userPermission: [],
            botPermission: [],
            cooldown: 0,
            development: true,
            Partner: false,
        });
    }

    async execute({
        client,
        interaction
    }) {

        const User = interaction.options.getUser('user');
        const blacklistReason = interaction.options.getString('reason')

        let today = new Date();

        let time = moment(today).format("hh:mm:ss")

        let date = moment(today).format("MM/DD/YYYY")

        const argserror2 = new MessageEmbed()

        .setTitle(`I ran into an error! ${emojis.ERROR}`)
        .setDescription(`You can't blacklist yourself`)
        .setColor(colors.ERRORRED)

    const deverror = new MessageEmbed()

        .setTitle(`I ran into an error! ${emojis.ERROR}`)
        .setDescription(`I can't blacklist an admin`)
        .setColor(colors.ERRORRED)

        const ID = User.id

        if (User.id === interaction.author.id) return interaction.reply({
            embeds: [argserror2]
        })
        if (Developers.includes(User.id)) return interaction.reply({
            embeds: [deverror]
        })
        if (Partners.includes(User.id)) return interaction.reply({
            embeds: [deverror]
        })

        let blacklistData = await blacklistSchema.findOne({
            userId: User.id,
        }).catch(err => console.log(err))

        if (!blacklistData) {
            blacklistDoc = new blacklistSchema({
                userId: User.id,
                Blacklist: true,
                reason: blacklistReason ? blacklistReason : "No Reason"
            })
            await blacklistDoc.save().catch(err => console.log(err));
        } else {

            await blacklistSchema.findOneAndUpdate({
                userId: User.id,
            }, {
                userId: User.id,
                $set: {
                    Blacklist: true,
                    reason: blacklistReason ? blacklistReason : "No Reason"
                }
            }, {
                upsert: true,
                new: true,
            })
        }
        
        const blacklistembed = new MessageEmbed()
        .setTitle("The user has been added to blacklist data!")
        .setDescription(`
**User** - ${User}
**ID** - ${User.id}
**Admin** - ${message.author}
**Reason** - ${blacklistReason ? blacklistReason : "No Reason"}
`)
        .setColor("#e91e63")

        return interaction.reply({
            embeds: [blacklistembed]
        })

    }
}