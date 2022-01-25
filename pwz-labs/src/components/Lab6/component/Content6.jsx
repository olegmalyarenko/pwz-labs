import AceEditor from "react-ace";
import task51 from "../../Lab5/constants/task51";
import task52 from "../../Lab5/constants/task52";
import task53 from "../../Lab5/constants/task53";
import task3 from "../static/lab6t3.jpg";
import task4 from "../static/lab6t4.jpg";
import task5 from "../static/lab6t5.jpg";
import task6 from "../static/lab6t6.jpg";
import task71 from "../static/lab6t71.jpg";
import task72 from "../static/lab6t72.jpg";
import task73 from "../static/lab6t73.jpg";

const Content6 = () => (
    <div className="center">
    
            <div id="intro6" className="center">
                <h3>ЛАБОРАТОРНА РОБОТА №6</h3>
    
                <h4>Тема:  WEB-СЕРВЕРИ ТА ПРИНЦИПИ ЇХ РОБОТИ З КОРИСТУВАЧЕМ.<br/>
                СЕРВЕРНІ WEB-ЗАСТОСУВАННЯ.</h4>
                
                <div className="content">
                    <ul><b style={{paddingLeft:250}}>Мета:</b>
                        <li>придбати практичні навички встановлення та конфігурування WEB-сервера</li>
                        <li>встановлення та налаштування Apache</li>
                    </ul>
                </div>
            </div>
            <div id="project6">
               <h3>ПРОЕКТ</h3>
               <h4>Тема: Додаток для ведення нотаток TodoList</h4>
               <h4>Мета: Створення додаток  за допомогою технологій JavaScript,<br/> з  бібліотекою React, та Java для поглиблення своїх теоретичних та практичних навичок у розробці Web-застосунків</h4>
               <div className="content paddingLeft">
               <iframe src="https://olegmalyarenko.github.io/pwz-app/" frameborder="3" width="500" height="500"/>
               </div>
            </div>


            <div id="task61">
               <h3>Завдання№1</h3>
             <h5>Користуючись документацією бібліотеки JQueryUI додати до сайту 3 динамічних елементи на свій розсуд.</h5>

             <h5>Accordion</h5>  
            <div className="content paddingLeft">
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
            <div className="content paddingLeft">
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
            <div className="content paddingLeft">
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

            <div id="task62">
               <h3>Завдання№2</h3>
               <p>Вибрати емулятор WEB-сервера за власним бажанням.Створити WEB-вузол на комп’ютер.</p>
               <div className="content paddingLeft"><img src={task3} alt="img" width={500} /></div>
            </div>   
            
            <div id="task63">
            <h3>Завдання№3</h3>
            <p>На WEB-вузол завантажити всі HTML-документі. Звернулись до них з запитом для перегляду.</p>
            <div className="content paddingLeft"><img src={task4} alt="img" width={500} /></div>
            </div> 

            <div id="task64">
            <h3>Завдання№4</h3>
            <p>Перейменувати розширення .html на .php . Відкрити і з’ясувати, що інформація відображується на екрані.</p>
            <p>Ознайомитись  с установкою та конфигураціями WEB-сервера</p>
            <div className="content paddingLeft"><img src={task5} alt="img" width={500} /></div>
            </div> 

            <div id="task65">
            <h3>Завдання№5</h3>
            <p>Визначити для файлів вузла  для файлов узла кодировку utf-8  у самих  файлах (meta - charset), в httpd.conf (apache), php.ini. </p>
            <div className="content paddingLeft"><img src={task6} alt="img" width={500} /></div>
            </div> 

            <div id="task66">
            <h3>Завдання№6</h3>
            <p>Для форми зворотнього зв’язку відобразити  ( на відправку повідомлення) інформацію, что повідомлення отримано. Також відобразити  дату</p>
            <div className="content paddingLeft"><img src={task71} alt="img" width={500} /></div>
            <div className="content paddingLeft"><img src={task72} alt="img" width={500} /></div>
            <div className="content paddingLeft"><img src={task73} alt="img" width={500} /></div>
            </div> 

            <div id="results6" className="center">
                <h4>Висновки</h4>
                <h5>Під час виконання Лабораторної роботи ми придбати практичні навички роботи по встановленню  <br/>
                та налаштування WEB-сервера Apache, а також отриманню з нього даних.</h5>
            </div>

    </div>
);

export default Content6;
