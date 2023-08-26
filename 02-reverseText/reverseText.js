
function reverseText(text){
    let textArr = []
    
   if(typeof text !== "string"){
    return 

   }
   else{
    for(let i = 0; i<text.length; i++){
        textArr.unshift(text[i])
}
   }
    return textArr.join("")       
}

module.exports = {reverseText}