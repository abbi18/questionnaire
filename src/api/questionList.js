import _ from 'lodash';
import { store } from '../store.js';
import { apiFetchBegin, apiFetchSuccess, apiFetchError } from 'actions';

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
        if (array[i].index) {
            array[i].index = i;
        }
    }

    return array;
}

export function transformData(array) {
    var list = _.values(array);
    var itemList = new Array(list.length);
    for ( let i = 0; i < list.length; i++) {
        const listItem = list[i];
        var answerList = _.values(listItem.incorrect_answers);
        answerList.push(listItem.correct_answer);
        answerList = shuffleArray(answerList);
        itemList[i] = {
            index: i,
            category: listItem.category,
            question: listItem.question,
            correct_answer: listItem.correct_answer,
            options: answerList
        };
    }
    itemList = shuffleArray(itemList);
    return itemList;
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

export async function getQuestions(amount, difficulty, type) {
    try {
        store.dispatch(apiFetchBegin());
        var response = await fetchAPi(amount, difficulty, type);
        response = transformData(response.results);
        store.dispatch(apiFetchSuccess(response));
        console.log('abnndn', response);
    } catch {
        store.dispatch(apiFetchError());
    }
}
