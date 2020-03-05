import * as React from "react";

interface Props { compiler: string; framework: string; }
interface State { almonds: string[] }

export class Hello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            almonds: []
        }
    }

    componentDidMount() {
        fetch("/api/almonds")
        .then(response => response.json())
        .then(almonds => this.setState({ almonds }))
    }

    render() {
        return <>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            Almond flavours:
            <ul>
                {this.state.almonds.map(almond => {
                    return <li key={almond}>{almond}</li>
                })}
            </ul>
        </>
    }
}