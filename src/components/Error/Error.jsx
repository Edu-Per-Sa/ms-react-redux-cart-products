import Card from "../UI/Card";
import styles from './Error.module.css';

export default function Error({ message }) {
    return (
        <Card className={styles.error}>
            <h1> Error... </h1>
            <div>{message}</div>
        </Card>
    )
}