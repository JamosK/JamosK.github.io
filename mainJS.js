// Setting a default theme in case one fails to load.
var websiteTheme = "Light";

// Function only run by the set theme button.
function changeTheme() {
    websiteTheme = document.getElementById("themeForm").value;
    // Saving the current theme to session storage.
    sessionStorage.setItem("websiteTheme_UniqueID2333", websiteTheme);
}

//Script For Changing Themes
function updateTheme() {
    // Loading the Theme from storage.
    websiteTheme = sessionStorage.getItem("websiteTheme_UniqueID2333");

    console.log(websiteTheme);

    if (websiteTheme == "Light") {
        updateThemeHelper("rgb(245, 227, 194)", 
            "rgb(232, 240, 151)", 
            "rgb(202, 170, 39)", 
            "rgb(185, 170, 0)", 
            "rgb(110, 74, 0)", 
            0, 0);

    } else if (websiteTheme == "Dark") {
        updateThemeHelper("rgb(20,20,20)", 
            "rgb(50,50,50)", 
            "rgb(80,80,80)", 
            "rgb(120,120,120)", 
            "rgb(200,200,200)", 
            0, 0);

    } else if (websiteTheme == "Spooky") {
        updateThemeHelper("rgb(0,0,0)", 
            "rgb(20,20,20)", 
            "rgb(40,40,40)", 
            "rgb(60,60,60)", 
            "rgb(80,80,80)", 
            1, 0);

    } else if (websiteTheme == "Bubbles") {
        updateThemeHelper("rgb(36, 52, 60)", 
            "rgb(46, 84, 102)", 
            "rgb(42, 112, 145)", 
            "rgb(33, 145, 197)", 
            "rgb(0, 176, 250)", 
            0, 1);
            
    }
}

function updateThemeHelper(Color1, Color2, Color3, Color4, Color5, torchOpacity, bubblesOpacity) {
    // Updating the themes Colors
    document.documentElement.style.setProperty("--Color1", Color1);
    document.documentElement.style.setProperty("--Color2", Color2);
    document.documentElement.style.setProperty("--Color3", Color3);
    document.documentElement.style.setProperty("--Color4", Color4);
    document.documentElement.style.setProperty("--Color5", Color5);

    // This is horrible code, but I don't have the time to develop a better system.
    // But I need the ability to simply update these Colors, without these html elements.
    try {
        // Variables of things that have to be hidden/shown.
        var bubblesCollection = document.getElementsByClassName("Bubbles");
        var torchLight = document.getElementById("CursorTorch");

        // Updating the special effects Visibility 
        torchLight.style.opacity = torchOpacity;
        for (var i = 0; i < bubblesCollection.length; i++) {
            bubblesCollection[i].style.opacity = bubblesOpacity;
        }
    } catch {
        
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

// Interval for the Bubble Movement. Runs at 60 fps
setInterval(bubbleMovement, 16.6);


// This function sets up the themes colors before any HTML loads.



// Loads the header and sets the title variable from storage.
async function loadHeader() {
    // Fetching the HTML of the page's header, called "headerAndSetup.html".
    // fetch() grabs a very metadata heavy form of the html.
    // .text() grabs the text of the html file.
    // .getElementByID harvests the html from the file.
    // It also labels the elements with "headerAndSetup".
    await fetch('/headerAndSetup.html')
        .then(res => res.text())
        .then(html => {
        document.getElementById('headerAndSetup').innerHTML = html;
    });

    // Updating the Headers Theme Title.
    // Setting up the Theme.
    // This also insures other javascript won't run due to the await.
    fetchedTheme = sessionStorage.getItem("websiteTheme_UniqueID2333");
    // Updating the Theme if not Null.
    if (fetchedTheme != null) {
        try {
            var ThemeForm = await document.getElementById("themeForm");
            ThemeForm.value = fetchedTheme;
        } catch {
            console.log("Unable to fetch theme due to theme input form being unlocated.")
        }
    }

    // Running updateTheme again once elements are loaded. In runs earlier in <head>.
    await updateTheme();
}

// This functions setups up the header and theme just as it loads.
async function setupWebsite() {
    // Once the header is setup, the rest of setup can continue. As there do exist dependencies on the header and theme assets.

    // Randomizing Bubble Positions.
    var bubblesCollection = await document.getElementsByClassName("Bubbles")
    for (var i = 0; i < bubblesCollection.length; i++) {
        bubblesCollection[i].style.top = Math.random() * 100 + "%";
        bubblesCollection[i].style.left = Math.random() * 100 + "%";
    }
}




