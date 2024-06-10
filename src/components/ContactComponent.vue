<template>
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="contact-icons fa-regular fa-envelope"></i> onjorew@gmail.com</p>
                    <p><i class="contact-icons fa-solid fa-phone"></i> 0713420287</p>
                    <div class="social-icons">
                       <a href="https://www.facebook.com/profile.php?id=100007569886040"><i class="fa-brands fa-facebook"></i></a> 
                       <a href="https://www.linkedin.com/in/wilson-o-98745b10b/"><i class="fa-brands fa-linkedin"></i></a> 
                    </div>
                    <a href="../cv/cv.pdf" download class="btn btn2">Download CV</a>
                </div>
                <div class="contact-right">
                    <form @submit.prevent="sendEmail">
                        <input type="text" name="Name" placeholder="Your Name" v-model="user.name" required>
                        <input type="email" name="Email" placeholder="Your Email" v-model="user.email" required>
                        <textarea name="message"  rows="6" placeholder="Your Message" v-model="user.desc" required></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import emailjs from '@emailjs/browser'

export default{

    data(){
        return {
          user:{ 
             name:'',
             email:'',
             desc:''
            }
        }
    },
    methods:{
        sendEmail(){
           
             const custommail = {
                to_name:this.user.email,
                from_name:this.user.name,
                message:this.user.desc
             }
             emailjs.send('service_k13ldnx','template_91zpfg9',custommail,'QvZw9HAQCUQgbMPot').then(
                (response) =>{
                    alert('Thank you for contacting me !',response.status,response.text)
                    //clear fields
                     this.clearFields()
                },
                (error) =>{
                    alert('FAILED...',error)
                }
             );
        },
        clearFields(){
             this.user.desc='';
             this.user.email='';
             this.user.name='';
        }

    }
}

</script>