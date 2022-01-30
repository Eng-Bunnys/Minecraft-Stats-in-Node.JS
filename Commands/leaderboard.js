//Discord.js imports
const {
    MessageEmbed,
    MessageButton,
    MessageActionRow
} = require('discord.js');
//Handler for slash commands
const SlashCommand = require('../../utils/slashCommands');
//For easier embeds
const colors = require('../../GBFColor.json');
const emojis = require('../../GBFEmojis.json');
const title = require('../../gbfembedmessages.json');

const RegisterSchema = require('../../schemas/register Schema');
const {
    registerCheck
} = require("../../utils/engine")

const Bunny = require('../Admin/stats/8d030b6d-e437-34ff-9648-d5709d7cce09.json');
const Boda = require('../Admin/stats/1ca9bfd4-35e4-32d5-a9ad-810c51720064.json');
const Yoda = require('../Admin/stats/9dcaaafa-3d5b-3bb6-8b87-56db6938f2e2.json');
const Ayato = require('../Admin/stats/57695b16-f306-3ec9-9df5-1b30e23fdb49.json');
const Grep = require('../Admin/stats/e4f932e9-0985-3d11-a7ba-7de1928dfc26.json');
const Majkr = require('../Admin/stats/f4c27a74-14ed-3488-9e65-27290fa2303e.json');
const Wael = require('../Admin/stats/10490532-8061-3e58-a694-cb561cb00045.json');
const eBoy = require('../Admin/stats/b62465a8-cb99-37a9-8d9f-4065ade1700d.json');
const Raven = require('../Admin/stats/13701f61-3874-3e47-8c72-0572fd2cc8bf.json');
const Samy = require("../Admin/stats/b3975b4c-2db5-36fc-8ef0-2340a6f933a6.json");
const mombar = require('../Admin/stats/fbc2ad8d-a207-302e-9fe3-13167fc814a2.json');

const {
    TOKEN
} = require('../../config/GBFconfig.json')

const McEmotes = require('../Admin/MC emotes.json')

//For slash commands
const {
    delay,
    cmToM
} = require('../../utils/engine');
//Handler
module.exports = class Statslash extends SlashCommand {
    constructor(client) {
        super(client, {
            name: "leaderboard",
            category: "Stats",
            description: "HamadaCraft weekly leaderboard",
            usage: "/leaderboard",
            examples: "/leaderboard",

            devOnly: false,
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

        const BunnyStats = Bunny.stats
        const BodaStats = Boda.stats
        const YehiaStats = Yoda.stats
        const AyatoStats = Ayato.stats
        const GrepStats = Grep.stats
        const MajkorStats = Majkr.stats
        const WaelStats = Wael.stats
        const eBoyStats = eBoy.stats
        const RavenStats = Raven.stats
        const SamyStats = Samy.stats
        const MombarStats = mombar.stats

        let BunnybatKills
        if (BunnyStats['minecraft:killed'] !== undefined) {
            BunnybatKills = Number(BunnyStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            BunnybatKills = 0
        }
        let BodaBatKills
        if (BodaStats['minecraft:killed'] !== undefined) {
            BodaBatKills = Number(BodaStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            BodaBatKills = 0
        }
        let YehiaBatKills
        if (YehiaStats['minecraft:killed'] !== undefined) {
            YehiaBatKills = Number(YehiaStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            YehiaBatKills = 0
        }
        let AyatoBatKills
        if (AyatoStats['minecraft:killed'] !== undefined) {
            AyatoBatKills = Number(AyatoStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            AyatoBatKills = 0
        }
        let GrepBatKills
        if (GrepStats['minecraft:killed'] !== undefined) {
            GrepBatKills = Number(GrepStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            GrepBatKills = 0
        }
        let MajkorBatKills
        if (MajkorStats['minecraft:killed'] !== undefined) {
            MajkorBatKills = Number(MajkorStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            MajkorBatKills = 0
        }
        let WaelBatKills
        if (WaelStats['minecraft:killed'] !== undefined) {
            WaelBatKills = Number(WaelStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            WaelBatKills = 0
        }
        let eBoyBatKills
        if (eBoyStats['minecraft:killed'] !== undefined) {
            eBoyBatKills = Number(eBoyStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            eBoyBatKills = 0
        }
        let RavenBatKills
        if (RavenStats['minecraft:killed'] !== undefined) {
            RavenBatKills = Number(RavenStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            RavenBatKills = 0
        }
        let SamyBatKills
        if (SamyStats['minecraft:killed'] !== undefined) {
            SamyBatKills = Number(SamyStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            SamyBatKills = 0
        }
        let MombarBatKills
        if (MombarStats['minecraft:killed'] !== undefined) {
            MombarBatKills = Number(MombarStats['minecraft:killed']['minecraft:bat'] ?? 0)
        } else {
            MombarBatKills = 0
        }

        const items = [{
            name: 'DepressedBunnys',
            kills: BunnybatKills
        }, {
            name: 'XBabYoda',
            kills: YehiaBatKills
        }, {
            name: "Mighty_Monster64",
            kills: GrepBatKills
        }, {
            name: "firecristal",
            kills: WaelBatKills
        }, {
            name: "6RAVEN7",
            kills: RavenBatKills
        }, {
            name: "Ayato",
            kills: AyatoBatKills
        }, {
            name: "zoinknub",
            kills: BodaBatKills
        }, {
            name: "mombarr",
            kills: MombarBatKills
        }, {
            name: "eboy",
            kills: eBoyBatKills
        }, {
            name: "yahiasamya7a",
            kills: SamyBatKills
        }]

        Object.fromEntries(items.map(o => ([o.name, o.kills])));

        const filteredItems = items.filter((item) => {
            return item.kills >= 2
        })

        const MappedItems = filteredItems.map((item) => {
            return item.kills
        })

        const SortedItems = items.sort((a, b) => {
            return b.kills - a.kills
        })

        const Final = items.map(o => `**-${o.name}` + '> **' + o.kills).join('\n');

        const EndsIn = new MessageButton()
        .setCustomId('test')
        .setLabel('Ends in <t:1644787800:R>')
        .setEmoji('🕐')
        .setStyle('SECONDARY')
        const EndsINR = new MessageActionRow().addComponents([EndsIn])

        const LeaderBoardEmbed = new MessageEmbed()
            .setTitle(`Hamadas Bizzare Challenges: Competitve`)
            .setColor(colors.DEFAULT)
            .setThumbnail(`https://cdn.discordapp.com/icons/439890528583286784/a_9fab45211259bec7cb5e54c16156d3d7.gif?size=512`)
            .setDescription(`**This weeks challenge: [${McEmotes.Bat} Bat Kills](${'https://minecraft.fandom.com/wiki/Bat'})**\nAtleast **2** kills required, indirect kills **don't** count\n\n${Final}\n\n**🕐 Ends <t:1644787800:R>**`)
            .setFooter({
                text: `HamadaCraft stats powered by GBF, Launched by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

        return interaction.reply({
            embeds: [LeaderBoardEmbed],
        })

    }
}