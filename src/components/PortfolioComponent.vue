<template>
    <div id="portfolio">
        <div class="container">
            <h1 class="sub-title">My Portfolio</h1>
            <div class="work-list">
                <div class="work">
                    <img src="@/images/ecommerce1.jpg" alt="">
                     <div class="layer">
                        <h3>Online Store App</h3>
                        <p>Your one-stop shop for curated finds and unbeatable deals online.</p>
                        <a :href ="portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                </div>
                <div class="work">
                    <img src="@/images/android1.jpg" alt="">
                    <div class="layer">
                        <h3>Restaurant App</h3>
                        <p>Discover, order, and savor culinary delights with our intuitive app.</p>
                        <a :href ="portfolio"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                     </div>
                </div>
                <div class="work">
                    <img src="@/images/port-1.jpg" alt="">
                    <div class="layer">
                        <h3>Gym App</h3>
                        <p>Power up your workouts with our streamlined gym management app.</p>
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
