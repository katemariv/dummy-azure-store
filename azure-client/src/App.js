import { Layout, Menu } from 'antd';
import { CloudServerOutlined } from '@ant-design/icons';
import './App.css';
import './extraStyle.scss';
import 'antd/dist/antd.css';
import ProductTable from './components/productTable';

function App() {
  const REACT_APP_SERVER_NAME = process.env.REACT_APP_SERVER_NAME || 'No Server specified';

  const UI_PORT = process.env.PORT || "3000";
  console.log("UI Running on Port " + UI_PORT);

  return (
    <div className="App">
      <Layout className="layout">
        <Layout.Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="mail" icon={<CloudServerOutlined />}>
              {REACT_APP_SERVER_NAME}
            </Menu.Item>
          </Menu>
        </Layout.Header>

        <Layout.Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content"><ProductTable/></div>
        </Layout.Content>

        <Layout.Footer style={{ textAlign: 'center' }}>Arquitectura de Redes y Sistemas Empresariales ©2021</Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
