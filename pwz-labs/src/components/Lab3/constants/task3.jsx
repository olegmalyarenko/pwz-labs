const task3 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
      * {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

.сontainer {
  padding: 0 80px;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  padding-top: 20px;
  margin-bottom: 40px;
  font-family: 'Open Sans', sans-serif;
}

.menu__link {
  background-color: #000;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 10px;
  font-size: 25px;
  letter-spacing: 1.5px;
}

.header__select {
  background-color: #2c2c2c;
  color: #fff;
  font-weight: bold;
  text-align: center;
  width: 320px;
  font-size: 25px;
  letter-spacing: 1.5px;
}

.programm {
  color: #2c2c2c;
  margin-bottom: 20px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff9630;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 40px;
}

.title span {
  color: #2c2c2c;
  font-size: 44px;
}

.programm__wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
  border-bottom: 2px solid #c4c4c4;
}

.time__img {
  height: 33vh;
  width: 20vw;
}

.time__text {
  width: 20vw;
  font-weight: bold;
  font-size: 20px;
}

.list {
  position: relative;
  right: 50px;
  max-width: 320px;
}

.list__item {
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  align-items: flex-start;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.list__item--rotate {
  color: #c4c4c4;
  transform: rotate(-90deg);
  justify-content: center;
  margin-right: 5px;
}

.list__item:hover {
  color: #43a1f3;
}

.enrollment {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.enrollment__img {
  width: 30vw;
}

.button {
  display: flex;
  justify-content: center;
  padding: 12px 0;
  background-color: #ffe200;
  border: none;
  border-radius: 2px;
  width: 250px;
  cursor: pointer;
  font-weight: bold;
}

.enrollment__button:active {
  transform: scale(95%);
}
/* PLANS */
.plans{
    margin-bottom: 30px;
}
.plans__content{
    display: block;
    background-color: #3298f2;
    position: relative;
    height: 600px;
}
.plans__title-box{
    background-color: #ffe200;
    height: 30px;
    width: 10%;
    
    position: absolute;;
    top:0;
    left:0;
}
.plans__title{
   color: black;
   font-size:18px;
   padding-top: 5px;
   text-align: center;
}
.plan__row {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.plan__item{
    width: 25%;
    background-color: #fff;
    height: 400px;
    margin: 10% auto;
    display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1%;
  border-radius: 4px;
}
.plan__item-title{
    font-weight: 800;
    font-size: 17px;
}
.plan__list{
    margin: 0 auto; 
}
.plan__active-item{
    list-style-image: url("https://findicons.com/files/icons/2015/24x24_free_application/24/yes.png");
    font-size: 18px;
    font-weight: 400;
    color: #000;
    padding-top: 4px;
}
.plan__disable-item{
    list-style-image: url("https://findicons.com/files/icons/1620/crystal_project/16/mini_circle.png");
    font-size: 18px;
    font-weight: 400;
    color:#7e7c7c;
    padding-top: 4px;
}
.plan__item-button {
    display: flex;
  justify-content: center;
  padding: 12px 0;
  background-color: #fdc407;
  border: none;
  border-radius: 2px;
  width: 150px;
  cursor: pointer;
  font-weight: bold;
}
.plan__item-price{
    color: #43a1f3;
    font-size: 20px;
    font-weight: 600;   
}
.expired-price{
    text-decoration:line-through;
    text-decoration-color: red;
}
.plan__item-price h3{
    padding-top: 10px;
    padding-bottom: 7px;
}
.plan__counter{
    color: #43a1f3;
    font-size: 14px;
    padding-bottom: 10px;
}
.plan__item-text{
    font-size: 18px;
    font-weight: 400;
    padding-top: 20px;
    padding-bottom: 80px;
}
/* DAiLY */

.daily__details {
  background-color: #3298f2;
  margin-bottom: 40px;
  padding: 30px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}

.daily__details-subtitle,
.daily__details-info {
  color: #fff;
}

.daily__details-title {
  font-size: 40px;
  margin-bottom: 10px;
}

.footer__wrap {
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background-image: url('https://i.ibb.co/PNVZDJD/footer.png');
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  padding: 200px 40px 0;
}

.footer__title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer__subtitle {
  font-weight: bold;
  margin-bottom: 15px;
}

.footer__info {
  margin-bottom: 40px;
}

.footer__button {
  font-weight: bold;
  padding: 12px 0;
  width: 200px;
  background-color: #3298f2;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

.footer__button:active {
  transform: scale(95%);
}
  </style>
</head>
<body>
  <nav class="menu сontainer">
    <a class="menu__link" href="#">Форми навчання</a>
    <a class="menu__link" href="#">Заходи</a>
    <a class="menu__link" href="#">Про Академію</a>
    <a class="menu__link" href="#">Контакти</a>
    <select class="header__select">
      <option value="">Київ</option>
      <option value="">Львів</option>
      <option value="">Харків</option>
    </select>
  </nav>
  <section class="programm сontainer">
    <h2 class="title">
      ПPOГРАММА КУРСУ<br>
      <span>REACT</span>
    </h2>
    <div class="programm__wrap">
      <div class="time">
        <img
          class="time__img"
          src="https://i.ibb.co/JrmCrpt/img-time.png" 
          alt="img"
        >
        <p class="time__text">
          ОПАНУЙ REACT ЗА 20 ЗАНЯТЬ
        </p>
      </div>
      <ul class="list">
        <li class="list__item">
          <div class="list__item--rotate">01</div>
          <a href="#">ВСТАНОВЛЕННЯ REACT</a>
        </li>
        <li class="list__item">
          <div class="list__item--rotate">02</div>
          <a href="#">КЛАСОВІ КОМПОНЕНТИ</a>
        </li>
        <li class="list__item">
          <div class="list__item--rotate">03</div>
          <a href="#">STATE & PROPS</a>
        </li>
        <li class="list__item">
          <div class="list__item--rotate">04</div>
          <a href="#">DATA FORWARDING & PROPS DRILLING</a>
        </li>
        <li class="list__item">
          <div class="list__item--rotate">05</div>
          <a href="#">LIFECYCLE HOOKS</a>
        </li>
        <li class="list__item">
          <div class="list__item--rotate">06</div>
          <a href="#">ФУНКЦІОНАЛЬНІ КОМПОНЕНТИ</a>
        </li>
        <li class="list__item">
          <div class="list__item--rotate">07</div>
          <a href="#">ROUTING</a>
        </li>
        <li class="list__item">
            <div class="list__item--rotate">08</div>
            <a href="#">HOOKS</a>
        </li>
        <li class="list__item">
          <div class="list__item--rotate">09</div>
          <a href="#">REDUX</a>
        </li>
      </ul>
      <div class="enrollment">
        <img
          class="enrollment__img"
          src="https://i.ibb.co/HB24b5C/bg.jpg"
          alt="bg"
        >
        <button
          class="button"
          type="button"
        >
          Записатись на курс
        </button>
      </div>
    </div>
  </section>

  <section class="plans">
    <div class="сontainer"> 
        <div class="plans__content">
            <div class="plans__title-box">
                 <h5 class="plans__title">Стаціонар</h5>
             </div>
             
             <div class="plan__row">
                <div class="plan__item">
                    <h5 class="plan__item-title">MINIMAL</h5>
                    <ul class="plan__list">
                        <li class="plan__active-item">40 годин</li>
                        <li class="plan__active-item">2 месяця</li>
                        <li class="plan__active-item">12 годин в тиждень</li>
                        <li class="plan__active-item">Розтермінування до 24 місяців</li>
                        <li class="plan__disable-item">Безкоштовне повторне<br/> проходження курсу</li>
                        <li class="plan__disable-item">Особистий ментор</li>
                    </ul>
                    <div class="plan__item-price">
                        <h3 class="expired-price">17 500 ГРН</h3>
                        <h3>8 500 ГРН</h3>
                    </div>
    
                    <h6 class="plan__counter">3 вільних місць</h6>  
                    <button class="plan__item-button">Записатись на курс</button>
                </div>

                <div class="plan__item">
                    <h5 class="plan__item-title">PRO</h5>
                    <ul class="plan__list">
                        <li class="plan__active-item">40 годин</li>
                        <li class="plan__active-item">2 месяця</li>
                        <li class="plan__active-item">12 годин в тиждень</li>
                        <li class="plan__active-item">Розтермінування до 24 місяців</li>
                        <li class="plan__active-item">Безкоштовне повторне<br/> проходження курсу</li>
                        <li class="plan__active-item">Особистий ментор</li>
                    </ul>
                    <div class="plan__item-price">
                        <h3 class="expired-price">25 000  ГРН</h3>
                        <h3>12 500 ГРН</h3>
                    </div>
    
                    <h6 class="plan__counter">3 вільних місць</h6>  
                    <button class="plan__item-button">Записатись на курс</button>
                </div>

                <div class="plan__item">
                    <h5 class="plan__item-title">ІНДИВІДУАЛЬНО</h5>
                    <div  class="plan__item-text">
                        Обєм, навантаження, тривалість<br/>
                        визначаються індивідуально для<br/>
                        кожного студента його персональним<br/>
                        ментором
                    </div>
                    <div class="plan__item-price">
                        <h3 class="expired-price">100 000 ГРН</h3>
                        <h3>51 000 ГРН</h3>
                    </div>
    
                    <h6 class="plan__counter">3 вільних місць</h6>  
                    <button class="plan__item-button">Записатись на курс</button>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- ne uspel) -->
  <section class="daily">
    <div class="сontainer">

      <div class="daily__details">
        <div class="daily__details-wrap">
          <h3 class="daily__details-subtitle">НАВЧАЙСЯ ЗАРАЗ</h3>
          <h2 class="daily__details-title">СПЛПАЧУЙ ПОТІМ</h2>
          <p class="daily__details-info">РОЗТЕРМІНУВАННЯ ПЛАТЕЖІВ ДО 24 МІСЯЦІВ.</p>
        </div>
        <div class="daily__details-button button">Дізнатись деталі</div>
      </div>
    </div>
  </section>

  <footer class="footer сontainer">
    <div class="footer__wrap">
      <h2 class="footer__title title">КОМПЛЕКСНИЙ КУРС <br> ТЕСТУВАННЯ QA</h2>
      <h3 class="footer__subtitle">Такого крутого курсу тестування ще не було</h3>
      <p class="footer__info">Найбільший та найкращий курс тестування в Україні. Гарантія <br> працевлаштування.Найбільший набір технологій</p>
      <button class="footer__button">Забронювати місце</button>
    </div>
  </footer>
</body>
</html>`;

export default task3;
