import React from "react";
import styles from "./styles.module.scss";

interface RadioButtonProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    id,
    label,
    checked,
    onChange,
}) => {
    return (
        <div className={styles.radioWrapper}>
            <input
                type="radio"
                id={id}
                checked={checked}
                onChange={onChange}
                className={styles.radioInput}
            />
            <label htmlFor={id} className={styles.radioLabel}>
                <span className={styles.customRadio}></span>
                {label}
            </label>
        </div>
    );
};
