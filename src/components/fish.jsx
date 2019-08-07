import React, { Component } from 'react';

class Fish extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        e.preventDefault();
        this.setState({
            num: this.state.num + 1
        });
    }

    static add(x, y) {
        return (x + y);
    }

    render() {
        return (
            <div>
                <p>This is a test <br />
                    a fishy test
                </p>
                <form>
                    <input value="submit" type="submit" onClick={this.onClick}></input>
                </form>
                <p>
                    {this.state.num}
                </p>
            </div>
        );
    }
}
export default Fish;