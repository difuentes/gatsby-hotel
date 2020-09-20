import React from 'react';
import Navegacion from './nav';
import {css } from '@emotion/core';
import styled from '@emotion/styled'
import {Link} from 'gatsby'


const EnlaceHome = styled(Link)`
    color:white;
    text-aling:center;
    text-decoration:none
`


const Header = () => {
    return ( 
       <header
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
              <EnlaceHome to={'/'}>
                <h1>DiFuentes - HotelGatsby</h1>
              </EnlaceHome>
              <Navegacion/>
           </div>
       </header>
     );
}
 
export default Header;
