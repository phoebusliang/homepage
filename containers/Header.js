import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

// let AddTodo = ({dispatch}) => {
//     let input;
//
//     return (
//         <div>
//             <form onSubmit={e => {
//                 e.preventDefault();
//                 if (!input.value.trim()) {
//                     return
//                 }
//                 dispatch(addTodo(input.value));
//                 input.value = ''
//             }}>
//                 <input ref={node => {
//                     input = node
//                 }}/>
//                 <button type="submit">
//                     Add Todo
//                 </button>
//             </form>
//         </div>
//     )
// };
// AddTodo = connect()(AddTodo);
//
// export default AddTodo
var style = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: '100px',
};

var logoImg = require('../img/logo.png');

var logoStyle = {
    width: '10%',
    height: 'inherit',
    float: 'left',
    // borderLeft: '1px solid grey',
    backgroundImage: 'url(' + logoImg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "70% 100%"
};

var borderStyle = {
    // paddingTop:'30px',
    height: '100px',
    float: 'left',
    width: '70%',
    borderLeft: '1px solid grey',
    textAlign: 'left',
    fontSize: '20px'
};


let Header = () => {
    return (
        <div id="header" style={style}>
            <div id="logo" style={logoStyle}>

            </div>
            <div style={borderStyle}>
                <p style={{textAlign: 'left', color: 'grey', marginTop: '37px'}}>Search</p>
            </div>
            <div style={{
                height: 'inherit',
                width: '100px',
                float: 'left',
                textAlign: 'center',
                borderLeft: '1px solid grey'
            }}>
                <p style={{textAlign: 'center', color: 'grey', marginTop: '37px'}}>HELP</p>
            </div>
            <div style={{
                height: 'inherit',
                width: '100px',
                float: 'left',
                textAlign: 'center',
                borderLeft: '1px solid grey',
            }}>
                <p style={{textAlign: 'center', color: 'grey', marginTop: '37px'}}>LOGIN</p>
            </div>
            <div style={{
                height: 'inherit',
                width: '100px',
                float: 'left',
                textAlign: 'center',
                borderLeft: '1px solid grey',
            }}>
                <p style={{
                    textAlign: 'center',
                    color: 'grey',
                    marginTop: '37px'
                }}>SIGN UP</p>
            </div>
        </div>
    );
};

Header = connect()(Header);
export default Header;
