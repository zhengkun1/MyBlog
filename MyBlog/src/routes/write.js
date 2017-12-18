import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import styles from '../routes/write.less';
// import default from 'antd/lib/input';

export default class Write extends PureComponent {
  render() {
    const layout = (
      <div>
        <img className={styles.img} alt="图片加载失败" src="http://isujin.com/wp-content/uploads/2014/10/wallhaven-40800.jpg" />
        <Row>
          <Col span={12} offset={6}>
          hhh
          </Col>
        </Row>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
