import React, { ReactElement } from "react";
import classNames from "classnames";
import { BadgeButtonProps } from "../../typings/BadgeButtonProps";
import { ButtonVariant } from "../../typings/ButtonVariant";

import "./Button.css";

const BadgeButton = ({
    label,
    badgeLabel,
    onClick,
    customClass,
    size,
    variant = ButtonVariant.primary,
    outlined = false,
    fullwidth = false,
    disabled = false
}: BadgeButtonProps): ReactElement => {
    const className = classNames(
        "btn widget-badge-button",
        size && `btn-${size}`,
        `btn-${variant}`,
        outlined && "btn-bordered",
        fullwidth && "btn-block",
        customClass && customClass
    );

    /**
     * Atlas UI's CSS doesn't check for the value of the disabled tags:
     * [data-disabled='false'] or [aria-disabled='false'].
     * 
     * Instead it only looks for the existence of those tags to disable a button. Therefore we need some 
     * ugly conditional rendering to make this work properly.
     */
    if (disabled) {
        return (
            <button
                className={className}
                onClick={onClick}
                data-disabled="true"
                aria-disabled="true"
            >
                <span className="widget-badge-button-text">{label}</span>
                <span className="badge">{badgeLabel}</span>
            </button>
        );
    }

    return (
        <button
            className={className}
            onClick={onClick}
        >
            <span className="widget-badge-button-text">{label}</span>
            <span className="badge">{badgeLabel}</span>
        </button>
    );
};

export default BadgeButton;
