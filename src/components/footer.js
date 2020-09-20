import React from 'react';
import {css } from '@emotion/core';
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import Navegacion from './nav';

const EnlaceHome = styled(Link)`
    color:white;
    text-aling:center;
    text-decoration:none;
    margin-right: 7rem;
`


const Footer = ({title}) => {

    const year = new Date().getFullYear();

    return (
        <>
        <footer
        css={css`
            background-color:orange;
            padding:1rem;
        `}
       >
           <div
            css={css`
                max-width:1200px;
                margin:0 auto;
               

                @media(min-width:768px){
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                }
            `} 
           >
              <Navegacion/>
              <EnlaceHome to={'/'}>
                <h1>DiFuentes - HotelGatsby</h1>
              </EnlaceHome>
           </div>
          
       </footer>
       <p css={css`text-align:center;color:orange;background-color:white;font-size:15px; `}>{title},todos los derechos reservados <Link to={'https://github.com/difuentes'}>DiFuentes</Link> -{year} &copy; </p>
       </>
      );
}
 
export default Footer;