
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store.jsx';
import './index.css'
import App from './App.jsx'
import {CookiesProvider} from "react-cookie";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <CookiesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CookiesProvider>
    </Provider>


)
