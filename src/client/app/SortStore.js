import {ReduceStore} from 'flux/utils';
import type {Action} from './SortActions';
import SortDispatcher from './SortDispatcher';
import Sorter from './Sorter';

class SortStore extends ReduceStore {
    
    getInitialState(): string {
        return {
            algo: "bucket",
            array: [11,20,6,2,18,9]
        };
    }
    
    reduce(state: string, action: Action): string {
        switch (action.type) {
            case 'sort/change-algo':
                return { algo: action.id, array: state.array };
                
            case 'sort/sort':
                var sorter = new Sorter();
                var sortedValues = sorter.sort(state.algo, state.array);
                return { algo: state.algo, array: sortedValues };
                
            case 'sort/change-values':
                return { algo: state.algo, array: action.values };
            
            default:
                return state;
        }
    }
    
    sort(array: Array): Array {
        // Create bucket array
        var bucketArray = new Array(Math.max(...array)+1);
        // Fill bucket with zeros
        bucketArray.fill(0);
        // Count in bucket
        array.forEach(v => {
            ++bucketArray[v];
        });
        // Recombine ordered array
        var orderedArray = new Array(array.length);
        bucketArray.forEach((v, i) => {
            while (v > 0) {
                orderedArray.push(i);
                --v;
            }
        });
        
        return orderedArray;
    }
}

const instance = new SortStore(SortDispatcher);
export default instance;