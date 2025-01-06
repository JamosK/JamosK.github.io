var websiteTheme = "Light";

//Script For Changing Themes
function changeTheme() {
    // Updating the Theme Variable.
    websiteTheme = document.getElementById("themeForm").value;
    // Saving the current theme to session storage.
    sessionStorage.setItem("websiteTheme_2333", websiteTheme);

    if (websiteTheme == "Light") {
        updateTheme("rgb(245, 227, 194)", 
            "rgb(232, 240, 151)", 
            "rgb(202, 170, 39)", 
            "rgb(185, 170, 0)", 
            "rgb(143, 95, 0)", 
            0, 0);

    } else if (websiteTheme == "Dark") {
        updateTheme("rgb(20,20,20)", 
            "rgb(50,50,50)", 
            "rgb(80,80,80)", 
            "rgb(120,120,120)", 
            "rgb(200,200,200)", 
            0, 0);

    } else if (websiteTheme == "Spooky") {
        updateTheme("rgb(0,0,0)", 
            "rgb(20,20,20)", 
            "rgb(40,40,40)", 
            "rgb(60,60,60)", 
            "rgb(80,80,80)", 
            1, 0);

    } else if (websiteTheme == "Bubbles") {
        updateTheme("rgb(36, 52, 60)", 
            "rgb(46, 84, 102)", 
            "rgb(42, 112, 145)", 
            "rgb(33, 145, 197)", 
            "rgb(0, 176, 250)", 
            0, 1);
            
    }
}

function updateTheme(Color1, Color2, Color3, Color4, Color5, torchOpacity, bubblesOpacity) {
    // Variables of things that have to be hidden/shown.
    var bubblesCollection = document.getElementsByClassName("Bubbles");
    var torchLight = document.getElementById("CursorTorch");

    // Updating the themes Colors
    document.documentElement.style.setProperty("--Color1", Color1);
    document.documentElement.style.setProperty("--Color2", Color2);
    document.documentElement.style.setProperty("--Color3", Color3);
    document.documentElement.style.setProperty("--Color4", Color4);
    document.documentElement.style.setProperty("--Color5", Color5);

    // Updating the special effects Visibility 
    torchLight.style.opacity = torchOpacity;
    for (var i = 0; i < bubblesCollection.length; i++) {
        bubblesCollection[i].style.opacity = bubblesOpacity;
    }
}

// Script for the Spooky Theme
// With a Backup if no event object.
function mainTorchMovement(e) {
    // Checking if Spooky Theme is active.
    //if (websiteTheme != "Spooky") {
    //    return;
    //}

    const torch = document.getElementById("CursorTorch");
    torch.style.top = e.clientY - 2048 + 'px';
    torch.style.left = e.clientX - 2048 + 'px';
}

// Script for the Bubble Theme
function bubbleMovement() {
    // Checking if Bubble theme is activate, and canceling if not.
    if (websiteTheme != "Bubbles") {
        return;
    }

    // Bubble Images
    var bubblesCollection = document.getElementsByClassName("Bubbles")
    for (var i = 0; i < bubblesCollection.length; i++) {
        var pos = bubblesCollection[i].getBoundingClientRect();

        bubblesCollection[i].style.top = (pos.top - 1.5) + "px";

        if (pos.top < -150) {
            bubblesCollection[i].style.top = 100 + "%";
        }
    }
}

function setupWebsite() {
    // Setting up the Theme.
    fetchedTheme = sessionStorage.getItem("websiteTheme_2333");
    // Updating the Theme if not Null.
    if (fetchedTheme != null) {
        document.getElementById("themeForm").value = fetchedTheme;
        changeTheme();
    }

    // Randomizing Bubble Positions.
    var bubblesCollection = document.getElementsByClassName("Bubbles")
    for (var i = 0; i < bubblesCollection.length; i++) {
        bubblesCollection[i].style.top = Math.random() * 100 + "%";
        bubblesCollection[i].style.left = Math.random() * 100 + "%";
    }
}

// Interval for the Bubble Movement. Runs at 60 fps
setInterval(bubbleMovement, 16.6);

