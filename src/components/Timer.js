import {useState, useEffect} from 'react';

function Timer() {
    const [second, setSecond] = useState(10);

    useEffect(() => {

        if (second <= 0) {
            alert("Time's up!");
            return;
        }

        let timeoutId = setTimeout(() => {
            setSecond(second - 1);
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [second])

    return (
        <h3>Count down from {second}</h3>
    );
}

export default Timer;