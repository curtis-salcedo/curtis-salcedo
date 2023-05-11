import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/">Resume</Link>
      &nbsp; | &nbsp;
      <Link to="/">Portfolio</Link>
    </nav>
  )
}