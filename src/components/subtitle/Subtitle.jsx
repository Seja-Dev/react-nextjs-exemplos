/*
  Exemplo de componente react com props
*/


function Subtitle (props) {
  return (
    <h4>
      {props.text}
    </h4>
  )
}

Subtitle.defaultProps = {
  text: 'Default'
}

export default Subtitle