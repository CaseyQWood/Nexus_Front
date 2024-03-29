import React from 'react';
import type { MenuProps } from 'antd';
import {Layout, Menu, theme } from 'antd';
import Chat from './pages/Chat';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['Chat', 'Agents', 'Eval'].map((key) => ({
  key,
  label: (<Link to={`/${key}`}  >{key}</Link>),
}));

function App() {

  return (
    <Router>
      <Layout style={{height: 'calc(100vw - 64px)'}}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Chat />} />

          </Routes>
      </Layout>
    </Router>
  );
};

export default App;