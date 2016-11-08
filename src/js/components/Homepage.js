import React, {Component} from 'react';
import BouncyTitle from './BouncyTitle';
import ChangingTitle from './ChangingTitle';
import {connect} from 'react-redux';
import classnames from 'classnames';

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            children: [
                <div className='homepage__title'>
                    <BouncyTitle
                        title='DINNER'
                        speed={100}
                    />
                </div>
            ]
        }
    }

    render() {
        return (
            <div className={
                classnames(
                    'homepage'
                    , 'slide'
                    , {'slide--up': this.props.route === 'about'}
                    , {'slide--left': this.props.route === 'pictures'}
                )
            }>
                {this.state.children}
            </div>
        );
    }

    componentDidMount() {

        window.setTimeout(() => {
            this.setState({
                children: this.state.children.concat(
                    <div className='homepage__mini'>
                        <BouncyTitle
                            title='AND'
                            single={true}
                        />
                    </div>
                )
            })
        }, 1200)

        window.setTimeout(() => {
            this.setState({
                children: this.state.children.concat(
                    <div className='homepage__subtitle'>
                        <ChangingTitle/>
                    </div>
                )
            })
        }, 3600 )

        window.setTimeout(() => {
            this.setState({
                children: this.state.children.concat(
                    <div className='homepage__attribution'>
                        <BouncyTitle
                            title='from the Clinton Collection'
                            words={true}
                            speed={150}
                        />
                    </div>
                )
            })
        }, 2400)

    }
}


export default connect(
    state => ({
        route: state.route
    })
)(Homepage);
