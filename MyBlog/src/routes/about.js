import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './about.less';
// import default from 'antd/lib/input';

export default class Write extends PureComponent {
  render() {
    const layout = (
      <div className={styles.div}>
        <Icon type="github" />
        <a href="https://github.com/zhengkun1">github</a>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
