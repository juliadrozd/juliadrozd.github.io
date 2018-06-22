import React, { Component } from 'react';
import './Calc.css';

import Fields from '../Fields/Fields.jsx';
import Crops from '../Crops/Crops.jsx';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hect: 0,
            suscep: 0,
            expected: 0,
            risk: 0,
            price: 0,
            perTonne: 0,
            perField: 0,
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(hect, suscep, expected, risk, price) {
        this.setState({ hect: hect });
        this.setState({ suscep: suscep });
        this.setState({ expected: expected });
        this.setState({ risk: risk });
        this.setState({ price: price });
    }

    render() {
        //const perTonne = ((this.state.hect * this.state.expected) / (this.state.risk * this.state.suscep)) * this.state.price;
        //const perField = ((this.state.hect * this.state.expected) / (this.state.risk * this.state.suscep)) * this.state.price * this.state.hect;
        return ( <form className = 'main__form' >
            <Fields update = { this.updateState } /> 
            <Crops update = { this.updateState } />

            <div className='main__form--res'>
                <label>
                    Per Tonne:
                    <input type = "text" value={ this.state.perTonne } /> 
                    <button onClick={(event) => {
                            event.preventDefault();
                            console.log(this.state.hect);
                            console.log(this.state.expected);
                            console.log(this.state.risk);
                            console.log(this.state.suscep);
                            console.log(this.state.price);


                            let a = this.state.hect * this.state.expected;
                            let b = this.state.risk * this.state.suscep;
                            let c = a / b;
                            let result = c * this.state.price;
                            console.log(b);
                            this.setState({ perTonne: result});

                    }}>Calc</button>
                </label>

                <label>
                    Per Field:
                    <input type = "text" defaultValue = { this.state.perField } onChange={this.handleChange}/> 
                </label >
            </div>

            </form>
        );
    }
}

export default Calc;