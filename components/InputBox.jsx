import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { VideoCameraIcon, CameraIcon } from '@heroicons/react/20/solid';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [postActive, setPostActive] = useState(false);

  const onFocus = () => setPostActive(true);

  const onBlur = () => setPostActive(false);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    try {
      await addDoc(collection(db, 'posts'), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        profileImage: session.user.image,
        timestamp: serverTimestamp(),
      }).then((document) => {
        if (imageToPost) {
          const storageRef = ref(storage, `posts/${document.id}`);
          uploadString(storageRef, imageToPost, 'data_url')
            .then((snapshot) => {
              getDownloadURL(ref(storage, snapshot.ref.fullPath)).then(
                (url) => {
                  updateDoc(doc(db, 'posts', document.id), { postImage: url });
                }
              );
            })
            .catch((err) => console.error(err));
          removeImage();
        }
      });
      inputRef.current.value = '';
    } catch (error) {
      console.log('Error adding Post => ', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl mt-6 p-1 sm:p-2 text-gray-500 shadow-md font-medium">
      <div className="flex items-center space-x-2 sm:space-x-4 p-2 sm:p-4">
        <Image
          src={session.user.image}
          alt="profile-pic"
          height={40}
          width={40}
          className="rounded-full"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`text-xs sm:text-sm md:text-base bg-gray-100 px-3 sm:px-5 h-10 sm:h-12 rounded-full flex-grow focus:outline-none `}
            type="text"
            placeholder={`What's on your mind, ${session.user.name.slice(
              0,
              session.user.name.search(' ')
            )}?`}
          />
          <input type="submit" value="Submit" hidden onClick={sendPost} />
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 hover:scale-105 transition-all duration-150 cursor-pointer"
          >
            <img
              src={imageToPost}
              alt="post-pic"
              className="object-contain h-8 sm:h-10"
            />

            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className={`flex justify-evenly p-3 border-t border-b`}>
        <div className="inputIcon">
          <VideoCameraIcon className="h-5 sm:h-6 lg:h-7 text-red-500" />
          <p className="text-xs sm:text-sm lg:text-base">Live Video</p>
        </div>

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-5 sm:h-6 lg:h-7 text-green-400" />
          <p className="text-xs sm:text-sm lg:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            accept="image/*"
            hidden
          />
        </div>

        <div className="inputIcon">
          <FaceSmileIcon className="h-5 sm:h-6 lg:h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm lg:text-base">Feeling/Activity</p>
        </div>
      </div>

      <div className="p-2 sm:p-4 flex lg:justify-center items-center">
        <button
          onClick={sendPost}
          className="bg-blue-500 w-full text-white py-1 sm:py-2 rounded-md active:bg-blue-400 transition-colors duration-150"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default InputBox;
