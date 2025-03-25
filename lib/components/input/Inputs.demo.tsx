import { FIleInput } from './FIleInput';
import { Input } from './Input';
import { InputPassword } from './InputPassword';

const DemoInput = () => (
	<Input placeholder="Введите текст..." autoComplete="new-password" className="max-w-xs" />
);

DemoInput.html = `const DemoInput = () => (
    <Input placeholder="Введите текст..." autoComplete="new-password" className="max-w-xs" />
);`;

const DemoFIleInput = () => <FIleInput />;

DemoFIleInput.html = `const DemoFIleInput = () => <FIleInput />;`;

const DemoInputPassword = () => (
	<InputPassword placeholder="••••••••" autoComplete="new-password" className="max-w-xs" />
);

DemoInputPassword.html = `const DemoInputPassword = () => (
    <InputPassword placeholder="••••••••" autoComplete="new-password" className="max-w-xs" />
);`;

export { DemoInput, DemoFIleInput, DemoInputPassword };
