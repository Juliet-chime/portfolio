import "./index.css"


const Button = ({
    text,
    className,
    handleButtonClick,
    icon,
    btnstyle,
    type,
    disabled = false
  }) => {
    return (
      <button
        type={type}
        style={btnstyle}
        title={text}
        className={className || "Button_Wrap"}
        onClick={handleButtonClick}
        disabled={disabled}
      >
        {icon} {text}
      </button>
    );
  };

  export default Button