import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';


const PortfolioPage = () => {
    return (
        <Layout>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </Layout>
    );
};

export default PortfolioPage;