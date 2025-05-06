document.querySelectorAll(".level").forEach((el) => {
  const target = el.style.width;
  el.style.setProperty("--final-width", target);
  el.style.width = "0"; // reset for animation
  setTimeout(() => {
    el.style.width = target;
  }, 100);
});

// 📊 Chart.js toevoegen en grafiek tekenen
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("techChart");
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["C#", "Python", "PHP", "SQL", "React", "JavaScript"],
        datasets: [
          {
            label: "Vaardigheid (%)",
            data: [85, 90, 75, 80, 70, 85],
            backgroundColor: [
              "#6366f1",
              "#60a5fa",
              "#facc15",
              "#34d399",
              "#a78bfa",
              "#f87171",
            ],
            borderRadius: 6,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  }
});
