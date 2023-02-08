import Head from 'next/head'

import { getProviders, useSession } from 'next-auth/react'

import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home = ({ providers, posts }) => {
  const { status, data: session } = useSession()

  console.log('loading=> ', status)
  if (status === 'loading') {
    return <Login loading />
  }
  if (!session) {
    return <Login providers={providers} />
  }

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook Clone</title>
        <meta name='description' content='This a facebook clone' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header */}
      <Header />

      {/* Main  */}
      <main className='flex'>
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const providers = await getProviders()

  const postsRef = collection(db, 'posts')
  const q = query(postsRef, orderBy('timestamp', 'desc'))
  const querySnapshot = await getDocs(q)
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    timestamp: null,
  }))

  return {
    props: {
      providers,
      posts,
    },
  }
}

export default Home
