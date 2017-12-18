import React, { PureComponent } from 'react';
import { Card } from 'antd';
import styles from './b.less';
// import default from '../layout/Basiclayout';
const { Meta } = Card;
export default class B extends PureComponent {
  render() {
    const layout = (
      <div className={styles.div}>
        <img alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2016/10/wallhaven-265276.jpg" className={styles.img} />
        <p className={styles.p}>
          <p>COME</p>
          <p>FROM</p>
          <p>CHINA!</p>
        </p>
        <div className={styles.content}>
          <Card
            className={styles.card}
            style={{ width: 240 }}
            cover={<img alt="图片无法加载" src="http://img5.duitang.com/uploads/item/201411/02/20141102090411_kVLR3.jpeg" style={{ height: 260 }} />}
          >
            <Meta
              className={styles.meta}
              title="一个内向的人"
            />
          </Card>
          <p style={{ margin: 30 }}>
            <p style={{ fontSize: 40 }}>
              一名来自大洋彼岸的大学生
            </p>
            <p style={{ fontSize: 20 }}>
              寻一处风景优美的地方，建一个适合居住的民宿。
            </p>
          </p>
        </div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
