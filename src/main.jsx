
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CartProvider } from './Providers/CardProvider.jsx';

createRoot(document.getElementById('root')).render(
 <CartProvider>
  <App/>
 </CartProvider>
)
