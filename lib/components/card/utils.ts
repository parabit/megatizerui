import { IDiv } from '../div';
import { inputVariant } from '../input';

export const cardVaraint = inputVariant;

export interface ICard extends IDiv {
	variant?: keyof typeof cardVaraint;
}
