function Input (props) {
    return (
      <input {...props} className={"bg-[#1a1a1a] text-reddit_text p-2 border border-reddit_dark-brightest rounded-md block "+props.className} />
    );
  }
  
  export default Input;