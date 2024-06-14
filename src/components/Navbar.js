import React from "react";
import { Layout, Menu, Input, Button } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Navbar.css";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header className="navbar">
        <div className="logo">
          <h1>Instant Insights</h1>
        </div>
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
        <div className="search-bar">
          <Input placeholder="Search news..." prefix={<SearchOutlined />} />
          <Button type="primary" icon={<SearchOutlined />} />
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
