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
              style={{ maxWidth: 240 }}
              cover={<img alt="图片无法加载" src="http://img5.duitang.com/uploads/item/201411/02/20141102090411_kVLR3.jpeg" style={{ height: 260, width: 240 }} />}
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
              <p style={{ fontSize: 20, textIdent: '2em' }}>
                我和他总是在学校的食堂里相遇。每次遇见他，我总是拉着自己的饭友跑到一个偏僻的角落里就餐。
                我不想让他看到我吃饭时的样子。可他还是看到了，而且还看得特别认真。
                余生，我们一起吃饭
                放月假后，我和小伙伴在校门前的小餐馆门外吃米线。米线刚上来，我一歪头，便看到了他。他穿着一身黑色的运动服，在公交站牌处等车。我赶紧埋下头，
                噘着小嘴用力地吹着筷子夹起来的米线。可事总与愿违，我感觉这是我这辈子吃过的最烫的米线了。
                我平时吃饭要比常人慢些，这次我的小伙伴等得有点儿小着急。我拿纸巾擦了擦鼻尖上的汗珠，小心地对小伙伴说我吃完了。
                公交站牌离小餐馆不远，我眼睛的余光似乎时刻能感受到他的注视。好尴尬啊！世界这么大，我想捕捉他的身影时，总是找不到他的脸。可我不想被他撞见时，偏偏又找不到理由逃脱。
                转眼间，相识已十年。真的好奇怪，我俩竟然都不记得第一次一起吃饭具体吃了什么。但他说他依稀记得他第一次见我吃饭时的情景，他说那是他第一次见吃碗米线能吃那么久的人。
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
