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
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const rootClassName = classNames(styles.root, className, {
        [styles.scrolled]: isScrolled,
    });

    return (
        <div className={classNames(styles.root, className, styles.nav, rootClassName)}>
            <Link to={'#'}>
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
                    <Link to={'/'}>
                        <small>Portfolio</small>
                    </Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ delay: 0.25 }}
                    className={styles.link}
                >
                    <Link to={'/'}>
                        <small>Contact</small>
                    </Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ delay: 0.25 }}
                    className={styles.link}
                >
                    <Link to={'/'}>
                        <small>Skills</small>
                    </Link>
                </motion.li>
            </ul>
        </div>
    );
};
