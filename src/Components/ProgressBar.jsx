

const ProgressBar = ({ progress ,color }) => {
    const colorStyle = 
    color === "blue" 
    ? 'bg-blue-500'
    : color === "purple"
    ? 'bg-purple-600'
    : 'bg-red-500';
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
      <div
        className={`${colorStyle}   h-full rounded-full`}
        style={{ width: `${progress}%` }} // Dynamically set width based on progress prop
      />
    </div>
  );
};

export default ProgressBar;
