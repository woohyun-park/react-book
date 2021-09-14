// import React from 'react';
// import Proptypes from 'prop-types';

// const ComponentPractice = ({name}) => {
//     return (
//         <div>제 이름은 {name}입니다</div>
//     )
// }

// ComponentPractice.propTypes = {
//     name: Proptypes.string.isRequired
// }

// export default ComponentPractice;

import React, {Component} from 'react';
import Proptypes from 'prop-types';

class ComponentPractice extends Component{
    state = {
        number: 0
    }
    render(){
        const {number} = this.state;
        return (
            <>
                <h1>{number}</h1>
                <button onClick={() => {
                    this.setState({number: number + 1});
                }}/>
            </>
        )
    }
}

ComponentPractice.propTypes = {
    name: Proptypes.string.isRequired
}

export default ComponentPractice;