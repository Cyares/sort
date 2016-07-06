const BUCKET = "bucket",
      BUBBLE = "bubble",
      SELECTION = "SELECTION",
      INSERTION = "INSERTION",
      MERGE = "MERGE";

export default class Sorter {
    
    sort(algo: string, array: Array): Array {
        switch (algo) {
            case BUCKET:
                return this.bucketSort(array);
            case BUBBLE:
                return this.bubbleSort(array);
            case SELECTION:
                return this.selectionSort(array);
            case INSERTION:
                return this.insertionSort(array);
            case MERGE:
                return this.mergeSort(array);
        }
    }
    
    bucketSort(array: Array): Array {
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
    
    bubbleSort(array: Array): Array {
        var orderedArray = array.slice();
        // Compare each element with the next one
        for ( let i = (orderedArray.length - 1) ; i >= 0 ; i-- ) {
            
            for ( let j = 1 ; j <= i ; j++ ) {
                // Switch order if first is greater
                if (  orderedArray[j-1] > orderedArray[j] ) {
                    
                    var temp = orderedArray[j-1];
                    orderedArray[j-1] = orderedArray[j];
                    orderedArray[j] = temp;
                }
            }
        }
        
        return orderedArray;
    }
    
    static get BUCKET() {
        return BUCKET;
    }
    
    static get BUBBLE() {
        return BUBBLE;
    }
    
    static get SELECTION() {
        return SELECTION;
    }
    
    static get INSERTION() {
        return INSERTION;
    }
    
    static get MERGE() {
        return MERGE;
    }
}