import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

// const contentStyle = { padding: 45};

function MainLayout({ selectedKeys, children, padding = 45}) {
    const contentStyle = useMemo(() => {
        return {padding};
    }, [padding])
    return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider>
            <div className="logo" style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.3)'}} />
            <Menu theme="dark" defaultSelectedKeys={['list']} mode="inline" selectedKeys={selectedKeys}
            items={[
                    {
                        key: 'list',
                        label: <Link to="/list">설문조사 관리</Link>,
                    },
                ]}
            >
            </Menu>
        </Sider>
        <Layout>
            <Header />
            <Content style={contentStyle}>{children}</Content>
        </Layout>
    </Layout>
    )
}

export default MainLayout;