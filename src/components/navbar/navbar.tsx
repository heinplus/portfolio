import React from 'react';
import { useState, useEffect, useContext } from 'react';

import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/moonnn.jpg';
import { motion } from 'framer-motion';


export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

    const [scrollToTop, setScrollToTop] = useState(false);

    // Add a useEffect hook to handle scrolling when scrollToTop changes
    useEffect(() => {
      if (scrollToTop) {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // After scrolling, reset the scrollToTop state
        setScrollToTop(false);
      }
    }, [scrollToTop]);
  


    return (
        <div className={classNames(styles.root, className, styles.nav)}>
            <Link to='/' onClick={() => setScrollToTop(true)}>
                <motion.img
                    src={Logo}
                    alt="luffyMoonWalk"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ delay: 0.25 }}
                    className={styles.logo}
                />
            </Link>
            <ul className={styles.links}>
                <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ delay: 0.25 }}
                    className={styles.link}
                >
                    <Link to='/' className={styles.smlink}>
                        Portfolio
                    </Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ delay: 0.25 }}
                    className={styles.link}
                >
                    {/* <Link to={'/contact'}>
                        <small>Contact</small>
                    </Link> */}
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ delay: 0.25 }}
                    className={styles.link}
                >
                    <Link to='/skill' className={styles.smlink}>
                        Skills
                    </Link>
                </motion.li>
            </ul>
        </div>
    );
};
