<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar/Navbar.vue";
</script>

<template>
  <div>
    <Navbar></Navbar>
    <RouterView />
  </div>
</template>
