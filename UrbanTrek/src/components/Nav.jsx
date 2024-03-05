import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className='font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full'>
        <div className='mb-2 sm:mb-0 flex flex-row'>
          <div className='h-10 w-10 self-center mr-2'>
            <div>
              <a
                className='text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold'
              >             
                <Link to={`/`}>UrbanTrek</Link> 
              </a>
            </div>
          </div>
        </div>
        <div className='sm:mb-0 self-center'>
          <a
            className='text-md no-underline text-gray-600/75 hover:text-blue-700 ml-2 px-1'
          >
            <Link to={`/signup`}>Sign up</Link> 
          </a>
          <a
            className='text-md no-underline text-gray-600/75 hover:text-blue-700 ml-2 px-1'
          >
            <Link to={`/login`}>Log in</Link> 
          </a>
          <a
            className='text-md no-underline text-gray-600/75 hover:text-blue-700 ml-2 px-1'
          >
            <Link to={`/favorites`}>Favorites</Link> 
          </a>
        </div>
      </nav>
    </>
  );
};
export default Nav;
