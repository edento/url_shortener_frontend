interface Props{
  children: string;
  onClick: () => void;
  disabled: boolean;
}

const Button = ( {children, onClick, disabled}:Props ) => {
    return <button disabled={disabled} onClick={onClick}>{children}</button>;
};

export default Button;
