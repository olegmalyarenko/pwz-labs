import AceEditor from "react-ace";
import task21 from "../constants/task1";

const Content3 = () => (
    <div>
        <div id="intro3" className="content">
            <h3>ЛАБОРАТОРНА РОБОТА №3</h3>

            <h4>Тема: БЛОЧНА ВЕРСТКА HTML-ДОКУМЕНТУ ЗА МАКЕТОМ. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</h4>

            <ul><h4>Мета:</h4>
                 <li>придбати практичні навички роботи  верстки сторінок засобами CSS, <br/>
                верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</li>
                <li>придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</li>
            </ul>
        </div>

        <div id="app3" className="content">
            <h3>Проект</h3>
           <h4>Тема: Додаток для ведення нотаток TodoList</h4>
           <h4>Мета: Створення додаток  за допомогою технологій JavaScript,<br/> з  бібліотекою React, та Java для поглиблення своїх теоретичних та практичних навичок у розробці Web-застосунків</h4>
           <div className="image-container"><img src="https://i.ibb.co/YTCqLpD/main-page.jpg" alt="img" width={1000} /></div>
        </div>




        <div id="code3" className="content">
            <h4>Завдання №2</h4>
            <h5>Варіант 17</h5>
            <AceEditor
            mode="html"
            value={task21}
            theme="github"
            name="code3"
            editorProps={{ $blockScrolling: true }}
            />
        </div>    

    </div>
)

export default Content3;
