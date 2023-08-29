import { A } from '@solidjs/router';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header class={styles.header}>
      <nav>
        <ul>
          <li><A href="/">Todo App</A></li>
          <li><A href="/form">Form App</A></li>
        </ul>
      </nav>
    </header>
  );
};