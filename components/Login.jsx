import Image from 'next/image'
import { signIn } from 'next-auth/react'
import ClipLoader from 'react-spinners/ClipLoader'

const Login = ({ providers, loading }) => {
  return (
    <div className='grid place-items-center my-10 space-y-10'>
      <Image
        src={'https://links.papareact.com/t4i'}
        width={400}
        height={400}
        alt='facebook-logo'
        loading='eager'
        className='object-contain'
      />
      {loading && (
        <ClipLoader
          color='#1876f1'
          loading={loading}
          size={80}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      )}
      {providers &&
        Object.values(providers).map((provider) => (
          <h1
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className='py-5 px-7 bg-blue-500 rounded-full text-white text-center cursor-pointer active:bg-blue-600 transition-colors duration-200 ease-in-out'
          >
            Sign in with {provider.name}
          </h1>
        ))}
    </div>
  )
}

export default Login
