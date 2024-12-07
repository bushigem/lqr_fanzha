<script>
    document.addEventListener("DOMContentLoaded", function () {
        const submenus = document.querySelectorAll(".has-submenu > a");

        submenus.forEach(menu => {
            menu.addEventListener("click", function (event) {
                event.preventDefault();
                const submenu = this.nextElementSibling;
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            });
        });
    });
</script>

