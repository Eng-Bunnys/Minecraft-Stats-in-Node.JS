//Read me first
/**
Not everything is explained so if you don't know what you're doing, dont change the code
The "User stats" is the Json file(s) for the users
To alter the number of players that this system can support edit the user settings 
The Jsons for colors, emojis, titles, McEmotes are provided but you will have to make your own emojis (If your bot is not in the emojis server)
Uses Discord.JS v13.6.0
A package.json file is provided, run "npm install" to install all of the packages
This file will continue to be updated as long as HamadaCraft S3 is live
This wasn't made to be very newbie friendly and editable, so if you don't understand I don't blame you
*/


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

const {
  TOKEN
} = require('../../config/GBFconfig.json')

const McEmotes = require('../Admin/MC emotes.json')
//User stats
const Bunny = require('../Admin/stats/8d030b6d-e437-34ff-9648-d5709d7cce09.json');
const Boda = require('../Admin/stats/1ca9bfd4-35e4-32d5-a9ad-810c51720064.json');
const Yoda = require('../Admin/stats/9dcaaafa-3d5b-3bb6-8b87-56db6938f2e2.json');
const Ayato = require('../Admin/stats/57695b16-f306-3ec9-9df5-1b30e23fdb49.json');
const Grep = require('../Admin/stats/e4f932e9-0985-3d11-a7ba-7de1928dfc26.json');
const Majkr = require('../Admin/stats/f4c27a74-14ed-3488-9e65-27290fa2303e.json');
const Wael = require('../Admin/stats/10490532-8061-3e58-a694-cb561cb00045.json');

const randoStrings = require("randostrings");
const random = new randoStrings

