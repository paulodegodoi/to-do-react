import styles from '../styles/Header.module.scss'
import Logo from '../assets/Logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
    </header>
  )
}
