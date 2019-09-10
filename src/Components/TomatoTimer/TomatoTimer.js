import React from 'react';

export default class TomatoTimer extends React.Component{
    increase = 2; //шаг для увеличения закрывающего блока
    decrease = 8; //шаг для уменьшения закрывающего блока
    length = 800; //длина закрывающего блока
    tomatoTime = 100; //шаг для обновления таймера
    tomatoEnd = 80000; //время действия таймера
    constructor(props) {
        super(props);
        this.state = {
            timeBeforeStop: '0',
            toWork: true
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
        this.state.toWork
        ?
        this.setState((prevState) => {
            return(
                (this.state.timeBeforeStop < this.length)
                ?
                {
                    timeBeforeStop: +prevState.timeBeforeStop + this.increase
                }
                :
                { toWork: false }
            )
        })
        :
        this.setState((prevState) => {
            return(
                (this.state.timeBeforeStop > 0)
                ?
                {
                    timeBeforeStop: +prevState.timeBeforeStop - this.decrease
                }
                :
                { toWork: true }
            )
        })
    }

    render() {
        return(
            <div>
                {this.props.activeTimer
                    &&
                    <div style={{
                        width: this.state.timeBeforeStop,
                        backgroundColor: '#FFDAB9',
                        height: '100px',
                        position: 'absolute',
                        opacity: '0.7',
                        borderRadius: '20px',
                        marginTop: '-100px',
                        marginLeft:'15px',
                        zIndex: '1'
                    }}>
                    </div>
                }
            </div>
        );
    }


}