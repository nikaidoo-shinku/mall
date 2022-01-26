<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue"

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
    }),
  },
};
</script>

<style scoped>
/* .cart {
  height: 100vh;
} */

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

/* .cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
} */
</style>