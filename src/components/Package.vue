<style scoped>
h1 {
  font-weight: 700;
}

h2 {
  font-weight: 700;
}

.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}

.pricing-table .pricing-header .pt-price {
  font-family: "Montserrat";
  color: #4c4c4c;
  font-size: 30px;
  line-height: 70px;
  font-weight: bold;
  text-align: center;
  padding: 10px 40px;
}
</style>

<template>
  <a-row :gutter="16">
    <a-col
      class="gutter-row"
      :lg="{ span: 24 }"
      :md="{ span: 24 }"
      :sm="{ span: 24 }"
      :xs="{ span: 24 }"
      v-bind:style="{margin: '30px auto'}"
    >
      <h1>Paket Hosting Singapura yang tepat</h1>
      <h2>Diskon 10% + Domain dan SSL Gratis untuk anda</h2>
    </a-col>

    <a-col
      class="gutter-row"
      :lg="{ span: 6 }"
      :md="{ span: 24 }"
      :sm="{ span: 24 }"
      :xs="{ span: 24 }"
      v-for="packageitem in packagelist"
      :key="packageitem.id"
    >
      <a-card
        size="small"
        :title="packageitem.name"
        :headStyle="{fontSize: '24px'}"
        style="width: 100%"
      >
        <div v-bind:style="styleObject">
          <div
            v-bind:style="{fontSize: '18px', textDecoration:'line-through'}"
          >{{packageitem.beforediscount}}</div>
          <p>{{packageitem.afterdiscount}}</p>
        </div>
        <p>{{packageitem.user}} Pengguna Terdaftar</p>
        <div v-for="feature in packageitem.feature" :key="feature.id">{{feature}}</div>
        <a-button type="primary" v-bind:style="{marginTop: '18px'}" block>Pilih Sekarang</a-button>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "package",
  mounted() {
    axios({
      method: "GET",
      url: "assets/packagedata.json"
    }).then(response => {
      this.packagelist = response.data.package;
    });
  },
  data() {
    return {
      packagelist: [],
      styleObject: {
        fontFamily: "Montserrat",
        color: "#4c4c4c",
        fontSize: "30px",
        lineHeight: "30px",
        fontWeight: "bold",
        textAlign: "center"
        // padding: "10px 40px"
      }
    };
  }
};
</script>
