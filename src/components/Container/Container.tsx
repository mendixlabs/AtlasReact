import React, { ReactElement } from "react";
import classNames from "classnames";
import { ContainerProps } from "../../typings/ContainerProps";
import { ContainerAlignment } from "../../typings/ContainerAlignment";

const Container = ({
    alignment,
    border,
    children
}: ContainerProps): ReactElement => {
    const className = classNames(
        "card",
        alignment ? alignment : ContainerAlignment.rowLeft,
        border && "border"
    );

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Container;
