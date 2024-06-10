<template>
    <div id="services">
        <div class="container">
            <h1 class="sub-title">What I do</h1>
            <div class="services-list">
               <div>
                   <i class="fa-solid fa-code"></i>
                   <h2>Web Design</h2>
                   <p>{{ webdesign }}</p>
                   
               </div>
               <div>
                   <i class="fa-solid fa-crop"></i>
                  <h2>Graphics Design</h2>
                   <p>{{ graphicsdesign }}</p>
                  
               </div>
               <div>
                <i class="fa-brands fa-app-store"></i>
                  <h2>App Design</h2>
                   <p>{{ appdesign }}</p>
                   
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            webdesign:'I craft visually appealing and user-friendly websites, focusing on layout, colors, and graphics. My goal is to create digital experiences that are both functional and visually stunning for every user.',
            appdesign:'I develop mobile apps that are intuitive, efficient, and tailored to your needs. From concept to launch, I ensure seamless functionality and a great user experience on every device.',
            graphicsdesign:'I design captivating graphics that elevate brands and captivate audiences. From logos to digital illustrations, I bring creativity and expertise to every project, ensuring visually stunning results that leave a lasting impression.'
        }
    }
}
</script>
