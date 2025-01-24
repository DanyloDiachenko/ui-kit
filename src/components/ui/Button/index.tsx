import { ButtonProps } from "./button.props";
import styles from "./styles.module.scss";

export const Button = ({ children, appearance, ...rest }: ButtonProps) => {
    switch (appearance) {
        case "gray": {
            return (
                <button className={`${styles.button} ${styles.gray}`} {...rest}>
                    {children}
                </button>
            );
        }
        case "purple": {
            return (
                <button
                    className={`${styles.button} ${styles.purple}`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
        case "red": {
            return (
                <button className={`${styles.button} ${styles.red}`} {...rest}>
                    {children}
                </button>
            );
        }
        default: {
            return (
                <button className={`${styles.button} ${styles.gray}`} {...rest}>
                    {children}
                </button>
            );
        }
    }
};
