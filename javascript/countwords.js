//write a program that counts the number of words in a given sentence.
function countWords(words){
    //to remove space
    words = words.trim() 

    // Split the string by spaces and filter out any empty strings (for multiple spaces)
    let result = words.split(/\s+/).filter(Boolean);
    
    return result.length;
}
console.log(countWords("Hello World, How are you?"))

//output is 5