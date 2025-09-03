<template>
  <v-container class="ma-0 pa-0 all-container">
    <v-row no-gutters class="all-row">
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
.all-container {
  max-width: 100%;
  height: 100vh;
}
.all-row {
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
