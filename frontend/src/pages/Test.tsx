
// import ProvinceList from "../components/ProvinceList"
// import SearchProvince from "../components/SearchProvince"
import { Layout, Menu } from "antd";
const { Header, Sider, Content, Footer } = Layout;


const Test = () => {
  

  return (
    // <div className="grid grid-cols-2">
    //   <div className="col-span-1 border-solid border-2 p-10"><ProvinceList></ProvinceList></div>
    //   <div className="col-span-1 border-solid border-2 p-10"><SearchProvince></SearchProvince></div>
    // </div>
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="site-layout-background" style={{ padding: 0 }}>
          <h2 style={{ color: 'white' }}>My Application Header</h2>
      </Header>
      <Layout style={{ background: 'red' }}>
        <Sider>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1">Menu Item 1</Menu.Item>
            <Menu.Item key="2">Menu Item 2</Menu.Item>
            <Menu.Item key="3">Menu Item 3</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              Welcome to my application !
            </div>
        </Content>
      </Layout>
      <Footer className="text-center bg-black text-white">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
      {/* <Layout className="w-full h-10 bg-black">
        
      </Layout> */}
    </Layout>
  )
}

export default Test