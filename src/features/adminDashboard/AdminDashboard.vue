<template>
  <div>
    <h2>Admin Dashboard</h2>
    <router-link to='companies'>
      <div class="icon">🏢</div> Companies
    </router-link>
    <router-link to='fitness_clubs'>
      <div class="icon">🏋</div> Fitness Clubs
    </router-link>

  </div>
</template>

<style scoped>
  a {
    font-size: 20px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 4px;
    margin: 10px;
  }
  a:hover {
    background-color: #eee;
  }
  a:active {
    box-shadow: inset 0 0 5px #555;
  }
  .icon {
    font-size: 60px;
    display: inline-block;
  }
</style>
