// Challenge: Project Setup
import styles from './Challenge3.module.css';
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import { Fragment } from 'react'
import { useEffect } from 'react';

function Challenge3(){

    useEffect(() => {

        const root = document.getElementById('root');
        const body = document.body

        body.style.margin = 'unset';
        body.style.background = 'unset';


        if (root){
            root.style.padding = "unset"
            root.style.maxWidth = 'unset';
            root.style.margin = 'unset';
            root.style.textAlign = 'unset' 
        }

        return () => {
        body.style.margin = '';
        body.style.background = '';

        if (root){
            root.style.padding = '';
            root.style.maxWidth = '';
            root.style.margin = ''; 
            root.style.textAlign = '' 

        }

        }
    }, [])

    return (
        <div className={styles.freshLayout}>
            <Navbar />
            <Main />
        </div>
    )
}

export default Challenge3;

