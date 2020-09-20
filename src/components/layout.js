import React from 'react';
import Header from './header'
import Helmet from 'react-helmet';
import {Global,css} from '@emotion/core';
import Footer from './footer';
import UseSeo from '../hook/use-seo';

const Layout = (props) => {

     const seo = UseSeo();

     const {siteName ,fallbackSeo :{description,title}} = seo;

     console.log(seo);
     
    return (
        
        <>
            <Global
                styles={css`
                    html{
                       font-size: 62.5%;
                       box-sizing:border-box;
                    }
                    *,*:before,*after{
                        box-sizing:inherit;
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
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link  href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {props.children}
            <Footer  title={title}/>
        </>
      );
}
 
export default Layout;
