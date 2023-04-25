import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';

function App() {
    
    // states for changes in the long url the user is typing into the box (ex. www.google.com)
    const [longUrl, setLongUrl] = useState('');
    const [isLongUrlValid, setIsLongUrlValid] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleClick = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: longUrl }),
        };

        fetch(import.meta.env.VITE_BACKEND_URL+'/create', requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                const shortUrlComplete = `${import.meta.env.VITE_BACKEND_URL}/${responseJson.short}`;
                setShortenedUrl(shortUrlComplete);
                setIsTyping(false);
            })
            .catch(() => {
                console.log('error!');
            });
    };

    return (
        <div>
            <Input
                setIsLongUrlValid={setIsLongUrlValid}
                setLongUrl={setLongUrl}
                setIsTyping={setIsTyping}
            ></Input>
            {isTyping && (
                <Button disabled={!isLongUrlValid} onClick={handleClick}>
          SHORTEN
                </Button>
            )}
            {!isTyping && <p>{shortenedUrl}</p>}
        </div>
    );
}

export default App;
