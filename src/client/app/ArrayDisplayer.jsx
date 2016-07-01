import React from 'react';

class ArrayDisplayer extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        var items = [];
        this.props.array.forEach((v, i) => {
            items.push(<span key={ i } className="result">{ v }</span>);
        });
        
        return (
            <div>
                { items }
            </div>
        );
    }
}

ArrayDisplayer.propTypes = { array: React.PropTypes.array };
ArrayDisplayer.defaultProps = { array: [] };

export default ArrayDisplayer;