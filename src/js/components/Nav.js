import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import Promise from 'bluebird';
import * as menuActions from '../redux/actions/menu';

class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    navItems() {
        return [
            'Home'
            , 'About'
            , 'Pictures'
        ];
    }

    render() {
        return (
            <div className={this.getClasses()}>
                <ul className='nav__items'>
                { this.navItems().map( (item, idx) => {

                    let classes = ['nav__item'];

                    if ( this.state.items[idx] ) classes.push('nav__item--enter');

                    return <li
                        onClick={
                            () => this.props.dispatch(menuActions.changeRoute(item.toLowerCase().split(' ').join('-')))
                        }
                        className={classes.join(' ')}
                    >
                        {item}
                    </li>;
                }) }
                </ul>
            </div>
        )
    }

    getClasses() {
        let classes = ['nav'];

        if ( this.props.showMenu ) classes.push('nav--open');

        return classes.join(' ');
    }

    componentWillReceiveProps(newProps) {
        if ( !newProps.showMenu ) {
            this.setState({
                items: []
            });
        }
        else {
            this.showNav();
        }
    }

    showNav() {
        return new Promise( (resolve, reject) => {

            let offset = 75;

            // Loop over each letter and set an offset
            this.navItems().forEach( (item , idx) => {
                window.setTimeout( () => {
                    this.setState({
                        items: this.state.items.concat(true)
                    }, () => {
                        if ( idx === this.navItems().length - 1 ) {
                            resolve();
                        }
                    })
                }, offset*idx);
            });

        });
    }


}

export default connect(
    state => ({
        showMenu: state.showMenu
    })
)(Nav);
