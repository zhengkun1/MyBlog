import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
// import default from 'antd/lib/card/Grid';
import { Link, Route, Switch } from 'dva/router';
import styles from '../layout/Basiclayout.less';
import A from '../routes/homepage';
import B from '../routes/self';
import Write from '../routes/write';
import about from '../routes/about';
// import NotFound from '../routes/NotFound';


const { Header, Footer, Content } = Layout;
class Basiclayout extends React.PureComponent {
  state = {
    collapsed: false,
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const layout = (
      <div className={styles.div}>
        <Layout>
          <Content style={{ minHeight: 'calc(100vh - 100px)' }} className={styles.content}>
            <Switch>
              <Route path="/home" component={A} />
              <Route path="/about" component={about} />
              <Route path="/write" component={Write} />
              <Route path="/" component={B} />
            </Switch>
          </Content>
          <Header
            className={styles.header}
          >
            <Row>
              <Col span={4} className={styles.K}>10K</Col>
              <Col span={8} offset={12}>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  className={styles.menu}
                >
                  <Menu.Item key="0"><Link to="home" style={{ fontSize: '30px' }}>HOME</Link></Menu.Item>
                  <Menu.Item key="1"><Link to="/" style={{ fontSize: '30px' }}>SELF</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/write" style={{ fontSize: '30px' }}>ESSAY</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="about" style={{ fontSize: '30px' }}>ABOUT</Link></Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          <Footer className={styles.footer}>
            <div>
              <p>@2017-12-14 Made By 10K</p>
              <Link to="/self" style={{ marginRight: '10px', color: 'black' }}>SELF</Link>
              <Link to="/write" style={{ marginRight: '10px', color: 'black' }}>ESSAY</Link>
              <Link to="/about" style={{ color: 'black' }}>ABOUT</Link>
            </div>
          </Footer>
        </Layout>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default Basiclayout;
