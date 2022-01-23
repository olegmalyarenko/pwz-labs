import AceEditor from "react-ace";
import task1 from "../constants/task1";
import task2 from "../constants/task2";
import task3 from "../constants/task3";
import result from "../static/web41.png";

const Content4 = () => (
<div className="center">
        <div id="intro4" className="center">
            <h3>ЛАБОРАТОРНА РОБОТА №4</h3>

            <h4>Тема:  ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.<br/>
            КЛАСИ,ОБ’ЄКТИ, ФУНКЦІЇ,  В МОВІ JAVASCRIPT. ПОДІЇ ТА ОБРОБКА ПОДІЙ.<br/>
            ПРОГРАМНА ВЗАЄМОДІЯ З HTML ДОКУМЕНТАМИ НА ОСНОВІ DOM АРІ.</h4>
            
            <div className="content">
                <ul><b style={{paddingLeft:250}}>Мета:</b>
                    <li>придбати практичні навички роботи маніпулювання інформаційним <br/> 
                    вмістом Web-документа засобами мови JavaSript</li>
                    <li>використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові JavasSript</li>
                </ul>
            </div>
        </div>

        <div id="project4" className="center">
            <h3>Проект</h3>
           <h4>Тема: Додаток для ведення нотаток TodoList</h4>
           <h4>Мета: Створення додаток  за допомогою технологій JavaScript,<br/> з  бібліотекою React, та Java для поглиблення своїх теоретичних та практичних навичок у розробці Web-застосунків</h4>
           <div className="image-container"><img src="https://i.ibb.co/YTCqLpD/main-page.jpg" alt="img" width={1000} /></div>
        </div>

        <div id="task41" className="center">
            <h4>Завдання 1</h4>
            <div className="content">
                <ul>У власному сайті або на окремій WEB-сторінці, використовучі функції,<br/> застосувати  4 способи функціонального застосування JavaScript:
                    <li>гіпертекстове посилання (схема URL);</li>
                    <li>обробник події (handler);</li>
                    <li>вставка (тег SCRIPT);</li>
                </ul>
            </div>

            <div className="content">
            <iframe srcDoc={task1} frameborder="3" width="500" height="300"/><br/><br/>     
            <AceEditor
            mode="html"
            value={task1}
            theme="github"
            name="task41"
            editorProps={{ $blockScrolling: true }}
            />
            </div>
        </div>
        
        <div id="task42" className="center">
            <h4>Завдання 2</h4>
            <h5>Варіант 7</h5>
            <p>Створити одновимірний массив. Знайти найбільший серед від’ємних та найменший серед додатних елементів масиву.<br/> 
               Упорядкувати масив у порядку зменшення методом вибору. Надрукувати вхідний та вихідний масив.</p>

            <div className="content">
               <div className="image-container"><img src={result} alt="img" width={300} /></div>
                <AceEditor
                mode="html"
                value={task2}
                theme="github"
                name="task42"
                editorProps={{ $blockScrolling: true }}
                />
            </div>

        </div>   

        <div id="task43" className="center">
        <h4>Завдання 3</h4>
        <h5>Варіант 7:Гістограма</h5>
        <p>Реалізувати можливість уведення довільної кількості чисел у елементи форми <br/> 
        та побудови нормалізованої за максимальним числом гістограми значень цих полів.<br/>
         При візуалізації гістограми використовувати лише засоби CSS. </p>
         <div className="content">
                <iframe srcDoc={task3} frameborder="3" width="500" height="700"/><br/><br/>
                <AceEditor
                mode="html"
                value={task3}
                theme="github"
                name="task42"
                editorProps={{ $blockScrolling: true }}
                />
            </div>
        </div>    
        
        <div id="results4" className="center">
         <h4>Висновки</h4>
            <h5>Під час виконання Лабораторної роботи ми придбати практичні навички роботи на мові JavaScript,  <br/>
                зокрема у роботі з елементами DOM, а також з подіями та елементами масива</h5>
        </div>
</div>

);

export default Content4;
