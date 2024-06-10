<template>
    <div>
    <header-component/>
    <about-component/>
    <services-component/>
    <portfolio-component />
    <contact-component />
    <footer-component />
    </div>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import AboutComponent from '../components/AboutComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import PortfolioComponent from '../components/PortfolioComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default{
   components:{
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    
   }
}
</script>