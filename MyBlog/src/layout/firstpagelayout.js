import React from 'react';
import { Link } from 'dva/router';
import styles from './firstpagelayout.less';


class Firstpage extends React.Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.word}>
          <p>欢迎来到 10K 的博客！</p>
        </div>
        <div className={styles.link}>
          <div className={styles.selfarea}>
            <Link className={styles.self} to="/first/essay">ESSAY</Link>
          </div>
          <div className={styles.selfarea}>
            <Link className={styles.contact} to="/first/contact">CONTACT</Link>
          </div>
        </div>
        <p className={styles.p}>@2017 Made By 10K</p>
      </div>
    );
  }
}
export default Firstpage;
