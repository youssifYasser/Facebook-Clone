import { query, orderBy, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';

const Posts = ({ posts }) => {
  const [value] = useCollection(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
  );

  return (
    <div>
      {value
        ? value?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              email={post.data().email}
              message={post.data().message}
              profileImage={post.data().profileImage}
              postImage={post.data().postImage}
              timestamp={post.data().timestamp}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              email={post.email}
              message={post.message}
              profileImage={post.profileImage}
              postImage={post.postImage}
              timestamp={post.timestamp}
            />
          ))}
    </div>
  );
};

export default Posts;
