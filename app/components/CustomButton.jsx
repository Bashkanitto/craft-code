export const CustomButton = ({ children }) => {
  return (
    <button className="btn bg-green text-white text-xs rounded-3xl w-40 h-10 ml-1 flex items-center hover:bg-transparent hover:border hover:border-green duration-100 justify-center">
      {children}
    </button>
  );
};
