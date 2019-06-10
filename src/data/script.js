const fs = require('fs');

const allCats = ['almrath', 'ast5arh', 'morazkar', 'myazkar', 'nigazkar', 'pryazkar', 'roqyatb', 'salahtb', 'sleeptb', 't7seentb', 'weakuptb'];

// TODO get categories title from majed, fill this array out and run the script again to generate new allAzkar.json
const allCatsTitle = ['دعاء المرض', 'دعاء الاستخارة', 'أدعية أخرى', 'أذكاري', 'أذكار المساء', 'أذكار الصلاة', 'أذكار الرقية', '', '', '', '']
const ALLAZKAR = [];

allCats.map((cat, index) => {

    const catObj = {
        id: index + 1,
        category: cat,
        title: cat,
        azkar: []
    }

    const catAkar = require(`./data/${cat}`)

    catAkar.map(zekr => {
        catObj.azkar.push({
            text: zekr.azkar,
            times: zekr.click,
        })
    })

    ALLAZKAR.push(catObj)
})

fs.writeFile('allAzkar.json', JSON.stringify(ALLAZKAR, null, 4), (err) => {
    console.log('The file has been saved!');
});