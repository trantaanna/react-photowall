import React, { Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import { removePost } from '../redux/actions'

class Main extends Component {

    constructor(){
        super();
    }

    // componentDidMount() {
    //     //this.props.dispatch(removePost(1));
    //     //this.props.removePost(1);
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    <Link to="/">Photowall</Link>
                </h1>
                <Route exact path="/" render={ () => ( //use render() props if render multiple components otherwise use component() to render 1 component
                    <div> 
                        <Photowall {...this.props} />
                        {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> */}
                    </div>
                )} />
                <Route path="/AddPhoto" render={ ({history}) => ( //<Route path="/AddPhoto" component= {AddPhoto} /> }
                    <AddPhoto {...this.props} />
                )}/> 
                
            </div>
        )
    }

}

export default Main;