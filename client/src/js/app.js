import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: undefined
        }
    }

    componentDidMount() {
        const {messageRepository} = this.props;

        messageRepository.getMessage().then(message => {
            this.setState({message})
        });
    }

    render() {
        return <h1>{this.state.message}</h1>
    }
}

export default App;