import React, { PureComponent } from 'react';
import { Link, Switch } from 'react-router-dom';
import styles from './firstpagelayout.less';

export default class Firstpagelayout extends PureComponent {
  render() {
    const layout = (
      <div>
        <div>
          <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2017/09/wallhaven-443177-1.jpg" alt="" />
          <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2014/10/162a05656bb12d2abf1bc65b6838977e.jpg" alt="图片无法加载" />
          <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" alt="图片无法加载" />
          <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" alt="图片无法加载" />
          <Switch>
            <Link className={styles.self} to="/first/self">self</Link>
          </Switch>
          <Switch>
            <Link className={styles.essay} to="/first/essay">essay</Link>
          </Switch>
          <Switch>
            <Link className={styles.contact} to="/first/contact">contact</Link>
          </Switch>
          <p className={styles.p}>WELCOME 10K BLOG</p>
        </div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
