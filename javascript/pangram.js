
function isPangram(words) {
    //convert words to lower case
    words = words.toLowerCase();

    // Loop through each letter of the alphabet
    for (let char = 'a'; char <= 'z'; char++) {
        
        if(!words.includes(char)){
            console.log("it is not a pangram")
        }else{
            console.log("it is a pangram")
        }

        return;
    }   
}

isPangram("The quick brown fox jumps over the lazy dog")

//output is , it is a pangram