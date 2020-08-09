import React from 'react';
import TeacherList from '../../pages/TeachersList';

// imagem
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import nauj from '../../assets/images/nauj.jpeg'

import './styles.css'

function TeacherItem(){
    return(
    <article className="teacher-item">
                   <header>
                       <img src={nauj} alt="Juan Andrade"/>
                        <div className="">
                            <strong>
                                Juan Andrade

                                 <span>Quimica </span>
                                </strong>
                        </div>
                   </header>
                        <p>Sou brabo
                            <br/> <br/>
                            AAAAAAAA AAAAAAAAAAAA AAAAAAAAA AAAAAAAAAAAA AAAAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                        </p>

                        <footer>
                            <p>Preço por Hora
                                <strong>R$ 2,50</strong>
                            </p>
                            <button type="button">
                                <img src={whatsappIcon} alt="whatsapp"/>
                                Entrar em contado
                            </button>
                        </footer>
               </article>
    );
}

export default TeacherItem;