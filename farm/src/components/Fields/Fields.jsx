import React, { Component } from 'react';

import './Fields.css';
import farm from '../../data/farm.json';
import '../../index.css';

class Fields extends Component {
    constructor() {
        super();
        this.state = {
            hect: 0,
            suscep: 0,
            index: '',
        };
    }
    handleClick(index) {
        this.setState({ index: index});
    }
 
    render() {     
        return ( <div className = 'fields__wrap'> {
                farm.fields.map((field, index) => (
                    <button key = { index } className={this.state.index === index ?  'active__btn': ''} onClick = {(event) => {
                        event.preventDefault();
                        this.handleClick(index)
                                this.setState({ hect: field.hectares, suscep: field.disease_susceptibility }, () => {
                                const hect = this.state.hect;
                                const suscep = this.state.suscep;
                                const index = this.state.index;
                                this.props.update(hect, suscep, index);
                            });
                    }
                    }> { field.name } </button>
                ))
            } 
            <div className = 'input__wrap' >
                <label>
                    <span>Hectares:</span>
                    <input key = { this.state.hect } defaultValue = { this.state.hect } />  
                </label>
                <label>
                    <span>Disease susceptibility:</span>
                    <input key = { this.state.suscep } defaultValue = { this.state.suscep } /> 
                </label>
            </div>

            </div>

        );
    }
}

export default Fields;