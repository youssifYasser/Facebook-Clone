import Image from 'next/image';

const Contact = ({ name, src }) => {
  return (
    <div className="flex items-center space-x-3 p-2 mb-2 hover:bg-gray-200 rounded-xl cursor-pointer relative">
      <div className="h-12 w-12 relative">
        <Image
          className="rounded-full object-cover"
          src={src}
          alt="profile-pic"
          fill
        />
      </div>
      <p>{name}</p>
      <div className="absolute bg-green-400 h-3 w-3 rounded-full bottom-2 left-7" />
    </div>
  );
};

export default Contact;
