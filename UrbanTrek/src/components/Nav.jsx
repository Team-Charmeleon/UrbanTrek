const Nav = () => {
  return (
    <>
      <nav className='font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full'>
        <div className='mb-2 sm:mb-0 flex flex-row'>
          <div className='h-10 w-10 self-center mr-2'>
            <div>
              <a
                href='/'
                className='text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold'
              >
                UrbanTrek
              </a>
            </div>
          </div>
        </div>
        <div className='sm:mb-0 self-center'>
          <a
            href='#'
            className='text-md no-underline text-gray-600/75 hover:text-blue-700 ml-2 px-1'
          >
            Log in
          </a>
          <a
            href='#'
            className='text-md no-underline text-gray-600/75 hover:text-blue-700 ml-2 px-1'
          >
            Sign up
          </a>
          <a
            href='/favorites'
            className='text-md no-underline text-gray-600/75 hover:text-blue-700 ml-2 px-1'
          >
            Favorites
          </a>
        </div>
      </nav>
    </>
  );
};
export default Nav;
