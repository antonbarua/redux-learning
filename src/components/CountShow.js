import React from 'react';

class CountShow extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;
        this.store.subscribe(this.updateCount.bind(this));

        this.state = {
            count: 0
        };
    }

    updateCount() {
        this.setState({
            count: this.store.getState().count
        });
    }

    render() {
        return <div>{this.state.count}</div>
    }
}

export default CountShow;