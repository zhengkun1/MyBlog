import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './firstpagelayout.less';

class Firstpagelayout extends PureComponent {
  render() {
    const layout = (
      <div style={{ background: 'black' }}>
        <Row style={{ marginLeft: '0px', marginRight: '0px' }}>
          <Col span={24}>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2017/09/wallhaven-443177-1.jpg" alt="" />
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <p className={styles.introduce} style={{ color: 'white' }}>高中的时候，我曾经交往过一个女朋友。有一天我半夜从梦中醒来
              ，突然无比的想她。那时候手机还没有像现在这样普及，我的思念自然无从寄托。在床上瞪了一会儿眼睛以后，
              我跳起来麻利地穿好衣服，出门去找她了。尽管第二天上早自习我就能够见到她。出了门才发现外面下着大雪，地上已经有着厚厚的积雪，天空中雪花还如筛灰一般落下。
              但心怀着爱情的炽热，我丝毫没觉得冷。北方下雪的冬夜格外寂静，此时已经是凌晨两点以后，街上没有一个行人，
              只有我自己踏在积雪上的声音格外清晰。
              </p>
            </Col>
          </Col>
          <Col span={24}>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <p className={styles.introduce}>
                高中时期，每个人都身处熔炉之中，有的被锻造，有的被熔掉。我就厉害了，我直接被蒸发掉。虽身处重点班，
                却长年雄踞后排，颇有大隐隐于市的侠士风骨。一次月考
                ，更是一战成名，数学三十八，一举夺魁，创下班上数学历史最“好”成绩，
                数学老师更是因此肾上腺素激发，数学卷纸搓成团，
                十余米开外，一枪干掉我这状元，深谙小李飞刀不传之秘。一人得道，鸡犬升天，连带着我后面的垃圾桶，
                也得了个外号“宝塔镇河妖”。至于谁是宝塔，谁是河妖，我却不甚了了。
                 许是老班有感于我功力深厚，力拔山兮，非他一人所敌。竟打破了江湖铁律－以成绩排座位，而改为安排学生坐座位.
              </p>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://pic1.win4000.com/wallpaper/2/58f57e0710d15.jpg" alt="图片无法加载" />
              <Link to="/first/self" className={styles.self}>self</Link>
            </Col>
          </Col>
          <Col span={24}>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2014/12/wallhaven-74859.jpg" alt="图片无法加载" />
              <Link to="/first/essay" className={styles.essay}>essay</Link>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <p className={styles.introduce}>文章</p>
            </Col>
          </Col>
          <Col span={24}>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <p className={styles.introduce}>联系</p>
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}>
              <img className={styles.cover} src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-37578.jpg" alt="图片无法加载" />
              <Link to="/first/contact" className={styles.contact}>contact</Link>
            </Col>
          </Col>
        </Row>
        <div className={styles.footer}>@2017-12-14 Made By 10K</div>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}

export default Firstpagelayout;
