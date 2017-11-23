import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchListings } from '../../actions/iproperty/srpAction';
import Loading from '../../common/components/Loading';

class Srp extends React.Component {

    componentDidMount() {
        const { fetchListings } = this.props;
        fetchListings(window.location.search.replace('?uri=', ''));
    }

    render() {
        const { items = [], inProgress } = this.props;
        return (
            <div className="page iproperty-srp">
                {items.map(({ imgSrc, location }, index) =>
                    <div key={index} className="listing">
                        <div className="img-wrapper">
                            <img src={imgSrc} />
                        </div>
                        <div className="location">{location}</div>
                    </div>
                )}
                <Loading inProgress={inProgress} />
            </div>
        );
    }
}

const mapStateToProps = ({ iproperty }) => ({ ...iproperty.srp });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchListings }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Srp);
