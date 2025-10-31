let{GoogleGenAI}=require('@google/genai')

let genAI=new GoogleGenAI({})

genAI.models.generateContent({
    model:'gemini-2.5-flash',
    contents: `What promotional items should we give out at our conferance booth? 
    we are a startup company selling logging and monitoring products.
    we'll be attending VueConf US this year.
    last year we gave out pens and tote bags.
    The pens were not popular. The tote bags were popular but expensive.`
    

}).then(response =>console.log(response.text))