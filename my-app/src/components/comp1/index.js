import React from 'react';

import './index.css';
import Box1 from './Box.js';

class Comp1 extends React.Component {

    render() {
        return <div>
            <Box1 url='https://api.github.com/users/octocat/gists'/>
        </div>;
    }
}

export default Comp1;