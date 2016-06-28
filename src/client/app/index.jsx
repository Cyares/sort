import React from 'react';
import {render} from 'react-dom';

import {ReduceStore} from 'flux/utils';

class CounterStore extends ReduceStore<number> {
  getInitialState(): number {
    return 0;
  }

  reduce(state: number, action: Object): number {
    switch (action.type) {
      case 'increment':
        return state + 1;

      case 'square':
        return state * state;

      default:
        return state;
    }
  }
}

class Bubble extends React.Component {
  render () {
    return <p>Bubble Algo</p>;
  }
}

class App extends React.Component {
  render () {
    return <Bubble />;
  }
}

render(<App/>, document.getElementById('app'));