import {useState} from 'react';

export default function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + addAmount);
    }

    return [count, increase];
}