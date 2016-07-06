import React from 'react';
import {dispatch} from './SortDispatcher';
import MaskedInput from 'react-maskedinput';

class ValuesInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.values.join()
        };
        this._onChange = this._onChange.bind(this);
        this._updateValues = this._updateValues.bind(this);
    }
    
    _onChange(event: any): void {
        var value = event.target.value;
        var key = value.substr(value.length - 1);
        value = value.substring(0, value.length - 1);
        if (key == ',') {
            value += key;
        }
        else {
            key = parseInt(key);
            if ( !isNaN(key) ) {
                value += key;
            }
        }
            
        this.setState({ values: value });
    }
    
    _updateValues(): void {
        var values = this.state.values.split(",");
        // Make sure values are int
        for ( let i = 0 ; i <= values.length - 1 ; i++ ) {
            values[i] = parseInt(values[i]);
        }
        
        dispatch({ type: 'sort/change-values', values: values });
    }
    
    render(): ?React.Element {
        return <div>
            <input
                type="text"
                value={ this.state.values }
                onChange={ this._onChange }
            />
            <button onClick={ this._updateValues }>Update Values</button>
        </div>;
    }
}

ValuesInput.propTypes = { values: React.PropTypes.array };
ValuesInput.defaultProps = { values: [] };

export default ValuesInput;