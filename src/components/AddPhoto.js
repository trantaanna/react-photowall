import React, { Component } from 'react'
import {addPost} from '../redux/actions'

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();     
        
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink,
        }
        if (description && imageLink) {
            this.props.addPost(post);
            this.props.history.push('/');
        }
    }
    render(){
        return (
            <div>
               <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input name="link" type="text" placeholder="Link"/>
                    <input name="description" type="text" placeholder="Description"/>
                    <button>Post</button>
                </form>
               </div>
            </div>
        )
    }
}

export default AddPhoto;