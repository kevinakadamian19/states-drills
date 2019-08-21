import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            console.log('setInterval')
            this.setState({
                count: newCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderCount() {
        const currentCount = this.state.count
        if(currentCount >= 8) {
            clearInterval(this.interval)
            return 'BOOM'
        }
        else if (currentCount % 2 === 0) {
            return 'tick'
        }
        else {
            return 'tock'
        }
    }

    render() {
        console.log('render')
        return(
            <div>
               <p>{this.renderCount()}</p> 
            </div>
        )
    }
}

export default Bomb