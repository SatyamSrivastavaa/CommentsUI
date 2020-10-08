export const commentForm = (id, comment) => {
    return `
    <div class="container"  id="${id}">
        <ul>
            <li>${comment}</li>
        </ul>
        <textarea type="text" class="add-comment-area"></textarea>
        <button id='submit'>submit</button>
        <div id="comments-list"></div>
    </div>
`
}