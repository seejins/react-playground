import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnnmount() {
        clearInterval(this.interval);
    }

    tickTock() {
        let {count} = this.state;
        if (count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!!' 
        } else if ( count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }

    render() {
        return (
            <div>
                <p>{this.tickTock()}</p>
            </div>
        )
    }
}

export default Bomb;