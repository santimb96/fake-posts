import React, { useEffect, useState } from "react";

const GoogleOauth = () => {

    const [isSign, setIsSign] = useState(null);

    useEffect(()=> { // cargamos el tipo de autho que haremos
        window.gapi.load('client:auth2', () => {
            //la inicializamos  y le pasamos el clientId quehemos obtenido a la hora de crear  la api
            window.gapi.client.init({
                client_id: '763423454284-5joumshpa6qkqu4pgou919qe8470gmso.apps.googleusercontent.com',
                //el scope es decirle qé campo te pedirá permiso. En este caso será el correo
                scope: 'email'
            }).then(() => {
                setIsSign(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                //console.log(isSign)
            })
        });
        
        //console.log(window.gapi);
    }, [])

    
    return (
        <div>{ console.log(isSign) }</div>
    )
}

export default GoogleOauth;