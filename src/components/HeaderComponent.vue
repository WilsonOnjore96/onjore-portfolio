<template>
   <div id="header">
    <div class="container">
        <nav>
            <h2 class="logo">Wilson</h2>
            <ul id="side-menu"> 
                <li><a class="link" href="#" v-scroll-to="'#header'">Home</a> </li>
                <li><a class="link" href="#" v-scroll-to="'#about'">About</a>  </li>
                <li><a class="link" href="#" v-scroll-to="'#services'">Services</a> </li>
                <li><a class="link" href="#" v-scroll-to="'#portfolio'">Portfolio</a> </li>
                <li><a class="link" href="#" v-scroll-to="'#contact'">Contact</a> </li>
                <!-------close icon-->
                <a @click="closeMenu"><i class="menu-icon fa-solid fa-circle-xmark" ></i></a>
              
            </ul>
            <!-----menu bar-->
            <a @click="openMenu" style="cursor: pointer;"><i class="menu-icon fa-solid fa-bars"></i></a>
        </nav>
        <div class="header-text">
            <p>Full Stack Web Developer</p>
            <h1>Hi , I'm <span>Wilson</span>  <br/>Onjore From Kenya</h1>
        </div>
    </div>
   </div>
</template>
<script>
export default{
    
    methods:{
        openMenu(){
            var sidemenu = document.getElementById('side-menu');
            sidemenu.style.right = "0";
        },
        closeMenu(){
            var sidemenu = document.getElementById('side-menu');
            sidemenu.style.right = "-200px";
        }
    }
}
</script>