import { Menu } from 'antd';
const Menu3 = () => (
    <Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#intro3'>Тема, мета, місце розташування лаби №3</a></Menu.Item>
        <Menu.ItemGroup key="g2" title="Завдання 1">
        <Menu.Item key="3"><a href='#project3'>Проект</a></Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g4" title="Завдання 2">
        <Menu.Item key="5"><a href='#task31'>Розмітка за допомогою таблиці</a></Menu.Item>
        <Menu.Item key="6"><a href='#task32'>Розмітка за допомогою плаваючих блоків</a></Menu.Item>
        </Menu.ItemGroup>
        <Menu.Item key="7"><a href='#task33'>Завдання 3</a></Menu.Item>
        <Menu.Item key="8"><a href='#results3'>Висновки</a></Menu.Item>
  </Menu>
);

export default Menu3;