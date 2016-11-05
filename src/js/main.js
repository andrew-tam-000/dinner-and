import $ from 'jquery';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import {Provider} from 'react-redux';
import store from './redux/store';
import classnames from 'classnames';
import {connect} from 'react-redux';

import Nav from './components/Nav';
import Hamburger from './components/Hamburger';
import Homepage from './components/Homepage';
import About from './components/About';
import Pictures from './components/Pictures';

function dataJsSelector(selector) {
    return `[data-js=${selector}]`
}

class Root extends Component {
    render() {
        return (
            <div className={
                classnames(
                    'root'
                    , `root--${this.props.route}`
                )
            }>
                <Hamburger/>
                <Nav/>
                <Homepage/>
                <About/>
                <Pictures/>
                <img className='image' src='./profile.png'/>
            </div>
        );
    }
}

Root = connect(
    ({ route }) => ({ route })
)(Root);

ReactDOM.render(
        <Provider store={store}>
            <Root/>
        </Provider>
    , $(dataJsSelector('root')).get(0)
);

