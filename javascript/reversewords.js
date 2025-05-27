//write the program reverse order words in a sentence but keep words intact.

function countWords(words){
    //to remove space
    words = words.trim() 

    // Split the string by spaces and filter out any empty strings (for multiple spaces)
    let result = words.split(/\s+/).filter(Boolean).reverse();
    
    // Join the reversed array back into a string with spaces and return the result
    return result.join(' ');
}
console.log(countWords("javascript is fun"))

//output is fun is javascript