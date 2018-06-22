import React, { Component } from 'react';
import './Fields.css';
import farm from '../../data/farm.json';

class Fields extends Component {
    constructor() {
        super();
        this.state = {
            hect: 0,
            suscep: 0,
        };
    }

    render() {
        const hect = this.state.hect;
        const suscep = this.state.suscep;

        return ( <div className = 'fields__wrap'> {
                farm.fields.map((field, index) => (

                    <button key = { index }
                    onClick = {(event) => {
                        event.preventDefault();
                            this.setState({ hect: field.hectares });
                            this.setState({ suscep: field.disease_susceptibility });
                            this.props.update(hect, suscep);
                            
                        }
                    }> { field.name } </button>
                ))
            } 
            <div className = 'input__wrap' >
                <label>
                    Hectares:
                    <input key = { hect } defaultValue = { hect } />  
                </label>
                <label>
                    Disease susceptibility:
                    <input key = { suscep } defaultValue = { suscep } /> 
                </label>
            </div>

            </div>

        );
    }
}

export default Fields;