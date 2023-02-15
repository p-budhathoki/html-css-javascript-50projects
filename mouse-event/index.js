// target div with container
const containerEl = document.querySelector(".container");

// add event listener to the windows
window.addEventListener("mousemove", (event) => {
  // console.log(event)
  containerEl.innerHTML = `
    <div class="mouse-event">
        ${event.clientX}
        <h4>mouse X Position(px)</h4>
    </div>
    <div class="mouse-event">
        ${event.clientY}
        <h4>Mouse Y position(px)</h4>
    </div>
    `;
});
