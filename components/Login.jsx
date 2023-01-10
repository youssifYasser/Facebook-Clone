import Image from 'next/image';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="grid place-items-center my-10 space-y-10">
      <Image
        src={'https://links.papareact.com/t4i'}
        width={400}
        height={400}
        alt="facebook-logo"
        className="object-contain"
      />
      <h1
        onClick={() => signIn()}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer active:bg-blue-600 transition-colors duration-200 ease-in-out"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
