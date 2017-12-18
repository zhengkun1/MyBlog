import React, { PureComponent } from 'react';
import styles from './homepage.less';

export default class A extends PureComponent {
  render() {
    const layout = (
      <div>
        <img className={styles.img} src="http://isujin.com/wp-content/uploads/2017/09/wallhaven-443177-1.jpg" alt="" />
        <p className={styles.p}>爱生活,爱旅行</p>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
