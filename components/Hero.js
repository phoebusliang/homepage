/**
 * Created by twe on 9/1/16.
 */
import React from 'react'
import {connect} from 'react-redux'
var hero = require('../img/hero.png');

let Hero = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '372px',
                backgroundImage: 'url(' + hero + ')',
                backgroundSize: '100% 100%'

            }}>
        </div>
    );
};

Hero = connect()(Hero);
export default Hero;
