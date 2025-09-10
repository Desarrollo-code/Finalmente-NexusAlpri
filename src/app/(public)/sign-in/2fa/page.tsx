// src/app/(public)/sign-in/2fa/page.tsx
'use client';

import TwoFactorAuthForm from '@/components/auth/2fa-form';
import AuthFormContainer from '@/components/auth/auth-form-container';

export default function TwoFactorAuthPage() {
    
    return (
       <AuthFormContainer>
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold font-headline text-foreground">
                    Verificación de Dos Pasos
                </h1>
                <p className="text-muted-foreground">
                    Ingresa el código de tu aplicación de autenticación.
                </p>
            </div>
            <TwoFactorAuthForm />
       </AuthFormContainer>
    );
}
