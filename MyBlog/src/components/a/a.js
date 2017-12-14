import React, { PureComponent } from 'react';
import styles from './a.less';

export default class A extends PureComponent {
  render() {
    const layout = (
      <div>
        <img className={styles.img} src="http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/09/wallhaven-558971.jpg" alt="" />
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
