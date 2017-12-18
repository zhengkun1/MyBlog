import React from 'react';
import { Layout, Menu } from 'antd';
// import default from 'antd/lib/card/Grid';
import { Link, Route, Switch } from 'dva/router';
import styles from '../layout/Basiclayout.less';
// import A from '../routes/homepage';
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
          <Header
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            className={styles.header}
          >
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className={styles.menu}
            >
              {/* <Menu.Item key="1">
                <Link to="/">
                  <span>HOME</span>
                </Link>
              </Menu.Item> */}
              <Menu.Item key="2" className={styles.menuitem}>
                <Link to="self">
                  <span className={styles.span}>SELF</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3" className={styles.menuitem}>
                <Link to="write">
                  <span className={styles.span}>ESSAY</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4" className={styles.menuitem}>
                <Link to="about">
                  <span className={styles.span}>ABOUT</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ minHeight: 'calc(100vh - 100px)' }} className={styles.content}>
            {/* <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
            <Switch>
              <Route path="/about" component={about} />
              <Route path="/write" component={Write} />
              <Route path="/" component={B} />
              {/* <Route path="/" component={A} /> */}
              {/* <Route path="" component={NotFound} /> */}
            </Switch>
          </Content>
          <Footer className={styles.footer}>
            <div>
              @2017-12-14 Made By 10K
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
