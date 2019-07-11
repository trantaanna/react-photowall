import React from 'react'
import PropTypes from 'prop-types'
//import {connect} from 'react-redux'

function Photo(props) {
    //console.log(props.post)
    const post = props.post
    return (
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={ () => {props.removePost(props.index)} }>Remove</button>
            </div>
        </figure>
    )

}

// function mapStateToProps(state) {   //inject state directly to subcomponent instead of passing down from top level
//     return {
//         posts: state
//     }
// }
Photo.propTypes = {
    post: PropTypes.object.isRequired,
}


//export default connect(mapStateToProps)(Photo);
export default Photo;