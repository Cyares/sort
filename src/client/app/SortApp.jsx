import React from 'react';
import {Container} from 'flux/utils';
import type {Store} from 'flux/utils';

import SortStore from './SortStore';
import AlgoChoice from './AlgoChoice.jsx';
import ArrayDisplayer from './ArrayDisplayer.jsx';
import ValuesInput from './ValuesInput.jsx';


type State = {
    algo: string,
    array: Array
}

class SortApp extends React.Component {
    
    constructor() {
        super();
        this.state = {
            algo: "",
            array: []
        };
    }
    
    static getStores(): Array<Store> {
        return [SortStore];
    }
    
    static calculateState(prevState: ?State): State {
        return SortStore.getState();
    }

  render(): ?React.Element {
    return (
        <div>
            <ValuesInput values={ this.state.array } />
            <AlgoChoice algo={ this.state.algo } />
            <ArrayDisplayer array={ this.state.array } />
        </div>
    );
  }
}

const AppContainer = Container.create(SortApp);
export default AppContainer;