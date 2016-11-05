import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BouncyTitle extends Component {
    constructor(props) {

        super(props);

        this.state = {
            lettersToShow: []
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName={{
                    enter: 'letter-group__item--enter',
                    enterActive: 'letter-group__item--enter-active',
                    leave: 'letter-group__item--leave',
                    leaveActive: 'letter-group__item--leave-active',
                }}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                className='letter-group'
                component='div'
            >
                    <ReactCSSTransitionGroup
                        transitionName={{
                            enter: 'letter--enter',
                            enterActive: 'letter--enter-active',
                            leave: 'letter--leave',
                            leaveActive: 'letter--leave-active',
                        }}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                        className='letter-group__item'
                        key={this.props.title}
                        component='div'
                    >
                        { this.state.lettersToShow.map( (letter, idx)  => <span className='letter'  key={''+idx+letter+this.props.title}>{letter}</span>) }
                    </ReactCSSTransitionGroup>
            </ReactCSSTransitionGroup>
        );
    }


    animate(letters) {

        return new Promise( (resolve, reject) => {

            let offset = (this.props.single) ? 0 : this.props.speed;
            let splitChar = (this.props.words) ? ' ' : '';

            // Loop over each letter and set an offset
            letters.split(splitChar).forEach( (letter, idx) => {
                window.setTimeout( () => {
                    this.setState({
                        lettersToShow: this.state.lettersToShow.concat(letter)
                    }, () => {
                        if ( idx === letters.length - 1 ) {
                            resolve();
                        }
                    })
                }, offset*idx);
            });

        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            lettersToShow: []
        });
        this.animate(newProps.title);
    }

    componentDidMount() {
        this.animate(this.props.title);
    }

}

BouncyTitle.defaultProps = {
    speed: 200
}

export default BouncyTitle;
