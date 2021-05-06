import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { FiCode } from 'react-icons/fi'

const Navbar = () => {
  const { user, isLoading } = useUser();
  return (
    <nav>
      <Link href="/">
        <a className="text-2xl mb-2 block flex justify-center text-purple-200 ">
          <span className='flex items-center'>
            <FiCode className='mx-2' /> Snippets App
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
