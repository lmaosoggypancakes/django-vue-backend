<template>
  <div>
    <div class="columns">
      <div class="column"></div>

      <div class="column">
        <form @submit.prevent="login()">

          <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="e.g soggy_pancakes" v-model="username" id="username_log" autocomplete="off">
                  <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                  </span>
              </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="password" v-model="password" id="password_visibility" autocomplete="off" >
                <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
                </span>
                <span class="icon is-small is-right">
                <i class="fas fa-eye" id="eye-icon"></i>
                </span>
            </div>
          </div>
          <label class="checkbox">
            <input type="checkbox" @click="visibility()">
              Show Password
          </label>
          <br>
          <button type="submit" id="login" class="button is-primary" :disabled="!(username && password)">Login</button>

        </form>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>
<script>
import $ from "../../node_modules/jquery"
export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
      user: {},
      see: false
    }
  },
  methods: {
    visibility() {
      if (this.see === false) {
        $("#password_visibility").attr("type", "text")
        $("#eye-icon").attr('class', 'fas fa-eye-slash')
        this.see = true
      } else if (this.see === true) {
        $("#password_visibility").attr("type", "password")
        $("#eye-icon").attr('class', 'fas fa-eye')
        this.see = false
      }
    },
    login() {
      document.querySelector("#login").className = 'button is-primary is-loading'
      fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        })
      }).then(res => res.json()).then(data => {
        if (data.valid === 'true') {
          this.$emit('is_user', true)
          this.$emit('update', JSON.stringify(data.user))
          this.$router.push("/")
        }
        else {
          alert(data.message)
          document.querySelector("#login").className = 'button is-primary'
        }
        window.localStorage.setItem("user", JSON.stringify(data.user))
        this.user = data.user
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../node_modules/bulma";
</style>