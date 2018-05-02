<template>
  <div>
     {{ id }}
  </div>
</template>

<script>
    export default {
        props: ['personsData'],
        data() {
            return {
                    n: 1,
            }
      
        },
        watch: {
            '$route': function (newValue, oldValue) {
                console.log(newValue);
            },
        },
        created() {
        this.id = this.$route.params;
        }
    }
</script>