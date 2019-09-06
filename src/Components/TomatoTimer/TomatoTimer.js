import React from 'react';

export default class TomatoTimer extends React.Component{
    tomatoTime = 100;
    tomatoEnd = 30000;
    constructor(props) {
        super(props);
        this.state = {
            timeBeforeStop: '0'
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.tomatoTimer, this.tomatoTime);
        setTimeout(() => { clearInterval(this.timer) }, this.tomatoEnd);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tomatoTimer = () => {
        this.setState(function(prevState) {
            return(
                (this.state.timeBeforeStop < 700)
                &&
                {
                    timeBeforeStop: +prevState.timeBeforeStop + 1
                }
            )
        });
    }

    render() {
        return(


                        <div style={{
                            width: this.state.timeBeforeStop,
                            backgroundColor: '#FFDAB9',
                            height: '100px',
                            position: 'absolute',
                            opacity: '0.7',
                            borderRadius: '20px',
                            marginTop: '-100px',
                            zIndex: '1'
                        }}>
                        </div>


        );
    }


}