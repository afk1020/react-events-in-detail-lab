// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
   


    setTimeout () => {
    this.props.onDelayedClick(this.props.delay)
    }

    render(){
        return (
        <button onClick={this.setTimeout}> Delayed </button>
        )
    }


export default DelayedButton;