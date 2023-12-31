import { BookOutlined, CameraOutlined } from "@ant-design/icons";
import { Layout, Menu, type MenuProps } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate, type Path } from "../router";
import { MENU_WIDTH, NAV_HEIGHT } from "../styles/theme";

const { Header, Content, Sider } = Layout;

const menuItems: MenuProps["items"] = [
  {
    key: "/albums",
    icon: <BookOutlined />,
    label: "Albums",
  },
  {
    key: "/photos",
    icon: <CameraOutlined />,
    label: "Photos",
  },
];

export const RootLayout = () => {
  const { pathname } = useLocation();
  const to = useNavigate();
  return (
    <Layout>
      <Header className="sticky top-0 z-10 w-full flex justify-start items-stretch">
        <button
          className="flex justify-center items-center gap-3"
          onClick={() => {
            to("/");
          }}
        >
          <img src={import.meta.env.VITE_FAVICON} alt="logo" />
          <h1 className="font-bold text-lg">{import.meta.env.VITE_TITLE}</h1>
        </button>
      </Header>
      <Layout>
        <Sider
          className="h-screen fixed top-0 left-0 bottom-0"
          width={MENU_WIDTH}
          style={{ paddingTop: NAV_HEIGHT }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[pathname]}
            items={menuItems}
            onClick={({ key }) => {
              to(key as Path);
            }}
          />
        </Sider>
        <Layout style={{ marginLeft: MENU_WIDTH, marginTop: NAV_HEIGHT * -1 }}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
