// import classNames from 'classnames';
// import styles from './contact.module.scss';
// import { useState } from 'react';
// import formAnimation from '../../assets/contact.json';
// import Lottie from 'lottie-react';

// export interface ContactProps {
//     className?: string;
// }

// /**
//  * This component was created using Codux's Default new component template.
//  * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
//  */
// export const Contact = ({ className }: ContactProps) => {
//     const [query, setQuery] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const [submitted, setSubmitted] = useState(false);

//     const handleParam = () => (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setQuery((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };


//     const formSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData()
//         Object.entries(query).forEach(([key,value])=> {
//             formData.append(key,value);
//         });
    
//     // const submitForm = await fetch()
//     }

//     return (
//         <div className={classNames(styles.root, className)}>
//             <h2>Get in touch🦠</h2>
//             <form className={styles.form}>
//                 <label className={styles.label}>Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     required
//                     value={query.name}
//                     onChange={handleParam()}
//                     className={styles.input}
//                 />
//                 <label className={styles.email}>Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     required
//                     value={query.email}
//                     onChange={handleParam()}
//                     className={styles.input}
//                 />
//                 <label className={styles.message}>Message</label>
//                 <textarea
//                     name="message"
//                     required
//                     className={classNames('form-control', styles.input)}
//                     value={query.message}
//                     onChange={handleParam()}
//                 ></textarea>
//                 <button type="submit" className={styles.submit}>
//                     Send
//                 </button>
//             </form>
//         </div>
//     );
// };
