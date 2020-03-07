<template>
  <a-layout id="components-layout-demo-top" class="layout" style="padding: 0 100px">
    <Menu />
    <a-layout-content>
      <div :style="{ background: '#fff', padding: '64px', minHeight: '280px' }">
        <a-row :style="{margin:'40px auto'}">
          <Banner />
        </a-row>
        <a-divider />
        <a-row :style="{margin:'40px auto'}">
          <SecurityList />
        </a-row>
        <a-row :style="{margin:'40px auto'}">
          <Package />
        </a-row>
        <a-row :style="{margin:'40px auto'}">
          <HostingPackage />
        </a-row>
      </div>
    </a-layout-content>
  </a-layout>
</template>
<style>
#components-layout-demo-top .logo {
  width: 250px;
  height: 100px;
  float: left;
  background-image: url("/assets/images/niagahosterlogo.png");
  background-repeat: no-repeat;
}
</style>


<script>
import Menu from "@/components/Menu.vue";
import Banner from "@/components/Banner.vue";
import SecurityList from "@/components/SecurityList.vue";
import HostingPackage from "@/components/HostingPackage.vue";
import Package from "@/components/Package.vue";

export default {
  name: "menu",
  props: {
    selectedCustomer: String
  },
  components: {
    Menu,
    Banner,
    SecurityList,
    HostingPackage,
    Package
  }
};
</script>