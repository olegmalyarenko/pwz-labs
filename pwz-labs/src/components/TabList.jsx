import { Tabs } from 'antd';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import Lab5 from './Lab5';
import Lab6 from './Lab6';


const { TabPane } = Tabs;

const TabList = () => {
    return (
    <Tabs defaultActiveKey="1" type="card" size="small">
    <TabPane tab="Лабораторна робота 1" key="1">
    <Lab1/>
    </TabPane>
    <TabPane tab="Лабораторна робота 2" key="2">
     <Lab2/>
    </TabPane>
    <TabPane tab="Лабораторна робота 3" key="3">
    <Lab3/>
    </TabPane>
    <TabPane tab="Лабораторна робота 4" key="4">
     <Lab4/>
    </TabPane>
    <TabPane tab="Лабораторна робота 5" key="5">
     <Lab5/>
    </TabPane>
    <TabPane tab="Лабораторна робота 6" key="6">
     <Lab6/>
    </TabPane>
    <TabPane tab="Лабораторна робота 7" key="7">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 8" key="8">
      Content of card tab 3
    </TabPane>
    <TabPane tab="Лабораторна робота 9" key="9">
      Content of card tab 3
    </TabPane>
    </Tabs>
)};

export default TabList;