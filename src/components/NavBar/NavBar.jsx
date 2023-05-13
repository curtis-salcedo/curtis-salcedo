import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="#resume" smooth={true} duration={0}>Scroll to Section</Link>
      &nbsp; | &nbsp;
      <Link to="/">Portfolio</Link>
    </nav>
  )
}