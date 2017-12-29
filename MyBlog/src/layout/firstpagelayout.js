import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Link, Switch } from 'react-router-dom';
import styles from './firstpagelayout.less';

export default class Firstpagelayout extends PureComponent {
  render() {
    const layout = (
      <div>
        <div>
          <Row gutter={24}>
            <Col style={{ padding: '0px' }} xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2017/09/wallhaven-443177-1.jpg" alt="" />
            </Col>
            <Col style={{ padding: '0px' }} xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2014/10/162a05656bb12d2abf1bc65b6838977e.jpg" alt="图片无法加载" />
            </Col>
            <Col style={{ padding: '0px' }} xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" alt="图片无法加载" />
            </Col>
            <Col style={{ padding: '0px' }} xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" alt="图片无法加载" />
            </Col>
          </Row>
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
