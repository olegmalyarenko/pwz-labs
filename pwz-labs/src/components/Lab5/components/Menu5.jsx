import { Menu } from 'antd';
const Menu5 = () => (
    <Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#intro5'>Тема, мета, місце розташування лаби №5</a></Menu.Item>
        <Menu.Item key="2"><a href='#project5'>Проект</a></Menu.Item>
        <Menu.Item key="3"><a href='#task51'>Завдання 1: Компоненти jQuery UI</a></Menu.Item>
        <Menu.Item key="4"><a href='#task52'>Завдання 2: Робота з зображеннями та відео</a></Menu.Item>
        <Menu.Item key="7"><a href='#task53'>Завдання 3: Додавання іконок соцмереж</a></Menu.Item>
        <Menu.Item key="7"><a href='#task54'>Завдання 4: Інформери</a></Menu.Item>
        <Menu.Item key="8"><a href='#results5'>Висновки</a></Menu.Item>
  </Menu>
);

export default Menu5;