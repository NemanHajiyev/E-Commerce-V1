import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Styles/App.css'
import { store } from './Redux/Store.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
