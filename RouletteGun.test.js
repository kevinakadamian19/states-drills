import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import RouletteGun from './RouletteGun'

describe('Bomb component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RouletteGun />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})