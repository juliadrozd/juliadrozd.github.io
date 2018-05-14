<template>
  <!--talent-categories__view--btn-->
    <div class="talent-categories__view--btn">
        <button class="views-module"
                @click="viewModule">
            <i class="material-icons">view_module</i>
        </button>

        <button class="views-list"
                @click="viewList">
            <i class="material-icons">view_list</i>
        </button>
    </div> <!--./talent-categories__view--btn-->
</template>
<script>
import { mapGetters } from 'vuex';

export default {
   data () {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'isShowList',
        ]),
        // isShowList() {
        //     return this.$store.state.isShowList;
        // }
    },
    methods: {
        viewList() {
            this.$store.dispatch('isList', true);
        },
        viewModule() {
            this.$store.dispatch('isList', false);
        }
        
    },
}
</script>

<style lang="scss">
@import './mixins/_mixins.scss';
.talent-categories__view--btn {
  > button {
    border: none;
    outline: none;
    background: none;
    margin: 3px;
    cursor: pointer;
    > i {
      color: rgba(0, 0, 0, .5);
      transition: color .3s ease-in-out;
      &:hover {
        color: $accent-color;
      }
    }
  }
}
</style>
