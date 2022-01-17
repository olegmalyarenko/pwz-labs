import { Menu } from 'antd';
import Content from './components/Content';
import "./lab1.css";

const Lab1 = () => {
return (
  <div  className='lab1-content'>
   <Menu
        className='lab1-menu'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
            <Menu.Item key="1"><a href='#about'>Опис предметного середовища</a></Menu.Item>
            <Menu.Item key="2"><a href='#topic'>Тема, мета, місце розташування лаби №1</a></Menu.Item>
          <Menu.ItemGroup key="g2" title="Структура документа">
            <Menu.Item key="3"><a href='#table'>HTML-код таблиць</a></Menu.Item>
            <Menu.Item key="4"><a href='#form'>HTML-код  форми</a></Menu.Item>
            <Menu.Item key="5"><a href='#img'>HTML-код  зображення</a></Menu.Item>
            <Menu.Item key="6"><a href='#list'>HTML-код  списків та посилань</a></Menu.Item>
          </Menu.ItemGroup>
          <Menu.Item key="7"><a href='#result'>Висновки</a></Menu.Item>
      </Menu>
      <Content/>
 </div>
)
};

export default Lab1;
