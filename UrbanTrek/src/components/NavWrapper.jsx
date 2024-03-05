import Nav from './Nav.jsx';
import { Outlet } from 'react-router-dom';
const NavWrapper = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};
export default NavWrapper;
