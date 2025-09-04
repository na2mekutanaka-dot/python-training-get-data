<template>
  <v-container class="ma-0 pa-0 top-container">
    <v-row no-gutters class="top-row">
      <v-col cols="12" class="header-wrapper">
        <Header />
      </v-col>
      <v-col cols="2" class="navigation-wrapper">
        <Navigation />
      </v-col>
      <v-col cols="10" class="contents-wrapper">
        <Search />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Header from "./components/headers/Header.vue";
import Navigation from "./components/leftPanes/Navigation.vue";
import Search from "./components/mainPanes/Search.vue";
</script>

<style scoped>
.v-container {
  max-width: none;
}
.top-container {
  height: 100vh;
}
.top-row {
  max-width: 100%;
  height: 100vh;
}
.header-wrapper {
  height: 80px;
}
.navigation-wrapper {
  height: calc(100% - 80px);
}
.contents-wrapper {
  height: calc(100% - 80px);
}
</style>
