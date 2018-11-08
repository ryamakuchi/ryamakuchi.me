<template>
  <section class="about">
    <div class="contents">
      <div class="avator">
        <img src="~/assets/images/thumbnail.jpg"/>
        <h2>@rry (リリィ)</h2>
        <p>
          Web Engineerを始めたばかり。以前はSIerとコーダーのお仕事をしていました。<br>
          普段はVue.js/Nuxt.jsとRuby on Railsを書いています。<br>CSSも好き！
        </p>
      </div>
      <div class="skills">
        <h3 class="skills-title">SKILLS: </h3>
        <p class="skills-tag">HTML5</p>
        <p class="skills-tag">CSS3</p>
        <p class="skills-tag">Vue.js/Nuxt.js</p>
        <p class="skills-tag">Ruby on Rails</p>
        <p class="skills-tag">Laravel</p>
        <p class="skills-tag skills-tag-hobby">Guitar</p>
        <p class="skills-tag skills-tag-hobby">Bass</p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
  .about {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #35495E;
  }
  .contents {
    width: 80vw;
    height: 80vh;
    margin: 10vh auto 10vh;
    background: linear-gradient(to left top, rgba(249,249,249,1), rgba(255,255,255,0.2));
    padding: 5%;
    text-align: center;
  }

  .avator {
    width: 100%;

    img {
      width: 12vw;
      height: auto;
      border-radius: 50%;
      border: 8px solid #fff;
    }
  }

  .skills {
    margin-top: 4rem;
    &-title {
      display: inline-block;
      font-size: 2rem;
    }

    &-tag {
      display: inline-block;
      margin: 0.5rem;
      background-color: rgba(255,255,255,0.7);
      border-radius: 2px;
      border: 2px solid #41b883;
      color: #41b883;
      padding: 0 1rem;

      &-hobby {
        border: 2px solid #EC625D;
        color: #EC625D;
      }
    }
  }

  @media (max-width: 768px) {
    .avator {
      width: 100%;

      h2 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.2rem;
      }

      img {
        width: 24vw;
        border: 4px solid #fff;
      }
    }

    .skills {
      margin-top: 2rem;
      &-title {
        display: inline-block;
        font-size: 1.6rem;
      }

      &-tag {
        display: inline-block;
        margin: 0.5rem;
        background-color: rgba(255,255,255,0.7);
        border-radius: 2px;
        border: 2px solid #41b883;
        color: #41b883;
        padding: 0 1rem;
        font-size: 1.2rem;

        &-hobby {
          border: 2px solid #EC625D;
          color: #EC625D;
        }
      }
    }
  }
</style>
