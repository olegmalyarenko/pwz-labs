import TabList from "./components/TabList";

const size = 'small';

function App() {

  return (
    <div className="App">
      <div className="app-title">
        <h2>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ</h2>
        <h2>З ДИСЦИПЛІНИ "РОЗРОБКА WEB-ЗАСТОСУВАНЬ"</h2>
        <div className="row"><span>БРИГАДА №7</span> <span style={{paddingLeft:30}}>СТУДЕНТИ: Маляренко О.І.,  Дмитренко М.В.,  Дмитренко Р.А.</span></div>
      </div>
     < TabList/>
    </div>
  );
}

export default App;
