import { Roboto } from '@next/font/google';
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";


const roboto = Roboto({
  weight: ['400', '500','700'], 
  subsets: ['latin'],    
});


export const metadata = {
  title: "Delmar - Simplifica tu Trabajo, Mejora tu Servicio",
  description: "Administra eficientemente tareas de plomería y realiza seguimiento de órdenes en el Panel de Administración de Delmar.",
  keywords: "barcelona, santa coloma, fondo, hospitalet, catalunya, tanplomería, administración de plomería, gestión de tareas, Delmar, órdenes de trabajo",  
  robots: "index, follow",  
  author: "Delmar",  
  language: "es", 
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="es">
        <body className={` ${roboto.className} antialiased`}>
          <Navbar>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Navbar>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>

  );
}
