import React from 'react';
import {dispatch} from './SortDispatcher';

class AlgoChoice extends React.Component {
    
    constructor(props) {
        super(props);
    }

    changeAlgo(event) {
        dispatch({type: 'sort/change-algo', id: event.target.value });
    }
    
    sort() {
        dispatch({type: 'sort/sort' });
    }
    
    render() {
        return (
            <div>
                <select value={ this.props.algo }
                    onChange={ this.changeAlgo }>
                  <option value="bucket">Bucket Sort</option>
                  <option value="bubble">Bubble Sort</option>
                  <option value="selection">Selection Sort</option>
                  <option value="insertion">Insertion Sort</option>
                  <option value="merge">Merge Sort</option>
                </select>
                <button onClick={ this.sort }>Sort</button>
            </div>
        );
    }
};

AlgoChoice.propTypes = { algo: React.PropTypes.string };
AlgoChoice.defaultProps = { algo: "bucket" };

export default AlgoChoice;