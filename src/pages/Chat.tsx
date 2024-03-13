import React, { useEffect } from 'react';
import { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const {Content, Sider } = Layout;

const messages = [
  {
    role: 'assistant',
    content: 'Hello, how can I help you today?'
  },
  {
    role: 'user',
    content: 'Hello, how can I help you today?'
  },
  {
    role: 'assistant',
    content: 'Hello, how can I help you today?'
  }
]

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `Bot - ${key}`,
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `Setting - ${subKey}`,
          };
        }),
      };
    },
  );

  

export default function Chat() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [current, setCurrent] = React.useState('1');
    
    const onClick = (e: any) => {
      console.log('click ', e);
      setCurrent(e.key);
    };

    const [openKeys, setOpenKeys] = useState(['sub1']);
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub1'];
    const rootSubmenuKeys2 = items2?.map((item) => item?.key);



    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
      console.log('onOpenChange', keys)
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (latestOpenKey && rootSubmenuKeys2?.indexOf(latestOpenKey!) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };


    return (
        <Layout>
            <Sider onClick={(e) => onClick(e)} width={200} style={{ background: colorBgContainer }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
              />
            </Sider>
          <Layout style={{ padding: '0 24px 24px', height: '97%' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <ul>
                {messages.map((message, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: message.role === 'assistant' ? 'flex-start' : 'flex-end' }}>
                    <div style={{ padding: 8, borderRadius: 8, background: message.role === 'assistant' ? 'white' : 'lightblue', margin: 8 }}>
                      {message.content}
                    </div>
                  </li>
                ))}
              </ul>
              <form className='chat-input__form glass'>
                <input type="text" />
                <button>Send</button>
              </form>
\            </Content>
          </Layout>
        </Layout>
    );
}