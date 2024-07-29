<template>
    <div id="portfolio">
        <div class="container">
            <h1 class="sub-title">My Portfolio</h1>
            <div class="work-list">
                <div class="work">
                    <img src="@/images/licast-ecomerce.png" alt="">
                     <div class="layer">
                        <h3>E-Commerce Apps</h3>
                        <p>Let your customers acccess your products from your custom online commerce store</p>
                        <a :href ="portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                </div>
                <div class="work">
                    <img src="@/images/reviews-zetu.png" alt="">
                    <div class="layer">
                        <h3>Blog Apps</h3>
                        <p>Get yourself a world-class blog where you can freely express yourself to your target audience.</p>
                        <a :href ="portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                </div>
                <div class="work">
                    <img src="@/images/home_debbs.jpeg" alt="">
                    <div class="layer">
                        <h3>Fitness Apps</h3>
                        <p>Get your fitness center any of my worldclass fitness systems.</p>
                        <a :href ="portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                </div>
            </div>
            <a :href="portfolio" class="btn">See more</a>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            portfolio:'https://github.com/WilsonOnjore96',
        }
    }
}
</script>
