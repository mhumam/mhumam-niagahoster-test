<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header :style="{ height: '100px', padding: '10px 50px' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="Hosting">Hosting</a-menu-item>
        <a-menu-item key="Domain">Domain</a-menu-item>
        <a-menu-item key="Server">Server</a-menu-item>
        <a-menu-item key="Website">Website</a-menu-item>
        <a-menu-item key="Afiliasi">Afiliasi</a-menu-item>
        <a-menu-item key="Promo">Promo</a-menu-item>
        <a-menu-item key="Pembayaran">Pembayaran</a-menu-item>
        <a-menu-item key="Review">Review</a-menu-item>
        <a-menu-item key="Kontak">Kontak</a-menu-item>
        <a-menu-item key="Blog">Blog</a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>


<script>
export default {
  name: "menu",
  props: {
    selectedCustomer: String
  }
};
</script>