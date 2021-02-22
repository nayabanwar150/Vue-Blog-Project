<template>
  <div class="post-details">
    <div v-show="loading">
      <Loader></Loader>
    </div>
    <div class="navigations" v-show="!loading">
      <div class="back-btn">
        <p><router-link :to="'/user-posts/' + userId"><i class="fa fa-long-arrow-left"></i></router-link></p>
      </div>
      <div class="delete-btn"><router-link :to="'/user-posts/' + userId"><i class="fa fa-trash"></i></router-link></div>
    </div>
    <div class="posts" v-for="post in posts" :key="post.id">
      <div class="title">
        <h1>{{ post.title | toTitleCase }}</h1>
      </div>
      <div class="image">
        <img src="https://source.unsplash.com/random" />
      </div>
      <div class="author-details">
        <div class="author"><p>Post by : Nayab</p></div>
        <div class="updated"><p>Updated on : 2 months ago</p></div>
      </div>
      <div class="body">
        <p>{{ post.body | toTitleCase}}</p>
      </div>
    </div>
    <div class="comments-section" v-show="!loading">
      <div class="comment-info">
        <h3><i class="fa fa-comment"></i> Comments {{comments.length}}</h3>
      </div>
      <div v-for="comment in comments" :key="comment.id" class="comments">
        <div class="comment-user">
          <div class="image">
            <img v-bind:src="'https://joeschmoe.io/api/v1/' + comment.id" />
          </div>
        </div>
        <div class="comments-body">
          <h3>{{ comment.name | toTitleCase}}</h3>
          <p>{{ comment.body | formatString | toTitleCase}}</p>
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
      userId: this.$route.params.userid,
      postId: this.$route.params.postid,
      posts: [],
      comments: [],
      loading: false,
    };
  },
  props: {
    msg: String,
  },
  async created() {
    try {
      this.loading = true;
      const response = await axios.all(
          [
              axios.get('https://jsonplaceholder.typicode.com/posts/?userId='+this.userId+'&id='+this.postId),
              axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.postId)
          ]
      );
      this.posts = response[0].data;
      this.comments = response[1].data;
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  },
  filters:{
      formatString(value){
          return value.slice(0,70)+ ' ...';
      }
  }
};
</script>

<style scoped>
.post-details {
  margin: auto;
  width: 60%;
  border: 0.8px solid #eee;
  padding: 15px;
}

.navigations,
.author-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.navigations i {
  font-size: 23px;
  font-weight: 700;
}

.back-btn .fa {
  font-size: 40px;
}

.posts .title h1 {
  margin: 20px 0;
  text-align: left;
  font-weight: 600;
}

.posts .image img {
  width: 100%;
  height: 310px;
}

.author-details {
  margin: 10px 0;
}

.posts .body p {
  margin: 15px 0;
  text-align: left;
}

.comments-section {
  margin: 20px 0;
  text-align: left;
  border: 1px solid #eee;
  padding: 20px;
}

.comments{
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
}

.comment-user .image img {
  height: 60px;
  width: 60px;
  border: 0.8px solid #eee;
  border-radius: 50%;
}

.comments .comments-body{
    margin-left: 10px;
    border-bottom: 1px solid #eee;
}

.comments-body p{
    margin: 8px 0;
}
</style>