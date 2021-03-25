// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';

// import Tubkal from '../../../assets/hiking-img/tubkal.jpg';
// import Ararat from '../../../assets/hiking-img/ararat.jpg';
// import Armenia from '../../../assets/hiking-img/armenia.jpg';
// import Everest from '../../../assets/hiking-img/everest.jpg';
// import Georgia from '../../../assets/hiking-img/georgia.jpg';


// class Trekking extends Component {
//     render() {
//         return (
//             <>
//                 <div className='hikes-card'>
//                     <h4 className='center none'>Треккинг на Тубкаль (4167м)</h4>
//                     <div className='hikes-img'>
//                         <img src={Tubkal} alt='zaporozhye' />
//                     </div>
//                     <div className='hikes-content'>
//                         <h4 className='center'>Треккинг на Тубкаль (4167м)</h4>
//                         <p className='justify px12'>Все ночевки будут в гостиницах, приютах или в палатках, которые обеспечивает марокканский сторона, Вам не нужно будет нести бивачное снаряжение кроме спальника и коврика.</p>
//                     </div>
//                     <div className='hikes-about'>
//                         <span>Даты:</span>
//                         <span>00.00.2021</span>
//                         <span>Цена:</span>
//                         <span>620 евро.</span>
//                         <a href=''><Button variant="secondary" className='about-btn'>Подробнее</Button></a>
//                     </div>
//                 </div>
//                 <div className='line'>Продолжительность: 9 дней / 8 ночей.</div>

//                 <div className='hikes-card'>
//                     <h4 className='center none'>Восхождение на АРАРАТ (5137м)</h4>
//                     <div className='hikes-img'>
//                         <img src={Ararat} alt='zaporozhye' />
//                     </div>
//                     <div className='hikes-content'>
//                         <h4 className='center'>Восхождение на АРАРАТ (5137м)</h4>
//                         <p className='justify px12'>Гора Арарат (5137м) расположена на берегу реки Аракс на территории современной
//                         Турции. Она имеет два вулканических конуса, Большой Арарат и Малый Арарат. По библейской легенде именно сюда после всемирного потопа причалил Ноев ковчег.</p>
//                     </div>
//                     <div className='hikes-about'>
//                         <span>Даты:</span>
//                         <span>00.00.2021</span>
//                         <span>Цена:</span>
//                         <span>650 евро.</span>
//                         <a href=''><Button variant="secondary" className='about-btn'>Подробнее</Button></a>
//                     </div>
//                 </div>
//                 <div className='line'>Продолжительность: 7 дней / 6 ночей, включая проезд.</div>

//                 <div className='hikes-card'>
//                     <h4 className='center none'>Армения, восхождения на вулканы</h4>
//                     <div className='hikes-img'>
//                         <img src={Armenia} alt='zaporozhye' />
//                     </div>
//                     <div className='hikes-content'>
//                         <h4 className='center'>Армения, восхождения на вулканы</h4>
//                         <p className='justify px12'>Армения горная страна – горы здесь достигают высоты 4 тысяч, а Гегамский хребет по праву называют самым красивым в этом регионе – его вулканы, издалека кажущиеся разноцветными, ничуть не уступают исландским. В этих горах еще можно найти вишапы – высеченные из камня мегалиты дохристианской эпохи, изображающие мифологических существ.</p>
//                     </div>
//                     <div className='hikes-about'>
//                         <span>Даты:</span>
//                         <span>00.00.2021</span>
//                         <span>Цена:</span>
//                         <span>385 евро.</span>
//                         <a href=''><Button variant="secondary" className='about-btn'>Подробнее</Button></a>
//                     </div>
//                 </div>
//                 <div className='line'>Продолжительность: 12 дней / 11 ночей.</div>

//                 <div className='hikes-card'>
//                     <h4 className='center none'>Трек к базовому лагерю Эвереста (5340м)</h4>
//                     <div className='hikes-img'>
//                         <img src={Everest} alt='zaporozhye' />
//                     </div>
//                     <div className='hikes-content'>
//                         <h4 className='center'>Трек к базовому лагерю Эвереста (5340м)</h4>
//                         <p className='justify px12'>У каждого туриста,который любит горы,есть мечта побывать на Эвересте. Ведь эта вершина, король среди вершин. Предлагаем отправиться в путешествие, к базовому лагерю Эвереста. Станем на один шаг ближе к своей мечте!</p>
//                     </div>
//                     <div className='hikes-about'>
//                         <span>Даты:</span>
//                         <span>00.00.2021</span>
//                         <span>Цена:</span>
//                         <span>700$</span>
//                         <a href=''><Button variant="secondary" className='about-btn'>Подробнее</Button></a>
//                     </div>
//                 </div>
//                 <div className='line'>Продолжительность: 17 дней / 16 ночей.</div>

//                 <div className='hikes-card'>
//                     <h4 className='center none'>Грузия. Авторский тур </h4>
//                     <div className='hikes-img'>
//                         <img src={Georgia} alt='zaporozhye' />
//                     </div>
//                     <div className='hikes-content'>
//                         <h4 className='center'>Грузия. Авторский тур </h4>
//                         <p className='justify px12'>У каждого туриста,который любит горы,есть мечта побывать на Эвересте. Ведь эта вершина, король среди вершин. Предлагаем отправиться в путешествие, к базовому лагерю Эвереста. Станем на один шаг ближе к своей мечте!</p>
//                     </div>
//                     <div className='hikes-about'>
//                         <span>Даты:</span>
//                         <span>00.00.2021</span>
//                         <span>Цена:</span>
//                         <span>590$</span>
//                         <a href=''><Button variant="secondary" className='about-btn'>Подробнее</Button></a>
//                     </div>
//                 </div>
//                 <div className='line' style={{ marginBottom: '50px' }}>Продолжительность: 8 дней / 7 ночей.</div>
//             </>
//         );
//     }
// }

// export default Trekking;



import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

const Trekking = () => {
    return (
        <div>

        </div>
    );
};
export default Trekking;