function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    // Check if dark theme is active and update button text
    const isDarkTheme = document.body.classList.contains("dark-theme");
    document.querySelector(".theme-toggle").textContent = isDarkTheme ? "Light Mode" : "Dark Mode";

    // Save the user's preference in local storage
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

// Load the user's preferred theme and update button text on page load
window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        document.querySelector(".theme-toggle").textContent = "Light Mode";
    } else {
        document.querySelector(".theme-toggle").textContent = "Dark Mode";
    }
};
