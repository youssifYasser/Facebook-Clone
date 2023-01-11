import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

const Feed = ({ posts }) => {
  return (
    <div className="flex flex-col flex-grow h-screen pb-32 pt-6 pr-2 sm:mr-4  overflow-y-scroll scrollbar-hide">
      <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
