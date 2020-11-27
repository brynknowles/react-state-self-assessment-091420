import React from 'react'
import {yes, no} from '../objects.js'

class YesNo extends React.Component {

    state = {
        clicked: false,
        yes,
        no
    }

    clickHandler = () => {
        // console.log("image has been clicked")
        this.setState(originalImage => ({clicked: !originalImage.clicked}))
    }

    render() {
        return (
            <div className="drake-container">
                <h1> {this.state.clicked ? yes["yes-statement"] : this.state.no["no-statement"]} </h1>
                <img alt="Drake" src={this.state.clicked ? yes["yes-image"] : this.state.no["no-image"]} onClick={this.clickHandler}/>
            </div>
        )
    }
}

export default YesNo