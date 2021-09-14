import React from 'react';

const LifeCycleSample = () => {
    [number, getNumber] = useState(0);
    [color, getColor] = useState(null);

    const constructor(props){
        super(props);
        console.log('constrctor');
    }
}