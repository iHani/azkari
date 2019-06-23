const fs = require('fs');
const azkarList = require('./src/data/allAzkar.json');



azkarList.map(cat => {
    const id = Object.keys(cat)[0]
    console.log(id);
    
    const newCat = {
        id,
        title: cat[id].title,
        azkar: cat[id].azkar
    }

    fs.appendFile('aaaaaaaaaaaaaaaaaaaaaaaaa.json', JSON.stringify(newCat, null, 4), (err) => {
        console.log('The file has been saved!');
    });
})


