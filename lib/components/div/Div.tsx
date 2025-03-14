import { IDiv } from "./utils";

export const Div = ({ children, ...props }: IDiv) => <div {...props}>{children}</div>;
