let{GoogleGenAI,Type}=require('@google/genai')

let genAI=new GoogleGenAI({})
let userInput='eggs and brocolli and leftover chicken'

let prompt =`Suggest one recipe that uses these ingredients.
Ingerdients: ${userInput}`
genAI.models.generateContent({
    model:'gemini-2.5-flash',
    contents: prompt,
    config: {
        systemInstruction:`you are a recipe suggestion bot for a health-concious,
        budget-friendly website.Suggest recipes that are low cost but use healthy ingredients`,
        responseMimeType:'application/json',
        responseSchema:{
            type: Type.OBJECT,
            properties:{
                recipeName:{
                    type: Type.STRING
                },
                description:{
                    type:Type.STRING
                },
                ingredients:{
                    type: Type.ARRAY,
                    items:{
                        type: Type.STRING
                    }
                },
                insturctions:{
                    type: Type.ARRAY,
                    items:{
                        type: Type.STRING
                    }
                }
            }
        }

        
    }

}).then(response =>{
    console.log(response.text)
    let recipe= JSON.parse(response.text)
})