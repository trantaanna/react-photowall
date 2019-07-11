//remove action
//return a JS object describe the post that needs to be deleted
//action creator: function that return an action
export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

//adding post
export function addPost(post)
{
    return {
        type: 'ADD_POST',
        post: post
    }
}

