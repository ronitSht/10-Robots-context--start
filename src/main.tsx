import ReactDOMClient from 'react-dom/client'
import { GlobalStyle as ResetCSS } from './styles/reset.styles.ts';
import { StyleSheetManager } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { App } from './view/App.tsx';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <StyleSheetManager shouldForwardProp={(name: any) => !name.startsWith('$')}>
        <ResetCSS />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StyleSheetManager>)