<template>
  <v-container class="ma-0 pa-0 w-100 h-100">
    <v-row no-gutters class="flex-column h-100">
      <v-col cols="1" class="w-100"> </v-col>
      <v-col cols="10" class="w-100">
        <v-row no-gutters class="flex-column w-100 h-100 px-4">
          <v-col cols="12" class="w-100">
            <v-btn class="serch-btn w-100">検索</v-btn>
            <v-btn class="serch-btn w-100 mt-4">登録</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1" class="w-100"> </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// defineProps<{ msg: string }>();
</script>

<style scoped>
.v-col-1 {
  max-width: none;
}
.v-col-10 {
  max-width: none;
}

.serch-btn {
  font-size: 24px;
}
</style>
