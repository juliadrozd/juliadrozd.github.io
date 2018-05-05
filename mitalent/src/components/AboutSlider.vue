<template>
  <section class="comment">
      <h1 class="comment__title">Clients say about us</h1>

      <button @click="showForm" id="js-testimonials-btn" class="section-btn">Add comment</button>

            <transition name="slide">
                <!--testimonials__form--wrap-->
                <div v-if="isShowForm" class="testimonials__form--wrap">
                     <form id="js-testimonials__form" class="testimonials__form" action="index.html" method="get">
                        <fieldset>
                            <input v-model.lazy="name" name="name" type="text" id="js-testimonials__name" placeholder="Your name" maxlength="20">
                        </fieldset>
                        <fieldset>
                            <input v-model.lazy="email" name="email" type="email" id="js-testimonials__email" placeholder="Your e-mail" maxlength="30">
                        </fieldset>

                        <fieldset>
                            <textarea v-model.lazy="comment" name="comment" id="js-testimonials__comments" placeholder="Comment" maxlength="400"></textarea>
                        </fieldset>

                        <div class="testimonials__form--add--wrap">
                            <button @click.prevent="getNewComment" id="js-testemonials-add-btn" type="submit" class="testimonials__form--add">Add your comment</button>
                        </div>
                        <p id="testimonials__form--error"></p>
                    </form>
                </div>
                <!--./testimonials__form--wrap-->
            </transition>

            <!--testimonials__slider-wrap-->
            <div id="first-slider" class="testimonials__slider-wrap">

                <button id="js-prev--btn" class="testimonials__slider-btn testimonials__slider-btn--prev">
					<i class="material-icons">arrow_back</i>
				</button>

                <div class="testimonials__slider-container">
                    <div class="testimonials__slider-track">
                        <figure class="testimonials__slider-item">
                            <figcaption class="testimonials__slider-descr-wrap">
                                <h3 class="testimonials__slider-title">
                                        {{ name }}
                                </h3>
                                <p class="testimonials__slider-descr">
                                        {{ comment }}
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <button id="js-next--btn" class="testimonials__slider-btn testimonials__slider-btn--next">
					<i class="material-icons">arrow_forward</i>
				</button>

            </div>
            <!--./testimonials__slider-wrap-->

            <!--testimonials__slider-dots-list-->
            <ul class="testimonials__slider-dots-list">
                <li class="testimonials__slider-dots-item">
                    <button class="testimonials__slider-dots-btn"></button>
                </li>
                <li class="testimonials__slider-dots-item testimonials__slider-dots-item--active">
                    <button class="testimonials__slider-dots-btn"></button>
                </li>
                <li class="testimonials__slider-dots-item">
                    <button class="testimonials__slider-dots-btn"></button>
                </li>
            </ul>
    
    <div v-if="isShowOverlay" @click="closeForm" class="overlay"></div>
  </section>
</template>
<script>
import firebase from 'firebase'

export default {
    data () {
        return {
            isShowForm: false,
            isShowOverlay: false,
            name: '',
            email: '',
            comment: '',
      }
    },
 methods: {
     showForm() {
         this.isShowForm = this.isShowForm;
          this.isShowOverlay = this.isShowOverlay;
        if (this.isShowForm = true) {
            this.isShowOverlay = true;
        }
     },
      closeForm() {
            this.isShowForm = false;
            setTimeout(() => { this.isShowOverlay = false; }, 250);
      },
    //     onFileChange(e) {
    //         var files = e.target.files || e.dataTransfer.files;
    //             if (!files.length)
    //                 return; 
    //             this.createImage(files[0]);
    // },
    //     createImage(file) {
    //         var image = new Image();
    //         var reader = new FileReader();
    //         var vm = this;

    //          reader.onload = (e) => {
    //             vm.image = e.target.result;
    //         };
    //     reader.readAsDataURL(file);
      
    //     this.file = file;
      
    //  },
        
     getNewComment() {
        this.name = this.name;
        this.email = this.email;
        this.comment = this.comment;
        const commentsRef = firebase.database().ref('comments');
        const newMessageRef = commentsRef.push();
        // // Create the file metadata
        // let metadata = {
        //     contentType: 'image/jpeg'
        // };

        // const storageRef = firebase.storage().ref(this.file.name);
        //  //Upload file
        //  let task = storageRef.put(this.file, metadata);
        //     task.on('state_changed',
        //     function getURL() {
        //     const imgurl = task.snapshot.downloadURL;
        //     this.image = imgurl;
        newMessageRef.set({ name: this.name, comment: this.comment, email: this.email });

            // });
        this.closeForm();
    },
    getAllComents() {

        this.commentsRef = firebase.database().ref('comments/');
        // Get all comments from DB
        this.commentsRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            let childKey = childSnapshot.key; // comment's ID
            let childData = childSnapshot.val(); // get object
               this.name = childData.name;
               this.comment = childData.comment;   

                console.log(name, comment);
        });
    })
    },
},
created: function() {
      this.getAllComents()
  }
}

