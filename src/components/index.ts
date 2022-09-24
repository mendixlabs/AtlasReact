/**
 * // TODO
 * These exports should be refactored in order to make the imports consuming this library be able to import
 * components and types as following:
 *
 * import { Dialog, Button, Heading, Input, ParagraphRole, ButtonVariant, etc }
 *
 * or alternatively
 *
 * import Atlas, { ParagraphRole, ButtonVariant, OtherTypes }
 */

// Components
import Button from "./Button/Button";
import Dialog from "./Dialog/Dialog";
import Heading from "./Heading/Heading";
import Paragraph from "./Paragraph/Paragraph";

// Types
import AtlasTypes from "../typings/ExternalTypes";

export { AtlasTypes, Button, Dialog, Heading, Paragraph };
