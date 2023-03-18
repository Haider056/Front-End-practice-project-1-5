function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  function toggleTextOnlyMode() {
    const body = document.body;
    body.classList.toggle("text-only-mode");
  }

 
  function toggleBatteryOptimizedMode() {
    const body = document.body;
    if (navigator.getBattery) {
      navigator.getBattery().then(function(battery) {
        if (battery.level < 0.1) {
          body.classList.add("battery-optimized-mode");
          body.style.opacity = "0.5";
        } else {
          body.classList.toggle("battery-optimized-mode");
          body.style.opacity = "1";
        }
      });
    }
  }