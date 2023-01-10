import Image from 'next/image';
import React from 'react';

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center justify-start space-x-3 px-3 py-3 cursor-pointer hover:bg-gray-200 rounded-xl group">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          alt="profile-pic"
          className="rounded-full object-cover"
        />
      )}
      {Icon && (
        <Icon className="h-7 md:h-8 text-blue-500 group-hover:text-blue-700" />
      )}
      <p className="hidden sm:inline-flex whitespace-nowrap font-medium pr-1">
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
