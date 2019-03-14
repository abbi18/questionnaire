import _ from 'lodash';

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

function fetchAPi(amount, difficulty, type) {
    const url = addParameterToURL("https://opentdb.com/api.php", amount, difficulty, type);

    return fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Server response wasn\'t OK');
        }
    });
}

function shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    for (var i = 0; i < array.length; i++) {
        array[i].index = i;
    }

    return array;
}

export function transformData(array) {
    var list = _.values(array);
    var itemList = new Array(list.length);
    for ( let i = 0; i < list.length; i++) {
        const listItem = list[i];
        itemList[i] = {
            index: i,
            category: listItem.category,
            type: listItem.type,
            difficulty: listItem.difficulty,
            question: listItem.question,
            correct_answer: listItem.correct_answer,
            incorrect_answers: listItem.incorrect_answers
        };
    }
    return itemList;
}

export async function getQuestions(amount, difficulty, type) {
    var response = await fetchAPi(amount, difficulty, type);
    console.log('abnndn', response.results);
    response = transformData(response.results);
    response = shuffleArray(response);
    console.log('abnndn', response);
    return response;
}
