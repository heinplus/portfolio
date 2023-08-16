import classNames from 'classnames';
import styles from './skill.module.scss';
import htmlImg from '../../assets/html.svg.png';
import cssImg from '../../assets/css.svg';

export interface SkillProps {
    className?: string;
}

export const Skill = ({ className }: SkillProps) => {
    return (
        <div className={classNames(styles.root)}>
            <div className={styles.box}>
                <p>I'm creating a dynamic and interactive website using HTML, CSS, and JavaScript, with smooth CSS animations. For the more complex parts, I'm harnessing the power of React for building efficient user interfaces. To enhance functionality, I'm incorporating some jQuery elements. The project is version-controlled using Git and hosted on GitHub. Additionally, I'm designing the user interface and prototypes in Figma to ensure a seamless user experience.</p>
                {/* <img src={htmlImg} alt="" className={styles.icon} />
                <img src={cssImg} className={styles.icon} /> */}
            </div>
            

        </div>
    );
};
