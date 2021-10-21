Vue.component("home-page-header",{
  template:`<div>
  <h3><a href="index.html">CKP</a></h3>
        <div id="menu-bar" class="fas fa-bars"></div>
        <ul id="navbar">
          <li><a href="./pages/portfolio.html">Portfolio</a></li>
          <li><a href="./pages/about.html">About</a></li>
          <li><a href="./pages/albums.html">Albums</a></li>
          <li><a href="./pages/contact.html">Contact</a></li>
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a
            ><a href="#"><i class="fab fa-instagram"></i></a>
          </li>
        </ul>
  </div>`
})
Vue.component("page-header", {
  template: `<div>
    <h3><a href="../index.html">CKP</a></h3>
              <div id="menu-bar" class="fas fa-bars"></div>
              <ul id="navbar">
                <li><a href="./portfolio.html">Portfolio</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./albums.html">Albums</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a
                  ><a href="#"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
    </div>`,
});
Vue.component("page-footer", {
  el: "#footer-demo",
  template: `<p>
  © 2021 | Proudly created with
  <a href="https://jrazap.netlify.app/">Mohamed Elazap</a>
</p>`,
});
new Vue({
  el: "#header-demo",
});
new Vue({
  el: "#footer-demo",
});

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector("#navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};