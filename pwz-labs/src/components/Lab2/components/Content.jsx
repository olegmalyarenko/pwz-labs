const ContentTwo = () => (
    <div> 
        <div id="topic" className="content">
         <h3>ЛАБОРАТОРНА РОБОТА №2</h3>

         <h4>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. <br/>СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</h4>

         <h4>Мета: придбати практичні навички роботи  з селекторами,ідентифікаторами, списками, <br/> 
         різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами, плаваючими елементами, оформленням текстових елементів</h4>
       </div>

       <div id="lists" className="content">
       <h4>Списки</h4>
       <h5>Візьмемо звичаний список:</h5>
       <div className="example"> {`<ul>List`}<br/>
       {`<li>One</li>`}<br/>
       {`<li>Two</li>`}<br/>
       {`<li>Three</li>`}<br/>
       {`<li>Four</li>`}<br/>
       {`</ul>`}</div>
       <div className="content">
       <ul>List
       <li>One</li>
       <li>Two</li>
       <li>Three</li>
       <li>Four</li>
       </ul></div>
      
       
       <h5>За допомогою властивості <bold>list-style-position</bold> ми можемо керувати де відображати маркер списку</h5>
       <h5>Додаючі значення  outside (зовні) або inside (всередині) ми можемо керувати його розміщенням:</h5>
       <div className="example">{` .outside{`}<br/>
       {`    list-style-position: outside;`}<br/>
       {`  }}<br/>`}<br/>
       <br/><br/>
       {`.inside{ `}<br/>
       {` list-style-position: inside;`}<br/>
       {`}`}<br/> </div>
       <div className="content"><ul >List
      <li className="outside">Outside</li>
      <li className="inside">Inside</li>
      </ul></div>
        

        <h5>За допомогою властивості <bold>list-style-type</bold> ми можемо змінювати вигляд маркерів списку</h5>
        <div className="example">{`.spaceCounter{`}<br/>
        {` list-style-type: space-counter;`}<br/>
        {` }`}<br/>

        {` .chinese{`}<br/>
        {` list-style-type: trad-chinese-informal;`}<br/>
        {` }`}<br/>

        {` .square{`}<br/>
        {` list-style-type: square;`}<br/>
        {` }`}<br/> </div>
        <div className="content">
        <ul>List
       <li className="kannada">Kannada</li>
       <li className="armenian">Armenian</li>
       <li className="square">Square</li>
       </ul>
       </div>

       <h4>За допомогою list-style-image ми можемо замінити іконки маркерів списку на будь-яку зображення</h4>

       <div className="example"> {` .list-icon{`}<br/>
     {`list-style-image: url("https://mdn.mozillademos.org/files/11981/starsolid.gif");`}<br/>
     {`}`}<br/></div>

      <div className="content">
     <ul>List
       <li className="list-icon">Star</li>
       <li >Simple</li>
       </ul>
       </div>
      </div>
      

      <div id="ids" className="content">
          <h4>Ідентифікатори</h4>
          <h5>Ідентифікатор (званий також « ID селектор ») визначає унікальне ім'я елемента, <br/>
          яке використовується для зміни його стилю і звернення до нього через скрипти.</h5>
          <h5>Прив'язка ідентифікатора до HTML тегу:</h5>
          <div className="example"> {`<h5 id="red-title">Small red title with id</h5>`}</div>
          <h5>Додання стилів до  ідентифікатора:</h5>
          <div className="example"> {`#red-title{`}<br/>
          {`color:red:`}<br/>
          {`}`}</div>
          <h5 id="red-title">Small red title with id</h5>

          <h5>Ідентифікатор має більшу вагу селектора ніж тег чи клас.</h5>
      </div>
      
      <div id="spaces" className="content">
      <h4>Відступи</h4>
      
      </div>   
      
      
    </div>
);

export default ContentTwo;