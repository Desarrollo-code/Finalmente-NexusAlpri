import React from 'react';
import Image from 'next/image';
import './auth.css';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-scope">
      <div className="auth-container">
        
        {/* Columna Izquierda - Ilustración (visible en pantallas grandes) */}
        <aside className="auth-illustration-column">
          <div className="illustration-wrapper">
            <Image
              src="/uploads/images/auth-illustration.png"
              alt="NexusAlpri Learning Mascot"
              fill
              priority
              className="auth-main-illustration"
              data-ai-hint="learning mascot"
            />
          </div>
        </aside>
        
        {/* Columna Derecha - Formulario */}
        <main className="auth-form-column">
          <div className="auth-card">
             <header className="auth-logo-header">
                <Link href="/" className="auth-logo-link">
                    <Image
                        src="/uploads/images/logo-nexusalpri.png"
                        alt="NexusAlpri Logo"
                        width={180}
                        height={40}
                        className="auth-logo"
                        data-ai-hint="logo"
                    />
                </Link>
            </header>
            {children}
          </div>
          <a href="https://alprigrama.com" target="_blank" rel="noopener noreferrer" className="auth-footer-link">
            Powered by 
            <Image
              src="/uploads/images/watermark-alprigrama.png"
              alt="Alprigrama S.A.S."
              width={20}
              height={20}
              className="auth-footer-logo"
              data-ai-hint="company logo"
            />
             Alprigrama
          </a>
        </main>
      </div>
    </div>
  );
}