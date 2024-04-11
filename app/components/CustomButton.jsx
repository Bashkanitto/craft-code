export const CustomButton = ({ children }) => {
  return (
    <button className="btn bg-violet-500 text-white text-xs rounded-3xl w-40 h-10 ml-1 flex items-center hover:bg-transparent border border-violet-500 duration-100 justify-center">
      {children}
    </button>
  );
};
