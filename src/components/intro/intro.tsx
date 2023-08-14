import classNames from 'classnames';
import styles from './intro.module.scss';
import { Animation } from '../animation/animation';
import { Portfolio } from '../portfolio/portfolio';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';


export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {



    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.title}
                >
                   <b> Hein <span className={styles.title_color}>Htet</span></b>
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.subtitle}
                >
                    {' '}
                    <span className={styles.subtitle_color}> <b>Front-End Enchanter</b>  </span>with Code
                    and Creativity
                </motion.h3>

                <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5  }}
                    className={styles.loader}
                ></motion.span>
            </div>
            <p className={styles.p}>
                {' '}
                MMastering the Art of Designing Intuitive and Dynamic Web Interfaces for User Delight
            </p>

            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
            >
                <Link to={'/'} className='btn'>Portfolio</Link>
                <div className="arrow-wrapper">
                    <div className="arrow"></div>
                </div>
            </motion.button>


            <Animation />
            <Portfolio />
        </div>
    );
};
