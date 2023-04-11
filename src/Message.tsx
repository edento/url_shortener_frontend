//PascalCasing
function Message(){
    const name = '';
    if(name)
        return <h1>Hello {name}{name}</h1>;
    else
        return <h1>Hello stranger</h1>;
        
}

export default Message;