import React from 'react';
import './index.css';
class Item1 extends React.Component {

    render() {
        return <div>
            <p>{this.props.name}</p>
            <p>{this.props.url}</p>
            <hr/>
        </div>;
    }
}

export default Item1;