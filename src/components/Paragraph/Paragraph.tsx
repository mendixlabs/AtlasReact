import React, { ReactElement } from "react";
import classNames from "classnames";
import { ParagraphProps } from "../../typings/ParagraphProps";
import { ParagraphRole } from "../../typings/ParagraphRole";

const Paragraph = ({ customClass, role, children }: ParagraphProps): ReactElement => {
    const className = classNames(
        "mx-text",
        role === ParagraphRole.detail && "text-detail",
        customClass && customClass
    );

    return <p className={className}>{children}</p>;
};

export default Paragraph;
