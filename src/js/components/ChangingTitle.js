import React, {Component} from 'react';
import BouncyTitle from './BouncyTitle';
import {connect} from 'react-redux';

class ChangingTitle extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            title: props.topics[0]
            , prevIndex: 0
        }
    }

    render() {
        return (
            <BouncyTitle
                title={this.state.title}
            />
        )
    }

    componentDidMount() {
        window.setInterval( () => {
            let newIndex = this.state.prevIndex;

            while( newIndex === this.state.prevIndex ) {
                newIndex = Math.round(Math.random());
            }

            this.setState({
                title: this.props.topics[newIndex]
                , prevIndex: newIndex
            });
        }, 3000)
    }
}


export default connect(
    state => ({
        topics: state.topics
    })
)(ChangingTitle);
