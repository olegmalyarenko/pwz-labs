import AceEditor from "react-ace";
import task21 from "../constants/task21";
import task22 from "../constants/task22";
import task3 from "../constants/task3";

const Content3 = () => (
    <div>
        <div id="intro3" className="content">
            <h3>ЛАБОРАТОРНА РОБОТА №3</h3>

            <h4>Тема: БЛОЧНА ВЕРСТКА HTML-ДОКУМЕНТУ ЗА МАКЕТОМ. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</h4>
            
            <div className="content">
                <ul><b style={{paddingLeft:200}}>Мета:</b>
                    <li>придбати практичні навички роботи  верстки сторінок засобами CSS, <br/>
                    верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</li>
                    <li>придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</li>
                </ul>
            </div>
        </div>

        <div id="project3" className="content">
           <h3>ПРОЕКТ</h3>
           <h4>Тема: Додаток для ведення нотаток TodoList</h4>
           <h4>Мета: Створення додаток  за допомогою технологій JavaScript,<br/> з  бібліотекою React, та Java для поглиблення своїх теоретичних та практичних навичок у розробці Web-застосунків</h4>
           <div className="content" style={{paddingLeft:50}}>
           <iframe src="https://olegmalyarenko.github.io/pwz-app/" frameborder="3" width="500" height="500"/>
           </div>
           <p><a href="https://github.com/olegmalyarenko/pwz-labs">Посилання на репозиторій з лабораторними</a></p>
           <p><a href="https://github.com/olegmalyarenko/pwz-app">Посилання на репозиторій з </a></p>
        </div>

        <div id="task31" className="content">
            <h4>Завдання №2</h4>
            <h5>Варіант 17</h5>

            <h4>Розмітка за допомогою таблиці</h4>
            <div className="content" style={{paddingLeft:50}}>
            <iframe srcDoc={task21} frameborder="3" width="500" height="300"/><br/><br/>    
            <AceEditor
            mode="html"
            value={task21}
            theme="github"
            name="task21"
            editorProps={{ $blockScrolling: true }}
            />
            </div> 

            <h4 id="task32">Розмітка за допомогою плаваючих блоків</h4>
            <div className="content" style={{paddingLeft:50}}>
            <iframe srcDoc={task22} frameborder="3" width="500" height="300"/><br/><br/>     
            <AceEditor
            mode="html"
            value={task22}
            theme="github"
            name="task32"
            editorProps={{ $blockScrolling: true }}
            />
            </div> 
        </div>    

        <div id="task33" className="content" style={{paddingLeft:50}}>
            <h4>Завдання №3</h4>
            <h4>Розмітка за допомогою FLEXBOX</h4>
            <div className="image-container"><img src="https://i.ibb.co/8skWCTc/task3scr.png" alt="img" width={1000} /></div>
            <div className="image-container"><img src="https://i.ibb.co/0YMxcbs/task3scr2.png" alt="img" width={1000} /></div>
            <div className="image-container"><img src="https://i.ibb.co/B3R10t0/task3scr3.png" alt="img" width={1000} /></div>
            <div className="content">
            <AceEditor
            mode="html"
            value={task3}
            theme="github"
            name="task3"
            editorProps={{ $blockScrolling: true }}
            />
            </div> 
        </div>

        <div id="results3" className="content">
         <h4>Висновки</h4>
            <h5>Під час виконання Лабораторної роботи ми придбати практичні навички Блочної верстки СSS за лопомогою таблиць,  <br/>
                плаваючих елементів та FLEXBOX, а також створили лендінги з цими технологіями</h5>
        </div>

    </div>
)

export default Content3;
