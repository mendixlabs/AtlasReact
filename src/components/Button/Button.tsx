import classnames from "classnames";
import React, { ReactElement } from "react";
import { ButtonProps } from "../../typings/ButtonProps";
import { ButtonVariant } from "../../typings/ButtonVariant";

import "./Button.css";

const Button = ({
    callback,
    customClass,
    icon,
    size,
    label = "",
    variant = ButtonVariant.primary,
    outlined = false,
    fullwidth = false,
    disabled = false
}: ButtonProps): ReactElement => {
    const className = classnames(
        "btn mx-button",
        size && `btn-${size}`,
        `btn-${variant}`,
        outlined && "btn-bordered",
        fullwidth && "btn-block",
        customClass && customClass
    );

    /**
     * Unfortunately Atlas UI's CSS doesn't check for the value of the disabled tags:
     * [data-disabled='false'] or [aria-disabled='false'].
     * but only looks for the existence of those tags to disable a button. Therefore we need some ugly
     * conditional rendering to make this work properly.
     */
    if (disabled) {
        return (
            <button className={className} onClick={callback} data-disabled="true" aria-disabled="true">
                {icon && <span className={classnames("glyphicon", `glyphicon-${icon}`)} aria-hidden="true"></span>}
                {label}
            </button>
        );
    }

    return (
        <button className={className} onClick={callback}>
            {icon && <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>}
            {label}
        </button>
    );
};

export default Button;
