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
                柒个我
              </p>
              <p style={{ fontSize: 20 }}>
              不可否认，在现代化的都市生活中，人们能够接触大自然生活的机会少之又少，而刘涛、阚清子等嘉宾，对此更是深有同感，密密麻麻的档期、
              忙忙碌碌的转场，作为艺人，这是他们必须要接受的工作节奏，所以他们尤为期待此次能与大自然亲密接触、
              放慢节奏、用心生活的20天，纷纷表示要“用心去感受生活，聆听内心深处的自己”。
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
