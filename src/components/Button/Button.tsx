import React from 'react';
import type { ComponentProps } from "react";

import {
    backgrounds,
    texts,
    borders,
    inverted_backgrounds,
    inverted_borders,
    inverted_texts,
    sizes,
} from './ButtonClasses';

interface Props extends ComponentProps<"button"> {
    color?: "default" | "primary" | "secondary" | "warning" | "info" | "danger" | "success" | "theme",
    className?: string,
    children?: any,
    disabled?: boolean,
    bordered?: boolean,
    transparentBg?: boolean,
    rounded?: boolean,
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    inverted?: boolean,
}

const DefaultButton = ({
    color = "default",
    className = "",
    children,
    onClick = () => { },
    disabled = false,
    bordered = false,
    transparentBg = false,
    rounded = true,
    size = "md",
    inverted = false,
    ...props
}: Props) => {
    const handleClick = (evt: any) => {
        if (typeof onClick === "function") {
            onClick(evt);
        }
    }

    return (
        <button
            type="button"
            className={`
                transition-all
                font-bold
                ${transparentBg ? "bg-transparent" : inverted ? inverted_backgrounds[color] : backgrounds[color]}
                ${inverted ? inverted_texts[color] : texts[color]}
                ${bordered ? inverted ? inverted_borders[color] : borders[color] : ""}
                ${rounded ? "rounded-md" : ""}
                ${sizes[size]}
                ${disabled && "opacity-80 cursor-not-allowed"}
                ${className}
                hover:opacity-70
            `}
            onClick={handleClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default DefaultButton