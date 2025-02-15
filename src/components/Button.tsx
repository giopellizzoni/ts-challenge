
import { Link } from 'react-router-dom'

type LinkTypeProps = {
  to: string
  text: string
}

type ButtonTypeProps = {
  text: string  
}




const Button = (props: ButtonTypeProps | LinkTypeProps) => {

  if ('to' in props) {
    return (<Link to={props.to} >{props.text}</Link>)
  }


  return (
    <div>Button</div>
  )
}

export default Button