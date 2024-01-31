document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("barberForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const message = formData.get("message");
  
      console.log("Nombre:", name);
      console.log("Correo Electrónico:", email);
      console.log("Teléfono:", phone);
      console.log("Mensaje:", message);
  
      alert("Gracias por reservar tu cita en nuestra barbería!");
      form.reset();
    });
  });