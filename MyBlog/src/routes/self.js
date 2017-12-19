import React, { PureComponent } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './self.less';
// import default from '../layout/Basiclayout';
const { Meta } = Card;
export default class B extends PureComponent {
  render() {
    const layout = (
      <div className={styles.div}>
        <img alt="图片无法加载" src="http://isujin.com/wp-content/uploads/2014/10/162a05656bb12d2abf1bc65b6838977e.jpg" className={styles.img} />
        <p className={styles.p}>
          <p>COME</p>
          <p>FROM</p>
          <p>CHINA!</p>
        </p>
        <Row style={{ margin: '30px' }}>
          <Col span={8}>
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
          </Col>
          <Col span={16}>
            <p className={styles.content}>
              <p style={{ fontSize: 40 }}>
                一重人格柒个我
              </p>
              <p style={{ fontSize: 20, textIdent: '2em' }}>
                这是一个博客，嗯对，没错，不知道博主心里在想些什么，居然做成了这个样子，审美有问题。
                我的天，服了。博主，一个简单的自我介绍，一个编程初学者，做点东西慢的一逼，也很迷，蜜汁自信，感觉可以做出无敌的东西，
                结果，哼哼。不知道为什么，心里想的很好的界面做成了这样子。嗯，我已经很开心了。
              </p>
            </p>
          </Col>
        </Row>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
