import classnames from "classnames";
import React, { ReactElement } from "react";
import { DialogProps } from "../../typings/DialogProps";

import "./Dialog.css";

const Dialog = ({ customClass, title, closeHandler, children }: DialogProps): ReactElement => (
    <div
        role="dialog"
        className={classnames("modal-dialog mx-window mx-window-active", customClass && customClass)}
        aria-modal="true"
        data-focus-capturing="modal"
    >
        <div className="modal-content mx-window-content">
            <div className="modal-header mx-window-header">
                <button onClick={closeHandler} type="button" className="close" title="close" aria-label="close">
                    ×
                </button>
                <h4>{title}</h4>
            </div>
            <div data-focusindex="0" className="modal-body mx-window-body">
                <div className="mx-scrollcontainer mx-scrollcontainer-horizontal mx-scrollcontainer-fixed">
                    <div className="mx-scrollcontainer-center">
                        <div className="mx-scrollcontainer-wrapper">
                            <div className="mx-placeholder">
                                <div className="mx-layoutgrid mx-layoutgrid-fluid container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">{children}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dialog;
