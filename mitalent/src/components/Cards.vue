<template>
  <!--talent__content-->
        <div class="talent__content">

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/women2.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
							</span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/men1.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
							</span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/women3.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
							</span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/men2.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
							</span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/women4.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
						    <i class="material-icons">call_made</i>
						    </span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/men3.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
							</span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/women5.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
							</span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>

            <figure class="talent__img-container">
                <span class="talent__img">
					<img src="../assets/men4.jpg" alt="img">
				</span>
                <figcaption class="talent__hover hover-overlay-params">
                    <a href="#" class="talent__hover-link">
                        <div class="talent__icon--wrap">
                            <span class="talent__icon">
								<i class="material-icons">call_made</i>
						    </span>
                        </div>
                        <div class="talent__descr--wrap">
                            <p class="talent__descr">Jenny Garder</p>
                            <span class="talent__category">Model</span>
                        </div>
                    </a>
                </figcaption>
            </figure>
        </div>
        <!--./talent__content-->
</template>
<style lang="scss" scoped>
.talent__content {
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
    display: flex;
    flex-flow: row wrap;
}

.talent__img-container {
    margin: 0;
    padding: 0;
    width: 25%;
    position: relative;
    cursor: pointer;
    &:hover .talent__hover {
        transform: rotateY(0);
    }
}

.talent__img {
    display: block;
    width: 100%;
    >img {
        display: block;
        width: 350px;
        height: 380px;
    }
}

.talent__hover {
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
