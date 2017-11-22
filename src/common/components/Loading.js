import React, { Component } from 'react';
import { Icon } from 'antd';

export default class Loading extends Component {
  render() {
      const { inProgress } = this.props;
      if (inProgress) {
          return (
              <div className="loading">
                  <div className="modal-wrapper">
                      <div className="icon">
                          <Icon className="icon-loading2" type="loading" />
                      </div>
                  </div>
              </div>
          );
      }
      return null;
  }
};