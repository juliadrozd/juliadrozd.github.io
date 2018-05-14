<template>
  <section class="comment">
      <h1 class="comment__title">Clients say about us</h1>

      <button @click="showForm" id="js-testimonials-btn" class="section-btn">Add comment</button>

            <transition name="slide">
                <!--testimonials__form--wrap-->
                <div v-if="isShowForm" class="testimonials__form--wrap">
                     <form id="js-form" class="testimonials__form">

                        <fieldset>
                            <input @change="onFileChange" name="image" id="js-testimonials__avatar" type="file"  value="upload" accept="image/jpeg,image/png">
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

                <button @click="prev" id="js-prev--btn" class="testimonials__slider-btn testimonials__slider-btn--prev">
					<i class="material-icons">arrow_back</i>
				</button>

                <div class="testimonials__slider-container"
                    v-if="comments.length > 0">
                    <div class="testimonials__slider-track">
                        <figure class="testimonials__slider-item"    
                            v-for="(item, key) in comments"
                            :key="key"
                            >
                            <span class="testimonials__slider-img-wrap">
                                <img :src="item.image" alt="img" class="testimonials__slider-img">
                            </span>
                            <figcaption class="testimonials__slider-descr-wrap">
                                <h3 class="testimonials__slider-title">
                                        {{ item.name }}
                                </h3>
                                <p class="testimonials__slider-descr">
                                        {{ item.comment }}
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <button @click="next" id="js-next--btn" class="testimonials__slider-btn testimonials__slider-btn--next">
					<i class="material-icons">arrow_forward</i>
				</button>

            </div>
            <!--./testimonials__slider-wrap-->
            

            <!--testimonials__slider-dots-list-->
            <ul class="testimonials__slider-dots-list">
                <li class="testimonials__slider-dots-item">
                    <button @click="prev" class="testimonials__slider-dots-btn"></button>
                </li>
                <li class="testimonials__slider-dots-item testimonials__slider-dots-item--active">
                    <button class="testimonials__slider-dots-btn"></button>
                </li>
                <li class="testimonials__slider-dots-item">
                    <button @click="next" class="testimonials__slider-dots-btn"></button>
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
           
            comments: [],
            image: '',
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
    onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return; 
                this.createImage(files[0]);
    },
    createImage(file) {
            var image = new Image();
            var reader = new FileReader();

             reader.onload = (e) => {
                this.image = e.target.result;
            };
        reader.readAsDataURL(file);
        this.file = file;
        this.$emit('getNewComment', this.file);
        
     },

     getNewComment(file, name, comment, email) {
        let metadata = { contentType: 'image/jpeg' };
        let imageUrl;
        let key;
        let commentsRef = firebase.database().ref('comments');
        let newMessageRef = commentsRef.push();

        new Promise((resolve, reject) => {
        newMessageRef.set({ name: this.name, comment: this.comment, email: this.email, image: this.image })

        .then(data => {
            key = newMessageRef.key;
            return key
        })
        .then(fileData =>{  
            firebase.storage().ref(`comments/${key}${this.file.name}`).put(this.file, metadata)
            .on('state_changed', (snapshot) => {
                imageUrl = snapshot.downloadURL;
            
            return commentsRef.child(key).update({
                image: imageUrl
                })
            })
        })
         .then(() => {
             resolve();

             this.closeForm();
         })
        .catch(err => reject(err));
     })
     },
     getAllComments() {
        const self = this;
        firebase.database().ref('comments').once('value', function(snapshot){
            snapshot.forEach(function(childSnapshot){
                let childData = childSnapshot.val();
                self.comments.push(childData);
            });
        });  
    },
    next() {
        const sliderContainer = document.querySelector('.testimonials__slider-track');
        const dotsContainer = document.querySelector('.testimonials__slider-dots-list');

        let endCount = this.comments.length;
        let currentCount = 1;
        let position = 0;

        endCount = sliderContainer.children.length;
        let sliderItemLast = sliderContainer.lastElementChild;
        let sliderItemFirst = sliderContainer.firstElementChild;
        if (currentCount < endCount) {
            currentCount++;
            position = 0;

            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = sliderContainer.appendChild(cloneItem);

            sliderContainer.removeChild(sliderItemFirst); //удалили склонированы
            sliderItemFirst = sliderContainer.firstElementChild;
        }
        let dotsItem = dotsContainer.getElementsByTagName('li');
        for (let i = 0; i < dotsItem.length; i++) {
            let dotsCurrent = dotsItem[i].classList.remove('testimonials__slider-dots-item--active');
            dotsContainer.lastElementChild.classList.add('testimonials__slider-dots-item--active');
        }
    


    },
    prev() {
        const sliderContainer = document.querySelector('.testimonials__slider-track');
        const dotsContainer = document.querySelector('.testimonials__slider-dots-list');

        let endCount = this.comments.length;
        let currentCount = 1;
        let position = 0;

        let sliderItemLast = sliderContainer.lastElementChild;
        let sliderItemFirst = sliderContainer.firstElementChild;

        if (currentCount <= endCount) {
            endCount--;
            position = 0;
            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = sliderContainer.appendChild(cloneItem);

            sliderContainer.removeChild(sliderItemFirst); //удалили склонированы
            sliderItemFirst = sliderContainer.firstElementChild;
        }
        let dotsItem = dotsContainer.getElementsByTagName('li');
        for (let i = 0; i < dotsItem.length; i++) {
            let dotsCurrent = dotsItem[i].classList.remove('testimonials__slider-dots-item--active');
            dotsContainer.firstElementChild.classList.add('testimonials__slider-dots-item--active');
        }
    },
},
created() {
   this.getAllComments();
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
    width: 100%;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: $main-color;
    font-size: 40px;
    line-height: 44px;
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
    @include small {
      font-size: 24px;
    line-height: 24px;
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
    @include small {
      margin-top: 0;
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
    }
}

.testimonials__slider-track {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    
    @include small {
        display: flex;
        flex-flow: row wrap;
        height: 150px;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease-in-out;
    transition: transform 1s ease-in-out;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translateX(20px);
}
.testimonials__slider-item {
    width: 100%;
    height: 300px;
    margin: 0;
    font-size: 0;
    position: absolute;
    display: block;
    @include small {
        display: flex;
        height: 150px;
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

.testimonials__slider-img-wrap {
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    @include small {
        width: 150px;
        max-height: 100%;
    }
}

.testimonials__slider-img {
    width: 100%;
    display: block;
    @include small {
        width: 150px;
        min-height: 100%;
    }
}


.testimonials__slider-descr-wrap {
   width: calc(100% - 350px);
    border-left: 0;
    min-height: 300px;
    padding: 30px 70px 0 70px;
    margin-left: 20px;
    background: $hover-color;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
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
    color: $accent-color;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-style:italic;
    font-size: 30px;
    margin: 0;
     @include small {
        font-size: 20px;
    }
}

.testimonials__slider-descr {
    color:$accent-color;
    margin: 15px 0 0 0;
    font-size: 24px;
    line-height: 27px;
    @include small {
        font-size: 18px;
        line-height: 20px;
    }
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

