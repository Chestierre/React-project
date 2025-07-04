// Challenge: Project Setup
import styles from './Challenge3.module.css';
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import { Fragment } from 'react'

function Challenge3(){
    return (
        <div className={styles.freshLayout}>
            <Navbar />
            <Main />
        </div>
    )
}

export default Challenge3;

