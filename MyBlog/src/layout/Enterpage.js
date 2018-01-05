import React from 'react';
import { Link } from 'dva/router';
import styles from './Enterpage.less';

class Enterpage extends React.Component {
  render() {
    return (
      <div>
        <img className={styles.img} alt="无法加载" src="http://pic1.win4000.com/wallpaper/2/58f57e0710d15.jpg" />
        <Link to="first/self" className={styles.enter}>Enter to my blog!</Link>
      </div>
    );
  }
}

export default Enterpage;
