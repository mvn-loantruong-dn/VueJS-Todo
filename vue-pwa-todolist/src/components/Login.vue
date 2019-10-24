<template>
  <div class="page-login">
    <div class="login-header">
      <img class="img-covered" src="@/assets/img/logo.png" alt="" />
    </div>
    <div class="container">
      <div class="login-form">
        <form action="#" method="post">
          <h2 class="login-title">Login Here</h2>
          <div class="form-group">
            <input class="form-input" type="email" placeholder="Email" name="email" required />
          </div>
          <div class="form-group">
            <input class="form-input" type="password" placeholder="Password" name="password" required />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <div class="login-or">
          <h5 class="pros"><span>Or</span></h5>
        </div>
        <ul class="social-login">
          <li class="social-item">
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li class="social-item">
            <a href="#"><i class="fa fa-google"></i></a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default {
  name: 'login',
  components: {},
};
</script>
