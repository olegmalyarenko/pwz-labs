const ContentTwo = () => (
    <div> 
        <div id="intro" className="content">
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
      <h5>Будь-який контент можна відокремити на сторінці  за допомогою зовнішнього відступу margin, внутрішнього відступу padding та границі  border</h5>
      <h5>Приклад зовнышнього выдступа margin:</h5>
      <div className="example">{`.margin-left{`}<br/>
          {` margin-left:320px;`}<br/>
          {` color:red:`}<br/>
          {`}`}<br/>
          {`.margin-right{`}<br/>
            {` margin-right:320px;`}<br/>
            {`color:blue; `}<br/>
            {`}`}<br/>
            {`.margin-top{`}<br/>
    {` margin-top:60px;`}<br/>
    {` color:green; `}<br/>
    {`}`}<br/>
    {`.margin-bottom{`}<br/>
        {`margin-bottom:60px;`}<br/>
        {` color:orange; `}<br/>
        {` }`}<br/>
            </div>
            <p className="margin-top">Margin top</p>
       <p className="margin-left">Margin left</p>
       <p className="margin-right">Margin right</p>
       <p className="margin-bottom">Margin bottom</p>


       <h5>Приклад використання внутрішніх відступів padding та границі  border:</h5>

       <div className="example">{`.border-block{`}<br/>
    {`border: 3px solid grey;`}<br/>
    {`width: 200px;`}<br/>
    {`height: 200px;`}<br/>
    {`margin: 0 auto;`}<br/>
    {`}`}<br/>

    {`.padding-left{`}<br/>
        {`padding-left:70px;`}<br/>
        {`color:red;`}<br/>
        {`}`}<br/>
        {`.padding-right{`}<br/>
            {`padding-right:70px;`}<br/>
            {`color:blue; `}<br/>
            {`}`}<br/>

            {`.padding-top{`}<br/>
                {`padding-top:30px;`}<br/>
                {`color:green; `}<br/>
                {`}`}<br/>
                {`.padding-bottom{`}<br/>
                    {`padding-bottom:30px;`}<br/>
                    {`color:orange; `}<br/>
                    {`}`}<br/> 
                    </div>
                    <div className="border-block">
           <p className="padding-top">Padding top</p>
           <p className="padding-left">Padding left</p>
           <p className="padding-right">Padding right</p>
           <p className="padding-bottom">Padding bottom</p>
       </div>
       
       <h5>Також у прикладі вище ми можемо побачити горизонтальне центрування за допомогою "margin:0 auto"</h5>
       
      </div>   
      

      <div id="floating" className="content">
      <h4>Плаваючі предмети</h4>
      <h5>За допомогою "float:left" елемент вирівнюється по лівому краю, а інщі елементи його обтікають:</h5>
      <div className="float-left"/>
      <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh 
   euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.Duis autem dolor in hendrerit in vulputate velit esse molestie consequat, vel 
   illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio 
   dignissim qui blandit praesent luptatum zzril delenit au gue duis dolore te 
   feugat nulla facilisi.</div>


   <h5 >За допомогою "float:right" елемент вирівнюється по правому краю, а інщі елементи його обтікають з ліва:</h5>
      <div className="float-right"/>
      <div> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh 
   euismod tincidunt ut lacreet dolore magna aliguam erat volutpat.Duis autem dolor in hendrerit in vulputate velit esse molestie consequat, vel 
   illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio 
   dignissim qui blandit praesent luptatum zzril delenit au gue duis dolore te 
   feugat nulla facilisi.
      </div>

      </div>
     
      

      <div id="tagAndClass" className="content">
      <h4>Селектори тегу та класу</h4>
     
     <h5>Селектор тегу позначається так:</h5>
      <div className="example">{`h5{`}<br/>
          {`padding:top;`}<br/>
          {`text-align:center;`}<br/>
          {`}`}<br/>
      </div>
      <h5>Доцільніше за все використовувати селетор тегу коли нам потрібно змінити стилі для цього тегу у всьому документі.</h5>

        <h5>Селектор класу позначається так:</h5>
        <div className="example">{`.title{`}<br/>
          {`color:green;`}<br/>
          {`text-align:left;`}<br/>
          {`}`}<br/>
        </div>   
        
        <h5>Селектором класа можна створювати стиль для використання різними тегами, який у свою чергу має біль високу вагу ніж тег.</h5>
        </div>


        <div id="others" className="content">
        <h4>Інщі селектори</h4>
        <h5>Універсальний селектор,стилі якого будуть відповідати всім елементам проекту:</h5>
        <div className="example">{`*{`}<br/>
             {`margin:0;`}<br/>
             {`padding:0;`}<br/>
             {`}`}<br/>
        </div>  

        <h5>Селектор по атрибуту</h5>
        <div className="example">{` a[href^="/#"] {`}<br/>
  {`background-color: gold;`}<br/>
  {`}`}<br/>
  {`<p><a href="#others">Simple link</a></p>`}<br/>
  {` <p><a href="/#">Chosen  link</a></p>`}<br/>
      </div>

      <p><a href="#others">Simple link</a></p>
     <p><a href="/#">Chosen link</a></p>
     <p>Як ми бачимо стиль подіяв тільки на тег a з атрибутом 'href="/#"'</p>

    </div>

    <div id="groups" className="content">
    <h4>Групування селекторів</h4>
    <h5>Ми можемо групувати елементи за допомогою "," щоб застосувати стилі на декілька селекторів:</h5>
        <div className="example">{`h4,h3, h5, h6,p {`}<br/>
            {`text-align: center;`}<br/>
            {`}`}<br/>
        </div>



        <h5>Групування по дітям першого рівня "#father > li" , та по всім дітям - "#father li"</h5>

        <div className="example">{` #father li {`}<br/>
        {`color:#fd0;`}<br/>
        {`}`}<br/>

        {`#father > li {`}<br/>
        {`color:blueviolet;`}<br/>
        {`}`}<br/>
        </div>

        <div className="content">
            <ul id="father"> Father
                <li>First level child</li>
                <li>First level child</li>
                <li>First level child</li>
                <ul id="subfather"> Sub list
                    <li>Second level child</li>
                    <li>Second level child</li>
                    <li>Second level child</li>
                </ul>
            </ul>
        </div>


        <h5>Группування по правим сусідам за допомогою #label ~ li, та по першому правому сусіду за допомогою #label + li</h5>
            <div className="example">{`#label ~ li {`}<br/>
                {`color:#fd0;`}<br/>
                {`} `}<br/>
                {`#label + li {`}<br/>
                {` color:blueviolet;`}<br/>
                {`}`}<br/>
            </div>

            <div className="content">
                <ul> List
                    <li id="label">Chosen element</li>
                    <li>First neighbor</li>
                    <li>Other neighbor</li>
                    <li>Other neighbor</li>
                </ul>
            </div>
    </div>
    


        <div id="resultsLabTwo" className="content">
         <h4>Висновки</h4>
            <h5>Під час виконання Лабораторної роботи ми придбати практичні навички роботи СSS з селекторами,ідентифікаторами, списками,  <br/>
                різноманітними властивостями кольору і фону, зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів</h5>
        </div>
    </div>

);

export default ContentTwo;