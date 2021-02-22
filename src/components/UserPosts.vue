<template>
  <div class="user-posts">
    <div v-show="loading">
      <Loader></Loader>
    </div>
    <div class="back-btn" v-show="!loading">
        <p><router-link to='/'><i class="fa fa-long-arrow-left"></i></router-link></p>
      </div>
    <div class="cards">
    <div v-for="post in userPosts" :key="post.id" class="card">
      <div class="title">
        <h3>{{ post.title | toTitleCase }}</h3>
      </div>
      <div class="timeline">
        <p>Updated : 2 months ago</p>
        <router-link :to="'/post-details/'+userId+'&'+post.id"><button>View More</button></router-link>
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
    Loader
  },
  data() {
    return {
      userId: this.$route.params.userid,
      userPosts: [],
      loading: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/posts/?userId='+this.userId
      );
      this.userPosts = response.data;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
.user-posts {
  width: 90%;
  margin: auto;
}

.back-btn .fa {
  font-size: 40px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
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

.timeline {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
}

.timeline p {
  margin-top: 12px;
}

button {
  padding: 8px 12px;
  border: none;
  color: #fff;
  font-weight: 600;
  background-color: #000;
}
button:hover {
  animation: ease-out 30s;
  border: 2px solid #000;
  color: #000;
  background-color: transparent;
}
</style>
