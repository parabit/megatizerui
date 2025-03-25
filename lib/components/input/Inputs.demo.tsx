import { FIleInput } from './FIleInput';
import { Input } from './Input';
import { InputPassword } from './InputPassword';

const DemoInput = () => <Input placeholder="Введите текст..." autoComplete="new-password" />;

DemoInput.html = `const DemoInput = () => (
    <Input placeholder="Введите текст..." autoComplete="new-password" />
);`;

const DemoFIleInput = () => <FIleInput />;

DemoFIleInput.html = `const DemoFIleInput = () => <FIleInput />;`;

const DemoInputPassword = () => (
	<InputPassword placeholder="••••••••" autoComplete="new-password" />
);

DemoInputPassword.html = `const DemoInputPassword = () => (
    <InputPassword placeholder="••••••••" autoComplete="new-password" />
);`;

export { DemoInput, DemoFIleInput, DemoInputPassword };
