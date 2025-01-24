import { HeadingProps } from "./htag.props";
import styles from "./styles.module.scss";

export const Heading = ({ tag, children, className }: HeadingProps) => {
    switch (tag) {
        case "h1": {
            return (
                <h1 className={`${styles.h1} ${className ? className : ""}`}>
                    {children}
                </h1>
            );
        }
        case "h2": {
            return (
                <h2 className={`${styles.h2} ${className ? className : ""}`}>
                    {children}
                </h2>
            );
        }
        case "h3": {
            return (
                <h3 className={`${styles.h3} ${className ? className : ""}`}>
                    {children}
                </h3>
            );
        }
        case "h4": {
            return (
                <h4 className={`${styles.h4} ${className ? className : ""}`}>
                    {children}
                </h4>
            );
        }
        default: {
            return <>{children}</>;
        }
    }
};
