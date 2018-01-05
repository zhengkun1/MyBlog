import React, { PureComponent } from 'react';
// import { Card, Row, Col } from 'antd';
import styles from './self.less';
// import default from '../layout/Basiclayout';
class Self extends PureComponent {
  render() {
    const layout = (
      <div className={styles.div}>
        <img alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2014/10/162a05656bb12d2abf1bc65b6838977e.jpg" className={styles.img} />
        <div className={styles.word}>SELF</div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}

export default Self;
