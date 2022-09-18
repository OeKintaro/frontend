import React from 'react';
import './styles.css';

export default function Header(props){

    return(
        <header id="main-header">
            <h1>{props.title}</h1>
        </header>
    );
}