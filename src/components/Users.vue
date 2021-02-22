<template>
  <div class="users">
    <div v-show="loading">
      <Loader></Loader>
    </div>
    <div class="cards">
      <div v-for="user in users" :key="user.userId" class="card">
        <div class="details">
          <div class="user-pic">
            <div class="image">
              <img v-bind:src="'https://joeschmoe.io/api/v1/' + user.name" />
            </div>
          </div>
          <div class="user-details">
            <div class="name">
              <h2>{{ user.name }}</h2>
            </div>
            <div class="user-name">
              <p>@{{ user.username }}</p>
            </div>
          </div>
        </div>
        <div class="company-name">
          <div class="status" v-status></div>
          <h5>{{ user.company.name }}</h5>
        </div>
        <div class="phone">
          <p><i class="fa fa-phone"></i> {{ user.phone }}</p>
        </div>
        <div class="email">
          <p><i class="fa fa-envelope"></i> {{ user.email }}</p>
        </div>
        <div class="buttons">
          <router-link :to="'/user-posts/' + user.id"
            ><button>View Posts</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "./Loader";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      users: [],
      loding: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/users`
      );
      this.users = response.data;
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.users {
  width: 90%;
  margin: auto;
  justify-content: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
.status {
  width: 12px;
  height: 12px;
  border: 0 solid #eee;
  border-radius: 50%;
  margin: 3px 6px 0 0;
  align-items: center;
}
.card {
  width: 350px;
  border: 2px solid #eee;
  margin: 10px;
  padding: 15px;
}

.card:hover {
  border-bottom: 3px solid #000;
  box-shadow: 1px 1px 2px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 3px 6px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 3px 6px -1px rgba(0, 0, 0, 0.75);
}
.user-name,
.user-pic,
.company-name,
.phone,
.email {
  margin: 8px 0;
}
.company-name {
  display: flex;
  flex-wrap: wrap;
}
.image img {
  height: 60px;
  width: 60px;
  border: 0.8px solid #eee;
  border-radius: 50%;
}
.buttons button {
  float: right;
  padding: 8px 12px;
  border: none;
  color: #fff;
  font-weight: 600;
  background-color: #000;
}
.buttons button:hover {
  animation: ease-out 30s;
  border: 2px solid #000;
  color: #000;
  background-color: transparent;
}
.details {
  display: flex;
  flex-wrap: wrap;
}
.user-details {
  margin-left: 15px;
  padding-top: 12px;
}
.user-details .name h2 {
  font-size: 20px;
  font-weight: 700;
}
.user-details .user-name p {
  font-size: 14px;
  color: #048aa1;
}
i {
  font-size: 12px;
  margin-right: 5px;
}
.fa-phone {
  font-size: 15px;
}
.company-name h5 {
  font-size: 16px;
}
</style>