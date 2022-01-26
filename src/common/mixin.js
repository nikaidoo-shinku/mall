import {
  debounce
} from "./utils"

export const itemListenerMixin = {
  data() {
    return {
      itemListener: null
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemListener = () => {
      // console.log('----');
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemListener)
    console.log('hahaha');
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}
