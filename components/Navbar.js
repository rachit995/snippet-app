import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const Navbar = () => {
  const { user, isLoading } = useUser();
  return (
    <nav>
      <Link href="/">
        <a className="text-2xl mb-2 block flex justify-center text-purple-200 ">
          <span className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg> Snippets App
          </span>

        </a>
      </Link>
      <div className="space-x-3 m-x-auto mb-6 flex justify-center">
        {!isLoading && !user && (
          <Link href="/api/auth/login">
            <a className="text-purple-100 hover:underline">Login</a>
          </Link>
        )}
        {!isLoading && user && (
          <>
            <span className="text-purple-100">Hello {user.name}</span>
            <Link href="/api/auth/logout">
              <a className="text-purple-100 hover:underline">
                Logout
              </a>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
export default Navbar
