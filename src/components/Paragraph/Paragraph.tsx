import React, { ReactElement } from "react";
import classnames from "classnames";
import { ParagraphProps } from "../../typings/ParagraphProps";
import { ParagraphRole } from "../../typings/ParagraphRole";

const Paragraph = ({ customClass, role, children }: ParagraphProps): ReactElement => {
    const className = classnames(
        "mx-text",
        role === ParagraphRole.detail && "text-detail",
        customClass && customClass
    );

    return <p className={className}>{children}</p>;
};

export default Paragraph;
