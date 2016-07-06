import React from 'react';
import {dispatch} from './SortDispatcher';
import Sorter from './Sorter';

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
                  <option value={ Sorter.BUCKET }>Bucket Sort</option>
                  <option value={ Sorter.BUBBLE }>Bubble Sort</option>
                  <option value={ Sorter.SELECTION }>Selection Sort</option>
                  <option value={ Sorter.INSERTION }>Insertion Sort</option>
                  <option value={ Sorter.MERGE }>Merge Sort</option>
                </select>
                <button onClick={ this.sort }>Sort</button>
            </div>
        );
    }
};

AlgoChoice.propTypes = { algo: React.PropTypes.string };
AlgoChoice.defaultProps = { algo: "bucket" };

export default AlgoChoice;