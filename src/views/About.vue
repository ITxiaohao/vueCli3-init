<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { getBanner } from "dorm/dormApi";

import { login } from "door/doorApi";

export default {
  data() {
    return {
      userName: "root",
      password: 123456
    };
  },
  created() {
    login(this.userName, this.password).then(res => {
      console.log(res);
    });
    getBanner().then(res => {
      console.log(res);
    });
  }
};
</script>
