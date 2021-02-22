<template>
  <div class="header">
    <header>
      <div class="logo">
        <router-link to="/"><h1>Blog Posts</h1></router-link>
      </div>
      <div class="links">
        <router-link to='/'><button>Home</button></router-link>
      </div>
    </header>
  </div>
</template>


<style scoped>
header {
    width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 18px;
  margin-bottom: 15px;
}

.logo h1 {
  font-weight: 800;
  color: #fff;
}

button {
  padding: 8px 12px;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 600;
  background-color: transparent;
}
button:hover {
  animation: ease-out 30s;
  border: 2px solid crimson;
  color: crimson;
}
</style>
