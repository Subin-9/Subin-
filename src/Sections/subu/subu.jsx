import styles from './subuStyles.module.css';
import myPhoto from '../../assets/subu-img.png';
import sun from'../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import twitterlight from'../../assets/twitter-light.svg';
import twitterdark from '../../assets/twitter-dark.svg';
import linkedinlight from'../../assets/linkedin-light.svg';
import linkedindark from '../../assets/linkedin-dark.svg';
import githublight from'../../assets/github-light.svg';
import githubdark from '../../assets/github-dark.svg';
import Resume from'../../assets/Subin Ghimire Resume Tech.pdf';
import { useTheme } from '../../common/ThemeContext';
function subu() {
  const {theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon; 
  const twittericon = theme === 'light' ? twitterlight : twitterdark;
  const linkedinicon = theme === 'light' ? linkedinlight : linkedindark;
  const githubicon = theme === 'light' ? githublight : githubdark;
     const handleMouseMove = (e) => {
          const x = e.nativeEvent.offsetX;
          const y = e.nativeEvent.offsetY;
          const centerX = e.target.offsetWidth / 2;
          const centerY = e.target.offsetHeight / 2;
          e.currentTarget.style.transform = `
            rotateY(${(x - centerX) / 20}deg)
            rotateX(${(centerY - y) / 20}deg)
          `;
        };
        
        const handleMouseLeave = (e) => {
          e.currentTarget.style.transform = '';
        };   
  return (
  <section id="subu" className={styles.Container}>
     <div 
             className={styles.photoContainer}
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
           >
             <img
               src={myPhoto}
               alt="Profile"
               className={styles.profilePhoto}
             />
             </div>
            <div className={styles.colormodecontainer}>
             <img 
              src = {themeIcon}
              alt ="color mode icon"
              className={styles.colormode}
              onClick={toggleTheme}
             />
      </div>
           <div
            className = {styles.info}>
              <h1>Subin <br />
              Ghimire
              </h1>
              <h2>Cloud Architecture and Big Data Enthusiast</h2>
              <span>
                <a 
                href="https://twitter.com/" 
                target="_blank"
                >
                <img 
                src={twittericon}
                alt="Twitter logo"
                /> 
                </a>

                <a 
                href="https://github.com/Subin-9" 
                target="_blank"
                >
                <img 
                src={githubicon}
                alt="Github logo"
                /> 
                </a>

                <a 
                href="https://www.linkedin.com/in/subin-ghimire-856523255/" 
                target="_blank"
                >
                <img 
                src={linkedinicon}
                alt=" Linkedin logo"
                /> 
                </a>
              </span>
              <p className={styles.description}>
              Driven by a passion for diving into the world of data science, where algorithms come to life to uncover insights and create meaningful visualizations.
              </p>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
              <button>
               Resume
              </button>
              </a>
              
           </div>
    </section>
  );
};

export default subu;
