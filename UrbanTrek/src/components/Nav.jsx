import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className='font-sans flex text-center content-between sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full'>
        <div className='h-10 w-10 self-center flex'>
          <img src='/public/circle.svg' className='ml-1' />
          <div className='text-2xl no-underline text-grey-darkest hover:text-blue-dark tracking-tight leading-none font-sans font-extrabold text-gray-700 self-center'>
           {/*   */}
            <Link to={`/`}>UrbanTrek</Link>
          </div>
        </div>
        <div className='self-center justify-end flex'>
          <div className='text-md no-underline text-gray-700 hover:text-blue-700 ml-2 px-1'>
            <Link to={`/signup`}>Sign up</Link>
          </div>
          <div className='text-md no-underline text-gray-700 hover:text-blue-700 ml-2 px-1'>
            <Link to={`/login`}>Log in</Link>
          </div>
          <div className='text-md no-underline text-gray-700 hover:text-blue-700 ml-2 px-1'>
            <Link to={`/favorites`}>Favorites</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
