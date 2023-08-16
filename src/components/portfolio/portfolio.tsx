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
import telegramIcon from '../../assets/telegramicon.svg';


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
                
                <motion.h3 className={styles.h3}>My Projects</motion.h3>

    

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
                        src="https://videogames.si.com/.image/t_share/MTkzNDgzNjk3OTgxMjM2NDUy/fortnite-skins.jpg"
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
                        src="https://assetsio.reedpopcdn.com/games-of-the-decade-clash-royale-less-a-game-more-of-a-place-1574524324191.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
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
                        src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc04e4637524166dc/621853fd6be1e66143a66db2/022822_TakeoverCap_Banner.jpg?auto=webp&disable=upscale&height=549"
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

                {/* <div className={styles['grid-item']}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles['grid-img']}
                    />
                    <div className={styles['visit-portfolio']}>
                        <h4 className={styles.h4}>Project1</h4>
                        <a href="https://supercell.com/en/">
                            <button>Demo</button>
                        </a>
                    </div>
                </div> */}
            </div>
            {/* end grid  */}

                <div className={styles.loader}></div>

            {/* social */}            
            <div className={styles.socials}>
                <h2>Get In Touch</h2>

                <p>I'm currently looking for opportunities. Whether its a Full-time Job or a Freelance work. Send me a message , I'll try to get back to you as soon as possible.</p>

                <div className={styles.card}>
                    {/* <span>Social</span> */}
                    <a className={styles.social_link} href="https://www.facebook.com/GloriaXenon/">
                        <img src={fbIcon} alt="" />
                    </a>
                    <a className={styles.social_link} href="#">
                        <img src={telegramIcon} alt="" />
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
