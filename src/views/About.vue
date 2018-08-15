<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { login } from "@/api/testApi";
export default {
  data() {
    return {
      userName: "root",
      password: 123456
    };
  },
  methods: {
    _getBanner() {
      login(this.userName, this.password).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this._getBanner();
  }
};
</script>
