console.log(`\nItems broken by search:`)
for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i].itemName === "minecraft:iron_sword") {
        console.log(`\nTotal ${capitalize((arrayData[i].itemName).replace("minecraft:", "").replace("_", " "))}(s) broken ${arrayData[i].value}`)
        break;
    } else if (!arrayData[i].itemName === "minecraft:iron_sword") {
        console.log(`\nCouldn't find that item :(`)
        break;
    }
}
