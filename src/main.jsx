
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CartProvider } from './Providers/CardProvider.jsx';
import { ClerkProvider } from "@clerk/clerk-react";
import "./i18n.js";

createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
        <CartProvider>
            <App />
        </CartProvider>
    </ClerkProvider>

)
