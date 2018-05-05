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
                    n: '',
            }
      
        },
        watch: {
            '$route': function (newValue, oldValue) {
            },
        },
        created() {
        this.id = this.$route.params;
        
        }
    }
</script>