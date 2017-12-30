import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './firstpagelayout.less';

class Firstpagelayout extends PureComponent {
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
              <Link to="/first/self" className={styles.self}>self</Link>
            </Col>
            <Col style={{ padding: '0px' }} xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" alt="图片无法加载" />
              <Link to="/first/essay" className={styles.essay}>essay</Link>
            </Col>
            <Col style={{ padding: '0px' }} xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" alt="图片无法加载" />
              <Link to="/first/contact" className={styles.contact}>con  tact</Link>
            </Col>
          </Row>
          <p className={styles.p}>WELCOME 10K BLOG</p>
        </div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}

export default Firstpagelayout;
