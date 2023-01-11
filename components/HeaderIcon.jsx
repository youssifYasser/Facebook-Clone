const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center cursor-pointer rounded-xl p-1 sm:p-2  md:px-5 lg:px-8 xl:px-10 md:h-12 md:hover:bg-gray-100  md:active:border-b-2 md:active:border-blue-500  transition-all duration-100 ease-in-out group">
      <Icon
        className={`h-5 md:h-6 group-hover:text-blue-700 text-gray-500 mx-auto text-center ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
