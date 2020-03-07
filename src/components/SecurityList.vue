
<style scoped>
.security-list {
  margin: auto 0;
}

.security-content {
  height: 80px;
  display: flex;
}

.security-image {
  display: block;
  margin: 0 auto;
}

.security-title {
  text-align: center;
}
</style>
<template>
  <div>
    <a-row>
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="security-list">
          <div class="security-content">
            <img class="security-image" :src="'/assets/images/Hosting_zendguard.svg'" />
          </div>
          <div class="security-title">PHP Zend Guard Laoder</div>
        </div>
      </a-col>
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="security-list">
          <div class="security-content">
            <img class="security-image" :src="'/assets/images/composer.svg'" />
          </div>
          <div class="security-title">PHP Composer</div>
        </div>
      </a-col>
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="security-list">
          <div class="security-content">
            <img class="security-image" :src="'/assets/images/Hosting_ioncube.svg'" />
          </div>
          <div class="security-title">PHP IonCube Loader</div>
        </div>
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