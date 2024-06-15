import React, { useState } from "react";
import { Layout, Menu, Input, Button, Drawer } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header className="navbar">
        <div className="logo">
          <h1>Instant Insights</h1>
        </div>
        <div className="menu-desktop">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className="menu"
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              Categories
            </Menu.Item>
            <Menu.Item key="3" icon={<BellOutlined />}>
              Notifications
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              About
            </Menu.Item>
          </Menu>
        </div>
        <div className="menu-mobile">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
          <Drawer
            title="Instant Insights"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Menu mode="vertical" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<AppstoreOutlined />}>
                Categories
              </Menu.Item>
              <Menu.Item key="3" icon={<BellOutlined />}>
                Notifications
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                About
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
        <div className="search-bar">
          <Input placeholder="Search news..." prefix={<SearchOutlined />} />
          <Button type="primary" icon={<SearchOutlined />} />
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
