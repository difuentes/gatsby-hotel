import React from 'react';
import Header from './header'
import Helmet from 'react-helmet';
import {Global,css} from '@emotion/core';

const Layout = (props) => {
    return (
        
        <>
            <Global
                styles={css`
                    html{
                       font-size: 62.5%;
                    }
                    body{
                        font-size: 16 px;
                        font-size: 1.6 rem;
                        line-height:1.5 
                    }
                    h1,h2,h3
                    {
                        margin:0;
                        line-height:1.5 
                    }
                    h1,h2{
                        font-family: 'Roboto' ,sefif
                    }
                    h1{
                        font-family: 'PT Sans' ,sans-sefif
                    }
                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                    }
                `}
            
            />
            <Helmet>
                <title>DiFuentes - Gastby Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link  href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {props.children}
        </>
      );
}
 
export default Layout;
