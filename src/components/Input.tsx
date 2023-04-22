function isUrlValid(url: string): boolean{
    const regEx =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  
    return !!url.match(regEx);
}
  
// properies for the Input component
interface Props{
    setIsLongUrlValid: (valid: boolean) => void;
    setLongUrl: (longUrl: string)=>void;
    setIsTyping: (isTyping: boolean)=>void;
}
  
const Input = (props: Props) => {
    function handleChange(value: string) {
        props.setIsTyping(true);
        if (isUrlValid(value)) {
            props.setIsLongUrlValid(true);
            props.setLongUrl(value);
        } else {
            props.setIsLongUrlValid(false);
        }
    }

    return (
        <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
            placeholder="www.google.com"
            
            onChange={(e) => {
                handleChange(e.target.value);
            }}
        />
    );
};

export default Input;