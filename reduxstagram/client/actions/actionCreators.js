//increment likes

export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add  comment 
export function addComment(postId, author, comment) {
    console.log("dispatch comment");
    return {
        type: 'ADD_COMMENT',
        postId, 
        author, 
        comment
    }
}

//remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i, // we just need to know index of comment
        postId
    }
}