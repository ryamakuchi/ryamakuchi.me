<template>
  <div class="about">
    <div class="contents">
      <div class="avator">
        <img src="~/assets/images/thumbnail.jpg"/>
        <h1>rry<span> (リリィ)</span></h1>

        <p>
          STORES.jp (heyinc) で働いている Web Engineer です。<br>
          普段は Ruby を書いています。<br>CSS と Vue.js も好き！
        </p>
      </div>
      <div class="skills">
        <h3 class="skills-title">SKILLS: </h3>
          <p v-for="tag in tags" :key="tag.id" class="skills-tag" :class="{ 'skills-tag-hobby': tag.isHobby }">{{tag.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    transition: 'about',
    computed: {
      tags() {
        return [
          {
            name: 'HTML',
            isHobby: false

          },
          {
            name: 'CSS',
            isHobby: false
          },
          {
            name: 'Vue.js / Nuxt.js',
            isHobby: false
          },
          {
            name: 'Ruby / Ruby on Rails',
            isHobby: false
          },
          {
            name: 'Guitar',
            isHobby: true
          },
          {
            name: 'Bass',
            isHobby: true
          }
        ]
      }
    }
  }
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
    background: #fff;
    box-shadow: 0 0px 20px rgba(0,0,0,0.5);
    border-radius: 2px;
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

      h1 {
        font-size: 1.6rem;

        span {
          font-size: 1.2rem;
        }
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
