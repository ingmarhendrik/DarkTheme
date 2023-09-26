function changeTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (button.classList.contains("btn-dark")) {
        button.classList.replace("btn-light", "btn-dark");
        button.textContent = "Dark Mode";
    } else {
        button.classList.replace("btn-dark", "btn-light");
        button.textContent = "Light Mode";
    }
}
