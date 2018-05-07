<template>
            <figure class="talent__img-container">
                <span class="talent__img">
					<img :src="profilesData.imgPath" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link" @click="onOpenPerson">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
							</span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">{{ profilesData.name }}</p>
                            <span class="talent__category">{{ profilesData.category }}</span>
                        </div>
                    </a>
                </figcaption>
            </figure>
</template>
<script>
export default {
  props: ['profilesData'],
  methods: {
      onOpenPerson() {

       this.$router.push(`/profile/${this.profilesData.id}`);
    },
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.talent__img-container {
    margin: 0;
    padding: 0;
    width: 25%;
    position: relative;
    cursor: pointer;
    &:hover .talent__hover {
        transform: rotateY(0);
    }
    @include small {
        &:hover .talent__hover {
        transform: rotateY(360deg);
    }
    }
}

.talent__img {
    width: 325px;
    height: 380px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    >img {
        overflow: hidden;
        margin: -41px -156px -40px -30px;
    }
}

.talent__hover {
    width: 325px;
    cursor: pointer;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: transform .6s linear;
}

.talent__hover-link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    text-decoration: none;
    color: #fff;
}

.talent__icon--wrap {
    display: flex;
    justify-content: flex-end;
}

.talent__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: rgb(181, 211, 211);
    border-radius: 50%;
    &i {
        color: #fff;
    }
}

.talent__descr--wrap {
    text-align: center;
}

.talent__descr {
    margin: 25px 0 0 0;
    font-size: 18px;
    font-weight: 300;
}

.talent__category {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 300;
    display: block;
    margin-top: 10px;
}
</style>
