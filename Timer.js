import React, { Component } from 'react';

class Timer extends Component {
    state={
        todayTimeused:0
    };
    componentDidMount(){
        
        setInterval(() => {
            let newTime= Date.now();
        let todayTimeusedFull=newTime-this.props.time;
        let todayTimeused=Math.round(todayTimeusedFull/1000);
        this.setState({todayTimeused:todayTimeused});
        console.log(this.state.todayTimeused);
    }, 1000);

    }

    render() {

        return (
            <div>
                <h1 >here is me and your time so come with us </h1>
                <span>{this.state.todayTimeused} </span>
                <h5>seconds </h5>
            </div>
        );
    }
}

export default Timer;