function addParameterToURL(uri, amount, difficulty, type) {
    let parameters = [];
    if (amount !== undefined) {
        parameters.push('amount=' + amount);
    }
    if (difficulty !== undefined) {
        parameters.push('difficulty=' + difficulty);
    }
    if (type !== undefined) {
        parameters.push('type=' + type);
    }
    return uri + '?' + parameters.join('&');
}

// function shuffleArray(array) {
//     var currentIndex = array.length,
//       temporaryValue,
//       randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
// }

export function getQuestions(amount, difficulty, type) {
    const url = addParameterToURL("https://opentdb.com/api.php", amount, difficulty, type);
    var array;
    fetch(url)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response.result => );
    
    
}
