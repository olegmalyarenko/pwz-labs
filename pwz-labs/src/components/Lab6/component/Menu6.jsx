import { Menu } from 'antd';
const Menu6 = () => (
    <Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#intro6'>Тема, мета, місце розташування лаби №5</a></Menu.Item>
        <Menu.Item key="2"><a href='#project6'>Проект</a></Menu.Item>
        <Menu.Item key="3"><a href='#task61'>Завдання 1: Елементи JQueryUI</a></Menu.Item>
        <Menu.Item key="4"><a href='#task62'>Завдання 2: Створення WEB-вузла</a></Menu.Item>
        <Menu.Item key="5"><a href='#task63'>Завдання 3: Завантаження HTML-документи на сервер</a></Menu.Item>
        <Menu.Item key="6"><a href='#task64'>Завдання 4:  Конфигурації WEB-сервера</a></Menu.Item>
        <Menu.Item key="7"><a href='#task65'>Завдання 5:  Визначення кодировки utf-8</a></Menu.Item>
        <Menu.Item key="8"><a href='#task66'>Завдання 6:  Отримання інформації з сервера</a></Menu.Item>
        <Menu.Item key="9"><a href='#results6'>Висновки</a></Menu.Item>
  </Menu>
);

export default Menu6;