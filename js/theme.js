document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";

  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
      if (themeToggle) themeToggle.textContent = "Modo claro";
    } else {
      document.documentElement.classList.remove("dark-mode");
      if (themeToggle) themeToggle.textContent = "Modo escuro";
    }
    localStorage.setItem("theme", theme);
  }

  if (savedTheme === "dark") {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark-mode");
      setTheme(isDark ? "light" : "dark");
    });
  }
});
