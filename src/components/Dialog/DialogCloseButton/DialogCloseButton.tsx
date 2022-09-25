import React, { ReactElement } from "react";
import classNames from "classnames";
import { DialogCloseButtonProps } from "../../../typings/DialogCloseButtonProps";

const DialogCloseButton = ({ showHeader, closeHandler }: DialogCloseButtonProps): ReactElement => {
    const className = classNames("close", !showHeader && "close-without-header");

    return (
        <button
            onClick={closeHandler}
            type="button"
            className={className}
            title="close"
            aria-label="close"
        >×</button>
    );
};

export default DialogCloseButton;
