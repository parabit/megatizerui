import { cn } from "../../utils";
import { Div, IDiv } from "../div/";

export const HStack = ({ className, ...props }: IDiv) => <Div className={cn("flex flex-row", className)} {...props} />;
