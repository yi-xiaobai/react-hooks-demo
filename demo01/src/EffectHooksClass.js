import React, { Component } from 'react';

class EffectHookClass extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        count: 0
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    handleClickButton = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>EffectHookClass组件</h2>
                <hr />
                <div>you clicked {this.state.count} times</div>
                <br/>
                <div>
                    <button onClick={this.handleClickButton}>增加次数</button>
                </div>
            </div >
        );
    }
}

export default EffectHookClass;