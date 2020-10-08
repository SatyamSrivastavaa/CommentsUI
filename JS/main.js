import {commentForm} from './commentTemplate.js';

let i=0;
let initialParent = document.querySelector('.container');
let submitButton = initialParent.querySelector('#submit');

const addComment = (parent) => {
    let commentArea = parent.querySelector('textarea')
    let commentsList = parent.querySelector('#comments-list'); 
    debugger
    commentsList.innerHTML += commentForm(i++, commentArea.value);
    commentArea.value = '';

    let child = parent.querySelector('.container');
    child.querySelector('#submit').addEventListener('click', () => addComment(child));
    
}

submitButton.addEventListener('click', () => addComment(initialParent));