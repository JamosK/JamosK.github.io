//Script For Changing Themes
function changeTheme() {
    var themeValue = document.getElementById("themeForm").value;

    // Varibles of things that have to be hidden/shown.
    var bubblesCollection = document.getElementsByClassName("Bubbles");
    var torchLight = document.getElementById("CursorTorch");

    if (themeValue == "Light") {
        document.documentElement.style.setProperty("--Color1", "rgb(245, 227, 194)");
        document.documentElement.style.setProperty("--Color2", "rgb(232, 240, 151)");
        document.documentElement.style.setProperty("--Color3", "rgb(202, 170, 39)");
        document.documentElement.style.setProperty("--Color4", "rgb(185, 170, 0)");
        document.documentElement.style.setProperty("--Color5", "rgb(143, 95, 0)");

        torchLight.style.opacity = 0;
        for (var i = 0; i < bubblesCollection.length; i++) {
            bubblesCollection[i].style.opacity = 0;
        }

    } else if (themeValue == "Dark") {
        document.documentElement.style.setProperty("--Color1", "rgb(20,20,20)");
        document.documentElement.style.setProperty("--Color2", "rgb(50,50,50)");
        document.documentElement.style.setProperty("--Color3", "rgb(80,80,80)");
        document.documentElement.style.setProperty("--Color4", "rgb(120,120,120)");
        document.documentElement.style.setProperty("--Color5", "rgb(200,200,200)");

        torchLight.style.opacity = 0;
        for (var i = 0; i < bubblesCollection.length; i++) {
            bubblesCollection[i].style.opacity = 0;
        }

    } else if (themeValue == "Spooky") {
        document.documentElement.style.setProperty("--Color1", "rgb(0,0,0)");
        document.documentElement.style.setProperty("--Color2", "rgb(20,20,20)");
        document.documentElement.style.setProperty("--Color3", "rgb(40,40,40)");
        document.documentElement.style.setProperty("--Color4", "rgb(60,60,60)");
        document.documentElement.style.setProperty("--Color5", "rgb(80,80,80)");

        torchLight.style.opacity = 1;
        for (var i = 0; i < bubblesCollection.length; i++) {
            bubblesCollection[i].style.opacity = 0;
        }

    } else if (themeValue == "Bubbles") {
        document.documentElement.style.setProperty("--Color1", "rgb(36, 52, 60)");
        document.documentElement.style.setProperty("--Color2", "rgb(46, 84, 102)");
        document.documentElement.style.setProperty("--Color3", "rgb(42, 112, 145)");
        document.documentElement.style.setProperty("--Color4", "rgb(33, 145, 197)");
        document.documentElement.style.setProperty("--Color5", "rgb(0, 176, 250)");

        torchLight.style.opacity = 0;
        for (var i = 0; i < bubblesCollection.length; i++) {
            bubblesCollection[i].style.opacity = 1;
        }

    }
}

// Script for the Spooky Theme
function mainTorchMovement(e) {
    // Cursor Light Image
    const torch = document.getElementById("CursorTorch");
    // Value of it Spooky Theme is active
    var themeValue = document.getElementById("themeForm").value;

    if (themeValue == "Spooky") {
        torch.style.top = event.clientY - 2048 + 'px';
        torch.style.left = event.clientX - 2048 + 'px';
    }

    // Bubble Images
    var bubblesCollection = document.getElementsByClassName("Bubbles")
    // Value of it Spooky Theme is active
    var themeValue = document.getElementById("themeForm").value;

    if (themeValue == "Bubbles") {
        for (var i = 0; i < bubblesCollection.length; i++) {
            var pos = bubblesCollection[i].getBoundingClientRect();
            console.log(pos.top);

            bubblesCollection[i].style.top = (pos.top - 5) + "px";

            if (pos.top < -150) {
                bubblesCollection[i].style.top = 100 + "%";
            }
        }
    }
}

// Script for the Bubble Theme
function bubbleMovement(e) {
    // Bubble Images
    var bubblesCollection = document.getElementsByClassName("Bubbles")
    // Value of it Spooky Theme is active
    var themeValue = document.getElementById("themeForm").value;

    if (themeValue == "Bubbles") {
        for (var i = 0; i < bubblesCollection.length; i++) {
            var pos = bubblesCollection[i].getBoundingClientRect();
            console.log(pos.top);

            bubblesCollection[i].style.top = (pos.top - 5) + "px";

            if (pos.top < -150) {
                bubblesCollection[i].style.top = 100 + "%";
            }
        }
    }
}

setInterval(bubbleMovement, 10);

// Adding a event Listener to update the spooky theme lighting.
document.addEventListener('mousemove', mainTorchMovement(event));