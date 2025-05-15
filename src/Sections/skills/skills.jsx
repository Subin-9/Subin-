import styles from './skillsStyles.module.css';
import React from '../../assets/react.png';
import HTML from '../../assets/Html.png';
import Python from '../../assets/python.png';
import CSS from '../../assets/Css.png';
import Cplusplus from '../../assets/C++.png';
import C from '../../assets/C.png';
import Git from '../../assets/Git.png';
import { useTheme } from '../../common/ThemeContext';
function Skills(){
     const {theme} = useTheme();
     return(
          <section id='skills' classname={styles.container}>
               <div className={styles.info}>
               <h1> Skills </h1>
               </div>
               <div className={styles.logo}>
                    <img 
                         src={HTML}
                         alt="html logo"
                    />

                    <img
                         src={CSS}
                         alt="CSS logo"
                    />

                    <img
                         src={React}
                         alt="reactlogo"
                    />
                    <hr />

                    <img
                         src={Python}
                         alt="Python logo"
                    />

                    <img
                         src={Cplusplus}
                         alt="C++ logo"
                    />

                    <img

                         src={C}
                         alt="C logo"
                    />
                         <hr />
                    <img
                         src={Git}
                         alt="Git logo"
                    />            
               </div>

          </section>
     );  
};

export default Skills;


