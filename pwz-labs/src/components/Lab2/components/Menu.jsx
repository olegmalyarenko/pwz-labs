import { Menu } from 'antd';
const LabMenuTwo = () => (
    <Menu
    className='lab-menu'
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    mode="inline"
  >
        <Menu.Item key="1"><a href='#intro'>Тема, мета, місце розташування лаби №1</a></Menu.Item>
        <Menu.Item key="2"> <a href='#project6'>Списки</a></Menu.Item>
        <Menu.Item key="3"><a href='#lists'>Списки</a></Menu.Item>
        <Menu.Item key="4"><a href='#ids'>Ідентифікатори</a></Menu.Item>
        <Menu.Item key="5"><a href='#spaces'>Відступи</a></Menu.Item>
        <Menu.Item key="6"><a href='#floating'>Плаваючі предмети</a></Menu.Item>
      <Menu.ItemGroup key="g2" title="Селектори">
        <Menu.Item key="7"><a href='#tagAndClass'>Селектори тегу та класу</a></Menu.Item>
        <Menu.Item key="8"><a href='#others'>Інщі селектори</a></Menu.Item>
        <Menu.Item key="9"><a href='#groups'>Групування селекторів</a></Menu.Item>
      </Menu.ItemGroup>
      <Menu.Item key="10"><a href='#resultsLabTwo'>Висновки</a></Menu.Item>
  </Menu>
);

export default LabMenuTwo;