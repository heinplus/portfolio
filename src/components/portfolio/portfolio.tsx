import classNames from 'classnames';
import styles from './portfolio.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';



import fbIcon from '../../assets/facebookiconn.svg';
import gmailIcon from '../../assets/gm.png';
import instaIcon from '../../assets/ins.png';
import telegramIcon from '../../assets/tele.png';


export interface PortfolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portfolio = ({ className }: PortfolioProps) => {
    return (
        <div id="portfolio" className={classNames(styles.root, className)}>

            <div id='section1' className={styles['portfolio-wrapper']}>

                <motion.h3 className={styles.h3}>Projects</motion.h3>

                <p className={styles.p}>Presenting my projects — web creations that tell stories through clean and user-friendly interfaces</p>
            </div>

            <div className={styles.grid}>
                <div className={styles['grid-item']}>
                    <img
                        src="https://videogames.si.com/.image/t_share/MTkzNDgzNjk3OTgxMjM2NDUy/fortnite-skins.jpg"
                        alt=""
                        className={styles['grid-img']}
                    />
                    <div className={styles['visit-portfolio']}>
                        <h4 className={styles.h4}>Fortnite</h4>
                        <a href="/">
                            <button className={styles.btnn}><span className={styles.demo}>Demo</span></button>
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
                        <h4 className={styles.h4}>Supercell</h4>
                        <a href="/">
                            <button className={styles.btnn}><span className={styles.demo}>Demo</span></button>
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
                        <h4 className={styles.h4}>Valorant</h4>
                        <a href="/">
                            <button className={styles.btnn}><span className={styles.demo}>Demo</span></button>
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
                        <h4 className={styles.h4}>Valorant</h4>
                        <a href="/">
                            <button className={styles.btnn}><span className={styles.demo}>Demo</span></button>
                        </a>
                    </div>
                </div>


                <div className={styles['grid-item']}>
                    <img
                        src="https://videogames.si.com/.image/t_share/MTkzNDgzNjk3OTgxMjM2NDUy/fortnite-skins.jpg"
                        alt=""
                        className={styles['grid-img']}
                    />
                    <div className={styles['visit-portfolio']}>
                        <h4 className={styles.h4}>Fortnite</h4>
                        <a href="/">
                            <button className={styles.btnn}><span className={styles.demo}>Demo</span></button>
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
                        <h4 className={styles.h4}>Supercell</h4>
                        <a href="/">
                            <button className={styles.btnn}><span className={styles.demo}>Demo</span></button>
                        </a>
                    </div>
                </div>

            </div>

            <hr></hr>

            <div className={styles.socials} id='port'>
                <h2 >Get In Touch</h2>

                <p>I'm  currently looking for opportunities. Whether it's a Full-time Job or a Freelance work.
                    <br />Send me a message , I'll try to get back to you as soon as possible.</p>

                <div className={styles.card}>
                    {/* <span>Social</span> */}
                    <a className={styles.social_link} href="https://www.facebook.com/GloriaXenon/">
                        <img src={fbIcon} alt="" />
                    </a>
                    <a className={styles.social_link} href="https://t.me/+959972997270">
                        <img src={telegramIcon} alt="" />
                    </a>
                    <a className={styles.social_link} href="<3, [8/16/2023 3:12 PM]Hein Htet, [8/16/2023 3:15 PM]https://instagram.com/heinhtet.ie?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
                        <img src={instaIcon} alt="" />
                    </a>
                    <a className={styles.social_link} href="mailto:heinhtetaung.hha.hh@gmail.com">
                        <img src={gmailIcon} alt="" />
                    </a>
                </div>
                <div className={styles.loader}></div>
            </div>


            
            <div className={styles['footer']}>
                <div className={styles['footer-text']}>
                    <img src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6e95cbcbb99_planet-earth.png"
                        className={styles['earth']} alt=""/>
                    <img src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a60a31bcbbdf_space-men.png"
                        className={styles['space-men']} alt=""/>

                    <h5 className="heading-2">Have an idea?</h5>

                    <h2 className="heading-3">Let’s talk about it</h2>
                    
                    <div className={styles['mt-16']}>

                    </div>
                </div>
            </div>


            <div className={styles['h']}>

            </div>


        </div>
    );
};
