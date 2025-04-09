// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("El sitio está listo para usarse.");
  
    // Validar formularios en cada sección
    const forms = document.querySelectorAll("form");
  
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío por defecto
  
        const inputs = form.querySelectorAll("input");
        let valid = true;
  
        // Validar cada campo del formulario
        inputs.forEach((input) => {
          if (!input.value.trim()) {
            valid = false;
            input.classList.add("error");
            alert(`Por favor, completa el campo: ${input.previousElementSibling.textContent}`);
          } else {
            input.classList.remove("error");
          }
        });
  
        // Si todo es válido, proceder al siguiente paso
        if (valid) {
          alert("Formulario completado correctamente. Pasando al siguiente paso...");
          form.submit();
        }
      });
    });
  
    // Agregar estilos para campos con error
    const style = document.createElement("style");
    style.textContent = `
      .error {
        border: 2px solid red;
      }
    `;
    document.head.appendChild(style);
  });
  