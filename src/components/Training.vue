<template>
  <div
    class="training h-64 w-full bg-no-repeat bg-center">
    <div class="overlay w-full h-full flex flex-col items-center justify-center">
      <span class="block text-grey uppercase">Live Training</span>
      <h2 class="text-white my-4">Get Training on Pregnancy on Thursday</h2>
      <button
        class="bg-indigo hover:bg-indigo-dark text-white font-semibold shadow rounded px-8 py-3">
        Join now</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .training {
    background-image: url('../assets/denis-mukwege-2.jpg');
    background-position: center -100px;

    .overlay {
      background-color: rgba(28, 28, 29, 0.9);
    }
  }
</style>
