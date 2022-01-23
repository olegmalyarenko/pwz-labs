import { Menu } from 'antd';
const Menu4 = () => (
    <Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#intro4'>Тема, мета, місце розташування лаби №4</a></Menu.Item>
        <Menu.Item key="2"><a href='#project4'>Проект</a></Menu.Item>
        <Menu.Item key="3"><a href='#task41'>Завдання 1</a></Menu.Item>
        <Menu.Item key="4"><a href='#task42'>Завдання 2</a></Menu.Item>
        <Menu.Item key="7"><a href='#task43'>Завдання 3</a></Menu.Item>
        <Menu.Item key="8"><a href='#results4'>Висновки</a></Menu.Item>
  </Menu>
);

export default Menu4;