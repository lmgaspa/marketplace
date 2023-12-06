import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const MyGoogleLogin = () => {
    const [user, setUser] = useState(null);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        setUser(userObject);
    }

    useEffect(() => {
        // Check if the Google API script is loaded
        if (window.google && window.google.accounts) {
            window.google.accounts.id.initialize({
                client_id: "206143925112-s9ri4ged3ku0ajretiefq38toqh381rq.apps.googleusercontent.com",
                callback: handleCallbackResponse
            });

            window.google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "large" }
            );
        } else {
            console.error("Google API script not loaded");
        }
    }, []);

    const navigate = useNavigate();

    const handleLoginSuccess = (user) => {
        console.log("User Object:", user);
        navigate('/loginsuccess', { state: { name: user.name, picture: user.picture } });
    };
    
    return (
        <div>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    handleLoginSuccess(jwtDecode(credentialResponse.credential));
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    );
};

export default MyGoogleLogin;
