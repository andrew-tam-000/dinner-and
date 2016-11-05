import React, {Component} from 'react';
import BouncyTitle from './BouncyTitle';
import {connect} from 'react-redux';

class ChangingTitle extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            title: props.topics[0]
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
        console.log(this.props);

        window.setInterval( () => {
            this.setState({
                title: this.props.topics[Math.round(Math.random() * (this.props.topics.length-1))]
            });
        }, 3000)
    }
}


export default connect(
    state => ({
        topics: state.topics
    })
)(ChangingTitle);
