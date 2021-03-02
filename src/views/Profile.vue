<template>
    <div>
        <div class="columns">
            <div class="column"></div>
            <div class="column">
                <img :src="pfp" alt="Avatar" class="avatar">
                <form @submit.prevent="updateUser()">
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control has-icons-left">
                            <input type="text" id="usernmae" class="input" :disabled='!editMode' v-model="username">
                            <span class="icon is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Profile Picture</label>
                        <div class="control has-icons-left">
                            <input type="text" id="pfp" class="input" :disabled='!editMode' v-model="pfp" placeholder="Picture URL">
                            <span class="icon is-left">
                                <i class="fas fa-image"></i>
                            </span>
                        </div>
                    </div>
                    <label class="label">Password</label>
                    <div class="field is-grouped">
                        <p class="control is-expanded">
                            <input class="input" :type="type" :disabled='!editMode' v-model="password">
                        </p>
                        <p class="control">
                            <a class="button is-primary" @click="visibility()">
                                <i :class="eye" id="eye"></i>
                            </a>
                        </p>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                            <input type="text" id="first" class="input" :disabled="!editMode" v-model="first" >
                        </div>
                        <div class="control">
                            <input type="text" id="last" class="input" :disabled="!editMode" v-model="last" >
                        </div>
                    </div> 
                </form>
                <button class="button is-primary" @click="switchForm()">Edit</button>
                <button class="button is-primary" @click="updateUser()" style="display: none;" id="save">Save</button>
            </div>
            <div class="column"></div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    name: "Profile",
    data() {
        return {
            id: '',
            username: '',
            password: '',
            email: '',
            first: '',
            last: '',
            editMode: false,
            type: 'password',
            eye: 'fas fa-eye-slash',
            pfp: ''
        }
    },
    mounted() {
        var user = window.localStorage.getItem('user');
        user = JSON.parse(user);
        this.id = user.id
        this.username = user.username
        this.password = user.password
        this.email = user.email
        this.first = user.first
        this.last = user.last
        this.pfp = user.image
    },
    methods: {
        visibility() {
            if (this.type === 'password') {
                this.type = 'text'
                this.eye = 'fas fa-eye'
                }
            else {
                this.type = 'password'
                this.eye = 'fas fa-eye-slash'
                }
        },
        switchForm() {
            this.editMode = true 
            event.target.style.display = 'none';
            $("#save").css('display', 'block')
        },
        updateUser() {
            console.log(this.username)
            fetch('http://127.0.0.1:8000/api/update', {
                method: 'PUT',
                body:  JSON.stringify({
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    first: this.first,
                    last: this.last,
                    id: this.id,
                    pfp: this.pfp
                })
            }).then(res => res.json()).then(data => {
                window.localStorage.setItem('user', data.user)
                alert("your data has been saved.")
            })
        }
    }
}
</script>
<style scoped>
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
