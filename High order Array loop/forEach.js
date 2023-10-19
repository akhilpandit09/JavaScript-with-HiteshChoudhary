const mycoding = [
    {
        languageName:"javascript",
        shortcut:"js"
    },
    {
        
        languageName:"python",
        shortcut:"py"
    }
];

const functionName = (data) => (console.log(`${data.languageName} shortcut is ${data.shortcut}`));
mycoding.forEach(functionName);