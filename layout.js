document.addEventListener("DOMContentLoaded", () => {
    // Head HTML
    const headHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../../template/card-template.css">
        <link rel="icon" href="../../../images/Logos/Cozy-logo-small-transparent.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    `;
    document.head.insertAdjacentHTML("beforeend", headHTML);

    // Header HTML
    const headerHTML = `
        <header class="header">
            <nav class="navbar">
                <ul class="navmenu">
                    <div class="logo">
                        <a href="#" class="navlogo">
                            <img src="/images/Logos/Cozy-logo-transparent-landscape.png" alt="Logo">
                        </a>
                    </div>
                    <li class="navitem">
                        <a href="../../../index.html" class="navlink">
                            <ion-icon class="icon" name="home-outline"></ion-icon><span>HOME</span>
                        </a>
                    </li>
                    <li class="navitem">
                        <a href="https://github.com/selimAP/cozyflix" class="navlink">
                            <ion-icon class="icon" name="extension-puzzle-outline"></ion-icon><span>CONTRIBUTE</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `;
    document.querySelector("#header").innerHTML = headerHTML;

    // Footer HTML
    const footerHTML = `
        <footer>
            <div class="main-footer">
                <div class="footer-logo">
                    <img src="../../../images/Logos/Cozy-logo-transparent-landscape.png" alt="Logo">
                </div>
                <p>
                    <a href="#">GitHub</a> | <a href="#">Contribute</a> | <a href="#">Contact</a>
                </p>
                <p>Cozyflix is not affiliated with Netflix or any other streaming service or film studio.</p>
                <p>
                    Built and designed by
                    <a id="footer-link" href="">Selim Afat</a>
                </p>
            </div>
        </footer>
    `;
    document.querySelector("#footer").innerHTML = footerHTML;

    // Footer Scripts
    const footerScripts = `
        <script src="../../template/card-template.js"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    `;
    document.body.insertAdjacentHTML("beforeend", footerScripts);
});
