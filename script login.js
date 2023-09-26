document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const githubButton = document.getElementById("github");
    const googleButton = document.getElementById("google");
    const azureButton = document.getElementById("azure");
    const facebookButton = document.getElementById("facebook");
    const emailButton = document.getElementById("email");

    
        
        // Aquí puedes realizar la autenticación con el backend utilizando Axios u otra biblioteca similar
        // axios.post("/api/login", { username, password });
        // ...resto del código...
 
    githubButton.addEventListener("click", () => {
        // Redirige al servicio de autenticación de GitHub
        window.location.href = "https://github.com/login/oauth/authorize?client_id=ed0a45eb13e5dc47ae5d&redirect_uri=https://chatbot-tecia--cagmont.repl.co";
    });
    
    googleButton.addEventListener("click", () => {
        // Redirige al servicio de autenticación de Google
        window.location.href = "https://accounts.google.com/o/oauth2/auth?client_id=864535874429-4trig49blvkk4lltgfnoe9kt80enstig.apps.googleusercontent.com&redirect_uri=https://chatbot-tecia--cagmont.repl.co&response_type=code&scope=email%20profile";
    });

    azureButton.addEventListener("click", () => {
        // Redirige al servicio de autenticación de Microsoft Azure
        window.location.href = "https://login.microsoftonline.com/04eacfc1-9a8c-4aeb-8320-578fc0259ff1/oauth2/v2.0/authorize?client_id=317027fa-496e-4e62-80a8-6324eb24a3bd&redirect_uri=api://317027fa-496e-4e62-80a8-6324eb24a3bd/www.chatbot-tecia--cagmont.repl.co&response_type=code&scope=${encodeURIComponent(scope)}";
    });

    facebookButton.addEventListener("click", () => {
        // Redirige al servicio de autenticación de Facebook
        window.location.href = "https://www.facebook.com/v12.0/dialog/oauth?client_id=your_app_id&redirect_uri=your_redirect_uri";
    });
//Id en el index.html del botón "emailButton"
    emailButton.addEventListener("click", () => {
        // Redirige al formulario de registro por correo electrónico
        window.location.href = "Register.html";
 });
      loginForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent form submission

                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;

           if (username === "embed" && password === "embed") {
    window.location.href = "Panel_embed.html";
} else if (username === "gpt" && password === "gpt") {
    window.location.href = "panel_gpt.html";
} else if (username === "chatbot" && password === "chatbot") {
    window.location.href = "panel_chatbotter.html";
} else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
}
  });
    }); 