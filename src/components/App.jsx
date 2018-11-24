import React, { Component } from 'react';
import './App.css';
import vertexShader from './vertexShader.glsl';
import { Route, Switch } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';

import Introduction from './Introduction';
import Basic01 from './Basic/Basic01';

import { Menu, Icon } from 'antd'; 
const SubMenu = Menu.SubMenu;

class App extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
      <HashRouter>
        <div id="three-playground">
          <aside>
            <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Basic</span></span>}>
                <Menu.Item key="1"><Link to="/basic/1">1</Link></Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </aside>
          <main>
            <Switch>
              <Route path='/index' component={Introduction} />
              <Route exact path='/' component={Introduction} />
              <Route path='/basic/1' component={Basic01} />
            </Switch>
          </main>
        </div>
      </HashRouter>
   );
  }
}

export default App;
