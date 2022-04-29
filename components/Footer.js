import styles from '../styles/Home.module.css';

export function Footer() {

    return (
        <footer className={styles.footer}>
        <a
          href="https://www.ondeck.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
              <svg xmlns="http://www.w3.org/2000/svg" width={72} height={16} viewBox="0 0 75 16" aria-hidden="true"> <path fill="currentColor" d="M12 10.3c0 3.4-2.5 5.6-6 5.6-3.3 0-5.9-2.2-5.9-5.6 0-3.4 2.6-5.6 6-5.6s6 2.2 6 5.6zM6 13c1.7 0 2.8-1.2 2.8-2.8S7.7 7.6 6 7.6a2.7 2.7 0 00-2.7 2.7c0 1.6 1 2.8 2.7 2.8zM17 15.7h-3.2V5h3.2v1.2a4.4 4.4 0 013.3-1.5c2.5 0 3.9 1.7 3.9 4.5v6.4h-3.2V9.7c0-1.4-.8-2.2-2-2.2-1.3 0-2 .8-2 2.2v6z" ></path> <path fill="currentColor" d="M34.2 14.4c-.7 1-1.9 1.5-3.4 1.5-3.1 0-5-2.4-5-5.6 0-3.1 2-5.6 5.1-5.6A4 4 0 0134.2 6v-6h3.2v15.5h-3.2v-1.2zm-2.6-1.3c1.6 0 2.7-1.2 2.7-2.8 0-1.6-1-2.8-2.6-2.8S29 8.7 29 10.3c0 1.6 1 2.8 2.6 2.8zm7.4-2.8c0-3.4 2.5-5.6 5.8-5.6 3.2 0 5.6 2.3 5.6 5.4v1h-8c.2 1.3 1.2 2.1 2.7 2.1 1 0 1.8-.4 2.5-1.2l2 2a6 6 0 01-4.7 2c-3.4 0-5.9-2.3-5.9-5.7zm3.4-1.2H47c-.3-1-1.2-1.7-2.4-1.7s-2 .7-2.3 1.7zm15.1 4c1 0 1.9-.6 2.5-1.4l2.2 2a5.8 5.8 0 01-4.7 2.2c-3.4 0-5.9-2.2-5.9-5.6 0-3.4 2.5-5.6 5.9-5.6 1.9 0 3.5.8 4.7 2.2L60 9a3 3 0 00-2.5-1.3C56 7.6 55 8.7 55 10.3s1 2.7 2.6 2.7zM68 11l-1.3.8v3.8h-3.2V0h3.2v8.5L73.4 4h.1v3.6l-2.8 1.9 3.5 6v.2h-3.6z"></path> </svg>
          </span>
        </a>
      </footer>
    )
}
