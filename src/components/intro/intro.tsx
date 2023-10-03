import classNames from 'classnames';
import styles from './intro.module.scss';
import { Animation } from '../animation/animation';
import { Portfolio } from '../portfolio/portfolio';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import { Link, Element } from 'react-scroll';

import { animateScroll as scroll } from 'react-scroll';

import { useState, useRef } from 'react';
import { Skill } from '../skill/skill';

export interface IntroProps {
    className?: string;
}

export const Intro = ({ className }: IntroProps) => {
    const handleButtonClick = () => {
        // Redirect to another webpage when the button is clicked
        window.location.href = 'https://www.apple.com/'; // Replace with your desired URL
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.title}
                >
                    <b>
                        {' '}
                        Hein <span className={styles.title_color}>Htet</span>
                    </b>
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.subtitle}
                >
                    {' '}
                    <span className={styles.subtitle_color}>
                        {' '}
                        <b>Front-End Developer </b>
                    </span>
                    with Code and Creativity
                </motion.h3>

                <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className={styles.loader}
                ></motion.span>
            </div>

            <Link
                to="portfolio"
                smooth={true}
                offset={-70} // Offset for the sticky header or other elements
                duration={10} // Duration of the scroll animation in milliseconds
                spy={true}
                activeClass="active"
            >
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className={styles.btnarrow}
                >
                    Portfolio
                    <div className="arrow-wrapper">
                        <div className="arrow"></div>
                    </div>
                </motion.button>
            </Link>

            <Animation />
            {/* <Portfolio /> */}
        </div>
    );
};
