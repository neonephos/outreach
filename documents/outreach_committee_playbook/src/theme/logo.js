document.addEventListener("DOMContentLoaded", function () {
    const leftButtons = document.querySelector(".left-buttons");
    
    // Check if the container exists and the logo isn't already added
    if (leftButtons && !document.querySelector(".header-logo-link")) {
        const logoAnchor = document.createElement("a");
        
        // Automatically fetch mdBook's relative path to root so links work in subfolders
        const pathToRoot = document.querySelector("html").getAttribute("data-path-to-root") || "./";
        logoAnchor.href = pathToRoot + "index.html";
        logoAnchor.className = "header-logo-link";
        
        const logoImg = document.createElement("img");
        logoImg.src = "https://artwork.neonephos.org/other/neonephos-foundation/horizontal/color/neonephos-foundation-horizontal-color.svg";
        logoImg.alt = "Neonephos Foundation Logo";
        logoImg.className = "header-logo";

        logoAnchor.appendChild(logoImg);
        leftButtons.appendChild(logoAnchor);
    }
});