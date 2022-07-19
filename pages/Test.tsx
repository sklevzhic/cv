import { Component } from "react";

class Test extends Component {
    constructor(props: any) {
        super(props);
        console.log("constructor")
        this.state = {
            count: 0
        }
    }
    handleCount = () => {
        // @ts-ignore
        let v = this.state.count + 1
        this.setState({count: v})
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }


    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("will unmount")
    }

    render() {

        console.log("render")

        // @ts-ignore
        return <h1>  {this.state.count}   <button onClick={this.handleCount}>111</button>  </h1>;
    }


}

export default Test
