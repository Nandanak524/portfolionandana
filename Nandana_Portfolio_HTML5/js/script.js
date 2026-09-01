
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll(".year");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const notice = form.querySelector(".notice");
      if (notice) {
        notice.style.display = "block";
        notice.textContent = "Thank you! Your form has been submitted successfully.";
        setTimeout(() => notice.style.display = "none", 4000);
      }
    });
  });
});
