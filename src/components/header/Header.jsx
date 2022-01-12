import styles from './Header.module.css'

function Header ({ children, image }) {
  return (
    <header 
      className={styles.header}
      style={{
        background: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className={styles.headerContent}>
        {children}
      </div>
    </header>
  )
}

Header.defaultProps = {
  image: './coffee1.jpg'
}

export default Header