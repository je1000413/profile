import React from 'react';
import { Layout, Space } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Header>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Space size={12}>
                    <HeartOutlined style={{ fontSize: '24px', color: '#fff' }} />
                    <span style={{ fontSize: '24px', color: '#fff' }}>천지은의 Profile</span>
                </Space>
            </div>
        </Header>
    );
};

export default HeaderComponent;