import React, { PureComponent } from 'react';
// import default from 'antd/lib/col';

export default class NotFound extends PureComponent {
  render() {
    const layout = (
      <div>
        Page Not Found!
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
