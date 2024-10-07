const InnerCard = ({ imageUrl, title }) => {
    return (
      <div className="bg-white w-[322px] h-[300px] rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover" 
        />
      </div>
    );
  };
  
  export default InnerCard;
  