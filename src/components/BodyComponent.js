import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;
const BodyComponent = () => {
    const layouts = [
        {
            image: 'image1.jpg',
            title: 'Title 1',
            content: 'Content 1',
        },
        {
            image: 'image2.jpg',
            title: 'Title 2',
            content: 'Content 2',
        },
        {
            image: 'image3.jpg',
            title: 'Title 3',
            content: 'Content 3',
        },
        // 필요한 레이아웃들을 추가해주세요.
    ];

    return (
        <Content style={{ padding: '50px' }}>
            {layouts.map((layout, index) => (
                <Row justify="center" key={index}>
                    <Col span={8} style={{ background: '#f0f0f0', padding: '24px', margin: '16px', borderRadius: '4px' }}>
                        <Row align="middle">
                            <Col span={12}>
                                <img src={layout.image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                            </Col>
                            <Col span={12} style={{ paddingLeft: '24px' }}>
                                <div>
                                    <h3>{layout.title}</h3>
                                    <p>{layout.content}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ))}
        </Content>
    );
};
export default BodyComponent;