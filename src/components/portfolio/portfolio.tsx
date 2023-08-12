import classNames from 'classnames';
import styles from './portfolio.module.scss';
import website_1 from '../../assets/supercell.png';
import website_2 from '../../assets/website-2.jpg';
import website_3 from '../../assets/website-3.jpg';
import website_4 from '../../assets/website-4.png';
import { motion } from 'framer-motion';

import fbIcon from '../../assets/fb.svg';
import tiktokIcon from '../../assets/tiktokicon.svg';
import githubIcon from '../../assets/githubicon.svg';
import gmailIcon from '../../assets/gmailicon.svg';

export interface PortfolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portfolio = ({ className }: PortfolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div id='port' className={styles['portfolio-wrapper']}>
                
                <motion.h3 className={styles.h3}>My Portfolio</motion.h3>

                <motion.span
                 className={styles.loader}
                ></motion.span>

                <p className={styles.p}>
                    I am a web developer with a passion for creating beautiful and functional
                    websites. I have a strong understanding of
                    <span className={styles.span}> HTML, CSS, JavaScript </span>, and PHP, and I am
                    proficient in a variety of back-end frameworks. I am also a
                    <span className={styles.span}> creative thinker </span> and I am always looking
                    for new ways to solve problems.
                </p>
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                <div className={styles['grid-item']}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['grid-img']}
                    />
                    <div className={styles['visit-portfolio']}>
                        <h4 className={styles.h4}>Supercell</h4>
                        <a href="https://www.apple.com/">
                            <button>Demo</button>
                        </a>
                    </div>
                </div>

                <div className={styles['grid-item']}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['grid-img']}
                    />
                    <div className={styles['visit-portfolio']}>
                        <h4 className={styles.h4}>Project1</h4>
                        <a href="https://www.apple.com/">
                            <button>Demo</button>
                        </a>
                    </div>
                </div>

                <div className={styles['grid-item']}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['grid-img']}
                    />
                    <div className={styles['visit-portfolio']}>
                        <h4 className={styles.h4}>Project1</h4>
                        <a href="https://www.apple.com/">
                            <button>Demo</button>
                        </a>
                    </div>
                </div>

                <div className={styles['grid-item']}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['grid-img']}
                    />
                    <div className={styles['visit-portfolio']}>
                        <h4 className={styles.h4}>Project1</h4>
                        <a href="https://www.apple.com/">
                            <button>Demo</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* end grid  */}

            {/* social */}
            <div className={styles.socials}>
                <div className={styles.card}>
                    {/* <span>Social</span> */}
                    <a className={styles.social_link} href="https://www.facebook.com/GloriaXenon/">
                        <img src={fbIcon} alt="" />
                    </a>
                    <a className={styles.social_link} href="#">
                        <img src={tiktokIcon} alt="" />
                    </a>
                    <a className={styles.social_link} href="#">
                        <img src={githubIcon} alt="" />
                    </a>
                    <a className={styles.social_link} href="mailto:heinhtetaung.hha.hh@gmail.com">
                        <img src={gmailIcon} alt="" />
                    </a>
                </div>
            </div>
            {/* end social */}
        </div>
    );
};
