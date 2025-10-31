//import google gemini client from the genai library
let { GoogleGenAI } = require('@google/genai')
//create a new gemini client object
let genAI = new GoogleGenAI({})
//send text prompt to the gemini model
genAI.models.generateContent({
    model: 'gemini-2.5-flash',   // choose which ai model to use
    contents: `
    what promotional items should we give out at our conference booth? 
    we are a startup company selling logging and monitoring products.
    we'll be attending vueconf us this year.
    last year we gave out pens and tote bags.
    the pens were not popular. the tote bags were popular but expensive.
    `
}).then(response => {

    //print the ai response text to the terminal
    console.log(response.text)

})
