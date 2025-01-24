import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ParagraphProps {
    size?: "small" | "medium" | "large";
    children: ReactNode;
    className?: string;
}
