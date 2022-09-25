import React, { ReactElement } from "react";
import classnames from "classnames";
import { HeadingProps } from "../../typings/HeadingProps";

const Heading = ({ customClass, size, children }: HeadingProps): ReactElement => {
    // TODO We might want to look into how to make this dynamic tag implementation prettier
    const HeadingTag: keyof JSX.IntrinsicElements = `h${size}` as unknown as keyof JSX.IntrinsicElements;

    return (
        <HeadingTag className={classnames("mx-text spacing-outer-bottom", customClass && customClass)}>
            {children}
        </HeadingTag>
    );
};

export default Heading;
