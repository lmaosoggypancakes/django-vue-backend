<template>
    <div>
        <h2 class="title" id="title">{{post.title}}<span class="tag is-danger" v-if="post.closed">Closed</span></h2>
        <div class="message"></div>
        <div class="columns">
            <div class="column">
                <div class="box">
                    <figure class="image is-128x28">
                        <img :src="post.image">
                    </figure>
                </div>
            </div>

            <div class="column">
                <div class="box">
                    <p>{{post.desc}}</p>
                    <hr>
                    <p>Current Bid: <strong>${{highest.bid}}</strong> by <strong>{{highest.bidder["username"]}}#{{highest.bidder["id"]}}</strong></p>
                </div>
                <hr>
                <div class="box">
                    <h5 class="subtitle">By <strong>{{post.host.username}}#{{post.host.id}}</strong></h5>
                </div>
                <div>
                    <div class="field has-addons has-addons-centered">
                        <p class="control">
                            <span class="select">
                            <select v-model="unit">
                                <option value="$">$</option>
                                <option value="£">£</option>
                                <option value="€">€</option>
                                <option values="¥">¥</option>
                            </select>
                            </span>
                        </p>
                        <p class="control">
                            <input class="input" type="text" placeholder="Amount of money" v-model="bid" id="bid_val">
                        </p>
                        <p class="control">
                            <button class="button is-primary" :disabled="post.closed" @click="submit()" id="submit_bid">
                            Place Bid
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
    export default {
        name: "ViewPost",
        data() {
            return {
                bid: 0,
                post: {
                    'title': 'Loading...',
                    'closed': false,
                    'image': 'Loading...',
                    'desc': 'Loading...',
                    'host': {
                        'username': 'Loading...',
                        'id': 'Loading...'
                    }
                },
                unit: '',
                amount: '',
                highest: {
                    bid: 0,
                    bidder: {
                        'username': 'Loading...',
                        'id': 'Loading...'
                    }
                },
                currencies: '',
                rates: ''
            }
        },
        mounted() {
             fetch("https://api.exchangeratesapi.io/latest?base=USD").then(res => res.json()).then(data => {
                this.rates = data.rates
            })
            fetch("http://127.0.0.1:8000/api/post/" + this.$route.params.id).then(res => res.json()).then(data => {
                console.log(data);
                this.post = data.post[0]
                this.highest = data.highest
            })
        },
        methods: {
            convert() {
                let currencies = {
                    '€': "EUR",
                    '£': "GBP",
                    '¥': "JPY",
                    '$': "USD"
                }
                this.amount = (1 / this.rates[currencies[this.unit]]) * this.bid
            },
 
            submit() {
                this.convert()
                $("#submit_bid").prop("class", "button is-primary is-loading")
                $("#submit_bid").prop("disabled", true)
                let body = {
                    post: this.post.id,
                    user: JSON.parse(window.localStorage.getItem('user')).id,
                    bid: this.amount
                    }
                console.log("Body: " ); console.log(body)
                fetch("http://127.0.0.1:8000/api/bid", {
                    method: 'PUT',
                    body: JSON.stringify(body)
                }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    const alert = document.createElement("article")
                    alert.className = data.class
                    alert.innerHTML = `
                        <div class="message-header">
                            <p>${data.message}</p>
                            <button class="delete" aria-label="delete" onclick="document.querySelector('.message').innerHTML = ''"</button>
                        </div>
                    `
                    alert.id = "alert"
                    $(".message").html("")
                    document.querySelector(".message").appendChild(alert)
                    $("#submit_bid").attr("class", "button is-primary")
                    $("#submit_bid").attr("disabled", false)
                    this.highest =  data.last_bid
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../node_modules/bulma";
#title {
    text-align: center;
    margin-bottom: 5vh;
}
</style>
