import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root')

if(!rootElement) {
	throw new Error('root element not found')
}

const root = createRoot(rootElement)

root.render(<div>React</div>)