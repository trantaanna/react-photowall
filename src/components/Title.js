import React from 'react'
import PropTypes from 'prop-types'

function Title(props) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;