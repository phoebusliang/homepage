/**
 * Created by twe on 9/1/16.
 */
import React from 'react'
import {connect} from 'react-redux'

// var divStyle = {
//     color: 'white',
//     textAlign: 'center',
//     fontFamily: 'Arial, Helvetica, sans-serif'
// };

let Mask = () => {
    return (
        <div
            style={{
                background: 'rgba(0, 0, 0, .3)',
                width: '100%',
                height: '372px',
                position: 'absolute',
                top: '110px'
            } }>
            <h1 style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '80px'
            }}>
                Live There
            </h1>
            <p style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize:'15px'
            }}>
                Book homes from local hosts and experience a place like you live there.
            </p>
        </div>
    );
};

Mask = connect()(Mask);
export default Mask;
