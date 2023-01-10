import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { useSession } from 'next-auth/react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const Home = ({ posts }) => {
  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="This a facebook clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* Main  */}
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const postsRef = collection(db, 'posts');
  const q = query(postsRef, orderBy('timestamp', 'desc'));
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    timestamp: null,
  }));

  return {
    props: {
      posts: posts,
    },
  };
};

export default Home;
