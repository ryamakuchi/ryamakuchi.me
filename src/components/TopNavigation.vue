<template>
  <div class="nav">
    <ul>
      <li class="nav-item"><a href="./">Home</a></li>
      <li class="nav-item"><a href="./about">About</a></li>
      <li class="nav-item"><a href="./contact">Contact</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 5;

    ul {
      padding: 0;
    }

    &-item {
      display: inline-block;
      margin: 1rem 5%;

      a {
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 2px;
      }
    }
  }

  @media (max-width: 768px) {
    .nav {
      text-align: left;

      &-item {
        width: 15%;
      }
    }
  }
</style>
