//import gemini client and type helper for json schema
let { GoogleGenAI, Type } = require('@google/genai')

//create a new gemini ai client object
let genAI = new GoogleGenAI({})

//sample user input / ingredients
let userInput = 'eggs and broccoli and leftover chicken'

//prompt sent to gemini
let prompt = `suggest one recipe that uses these ingredients.
ingredients: ${userInput}`

//send request to gemini model
genAI.models.generateContent({
    model: 'gemini-2.5-flash',    // choose ai model
    contents: prompt,             // text prompt
    config: {
        //tell gemini how it should behave
        systemInstruction: `you are a recipe suggestion bot for a health-conscious,
        budget-friendly website. suggest recipes that are low cost but use healthy ingredients`,

        //tell gemini to return json output instead of plain text
        responseMimeType: 'application/json',

        //schema defining how the json response should look
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                recipeName: {
                    type: Type.STRING
                },
                description: {
                    type: Type.STRING
                },
                ingredients: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.STRING
                    }
                },
                instructions: {         // ✅ fixed: was "insturctions"
                    type: Type.ARRAY,
                    items: {
                        type: Type.STRING
                    }
                }
            }
        }
    }

}).then(response => {
    //print raw json string returned by gemini
    console.log(response.text)

    //convert json string into javascript object
    let recipe = JSON.parse(response.text)
    console.log(recipe)
})
