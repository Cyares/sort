import React from 'react';
import {dispatch} from './SortDispatcher';

class ValuesInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            values: this.props.values.join()
        };
        this._onChange = this._onChange.bind(this);
        this._updateValues = this._updateValues.bind(this);
    }
    
    render(): ?React.Element {
        return <div>
            <input type="text"
                value={ this.state.values }
                onChange={ this._onChange }
            />
            <button onClick={ this._updateValues }>Update Values</button>
        </div>;
    }
    
    _onChange(event: any): void {
        this.setState({ values: event.target.value });
    }
    
    _updateValues(): void {
        var values = this.state.values.split(",");
        dispatch({ type: 'sort/change-values', values: values });
    }
}

ValuesInput.propTypes = { values: React.PropTypes.array };
ValuesInput.defaultProps = { values: [] };

export default ValuesInput;