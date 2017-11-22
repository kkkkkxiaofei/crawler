import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListings } from '../actions/iproperty/listingAction';

class App extends React.Component {

    componentDidMount() {
        const { fetchListings } = this.props;
        fetchListings(window.location.search.replace('?uri=', ''));
    }

    render() {
        const { children } = this.props;
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
const mapDispatchToProps = dispatch => bindActionCreators({ fetchListings }, dispatch);

export default connect(null, mapDispatchToProps)(App);
