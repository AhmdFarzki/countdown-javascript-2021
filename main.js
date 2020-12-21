const count = new Date("Jan 1, 2021 00:00:00").getTime();
      const x = setInterval(function () {
        const now = new Date().getTime();
        const d = count - now;

        const day = Math.floor(d / (1000 * 60 * 60 * 24));
        const hour = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minute = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((d % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = day;
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("second").innerHTML = second;

        if (d <= 0) {
          clearInterval(x);
        }
      }, 1000);