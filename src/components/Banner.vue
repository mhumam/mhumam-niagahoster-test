
<style scoped>
.banner-image {
  height: 100%;
}

.description-banner {
  text-align: left;
}
</style>
<template>
  <div>
    <a-row>
      <a-col
        :lg="{ span: 12 }"
        :md="{ span: 24 }"
        :sm="{ span: 24 }"
        :xs="{ span: 24 }"
        class="description-banner"
      >
        <h1>PHP Hosting</h1>
        <h2>Cepat, handal, penuh dengan modul PHP yang Anda butuhkan</h2>
        <ul>
          <li>Solusi PHP untuk performa query yang lebihh Cepat</li>
          <li>Kosumsi memori yang lebih rendah</li>
          <li>Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7</li>
          <li>Fitur Enkripsi IonCube dan Zend Guard Loaders</li>
        </ul>
      </a-col>
      <a-col :lg="{ span: 12 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <img class="banner-image" :src="'/assets/images/illustration banner PHP hosting.svg'" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "ant-design-vue";

Vue.use(Button);

export default {
  name: "banner",
  props: {
    selectedCustomer: String
  },
  components: {
    Button
  }
};
</script>