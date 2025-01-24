import { PProps } from "./P.props";
import styles from "./styles.module.scss";

export const Paragraph = ({ size, children, className }: PProps) => {
    switch (size) {
        case "small":
            return (
                <p className={`${styles.small} ${className ? className : ""}`}>
                    {children}
                </p>
            );
        case "medium":
            return (
                <p className={`${styles.medium} ${className ? className : ""}`}>
                    {children}
                </p>
            );
        case "large":
            return (
                <p className={`${styles.large} ${className ? className : ""}`}>
                    {children}
                </p>
            );
        default: {
            return <p className={className ? className : ""}>{children}</p>;
        }
    }
};
