<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <!-- <li v-for="(item, index) in cartList" :key="index">{{ item }}</li> -->
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
import CartListItem from './CartListItem'

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  // props: {
  //   cartList: {
  //     type: Array,
  //     default() {
  //       return []
  //     }
  //   }
  // },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated () {
    this.$refs.scroll.refresh()
    // console.log('kkkk');
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}

.content {
  height: 100vh;
  overflow: hidden;
}
</style>
