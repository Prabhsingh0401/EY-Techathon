function Button(props) {
    let classNames = "border border-gray-300 rounded-full px-3 text-sm font-bold m-2  ";
    if (props.outline) {
      classNames += "text-gray-300 ";
    } else {
      classNames += "bg-gray-300 text-[#030303] ";
    }
    return (
      <button {...props} className={classNames + props.className} />
    );
  }
  
  export default Button;