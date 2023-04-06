import { createRoot } from 'react-dom/client';
import Menu from './menu';

const root = createRoot(document.querySelector('.appContainer'));
root.render(
	<>
		<Menu />
	</>
);
