import useIncrement from '../hooks/useIncrement';

export default function Counter1() {
    const [count, setCount] = useIncrement(1);

    return (
        <>
            <h3>Count: {count}</h3>
            <button onClick={setCount}>Add 1</button>
        </>
    )
}