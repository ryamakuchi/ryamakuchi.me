<template>
  <div class="nav">
    <ul>
      <li class="nav-item"><router-link to="/" exact>Home</router-link></li>
      <li class="nav-item"><router-link to="/about">About</router-link></li>
      <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
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
      display: flex;
      justify-content: center;
    }

    &-item {
      display: inline-block;
      margin: 1rem;

      a {
        display: block;
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 2px;
        padding: 0 1rem;
        border-radius: 4px;
        transition: 0.5s;

        &:hover {
          color: #35495E;
          background: rgba(255,255,255,0.5);
          transition: 0.5s;
        }
      }

      a.nuxt-link-active{
        color: #35495E;
        background: rgba(255,255,255,0.9);
        box-shadow: 0 0px 5px rgba(0,0,0,0.8);
        transition: 0.5s;
      }
    }
  }
</style>
