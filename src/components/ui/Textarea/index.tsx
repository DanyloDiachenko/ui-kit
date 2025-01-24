import styles from "./styles.module.scss";
import { TextareaProps } from "./textarea.props";

export const Textarea = ({ ...rest }: TextareaProps) => {
    return <textarea className={styles.textarea} {...rest} />;
};
