document.body.addEventListener("mousemove", (event) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);
    
    // Position the circle at the mouse location
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.top = `${event.clientY - 50}px`;
    circle.style.left = `${event.clientX - 50}px`;
    
    // Fade the circle out
    setTimeout(() => {
      circle.style.opacity = "0";
      setTimeout(() => {
        circle.remove();
      }, 300);
    }, 100);
  });
  