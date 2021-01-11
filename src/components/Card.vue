<template>
<div class="card" @click="handleClick" style="height: 100px">
    <div class="card-content has-text-centered">
        <span v-if="show" class="animate__animated animate__fadeIn animate__fast">
          {{value}}            
        </span>
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
      show: Boolean,
      isLocked: Boolean,
      value: Number
    },
    methods: {
      handleClick () {
        if( ! this.isLocked) {
          this.$emit('click', this.value)
        }
      }
    }
}
</script>
