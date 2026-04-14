import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIM_VARIANTS_SYSTEM } from './shared/animations/variants';

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation('common');
  const { i18n } = useTranslation();

  return (
    <>
      <AnimatePresence>
        <section id="center">
          <div className="hero">
            <img
              src={heroImg}
              className="base"
              width="170"
              height="179"
              alt=""
            />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
          </div>

          <motion.button
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')
            }
            variants={ANIM_VARIANTS_SYSTEM.buttons}
            whileHover="hover"
            whileTap="tap"
            exit="exit"
          >
            Mudar para {i18n.language === 'pt' ? 'Inglês' : 'Português'}
          </motion.button>

          <div>
            <h1>Get started</h1>
            <p>
              <Trans i18nKey="welcome.description">
                Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
              </Trans>
            </p>
          </div>

          <motion.button
            variants={ANIM_VARIANTS_SYSTEM.buttons}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            {t('welcome.counter', { count })}
          </motion.button>
        </section>
      </AnimatePresence>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>{t('sections.docs')}</h2>
          <p>{t('sections.docs_subtitle')}</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>{t('sections.connect')}</h2>
          <p>{t('sections.connect_subtitle')}</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg className="button-icon">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg className="button-icon">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg className="button-icon">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg className="button-icon">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
