document.addEventListener("DOMContentLoaded", () => {
    // Header HTML
    const headerHTML = `
        <header class="header">
            <nav class="navbar">
                <ul class="navmenu">
                    <div class="logo">
                        <a href="#" class="navlogo">
                            <img src="/images/Logos/Cozy-logo-transparent-landscape.png" alt="">
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
                    <img src="../../images/Logos/Cozy-logo-transparent-landscape.png" alt="">
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

        <script src="../../template/card-template.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    `;
    document.querySelector("#footer").innerHTML = footerHTML;
});
