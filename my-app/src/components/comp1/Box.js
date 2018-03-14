import React from 'react';
import './index.css';
import $ from 'jquery';
import List1 from './List.js';


class Box1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
        this.getData();
        // setInterval(()=>this.getData(),1000);
    }
    getData(){


        $.ajax({
            url:this.props.url,
            dataType:'json',
            error: (xhr,status,error)=>{
                console.log(error);
            },
            success:data=>{
                console.log(data);
                this.setState({data:data});
            }
        })
    }


    render() {
        return <div>
            <List1 data={this.state.data}/>
        </div>;
    }
}

export default Box1;