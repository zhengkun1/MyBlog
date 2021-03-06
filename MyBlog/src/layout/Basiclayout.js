/**
 * zhengkun 2017-12-12
 */

import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { ContainerQuery } from 'react-container-query';
import { Link, Route, Switch } from 'dva/router';
import styles from '../layout/Basiclayout.less';
import essay from '../routes/essay';
import contact from '../routes/contact';

const { Header, Footer, Content } = Layout;

class Basiclayout extends React.PureComponent {
  state = {
    collapsed: false,
  };
  handleClick = (e) => {
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
    const query = {
      'screen-xs': {
        maxWidth: 575,
      },
      'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
      },
      'screen-md': {
        minWidth: 768,
        maxWidth: 991,
      },
      'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
      },
      'screen-xl': {
        minWidth: '100%',
      },
    };
    const layout = (
      <div className={styles.div}>
        <Layout>
          <Content style={{ minHeight: 'calc(100vh - 100px)' }} className={styles.content}>
            <Switch>
              <Route path="/first/contact" component={contact} />
              <Route path="/first/essay" component={essay} />
            </Switch>
          </Content>
          <Header
            className={styles.header}
          >
            <Row>
              <Col span={4} className={styles.home}>
                <Link to="/" style={{ color: 'white' }}>10K</Link>
              </Col>
              <Col span={3} offset={17}>
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  className={styles.menu}
                >
                  <Menu.Item key="2"><Link to="/first/essay" style={{ fontSize: '30px' }}>ESSAY</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/first/contact" style={{ fontSize: '30px' }}>CONTACT</Link></Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          <Footer className={styles.footer}>
            <div style={{ height: '20px' }}>
              <p>@2017-12-14 Made By 10K</p>
            </div>
          </Footer>
        </Layout>
      </div>
    );
    return (
      <ContainerQuery query={query}>
        {
          () => <div>{layout}</div>
        }
      </ContainerQuery>
    );
  }
}

export default Basiclayout;
