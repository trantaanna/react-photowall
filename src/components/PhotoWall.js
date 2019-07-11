import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PhotoWall(props) {
    return (
        <div className="photoGrid">
            <Link className="addIcon" to="/AddPhoto" />
            <div className="photoGrid">
                {props.posts
                    .sort( function(x,y) { return y.id - x.id;} )
                    .map( post => <Photo key={post.id} post={post} {...props} index={post.id}/>)}
            </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PhotoWall;