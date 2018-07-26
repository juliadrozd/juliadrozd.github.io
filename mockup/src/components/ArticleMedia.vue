<template>
    <aside class="media__article--wrap">
        <h2 class="section__title">Sevenoaks</h2>
        <p class="media__article--descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae harum perspiciatis esse illum. Accusantium a, nisi sit incidunt obcaecati unde veniam repudiandae quo consequatur animi quam voluptates atque cum ullam.
            Ipsam quaerat culpa ex. Repellat aliquam consequatur quasi, accusamus eveniet doloribus aperiam fugiat cumque perspiciatis magni autem animi quos dignissimos ad facilis nulla sapiente quis deserunt veniam illo eius quas!
        </p>
        <p class="media__article--descr">
            Consectetur quam architecto reiciendis nesciunt provident eaque accusantium quidem ex molestiae distinctio aperiam ullam officia quibusdam omnis velit, ratione, consequatur voluptatum ipsam vitae aliquam nemo optio ipsa? Sunt, reprehenderit doloremque?
            Distinctio necessitatibus officiis officia quam magnam. 

        </p>
        <a href="#" class="media__article--link">Read more >></a>
    </aside>

</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.media__article--wrap {
    width: 49%;
    @include  small {
       width: 100%;
    }
}
.media__article--descr {
    margin-bottom: 10px;
    font-size: 14px;
    color: $main-color;
    
}
.media__article--link {
    text-transform: uppercase;
    color: $red-color;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: color .3s ease-in-out;

    &:hover {
        color: $hover-color;
    }
}
</style>