import classNames from "classnames";
import React, { ReactElement } from "react";
import { HeadingProps } from "../../typings/HeadingProps";
import { HeadingSize } from "../../typings/HeadingSize";

const Heading = ({ customClass, size, headingText }: HeadingProps): ReactElement => {
    const renderHeading = (): ReactElement => {
        switch (size) {
        case HeadingSize.xs:
            return (
                <h1 className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
                    {headingText}
                </h1>
            );
        case HeadingSize.sm:
            return (
                <h2 className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
                    {headingText}
                </h2>
            );
        case HeadingSize.md:
            return (
                <h3 className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
                    {headingText}
                </h3>
            );
        case HeadingSize.lg:
            return (
                <h4 className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
                    {headingText}
                </h4>
            );
        case HeadingSize.xl:
            return (
                <h5 className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
                    {headingText}
                </h5>
            );
        case HeadingSize.xxl:
            return (
                <h6 className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
                    {headingText}
                </h6>
            );
        default:
            return (
                <h1 className={classNames("mx-text spacing-outer-bottom", customClass && customClass)}>
                    {headingText}
                </h1>
            );
        }
    };

    return <>{renderHeading()}</>;
};

export default Heading;
