<template>
  <div class="top">
    <iframe
      class="bg-video"
      src="https://www.youtube.com/embed/8013xOAJYCY?autoplay=1&controls=0&disablekb=1&iv_load_policy=3&loop=1&playlist=8013xOAJYCY&modestbranding=1&rel=0&showinfo=0&mute=1"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <img class="bg-image" src="~/assets/images/bg-image.jpg" alt="背景画像"/>
    <div class="contents">
      <h1 class="hero">rry's web site.</h1>
      <div class="social">
        <div class="social-icon">
          <a href="https://twitter.com/ryamakuchi" target="_blank">
            @ryamakuchi
            <img src="~/assets/images/icon-twitter.svg"/>
          </a>
        </div>

        <div class="social-icon">
          <a href="https://www.facebook.com/ryamakuchi" target="_blank">
            @山口里央
            <img src="~/assets/images/icon-facebook.svg"/>
          </a>
        </div>

        <div class="social-icon">
          <a href="https://www.instagram.com/junk_code/" target="_blank">
            @junk_code
            <img src="~/assets/images/icon-instagram.svg"/>
          </a>
        </div>

        <div class="social-icon">
          <a href="https://github.com/ryamakuchi" target="_blank">
            @rry
            <img src="~/assets/images/icon-github.svg"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .bg-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 118vw;
    height: 118vh;
    z-index: -3;
  }

  .bg-image {
    display: none;
  }

  .contents {
    width: 80vw;
    height: 80vh;
    margin: 10vh auto 10vh;
  }

  .hero {
    display: block;
    position: absolute;
    right: 10%;
    bottom: 10%;
    font-size: 5vw;
    color: #fff;
  }

  .social {
    position: relative;
    top: 10%;
    left: 0;
    text-align: right;

    &-icon {
      display: block;
      margin: 0 0 0 auto;
      width: 30%;
      padding: 1rem;
      transition: 0.5s;
      border-radius: 4px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition: 0.5s;
      }

      a {
        color: #fff;
        font-size: 2rem;
      }

      img {
        display: inline-block;
        width: 20%;
        height: 20%;
      }
    }
  }

  @media (max-width: 768px) {

    .contents {
      width: 100vw;
      height: 100vh;
      margin: 0;
      background-color: rgba(53,73,94,0.5);
      padding: 2rem;
    }

    .bg-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      height: 100vh;
      width: auto;
      z-index: -2;
    }

    .social {
      top: 30%;
      right: 10%;
      left: auto;

      &-icon {
        width: 80%;

        a {
          color: #fff;
          font-size: 2rem;
        }

        img {
          display: inline-block;
          width: 20%;
          max-width: 50px;
          height: 20%;
          max-height: 50px;
        }
      }
    }

    .hero {
      display: block;
      position: absolute;
      right: 10%;
      bottom: 10%;
      font-size: 10vw;
      color: #fff;
    }
  }

  @media (max-width: 1024px) and (max-height: 1366px) {
    .bg-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      height: 100vh;
      width: auto;
      z-index: -2;
    }
  }
</style>
