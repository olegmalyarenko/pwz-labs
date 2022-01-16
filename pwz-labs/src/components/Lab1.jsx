import { Menu } from 'antd';

const Lab1 = () => {
return (
<Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
            <Menu.Item key="1">Опис предметного середовища</Menu.Item>
            <Menu.Item key="2">Тема, мета, місце розташування лаби №1</Menu.Item>
          <Menu.ItemGroup key="g2" title="Структура документа">
            <Menu.Item key="3">HTML-код таблиць</Menu.Item>
            <Menu.Item key="4">HTML-код  форми</Menu.Item>
            <Menu.Item key="5">HTML-код  зображення</Menu.Item>
            <Menu.Item key="6">HTML-код  списків та посилань</Menu.Item>
          </Menu.ItemGroup>
          <Menu.Item key="7">Висновки</Menu.Item>
      </Menu>
)
};

export default Lab1;
