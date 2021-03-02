<template>
    <div>
        <div class="notify"></div>
        <div class="columns">
            <div class="column">ad space</div>
            <div class="column">
                <h1 class="title">New Listing</h1>
                <progress class="progress is-info" :value="percent()" max="100">45%</progress>
                <hr>
                <form @submit.prevent='ready()'>
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control has-icons-left">
                            <input class="input" type="text" placeholder="My Teddy Bear" v-model="title">
                            <span class="icon is-small is-left">
                                <i class="fas fa-heading"></i>
                            </span>
                        </div>
                    </div>
                    <hr>
                    <div class="field">
                        <label class="label">Picture</label>
                        <div class="control has-icons-left">
                            <input class="input" type="text" placeholder="URL" v-model="picture">
                            <span class="icon is-small is-left">
                                <i class="fas fa-image"></i>
                            </span>                               
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control has-icons-left">
                            <textarea class="textarea"  v-model="desc"></textarea>                            
                        </div>
                    </div>
                    <hr>
                    <div class="field">
                        <label class="label">Starting Bid</label>
                        <div class="control has-icons-left">
                            <input type="number" v-model="min_bid" class="input">
                            <span class="icon is-small is-left">
                                <i class="fas fa-dollar-sign"></i>
                            </span>                               
                        </div>
                    </div>
                    <hr>
                    <div class="field">
                        <label class="label">End Time</label>
                        <div class="control has-icons-left">
                            <datepicker v-model="date" :lowerLimit="now" class="input" id="date"/>
                            <span class="icon is-small is-left">
                                <i class="fas fa-clock"></i>
                            </span>                               
                        </div>
                    </div>
                    <button type="submit" class="button is-primary" :disabled="!(percent() === 100)">Submit</button>
                </form>
            </div>
            <div class="column"></div>
        </div>

    </div>
</template>
<script>
    import Datepicker from 'vue3-datepicker'
    import { ref } from 'vue'

    import $ from 'jquery'
    export default {
        name: "NewPost",
        data() {
            return  {
                title: "",
                desc: "",
                picture: "",
                min_bid: 0,
                date: ref(new Date()),
                now: new Date(),
                progress: {
                    title: 0,
                    desc: 0,
                    piture: 0,
                    min_bid: 0
                }
            }
        },
        components: {
            Datepicker
        },
        methods: {
            notify(event, type) {
                let alert = document.createElement('div')
                alert.className = 'notification is-' + type
                alert.innerHTML = event
                $(".notify").html("")
                document.querySelector(".notify").appendChild(alert)
            },
            ready() {
                let tmp = $("#date").val()
                tmp = tmp.split("-")
                let body = {
                    title: this.title,
                    desc: this.desc,
                    picture: this.picture,
                    min_bid: this.min_bid,
                    user: JSON.parse(window.localStorage.getItem('user')).id,
                    end: {
                        month: tmp[1],
                        day: tmp[2],
                        year: tmp[0]
                    }
                }
                console.log(body);
                fetch("http://127.0.0.1:8000/api/new", {
                    method: "POST",
                    body: JSON.stringify(body)
                }).then(res => res.json()).then(data => {
                    this.notify(data.message, data.type)
                })
            },
            percent() {
                let num = 0;
                var i = 0;
                for (i in this.progress) {
                    num += this.progress[i]
                }
                return num;
            }
        },
        watch: {
            title: function(val) {
                if (val !== "") {this.progress.title = 25} else {this.progress.title = 0}
            },
            desc: function(val) {
                if (val !== "") {this.progress.desc = 25} else {this.progress.desc = 0}
            },      
            picture: function(val) {
                if (val !== "") {this.progress.picture = 25} else {this.progress.picture = 0}
            },
            min_bid: function(val) {
                if (val !== "") {this.progress.min_bid = 25} else {this.progress.min_bid = 0}
            },      
        }
    }
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma";
</style>