import styles from "./styles.module.scss";
import { InputProps } from "./input.props";

export const Input = ({ ...rest }: InputProps) => {
    return <input className={styles.input} {...rest} />;
};
