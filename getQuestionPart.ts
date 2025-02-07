function getQuestionPart(phrases: string[]): string[] {
    function findWordSubstring(wordPart: string, phrase: string): string {
        let word = "";
        for (let i = 0; i < wordPart.length; i++) {
            for (let j = i + 1; j <= wordPart.length; j++) {
                let subString = wordPart.slice(i, j);
                if (phrase.includes(subString) && subString.length > word.length) {
                    word = subString;
                }
            }
        }
        return word;
    }

    let wordPart = phrases[0];
    for (let i = 1; i < phrases.length; i++) {
        wordPart = findWordSubstring(wordPart, phrases[i]);
        if (wordPart === "") return phrases;
    }
    return phrases.map((phrase) => phrase.replace(wordPart, "").trim());
}

console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"])); // ["ROOM", "SALTS", "BLOOD"]
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"])); // ["BE", "GIRL", "SHIP"]
