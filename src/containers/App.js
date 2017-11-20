import React from 'react';
import {Link}  from 'react-router';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArticle} from '../actions/article';

const links = [
    {
        path: '/ecmascript',
        title: 'ECMAScript'
    },
    {
        path: '/css',
        title: 'HTML/CSS'
    },
    {
        path: '/deploy',
        title: 'Deploy'
    },
    {
        path: '/others',
        title: 'Others'
    },
    {
        path: '/thinking',
        title: 'Thinking'
    }
];

class App extends React.Component {
    componentDidMount() {
        this.props.actions.fetchArticle();
    }
    render() {
        const {children, location: {pathname}} = this.props;
        return (
            <div className="message-box">
                大哥，提前祝嫂子生日快乐，哈哈哈哈哈哈哈!
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators({fetchArticle}, dispatch)
    }
);

export default connect(null, mapDispatchToProps)(App);