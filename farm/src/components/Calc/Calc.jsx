import React, { Component } from 'react';
import './Calc.css';

import Fields from '../Fields/Fields.jsx';
import Crops from '../Crops/Crops.jsx';

class Calc extends Component {
    constructor() {
        super();
              
        this.state = {
            hect: 0,
            suscep: 0,
            expected: 0,
            risk: 0,
            price: 0,
            perTonne: 0,
            perField: 0,
        }
        this.updateStateField = this.updateStateField.bind(this);
        this.updateStateCrop = this.updateStateCrop.bind(this);

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    updateStateField(hect, suscep) {
       this.setState({ hect: hect, suscep: suscep }, () => {
        this.onChangeHandler();
       }); 
    }
    updateStateCrop(expected, risk, price) {
        this.setState({ expected: expected, risk: risk, price: price }, () => {
         this.onChangeHandler();
        }); 
     }
    onChangeHandler() {
        const hect = this.state.hect.valueOf();
        const suscep = this.state.suscep.valueOf();
        const expected = this.state.expected.valueOf();
        const risk = this.state.risk.valueOf();
        const price = this.state.price.valueOf();
           
        const perTonne = ((hect * expected) / (risk * suscep)) * price;
        const perField = ((hect * expected) / (risk * suscep)) * price * hect;

            if (isNaN(perTonne, perField)) { 
                return this.setState({perTonne: 0, perField: 0})
            } else {
                this.setState({perTonne: perTonne, perField: perField});
            } 
    }
    
    render() {
        return ( <form className = 'main__form' >
            <Fields update = { this.updateStateField } /> 
            <Crops update = { this.updateStateCrop } />

            <div className='main__form--res'>
                <label>
                    Per Tonne:
                    <input type = "text" value={ this.state.perTonne.toFixed(2) } onChange={this.onChangeHandler}/> 
                </label>

                <label>
                    Per Field:
                    <input type = "text" value = { this.state.perField.toFixed(2) } onChange={this.onChangeHandler}/> 
                </label >
            </div>

            </form>
        );
    }
}

export default Calc;