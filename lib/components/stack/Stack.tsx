import { cn } from "../../utils";
import { Div, IDiv } from "../div/";

export const Stack = ({ className, ...props }: IDiv) => <Div className={cn("flex flex-col", className)} {...props} />;
