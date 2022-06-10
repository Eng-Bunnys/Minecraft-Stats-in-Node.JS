const jsonFile = require('./dummyOne.json');
//import jsonFile from './dummyOne.json';
//console.log(jsonFile)

function capitalize(string) {
    return string.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())
}

const userStats = jsonFile.stats;

let categoryOfChoice = 'mined' //= prompt("Which category would you like to see?\n[mined, killed, dropped, picked_up, killed_by, broken, crafted]").toLowerCase();
let targetData
let displayText
switch (categoryOfChoice) {
    case 'mined':
        targetData = userStats['minecraft:mined'];
        displayText = 'Items mined data';
        break;
    case 'killed':
        targetData = userStats['minecraft:killed'];
        displayText = 'Mobs killed data';
        break;
    case 'dropped':
        targetData = userStats['minecraft:dropped'];
        displayText = 'Items dropped data';
        break;
    case 'picked_up':
        targetData = userStats['minecraft:picked_up'];
        displayText = 'Items picked up data';
        break;
    case 'killed_by':
        targetData = userStats['minecraft:killed_by'];
        displayText = 'Mobs killed by data';
        break;
    case 'broken':
        targetData = userStats['minecraft:broken'];
        displayText = 'Items broken data';
        break;
    case 'crafted':
        targetData = userStats['minecraft:crafted'];
        displayText = 'Items crafted data';
        break;
    case 'custom':
        targetData = userStats['minecraft:custom'];
        displayText = 'Custom stats data';
        break;
    default:
        targetData = userStats['minecraft:mined'];
        displayText = 'Items mined data';
}
if (targetData) {
    const targetDataArray = Object.entries(targetData);
    let arrayData = targetDataArray.map(function (item) {
        return {
            itemName: item[0],
            value: item[1]
        }
    });

    arrayData = arrayData.sort(function (a, b) {
        return b.value - a.value;
    });

    let totalFields = arrayData.length;
    let categoryData
    if (arrayData.length > 30) {
        arrayData = arrayData.slice(0, 30);
    }
    console.log(`Total Fields: ${totalFields}\nDisplayed Fields: ${arrayData.length}\n`);
    console.log(`${displayText}\n`);
    for (let i = 0; i < arrayData.length; i++) {
        categoryData = (`${capitalize((arrayData[i].itemName).replace("minecraft:", "").replace("_", " "))} : ${arrayData[i].value}`)
        console.log(categoryData);
    }
} else categoryData = `No data found!`;

//document.getElementById("categoryName").innerHTML = displayText;
//document.getElementById("totalFields").innerHTML = `Total Fields: ${totalFields}\nDisplayed Fields: ${arrayData.length}\n`;
//document.getElementById("displayFields").innerHTML = categoryData;
