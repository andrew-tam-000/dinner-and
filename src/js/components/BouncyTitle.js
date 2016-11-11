import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BouncyTitle extends Component {
    constructor(props) {

        super(props);

        this.state = {
            piecesToShow: []
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
                <div key={this.props.title} className='letter-group__item'>
                    {
                        this.getPieces(this.props.title).map( (piece, idx)  => {

                            let classes = ['letter'];

                            if ( this.state.piecesToShow[idx] ) classes.push('letter--enter');

                            return (
                                <span className={classes.join(' ')}  key={''+idx+piece+this.props.title}>{piece}</span>
                            );
                        })
                    }
                </div>
            </ReactCSSTransitionGroup>
        );
    }


    getPieces(phrase) {
        let splitChar = (this.props.words) ? ' ' : '';
        return phrase.split(splitChar);
    }

    animate(phrase) {
        return new Promise( (resolve, reject) => {
            let offset = (this.props.single) ? 0 : this.props.speed;
            // Loop over each letter and set an offset
            this.getPieces(phrase).forEach( (letter, idx) => {
                window.setTimeout( () => {
                    this.setState({
                        piecesToShow: this.state.piecesToShow.concat(true)
                    }, () => {
                        if ( idx === this.getPieces(phrase).length - 1 ) {
                            resolve();
                        }
                    })
                }, offset*idx);
            });
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            piecesToShow: []
        });

        window.setTimeout( () => {
            this.animate(this.props.title);
        }, 50)
    }

    componentDidMount() {
        window.setTimeout( () => {
            this.animate(this.props.title);
        }, 50)
    }

}

BouncyTitle.defaultProps = {
    speed: 200
}

export default BouncyTitle;
