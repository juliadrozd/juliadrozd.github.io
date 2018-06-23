import React, { Component } from 'react';

import './Crops.css'
import crops from '../../data/crops.json';

class Crops extends Component {
    constructor() {
        super();
        this.state = {
            expected: 0,
            risk: 0,
            price: 0,
            index: '',
        };
      }
    handleClick(index) {
        this.setState({ index: index});
    }
    render() {
      return (
        <div className='crops__wrap'>
        {crops.map((crop, index) => (

            <button key={index} className={this.state.index === index ?  'active__btn': ''} onClick={(event) => {
              event.preventDefault();
              this.handleClick(index)
              setTimeout(() => {
                this.setState({ expected: crop.expected_yield, risk: crop.disease_risk_factor, price: crop.price_per_tonne }, () => {
                    const expected = this.state.expected;
                    const risk = this.state.risk;
                    const price = this.state.price;
                    this.props.update(expected, risk, price, index);
                });
              });
                
              }}>
                {crop.name}
            </button>

        ))}

          <div className = 'input__wrap' >
            <label>
              <span>Expected yield:</span>
              <input key={this.state.expected} defaultValue={ this.state.expected } />
            </label>
            <label>
              <span>Disease risk factor:</span>
              <input key={this.state.risk} defaultValue={ this.state.risk } />
            </label>
            <label>
              <span>Price per tonne:</span>
              <input key={this.state.price} defaultValue={this.state.price} />
            </label>
          </div>
        </div>
  
      );
    }
  }
  
  export default Crops;
