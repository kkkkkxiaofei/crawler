import React from 'react';

class App extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div className="app">
                <div className="nav">
                    <p className="title">let pa</p>
                </div>
                <div className="main">
                    {children}
                </div>
            </div>
        );
    }
}

export default App;
