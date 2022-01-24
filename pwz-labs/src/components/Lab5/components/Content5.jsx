import AceEditor from "react-ace";
import task51 from "../constants/task51";
import task52 from "../constants/task52";
import task53 from "../constants/task53";

const Content5 = () => (
<div className="center">

        <div id="intro5" className="center">
            <h3>ЛАБОРАТОРНА РОБОТА №5</h3>

            <h4>Тема:  ВИКОРИСТАННЯ В СЦЕНАРІЯХ JAVASCRIPT БІБЛІОТЕК КРОС-БРАУЗЕРНИХ<br/>
            ІНТЕРФЕЙСІВ МЕТОДІВ DOM.  БІБЛІОТЕКА JQUERY UI.<br/>
            ЗАСОБИ НАЛАГОДЖЕННЯ І ТЕСТУВАННЯ СЦЕНАРІЇВ JAVASCRIPT.</h4>
            
            <div className="content">
                <ul><b style={{paddingLeft:250}}>Мета:</b>
                    <li>придбати практичні навички роботи jQuery UI  </li>
                    <li>вміти додавати до сайту  динамічні елементи цієї бібіліотеки</li>
                    <li>плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше</li>
                </ul>
            </div>
        </div>
        <div id="project5">
           <h3>ПРОЕКТ</h3>
           <h4>Тема: Додаток для ведення нотаток TodoList</h4>
           <h4>Мета: Створення додаток  за допомогою технологій JavaScript,<br/> з  бібліотекою React, та Java для поглиблення своїх теоретичних та практичних навичок у розробці Web-застосунків</h4>
           <div className="content paddingLeft">
           <iframe src="https://olegmalyarenko.github.io/pwz-app/" frameborder="3" width="500" height="500"/>
           </div>
        </div>

        <div id="task51" className="center">
            <h4>Завдання 1</h4>
         <p> Користуючись документацією бібліотеки jQuery UI додати до окремої сторінки 2-3 динамічних елементи:</p>
         <h5>Accordion</h5>  
            <div className="content" style={{paddingLeft:50}}>
            <iframe srcDoc={task51} frameborder="3" width="500" height="300"/><br/><br/>     
            <AceEditor
            mode="html"
            value={task51}
            theme="github"
            name="task41"
            editorProps={{ $blockScrolling: true }}
            />
            </div>


            <h5>Datepicker</h5>  
            <div className="content" style={{paddingLeft:50}}>
            <iframe srcDoc={task52} frameborder="3" width="500" height="300"/><br/><br/>     
            <AceEditor
            mode="html"
            value={task52}
            theme="github"
            name="task41"
            editorProps={{ $blockScrolling: true }}
            />
            </div>

            
            <h5>Menu</h5>  
            <div className="content" style={{paddingLeft:50}}>
            <iframe srcDoc={task53} frameborder="3" width="500" height="300"/><br/><br/>     
            <AceEditor
            mode="html"
            value={task53}
            theme="github"
            name="task41"
            editorProps={{ $blockScrolling: true }}
            />
            </div>
        </div>   

</div>
);

export default Content5;
