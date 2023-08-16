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
                <p>Test..</p>
            </div>
            

        </div>
    );
};