//For slash commands
const {
  delay,
  cmToM
} = require('../../utils/engine');
//Handler
module.exports = class Statslash extends SlashCommand {
  constructor(client) {
    super(client, {
      name: "stats",
      category: "Stats",
      description: "Gives stats for HamadaCraft players",
      usage: "/stats <user>",
      examples: "/stats Bunnys",

      options: [{
        name: "user",
        description: "User to get their stats",
        choices: [{
          name: "Bunnys",
          value: "Bunnys"
        }, {
          name: "Zoinknub",
          value: "zoinknub"
        }, {
          name: "XBabYoda",
          value: "XBabYoda"
        }, {
          name: "Ayato",
          value: "Ayato"
        }, {
          name: "Mighty_Monster64",
          value: "Mighty_Monster64"
        }, {
          name: "MAJIKOR_X",
          value: "MAJIKOR_X"
        }, {
          name: "firecristal",
          value: "firecristal"
        }], //Goes on to 20
        type: "STRING",
        required: true
      }],

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

    const UserChoice = interaction.options.getString('user');

    if (interaction.user.id !== '333644367539470337') return interaction.reply({
      content: `Menu closed, dev only`
    })

    //Settings

    let ancientDebrisM
    let NormalDiamondOre
    let DeepSlateDiamondOre
    let NormalGoldOre
    let DeepSlateGoldOre
    let NetherGoldOre
    let NormalIronore
    let DeepSlateIronOre
    let NormalCoalOre
    let DeepSlateCoalOre
    let NormalLapizOre
    let DeepSlateLapizOre
    let NormalRedStoneOre
    let DeepSlateRedtStoneOre
    let NquartzOreM

    let ancientDebrisP
    let diamondOreP
    let goldOreP
    let NgoldOreP
    let ironOreP
    let coalOreP
    let lapizOreP
    let redstoneOreP
    let NquartzOreP

    let zombieK
    let endermanK
    let skeliK
    let spiderK
    let witherSk
    let creeperK
    let chickenK
    let cowK
    let sheepK
    let pigK
    let codK
    let salmonK
    let villagerK
    let totalKilled

    let NetheriteIngotCR
    let N_Pickaxe
    let N_Sword
    let N_Shovel
    let N_Axe
    let D_Pickaxe
    let D_Sword
    let D_Shovel
    let D_Axe
    let N_ChestPlate
    let N_Leggings
    let N_Helmet
    let N_Boots
    let D_ChestPlate
    let D_Leggings
    let D_Helmet
    let D_Boots

    let pillagerKills
    let vindicatorKills
    let ravagerKills
    let witchKills
    let evokerKills

    let tradedC
    let talkedToVillager
    let animalsBred
    let damageDelt
    let damageTaken
    let playersKilled
    let killedByPlayer
    let deathsc
    let timeSinceDeathS
    let raidWin
    let raidTriggered

    let playTimeS
    let distanceClimbedC
    let distanceCrouchedC
    let distanceFallenC
    let distanceFlowenC
    let distanceSprintedC
    let distanceSwamC
    let distanceWalkedC
    let distanceWalkedOnWaterC
    let distanceWalkedUnderWaterC
    let boatC
    let ElytraC
    let HorseC
    let MineCartC
    let PigC
    let StriderC
    let TimeSinceRest
    let TimeSlept
    let ItemsDropped
    let ItemsEnchanted


    const NextPage = new MessageButton()
      .setCustomId('page2')
      .setStyle('PRIMARY')
      .setLabel('Page 2')
      .setEmoji(`▶`)
    const pageOne = new MessageButton()
      .setCustomId('page1')
      .setStyle('PRIMARY')
      .setLabel('Page 1')
      .setEmoji(`◀`)
    const NextPageD = new MessageButton()
      .setCustomId('pageD1')
      .setStyle('PRIMARY')
      .setLabel('Page 2')
      .setEmoji(`▶`)
      .setDisabled(true)
    const pageOneD = new MessageButton()
      .setCustomId('page1D')
      .setStyle('PRIMARY')
      .setLabel('Page 1')
      .setEmoji(`◀`)
      .setDisabled(true)

    const pageOneRow = new MessageActionRow().addComponents([pageOneD, NextPage])
    const pageTwoRow = new MessageActionRow().addComponents([pageOne, NextPageD])

    let target

    let GamerTag

    if (UserChoice === 'Bunnys') {
      target = 'Bunny'
      GamerTag = 'DepressedBunnys'
    } else if (UserChoice === 'zoinknub') {
      target = 'Boda'
      GamerTag = 'zoinknub'
    } else if (UserChoice === 'XBabYoda') {
      target = 'Yoda'
      GamerTag = 'XBabYoda'
    } else if (UserChoice === 'Ayato') {
      target = 'Ayato'
      GamerTag = 'Ayato'
    } else if (UserChoice === 'Mighty_Monster64') {
      target = 'Grep'
      GamerTag = 'Mighty_Monster64'
    } else if (UserChoice === 'MAJIKOR_X') {
      target = 'Majkor'
      GamerTag = 'MAJIKOR_X'
    } else if (UserChoice === 'firecristal') {
      target = 'Wael'
      GamerTag = 'firecristal'
    }


    const BunnyStats = Bunny.stats
    const BodaStats = Boda.stats
    const YehiaStats = Yoda.stats
    const AyatoStats = Ayato.stats
    const GrepStats = Grep.stats
    const MajkorStats = Majkr.stats
    const WaelStats = Wael.stats

    //Buttons 
    const MinedB = new MessageButton()
      .setCustomId('mined')
      .setLabel('Mined')
      .setStyle('SECONDARY')
      .setEmoji('<:pickaxe:935586775701815297>')
    const KilledB = new MessageButton()
      .setCustomId('killed')
      .setLabel('Killed')
      .setStyle('SECONDARY')
      .setEmoji('<:pepeSword:936298779336933408>')
    const CraftedB = new MessageButton()
      .setCustomId('crafted')
      .setLabel('Crafted')
      .setStyle('SECONDARY')
      .setEmoji('<:craftingTable:936299408058900490>')
    const MiscB = new MessageButton()
      .setCustomId('misc')
      .setLabel('Misc')
      .setStyle('SECONDARY')
      .setEmoji(McEmotes.Cake)
    const CloseMenuB = new MessageButton()
      .setCustomId('close')
      .setEmoji(emojis.ERROR)
      .setStyle('DANGER')
    const MainRow = new MessageActionRow().addComponents([MinedB, KilledB, CraftedB, MiscB, CloseMenuB])
    const CloseMenuR = new MessageActionRow().addComponents([CloseMenuB])

    const goBackMined = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId('gobackM')
        .setStyle('SECONDARY')
        .setLabel('Main Menu')
        .setEmoji(McEmotes.Steve)
      )
    const goBackKilled = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId('gobackK')
        .setStyle('SECONDARY')
        .setLabel('Main Menu')
        .setEmoji(McEmotes.Steve)
      )
    const goBackCrafted = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId('gobackC')
        .setStyle('SECONDARY')
        .setLabel('Main Menu')
        .setEmoji(McEmotes.Steve)
      )
    const goBackMisc = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId('gobackM')
        .setStyle('SECONDARY')
        .setLabel('Main Menu')
        .setEmoji(McEmotes.Steve)
      )

    const MainEmbed = new MessageEmbed()
      .setTitle('HamadaCraft Stats')
      .setColor(colors.DEFAULT)
      .setDescription(`Hey ${interaction.user.username}!\nPlease use the buttons below to start using the stats menu, you are looking at ${GamerTag}'s stats`)
      .setFooter({
        text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL()
      })
      .setTimestamp()

    await interaction.reply({
      embeds: [MainEmbed],
      components: [MainRow]
    })

    await interaction.followUp({
      content: `**Warning:**\nAfter **15 seconds** of inactivity you will have to re-run the command, the menu automatically closes after 5 **minutes** to preserve resources`,
      ephemeral: true
    })

    //Filter for buttons 
    const filter = i => {
      return i.user.id === interaction.user.id;
    };
    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      time: 297000,
      idle: 15000
    });

    const inactiveE = new MessageActionRow()
      .addComponents(new MessageButton()
        .setCustomId('test')
        .setStyle('SECONDARY')
        .setLabel('Menu no longer active')
        .setDisabled(true)
      )

    setTimeout(() => {
      return interaction.editReply({
        components: [inactiveE]
      })
    }, 297000);

    collector.on('collect', async i => {
      await i.deferUpdate();
      await delay(750);

      if (i.customId === 'gobackC') {
        interaction.editReply({
          embeds: [MainEmbed],
          components: [MainRow]
        })
      } else if (i.customId === 'gobackK') {
        interaction.editReply({
          embeds: [MainEmbed],
          components: [MainRow]
        })
      } else if (i.customId === 'gobackM') {
        interaction.editReply({
          embeds: [MainEmbed],
          components: [MainRow]
        })
      } else if (i.customId === 'close') {

        const closedE = new MessageEmbed()
          .setTitle('Menu closed')
          .setColor(colors.ERRORRED)
          .setDescription(`User aborted the process`)
          .setFooter({
            text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL()
          })
          .setTimestamp()

        collector.stop({
          reason: 'Menu closed'
        })

        await interaction.editReply({
          components: [inactiveE]
        })
        return

        /**
         * 
         * 
         * 
         * 
         * Mined
         * 
         * 
         * 
         * 
         */


      } else if (i.customId === 'mined') {

        if (target === 'Bunny') {

          //Stats
          try {

            if (BunnyStats['minecraft:mined'] !== undefined) {
              ancientDebrisM = (BunnyStats['minecraft:mined']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              NormalDiamondOre = Number(BunnyStats['minecraft:mined']['minecraft:diamond_ore'] ?? '0')
              DeepSlateDiamondOre = Number(BunnyStats['minecraft:mined']['minecraft:deepslate_diamond_ore'] ?? '0')
              NormalGoldOre = Number(BunnyStats['minecraft:mined']['minecraft:gold_ore'] ?? '0')
              DeepSlateGoldOre = Number(BunnyStats['minecraft:mined']['minecraft:deepslate_gold_ore'] ?? '0')
              NetherGoldOre = (BunnyStats['minecraft:mined']['minecraft:nether_gold_ore'] ?? '0').toLocaleString()
              NormalIronore = Number(BunnyStats['minecraft:mined']['minecraft:iron_ore'] ?? '0')
              DeepSlateIronOre = Number(BunnyStats['minecraft:mined']['minecraft:deepslate_iron_ore'] ?? '0')
              NormalCoalOre = Number(BunnyStats['minecraft:mined']['minecraft:coal_ore'] ?? '0')
              DeepSlateCoalOre = Number(BunnyStats['minecraft:mined']['minecraft:deepslate_coal_ore'] ?? '0')
              NormalLapizOre = Number(BunnyStats['minecraft:mined']['minecraft:lapis_ore'] ?? '0')
              DeepSlateLapizOre = Number(BunnyStats['minecraft:mined']['minecraft:deepslate_lapis_ore'] ?? '0')
              NormalRedStoneOre = Number(BunnyStats['minecraft:mined']['minecraft:redstone_ore'] ?? '0')
              DeepSlateRedtStoneOre = Number(BunnyStats['minecraft:mined']['minecraft:deepslate_redstone_ore'] ?? '0')
              NquartzOreM = (BunnyStats['minecraft:mined']['minecraft:nether_quartz_ore'] ?? '0').toLocaleString()
            } else {
              ancientDebrisM = 0
              NormalDiamondOre = 0
              DeepSlateDiamondOre = 0
              NetherGoldOre = 0
              NormalIronore = 0
              DeepSlateIronOre = 0
              NormalCoalOre = 0
              NormalLapizOre = 0
              DeepSlateLapizOre = 0
              NormalRedStoneOre = 0
              DeepSlateRedtStoneOre = 0
              NquartzOreM = 0
              NormalGoldOre = 0
              DeepSlateGoldOre = 0
              NormalCoalOre = 0
              DeepSlateCoalOre = 0
            }
            const CommonDiamondOre = (NormalDiamondOre + DeepSlateDiamondOre).toLocaleString()
            const CommonGoldOre = (NormalGoldOre + DeepSlateGoldOre).toLocaleString()
            const CommonIronOre = (NormalIronore + DeepSlateIronOre).toLocaleString()
            const CommonCoalOre = (NormalCoalOre + DeepSlateCoalOre).toLocaleString()
            const CommonLapizOre = (NormalLapizOre + DeepSlateLapizOre).toLocaleString()
            const redstoneOreComm = (NormalRedStoneOre + DeepSlateRedtStoneOre).toLocaleString()

            if (BunnyStats['minecraft:picked_up'] !== undefined) {
              ancientDebrisP = (BunnyStats['minecraft:picked_up']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              diamondOreP = (BunnyStats['minecraft:picked_up']['minecraft:diamond'] ?? '0').toLocaleString()
              goldOreP = (BunnyStats['minecraft:picked_up']['minecraft:raw_gold'] ?? '0').toLocaleString()
              NgoldOreP = (BunnyStats['minecraft:picked_up']['minecraft:gold_nugget'] ?? '0').toLocaleString()
              ironOreP = (BunnyStats['minecraft:picked_up']['minecraft:raw_iron'] ?? '0').toLocaleString()
              coalOreP = (BunnyStats['minecraft:picked_up']['minecraft:coal'] ?? '0').toLocaleString()
              lapizOreP = (BunnyStats['minecraft:picked_up']['minecraft:lapis_lazuli'] ?? '0').toLocaleString()
              redstoneOreP = (BunnyStats['minecraft:picked_up']['minecraft:redstone'] ?? '0').toLocaleString()
              NquartzOreP = (BunnyStats['minecraft:picked_up']['minecraft:quartz'] ?? '0').toLocaleString()
            } else {
              ancientDebrisP = 0
              diamondOreP = 0
              goldOreP = 0
              NgoldOreP = 0
              ironOreP = 0
              coalOreP = 0
              lapizOreP = 0
              redstoneOreP = 0
              NquartzOreP = 0
            }

            const BminedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Bunnys`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Bunnys || Mined & Picked Up`)
              .addFields({
                name: `${McEmotes.Netherite} Ancient Debris`,
                value: `**-Mined >** ${ancientDebrisM}\n**-Picked Up >** ${ancientDebrisP}`,
                inline: true
              }, {
                name: `${McEmotes.Diamond} Diamond Ore`,
                value: `**-Mined >** ${CommonDiamondOre}\n**-Picked Up >** ${diamondOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Gold} Gold Ore`,
                value: `**-Mined >** ${CommonGoldOre}\n**-Picked Up >** ${goldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.GoldNugget} Nether Gold Ore`,
                value: `**-Mined >** ${NetherGoldOre}\n**-Picked Up >** ${NgoldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Iron} Iron Ore`,
                value: `**-Mined >** ${CommonIronOre}\n**-Picked Up >** ${ironOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Coal} Coal Ore`,
                value: `**-Mined >** ${CommonCoalOre}\n**-Picked Up >** ${coalOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Lapis} Lapiz Lazuli`,
                value: `**-Mined >** ${CommonLapizOre}\n**-Picked Up >** ${lapizOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Redstone} Redstone`,
                value: `**-Mined >** ${redstoneOreComm}\n**-Picked Up >** ${redstoneOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Quartz} Quartz`,
                value: `**-Mined >** ${NquartzOreM}\n**-Picked Up >** ${NquartzOreP}`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BminedE],
              components: [goBackMined]
            })
          } catch (err) {

            const Bunnysender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            Bunnysender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Boda') {

          try {
            if (BodaStats['minecraft:mined'] !== undefined) {
              ancientDebrisM = (BodaStats['minecraft:mined']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              NormalDiamondOre = Number(BodaStats['minecraft:mined']['minecraft:diamond_ore'] ?? '0')
              DeepSlateDiamondOre = Number(BodaStats['minecraft:mined']['minecraft:deepslate_diamond_ore'] ?? '0')
              NormalGoldOre = Number(BodaStats['minecraft:mined']['minecraft:gold_ore'] ?? '0')
              DeepSlateGoldOre = Number(BodaStats['minecraft:mined']['minecraft:deepslate_gold_ore'] ?? '0')
              NetherGoldOre = (BodaStats['minecraft:mined']['minecraft:nether_gold_ore'] ?? '0').toLocaleString()
              NormalIronore = Number(BodaStats['minecraft:mined']['minecraft:iron_ore'] ?? '0')
              DeepSlateIronOre = Number(BodaStats['minecraft:mined']['minecraft:deepslate_iron_ore'] ?? '0')
              NormalCoalOre = Number(BodaStats['minecraft:mined']['minecraft:coal_ore'] ?? '0')
              DeepSlateCoalOre = Number(BodaStats['minecraft:mined']['minecraft:deepslate_coal_ore'] ?? '0')
              NormalLapizOre = Number(BodaStats['minecraft:mined']['minecraft:lapis_ore'] ?? '0')
              DeepSlateLapizOre = Number(BodaStats['minecraft:mined']['minecraft:deepslate_lapis_ore'] ?? '0')
              NormalRedStoneOre = Number(BodaStats['minecraft:mined']['minecraft:redstone_ore'] ?? '0')
              DeepSlateRedtStoneOre = Number(BodaStats['minecraft:mined']['minecraft:deepslate_redstone_ore'] ?? '0')
              NquartzOreM = (BodaStats['minecraft:mined']['minecraft:nether_quartz_ore'] ?? '0').toLocaleString()
            } else {
              ancientDebrisM = 0
              NormalDiamondOre = 0
              DeepSlateDiamondOre = 0
              NetherGoldOre = 0
              NormalIronore = 0
              DeepSlateIronOre = 0
              NormalCoalOre = 0
              NormalLapizOre = 0
              DeepSlateLapizOre = 0
              NormalRedStoneOre = 0
              DeepSlateRedtStoneOre = 0
              NquartzOreM = 0
              NormalGoldOre = 0
              DeepSlateGoldOre = 0
              NormalCoalOre = 0
              DeepSlateCoalOre = 0
            }
            const CommonDiamondOre = (NormalDiamondOre + DeepSlateDiamondOre).toLocaleString()
            const CommonGoldOre = (NormalGoldOre + DeepSlateGoldOre).toLocaleString()
            const CommonIronOre = (NormalIronore + DeepSlateIronOre).toLocaleString()
            const CommonCoalOre = (NormalCoalOre + DeepSlateCoalOre).toLocaleString()
            const CommonLapizOre = (NormalLapizOre + DeepSlateLapizOre).toLocaleString()
            const redstoneOreComm = (NormalRedStoneOre + DeepSlateRedtStoneOre).toLocaleString()

            if (BodaStats['minecraft:picked_up'] !== undefined) {
              ancientDebrisP = (BodaStats['minecraft:picked_up']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              diamondOreP = (BodaStats['minecraft:picked_up']['minecraft:diamond'] ?? '0').toLocaleString()
              goldOreP = (BodaStats['minecraft:picked_up']['minecraft:raw_gold'] ?? '0').toLocaleString()
              NgoldOreP = (BodaStats['minecraft:picked_up']['minecraft:gold_nugget'] ?? '0').toLocaleString()
              ironOreP = (BodaStats['minecraft:picked_up']['minecraft:raw_iron'] ?? '0').toLocaleString()
              coalOreP = (BodaStats['minecraft:picked_up']['minecraft:coal'] ?? '0').toLocaleString()
              lapizOreP = (BodaStats['minecraft:picked_up']['minecraft:lapis_lazuli'] ?? '0').toLocaleString()
              redstoneOreP = (BodaStats['minecraft:picked_up']['minecraft:redstone'] ?? '0').toLocaleString()
              NquartzOreP = (BodaStats['minecraft:picked_up']['minecraft:quartz'] ?? '0').toLocaleString()
            } else {
              ancientDebrisP = 0
              diamondOreP = 0
              goldOreP = 0
              NgoldOreP = 0
              ironOreP = 0
              coalOreP = 0
              lapizOreP = 0
              redstoneOreP = 0
              NquartzOreP = 0
            }

            const BminedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for zoinknub`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for zoinknub || Mined & Picked Up`)
              .addFields({
                name: `${McEmotes.Netherite} Ancient Debris`,
                value: `**-Mined >** ${ancientDebrisM}\n**-Picked Up >** ${ancientDebrisP}`,
                inline: true
              }, {
                name: `${McEmotes.Diamond} Diamond Ore`,
                value: `**-Mined >** ${CommonDiamondOre}\n**-Picked Up >** ${diamondOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Gold} Gold Ore`,
                value: `**-Mined >** ${CommonGoldOre}\n**-Picked Up >** ${goldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.GoldNugget} Nether Gold Ore`,
                value: `**-Mined >** ${NetherGoldOre}\n**-Picked Up >** ${NgoldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Iron} Iron Ore`,
                value: `**-Mined >** ${CommonIronOre}\n**-Picked Up >** ${ironOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Coal} Coal Ore`,
                value: `**-Mined >** ${CommonCoalOre}\n**-Picked Up >** ${coalOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Lapis} Lapiz Lazuli`,
                value: `**-Mined >** ${CommonLapizOre}\n**-Picked Up >** ${lapizOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Redstone} Redstone`,
                value: `**-Mined >** ${redstoneOreComm}\n**-Picked Up >** ${redstoneOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Quartz} Quartz`,
                value: `**-Mined >** ${NquartzOreM}\n**-Picked Up >** ${NquartzOreP}`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BminedE],
              components: [goBackMined]
            })
          } catch (err) {

            const Bunnysender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            Bunnysender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Yoda') {

          try {

            if (YehiaStats['minecraft:mined'] !== undefined) {
              ancientDebrisM = (YehiaStats['minecraft:mined']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              NormalDiamondOre = Number(YehiaStats['minecraft:mined']['minecraft:diamond_ore'] ?? '0')
              DeepSlateDiamondOre = Number(YehiaStats['minecraft:mined']['minecraft:deepslate_diamond_ore'] ?? '0')
              NormalGoldOre = Number(YehiaStats['minecraft:mined']['minecraft:gold_ore'] ?? '0')
              DeepSlateGoldOre = Number(YehiaStats['minecraft:mined']['minecraft:deepslate_gold_ore'] ?? '0')
              NetherGoldOre = (YehiaStats['minecraft:mined']['minecraft:nether_gold_ore'] ?? '0').toLocaleString()
              NormalIronore = Number(YehiaStats['minecraft:mined']['minecraft:iron_ore'] ?? '0')
              DeepSlateIronOre = Number(YehiaStats['minecraft:mined']['minecraft:deepslate_iron_ore'] ?? '0')
              NormalCoalOre = Number(YehiaStats['minecraft:mined']['minecraft:coal_ore'] ?? '0')
              DeepSlateCoalOre = Number(YehiaStats['minecraft:mined']['minecraft:deepslate_coal_ore'] ?? '0')
              NormalLapizOre = Number(YehiaStats['minecraft:mined']['minecraft:lapis_ore'] ?? '0')
              DeepSlateLapizOre = Number(YehiaStats['minecraft:mined']['minecraft:deepslate_lapis_ore'] ?? '0')
              NormalRedStoneOre = Number(YehiaStats['minecraft:mined']['minecraft:redstone_ore'] ?? '0')
              DeepSlateRedtStoneOre = Number(YehiaStats['minecraft:mined']['minecraft:deepslate_redstone_ore'] ?? '0')
              NquartzOreM = (YehiaStats['minecraft:mined']['minecraft:nether_quartz_ore'] ?? '0').toLocaleString()
            } else {
              ancientDebrisM = 0
              NormalDiamondOre = 0
              DeepSlateDiamondOre = 0
              NetherGoldOre = 0
              NormalIronore = 0
              DeepSlateIronOre = 0
              NormalCoalOre = 0
              NormalLapizOre = 0
              DeepSlateLapizOre = 0
              NormalRedStoneOre = 0
              DeepSlateRedtStoneOre = 0
              NquartzOreM = 0
              NormalGoldOre = 0
              DeepSlateGoldOre = 0
              NormalCoalOre = 0
              DeepSlateCoalOre = 0
            }
            const CommonDiamondOre = (NormalDiamondOre + DeepSlateDiamondOre).toLocaleString()
            const CommonGoldOre = (NormalGoldOre + DeepSlateGoldOre).toLocaleString()
            const CommonIronOre = (NormalIronore + DeepSlateIronOre).toLocaleString()
            const CommonCoalOre = (NormalCoalOre + DeepSlateCoalOre).toLocaleString()
            const CommonLapizOre = (NormalLapizOre + DeepSlateLapizOre).toLocaleString()
            const redstoneOreComm = (NormalRedStoneOre + DeepSlateRedtStoneOre).toLocaleString()

            if (YehiaStats['minecraft:picked_up'] !== undefined) {
              ancientDebrisP = (YehiaStats['minecraft:picked_up']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              diamondOreP = (YehiaStats['minecraft:picked_up']['minecraft:diamond'] ?? '0').toLocaleString()
              goldOreP = (YehiaStats['minecraft:picked_up']['minecraft:raw_gold'] ?? '0').toLocaleString()
              NgoldOreP = (YehiaStats['minecraft:picked_up']['minecraft:gold_nugget'] ?? '0').toLocaleString()
              ironOreP = (YehiaStats['minecraft:picked_up']['minecraft:raw_iron'] ?? '0').toLocaleString()
              coalOreP = (YehiaStats['minecraft:picked_up']['minecraft:coal'] ?? '0').toLocaleString()
              lapizOreP = (YehiaStats['minecraft:picked_up']['minecraft:lapis_lazuli'] ?? '0').toLocaleString()
              redstoneOreP = (YehiaStats['minecraft:picked_up']['minecraft:redstone'] ?? '0').toLocaleString()
              NquartzOreP = (YehiaStats['minecraft:picked_up']['minecraft:quartz'] ?? '0').toLocaleString()
            } else {
              ancientDebrisP = 0
              diamondOreP = 0
              goldOreP = 0
              NgoldOreP = 0
              ironOreP = 0
              coalOreP = 0
              lapizOreP = 0
              redstoneOreP = 0
              NquartzOreP = 0
            }

            const BminedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for XBabYoda`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for XBabYoda || Mined & Picked Up`)
              .addFields({
                name: `${McEmotes.Netherite} Ancient Debris`,
                value: `**-Mined >** ${ancientDebrisM}\n**-Picked Up >** ${ancientDebrisP}`,
                inline: true
              }, {
                name: `${McEmotes.Diamond} Diamond Ore`,
                value: `**-Mined >** ${CommonDiamondOre}\n**-Picked Up >** ${diamondOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Gold} Gold Ore`,
                value: `**-Mined >** ${CommonGoldOre}\n**-Picked Up >** ${goldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.GoldNugget} Nether Gold Ore`,
                value: `**-Mined >** ${NetherGoldOre}\n**-Picked Up >** ${NgoldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Iron} Iron Ore`,
                value: `**-Mined >** ${CommonIronOre}\n**-Picked Up >** ${ironOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Coal} Coal Ore`,
                value: `**-Mined >** ${CommonCoalOre}\n**-Picked Up >** ${coalOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Lapis} Lapiz Lazuli`,
                value: `**-Mined >** ${CommonLapizOre}\n**-Picked Up >** ${lapizOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Redstone} Redstone`,
                value: `**-Mined >** ${redstoneOreComm}\n**-Picked Up >** ${redstoneOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Quartz} Quartz`,
                value: `**-Mined >** ${NquartzOreM}\n**-Picked Up >** ${NquartzOreP}`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BminedE],
              components: [goBackMined]
            })
          } catch (err) {
            const Bunnysender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            Bunnysender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Ayato') {
          try {

            if (AyatoStats['minecraft:mined'] !== undefined) {
              ancientDebrisM = (AyatoStats['minecraft:mined']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              NormalDiamondOre = Number(AyatoStats['minecraft:mined']['minecraft:diamond_ore'] ?? '0')
              DeepSlateDiamondOre = Number(AyatoStats['minecraft:mined']['minecraft:deepslate_diamond_ore'] ?? '0')
              NormalGoldOre = Number(AyatoStats['minecraft:mined']['minecraft:gold_ore'] ?? '0')
              DeepSlateGoldOre = Number(AyatoStats['minecraft:mined']['minecraft:deepslate_gold_ore'] ?? '0')
              NetherGoldOre = (AyatoStats['minecraft:mined']['minecraft:nether_gold_ore'] ?? '0').toLocaleString()
              NormalIronore = Number(AyatoStats['minecraft:mined']['minecraft:iron_ore'] ?? '0')
              DeepSlateIronOre = Number(AyatoStats['minecraft:mined']['minecraft:deepslate_iron_ore'] ?? '0')
              NormalCoalOre = Number(AyatoStats['minecraft:mined']['minecraft:coal_ore'] ?? '0')
              DeepSlateCoalOre = Number(AyatoStats['minecraft:mined']['minecraft:deepslate_coal_ore'] ?? '0')
              NormalLapizOre = Number(AyatoStats['minecraft:mined']['minecraft:lapis_ore'] ?? '0')
              DeepSlateLapizOre = Number(AyatoStats['minecraft:mined']['minecraft:deepslate_lapis_ore'] ?? '0')
              NormalRedStoneOre = Number(AyatoStats['minecraft:mined']['minecraft:redstone_ore'] ?? '0')
              DeepSlateRedtStoneOre = Number(AyatoStats['minecraft:mined']['minecraft:deepslate_redstone_ore'] ?? '0')
              NquartzOreM = (AyatoStats['minecraft:mined']['minecraft:nether_quartz_ore'] ?? '0').toLocaleString()
            } else {
              ancientDebrisM = 0
              NormalDiamondOre = 0
              DeepSlateDiamondOre = 0
              NetherGoldOre = 0
              NormalIronore = 0
              DeepSlateIronOre = 0
              NormalCoalOre = 0
              NormalLapizOre = 0
              DeepSlateLapizOre = 0
              NormalRedStoneOre = 0
              DeepSlateRedtStoneOre = 0
              NquartzOreM = 0
              NormalGoldOre = 0
              DeepSlateGoldOre = 0
              NormalCoalOre = 0
              DeepSlateCoalOre = 0
            }
            const CommonDiamondOre = (NormalDiamondOre + DeepSlateDiamondOre).toLocaleString()
            const CommonGoldOre = (NormalGoldOre + DeepSlateGoldOre).toLocaleString()
            const CommonIronOre = (NormalIronore + DeepSlateIronOre).toLocaleString()
            const CommonCoalOre = (NormalCoalOre + DeepSlateCoalOre).toLocaleString()
            const CommonLapizOre = (NormalLapizOre + DeepSlateLapizOre).toLocaleString()
            const redstoneOreComm = (NormalRedStoneOre + DeepSlateRedtStoneOre).toLocaleString()

            if (AyatoStats['minecraft:picked_up'] !== undefined) {
              ancientDebrisP = (AyatoStats['minecraft:picked_up']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              diamondOreP = (AyatoStats['minecraft:picked_up']['minecraft:diamond'] ?? '0').toLocaleString()
              goldOreP = (AyatoStats['minecraft:picked_up']['minecraft:raw_gold'] ?? '0').toLocaleString()
              NgoldOreP = (AyatoStats['minecraft:picked_up']['minecraft:gold_nugget'] ?? '0').toLocaleString()
              ironOreP = (AyatoStats['minecraft:picked_up']['minecraft:raw_iron'] ?? '0').toLocaleString()
              coalOreP = (AyatoStats['minecraft:picked_up']['minecraft:coal'] ?? '0').toLocaleString()
              lapizOreP = (AyatoStats['minecraft:picked_up']['minecraft:lapis_lazuli'] ?? '0').toLocaleString()
              redstoneOreP = (AyatoStats['minecraft:picked_up']['minecraft:redstone'] ?? '0').toLocaleString()
              NquartzOreP = (AyatoStats['minecraft:picked_up']['minecraft:quartz'] ?? '0').toLocaleString()
            } else {
              ancientDebrisP = 0
              diamondOreP = 0
              goldOreP = 0
              NgoldOreP = 0
              ironOreP = 0
              coalOreP = 0
              lapizOreP = 0
              redstoneOreP = 0
              NquartzOreP = 0
            }

            const BminedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Ayato`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Ayato || Mined & Picked Up`)
              .addFields({
                name: `${McEmotes.Netherite} Ancient Debris`,
                value: `**-Mined >** ${ancientDebrisM}\n**-Picked Up >** ${ancientDebrisP}`,
                inline: true
              }, {
                name: `${McEmotes.Diamond} Diamond Ore`,
                value: `**-Mined >** ${CommonDiamondOre}\n**-Picked Up >** ${diamondOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Gold} Gold Ore`,
                value: `**-Mined >** ${CommonGoldOre}\n**-Picked Up >** ${goldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.GoldNugget} Nether Gold Ore`,
                value: `**-Mined >** ${NetherGoldOre}\n**-Picked Up >** ${NgoldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Iron} Iron Ore`,
                value: `**-Mined >** ${CommonIronOre}\n**-Picked Up >** ${ironOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Coal} Coal Ore`,
                value: `**-Mined >** ${CommonCoalOre}\n**-Picked Up >** ${coalOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Lapis} Lapiz Lazuli`,
                value: `**-Mined >** ${CommonLapizOre}\n**-Picked Up >** ${lapizOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Redstone} Redstone`,
                value: `**-Mined >** ${redstoneOreComm}\n**-Picked Up >** ${redstoneOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Quartz} Quartz`,
                value: `**-Mined >** ${NquartzOreM}\n**-Picked Up >** ${NquartzOreP}`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BminedE],
              components: [goBackMined]
            })
          } catch (err) {
            const Bunnysender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            Bunnysender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Grep') {

          try {
            if (GrepStats['minecraft:mined'] !== undefined) {
              ancientDebrisM = (GrepStats['minecraft:mined']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              NormalDiamondOre = Number(GrepStats['minecraft:mined']['minecraft:diamond_ore'] ?? '0')
              DeepSlateDiamondOre = Number(GrepStats['minecraft:mined']['minecraft:deepslate_diamond_ore'] ?? '0')
              NormalGoldOre = Number(GrepStats['minecraft:mined']['minecraft:gold_ore'] ?? '0')
              DeepSlateGoldOre = Number(GrepStats['minecraft:mined']['minecraft:deepslate_gold_ore'] ?? '0')
              NetherGoldOre = (GrepStats['minecraft:mined']['minecraft:nether_gold_ore'] ?? '0').toLocaleString()
              NormalIronore = Number(GrepStats['minecraft:mined']['minecraft:iron_ore'] ?? '0')
              DeepSlateIronOre = Number(GrepStats['minecraft:mined']['minecraft:deepslate_iron_ore'] ?? '0')
              NormalCoalOre = Number(GrepStats['minecraft:mined']['minecraft:coal_ore'] ?? '0')
              DeepSlateCoalOre = Number(GrepStats['minecraft:mined']['minecraft:deepslate_coal_ore'] ?? '0')
              NormalLapizOre = Number(GrepStats['minecraft:mined']['minecraft:lapis_ore'] ?? '0')
              DeepSlateLapizOre = Number(GrepStats['minecraft:mined']['minecraft:deepslate_lapis_ore'] ?? '0')
              NormalRedStoneOre = Number(GrepStats['minecraft:mined']['minecraft:redstone_ore'] ?? '0')
              DeepSlateRedtStoneOre = Number(GrepStats['minecraft:mined']['minecraft:deepslate_redstone_ore'] ?? '0')
              NquartzOreM = (GrepStats['minecraft:mined']['minecraft:nether_quartz_ore'] ?? '0').toLocaleString()
            } else {
              ancientDebrisM = 0
              NormalDiamondOre = 0
              DeepSlateDiamondOre = 0
              NetherGoldOre = 0
              NormalIronore = 0
              DeepSlateIronOre = 0
              NormalCoalOre = 0
              NormalLapizOre = 0
              DeepSlateLapizOre = 0
              NormalRedStoneOre = 0
              DeepSlateRedtStoneOre = 0
              NquartzOreM = 0
              NormalGoldOre = 0
              DeepSlateGoldOre = 0
              NormalCoalOre = 0
              DeepSlateCoalOre = 0
            }
            const CommonDiamondOre = (NormalDiamondOre + DeepSlateDiamondOre).toLocaleString()
            const CommonGoldOre = (NormalGoldOre + DeepSlateGoldOre).toLocaleString()
            const CommonIronOre = (NormalIronore + DeepSlateIronOre).toLocaleString()
            const CommonCoalOre = (NormalCoalOre + DeepSlateCoalOre).toLocaleString()
            const CommonLapizOre = (NormalLapizOre + DeepSlateLapizOre).toLocaleString()
            const redstoneOreComm = (NormalRedStoneOre + DeepSlateRedtStoneOre).toLocaleString()

            if (GrepStats['minecraft:picked_up'] !== undefined) {
              ancientDebrisP = (GrepStats['minecraft:picked_up']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              diamondOreP = (GrepStats['minecraft:picked_up']['minecraft:diamond'] ?? '0').toLocaleString()
              goldOreP = (GrepStats['minecraft:picked_up']['minecraft:raw_gold'] ?? '0').toLocaleString()
              NgoldOreP = (GrepStats['minecraft:picked_up']['minecraft:gold_nugget'] ?? '0').toLocaleString()
              ironOreP = (GrepStats['minecraft:picked_up']['minecraft:raw_iron'] ?? '0').toLocaleString()
              coalOreP = (GrepStats['minecraft:picked_up']['minecraft:coal'] ?? '0').toLocaleString()
              lapizOreP = (GrepStats['minecraft:picked_up']['minecraft:lapis_lazuli'] ?? '0').toLocaleString()
              redstoneOreP = (GrepStats['minecraft:picked_up']['minecraft:redstone'] ?? '0').toLocaleString()
              NquartzOreP = (GrepStats['minecraft:picked_up']['minecraft:quartz'] ?? '0').toLocaleString()
            } else {
              ancientDebrisP = 0
              diamondOreP = 0
              goldOreP = 0
              NgoldOreP = 0
              ironOreP = 0
              coalOreP = 0
              lapizOreP = 0
              redstoneOreP = 0
              NquartzOreP = 0
            }

            const BminedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Grep`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Grep || Mined & Picked Up`)
              .addFields({
                name: `${McEmotes.Netherite} Ancient Debris`,
                value: `**-Mined >** ${ancientDebrisM}\n**-Picked Up >** ${ancientDebrisP}`,
                inline: true
              }, {
                name: `${McEmotes.Diamond} Diamond Ore`,
                value: `**-Mined >** ${CommonDiamondOre}\n**-Picked Up >** ${diamondOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Gold} Gold Ore`,
                value: `**-Mined >** ${CommonGoldOre}\n**-Picked Up >** ${goldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.GoldNugget} Nether Gold Ore`,
                value: `**-Mined >** ${NetherGoldOre}\n**-Picked Up >** ${NgoldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Iron} Iron Ore`,
                value: `**-Mined >** ${CommonIronOre}\n**-Picked Up >** ${ironOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Coal} Coal Ore`,
                value: `**-Mined >** ${CommonCoalOre}\n**-Picked Up >** ${coalOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Lapis} Lapiz Lazuli`,
                value: `**-Mined >** ${CommonLapizOre}\n**-Picked Up >** ${lapizOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Redstone} Redstone`,
                value: `**-Mined >** ${redstoneOreComm}\n**-Picked Up >** ${redstoneOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Quartz} Quartz`,
                value: `**-Mined >** ${NquartzOreM}\n**-Picked Up >** ${NquartzOreP}`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BminedE],
              components: [goBackMined]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Majkor') {

          try {

            if (MajkorStats['minecraft:mined'] !== undefined) {
              ancientDebrisM = (MajkorStats['minecraft:mined']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              NormalDiamondOre = Number(MajkorStats['minecraft:mined']['minecraft:diamond_ore'] ?? '0')
              DeepSlateDiamondOre = Number(MajkorStats['minecraft:mined']['minecraft:deepslate_diamond_ore'] ?? '0')
              NormalGoldOre = Number(MajkorStats['minecraft:mined']['minecraft:gold_ore'] ?? '0')
              DeepSlateGoldOre = Number(MajkorStats['minecraft:mined']['minecraft:deepslate_gold_ore'] ?? '0')
              NetherGoldOre = (MajkorStats['minecraft:mined']['minecraft:nether_gold_ore'] ?? '0').toLocaleString()
              NormalIronore = Number(MajkorStats['minecraft:mined']['minecraft:iron_ore'] ?? '0')
              DeepSlateIronOre = Number(MajkorStats['minecraft:mined']['minecraft:deepslate_iron_ore'] ?? '0')
              NormalCoalOre = Number(MajkorStats['minecraft:mined']['minecraft:coal_ore'] ?? '0')
              DeepSlateCoalOre = Number(MajkorStats['minecraft:mined']['minecraft:deepslate_coal_ore'] ?? '0')
              NormalLapizOre = Number(MajkorStats['minecraft:mined']['minecraft:lapis_ore'] ?? '0')
              DeepSlateLapizOre = Number(MajkorStats['minecraft:mined']['minecraft:deepslate_lapis_ore'] ?? '0')
              NormalRedStoneOre = Number(MajkorStats['minecraft:mined']['minecraft:redstone_ore'] ?? '0')
              DeepSlateRedtStoneOre = Number(MajkorStats['minecraft:mined']['minecraft:deepslate_redstone_ore'] ?? '0')
              NquartzOreM = (MajkorStats['minecraft:mined']['minecraft:nether_quartz_ore'] ?? '0').toLocaleString()
            } else {
              ancientDebrisM = 0
              NormalDiamondOre = 0
              DeepSlateDiamondOre = 0
              NetherGoldOre = 0
              NormalIronore = 0
              DeepSlateIronOre = 0
              NormalCoalOre = 0
              NormalLapizOre = 0
              DeepSlateLapizOre = 0
              NormalRedStoneOre = 0
              DeepSlateRedtStoneOre = 0
              NquartzOreM = 0
              NormalGoldOre = 0
              DeepSlateGoldOre = 0
              NormalCoalOre = 0
              DeepSlateCoalOre = 0
            }
            const CommonDiamondOre = (NormalDiamondOre + DeepSlateDiamondOre).toLocaleString()
            const CommonGoldOre = (NormalGoldOre + DeepSlateGoldOre).toLocaleString()
            const CommonIronOre = (NormalIronore + DeepSlateIronOre).toLocaleString()
            const CommonCoalOre = (NormalCoalOre + DeepSlateCoalOre).toLocaleString()
            const CommonLapizOre = (NormalLapizOre + DeepSlateLapizOre).toLocaleString()
            const redstoneOreComm = (NormalRedStoneOre + DeepSlateRedtStoneOre).toLocaleString()

            if (MajkorStats['minecraft:picked_up'] !== undefined) {
              ancientDebrisP = (MajkorStats['minecraft:picked_up']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              diamondOreP = (MajkorStats['minecraft:picked_up']['minecraft:diamond'] ?? '0').toLocaleString()
              goldOreP = (MajkorStats['minecraft:picked_up']['minecraft:raw_gold'] ?? '0').toLocaleString()
              NgoldOreP = (MajkorStats['minecraft:picked_up']['minecraft:gold_nugget'] ?? '0').toLocaleString()
              ironOreP = (MajkorStats['minecraft:picked_up']['minecraft:raw_iron'] ?? '0').toLocaleString()
              coalOreP = (MajkorStats['minecraft:picked_up']['minecraft:coal'] ?? '0').toLocaleString()
              lapizOreP = (MajkorStats['minecraft:picked_up']['minecraft:lapis_lazuli'] ?? '0').toLocaleString()
              redstoneOreP = (MajkorStats['minecraft:picked_up']['minecraft:redstone'] ?? '0').toLocaleString()
              NquartzOreP = (MajkorStats['minecraft:picked_up']['minecraft:quartz'] ?? '0').toLocaleString()
            } else {
              ancientDebrisP = 0
              diamondOreP = 0
              goldOreP = 0
              NgoldOreP = 0
              ironOreP = 0
              coalOreP = 0
              lapizOreP = 0
              redstoneOreP = 0
              NquartzOreP = 0
            }

            const BminedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Majkor`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Majkor || Mined & Picked Up`)
              .addFields({
                name: `${McEmotes.Netherite} Ancient Debris`,
                value: `**-Mined >** ${ancientDebrisM}\n**-Picked Up >** ${ancientDebrisP}`,
                inline: true
              }, {
                name: `${McEmotes.Diamond} Diamond Ore`,
                value: `**-Mined >** ${CommonDiamondOre}\n**-Picked Up >** ${diamondOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Gold} Gold Ore`,
                value: `**-Mined >** ${CommonGoldOre}\n**-Picked Up >** ${goldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.GoldNugget} Nether Gold Ore`,
                value: `**-Mined >** ${NetherGoldOre}\n**-Picked Up >** ${NgoldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Iron} Iron Ore`,
                value: `**-Mined >** ${CommonIronOre}\n**-Picked Up >** ${ironOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Coal} Coal Ore`,
                value: `**-Mined >** ${CommonCoalOre}\n**-Picked Up >** ${coalOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Lapis} Lapiz Lazuli`,
                value: `**-Mined >** ${CommonLapizOre}\n**-Picked Up >** ${lapizOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Redstone} Redstone`,
                value: `**-Mined >** ${redstoneOreComm}\n**-Picked Up >** ${redstoneOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Quartz} Quartz`,
                value: `**-Mined >** ${NquartzOreM}\n**-Picked Up >** ${NquartzOreP}`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BminedE],
              components: [goBackMined]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Wael') {

          try {

            if (WaelStats['minecraft:mined'] !== undefined) {
              ancientDebrisM = (WaelStats['minecraft:mined']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              NormalDiamondOre = Number(WaelStats['minecraft:mined']['minecraft:diamond_ore'] ?? '0')
              DeepSlateDiamondOre = Number(WaelStats['minecraft:mined']['minecraft:deepslate_diamond_ore'] ?? '0')
              NormalGoldOre = Number(WaelStats['minecraft:mined']['minecraft:gold_ore'] ?? '0')
              DeepSlateGoldOre = Number(WaelStats['minecraft:mined']['minecraft:deepslate_gold_ore'] ?? '0')
              NetherGoldOre = (WaelStats['minecraft:mined']['minecraft:nether_gold_ore'] ?? '0').toLocaleString()
              NormalIronore = Number(WaelStats['minecraft:mined']['minecraft:iron_ore'] ?? '0')
              DeepSlateIronOre = Number(WaelStats['minecraft:mined']['minecraft:deepslate_iron_ore'] ?? '0')
              NormalCoalOre = Number(WaelStats['minecraft:mined']['minecraft:coal_ore'] ?? '0')
              DeepSlateCoalOre = Number(WaelStats['minecraft:mined']['minecraft:deepslate_coal_ore'] ?? '0')
              NormalLapizOre = Number(WaelStats['minecraft:mined']['minecraft:lapis_ore'] ?? '0')
              DeepSlateLapizOre = Number(WaelStats['minecraft:mined']['minecraft:deepslate_lapis_ore'] ?? '0')
              NormalRedStoneOre = Number(WaelStats['minecraft:mined']['minecraft:redstone_ore'] ?? '0')
              DeepSlateRedtStoneOre = Number(WaelStats['minecraft:mined']['minecraft:deepslate_redstone_ore'] ?? '0')
              NquartzOreM = (WaelStats['minecraft:mined']['minecraft:nether_quartz_ore'] ?? '0').toLocaleString()
            } else {
              ancientDebrisM = 0
              NormalDiamondOre = 0
              DeepSlateDiamondOre = 0
              NetherGoldOre = 0
              NormalIronore = 0
              DeepSlateIronOre = 0
              NormalCoalOre = 0
              NormalLapizOre = 0
              DeepSlateLapizOre = 0
              NormalRedStoneOre = 0
              DeepSlateRedtStoneOre = 0
              NquartzOreM = 0
              NormalGoldOre = 0
              DeepSlateGoldOre = 0
              NormalCoalOre = 0
              DeepSlateCoalOre = 0
            }
            const CommonDiamondOre = (NormalDiamondOre + DeepSlateDiamondOre).toLocaleString()
            const CommonGoldOre = (NormalGoldOre + DeepSlateGoldOre).toLocaleString()
            const CommonIronOre = (NormalIronore + DeepSlateIronOre).toLocaleString()
            const CommonCoalOre = (NormalCoalOre + DeepSlateCoalOre).toLocaleString()
            const CommonLapizOre = (NormalLapizOre + DeepSlateLapizOre).toLocaleString()
            const redstoneOreComm = (NormalRedStoneOre + DeepSlateRedtStoneOre).toLocaleString()

            if (WaelStats['minecraft:picked_up'] !== undefined) {
              ancientDebrisP = (WaelStats['minecraft:picked_up']['minecraft:ancient_debris'] ?? '0').toLocaleString()
              diamondOreP = (WaelStats['minecraft:picked_up']['minecraft:diamond'] ?? '0').toLocaleString()
              goldOreP = (WaelStats['minecraft:picked_up']['minecraft:raw_gold'] ?? '0').toLocaleString()
              NgoldOreP = (WaelStats['minecraft:picked_up']['minecraft:gold_nugget'] ?? '0').toLocaleString()
              ironOreP = (WaelStats['minecraft:picked_up']['minecraft:raw_iron'] ?? '0').toLocaleString()
              coalOreP = (WaelStats['minecraft:picked_up']['minecraft:coal'] ?? '0').toLocaleString()
              lapizOreP = (WaelStats['minecraft:picked_up']['minecraft:lapis_lazuli'] ?? '0').toLocaleString()
              redstoneOreP = (WaelStats['minecraft:picked_up']['minecraft:redstone'] ?? '0').toLocaleString()
              NquartzOreP = (WaelStats['minecraft:picked_up']['minecraft:quartz'] ?? '0').toLocaleString()
            } else {
              ancientDebrisP = 0
              diamondOreP = 0
              goldOreP = 0
              NgoldOreP = 0
              ironOreP = 0
              coalOreP = 0
              lapizOreP = 0
              redstoneOreP = 0
              NquartzOreP = 0
            }

            const BminedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for firecristal`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for firecristal || Mined & Picked Up`)
              .addFields({
                name: `${McEmotes.Netherite} Ancient Debris`,
                value: `**-Mined >** ${ancientDebrisM}\n**-Picked Up >** ${ancientDebrisP}`,
                inline: true
              }, {
                name: `${McEmotes.Diamond} Diamond Ore`,
                value: `**-Mined >** ${CommonDiamondOre}\n**-Picked Up >** ${diamondOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Gold} Gold Ore`,
                value: `**-Mined >** ${CommonGoldOre}\n**-Picked Up >** ${goldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.GoldNugget} Nether Gold Ore`,
                value: `**-Mined >** ${NetherGoldOre}\n**-Picked Up >** ${NgoldOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Iron} Iron Ore`,
                value: `**-Mined >** ${CommonIronOre}\n**-Picked Up >** ${ironOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Coal} Coal Ore`,
                value: `**-Mined >** ${CommonCoalOre}\n**-Picked Up >** ${coalOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Lapis} Lapiz Lazuli`,
                value: `**-Mined >** ${CommonLapizOre}\n**-Picked Up >** ${lapizOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Redstone} Redstone`,
                value: `**-Mined >** ${redstoneOreComm}\n**-Picked Up >** ${redstoneOreP}`,
                inline: true
              }, {
                name: `${McEmotes.Quartz} Quartz`,
                value: `**-Mined >** ${NquartzOreM}\n**-Picked Up >** ${NquartzOreP}`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BminedE],
              components: [goBackMined]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        }
        /**
         * 
         * 
         * 
         * 
         * Killed
         * 
         * 
         * 
         * 
         */
      } else if (i.customId === 'killed') {

        if (target === 'Bunny') {

          //Killed

          try {

            if (BunnyStats['minecraft:killed'] !== undefined) {
              zombieK = (BunnyStats['minecraft:killed']['minecraft:zombie'] ?? '0').toLocaleString()
              endermanK = (BunnyStats['minecraft:killed']['minecraft:enderman'] ?? '0').toLocaleString()
              skeliK = (BunnyStats['minecraft:killed']['minecraft:skeleton'] ?? '0').toLocaleString()
              spiderK = (BunnyStats['minecraft:killed']['minecraft:spider'] ?? '0').toLocaleString()
              witherSk = (BunnyStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              creeperK = (BunnyStats['minecraft:killed']['minecraft:creeper'] ?? '0').toLocaleString()
              chickenK = (BunnyStats['minecraft:killed']['minecraft:chicken'] ?? '0').toLocaleString()
              cowK = (BunnyStats['minecraft:killed']['minecraft:cow'] ?? '0').toLocaleString()
              sheepK = (BunnyStats['minecraft:killed']['minecraft:sheep'] ?? '0').toLocaleString()
              pigK = (BunnyStats['minecraft:killed']['minecraft:pig'] ?? '0').toLocaleString()
              codK = Number(BunnyStats['minecraft:killed']['minecraft:cod'] ?? '0')
              salmonK = Number(BunnyStats['minecraft:killed']['minecraft:salmon'] ?? '0')
              villagerK = (BunnyStats['minecraft:killed']['minecraft:villager'] ?? '0').toLocaleString()
            } else {
              zombieK = 0
              endermanK = 0
              skeliK = 0
              spiderK = 0
              witherSk = 0
              creeperK = 0
              chickenK = 0
              cowK = 0
              sheepK = 0
              pigK = 0
              codK = 0
              salmonK = 0
              villagerK = 0
            }

            if (BunnyStats['minecraft:custom'] !== undefined) {
              totalKilled = (BunnyStats['minecraft:custom']['minecraft:mob_kills'] ?? '0').toLocaleString()
            } else {
              totalKilled = 0
            }

            const fishCombined = (codK + salmonK).toLocaleString()

            const BkilledE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Bunnys`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Bunnys || Mobs killed`)
              .addFields({
                name: `**Type:**`,
                value: `Hostile`
              }, {
                name: `${McEmotes.Zombie} Zombie`,
                value: `**Kills: ${zombieK}**`,
                inline: true
              }, {
                name: `${McEmotes.Enderman} Enderman`,
                value: `**Kills: ${endermanK}**`,
                inline: true
              }, {
                name: `${McEmotes.Skeleton} Skeleton`,
                value: `**Kills: ${skeliK}**`,
                inline: true
              }, {
                name: `${McEmotes.Spider} Spider`,
                value: `**Kills: ${spiderK}**`,
                inline: true
              }, {
                name: `${McEmotes.WitherSkeleton} Wither Skeleton`,
                value: `**Kills: ${witherSk}**`,
                inline: true
              }, {
                name: `${McEmotes.Creeper} Creeper (Aww mann)`,
                value: `**Kills: ${creeperK}**`,
                inline: true
              }, {
                name: `**Type:**`,
                value: `Passive`
              }, {
                name: `${McEmotes.Chicken} Chicken`,
                value: `**Kills: ${chickenK}**`,
                inline: true
              }, {
                name: `${McEmotes.Cow} Cow`,
                value: `**Kills: ${cowK}**`,
                inline: true
              }, {
                name: `${McEmotes.Sheep} Sheep`,
                value: `**Kills: ${sheepK}**`,
                inline: true
              }, {
                name: `${McEmotes.Pig} Pig`,
                value: `**Kills: ${pigK}**`,
                inline: true
              }, {
                name: `${McEmotes.Fish} Fish (Combined)`,
                value: `**Kills: ${fishCombined}**`,
                inline: true
              }, {
                name: `${McEmotes.Villager} Villager`,
                value: `**Kills: ${villagerK}**`,
                inline: true
              }, {
                name: `**Total** mob kills:`,
                value: `${totalKilled}`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BkilledE],
              components: [goBackKilled]
            })
          } catch (err) {
            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Boda') {

          try {

            if (BodaStats['minecraft:killed'] !== undefined) {
              zombieK = (BodaStats['minecraft:killed']['minecraft:zombie'] ?? '0').toLocaleString()
              endermanK = (BodaStats['minecraft:killed']['minecraft:enderman'] ?? '0').toLocaleString()
              skeliK = (BodaStats['minecraft:killed']['minecraft:skeleton'] ?? '0').toLocaleString()
              spiderK = (BodaStats['minecraft:killed']['minecraft:spider'] ?? '0').toLocaleString()
              witherSk = (BodaStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              creeperK = (BodaStats['minecraft:killed']['minecraft:creeper'] ?? '0').toLocaleString()
              chickenK = (BodaStats['minecraft:killed']['minecraft:chicken'] ?? '0').toLocaleString()
              cowK = (BodaStats['minecraft:killed']['minecraft:cow'] ?? '0').toLocaleString()
              sheepK = (BodaStats['minecraft:killed']['minecraft:sheep'] ?? '0').toLocaleString()
              pigK = (BodaStats['minecraft:killed']['minecraft:pig'] ?? '0').toLocaleString()
              codK = Number(BodaStats['minecraft:killed']['minecraft:cod'] ?? '0')
              salmonK = Number(BodaStats['minecraft:killed']['minecraft:salmon'] ?? '0')
              villagerK = (BodaStats['minecraft:killed']['minecraft:villager'] ?? '0').toLocaleString()
            } else {
              zombieK = 0
              endermanK = 0
              skeliK = 0
              spiderK = 0
              witherSk = 0
              creeperK = 0
              chickenK = 0
              cowK = 0
              sheepK = 0
              pigK = 0
              codK = 0
              salmonK = 0
              villagerK = 0
            }

            if (BodaStats['minecraft:custom'] !== undefined) {
              totalKilled = (BodaStats['minecraft:custom']['minecraft:mob_kills'] ?? '0').toLocaleString()
            } else {
              totalKilled = 0
            }

            const fishCombined = (codK + salmonK).toLocaleString()

            const BkilledE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for zoinknub`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for zoinknub || Mobs killed`)
              .addFields({
                name: `**Type:**`,
                value: `Hostile`
              }, {
                name: `${McEmotes.Zombie} Zombie`,
                value: `**Kills: ${zombieK}**`,
                inline: true
              }, {
                name: `${McEmotes.Enderman} Enderman`,
                value: `**Kills: ${endermanK}**`,
                inline: true
              }, {
                name: `${McEmotes.Skeleton} Skeleton`,
                value: `**Kills: ${skeliK}**`,
                inline: true
              }, {
                name: `${McEmotes.Spider} Spider`,
                value: `**Kills: ${spiderK}**`,
                inline: true
              }, {
                name: `${McEmotes.WitherSkeleton} Wither Skeleton`,
                value: `**Kills: ${witherSk}**`,
                inline: true
              }, {
                name: `${McEmotes.Creeper} Creeper (Aww mann)`,
                value: `**Kills: ${creeperK}**`,
                inline: true
              }, {
                name: `**Type:**`,
                value: `Passive`
              }, {
                name: `${McEmotes.Chicken} Chicken`,
                value: `**Kills: ${chickenK}**`,
                inline: true
              }, {
                name: `${McEmotes.Cow} Cow`,
                value: `**Kills: ${cowK}**`,
                inline: true
              }, {
                name: `${McEmotes.Sheep} Sheep`,
                value: `**Kills: ${sheepK}**`,
                inline: true
              }, {
                name: `${McEmotes.Pig} Pig`,
                value: `**Kills: ${pigK}**`,
                inline: true
              }, {
                name: `${McEmotes.Fish} Fish (Combined)`,
                value: `**Kills: ${fishCombined}**`,
                inline: true
              }, {
                name: `${McEmotes.Villager} Villager`,
                value: `**Kills: ${villagerK}**`,
                inline: true
              }, {
                name: `**Total** mob kills:`,
                value: `${totalKilled}`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BkilledE],
              components: [goBackKilled]
            })
          } catch (err) {
            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Yoda') {

          try {

            if (YehiaStats['minecraft:killed'] !== undefined) {
              zombieK = (YehiaStats['minecraft:killed']['minecraft:zombie'] ?? '0').toLocaleString()
              endermanK = (YehiaStats['minecraft:killed']['minecraft:enderman'] ?? '0').toLocaleString()
              skeliK = (YehiaStats['minecraft:killed']['minecraft:skeleton'] ?? '0').toLocaleString()
              spiderK = (YehiaStats['minecraft:killed']['minecraft:spider'] ?? '0').toLocaleString()
              witherSk = (YehiaStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              creeperK = (YehiaStats['minecraft:killed']['minecraft:creeper'] ?? '0').toLocaleString()
              chickenK = (YehiaStats['minecraft:killed']['minecraft:chicken'] ?? '0').toLocaleString()
              cowK = (YehiaStats['minecraft:killed']['minecraft:cow'] ?? '0').toLocaleString()
              sheepK = (YehiaStats['minecraft:killed']['minecraft:sheep'] ?? '0').toLocaleString()
              pigK = (YehiaStats['minecraft:killed']['minecraft:pig'] ?? '0').toLocaleString()
              codK = Number(YehiaStats['minecraft:killed']['minecraft:cod'] ?? '0')
              salmonK = Number(YehiaStats['minecraft:killed']['minecraft:salmon'] ?? '0')
              villagerK = (YehiaStats['minecraft:killed']['minecraft:villager'] ?? '0').toLocaleString()
            } else {
              zombieK = 0
              endermanK = 0
              skeliK = 0
              spiderK = 0
              witherSk = 0
              creeperK = 0
              chickenK = 0
              cowK = 0
              sheepK = 0
              pigK = 0
              codK = 0
              salmonK = 0
              villagerK = 0
            }

            if (YehiaStats['minecraft:custom'] !== undefined) {
              totalKilled = (YehiaStats['minecraft:custom']['minecraft:mob_kills'] ?? '0').toLocaleString()
            } else {
              totalKilled = 0
            }

            const fishCombined = (codK + salmonK).toLocaleString()

            const BkilledE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for XBabYoda`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for XBabYoda || Mobs killed`)
              .addFields({
                name: `**Type:**`,
                value: `Hostile`
              }, {
                name: `${McEmotes.Zombie} Zombie`,
                value: `**Kills: ${zombieK}**`,
                inline: true
              }, {
                name: `${McEmotes.Enderman} Enderman`,
                value: `**Kills: ${endermanK}**`,
                inline: true
              }, {
                name: `${McEmotes.Skeleton} Skeleton`,
                value: `**Kills: ${skeliK}**`,
                inline: true
              }, {
                name: `${McEmotes.Spider} Spider`,
                value: `**Kills: ${spiderK}**`,
                inline: true
              }, {
                name: `${McEmotes.WitherSkeleton} Wither Skeleton`,
                value: `**Kills: ${witherSk}**`,
                inline: true
              }, {
                name: `${McEmotes.Creeper} Creeper (Aww mann)`,
                value: `**Kills: ${creeperK}**`,
                inline: true
              }, {
                name: `**Type:**`,
                value: `Passive`
              }, {
                name: `${McEmotes.Chicken} Chicken`,
                value: `**Kills: ${chickenK}**`,
                inline: true
              }, {
                name: `${McEmotes.Cow} Cow`,
                value: `**Kills: ${cowK}**`,
                inline: true
              }, {
                name: `${McEmotes.Sheep} Sheep`,
                value: `**Kills: ${sheepK}**`,
                inline: true
              }, {
                name: `${McEmotes.Pig} Pig`,
                value: `**Kills: ${pigK}**`,
                inline: true
              }, {
                name: `${McEmotes.Fish} Fish (Combined)`,
                value: `**Kills: ${fishCombined}**`,
                inline: true
              }, {
                name: `${McEmotes.Villager} Villager`,
                value: `**Kills: ${villagerK}**`,
                inline: true
              }, {
                name: `**Total** mob kills:`,
                value: `${totalKilled}`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BkilledE],
              components: [goBackKilled]
            })
          } catch (err) {
            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Ayato') {

          try {

            if (YehiaStats['minecraft:killed'] !== undefined) {
              zombieK = (YehiaStats['minecraft:killed']['minecraft:zombie'] ?? '0').toLocaleString()
              endermanK = (YehiaStats['minecraft:killed']['minecraft:enderman'] ?? '0').toLocaleString()
              skeliK = (YehiaStats['minecraft:killed']['minecraft:skeleton'] ?? '0').toLocaleString()
              spiderK = (YehiaStats['minecraft:killed']['minecraft:spider'] ?? '0').toLocaleString()
              witherSk = (YehiaStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              creeperK = (YehiaStats['minecraft:killed']['minecraft:creeper'] ?? '0').toLocaleString()
              chickenK = (YehiaStats['minecraft:killed']['minecraft:chicken'] ?? '0').toLocaleString()
              cowK = (YehiaStats['minecraft:killed']['minecraft:cow'] ?? '0').toLocaleString()
              sheepK = (YehiaStats['minecraft:killed']['minecraft:sheep'] ?? '0').toLocaleString()
              pigK = (YehiaStats['minecraft:killed']['minecraft:pig'] ?? '0').toLocaleString()
              codK = Number(YehiaStats['minecraft:killed']['minecraft:cod'] ?? '0')
              salmonK = Number(YehiaStats['minecraft:killed']['minecraft:salmon'] ?? '0')
              villagerK = (YehiaStats['minecraft:killed']['minecraft:villager'] ?? '0').toLocaleString()
            } else {
              zombieK = 0
              endermanK = 0
              skeliK = 0
              spiderK = 0
              witherSk = 0
              creeperK = 0
              chickenK = 0
              cowK = 0
              sheepK = 0
              pigK = 0
              codK = 0
              salmonK = 0
              villagerK = 0
            }

            if (YehiaStats['minecraft:custom'] !== undefined) {
              totalKilled = (YehiaStats['minecraft:custom']['minecraft:mob_kills'] ?? '0').toLocaleString()
            } else {
              totalKilled = 0
            }

            const fishCombined = (codK + salmonK).toLocaleString()

            const BkilledE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for XBabYoda`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for XBabYoda || Mobs killed`)
              .addFields({
                name: `**Type:**`,
                value: `Hostile`
              }, {
                name: `${McEmotes.Zombie} Zombie`,
                value: `**Kills: ${zombieK}**`,
                inline: true
              }, {
                name: `${McEmotes.Enderman} Enderman`,
                value: `**Kills: ${endermanK}**`,
                inline: true
              }, {
                name: `${McEmotes.Skeleton} Skeleton`,
                value: `**Kills: ${skeliK}**`,
                inline: true
              }, {
                name: `${McEmotes.Spider} Spider`,
                value: `**Kills: ${spiderK}**`,
                inline: true
              }, {
                name: `${McEmotes.WitherSkeleton} Wither Skeleton`,
                value: `**Kills: ${witherSk}**`,
                inline: true
              }, {
                name: `${McEmotes.Creeper} Creeper (Aww mann)`,
                value: `**Kills: ${creeperK}**`,
                inline: true
              }, {
                name: `**Type:**`,
                value: `Passive`
              }, {
                name: `${McEmotes.Chicken} Chicken`,
                value: `**Kills: ${chickenK}**`,
                inline: true
              }, {
                name: `${McEmotes.Cow} Cow`,
                value: `**Kills: ${cowK}**`,
                inline: true
              }, {
                name: `${McEmotes.Sheep} Sheep`,
                value: `**Kills: ${sheepK}**`,
                inline: true
              }, {
                name: `${McEmotes.Pig} Pig`,
                value: `**Kills: ${pigK}**`,
                inline: true
              }, {
                name: `${McEmotes.Fish} Fish (Combined)`,
                value: `**Kills: ${fishCombined}**`,
                inline: true
              }, {
                name: `${McEmotes.Villager} Villager`,
                value: `**Kills: ${villagerK}**`,
                inline: true
              }, {
                name: `**Total** mob kills:`,
                value: `${totalKilled}`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BkilledE],
              components: [goBackKilled]
            })
          } catch (err) {
            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Grep') {

          try {

            if (GrepStats['minecraft:killed'] !== undefined) {
              zombieK = (GrepStats['minecraft:killed']['minecraft:zombie'] ?? '0').toLocaleString()
              endermanK = (GrepStats['minecraft:killed']['minecraft:enderman'] ?? '0').toLocaleString()
              skeliK = (GrepStats['minecraft:killed']['minecraft:skeleton'] ?? '0').toLocaleString()
              spiderK = (GrepStats['minecraft:killed']['minecraft:spider'] ?? '0').toLocaleString()
              witherSk = (GrepStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              creeperK = (GrepStats['minecraft:killed']['minecraft:creeper'] ?? '0').toLocaleString()
              chickenK = (GrepStats['minecraft:killed']['minecraft:chicken'] ?? '0').toLocaleString()
              cowK = (GrepStats['minecraft:killed']['minecraft:cow'] ?? '0').toLocaleString()
              sheepK = (GrepStats['minecraft:killed']['minecraft:sheep'] ?? '0').toLocaleString()
              pigK = (GrepStats['minecraft:killed']['minecraft:pig'] ?? '0').toLocaleString()
              codK = Number(GrepStats['minecraft:killed']['minecraft:cod'] ?? '0')
              salmonK = Number(GrepStats['minecraft:killed']['minecraft:salmon'] ?? '0')
              villagerK = (GrepStats['minecraft:killed']['minecraft:villager'] ?? '0').toLocaleString()
            } else {
              zombieK = 0
              endermanK = 0
              skeliK = 0
              spiderK = 0
              witherSk = 0
              creeperK = 0
              chickenK = 0
              cowK = 0
              sheepK = 0
              pigK = 0
              codK = 0
              salmonK = 0
              villagerK = 0
            }

            if (GrepStats['minecraft:custom'] !== undefined) {
              totalKilled = (GrepStats['minecraft:custom']['minecraft:mob_kills'] ?? '0').toLocaleString()
            } else {
              totalKilled = 0
            }

            const fishCombined = (codK + salmonK).toLocaleString()

            const BkilledE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Mighty_Monster64`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Mighty_Monster64 || Mobs killed`)
              .addFields({
                name: `**Type:**`,
                value: `Hostile`
              }, {
                name: `${McEmotes.Zombie} Zombie`,
                value: `**Kills: ${zombieK}**`,
                inline: true
              }, {
                name: `${McEmotes.Enderman} Enderman`,
                value: `**Kills: ${endermanK}**`,
                inline: true
              }, {
                name: `${McEmotes.Skeleton} Skeleton`,
                value: `**Kills: ${skeliK}**`,
                inline: true
              }, {
                name: `${McEmotes.Spider} Spider`,
                value: `**Kills: ${spiderK}**`,
                inline: true
              }, {
                name: `${McEmotes.WitherSkeleton} Wither Skeleton`,
                value: `**Kills: ${witherSk}**`,
                inline: true
              }, {
                name: `${McEmotes.Creeper} Creeper (Aww mann)`,
                value: `**Kills: ${creeperK}**`,
                inline: true
              }, {
                name: `**Type:**`,
                value: `Passive`
              }, {
                name: `${McEmotes.Chicken} Chicken`,
                value: `**Kills: ${chickenK}**`,
                inline: true
              }, {
                name: `${McEmotes.Cow} Cow`,
                value: `**Kills: ${cowK}**`,
                inline: true
              }, {
                name: `${McEmotes.Sheep} Sheep`,
                value: `**Kills: ${sheepK}**`,
                inline: true
              }, {
                name: `${McEmotes.Pig} Pig`,
                value: `**Kills: ${pigK}**`,
                inline: true
              }, {
                name: `${McEmotes.Fish} Fish (Combined)`,
                value: `**Kills: ${fishCombined}**`,
                inline: true
              }, {
                name: `${McEmotes.Villager} Villager`,
                value: `**Kills: ${villagerK}**`,
                inline: true
              }, {
                name: `**Total** mob kills:`,
                value: `${totalKilled}`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BkilledE],
              components: [goBackKilled]
            })
          } catch (err) {
            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Majkor') {
          try {

            if (MajkorStats['minecraft:killed'] !== undefined) {
              zombieK = (MajkorStats['minecraft:killed']['minecraft:zombie'] ?? '0').toLocaleString()
              endermanK = (MajkorStats['minecraft:killed']['minecraft:enderman'] ?? '0').toLocaleString()
              skeliK = (MajkorStats['minecraft:killed']['minecraft:skeleton'] ?? '0').toLocaleString()
              spiderK = (MajkorStats['minecraft:killed']['minecraft:spider'] ?? '0').toLocaleString()
              witherSk = (MajkorStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              creeperK = (MajkorStats['minecraft:killed']['minecraft:creeper'] ?? '0').toLocaleString()
              chickenK = (MajkorStats['minecraft:killed']['minecraft:chicken'] ?? '0').toLocaleString()
              cowK = (MajkorStats['minecraft:killed']['minecraft:cow'] ?? '0').toLocaleString()
              sheepK = (MajkorStats['minecraft:killed']['minecraft:sheep'] ?? '0').toLocaleString()
              pigK = (MajkorStats['minecraft:killed']['minecraft:pig'] ?? '0').toLocaleString()
              codK = Number(MajkorStats['minecraft:killed']['minecraft:cod'] ?? '0')
              salmonK = Number(MajkorStats['minecraft:killed']['minecraft:salmon'] ?? '0')
              villagerK = (MajkorStats['minecraft:killed']['minecraft:villager'] ?? '0').toLocaleString()
            } else {
              zombieK = 0
              endermanK = 0
              skeliK = 0
              spiderK = 0
              witherSk = 0
              creeperK = 0
              chickenK = 0
              cowK = 0
              sheepK = 0
              pigK = 0
              codK = 0
              salmonK = 0
              villagerK = 0
            }

            if (MajkorStats['minecraft:custom'] !== undefined) {
              totalKilled = (MajkorStats['minecraft:custom']['minecraft:mob_kills'] ?? '0').toLocaleString()
            } else {
              totalKilled = 0
            }

            const fishCombined = (codK + salmonK).toLocaleString()

            const BkilledE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for MAJIKOR_X`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for MAJIKOR_X || Mobs killed`)
              .addFields({
                name: `**Type:**`,
                value: `Hostile`
              }, {
                name: `${McEmotes.Zombie} Zombie`,
                value: `**Kills: ${zombieK}**`,
                inline: true
              }, {
                name: `${McEmotes.Enderman} Enderman`,
                value: `**Kills: ${endermanK}**`,
                inline: true
              }, {
                name: `${McEmotes.Skeleton} Skeleton`,
                value: `**Kills: ${skeliK}**`,
                inline: true
              }, {
                name: `${McEmotes.Spider} Spider`,
                value: `**Kills: ${spiderK}**`,
                inline: true
              }, {
                name: `${McEmotes.WitherSkeleton} Wither Skeleton`,
                value: `**Kills: ${witherSk}**`,
                inline: true
              }, {
                name: `${McEmotes.Creeper} Creeper (Aww mann)`,
                value: `**Kills: ${creeperK}**`,
                inline: true
              }, {
                name: `**Type:**`,
                value: `Passive`
              }, {
                name: `${McEmotes.Chicken} Chicken`,
                value: `**Kills: ${chickenK}**`,
                inline: true
              }, {
                name: `${McEmotes.Cow} Cow`,
                value: `**Kills: ${cowK}**`,
                inline: true
              }, {
                name: `${McEmotes.Sheep} Sheep`,
                value: `**Kills: ${sheepK}**`,
                inline: true
              }, {
                name: `${McEmotes.Pig} Pig`,
                value: `**Kills: ${pigK}**`,
                inline: true
              }, {
                name: `${McEmotes.Fish} Fish (Combined)`,
                value: `**Kills: ${fishCombined}**`,
                inline: true
              }, {
                name: `${McEmotes.Villager} Villager`,
                value: `**Kills: ${villagerK}**`,
                inline: true
              }, {
                name: `**Total** mob kills:`,
                value: `${totalKilled}`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BkilledE],
              components: [goBackKilled]
            })
          } catch (err) {
            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }
        } else if (target === 'Wael') {

          try {

            if (WaelStats['minecraft:killed'] !== undefined) {
              zombieK = (WaelStats['minecraft:killed']['minecraft:zombie'] ?? '0').toLocaleString()
              endermanK = (WaelStats['minecraft:killed']['minecraft:enderman'] ?? '0').toLocaleString()
              skeliK = (WaelStats['minecraft:killed']['minecraft:skeleton'] ?? '0').toLocaleString()
              spiderK = (WaelStats['minecraft:killed']['minecraft:spider'] ?? '0').toLocaleString()
              witherSk = (WaelStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              creeperK = (WaelStats['minecraft:killed']['minecraft:creeper'] ?? '0').toLocaleString()
              chickenK = (WaelStats['minecraft:killed']['minecraft:chicken'] ?? '0').toLocaleString()
              cowK = (WaelStats['minecraft:killed']['minecraft:cow'] ?? '0').toLocaleString()
              sheepK = (WaelStats['minecraft:killed']['minecraft:sheep'] ?? '0').toLocaleString()
              pigK = (WaelStats['minecraft:killed']['minecraft:pig'] ?? '0').toLocaleString()
              codK = Number(WaelStats['minecraft:killed']['minecraft:cod'] ?? '0')
              salmonK = Number(WaelStats['minecraft:killed']['minecraft:salmon'] ?? '0')
              villagerK = (WaelStats['minecraft:killed']['minecraft:villager'] ?? '0').toLocaleString()
            } else {
              zombieK = 0
              endermanK = 0
              skeliK = 0
              spiderK = 0
              witherSk = 0
              creeperK = 0
              chickenK = 0
              cowK = 0
              sheepK = 0
              pigK = 0
              codK = 0
              salmonK = 0
              villagerK = 0
            }

            if (WaelStats['minecraft:custom'] !== undefined) {
              totalKilled = (WaelStats['minecraft:custom']['minecraft:mob_kills'] ?? '0').toLocaleString()
            } else {
              totalKilled = 0
            }

            const fishCombined = (codK + salmonK).toLocaleString()

            const BkilledE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for firecristal`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for firecristal || Mobs killed`)
              .addFields({
                name: `**Type:**`,
                value: `Hostile`
              }, {
                name: `${McEmotes.Zombie} Zombie`,
                value: `**Kills: ${zombieK}**`,
                inline: true
              }, {
                name: `${McEmotes.Enderman} Enderman`,
                value: `**Kills: ${endermanK}**`,
                inline: true
              }, {
                name: `${McEmotes.Skeleton} Skeleton`,
                value: `**Kills: ${skeliK}**`,
                inline: true
              }, {
                name: `${McEmotes.Spider} Spider`,
                value: `**Kills: ${spiderK}**`,
                inline: true
              }, {
                name: `${McEmotes.WitherSkeleton} Wither Skeleton`,
                value: `**Kills: ${witherSk}**`,
                inline: true
              }, {
                name: `${McEmotes.Creeper} Creeper (Aww mann)`,
                value: `**Kills: ${creeperK}**`,
                inline: true
              }, {
                name: `**Type:**`,
                value: `Passive`
              }, {
                name: `${McEmotes.Chicken} Chicken`,
                value: `**Kills: ${chickenK}**`,
                inline: true
              }, {
                name: `${McEmotes.Cow} Cow`,
                value: `**Kills: ${cowK}**`,
                inline: true
              }, {
                name: `${McEmotes.Sheep} Sheep`,
                value: `**Kills: ${sheepK}**`,
                inline: true
              }, {
                name: `${McEmotes.Pig} Pig`,
                value: `**Kills: ${pigK}**`,
                inline: true
              }, {
                name: `${McEmotes.Fish} Fish (Combined)`,
                value: `**Kills: ${fishCombined}**`,
                inline: true
              }, {
                name: `${McEmotes.Villager} Villager`,
                value: `**Kills: ${villagerK}**`,
                inline: true
              }, {
                name: `**Total** mob kills:`,
                value: `${totalKilled}`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BkilledE],
              components: [goBackKilled]
            })
          } catch (err) {
            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        }
        /**
         * 
         * 
         * 
         * 
         * Crafted
         * 
         * 
         * 
         */
      } else if (i.customId === 'crafted') {

        if (target === 'Bunny') {

          try {

            if (BunnyStats['minecraft:crafted'] !== undefined) {
              NetheriteIngotCR = (BunnyStats['minecraft:crafted']['minecraft:netherite_ingot'] ?? '0').toLocaleString()
              N_Pickaxe = (BunnyStats['minecraft:crafted']['minecraft:netherite_pickaxe'] ?? '0').toLocaleString()
              N_Sword = (BunnyStats['minecraft:crafted']['minecraft:netherite_sword'] ?? '0').toLocaleString()
              N_Shovel = (BunnyStats['minecraft:crafted']['minecraft:netherite_shovel'] ?? '0').toLocaleString()
              N_Axe = (BunnyStats['minecraft:crafted']['minecraft:netherite_axe'] ?? '0').toLocaleString()
              D_Pickaxe = (BunnyStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()
              D_Sword = (BunnyStats['minecraft:crafted']['minecraft:diamond_sword'] ?? '0').toLocaleString()
              D_Shovel = (BunnyStats['minecraft:crafted']['minecraft:diamond_shovel'] ?? '0').toLocaleString()
              D_Axe = (BunnyStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()

              N_ChestPlate = (BunnyStats['minecraft:crafted']['minecraft:netherite_chestplate'] ?? '0').toLocaleString()
              N_Leggings = (BunnyStats['minecraft:crafted']['minecraft:netherite_leggings'] ?? '0').toLocaleString()
              N_Helmet = (BunnyStats['minecraft:crafted']['minecraft:netherite_helmet'] ?? '0').toLocaleString()
              N_Boots = (BunnyStats['minecraft:crafted']['minecraft:netherite_boots'] ?? '0').toLocaleString()
              D_ChestPlate = (BunnyStats['minecraft:crafted']['minecraft:diamond_chestplate'] ?? '0').toLocaleString()
              D_Leggings = (BunnyStats['minecraft:crafted']['minecraft:diamond_leggings'] ?? '0').toLocaleString()
              D_Helmet = (BunnyStats['minecraft:crafted']['minecraft:diamond_helmet'] ?? '0').toLocaleString()
              D_Boots = (BunnyStats['minecraft:crafted']['minecraft:diamond_boots'] ?? '0').toLocaleString()

            } else {
              NetheriteIngotCR = 0
              N_Pickaxe = 0
              N_Sword = 0
              N_Shovel = 0
              N_Axe = 0
              D_Pickaxe = 0
              D_Sword = 0
              D_Shovel = 0
              D_Axe = 0
              N_ChestPlate = 0
              N_Leggings = 0
              N_Helmet = 0
              N_Boots = 0
              D_ChestPlate = 0
              D_Leggings = 0
              D_Helmet = 0
              D_Boots = 0
            }


            const BcraftedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Bunnys`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Bunnys || Items crafted`)
              .addFields({
                name: `${McEmotes.N_Sword} Tools ${McEmotes.Pickaxe}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.Netherite} Netherite Ingots`,
                value: `**Crafted > ${NetheriteIngotCR}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Pick} Netherite Pickaxe`,
                value: `**Crafted > ${N_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Axe} Netherite Axe`,
                value: `**Crafted > ${N_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Netherite Sword`,
                value: `**Crafted > ${N_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Shovel} Netherite Shovel`,
                value: `**Crafted > ${N_Shovel}**`,
                inline: true
              }, {
                name: `${McEmotes.Pickaxe} Diamond Pickaxe`,
                value: `**Crafted > ${D_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Axe} Diamond Axe`,
                value: `**Crafted > ${D_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Sword} Diamond Sword`,
                value: `**Crafted > ${D_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Shovel} Diamond Shovel`,
                value: `**Crafted > ${D_Shovel}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`
              }, {
                name: `\n${McEmotes.N_Helmet} Armor ${McEmotes.D_Boots}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.N_Helmet} Netherite Helmet`,
                value: `**Crafted > ${N_Helmet}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Helmet} Diamond Helmet`,
                value: `**Crafted > ${D_Helmet}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Chestplate} Netherite Chestplate`,
                value: `**Crafted > ${N_ChestPlate}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Chestplate} Diamond Chestplate`,
                value: `**Crafted > ${D_ChestPlate}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Leggings} Netherite Leggings`,
                value: `**Crafted > ${N_Leggings}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Leggings} Diamond Leggings`,
                value: `**Crafted > ${D_Leggings}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Boots} Netherite Boots`,
                value: `**Crafted > ${N_Boots}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Boots} Diamond Boots`,
                value: `**Crafted > ${D_Boots}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BcraftedE],
              components: [goBackCrafted]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Boda') {

          try {

            if (BodaStats['minecraft:crafted'] !== undefined) {
              NetheriteIngotCR = (BodaStats['minecraft:crafted']['minecraft:netherite_ingot'] ?? '0').toLocaleString()
              N_Pickaxe = (BodaStats['minecraft:crafted']['minecraft:netherite_pickaxe'] ?? '0').toLocaleString()
              N_Sword = (BodaStats['minecraft:crafted']['minecraft:netherite_sword'] ?? '0').toLocaleString()
              N_Shovel = (BodaStats['minecraft:crafted']['minecraft:netherite_shovel'] ?? '0').toLocaleString()
              N_Axe = (BodaStats['minecraft:crafted']['minecraft:netherite_axe'] ?? '0').toLocaleString()
              D_Pickaxe = (BodaStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()
              D_Sword = (BodaStats['minecraft:crafted']['minecraft:diamond_sword'] ?? '0').toLocaleString()
              D_Shovel = (BodaStats['minecraft:crafted']['minecraft:diamond_shovel'] ?? '0').toLocaleString()
              D_Axe = (BodaStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()

              N_ChestPlate = (BodaStats['minecraft:crafted']['minecraft:netherite_chestplate'] ?? '0').toLocaleString()
              N_Leggings = (BodaStats['minecraft:crafted']['minecraft:netherite_leggings'] ?? '0').toLocaleString()
              N_Helmet = (BodaStats['minecraft:crafted']['minecraft:netherite_helmet'] ?? '0').toLocaleString()
              N_Boots = (BodaStats['minecraft:crafted']['minecraft:netherite_boots'] ?? '0').toLocaleString()
              D_ChestPlate = (BodaStats['minecraft:crafted']['minecraft:diamond_chestplate'] ?? '0').toLocaleString()
              D_Leggings = (BodaStats['minecraft:crafted']['minecraft:diamond_leggings'] ?? '0').toLocaleString()
              D_Helmet = (BodaStats['minecraft:crafted']['minecraft:diamond_helmet'] ?? '0').toLocaleString()
              D_Boots = (BodaStats['minecraft:crafted']['minecraft:diamond_boots'] ?? '0').toLocaleString()

            } else {
              NetheriteIngotCR = 0
              N_Pickaxe = 0
              N_Sword = 0
              N_Shovel = 0
              N_Axe = 0
              D_Pickaxe = 0
              D_Sword = 0
              D_Shovel = 0
              D_Axe = 0
              N_ChestPlate = 0
              N_Leggings = 0
              N_Helmet = 0
              N_Boots = 0
              D_ChestPlate = 0
              D_Leggings = 0
              D_Helmet = 0
              D_Boots = 0
            }


            const BcraftedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for zoinknub`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for zoinknub || Items crafted`)
              .addFields({
                name: `${McEmotes.N_Sword} Tools ${McEmotes.Pickaxe}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.Netherite} Netherite Ingots`,
                value: `**Crafted > ${NetheriteIngotCR}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Pick} Netherite Pickaxe`,
                value: `**Crafted > ${N_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Axe} Netherite Axe`,
                value: `**Crafted > ${N_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Netherite Sword`,
                value: `**Crafted > ${N_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Shovel} Netherite Shovel`,
                value: `**Crafted > ${N_Shovel}**`,
                inline: true
              }, {
                name: `${McEmotes.Pickaxe} Diamond Pickaxe`,
                value: `**Crafted > ${D_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Axe} Diamond Axe`,
                value: `**Crafted > ${D_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Sword} Diamond Sword`,
                value: `**Crafted > ${D_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Shovel} Diamond Shovel`,
                value: `**Crafted > ${D_Shovel}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`
              }, {
                name: `\n${McEmotes.N_Helmet} Armor ${McEmotes.D_Boots}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.N_Helmet} Netherite Helmet`,
                value: `**Crafted > ${N_Helmet}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Helmet} Diamond Helmet`,
                value: `**Crafted > ${D_Helmet}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Chestplate} Netherite Chestplate`,
                value: `**Crafted > ${N_ChestPlate}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Chestplate} Diamond Chestplate`,
                value: `**Crafted > ${D_ChestPlate}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Leggings} Netherite Leggings`,
                value: `**Crafted > ${N_Leggings}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Leggings} Diamond Leggings`,
                value: `**Crafted > ${D_Leggings}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Boots} Netherite Boots`,
                value: `**Crafted > ${N_Boots}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Boots} Diamond Boots`,
                value: `**Crafted > ${D_Boots}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BcraftedE],
              components: [goBackCrafted]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        } else if (target === 'Yoda') {

          try {

            if (YehiaStats['minecraft:crafted'] !== undefined) {
              NetheriteIngotCR = (YehiaStats['minecraft:crafted']['minecraft:netherite_ingot'] ?? '0').toLocaleString()
              N_Pickaxe = (YehiaStats['minecraft:crafted']['minecraft:netherite_pickaxe'] ?? '0').toLocaleString()
              N_Sword = (YehiaStats['minecraft:crafted']['minecraft:netherite_sword'] ?? '0').toLocaleString()
              N_Shovel = (YehiaStats['minecraft:crafted']['minecraft:netherite_shovel'] ?? '0').toLocaleString()
              N_Axe = (YehiaStats['minecraft:crafted']['minecraft:netherite_axe'] ?? '0').toLocaleString()
              D_Pickaxe = (YehiaStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()
              D_Sword = (YehiaStats['minecraft:crafted']['minecraft:diamond_sword'] ?? '0').toLocaleString()
              D_Shovel = (YehiaStats['minecraft:crafted']['minecraft:diamond_shovel'] ?? '0').toLocaleString()
              D_Axe = (YehiaStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()

              N_ChestPlate = (YehiaStats['minecraft:crafted']['minecraft:netherite_chestplate'] ?? '0').toLocaleString()
              N_Leggings = (YehiaStats['minecraft:crafted']['minecraft:netherite_leggings'] ?? '0').toLocaleString()
              N_Helmet = (YehiaStats['minecraft:crafted']['minecraft:netherite_helmet'] ?? '0').toLocaleString()
              N_Boots = (YehiaStats['minecraft:crafted']['minecraft:netherite_boots'] ?? '0').toLocaleString()
              D_ChestPlate = (YehiaStats['minecraft:crafted']['minecraft:diamond_chestplate'] ?? '0').toLocaleString()
              D_Leggings = (YehiaStats['minecraft:crafted']['minecraft:diamond_leggings'] ?? '0').toLocaleString()
              D_Helmet = (YehiaStats['minecraft:crafted']['minecraft:diamond_helmet'] ?? '0').toLocaleString()
              D_Boots = (YehiaStats['minecraft:crafted']['minecraft:diamond_boots'] ?? '0').toLocaleString()

            } else {
              NetheriteIngotCR = 0
              N_Pickaxe = 0
              N_Sword = 0
              N_Shovel = 0
              N_Axe = 0
              D_Pickaxe = 0
              D_Sword = 0
              D_Shovel = 0
              D_Axe = 0
              N_ChestPlate = 0
              N_Leggings = 0
              N_Helmet = 0
              N_Boots = 0
              D_ChestPlate = 0
              D_Leggings = 0
              D_Helmet = 0
              D_Boots = 0
            }


            const BcraftedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for XBabYoda`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for XBabYoda || Items crafted`)
              .addFields({
                name: `${McEmotes.N_Sword} Tools ${McEmotes.Pickaxe}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.Netherite} Netherite Ingots`,
                value: `**Crafted > ${NetheriteIngotCR}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Pick} Netherite Pickaxe`,
                value: `**Crafted > ${N_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Axe} Netherite Axe`,
                value: `**Crafted > ${N_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Netherite Sword`,
                value: `**Crafted > ${N_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Shovel} Netherite Shovel`,
                value: `**Crafted > ${N_Shovel}**`,
                inline: true
              }, {
                name: `${McEmotes.Pickaxe} Diamond Pickaxe`,
                value: `**Crafted > ${D_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Axe} Diamond Axe`,
                value: `**Crafted > ${D_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Sword} Diamond Sword`,
                value: `**Crafted > ${D_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Shovel} Diamond Shovel`,
                value: `**Crafted > ${D_Shovel}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`
              }, {
                name: `\n${McEmotes.N_Helmet} Armor ${McEmotes.D_Boots}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.N_Helmet} Netherite Helmet`,
                value: `**Crafted > ${N_Helmet}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Helmet} Diamond Helmet`,
                value: `**Crafted > ${D_Helmet}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Chestplate} Netherite Chestplate`,
                value: `**Crafted > ${N_ChestPlate}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Chestplate} Diamond Chestplate`,
                value: `**Crafted > ${D_ChestPlate}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Leggings} Netherite Leggings`,
                value: `**Crafted > ${N_Leggings}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Leggings} Diamond Leggings`,
                value: `**Crafted > ${D_Leggings}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Boots} Netherite Boots`,
                value: `**Crafted > ${N_Boots}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Boots} Diamond Boots`,
                value: `**Crafted > ${D_Boots}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BcraftedE],
              components: [goBackCrafted]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        } else if (target === 'Ayato') {

          try {

            if (AyatoStats['minecraft:crafted'] !== undefined) {
              NetheriteIngotCR = (AyatoStats['minecraft:crafted']['minecraft:netherite_ingot'] ?? '0').toLocaleString()
              N_Pickaxe = (AyatoStats['minecraft:crafted']['minecraft:netherite_pickaxe'] ?? '0').toLocaleString()
              N_Sword = (AyatoStats['minecraft:crafted']['minecraft:netherite_sword'] ?? '0').toLocaleString()
              N_Shovel = (AyatoStats['minecraft:crafted']['minecraft:netherite_shovel'] ?? '0').toLocaleString()
              N_Axe = (AyatoStats['minecraft:crafted']['minecraft:netherite_axe'] ?? '0').toLocaleString()
              D_Pickaxe = (AyatoStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()
              D_Sword = (AyatoStats['minecraft:crafted']['minecraft:diamond_sword'] ?? '0').toLocaleString()
              D_Shovel = (AyatoStats['minecraft:crafted']['minecraft:diamond_shovel'] ?? '0').toLocaleString()
              D_Axe = (AyatoStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()

              N_ChestPlate = (AyatoStats['minecraft:crafted']['minecraft:netherite_chestplate'] ?? '0').toLocaleString()
              N_Leggings = (AyatoStats['minecraft:crafted']['minecraft:netherite_leggings'] ?? '0').toLocaleString()
              N_Helmet = (AyatoStats['minecraft:crafted']['minecraft:netherite_helmet'] ?? '0').toLocaleString()
              N_Boots = (AyatoStats['minecraft:crafted']['minecraft:netherite_boots'] ?? '0').toLocaleString()
              D_ChestPlate = (AyatoStats['minecraft:crafted']['minecraft:diamond_chestplate'] ?? '0').toLocaleString()
              D_Leggings = (AyatoStats['minecraft:crafted']['minecraft:diamond_leggings'] ?? '0').toLocaleString()
              D_Helmet = (AyatoStats['minecraft:crafted']['minecraft:diamond_helmet'] ?? '0').toLocaleString()
              D_Boots = (AyatoStats['minecraft:crafted']['minecraft:diamond_boots'] ?? '0').toLocaleString()

            } else {
              NetheriteIngotCR = 0
              N_Pickaxe = 0
              N_Sword = 0
              N_Shovel = 0
              N_Axe = 0
              D_Pickaxe = 0
              D_Sword = 0
              D_Shovel = 0
              D_Axe = 0
              N_ChestPlate = 0
              N_Leggings = 0
              N_Helmet = 0
              N_Boots = 0
              D_ChestPlate = 0
              D_Leggings = 0
              D_Helmet = 0
              D_Boots = 0
            }


            const BcraftedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Ayato`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Ayato || Items crafted`)
              .addFields({
                name: `${McEmotes.N_Sword} Tools ${McEmotes.Pickaxe}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.Netherite} Netherite Ingots`,
                value: `**Crafted > ${NetheriteIngotCR}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Pick} Netherite Pickaxe`,
                value: `**Crafted > ${N_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Axe} Netherite Axe`,
                value: `**Crafted > ${N_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Netherite Sword`,
                value: `**Crafted > ${N_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Shovel} Netherite Shovel`,
                value: `**Crafted > ${N_Shovel}**`,
                inline: true
              }, {
                name: `${McEmotes.Pickaxe} Diamond Pickaxe`,
                value: `**Crafted > ${D_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Axe} Diamond Axe`,
                value: `**Crafted > ${D_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Sword} Diamond Sword`,
                value: `**Crafted > ${D_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Shovel} Diamond Shovel`,
                value: `**Crafted > ${D_Shovel}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`
              }, {
                name: `\n${McEmotes.N_Helmet} Armor ${McEmotes.D_Boots}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.N_Helmet} Netherite Helmet`,
                value: `**Crafted > ${N_Helmet}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Helmet} Diamond Helmet`,
                value: `**Crafted > ${D_Helmet}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Chestplate} Netherite Chestplate`,
                value: `**Crafted > ${N_ChestPlate}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Chestplate} Diamond Chestplate`,
                value: `**Crafted > ${D_ChestPlate}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Leggings} Netherite Leggings`,
                value: `**Crafted > ${N_Leggings}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Leggings} Diamond Leggings`,
                value: `**Crafted > ${D_Leggings}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Boots} Netherite Boots`,
                value: `**Crafted > ${N_Boots}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Boots} Diamond Boots`,
                value: `**Crafted > ${D_Boots}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BcraftedE],
              components: [goBackCrafted]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        } else if (target === 'Grep') {

          try {

            if (GrepStats['minecraft:crafted'] !== undefined) {
              NetheriteIngotCR = (GrepStats['minecraft:crafted']['minecraft:netherite_ingot'] ?? '0').toLocaleString()
              N_Pickaxe = (GrepStats['minecraft:crafted']['minecraft:netherite_pickaxe'] ?? '0').toLocaleString()
              N_Sword = (GrepStats['minecraft:crafted']['minecraft:netherite_sword'] ?? '0').toLocaleString()
              N_Shovel = (GrepStats['minecraft:crafted']['minecraft:netherite_shovel'] ?? '0').toLocaleString()
              N_Axe = (GrepStats['minecraft:crafted']['minecraft:netherite_axe'] ?? '0').toLocaleString()
              D_Pickaxe = (GrepStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()
              D_Sword = (GrepStats['minecraft:crafted']['minecraft:diamond_sword'] ?? '0').toLocaleString()
              D_Shovel = (GrepStats['minecraft:crafted']['minecraft:diamond_shovel'] ?? '0').toLocaleString()
              D_Axe = (GrepStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()

              N_ChestPlate = (GrepStats['minecraft:crafted']['minecraft:netherite_chestplate'] ?? '0').toLocaleString()
              N_Leggings = (GrepStats['minecraft:crafted']['minecraft:netherite_leggings'] ?? '0').toLocaleString()
              N_Helmet = (GrepStats['minecraft:crafted']['minecraft:netherite_helmet'] ?? '0').toLocaleString()
              N_Boots = (GrepStats['minecraft:crafted']['minecraft:netherite_boots'] ?? '0').toLocaleString()
              D_ChestPlate = (GrepStats['minecraft:crafted']['minecraft:diamond_chestplate'] ?? '0').toLocaleString()
              D_Leggings = (GrepStats['minecraft:crafted']['minecraft:diamond_leggings'] ?? '0').toLocaleString()
              D_Helmet = (GrepStats['minecraft:crafted']['minecraft:diamond_helmet'] ?? '0').toLocaleString()
              D_Boots = (GrepStats['minecraft:crafted']['minecraft:diamond_boots'] ?? '0').toLocaleString()

            } else {
              NetheriteIngotCR = 0
              N_Pickaxe = 0
              N_Sword = 0
              N_Shovel = 0
              N_Axe = 0
              D_Pickaxe = 0
              D_Sword = 0
              D_Shovel = 0
              D_Axe = 0
              N_ChestPlate = 0
              N_Leggings = 0
              N_Helmet = 0
              N_Boots = 0
              D_ChestPlate = 0
              D_Leggings = 0
              D_Helmet = 0
              D_Boots = 0
            }


            const BcraftedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for Mighty_Monster64`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Mighty_Monster64 || Items crafted`)
              .addFields({
                name: `${McEmotes.N_Sword} Tools ${McEmotes.Pickaxe}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.Netherite} Netherite Ingots`,
                value: `**Crafted > ${NetheriteIngotCR}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Pick} Netherite Pickaxe`,
                value: `**Crafted > ${N_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Axe} Netherite Axe`,
                value: `**Crafted > ${N_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Netherite Sword`,
                value: `**Crafted > ${N_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Shovel} Netherite Shovel`,
                value: `**Crafted > ${N_Shovel}**`,
                inline: true
              }, {
                name: `${McEmotes.Pickaxe} Diamond Pickaxe`,
                value: `**Crafted > ${D_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Axe} Diamond Axe`,
                value: `**Crafted > ${D_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Sword} Diamond Sword`,
                value: `**Crafted > ${D_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Shovel} Diamond Shovel`,
                value: `**Crafted > ${D_Shovel}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`
              }, {
                name: `\n${McEmotes.N_Helmet} Armor ${McEmotes.D_Boots}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.N_Helmet} Netherite Helmet`,
                value: `**Crafted > ${N_Helmet}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Helmet} Diamond Helmet`,
                value: `**Crafted > ${D_Helmet}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Chestplate} Netherite Chestplate`,
                value: `**Crafted > ${N_ChestPlate}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Chestplate} Diamond Chestplate`,
                value: `**Crafted > ${D_ChestPlate}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Leggings} Netherite Leggings`,
                value: `**Crafted > ${N_Leggings}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Leggings} Diamond Leggings`,
                value: `**Crafted > ${D_Leggings}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Boots} Netherite Boots`,
                value: `**Crafted > ${N_Boots}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Boots} Diamond Boots`,
                value: `**Crafted > ${D_Boots}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BcraftedE],
              components: [goBackCrafted]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        } else if (target === 'Majkor') {

          try {

            if (MajkorStats['minecraft:crafted'] !== undefined) {
              NetheriteIngotCR = (MajkorStats['minecraft:crafted']['minecraft:netherite_ingot'] ?? '0').toLocaleString()
              N_Pickaxe = (MajkorStats['minecraft:crafted']['minecraft:netherite_pickaxe'] ?? '0').toLocaleString()
              N_Sword = (MajkorStats['minecraft:crafted']['minecraft:netherite_sword'] ?? '0').toLocaleString()
              N_Shovel = (MajkorStats['minecraft:crafted']['minecraft:netherite_shovel'] ?? '0').toLocaleString()
              N_Axe = (MajkorStats['minecraft:crafted']['minecraft:netherite_axe'] ?? '0').toLocaleString()
              D_Pickaxe = (MajkorStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()
              D_Sword = (MajkorStats['minecraft:crafted']['minecraft:diamond_sword'] ?? '0').toLocaleString()
              D_Shovel = (MajkorStats['minecraft:crafted']['minecraft:diamond_shovel'] ?? '0').toLocaleString()
              D_Axe = (MajkorStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()

              N_ChestPlate = (MajkorStats['minecraft:crafted']['minecraft:netherite_chestplate'] ?? '0').toLocaleString()
              N_Leggings = (MajkorStats['minecraft:crafted']['minecraft:netherite_leggings'] ?? '0').toLocaleString()
              N_Helmet = (MajkorStats['minecraft:crafted']['minecraft:netherite_helmet'] ?? '0').toLocaleString()
              N_Boots = (MajkorStats['minecraft:crafted']['minecraft:netherite_boots'] ?? '0').toLocaleString()
              D_ChestPlate = (MajkorStats['minecraft:crafted']['minecraft:diamond_chestplate'] ?? '0').toLocaleString()
              D_Leggings = (MajkorStats['minecraft:crafted']['minecraft:diamond_leggings'] ?? '0').toLocaleString()
              D_Helmet = (MajkorStats['minecraft:crafted']['minecraft:diamond_helmet'] ?? '0').toLocaleString()
              D_Boots = (MajkorStats['minecraft:crafted']['minecraft:diamond_boots'] ?? '0').toLocaleString()

            } else {
              NetheriteIngotCR = 0
              N_Pickaxe = 0
              N_Sword = 0
              N_Shovel = 0
              N_Axe = 0
              D_Pickaxe = 0
              D_Sword = 0
              D_Shovel = 0
              D_Axe = 0
              N_ChestPlate = 0
              N_Leggings = 0
              N_Helmet = 0
              N_Boots = 0
              D_ChestPlate = 0
              D_Leggings = 0
              D_Helmet = 0
              D_Boots = 0
            }


            const BcraftedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for MAJIKOR_X`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for MAJIKOR_X || Items crafted`)
              .addFields({
                name: `${McEmotes.N_Sword} Tools ${McEmotes.Pickaxe}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.Netherite} Netherite Ingots`,
                value: `**Crafted > ${NetheriteIngotCR}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Pick} Netherite Pickaxe`,
                value: `**Crafted > ${N_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Axe} Netherite Axe`,
                value: `**Crafted > ${N_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Netherite Sword`,
                value: `**Crafted > ${N_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Shovel} Netherite Shovel`,
                value: `**Crafted > ${N_Shovel}**`,
                inline: true
              }, {
                name: `${McEmotes.Pickaxe} Diamond Pickaxe`,
                value: `**Crafted > ${D_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Axe} Diamond Axe`,
                value: `**Crafted > ${D_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Sword} Diamond Sword`,
                value: `**Crafted > ${D_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Shovel} Diamond Shovel`,
                value: `**Crafted > ${D_Shovel}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`
              }, {
                name: `\n${McEmotes.N_Helmet} Armor ${McEmotes.D_Boots}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.N_Helmet} Netherite Helmet`,
                value: `**Crafted > ${N_Helmet}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Helmet} Diamond Helmet`,
                value: `**Crafted > ${D_Helmet}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Chestplate} Netherite Chestplate`,
                value: `**Crafted > ${N_ChestPlate}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Chestplate} Diamond Chestplate`,
                value: `**Crafted > ${D_ChestPlate}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Leggings} Netherite Leggings`,
                value: `**Crafted > ${N_Leggings}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Leggings} Diamond Leggings`,
                value: `**Crafted > ${D_Leggings}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Boots} Netherite Boots`,
                value: `**Crafted > ${N_Boots}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Boots} Diamond Boots`,
                value: `**Crafted > ${D_Boots}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BcraftedE],
              components: [goBackCrafted]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        } else if (target === 'Wael') {

          try {

            if (WaelStats['minecraft:crafted'] !== undefined) {
              NetheriteIngotCR = (WaelStats['minecraft:crafted']['minecraft:netherite_ingot'] ?? '0').toLocaleString()
              N_Pickaxe = (WaelStats['minecraft:crafted']['minecraft:netherite_pickaxe'] ?? '0').toLocaleString()
              N_Sword = (WaelStats['minecraft:crafted']['minecraft:netherite_sword'] ?? '0').toLocaleString()
              N_Shovel = (WaelStats['minecraft:crafted']['minecraft:netherite_shovel'] ?? '0').toLocaleString()
              N_Axe = (WaelStats['minecraft:crafted']['minecraft:netherite_axe'] ?? '0').toLocaleString()
              D_Pickaxe = (WaelStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()
              D_Sword = (WaelStats['minecraft:crafted']['minecraft:diamond_sword'] ?? '0').toLocaleString()
              D_Shovel = (WaelStats['minecraft:crafted']['minecraft:diamond_shovel'] ?? '0').toLocaleString()
              D_Axe = (WaelStats['minecraft:crafted']['minecraft:diamond_pickaxe'] ?? '0').toLocaleString()

              N_ChestPlate = (WaelStats['minecraft:crafted']['minecraft:netherite_chestplate'] ?? '0').toLocaleString()
              N_Leggings = (WaelStats['minecraft:crafted']['minecraft:netherite_leggings'] ?? '0').toLocaleString()
              N_Helmet = (WaelStats['minecraft:crafted']['minecraft:netherite_helmet'] ?? '0').toLocaleString()
              N_Boots = (WaelStats['minecraft:crafted']['minecraft:netherite_boots'] ?? '0').toLocaleString()
              D_ChestPlate = (WaelStats['minecraft:crafted']['minecraft:diamond_chestplate'] ?? '0').toLocaleString()
              D_Leggings = (WaelStats['minecraft:crafted']['minecraft:diamond_leggings'] ?? '0').toLocaleString()
              D_Helmet = (WaelStats['minecraft:crafted']['minecraft:diamond_helmet'] ?? '0').toLocaleString()
              D_Boots = (WaelStats['minecraft:crafted']['minecraft:diamond_boots'] ?? '0').toLocaleString()

            } else {
              NetheriteIngotCR = 0
              N_Pickaxe = 0
              N_Sword = 0
              N_Shovel = 0
              N_Axe = 0
              D_Pickaxe = 0
              D_Sword = 0
              D_Shovel = 0
              D_Axe = 0
              N_ChestPlate = 0
              N_Leggings = 0
              N_Helmet = 0
              N_Boots = 0
              D_ChestPlate = 0
              D_Leggings = 0
              D_Helmet = 0
              D_Boots = 0
            }


            const BcraftedE = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for firecristal`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for firecristal || Items crafted`)
              .addFields({
                name: `${McEmotes.N_Sword} Tools ${McEmotes.Pickaxe}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.Netherite} Netherite Ingots`,
                value: `**Crafted > ${NetheriteIngotCR}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Pick} Netherite Pickaxe`,
                value: `**Crafted > ${N_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Axe} Netherite Axe`,
                value: `**Crafted > ${N_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Netherite Sword`,
                value: `**Crafted > ${N_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.N_Shovel} Netherite Shovel`,
                value: `**Crafted > ${N_Shovel}**`,
                inline: true
              }, {
                name: `${McEmotes.Pickaxe} Diamond Pickaxe`,
                value: `**Crafted > ${D_Pickaxe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Axe} Diamond Axe`,
                value: `**Crafted > ${D_Axe}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Sword} Diamond Sword`,
                value: `**Crafted > ${D_Sword}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Shovel} Diamond Shovel`,
                value: `**Crafted > ${D_Shovel}**`,

                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`
              }, {
                name: `\n${McEmotes.N_Helmet} Armor ${McEmotes.D_Boots}`,
                value: `\u200b`
              }, {
                name: `${McEmotes.N_Helmet} Netherite Helmet`,
                value: `**Crafted > ${N_Helmet}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Helmet} Diamond Helmet`,
                value: `**Crafted > ${D_Helmet}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Chestplate} Netherite Chestplate`,
                value: `**Crafted > ${N_ChestPlate}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Chestplate} Diamond Chestplate`,
                value: `**Crafted > ${D_ChestPlate}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Leggings} Netherite Leggings`,
                value: `**Crafted > ${N_Leggings}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Leggings} Diamond Leggings`,
                value: `**Crafted > ${D_Leggings}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              }, {
                name: `${McEmotes.N_Boots} Netherite Boots`,
                value: `**Crafted > ${N_Boots}**`,
                inline: true
              }, {
                name: `${McEmotes.D_Boots} Diamond Boots`,
                value: `**Crafted > ${D_Boots}**`,
                inline: true
              }, {
                name: `\u200b`,
                value: `\u200b`,
                inline: true
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [BcraftedE],
              components: [goBackCrafted]
            })
          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        }


      } else if (i.customId === 'misc') {

        if (target === 'Bunny') {

          try {

            if (BunnyStats['minecraft:custom'] !== undefined) {
              tradedC = (BunnyStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
              talkedToVillager = (BunnyStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
              animalsBred = (BunnyStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
              damageDelt = (BunnyStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
              damageTaken = (BunnyStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
              playersKilled = (BunnyStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
              deathsc = (BunnyStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
              raidWin = (BunnyStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
              raidTriggered = (BunnyStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
            } else {
              tradedC = 0
              talkedToVillager = 0
              animalsBred = 0
              damageDelt = 0
              damageTaken = 0
              playersKilled = 0
              deathsc = 0
              raidWin = 0
              raidTriggered = 0
            }

            if (BunnyStats['minecraft:custom'] !== undefined) {
              timeSinceDeathS = Number(BunnyStats['minecraft:custom']['minecraft:time_since_death'])
            } else {
              timeSinceDeathS = 0
            }
            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



            if (BunnyStats['minecraft:killed'] !== undefined) {
              pillagerKills = (BunnyStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
              vindicatorKills = (BunnyStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
              ravagerKills = (BunnyStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
              witchKills = (BunnyStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              evokerKills = (BunnyStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
            } else {
              pillagerKills = 0
              vindicatorKills = 0
              ravagerKills = 0
              witchKills = 0
              evokerKills = 0
            }

            if (BunnyStats['minecraft:killed_by'] !== undefined) {
              killedByPlayer = (BunnyStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
            } else {
              killedByPlayer = 0
            }


            const MiscEmbedPageOne = new MessageEmbed()

              .setTitle(`HamadaCraft user stats for Bunnys`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Villager} Villagers interactions`,
                value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
                inline: true
              }, {
                name: `${McEmotes.Chicken} Animals bred`,
                value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Damage stats`,
                value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
                inline: false
              }, {
                name: `${McEmotes.Pillager} Raid stats`,
                value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
                inline: false
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            return interaction.editReply({
              embeds: [MiscEmbedPageOne],
              components: [pageOneRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Boda') {

          try {

            if (BodaStats['minecraft:custom'] !== undefined) {
              tradedC = (BodaStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
              talkedToVillager = (BodaStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
              animalsBred = (BodaStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
              damageDelt = (BodaStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
              damageTaken = (BodaStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
              playersKilled = (BodaStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
              deathsc = (BodaStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
              timeSinceDeathS = Number(BodaStats['minecraft:custom']['minecraft:time_since_death'])
              raidWin = (BodaStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
              raidTriggered = (BodaStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
            } else {
              tradedC = 0
              talkedToVillager = 0
              animalsBred = 0
              damageDelt = 0
              damageTaken = 0
              playersKilled = 0
              deathsc = 0
              timeSinceDeathS = 0
              raidWin = 0
              raidTriggered = 0
            }

            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            if (BodaStats['minecraft:killed'] !== undefined) {
              pillagerKills = (BodaStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
              vindicatorKills = (BodaStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
              ravagerKills = (BodaStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
              witchKills = (BodaStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              evokerKills = (BodaStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
            } else {
              pillagerKills = 0
              vindicatorKills = 0
              ravagerKills = 0
              witchKills = 0
              evokerKills = 0
            }

            if (BodaStats['minecraft:killed_by'] !== undefined) {
              killedByPlayer = (BodaStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
            } else {
              killedByPlayer = 0
            }


            const MiscEmbedPageOne = new MessageEmbed()

              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Villager} Villagers interactions`,
                value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
                inline: true
              }, {
                name: `${McEmotes.Chicken} Animals bred`,
                value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Damage stats`,
                value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
                inline: false
              }, {
                name: `${McEmotes.Pillager} Raid stats`,
                value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
                inline: false
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            return interaction.editReply({
              embeds: [MiscEmbedPageOne],
              components: [pageOneRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Yoda') {

          try {

            if (YehiaStats['minecraft:custom'] !== undefined) {
              tradedC = (YehiaStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
              talkedToVillager = (YehiaStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
              animalsBred = (YehiaStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
              damageDelt = (YehiaStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
              damageTaken = (YehiaStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
              playersKilled = (YehiaStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
              deathsc = (YehiaStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
              timeSinceDeathS = Number(YehiaStats['minecraft:custom']['minecraft:time_since_death'])
              raidWin = (YehiaStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
              raidTriggered = (YehiaStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
            } else {
              tradedC = 0
              talkedToVillager = 0
              animalsBred = 0
              damageDelt = 0
              damageTaken = 0
              playersKilled = 0
              deathsc = 0
              timeSinceDeathS = 0
              raidWin = 0
              raidTriggered = 0
            }

            if (YehiaStats['minecraft:killed_by'] !== undefined) {
              killedByPlayer = (YehiaStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
            } else {
              killedByPlayer = 0
            }

            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            if (YehiaStats['minecraft:killed'] !== undefined) {
              pillagerKills = (YehiaStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
              vindicatorKills = (YehiaStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
              ravagerKills = (YehiaStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
              witchKills = (YehiaStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              evokerKills = (YehiaStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
            } else {
              pillagerKills = 0
              vindicatorKills = 0
              ravagerKills = 0
              witchKills = 0
              evokerKills = 0
            }


            const MiscEmbedPageOne = new MessageEmbed()

              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Villager} Villagers interactions`,
                value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
                inline: true
              }, {
                name: `${McEmotes.Chicken} Animals bred`,
                value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Damage stats`,
                value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
                inline: false
              }, {
                name: `${McEmotes.Pillager} Raid stats`,
                value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
                inline: false
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            return interaction.editReply({
              embeds: [MiscEmbedPageOne],
              components: [pageOneRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Ayato') {

          try {

            if (AyatoStats['minecraft:custom'] !== undefined) {
              tradedC = (AyatoStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
              talkedToVillager = (AyatoStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
              animalsBred = (AyatoStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
              damageDelt = (AyatoStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
              damageTaken = (AyatoStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
              playersKilled = (AyatoStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
              deathsc = (AyatoStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
              timeSinceDeathS = Number(AyatoStats['minecraft:custom']['minecraft:time_since_death'])
              raidWin = (AyatoStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
              raidTriggered = (AyatoStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
            } else {
              tradedC = 0
              talkedToVillager = 0
              animalsBred = 0
              damageDelt = 0
              damageTaken = 0
              playersKilled = 0
              deathsc = 0
              timeSinceDeathS = 0
              raidWin = 0
              raidTriggered = 0
            }

            if (AyatoStats['minecraft:killed_by'] !== undefined) {
              killedByPlayer = (AyatoStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
            } else {
              killedByPlayer = 0
            }

            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            if (AyatoStats['minecraft:killed'] !== undefined) {
              pillagerKills = (AyatoStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
              vindicatorKills = (AyatoStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
              ravagerKills = (AyatoStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
              witchKills = (AyatoStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              evokerKills = (AyatoStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
            } else {
              pillagerKills = 0
              vindicatorKills = 0
              ravagerKills = 0
              witchKills = 0
              evokerKills = 0
            }


            const MiscEmbedPageOne = new MessageEmbed()

              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Villager} Villagers interactions`,
                value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
                inline: true
              }, {
                name: `${McEmotes.Chicken} Animals bred`,
                value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Damage stats`,
                value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
                inline: false
              }, {
                name: `${McEmotes.Pillager} Raid stats`,
                value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
                inline: false
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            return interaction.editReply({
              embeds: [MiscEmbedPageOne],
              components: [pageOneRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Grep') {

          try {

            if (GrepStats['minecraft:custom'] !== undefined) {
              tradedC = (GrepStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
              talkedToVillager = (GrepStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
              animalsBred = (GrepStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
              damageDelt = (GrepStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
              damageTaken = (GrepStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
              playersKilled = (GrepStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
              deathsc = (GrepStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
              timeSinceDeathS = Number(GrepStats['minecraft:custom']['minecraft:time_since_death'])
              raidWin = (GrepStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
              raidTriggered = (GrepStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
            } else {
              tradedC = 0
              talkedToVillager = 0
              animalsBred = 0
              damageDelt = 0
              damageTaken = 0
              playersKilled = 0
              deathsc = 0
              timeSinceDeathS = 0
              raidWin = 0
              raidTriggered = 0
            }

            if (GrepStats['minecraft:killed_by'] !== undefined) {
              killedByPlayer = (GrepStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
            } else {
              killedByPlayer = 0
            }

            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            if (GrepStats['minecraft:killed'] !== undefined) {
              pillagerKills = (GrepStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
              vindicatorKills = (GrepStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
              ravagerKills = (GrepStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
              witchKills = (GrepStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              evokerKills = (GrepStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
            } else {
              pillagerKills = 0
              vindicatorKills = 0
              ravagerKills = 0
              witchKills = 0
              evokerKills = 0
            }


            const MiscEmbedPageOne = new MessageEmbed()

              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Villager} Villagers interactions`,
                value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
                inline: true
              }, {
                name: `${McEmotes.Chicken} Animals bred`,
                value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Damage stats`,
                value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
                inline: false
              }, {
                name: `${McEmotes.Pillager} Raid stats`,
                value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
                inline: false
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            return interaction.editReply({
              embeds: [MiscEmbedPageOne],
              components: [pageOneRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Majkor') {

          try {

            if (MajkorStats['minecraft:custom'] !== undefined) {
              tradedC = (MajkorStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
              talkedToVillager = (MajkorStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
              animalsBred = (MajkorStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
              damageDelt = (MajkorStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
              damageTaken = (MajkorStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
              playersKilled = (MajkorStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
              deathsc = (MajkorStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
              timeSinceDeathS = Number(MajkorStats['minecraft:custom']['minecraft:time_since_death'])
              raidWin = (MajkorStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
              raidTriggered = (MajkorStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
            } else {
              tradedC = 0
              talkedToVillager = 0
              animalsBred = 0
              damageDelt = 0
              damageTaken = 0
              playersKilled = 0
              deathsc = 0
              timeSinceDeathS = 0
              raidWin = 0
              raidTriggered = 0
            }

            if (MajkorStats['minecraft:killed_by'] !== undefined) {
              killedByPlayer = (MajkorStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
            } else {
              killedByPlayer = 0
            }

            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            if (MajkorStats['minecraft:killed'] !== undefined) {
              pillagerKills = (MajkorStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
              vindicatorKills = (MajkorStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
              ravagerKills = (MajkorStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
              witchKills = (MajkorStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              evokerKills = (MajkorStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
            } else {
              pillagerKills = 0
              vindicatorKills = 0
              ravagerKills = 0
              witchKills = 0
              evokerKills = 0
            }


            const MiscEmbedPageOne = new MessageEmbed()

              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Villager} Villagers interactions`,
                value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
                inline: true
              }, {
                name: `${McEmotes.Chicken} Animals bred`,
                value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Damage stats`,
                value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
                inline: false
              }, {
                name: `${McEmotes.Pillager} Raid stats`,
                value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
                inline: false
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            return interaction.editReply({
              embeds: [MiscEmbedPageOne],
              components: [pageOneRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return
          }

        } else if (target === 'Wael') {

          try {

            if (WaelStats['minecraft:custom'] !== undefined) {
              tradedC = (WaelStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
              talkedToVillager = (WaelStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
              animalsBred = (WaelStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
              damageDelt = (WaelStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
              damageTaken = (WaelStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
              playersKilled = (WaelStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
              deathsc = (WaelStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
              timeSinceDeathS = Number(WaelStats['minecraft:custom']['minecraft:time_since_death'])
              raidWin = (WaelStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
              raidTriggered = (WaelStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
            } else {
              tradedC = 0
              talkedToVillager = 0
              animalsBred = 0
              damageDelt = 0
              damageTaken = 0
              playersKilled = 0
              deathsc = 0
              timeSinceDeathS = 0
              raidWin = 0
              raidTriggered = 0
            }

            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            if (WaelStats['minecraft:killed_by'] !== undefined) {
              killedByPlayer = (WaelStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
            } else {
              killedByPlayer = 0
            }

            if (WaelStats['minecraft:killed'] !== undefined) {
              pillagerKills = (WaelStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
              vindicatorKills = (WaelStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
              ravagerKills = (WaelStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
              witchKills = (WaelStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
              evokerKills = (WaelStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
            } else {
              pillagerKills = 0
              vindicatorKills = 0
              ravagerKills = 0
              witchKills = 0
              evokerKills = 0
            }


            const MiscEmbedPageOne = new MessageEmbed()

              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Villager} Villagers interactions`,
                value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
                inline: true
              }, {
                name: `${McEmotes.Chicken} Animals bred`,
                value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
                inline: true
              }, {
                name: `${McEmotes.N_Sword} Damage stats`,
                value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
                inline: false
              }, {
                name: `${McEmotes.Pillager} Raid stats`,
                value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
                inline: false
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            return interaction.editReply({
              embeds: [MiscEmbedPageOne],
              components: [pageOneRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        }

      } else if (i.customId === 'page2') {

        if (target === 'Bunny') {

          try {

            if (BunnyStats['minecraft:custom'] !== undefined) {

              playTimeS = Number(BunnyStats['minecraft:custom']['minecraft:total_world_time'] ?? '0')

              distanceClimbedC = Number(BunnyStats['minecraft:custom']['minecraft:climb_one_cm'] ?? '0')
              distanceCrouchedC = Number(BunnyStats['minecraft:custom']['minecraft:crouch_one_cm'] ?? '0')
              distanceFallenC = Number(BunnyStats['minecraft:custom']['minecraft:fall_one_cm'] ?? '0')
              distanceFlowenC = Number(BunnyStats['minecraft:custom']['minecraft:fly_one_cm'] ?? '0')
              distanceSprintedC = Number(BunnyStats['minecraft:custom']['minecraft:sprint_one_cm'] ?? '0')
              distanceSwamC = Number(BunnyStats['minecraft:custom']['minecraft:swim_one_cm'] ?? '0')
              distanceWalkedC = Number(BunnyStats['minecraft:custom']['minecraft:walk_one_cm'] ?? '0')
              distanceWalkedOnWaterC = Number(BunnyStats['minecraft:custom']['minecraft:walk_on_water_one_cm'] ?? '0')
              distanceWalkedUnderWaterC = Number(BunnyStats['minecraft:custom']['minecraft:walk_under_water_one_cm'] ?? '0')
              boatC = Number(BunnyStats['minecraft:custom']['minecraft:boat_one_cm'] ?? '0')
              ElytraC = Number(BunnyStats['minecraft:custom']['minecraft:aviate_one_cm'] ?? '0')
              HorseC = Number(BunnyStats['minecraft:custom']['minecraft:horse_one_cm'] ?? '0')
              MineCartC = Number(BunnyStats['minecraft:custom']['minecraft:minecart_one_cm'] ?? '0')
              PigC = Number(BunnyStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')
              StriderC = Number(BunnyStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')

              TimeSinceRest = (BunnyStats['minecraft:custom']['minecraft:time_since_rest'] ?? '0')
              TimeSlept = (BunnyStats['minecraft:custom']['minecraft:sleep_in_bed'] ?? '0')

              ItemsDropped = (BunnyStats['minecraft:custom']['minecraft:drop'] ?? '0').toLocaleString()
              ItemsEnchanted = (BunnyStats['minecraft:custom']['minecraft:enchant_item'] ?? '0').toLocaleString()
            } else {
              playTimeS

              distanceClimbedC = 0
              distanceCrouchedC = 0
              distanceFallenC = 0
              distanceFlowenC = 0
              distanceSprintedC = 0
              distanceSwamC = 0
              distanceWalkedC = 0
              distanceWalkedOnWaterC = 0
              distanceWalkedUnderWaterC = 0
              boatC = 0
              ElytraC = 0
              HorseC = 0
              MineCartC = 0
              PigC = 0
              StriderC = 0
              TimeSinceRest = 0
              TimeSlept = 0
              ItemsDropped = 0
              ItemsEnchanted = 0
            }

            const playTimeHour = (playTimeS / 3600).toLocaleString()
            const distanceClimbedM = (distanceClimbedC / 100).toLocaleString()
            const distanceCrouchedM = (distanceCrouchedC / 100).toLocaleString()
            const distanceFallenM = (distanceFallenC / 100).toLocaleString()
            const distanceFlowenM = (distanceFlowenC / 100).toLocaleString()
            const distanceSprintedM = (distanceSprintedC / 100).toLocaleString()
            const distanceSwamM = (distanceSwamC / 100).toLocaleString()
            const distanceWalkedM = (distanceWalkedC / 100).toLocaleString()
            const distanceWalkedOnWaterM = (distanceWalkedOnWaterC / 100).toLocaleString()
            const distanceWalkedUnderWaterM = (distanceWalkedUnderWaterC / 100).toLocaleString()
            const boatM = (boatC / 100).toLocaleString()
            const ElytraM = (ElytraC / 100).toLocaleString()
            const HorseM = (HorseC / 100).toLocaleString()
            const MineCartM = (MineCartC / 100).toLocaleString()
            const StriderM = (StriderC / 100).toLocaleString()
            const PigM = (PigC / 100).toLocaleString()
            const TotalC = (distanceClimbedC + distanceCrouchedC + distanceFallenC + distanceFlowenC + distanceSprintedC + distanceSwamC + distanceWalkedC + distanceWalkedOnWaterC + distanceWalkedUnderWaterC + boatC + ElytraC + HorseC + MineCartC + PigC + StriderC)
            const TotalM = (TotalC / 100).toLocaleString()
            const TimeSinceRestM = (TimeSinceRest / 60).toLocaleString()
            const timeSleptM = (TimeSlept / 3600).toLocaleString()

            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            const MiscEmbedPageTwo = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page Two [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Pig} Distance travelled`,
                value: `**Distance travelled || Unit: M/Meters, One block is one meter**\n\n**Climbed > ${distanceClimbedM}**\n**Fell > ${distanceFallenM}**\n**Sprinted > ${distanceSprintedM}**\n**Swam > ${distanceSwamM}**\n**Walked > ${distanceWalkedM}**\n**Walked on Water > ${distanceWalkedOnWaterM}**\n**Walked Under Water > ${distanceWalkedUnderWaterM}**\n**Crouched > ${distanceCrouchedM}**\n**Flown > ${distanceFlowenM}**\n**With boat > ${boatM}**\n**With Elytra > ${ElytraM}**\n**On Pig > ${PigM}**\n**On Strider > ${StriderM}**\n**MineCart > ${MineCartM}**\n**Horse > ${HorseM}**\n**Total > ${TotalM}**`,
                inline: false
              }, {
                name: `🕐 PlayTime (Not accurate)`,
                value: `**Total time (Not accurate) > ${playTimeHour}**\n**Time since last death (Minute) > ${timeSinceDeathM}**\n**Time since last rest (Minute) > ${TimeSinceRestM}**\n**Time spent sleeping (Hours) > ${timeSleptM}**`
              }, {
                name: `${McEmotes.Cake} Items`,
                value: `**Items dropped > ${ItemsDropped}**\n**Items Enchanted > ${ItemsEnchanted}**`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [MiscEmbedPageTwo],
              components: [pageTwoRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        } else if (target === 'Boda') {
          try {

            if (BodaStats['minecraft:custom'] !== undefined) {

              playTimeS = Number(BodaStats['minecraft:custom']['minecraft:total_world_time'] ?? '0')

              distanceClimbedC = Number(BodaStats['minecraft:custom']['minecraft:climb_one_cm'] ?? '0')
              distanceCrouchedC = Number(BodaStats['minecraft:custom']['minecraft:crouch_one_cm'] ?? '0')
              distanceFallenC = Number(BodaStats['minecraft:custom']['minecraft:fall_one_cm'] ?? '0')
              distanceFlowenC = Number(BodaStats['minecraft:custom']['minecraft:fly_one_cm'] ?? '0')
              distanceSprintedC = Number(BodaStats['minecraft:custom']['minecraft:sprint_one_cm'] ?? '0')
              distanceSwamC = Number(BodaStats['minecraft:custom']['minecraft:swim_one_cm'] ?? '0')
              distanceWalkedC = Number(BodaStats['minecraft:custom']['minecraft:walk_one_cm'] ?? '0')
              distanceWalkedOnWaterC = Number(BodaStats['minecraft:custom']['minecraft:walk_on_water_one_cm'] ?? '0')
              distanceWalkedUnderWaterC = Number(BodaStats['minecraft:custom']['minecraft:walk_under_water_one_cm'] ?? '0')
              boatC = Number(BodaStats['minecraft:custom']['minecraft:boat_one_cm'] ?? '0')
              ElytraC = Number(BodaStats['minecraft:custom']['minecraft:aviate_one_cm'] ?? '0')
              HorseC = Number(BodaStats['minecraft:custom']['minecraft:horse_one_cm'] ?? '0')
              MineCartC = Number(BodaStats['minecraft:custom']['minecraft:minecart_one_cm'] ?? '0')
              PigC = Number(BodaStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')
              StriderC = Number(BodaStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')

              TimeSinceRest = (BodaStats['minecraft:custom']['minecraft:time_since_rest'] ?? '0')
              TimeSlept = (BodaStats['minecraft:custom']['minecraft:sleep_in_bed'] ?? '0')

              ItemsDropped = (BodaStats['minecraft:custom']['minecraft:drop'] ?? '0').toLocaleString()
              ItemsEnchanted = (BodaStats['minecraft:custom']['minecraft:enchant_item'] ?? '0').toLocaleString()
            } else {
              playTimeS

              distanceClimbedC = 0
              distanceCrouchedC = 0
              distanceFallenC = 0
              distanceFlowenC = 0
              distanceSprintedC = 0
              distanceSwamC = 0
              distanceWalkedC = 0
              distanceWalkedOnWaterC = 0
              distanceWalkedUnderWaterC = 0
              boatC = 0
              ElytraC = 0
              HorseC = 0
              MineCartC = 0
              PigC = 0
              StriderC = 0
              TimeSinceRest = 0
              TimeSlept = 0
              ItemsDropped = 0
              ItemsEnchanted = 0
            }

            const playTimeHour = (playTimeS / 3600).toLocaleString()
            const distanceClimbedM = (distanceClimbedC / 100).toLocaleString()
            const distanceCrouchedM = (distanceCrouchedC / 100).toLocaleString()
            const distanceFallenM = (distanceFallenC / 100).toLocaleString()
            const distanceFlowenM = (distanceFlowenC / 100).toLocaleString()
            const distanceSprintedM = (distanceSprintedC / 100).toLocaleString()
            const distanceSwamM = (distanceSwamC / 100).toLocaleString()
            const distanceWalkedM = (distanceWalkedC / 100).toLocaleString()
            const distanceWalkedOnWaterM = (distanceWalkedOnWaterC / 100).toLocaleString()
            const distanceWalkedUnderWaterM = (distanceWalkedUnderWaterC / 100).toLocaleString()
            const boatM = (boatC / 100).toLocaleString()
            const ElytraM = (ElytraC / 100).toLocaleString()
            const HorseM = (HorseC / 100).toLocaleString()
            const MineCartM = (MineCartC / 100).toLocaleString()
            const StriderM = (StriderC / 100).toLocaleString()
            const PigM = (PigC / 100).toLocaleString()
            const TotalC = (distanceClimbedC + distanceCrouchedC + distanceFallenC + distanceFlowenC + distanceSprintedC + distanceSwamC + distanceWalkedC + distanceWalkedOnWaterC + distanceWalkedUnderWaterC + boatC + ElytraC + HorseC + MineCartC + PigC + StriderC)
            const TotalM = (TotalC / 100).toLocaleString()
            const TimeSinceRestM = (TimeSinceRest / 60).toLocaleString()
            const timeSleptM = (TimeSlept / 3600).toLocaleString()

            if (BodaStats['minecraft:custom'] !== undefined) {
              timeSinceDeathS = Number(BodaStats['minecraft:custom']['minecraft:time_since_death'])
            } else {
              timeSinceDeathS = 0
            }
            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            const MiscEmbedPageTwo = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page Two [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Pig} Distance travelled`,
                value: `**Distance travelled || Unit: M/Meters, One block is one meter**\n\n**Climbed > ${distanceClimbedM}**\n**Fell > ${distanceFallenM}**\n**Sprinted > ${distanceSprintedM}**\n**Swam > ${distanceSwamM}**\n**Walked > ${distanceWalkedM}**\n**Walked on Water > ${distanceWalkedOnWaterM}**\n**Walked Under Water > ${distanceWalkedUnderWaterM}**\n**Crouched > ${distanceCrouchedM}**\n**Flown > ${distanceFlowenM}**\n**With boat > ${boatM}**\n**With Elytra > ${ElytraM}**\n**On Pig > ${PigM}**\n**On Strider > ${StriderM}**\n**MineCart > ${MineCartM}**\n**Horse > ${HorseM}**\n**Total > ${TotalM}**`,
                inline: false
              }, {
                name: `🕐 PlayTime (Not accurate)`,
                value: `**Total time (Not accurate) > ${playTimeHour}**\n**Time since last death (Minute) > ${timeSinceDeathM}**\n**Time since last rest (Minute) > ${TimeSinceRestM}**\n**Time spent sleeping (Hours) > ${timeSleptM}**`
              }, {
                name: `${McEmotes.Cake} Items`,
                value: `**Items dropped > ${ItemsDropped}**\n**Items Enchanted > ${ItemsEnchanted}**`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [MiscEmbedPageTwo],
              components: [pageTwoRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }
        } else if (target === 'Yoda') {

          try {

            if (YehiaStats['minecraft:custom'] !== undefined) {

              playTimeS = Number(YehiaStats['minecraft:custom']['minecraft:total_world_time'] ?? '0')

              distanceClimbedC = Number(YehiaStats['minecraft:custom']['minecraft:climb_one_cm'] ?? '0')
              distanceCrouchedC = Number(YehiaStats['minecraft:custom']['minecraft:crouch_one_cm'] ?? '0')
              distanceFallenC = Number(YehiaStats['minecraft:custom']['minecraft:fall_one_cm'] ?? '0')
              distanceFlowenC = Number(YehiaStats['minecraft:custom']['minecraft:fly_one_cm'] ?? '0')
              distanceSprintedC = Number(YehiaStats['minecraft:custom']['minecraft:sprint_one_cm'] ?? '0')
              distanceSwamC = Number(YehiaStats['minecraft:custom']['minecraft:swim_one_cm'] ?? '0')
              distanceWalkedC = Number(YehiaStats['minecraft:custom']['minecraft:walk_one_cm'] ?? '0')
              distanceWalkedOnWaterC = Number(YehiaStats['minecraft:custom']['minecraft:walk_on_water_one_cm'] ?? '0')
              distanceWalkedUnderWaterC = Number(YehiaStats['minecraft:custom']['minecraft:walk_under_water_one_cm'] ?? '0')
              boatC = Number(YehiaStats['minecraft:custom']['minecraft:boat_one_cm'] ?? '0')
              ElytraC = Number(YehiaStats['minecraft:custom']['minecraft:aviate_one_cm'] ?? '0')
              HorseC = Number(YehiaStats['minecraft:custom']['minecraft:horse_one_cm'] ?? '0')
              MineCartC = Number(YehiaStats['minecraft:custom']['minecraft:minecart_one_cm'] ?? '0')
              PigC = Number(YehiaStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')
              StriderC = Number(YehiaStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')

              TimeSinceRest = (YehiaStats['minecraft:custom']['minecraft:time_since_rest'] ?? '0')
              TimeSlept = (YehiaStats['minecraft:custom']['minecraft:sleep_in_bed'] ?? '0')

              ItemsDropped = (YehiaStats['minecraft:custom']['minecraft:drop'] ?? '0').toLocaleString()
              ItemsEnchanted = (YehiaStats['minecraft:custom']['minecraft:enchant_item'] ?? '0').toLocaleString()
            } else {
              playTimeS

              distanceClimbedC = 0
              distanceCrouchedC = 0
              distanceFallenC = 0
              distanceFlowenC = 0
              distanceSprintedC = 0
              distanceSwamC = 0
              distanceWalkedC = 0
              distanceWalkedOnWaterC = 0
              distanceWalkedUnderWaterC = 0
              boatC = 0
              ElytraC = 0
              HorseC = 0
              MineCartC = 0
              PigC = 0
              StriderC = 0
              TimeSinceRest = 0
              TimeSlept = 0
              ItemsDropped = 0
              ItemsEnchanted = 0
            }

            const playTimeHour = (playTimeS / 3600).toLocaleString()
            const distanceClimbedM = (distanceClimbedC / 100).toLocaleString()
            const distanceCrouchedM = (distanceCrouchedC / 100).toLocaleString()
            const distanceFallenM = (distanceFallenC / 100).toLocaleString()
            const distanceFlowenM = (distanceFlowenC / 100).toLocaleString()
            const distanceSprintedM = (distanceSprintedC / 100).toLocaleString()
            const distanceSwamM = (distanceSwamC / 100).toLocaleString()
            const distanceWalkedM = (distanceWalkedC / 100).toLocaleString()
            const distanceWalkedOnWaterM = (distanceWalkedOnWaterC / 100).toLocaleString()
            const distanceWalkedUnderWaterM = (distanceWalkedUnderWaterC / 100).toLocaleString()
            const boatM = (boatC / 100).toLocaleString()
            const ElytraM = (ElytraC / 100).toLocaleString()
            const HorseM = (HorseC / 100).toLocaleString()
            const MineCartM = (MineCartC / 100).toLocaleString()
            const StriderM = (StriderC / 100).toLocaleString()
            const PigM = (PigC / 100).toLocaleString()
            const TotalC = (distanceClimbedC + distanceCrouchedC + distanceFallenC + distanceFlowenC + distanceSprintedC + distanceSwamC + distanceWalkedC + distanceWalkedOnWaterC + distanceWalkedUnderWaterC + boatC + ElytraC + HorseC + MineCartC + PigC + StriderC)
            const TotalM = (TotalC / 100).toLocaleString()
            const TimeSinceRestM = (TimeSinceRest / 60).toLocaleString()
            const timeSleptM = (TimeSlept / 3600).toLocaleString()

            if (YehiaStats['minecraft:custom'] !== undefined) {
              timeSinceDeathS = Number(YehiaStats['minecraft:custom']['minecraft:time_since_death'])
            } else {
              timeSinceDeathS = 0
            }
            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            const MiscEmbedPageTwo = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page Two [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Pig} Distance travelled`,
                value: `**Distance travelled || Unit: M/Meters, One block is one meter**\n\n**Climbed > ${distanceClimbedM}**\n**Fell > ${distanceFallenM}**\n**Sprinted > ${distanceSprintedM}**\n**Swam > ${distanceSwamM}**\n**Walked > ${distanceWalkedM}**\n**Walked on Water > ${distanceWalkedOnWaterM}**\n**Walked Under Water > ${distanceWalkedUnderWaterM}**\n**Crouched > ${distanceCrouchedM}**\n**Flown > ${distanceFlowenM}**\n**With boat > ${boatM}**\n**With Elytra > ${ElytraM}**\n**On Pig > ${PigM}**\n**On Strider > ${StriderM}**\n**MineCart > ${MineCartM}**\n**Horse > ${HorseM}**\n**Total > ${TotalM}**`,
                inline: false
              }, {
                name: `🕐 PlayTime (Not accurate)`,
                value: `**Total time (Not accurate) > ${playTimeHour}**\n**Time since last death (Minute) > ${timeSinceDeathM}**\n**Time since last rest (Minute) > ${TimeSinceRestM}**\n**Time spent sleeping (Hours) > ${timeSleptM}**`
              }, {
                name: `${McEmotes.Cake} Items`,
                value: `**Items dropped > ${ItemsDropped}**\n**Items Enchanted > ${ItemsEnchanted}**`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [MiscEmbedPageTwo],
              components: [pageTwoRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Ayato') {

          try {

            if (AyatoStats['minecraft:custom'] !== undefined) {

              playTimeS = Number(AyatoStats['minecraft:custom']['minecraft:total_world_time'] ?? '0')

              distanceClimbedC = Number(AyatoStats['minecraft:custom']['minecraft:climb_one_cm'] ?? '0')
              distanceCrouchedC = Number(AyatoStats['minecraft:custom']['minecraft:crouch_one_cm'] ?? '0')
              distanceFallenC = Number(AyatoStats['minecraft:custom']['minecraft:fall_one_cm'] ?? '0')
              distanceFlowenC = Number(AyatoStats['minecraft:custom']['minecraft:fly_one_cm'] ?? '0')
              distanceSprintedC = Number(AyatoStats['minecraft:custom']['minecraft:sprint_one_cm'] ?? '0')
              distanceSwamC = Number(AyatoStats['minecraft:custom']['minecraft:swim_one_cm'] ?? '0')
              distanceWalkedC = Number(AyatoStats['minecraft:custom']['minecraft:walk_one_cm'] ?? '0')
              distanceWalkedOnWaterC = Number(AyatoStats['minecraft:custom']['minecraft:walk_on_water_one_cm'] ?? '0')
              distanceWalkedUnderWaterC = Number(AyatoStats['minecraft:custom']['minecraft:walk_under_water_one_cm'] ?? '0')
              boatC = Number(AyatoStats['minecraft:custom']['minecraft:boat_one_cm'] ?? '0')
              ElytraC = Number(AyatoStats['minecraft:custom']['minecraft:aviate_one_cm'] ?? '0')
              HorseC = Number(AyatoStats['minecraft:custom']['minecraft:horse_one_cm'] ?? '0')
              MineCartC = Number(AyatoStats['minecraft:custom']['minecraft:minecart_one_cm'] ?? '0')
              PigC = Number(AyatoStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')
              StriderC = Number(AyatoStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')

              TimeSinceRest = (AyatoStats['minecraft:custom']['minecraft:time_since_rest'] ?? '0')
              TimeSlept = (AyatoStats['minecraft:custom']['minecraft:sleep_in_bed'] ?? '0')

              ItemsDropped = (AyatoStats['minecraft:custom']['minecraft:drop'] ?? '0').toLocaleString()
              ItemsEnchanted = (AyatoStats['minecraft:custom']['minecraft:enchant_item'] ?? '0').toLocaleString()
            } else {
              playTimeS

              distanceClimbedC = 0
              distanceCrouchedC = 0
              distanceFallenC = 0
              distanceFlowenC = 0
              distanceSprintedC = 0
              distanceSwamC = 0
              distanceWalkedC = 0
              distanceWalkedOnWaterC = 0
              distanceWalkedUnderWaterC = 0
              boatC = 0
              ElytraC = 0
              HorseC = 0
              MineCartC = 0
              PigC = 0
              StriderC = 0
              TimeSinceRest = 0
              TimeSlept = 0
              ItemsDropped = 0
              ItemsEnchanted = 0
            }

            const playTimeHour = (playTimeS / 3600).toLocaleString()
            const distanceClimbedM = (distanceClimbedC / 100).toLocaleString()
            const distanceCrouchedM = (distanceCrouchedC / 100).toLocaleString()
            const distanceFallenM = (distanceFallenC / 100).toLocaleString()
            const distanceFlowenM = (distanceFlowenC / 100).toLocaleString()
            const distanceSprintedM = (distanceSprintedC / 100).toLocaleString()
            const distanceSwamM = (distanceSwamC / 100).toLocaleString()
            const distanceWalkedM = (distanceWalkedC / 100).toLocaleString()
            const distanceWalkedOnWaterM = (distanceWalkedOnWaterC / 100).toLocaleString()
            const distanceWalkedUnderWaterM = (distanceWalkedUnderWaterC / 100).toLocaleString()
            const boatM = (boatC / 100).toLocaleString()
            const ElytraM = (ElytraC / 100).toLocaleString()
            const HorseM = (HorseC / 100).toLocaleString()
            const MineCartM = (MineCartC / 100).toLocaleString()
            const StriderM = (StriderC / 100).toLocaleString()
            const PigM = (PigC / 100).toLocaleString()
            const TotalC = (distanceClimbedC + distanceCrouchedC + distanceFallenC + distanceFlowenC + distanceSprintedC + distanceSwamC + distanceWalkedC + distanceWalkedOnWaterC + distanceWalkedUnderWaterC + boatC + ElytraC + HorseC + MineCartC + PigC + StriderC)
            const TotalM = (TotalC / 100).toLocaleString()
            const TimeSinceRestM = (TimeSinceRest / 60).toLocaleString()
            const timeSleptM = (TimeSlept / 3600).toLocaleString()

            if (AyatoStats['minecraft:custom'] !== undefined) {
              timeSinceDeathS = Number(AyatoStats['minecraft:custom']['minecraft:time_since_death'])
            } else {
              timeSinceDeathS = 0
            }
            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            const MiscEmbedPageTwo = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page Two [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Pig} Distance travelled`,
                value: `**Distance travelled || Unit: M/Meters, One block is one meter**\n\n**Climbed > ${distanceClimbedM}**\n**Fell > ${distanceFallenM}**\n**Sprinted > ${distanceSprintedM}**\n**Swam > ${distanceSwamM}**\n**Walked > ${distanceWalkedM}**\n**Walked on Water > ${distanceWalkedOnWaterM}**\n**Walked Under Water > ${distanceWalkedUnderWaterM}**\n**Crouched > ${distanceCrouchedM}**\n**Flown > ${distanceFlowenM}**\n**With boat > ${boatM}**\n**With Elytra > ${ElytraM}**\n**On Pig > ${PigM}**\n**On Strider > ${StriderM}**\n**MineCart > ${MineCartM}**\n**Horse > ${HorseM}**\n**Total > ${TotalM}**`,
                inline: false
              }, {
                name: `🕐 PlayTime (Not accurate)`,
                value: `**Total time (Not accurate) > ${playTimeHour}**\n**Time since last death (Minute) > ${timeSinceDeathM}**\n**Time since last rest (Minute) > ${TimeSinceRestM}**\n**Time spent sleeping (Hours) > ${timeSleptM}**`
              }, {
                name: `${McEmotes.Cake} Items`,
                value: `**Items dropped > ${ItemsDropped}**\n**Items Enchanted > ${ItemsEnchanted}**`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [MiscEmbedPageTwo],
              components: [pageTwoRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Grep') {

          try {

            if (GrepStats['minecraft:custom'] !== undefined) {

              playTimeS = Number(GrepStats['minecraft:custom']['minecraft:total_world_time'] ?? '0')

              distanceClimbedC = Number(GrepStats['minecraft:custom']['minecraft:climb_one_cm'] ?? '0')
              distanceCrouchedC = Number(GrepStats['minecraft:custom']['minecraft:crouch_one_cm'] ?? '0')
              distanceFallenC = Number(GrepStats['minecraft:custom']['minecraft:fall_one_cm'] ?? '0')
              distanceFlowenC = Number(GrepStats['minecraft:custom']['minecraft:fly_one_cm'] ?? '0')
              distanceSprintedC = Number(GrepStats['minecraft:custom']['minecraft:sprint_one_cm'] ?? '0')
              distanceSwamC = Number(GrepStats['minecraft:custom']['minecraft:swim_one_cm'] ?? '0')
              distanceWalkedC = Number(GrepStats['minecraft:custom']['minecraft:walk_one_cm'] ?? '0')
              distanceWalkedOnWaterC = Number(GrepStats['minecraft:custom']['minecraft:walk_on_water_one_cm'] ?? '0')
              distanceWalkedUnderWaterC = Number(GrepStats['minecraft:custom']['minecraft:walk_under_water_one_cm'] ?? '0')
              boatC = Number(GrepStats['minecraft:custom']['minecraft:boat_one_cm'] ?? '0')
              ElytraC = Number(GrepStats['minecraft:custom']['minecraft:aviate_one_cm'] ?? '0')
              HorseC = Number(GrepStats['minecraft:custom']['minecraft:horse_one_cm'] ?? '0')
              MineCartC = Number(GrepStats['minecraft:custom']['minecraft:minecart_one_cm'] ?? '0')
              PigC = Number(GrepStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')
              StriderC = Number(GrepStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')

              TimeSinceRest = (GrepStats['minecraft:custom']['minecraft:time_since_rest'] ?? '0')
              TimeSlept = (GrepStats['minecraft:custom']['minecraft:sleep_in_bed'] ?? '0')

              ItemsDropped = (GrepStats['minecraft:custom']['minecraft:drop'] ?? '0').toLocaleString()
              ItemsEnchanted = (GrepStats['minecraft:custom']['minecraft:enchant_item'] ?? '0').toLocaleString()
            } else {
              playTimeS

              distanceClimbedC = 0
              distanceCrouchedC = 0
              distanceFallenC = 0
              distanceFlowenC = 0
              distanceSprintedC = 0
              distanceSwamC = 0
              distanceWalkedC = 0
              distanceWalkedOnWaterC = 0
              distanceWalkedUnderWaterC = 0
              boatC = 0
              ElytraC = 0
              HorseC = 0
              MineCartC = 0
              PigC = 0
              StriderC = 0
              TimeSinceRest = 0
              TimeSlept = 0
              ItemsDropped = 0
              ItemsEnchanted = 0
            }

            const playTimeHour = (playTimeS / 3600).toLocaleString()
            const distanceClimbedM = (distanceClimbedC / 100).toLocaleString()
            const distanceCrouchedM = (distanceCrouchedC / 100).toLocaleString()
            const distanceFallenM = (distanceFallenC / 100).toLocaleString()
            const distanceFlowenM = (distanceFlowenC / 100).toLocaleString()
            const distanceSprintedM = (distanceSprintedC / 100).toLocaleString()
            const distanceSwamM = (distanceSwamC / 100).toLocaleString()
            const distanceWalkedM = (distanceWalkedC / 100).toLocaleString()
            const distanceWalkedOnWaterM = (distanceWalkedOnWaterC / 100).toLocaleString()
            const distanceWalkedUnderWaterM = (distanceWalkedUnderWaterC / 100).toLocaleString()
            const boatM = (boatC / 100).toLocaleString()
            const ElytraM = (ElytraC / 100).toLocaleString()
            const HorseM = (HorseC / 100).toLocaleString()
            const MineCartM = (MineCartC / 100).toLocaleString()
            const StriderM = (StriderC / 100).toLocaleString()
            const PigM = (PigC / 100).toLocaleString()
            const TotalC = (distanceClimbedC + distanceCrouchedC + distanceFallenC + distanceFlowenC + distanceSprintedC + distanceSwamC + distanceWalkedC + distanceWalkedOnWaterC + distanceWalkedUnderWaterC + boatC + ElytraC + HorseC + MineCartC + PigC + StriderC)
            const TotalM = (TotalC / 100).toLocaleString()
            const TimeSinceRestM = (TimeSinceRest / 60).toLocaleString()
            const timeSleptM = (TimeSlept / 3600).toLocaleString()

            if (GrepStats['minecraft:custom'] !== undefined) {
              timeSinceDeathS = Number(GrepStats['minecraft:custom']['minecraft:time_since_death'])
            } else {
              timeSinceDeathS = 0
            }
            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            const MiscEmbedPageTwo = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page Two [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Pig} Distance travelled`,
                value: `**Distance travelled || Unit: M/Meters, One block is one meter**\n\n**Climbed > ${distanceClimbedM}**\n**Fell > ${distanceFallenM}**\n**Sprinted > ${distanceSprintedM}**\n**Swam > ${distanceSwamM}**\n**Walked > ${distanceWalkedM}**\n**Walked on Water > ${distanceWalkedOnWaterM}**\n**Walked Under Water > ${distanceWalkedUnderWaterM}**\n**Crouched > ${distanceCrouchedM}**\n**Flown > ${distanceFlowenM}**\n**With boat > ${boatM}**\n**With Elytra > ${ElytraM}**\n**On Pig > ${PigM}**\n**On Strider > ${StriderM}**\n**MineCart > ${MineCartM}**\n**Horse > ${HorseM}**\n**Total > ${TotalM}**`,
                inline: false
              }, {
                name: `🕐 PlayTime (Not accurate)`,
                value: `**Total time (Not accurate) > ${playTimeHour}**\n**Time since last death (Minute) > ${timeSinceDeathM}**\n**Time since last rest (Minute) > ${TimeSinceRestM}**\n**Time spent sleeping (Hours) > ${timeSleptM}**`
              }, {
                name: `${McEmotes.Cake} Items`,
                value: `**Items dropped > ${ItemsDropped}**\n**Items Enchanted > ${ItemsEnchanted}**`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [MiscEmbedPageTwo],
              components: [pageTwoRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Majkor') {

          try {

            if (MajkorStats['minecraft:custom'] !== undefined) {

              playTimeS = Number(MajkorStats['minecraft:custom']['minecraft:total_world_time'] ?? '0')

              distanceClimbedC = Number(MajkorStats['minecraft:custom']['minecraft:climb_one_cm'] ?? '0')
              distanceCrouchedC = Number(MajkorStats['minecraft:custom']['minecraft:crouch_one_cm'] ?? '0')
              distanceFallenC = Number(MajkorStats['minecraft:custom']['minecraft:fall_one_cm'] ?? '0')
              distanceFlowenC = Number(MajkorStats['minecraft:custom']['minecraft:fly_one_cm'] ?? '0')
              distanceSprintedC = Number(MajkorStats['minecraft:custom']['minecraft:sprint_one_cm'] ?? '0')
              distanceSwamC = Number(MajkorStats['minecraft:custom']['minecraft:swim_one_cm'] ?? '0')
              distanceWalkedC = Number(MajkorStats['minecraft:custom']['minecraft:walk_one_cm'] ?? '0')
              distanceWalkedOnWaterC = Number(MajkorStats['minecraft:custom']['minecraft:walk_on_water_one_cm'] ?? '0')
              distanceWalkedUnderWaterC = Number(MajkorStats['minecraft:custom']['minecraft:walk_under_water_one_cm'] ?? '0')
              boatC = Number(MajkorStats['minecraft:custom']['minecraft:boat_one_cm'] ?? '0')
              ElytraC = Number(MajkorStats['minecraft:custom']['minecraft:aviate_one_cm'] ?? '0')
              HorseC = Number(MajkorStats['minecraft:custom']['minecraft:horse_one_cm'] ?? '0')
              MineCartC = Number(MajkorStats['minecraft:custom']['minecraft:minecart_one_cm'] ?? '0')
              PigC = Number(MajkorStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')
              StriderC = Number(MajkorStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')

              TimeSinceRest = (MajkorStats['minecraft:custom']['minecraft:time_since_rest'] ?? '0')
              TimeSlept = (MajkorStats['minecraft:custom']['minecraft:sleep_in_bed'] ?? '0')

              ItemsDropped = (MajkorStats['minecraft:custom']['minecraft:drop'] ?? '0').toLocaleString()
              ItemsEnchanted = (MajkorStats['minecraft:custom']['minecraft:enchant_item'] ?? '0').toLocaleString()
            } else {
              playTimeS

              distanceClimbedC = 0
              distanceCrouchedC = 0
              distanceFallenC = 0
              distanceFlowenC = 0
              distanceSprintedC = 0
              distanceSwamC = 0
              distanceWalkedC = 0
              distanceWalkedOnWaterC = 0
              distanceWalkedUnderWaterC = 0
              boatC = 0
              ElytraC = 0
              HorseC = 0
              MineCartC = 0
              PigC = 0
              StriderC = 0
              TimeSinceRest = 0
              TimeSlept = 0
              ItemsDropped = 0
              ItemsEnchanted = 0
            }

            const playTimeHour = (playTimeS / 3600).toLocaleString()
            const distanceClimbedM = (distanceClimbedC / 100).toLocaleString()
            const distanceCrouchedM = (distanceCrouchedC / 100).toLocaleString()
            const distanceFallenM = (distanceFallenC / 100).toLocaleString()
            const distanceFlowenM = (distanceFlowenC / 100).toLocaleString()
            const distanceSprintedM = (distanceSprintedC / 100).toLocaleString()
            const distanceSwamM = (distanceSwamC / 100).toLocaleString()
            const distanceWalkedM = (distanceWalkedC / 100).toLocaleString()
            const distanceWalkedOnWaterM = (distanceWalkedOnWaterC / 100).toLocaleString()
            const distanceWalkedUnderWaterM = (distanceWalkedUnderWaterC / 100).toLocaleString()
            const boatM = (boatC / 100).toLocaleString()
            const ElytraM = (ElytraC / 100).toLocaleString()
            const HorseM = (HorseC / 100).toLocaleString()
            const MineCartM = (MineCartC / 100).toLocaleString()
            const StriderM = (StriderC / 100).toLocaleString()
            const PigM = (PigC / 100).toLocaleString()
            const TotalC = (distanceClimbedC + distanceCrouchedC + distanceFallenC + distanceFlowenC + distanceSprintedC + distanceSwamC + distanceWalkedC + distanceWalkedOnWaterC + distanceWalkedUnderWaterC + boatC + ElytraC + HorseC + MineCartC + PigC + StriderC)
            const TotalM = (TotalC / 100).toLocaleString()
            const TimeSinceRestM = (TimeSinceRest / 60).toLocaleString()
            const timeSleptM = (TimeSlept / 3600).toLocaleString()

            if (MajkorStats['minecraft:custom'] !== undefined) {
              timeSinceDeathS = Number(MajkorStats['minecraft:custom']['minecraft:time_since_death'])
            } else {
              timeSinceDeathS = 0
            }
            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            const MiscEmbedPageTwo = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page Two [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Pig} Distance travelled`,
                value: `**Distance travelled || Unit: M/Meters, One block is one meter**\n\n**Climbed > ${distanceClimbedM}**\n**Fell > ${distanceFallenM}**\n**Sprinted > ${distanceSprintedM}**\n**Swam > ${distanceSwamM}**\n**Walked > ${distanceWalkedM}**\n**Walked on Water > ${distanceWalkedOnWaterM}**\n**Walked Under Water > ${distanceWalkedUnderWaterM}**\n**Crouched > ${distanceCrouchedM}**\n**Flown > ${distanceFlowenM}**\n**With boat > ${boatM}**\n**With Elytra > ${ElytraM}**\n**On Pig > ${PigM}**\n**On Strider > ${StriderM}**\n**MineCart > ${MineCartM}**\n**Horse > ${HorseM}**\n**Total > ${TotalM}**`,
                inline: false
              }, {
                name: `🕐 PlayTime (Not accurate)`,
                value: `**Total time (Not accurate) > ${playTimeHour}**\n**Time since last death (Minute) > ${timeSinceDeathM}**\n**Time since last rest (Minute) > ${TimeSinceRestM}**\n**Time spent sleeping (Hours) > ${timeSleptM}**`
              }, {
                name: `${McEmotes.Cake} Items`,
                value: `**Items dropped > ${ItemsDropped}**\n**Items Enchanted > ${ItemsEnchanted}**`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [MiscEmbedPageTwo],
              components: [pageTwoRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        } else if (target === 'Wael') {

          try {

            if (WaelStats['minecraft:custom'] !== undefined) {

              playTimeS = Number(WaelStats['minecraft:custom']['minecraft:total_world_time'] ?? '0')

              distanceClimbedC = Number(WaelStats['minecraft:custom']['minecraft:climb_one_cm'] ?? '0')
              distanceCrouchedC = Number(WaelStats['minecraft:custom']['minecraft:crouch_one_cm'] ?? '0')
              distanceFallenC = Number(WaelStats['minecraft:custom']['minecraft:fall_one_cm'] ?? '0')
              distanceFlowenC = Number(WaelStats['minecraft:custom']['minecraft:fly_one_cm'] ?? '0')
              distanceSprintedC = Number(WaelStats['minecraft:custom']['minecraft:sprint_one_cm'] ?? '0')
              distanceSwamC = Number(WaelStats['minecraft:custom']['minecraft:swim_one_cm'] ?? '0')
              distanceWalkedC = Number(WaelStats['minecraft:custom']['minecraft:walk_one_cm'] ?? '0')
              distanceWalkedOnWaterC = Number(WaelStats['minecraft:custom']['minecraft:walk_on_water_one_cm'] ?? '0')
              distanceWalkedUnderWaterC = Number(WaelStats['minecraft:custom']['minecraft:walk_under_water_one_cm'] ?? '0')
              boatC = Number(WaelStats['minecraft:custom']['minecraft:boat_one_cm'] ?? '0')
              ElytraC = Number(WaelStats['minecraft:custom']['minecraft:aviate_one_cm'] ?? '0')
              HorseC = Number(WaelStats['minecraft:custom']['minecraft:horse_one_cm'] ?? '0')
              MineCartC = Number(WaelStats['minecraft:custom']['minecraft:minecart_one_cm'] ?? '0')
              PigC = Number(WaelStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')
              StriderC = Number(WaelStats['minecraft:custom']['minecraft:pig_one_cm'] ?? '0')

              TimeSinceRest = (WaelStats['minecraft:custom']['minecraft:time_since_rest'] ?? '0')
              TimeSlept = (WaelStats['minecraft:custom']['minecraft:sleep_in_bed'] ?? '0')

              ItemsDropped = (WaelStats['minecraft:custom']['minecraft:drop'] ?? '0').toLocaleString()
              ItemsEnchanted = (WaelStats['minecraft:custom']['minecraft:enchant_item'] ?? '0').toLocaleString()
            } else {
              playTimeS

              distanceClimbedC = 0
              distanceCrouchedC = 0
              distanceFallenC = 0
              distanceFlowenC = 0
              distanceSprintedC = 0
              distanceSwamC = 0
              distanceWalkedC = 0
              distanceWalkedOnWaterC = 0
              distanceWalkedUnderWaterC = 0
              boatC = 0
              ElytraC = 0
              HorseC = 0
              MineCartC = 0
              PigC = 0
              StriderC = 0
              TimeSinceRest = 0
              TimeSlept = 0
              ItemsDropped = 0
              ItemsEnchanted = 0
            }

            const playTimeHour = (playTimeS / 3600).toLocaleString()
            const distanceClimbedM = (distanceClimbedC / 100).toLocaleString()
            const distanceCrouchedM = (distanceCrouchedC / 100).toLocaleString()
            const distanceFallenM = (distanceFallenC / 100).toLocaleString()
            const distanceFlowenM = (distanceFlowenC / 100).toLocaleString()
            const distanceSprintedM = (distanceSprintedC / 100).toLocaleString()
            const distanceSwamM = (distanceSwamC / 100).toLocaleString()
            const distanceWalkedM = (distanceWalkedC / 100).toLocaleString()
            const distanceWalkedOnWaterM = (distanceWalkedOnWaterC / 100).toLocaleString()
            const distanceWalkedUnderWaterM = (distanceWalkedUnderWaterC / 100).toLocaleString()
            const boatM = (boatC / 100).toLocaleString()
            const ElytraM = (ElytraC / 100).toLocaleString()
            const HorseM = (HorseC / 100).toLocaleString()
            const MineCartM = (MineCartC / 100).toLocaleString()
            const StriderM = (StriderC / 100).toLocaleString()
            const PigM = (PigC / 100).toLocaleString()
            const TotalC = (distanceClimbedC + distanceCrouchedC + distanceFallenC + distanceFlowenC + distanceSprintedC + distanceSwamC + distanceWalkedC + distanceWalkedOnWaterC + distanceWalkedUnderWaterC + boatC + ElytraC + HorseC + MineCartC + PigC + StriderC)
            const TotalM = (TotalC / 100).toLocaleString()
            const TimeSinceRestM = (TimeSinceRest / 60).toLocaleString()
            const timeSleptM = (TimeSlept / 3600).toLocaleString()

            if (WaelStats['minecraft:custom'] !== undefined) {
              timeSinceDeathS = Number(WaelStats['minecraft:custom']['minecraft:time_since_death'])
            } else {
              timeSinceDeathS = 0
            }
            const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)

            const MiscEmbedPageTwo = new MessageEmbed()
              .setTitle(`HamadaCraft user stats for ${GamerTag}`)
              .setColor(colors.DEFAULT)
              .setDescription(`User stats for ${GamerTag} || Misc, Page Two [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
              .addFields({
                name: `${McEmotes.Pig} Distance travelled`,
                value: `**Distance travelled || Unit: M/Meters, One block is one meter**\n\n**Climbed > ${distanceClimbedM}**\n**Fell > ${distanceFallenM}**\n**Sprinted > ${distanceSprintedM}**\n**Swam > ${distanceSwamM}**\n**Walked > ${distanceWalkedM}**\n**Walked on Water > ${distanceWalkedOnWaterM}**\n**Walked Under Water > ${distanceWalkedUnderWaterM}**\n**Crouched > ${distanceCrouchedM}**\n**Flown > ${distanceFlowenM}**\n**With boat > ${boatM}**\n**With Elytra > ${ElytraM}**\n**On Pig > ${PigM}**\n**On Strider > ${StriderM}**\n**MineCart > ${MineCartM}**\n**Horse > ${HorseM}**\n**Total > ${TotalM}**`,
                inline: false
              }, {
                name: `🕐 PlayTime (Not accurate)`,
                value: `**Total time (Not accurate) > ${playTimeHour}**\n**Time since last death (Minute) > ${timeSinceDeathM}**\n**Time since last rest (Minute) > ${TimeSinceRestM}**\n**Time spent sleeping (Hours) > ${timeSleptM}**`
              }, {
                name: `${McEmotes.Cake} Items`,
                value: `**Items dropped > ${ItemsDropped}**\n**Items Enchanted > ${ItemsEnchanted}**`
              })
              .setFooter({
                text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL()
              })
              .setTimestamp()

            await interaction.editReply({
              embeds: [MiscEmbedPageTwo],
              components: [pageTwoRow, goBackMisc]
            })

          } catch (err) {

            const BunnySender = await client.users.fetch("333644367539470337").catch(() => null)

            const ErrorEmbed = new MessageEmbed()
              .setTitle(title.ERROR)
              .setColor(colors.ERRORRED)
              .setDescription(`Oh no! Looks like I've ran into an error, I've sent the error to my developer\n\n\`\`\`js\n${err}\`\`\``)

            await interaction.editReply({
              embeds: [ErrorEmbed],
              components: []
            })

            BunnySender.send({
              embeds: [ErrorEmbed]
            })
            return

          }

        }

      } else if (i.customId === 'page1') {

        if (target === 'Bunny') {


          if (BunnyStats['minecraft:custom'] !== undefined) {
            tradedC = (BunnyStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
            talkedToVillager = (BunnyStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
            animalsBred = (BunnyStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
            damageDelt = (BunnyStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
            damageTaken = (BunnyStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
            playersKilled = (BunnyStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
            deathsc = (BunnyStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
            raidWin = (BunnyStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
            raidTriggered = (BunnyStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
          } else {
            tradedC = 0
            talkedToVillager = 0
            animalsBred = 0
            damageDelt = 0
            damageTaken = 0
            playersKilled = 0
            deathsc = 0
            raidWin = 0
            raidTriggered = 0
          }

          if (BunnyStats['minecraft:custom'] !== undefined) {
            timeSinceDeathS = Number(BunnyStats['minecraft:custom']['minecraft:time_since_death'])
          } else {
            timeSinceDeathS = 0
          }
          const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



          if (BunnyStats['minecraft:killed'] !== undefined) {
            pillagerKills = (BunnyStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
            vindicatorKills = (BunnyStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
            ravagerKills = (BunnyStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
            witchKills = (BunnyStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
            evokerKills = (BunnyStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
          } else {
            pillagerKills = 0
            vindicatorKills = 0
            ravagerKills = 0
            witchKills = 0
            evokerKills = 0
          }

          if (BunnyStats['minecraft:killed_by'] !== undefined) {
            killedByPlayer = (BunnyStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
          } else {
            killedByPlayer = 0
          }


          const MiscEmbedPageOne = new MessageEmbed()

            .setTitle(`HamadaCraft user stats for Bunnys`)
            .setColor(colors.DEFAULT)
            .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
            .addFields({
              name: `${McEmotes.Villager} Villagers interactions`,
              value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
              inline: true
            }, {
              name: `${McEmotes.Chicken} Animals bred`,
              value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
              inline: true
            }, {
              name: `${McEmotes.N_Sword} Damage stats`,
              value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
              inline: false
            }, {
              name: `${McEmotes.Pillager} Raid stats`,
              value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
              inline: false
            })
            .setFooter({
              text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp()

          await interaction.editReply({
            embeds: [MiscEmbedPageOne],
            components: [pageOneRow, goBackMisc]
          })
        } else if (target === 'Boda') {

          if (BodaStats['minecraft:custom'] !== undefined) {
            tradedC = (BodaStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
            talkedToVillager = (BodaStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
            animalsBred = (BodaStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
            damageDelt = (BodaStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
            damageTaken = (BodaStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
            playersKilled = (BodaStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
            deathsc = (BodaStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
            raidWin = (BodaStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
            raidTriggered = (BodaStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
          } else {
            tradedC = 0
            talkedToVillager = 0
            animalsBred = 0
            damageDelt = 0
            damageTaken = 0
            playersKilled = 0
            deathsc = 0
            raidWin = 0
            raidTriggered = 0
          }

          if (BodaStats['minecraft:custom'] !== undefined) {
            timeSinceDeathS = Number(BodaStats['minecraft:custom']['minecraft:time_since_death'])
          } else {
            timeSinceDeathS = 0
          }
          const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



          if (BodaStats['minecraft:killed'] !== undefined) {
            pillagerKills = (BodaStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
            vindicatorKills = (BodaStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
            ravagerKills = (BodaStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
            witchKills = (BodaStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
            evokerKills = (BodaStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
          } else {
            pillagerKills = 0
            vindicatorKills = 0
            ravagerKills = 0
            witchKills = 0
            evokerKills = 0
          }

          if (BodaStats['minecraft:killed_by'] !== undefined) {
            killedByPlayer = (BodaStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
          } else {
            killedByPlayer = 0
          }


          const MiscEmbedPageOne = new MessageEmbed()

            .setTitle(`HamadaCraft user stats for Bunnys`)
            .setColor(colors.DEFAULT)
            .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
            .addFields({
              name: `${McEmotes.Villager} Villagers interactions`,
              value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
              inline: true
            }, {
              name: `${McEmotes.Chicken} Animals bred`,
              value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
              inline: true
            }, {
              name: `${McEmotes.N_Sword} Damage stats`,
              value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
              inline: false
            }, {
              name: `${McEmotes.Pillager} Raid stats`,
              value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
              inline: false
            })
            .setFooter({
              text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp()

          await interaction.editReply({
            embeds: [MiscEmbedPageOne],
            components: [pageOneRow, goBackMisc]
          })

        } else if (target === 'Yoda') {

          if (YehiaStats['minecraft:custom'] !== undefined) {
            tradedC = (YehiaStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
            talkedToVillager = (YehiaStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
            animalsBred = (YehiaStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
            damageDelt = (YehiaStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
            damageTaken = (YehiaStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
            playersKilled = (YehiaStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
            deathsc = (YehiaStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
            raidWin = (YehiaStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
            raidTriggered = (YehiaStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
          } else {
            tradedC = 0
            talkedToVillager = 0
            animalsBred = 0
            damageDelt = 0
            damageTaken = 0
            playersKilled = 0
            deathsc = 0
            raidWin = 0
            raidTriggered = 0
          }

          if (YehiaStats['minecraft:custom'] !== undefined) {
            timeSinceDeathS = Number(YehiaStats['minecraft:custom']['minecraft:time_since_death'])
          } else {
            timeSinceDeathS = 0
          }
          const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



          if (YehiaStats['minecraft:killed'] !== undefined) {
            pillagerKills = (YehiaStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
            vindicatorKills = (YehiaStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
            ravagerKills = (YehiaStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
            witchKills = (YehiaStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
            evokerKills = (YehiaStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
          } else {
            pillagerKills = 0
            vindicatorKills = 0
            ravagerKills = 0
            witchKills = 0
            evokerKills = 0
          }

          if (YehiaStats['minecraft:killed_by'] !== undefined) {
            killedByPlayer = (YehiaStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
          } else {
            killedByPlayer = 0
          }


          const MiscEmbedPageOne = new MessageEmbed()

            .setTitle(`HamadaCraft user stats for Bunnys`)
            .setColor(colors.DEFAULT)
            .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
            .addFields({
              name: `${McEmotes.Villager} Villagers interactions`,
              value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
              inline: true
            }, {
              name: `${McEmotes.Chicken} Animals bred`,
              value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
              inline: true
            }, {
              name: `${McEmotes.N_Sword} Damage stats`,
              value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
              inline: false
            }, {
              name: `${McEmotes.Pillager} Raid stats`,
              value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
              inline: false
            })
            .setFooter({
              text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp()

          await interaction.editReply({
            embeds: [MiscEmbedPageOne],
            components: [pageOneRow, goBackMisc]
          })

        } else if (target === 'Ayato') {

          if (AyatoStats['minecraft:custom'] !== undefined) {
            tradedC = (AyatoStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
            talkedToVillager = (AyatoStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
            animalsBred = (AyatoStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
            damageDelt = (AyatoStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
            damageTaken = (AyatoStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
            playersKilled = (AyatoStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
            deathsc = (AyatoStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
            raidWin = (AyatoStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
            raidTriggered = (AyatoStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
          } else {
            tradedC = 0
            talkedToVillager = 0
            animalsBred = 0
            damageDelt = 0
            damageTaken = 0
            playersKilled = 0
            deathsc = 0
            raidWin = 0
            raidTriggered = 0
          }

          if (AyatoStats['minecraft:custom'] !== undefined) {
            timeSinceDeathS = Number(AyatoStats['minecraft:custom']['minecraft:time_since_death'])
          } else {
            timeSinceDeathS = 0
          }
          const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



          if (AyatoStats['minecraft:killed'] !== undefined) {
            pillagerKills = (AyatoStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
            vindicatorKills = (AyatoStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
            ravagerKills = (AyatoStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
            witchKills = (AyatoStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
            evokerKills = (AyatoStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
          } else {
            pillagerKills = 0
            vindicatorKills = 0
            ravagerKills = 0
            witchKills = 0
            evokerKills = 0
          }

          if (AyatoStats['minecraft:killed_by'] !== undefined) {
            killedByPlayer = (AyatoStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
          } else {
            killedByPlayer = 0
          }


          const MiscEmbedPageOne = new MessageEmbed()

            .setTitle(`HamadaCraft user stats for Bunnys`)
            .setColor(colors.DEFAULT)
            .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
            .addFields({
              name: `${McEmotes.Villager} Villagers interactions`,
              value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
              inline: true
            }, {
              name: `${McEmotes.Chicken} Animals bred`,
              value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
              inline: true
            }, {
              name: `${McEmotes.N_Sword} Damage stats`,
              value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
              inline: false
            }, {
              name: `${McEmotes.Pillager} Raid stats`,
              value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
              inline: false
            })
            .setFooter({
              text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp()

          await interaction.editReply({
            embeds: [MiscEmbedPageOne],
            components: [pageOneRow, goBackMisc]
          })
        } else if (target === 'Grep') {

          if (GrepStats['minecraft:custom'] !== undefined) {
            tradedC = (GrepStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
            talkedToVillager = (GrepStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
            animalsBred = (GrepStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
            damageDelt = (GrepStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
            damageTaken = (GrepStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
            playersKilled = (GrepStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
            deathsc = (GrepStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
            raidWin = (GrepStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
            raidTriggered = (GrepStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
          } else {
            tradedC = 0
            talkedToVillager = 0
            animalsBred = 0
            damageDelt = 0
            damageTaken = 0
            playersKilled = 0
            deathsc = 0
            raidWin = 0
            raidTriggered = 0
          }

          if (GrepStats['minecraft:custom'] !== undefined) {
            timeSinceDeathS = Number(GrepStats['minecraft:custom']['minecraft:time_since_death'])
          } else {
            timeSinceDeathS = 0
          }
          const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



          if (GrepStats['minecraft:killed'] !== undefined) {
            pillagerKills = (GrepStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
            vindicatorKills = (GrepStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
            ravagerKills = (GrepStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
            witchKills = (GrepStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
            evokerKills = (GrepStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
          } else {
            pillagerKills = 0
            vindicatorKills = 0
            ravagerKills = 0
            witchKills = 0
            evokerKills = 0
          }

          if (GrepStats['minecraft:killed_by'] !== undefined) {
            killedByPlayer = (GrepStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
          } else {
            killedByPlayer = 0
          }


          const MiscEmbedPageOne = new MessageEmbed()

            .setTitle(`HamadaCraft user stats for Bunnys`)
            .setColor(colors.DEFAULT)
            .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
            .addFields({
              name: `${McEmotes.Villager} Villagers interactions`,
              value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
              inline: true
            }, {
              name: `${McEmotes.Chicken} Animals bred`,
              value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
              inline: true
            }, {
              name: `${McEmotes.N_Sword} Damage stats`,
              value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
              inline: false
            }, {
              name: `${McEmotes.Pillager} Raid stats`,
              value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
              inline: false
            })
            .setFooter({
              text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp()

          await interaction.editReply({
            embeds: [MiscEmbedPageOne],
            components: [pageOneRow, goBackMisc]
          })

        } else if (target === 'Majkor') {

          if (MajkorStats['minecraft:custom'] !== undefined) {
            tradedC = (MajkorStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
            talkedToVillager = (MajkorStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
            animalsBred = (MajkorStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
            damageDelt = (MajkorStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
            damageTaken = (MajkorStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
            playersKilled = (MajkorStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
            deathsc = (MajkorStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
            raidWin = (MajkorStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
            raidTriggered = (MajkorStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
          } else {
            tradedC = 0
            talkedToVillager = 0
            animalsBred = 0
            damageDelt = 0
            damageTaken = 0
            playersKilled = 0
            deathsc = 0
            raidWin = 0
            raidTriggered = 0
          }

          if (MajkorStats['minecraft:custom'] !== undefined) {
            timeSinceDeathS = Number(MajkorStats['minecraft:custom']['minecraft:time_since_death'])
          } else {
            timeSinceDeathS = 0
          }
          const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



          if (MajkorStats['minecraft:killed'] !== undefined) {
            pillagerKills = (MajkorStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
            vindicatorKills = (MajkorStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
            ravagerKills = (MajkorStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
            witchKills = (MajkorStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
            evokerKills = (MajkorStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
          } else {
            pillagerKills = 0
            vindicatorKills = 0
            ravagerKills = 0
            witchKills = 0
            evokerKills = 0
          }

          if (MajkorStats['minecraft:killed_by'] !== undefined) {
            killedByPlayer = (MajkorStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
          } else {
            killedByPlayer = 0
          }


          const MiscEmbedPageOne = new MessageEmbed()

            .setTitle(`HamadaCraft user stats for Bunnys`)
            .setColor(colors.DEFAULT)
            .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
            .addFields({
              name: `${McEmotes.Villager} Villagers interactions`,
              value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
              inline: true
            }, {
              name: `${McEmotes.Chicken} Animals bred`,
              value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
              inline: true
            }, {
              name: `${McEmotes.N_Sword} Damage stats`,
              value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
              inline: false
            }, {
              name: `${McEmotes.Pillager} Raid stats`,
              value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
              inline: false
            })
            .setFooter({
              text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp()

          await interaction.editReply({
            embeds: [MiscEmbedPageOne],
            components: [pageOneRow, goBackMisc]
          })

        } else if (target === 'Wael') {

          if (WaelStats['minecraft:custom'] !== undefined) {
            tradedC = (WaelStats['minecraft:custom']['minecraft:traded_with_villager'] ?? "0").toLocaleString()
            talkedToVillager = (WaelStats['minecraft:custom']['minecraft:talked_to_villager'] ?? '0').toLocaleString()
            animalsBred = (WaelStats['minecraft:custom']['minecraft:animals_bred'] ?? '0').toLocaleString()
            damageDelt = (WaelStats['minecraft:custom']['minecraft:damage_dealt'] ?? '0').toLocaleString()
            damageTaken = (WaelStats['minecraft:custom']['minecraft:damage_taken'] ?? '0').toLocaleString()
            playersKilled = (WaelStats['minecraft:custom']['minecraft:player_kills'] ?? '0').toLocaleString()
            deathsc = (WaelStats['minecraft:custom']['minecraft:deaths'] ?? '0').toLocaleString()
            raidWin = (WaelStats['minecraft:custom']['minecraft:raid_win'] ?? '0').toLocaleString()
            raidTriggered = (WaelStats['minecraft:custom']['minecraft:raid_trigger'] ?? '0').toLocaleString()
          } else {
            tradedC = 0
            talkedToVillager = 0
            animalsBred = 0
            damageDelt = 0
            damageTaken = 0
            playersKilled = 0
            deathsc = 0
            raidWin = 0
            raidTriggered = 0
          }

          if (WaelStats['minecraft:custom'] !== undefined) {
            timeSinceDeathS = Number(WaelStats['minecraft:custom']['minecraft:time_since_death'])
          } else {
            timeSinceDeathS = 0
          }
          const timeSinceDeathM = (timeSinceDeathS / 60).toFixed(2)



          if (WaelStats['minecraft:killed'] !== undefined) {
            pillagerKills = (WaelStats['minecraft:killed']['minecraft:pillager'] ?? '0').toLocaleString()
            vindicatorKills = (WaelStats['minecraft:killed']['minecraft:vindicator'] ?? '0').toLocaleString()
            ravagerKills = (WaelStats['minecraft:killed']['minecraft:ravager'] ?? '0').toLocaleString()
            witchKills = (WaelStats['minecraft:killed']['minecraft:witch'] ?? '0').toLocaleString()
            evokerKills = (WaelStats['minecraft:killed']['minecraft:evoker'] ?? '0').toLocaleString()
          } else {
            pillagerKills = 0
            vindicatorKills = 0
            ravagerKills = 0
            witchKills = 0
            evokerKills = 0
          }

          if (WaelStats['minecraft:killed_by'] !== undefined) {
            killedByPlayer = (WaelStats['minecraft:killed_by']['minecraft:player'] ?? '0').toLocaleString()
          } else {
            killedByPlayer = 0
          }


          const MiscEmbedPageOne = new MessageEmbed()

            .setTitle(`HamadaCraft user stats for Bunnys`)
            .setColor(colors.DEFAULT)
            .setDescription(`User stats for Bunnys || Misc, Page One, [More Info about these stats](${'https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names'})`)
            .addFields({
              name: `${McEmotes.Villager} Villagers interactions`,
              value: `**Traded > ${tradedC}**\n**Talked to > ${talkedToVillager}**`,
              inline: true
            }, {
              name: `${McEmotes.Chicken} Animals bred`,
              value: `**Total > ${animalsBred}**\n**The number of times the player bred two mobs**`,
              inline: true
            }, {
              name: `${McEmotes.N_Sword} Damage stats`,
              value: `**Damage Delt > ${damageDelt}**\n**Damage Taken > ${damageTaken}**\n**Players killed > ${playersKilled}**\n**Killed by player > ${killedByPlayer}**\n**Total deaths > ${deathsc}**\n**Time since last death > ${timeSinceDeathM} min**`,
              inline: false
            }, {
              name: `${McEmotes.Pillager} Raid stats`,
              value: `**Triggered > ${raidTriggered}**\n**Wins > ${raidWin}**\n**Raid mob kills:\n**Pillager: ${pillagerKills}\nVindicator: ${vindicatorKills}\nRavager: ${ravagerKills}\nWitch: ${witchKills}\nEvoker: ${evokerKills}`,
              inline: false
            })
            .setFooter({
              text: `HamadaCraft stats powered by GBF, Laucnhed by ${interaction.user.username}`,
              iconURL: interaction.user.displayAvatarURL()
            })
            .setTimestamp()

          await interaction.editReply({
            embeds: [MiscEmbedPageOne],
            components: [pageOneRow, goBackMisc]
          })

        }


      }
    })

  }
}
