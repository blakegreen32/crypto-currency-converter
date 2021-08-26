import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.css';

/* Component responsible for creating and rendering the Navigation bar with brand and links to pages */
const NavigationBar = () => {

  return(
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Crypto Currency Converter</Navbar.Brand>
    </Navbar>
  )
}

export default NavigationBar