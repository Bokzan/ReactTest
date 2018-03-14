import React from 'react';
import './index.css';
import Item1 from './item';
class List1 extends React.Component {

    render() {
        let itemNodes=this.props.data.map(item=>{
            return (
                <Item1 name={item.name} url={item.url} />
            );
        });
        return <div>
            {itemNodes}
        </div>;
    }
}

export default List1;