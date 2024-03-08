import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {


    return (
      <div className='container-background-landing'>
         <button className='button-iniciar'><Link to="/home" >Inicio</Link></button>
      </div>
    )
  }
  
  export default Landing