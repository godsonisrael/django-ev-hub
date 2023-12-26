
<script>
import Layout from '../layout/Layout.vue';

export default {
  layout: (h, page) => h(Layout, [page]),
}
</script>


<script setup>
defineProps({ message: String })
</script>


<template>
<p>test</p>
</template>