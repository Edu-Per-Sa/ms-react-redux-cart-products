import Card from "../UI/Card";


export default function Error({ message }) {
    return (
        <Card>
            <h1> Error... </h1>
            <div>{message}</div>
        </Card>
    )
}