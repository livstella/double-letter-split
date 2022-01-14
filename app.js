function splitDouble(string){
//empty variables for storing results
    let splitStringArray=[]
    let tempString=""
//Loop for the string and adding each letter to tempString
 for(let i=0; i < string.length;i++ ){
    tempString+=(string[i])
//Looking for double letters, if found push & reset tempString to array
    if(string[i]==string[i+1]){
        splitStringArray.push(tempString)
        tempString=""
    } 
 }
//Pushes last bit of the string if double letter has been found
 if(splitStringArray.length!=0){splitStringArray.push(tempString)}
 console.log(splitStringArray)

}

splitDouble("letter")

