import React, { PureComponent } from 'react';
import styles from './b.less';
// import default from '../layout/Basiclayout';

export default class B extends PureComponent {
  render() {
    const layout = (
      <div className={styles.div}>
        <p className={styles.p}>你好，欢迎来到My Blog！</p>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
