import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Mask from './Mask'
import Header from '../containers/Header'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <Header />
        <Hero />
        <Mask/>
        {/*<VisibleTodoList />*/}
        {/*<Footer />*/}
    </div>
);

export default App
