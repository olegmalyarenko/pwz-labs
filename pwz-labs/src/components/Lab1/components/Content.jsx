import "./styles.css";

const Content = () => {
    return (
        <div className="center">
        <div id="about" className="content">
            <h3>ЛАБОРАТОРНА РОБОТА №1</h3>
            <h4>1.Опис предметного середовища додатку TodoList</h4>
            <p> TodoList або список справ, це класичний додаток для пропрацювання можливостей бібліотеки React,який при цьому має достатньо багатий функціонал. </p>

                <div className="content">    
               <ul> З його допомогою ми можемо виконувати такі функції:
                 <li>Зберігати список завдань на день</li>
                 <li>Виділяти важливі задачі</li> 
                 <li>Викреслювати виконані задачі</li>  
                 <li>Видаляти непотрібні задачі</li> 
                 <li>Проводити пошук по задачам</li>   
               </ul>
               </div>

               <p>Головна сторінка складається з 3 головних блоків : це шапка, основний контект та футер</p>
               <p>Шапка в свою чергу складається з заголовку з іконкою та навігації, що містить посилання на головну сторінку та сторінку авторів.
                   Основний контент додатку також поділений на 4 частини: заголовок з лічильником зроблених та незроблених справ; форма пошуку, таблиця справ, та форма додавання нової задачі.
                   У формі пошуку крім текстового пошуку є можливість фільтрації результатів по автивним та неактивним. 
                   Таблиця справ містить рядки з заголовками справ, а також кропками для виділення та видалення.  
                   Форма для додавання справ містить форму для вводу тексту та кпоку відправки. 
                     Футер містить іконки з посиланнями на соцмережі.  </p> 


                     <p>Цей додаток може бути дуже корисним помічником на кожний день, особливо коли поєднуєш роботу та навчання, особливо в період сессії. </p>       
        </div>
        <div id="topic" className="content" style={{paddingLeft:50}}>
           <h4>2.Тема: Додаток для ведення нотаток TodoList</h4>
           <h4>2.Мета: Створення додаток  за допомогою технологій JavaScript,<br/> з  бібліотекою React, та Java для поглиблення своїх теоретичних та практичних навичок у розробці Web-застосунків</h4>
           <div className="content">
           <iframe src="https://olegmalyarenko.github.io/pwz-app/" frameborder="3" width="500" height="500"/>
           </div>
           <p><a href="https://github.com/olegmalyarenko/pwz-labs">Посилання на репозиторій з лабораторними</a></p>
           <p><a href="https://github.com/olegmalyarenko/pwz-app">Посилання на репозиторій з застосунком</a></p>
        </div>

        <div id="table" className="content">
        <h4 className="example-title">Таблиця</h4>
        <div className="example"> {`<table class="schedule-table" bordercolor="#191919" rules="rows">`}<br/>
            {`<thead style="background: #fc0">`}<br/>
                {`<tr>`}<br/>
                    {`<td>  </td> `}<br/>
                     {`<th> Час занять </th> `}<br/>
                     {`<th> Предмет </th> `}<br/>
                     {`<th> Викладач </th> `}<br/>
                     {`</tr> `}<br/>
                    {`</thead>`}<br/>
                   {`<tbody style="background: #ccc">`}<br/>
                   {`<tr>`}<br/>
                    {`<td> 1 </td>`}<br/>
                        {`<td> 8:30  - 10:05 </td> `}<br/>
                        {`<td> Пр.веб-заст</td> `}<br/>
                        {`<td> Проскура С.Л</td> `}<br/>
                        {`</tr> `}<br/>

                    {` <tr>`}<br/>
                    {`<td>2-4</td>`}<br/>
                        {`<td>10:25 -17:45  </td> `}<br/>
                        {`<td> Теорія ймовірностей</td> `}<br/>
                        {`<td> Ліхоузова Т.А.</td>`}<br/>
                        {`</tr> `}<br/>
                    {`</tbody>`}<br/>
                   {`</table>`}<br/>
              </div>
        </div>
<div id="form" className="content">
<h4 className="example-title">Форма</h4>
<div className="example"><code>
{`<form>`}<br/>
 {` Ім'я:<br>`}<br/>
 {` <input type="text" name="firstname"><br>`}<br/>
 {` Фамілія:<br>`}<br/>
 {` <input type="text" name="lastname">`}<br/>
{`</form>`}<br/>
</code></div>
</div>


        <div id="list" className="content">
            <h4 className="example-title">Список та посилання</h4>
            <div className="example"><code> 
            {`<ul>`}<br/>
            {`<li>First</li>`}<br/>
            {`<li>Second</li>`}<br/>
            {`<li>Third</li>`}<br/>
            {`</ul>`}<br/>

        {`<strong>`}<br/>
        {`<a href="https://www.w3schools.com/">W3 School</a>`}<br/>
            {`</strong>`}<br/>
        {`</header>`}<br/></code></div>
        </div>

        <div id="img" className="content">
        <h4 className="example-title">Зображення</h4>
        <div className="example"><code> {` <img src="footer.png.png" alt="footer">`}</code></div>
        </div>
        <div id="result" className="content">
            <h4>Висновки</h4>
            <h5>Під час виконання цієї Лабораторної роботи ми вивчили основи роботи з HTML документами. <br/>
            А саме, як працювати зі списками та посиланнями, таблицями та формами, а також зображеннями.</h5>
        </div>   
        </div>
    )
};

export default Content;
