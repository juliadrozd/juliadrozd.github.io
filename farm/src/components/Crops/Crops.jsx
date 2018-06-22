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
        };
      }
    render() {
        const expected = this.state.expected;
        const risk = this.state.risk;
        const price = this.state.price;
        
      return (
        <div className='crops__wrap'>
        
        {crops.map((crop, index) => (
            <button key={index} onClick={(event) => {
                this.setState({ expected: crop.expected_yield, risk: crop.disease_risk_factor, price: crop.price_per_tonne });
                this.props.update(expected, risk, price);
                event.preventDefault();
              }}
            >
                {crop.name}
            </button>
          ))}

          <div className = 'input__wrap' >
            <label>
              Expected yield:
              <input key={expected} defaultValue={expected} />
            </label>
            <label>
              Disease risk factor:
              <input key={risk} defaultValue={risk} />
            </label>
            <label>
              Price per tonne:
              <input key={price} defaultValue={price} />
            </label>
          </div>
        </div>
  
      );
    }
  }
  
  export default Crops;
