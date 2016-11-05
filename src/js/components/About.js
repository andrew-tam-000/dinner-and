import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

class About extends Component {

    render() {
        return (
            <div className={
                classnames(
                    'about'
                    , 'slide'
                    , {'slide--down': this.props.route === 'home'}
                    , {'slide--left': this.props.route === 'pictures'}
                )
            }>
                <div className='about__question  about__question--one'>?</div>
                <div className='about__question  about__question--two'>?</div>
                <div className='about__content'>
                    This is a quick little blurb about us!

                    Hello here again

                    And lastly, hello!
                </div>
            </div>
        );
    }

}


export default connect(
    state => ({
        route: state.route
    })
)(About);
