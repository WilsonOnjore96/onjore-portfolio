<template>
<div id="about">
    <div class="container">
        <div class="row">
            <div class="about-col-1">
                <img src="@/images/sitting4.jpg">
            </div>
            <div class="about-col-2">
                <h1 class="sub-title">About Me</h1>
                <p>{{ description }}</p>
                <div class="tab-titles">
                    <p class="tab-links active-link" @click="openTab($event,'skills')">Skills</p>
                    <p class="tab-links" @click="openTab($event,'experience')" >Experience</p>
                    <p class="tab-links" @click="openTab($event,'education')" >Eductation</p>
                </div>
                <!----content for the specific classes-->
                <div class="tab-contents active-tab" id="skills">
                   <ul>
                      <li> <span>Graphics </span><br/>Designing captivating graphics.</li>
                      <li> <span>Web development</span><br/>Web app development with Laravel and Vue.</li>
                      <li> <span>App development</span><br/>Designing mobile apps with java.</li>
                    </ul>
                </div>
                <div class="tab-contents" id="experience">
                   <ul>
                      <li><span>2024 - Current</span><br/>Senior Software Engineer, 1123-Store Ltd.</li>
                      <li><span>2023 - Current</span><br/>Senior Software Engineer, I.T.N Kenya</li>
                      <li><span>2021 - 2022 </span><br/>Network Operations Engineer, I.C.T Authority Kenya</li>
                    </ul>
                </div>
                <div class="tab-contents" id="education">
                   <ul>
                      <li> <span>2023 - Current </span><br/>Masters in Computer Science ,University of East London</li>
                      <li> <span>2021 - 2022 </span><br/>Diploma in Full Stack Web Development, IST</li>
                      <li> <span>2015 - 2019</span><br/>Bachelors of Business Information Technology, Strathmore University</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default{
   
    data:function(){
        return {
           description:"I'm a versatile full-stack software engineer proficient in Laravel and Vue.js. With a passion for crafting seamless digital experiences, I bring a blend of creativity and technical expertise to every project. Experienced in developing robust web applications, I thrive in collaborative environments and constantly seek to refine my skills.",
            visisble:false,      
        }

    },
    methods:{
        openTab(event,tabname){
            const tablinks = document.getElementsByClassName('tab-links');
                Array.from(tablinks).forEach((tablink)=>{
                    tablink.classList.remove('active-link');
                })
            
            const tabcontents = document.getElementsByClassName('tab-contents');
                 Array.from(tabcontents).forEach((tabcontent)=>{
                    tabcontent.classList.remove('active-tab');
                 })
             
            event.currentTarget.classList.add('active-link');
            document.getElementById(tabname).classList.add('active-tab');     
        }
    }
   
            
}
</script>