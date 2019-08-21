import React from 'react';
import { thisExpression } from '@babel/types';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
        console.log('render')
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    triggerGun = () => {
        this.setState({
            spinningTheChamber: true,
        })

    }
    render() {
        console.log('render')
        return(
            <div>
                <p>{this.state.chamber}</p>
                <button onClick={this.triggerGun()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun