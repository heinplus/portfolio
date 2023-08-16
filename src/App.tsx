import styles from './App.module.scss';

import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Skill } from './components/skill/skill';
import { Home } from './components/home/home';


function App() {

    return (
        <div className={styles.App}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skill" element={<Skill />} />
            </Routes>
        </div>
    );
}   

export default App;
