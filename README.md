# Minecraft Stats
## Get your Minecraft stats outside of Minecraft using Node.JS!

### Features: 
1. Supports **all** types of stats
2. Has code for a leaderboard using mongoDB that sorts a specific stat 
3. Can be used to search for a specific item 


### How to setup:
1. Get your Minecraft stats file 
> Can be found at minecraft/saves/<world name>/stats/<uuid>. json (Local Save) OR <world name>/stats/<uuid>. json (Severs)
2. Open `stats.js` and put in the location of file in place of dummyOne.json, [Check me out if you've never done it before](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
3. Choose the stat that you want to search up (Line 6 or connect it to a webpage and use the prompt)
> For a certain item:
1. Open `find.js` and then put in the item name in the "" in line 3 or use a webpage and use the prompt  

For more info about Minecraft statics [Click me](https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names)
