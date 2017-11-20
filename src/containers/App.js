import React from 'react';

export default class App extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className="app">
                <div className="nav">
                    <p className="title">Front End Studio</p>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        );
    }
}

