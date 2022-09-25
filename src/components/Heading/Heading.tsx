import classNames from "classnames";
import React, { ReactElement } from "react";
import { HeadingProps } from "../../typings/HeadingProps";

const Heading = ({ customClass, size, children }: HeadingProps): ReactElement => {
    const HeadingTag: keyof JSX.IntrinsicElements = `h${size}` as unknown as keyof JSX.IntrinsicElements;

    return (
        <HeadingTag className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
            {children}
        </HeadingTag>
    );
};

export default Heading;
