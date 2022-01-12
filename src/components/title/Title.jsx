import styles from './Title.module.css'

/*
  Exemplo de componente react com filho e estilizado
*/

function Title (props) {
  return (
    <h1 className={styles.title}>
      {props.children}
    </h1>
  )
}

Title.defaultProps = {
  children: 'Default'
}

export default Title