</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
@import './styles/_aboutForm.scss';
.comment {
    @include flexCenter;
    flex-flow: column;
    > h1 {
    font-family: 'Poppins', sans-serif;
    color: $main-color;
    font-size: 40px;
    line-height: 24px;
    font-weight: 400;
    position: relative;
    margin: 0 0 50px 0;
    padding: 0;
    display: block;
    padding-bottom: 30px;
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translate(50%);
            width: 50%;
            height: 1px;
            background: $accent-color;        
        }
    }
    > button {
    @include flexCenter;
    text-decoration: none;
    width: 220px;
    height: 60px;
    border: none;
    outline: none;
    background: rgb(181, 211, 211);
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    border-radius: 50px;
    margin-top: 30px;
    cursor: pointer;
    transition: background .3s ease-in-out;
    &:hover {
        background: rgba(45, 47, 51, 0.9);
    }
    
  }
}

.testimonials__slider-wrap {
    margin-top: 40px;
    padding: 0 70px;
    position: relative;
    width: 70%;
   
    @include small {
        width: 100%;
        padding: 0;
    }
}

.testimonials__slider-btn {
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    cursor: pointer;
    border: none;
    > i {
        color: $hover-color;
        transition: color .3s ease-in-out;
    }
    

    &:hover > i{
        color: $accent-color;
    }
    &:active > i {
        color: rgba(0, 0, 0, .3);
    }
    @include small {
        display: none;
    }
}

.testimonials__slider-btn--prev {
    left: 0;
}

.testimonials__slider-btn--next {
    right: 0;
}

.testimonials__slider-container {
    width: 100%;
    font-size: 0;
    @include small {
        text-align: center;
        border: 1px solid #e5ddd5;
    }
}

.testimonials__slider-track {
    width: 100%;
    height: 160px;
    position: relative;
    overflow: hidden;
    
    @include small {
        display: flex;
        flex-flow: row wrap;
    }
}

.testimonials__slider-item {
    width: 100%;
    height: 160px;
    margin: 0;
    font-size: 0;
    position: absolute;
    display: block;
    background: url('https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/planks.jpg?alt=media&token=7983ec6f-87c8-44c0-90c2-11d237951e93');

    @include small {
        display: flex;
    }
}

.testimonials__slider-title {
    margin: 0;
}

.testimonials__slider-img-wrap,
.testimonials__slider-descr-wrap {
    display: inline-block;
    font-size: 16px;
    vertical-align: top;
}

.testimonials__slider-descr-wrap {
    width: 100%;
    border-left: 0;
    min-height: 160px;
    padding: 30px 70px 0 70px;
    background: $accent-color;
    @include medium {
        padding: 0 20px;
    }
    @include small {
        width: 100%;
        padding: 0;
        border: none;
    }
}

.testimonials__slider-title {
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-style:italic;
    font-size: 24px;
    margin: 0;
}

.testimonials__slider-descr {
    color: #fff;
    margin: 15px 0 0 0;
    font-size: 18px;
    line-height: 27px;
}

.testimonials__slider-dots-list {
    display: block;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 42px 0 0 0;
}

.testimonials__slider-dots-item {
    display: inline-block;
    > button {
        background: none;
    }
}

.testimonials__slider-dots-item:not(:last-child) {
    margin-right: 20px;
}

.testimonials__slider-dots-btn {
    display: block;
    border: 1px solid $hover-color;
    width: 10px;
    height: 10px;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: background .3s ease-in-out;
    transition: border-color .3s ease-in-out;
    &:hover {
        border-color: $accent-color;
        background: $accent-color;
    }

}

.testimonials__slider-dots-item--active .testimonials__slider-dots-btn {
    background: $hover-color;
    transition: background .3s ease-in-out;
    transition: border-color .3s ease-in-out;
    &:hover {
        border-color: $accent-color;
        background: $accent-color;
    }
}
.slide-enter, .slide-leave-active {
    transform: translateX(-100%);
  }
</style>

