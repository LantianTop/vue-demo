<template>
  <div class="about">
    <h1>This is an about page</h1>
       <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/about/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/about/message">Message</router-link>
        </li>
      </ul>
      <router-view/>
  </div>
</template>
<script>
export default {
    name:"About",
}
</script>
<style scoped>

</style>