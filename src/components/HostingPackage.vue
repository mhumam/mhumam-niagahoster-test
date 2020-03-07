
<style scoped>
.hosting-list {
  padding: 0 100px;
}

.hosting-feature img {
  width: 50px;
}

.hosting-feature .title {
  font-size: 20px;
  font-weight: 900;
}
</style>
<template>
  <div>
    <a-row>
      <a-col :span="24">
        <h1>Powerful dengan Limit PHP yang Lebih Besar</h1>
      </a-col>
    </a-row>
    <a-row class="hosting-list">
      <a-col :span="12">
        <a-list size="small" bordered :dataSource="ListHostingA">
          <a-list-item slot="renderItem" slot-scope="item, index">{{item}}</a-list-item>
        </a-list>
      </a-col>
      <a-col :span="12">
        <a-list size="small" bordered :dataSource="ListHostingB">
          <a-list-item slot="renderItem" slot-scope="item, index">{{item}}</a-list-item>
        </a-list>
      </a-col>
    </a-row>
    <a-row :style="{margin:'40px auto'}">
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="hosting-feature">
          <div class="security-content">
            <img :src="'/assets/images/php_semua_versi.svg'" />
          </div>
          <div class="title">PHP Semua Versi</div>
          <div class="security-title">
            Pilih mulai versi PHP 5.3 s/d PHP 7.
            <br />Ubah sesuka Anda !
          </div>
        </div>
      </a-col>
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="hosting-feature">
          <div class="security-content">
            <img :src="'/assets/images/mysql.svg'" />
          </div>
          <div class="title">MySQL Versi 5.6</div>
          <div class="security-title">
            Nikmati MySQL versi terbaru, tercepat dan
            <br />kaya akan fitur
          </div>
        </div>
      </a-col>
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="hosting-feature">
          <div class="security-content">
            <img :src="'/assets/images/panel_hosting_cpanel.svg'" />
          </div>
          <div class="title">Panel Hosting cPanel</div>
          <div class="security-title">
            Kelola website dengan panel canggih yang
            <br />familiar di hati Anda.
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row :style="{margin:'40px auto'}">
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="hosting-feature">
          <div class="security-content">
            <img :src="'/assets/images/uptime.svg'" />
          </div>
          <div class="title">Garansi Uptime 99.9%</div>
          <div class="security-title">
            Data center yang mendukung kelangsungan
            <br />website And 24/7
          </div>
        </div>
      </a-col>
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="hosting-feature">
          <div class="security-content">
            <img :src="'/assets/images/indodb.svg'" />
          </div>
          <div class="title">Database InnoDB Unlimited</div>
          <div class="security-title">
            Jumlah dan ukuran database yang tumbuh
            <br />sesuai kebutuhan anda
          </div>
        </div>
      </a-col>
      <a-col :lg="{ span: 8 }" :md="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <div class="hosting-feature">
          <div class="security-content">
            <img :src="'/assets/images/mysql_remote.svg'" />
          </div>
          <div class="title">Wildcard Remote MySQL</div>
          <div class="security-title">
            Mendukung s/d 25 ma_user_connections
            <br />dan 100 max_connections
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "ant-design-vue";

Vue.use(Button);

const ListHostingA = [
  "max execution time 300s ",
  "max execution time 300s",
  "php memory limit 1024 MB"
];

const ListHostingB = [
  "post max size 128 MB ",
  "upload max filesize 128 MB",
  "max input vars 2500"
];

export default {
  name: "banner",
  props: {
    selectedCustomer: String
  },
  components: {
    Button
  },
  data() {
    return {
      ListHostingA,
      ListHostingB
    };
  }
};
</script>