const stickyBarBox = document.querySelector(".stickyBar");
stickyBarBox.addEventListener("mouseenter", () => {
    stickyBarBox.classList.remove("stickyBar");
    stickyBarBox.classList.add("stickyBar-hover");
});
stickyBarBox.addEventListener("mouseleave", () => {
    stickyBarBox.classList.remove("stickyBar-hover");
    stickyBarBox.classList.add("stickyBar");
});