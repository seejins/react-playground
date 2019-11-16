import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {
        this.setState({spinningTheChamber: true})

        this.timeout = setTimeout(() => {
            let random = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: random,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    showStatus() {
        let {chamber, spinningTheChamber} = this.state
        let {bulletInChamber} = this.props;

        if (spinningTheChamber === true) {
            return "spinning the chamber and pulling the trigger! ...."
        } else if (chamber === bulletInChamber) {
            return "BANG!!!!"
        } else {
            return "You're safe!!"
        }
    }

    
    render() {
        return (
            <div>
                <p>{this.showStatus()}</p>
                <button onClick={this.handleButtonClick}>Pull The Trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;