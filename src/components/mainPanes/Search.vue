<template>
  <v-container class="ma-0 pa-0 w-100 h-100">
    <v-row no-gutters class="flex-column h-100">
      <v-col cols="3" class="search-wrapper w-100">
        <v-row no-gutters class="h-100 pt-12 py-8 px-8 justify-space-between">
          <v-col cols="3">
            <v-text-field label="本のタイトル"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="作者"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="出版社"></v-text-field>
          </v-col>
          <v-col cols="8"></v-col>
          <v-col cols="4"><v-btn class="w-75 h-100">検索</v-btn></v-col>
        </v-row>
      </v-col>
      <v-col cols="9" class="contents-wrapper w-100 pa-3">
        <v-data-table class="h-100"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// defineProps<{ msg: string }>();
</script>

<style scoped>
.search-wrapper {
  max-width: none;
}
.contents-wrapper {
  max-width: none;
}
</style>
