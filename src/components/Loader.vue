<template>
  <div class="loader-section">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  margin: auto;
  border: 13px solid #f3f3f3;
  border-top: 13px solid #000;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>