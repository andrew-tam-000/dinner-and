import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

class Pictures extends Component {

    render() {
        return (
            <div className={
                classnames(
                    'pictures'
                    , 'slide'
                    , 'clear'
                    , {'slide--right': this.props.route !== 'pictures'}
                )
            }>
                <div className='pictures__container'>
                    <img className='pictures__image'  src='./profile.png'/>
                </div>
                <div className='pictures__captions'>
                    Captoins go here
                </div>
            </div>
        );
    }

}


export default connect(
    state => ({
        route: state.route
    })
)(Pictures);
