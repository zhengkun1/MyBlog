import React, { PureComponent } from 'react';
// import { Icon } from 'antd';
import styles from './contact.less';
// import default from 'antd/lib/input';

export default class About extends PureComponent {
  render() {
    const layout = (
      <div className={styles.div}>
        <img className={styles.img} alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" />
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
