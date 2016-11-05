import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import * as menuActions from '../redux/actions/menu';

class Hamburger extends Component {
    render() {
        return (
            <div className={
                classnames(
                    'hamburger'
                    , {'hamburger--open': this.props.showMenu}
                )
            }
                onClick={() => this.props.dispatch(menuActions.toggleMenu())}
            >
                <div className='hamburger__bar  hamburger__bar--top'/>
                <div className='hamburger__bar  hamburger__bar--middle'/>
                <div className='hamburger__bar  hamburger__bar--bottom'/>
            </div>
        )
    }
}


export default connect(
    ({showMenu}) => ({
        showMenu
    })
)(Hamburger);
