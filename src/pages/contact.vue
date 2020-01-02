<template>
  <div class="contact">
    <form name="contact" netlify-honeypot="bot-field" action="thank-you" data-netlify="true" method="post" class="form">
      <input type="hidden" name="form-name" value="contact" />
      <p>Web 制作の依頼や質問などはこちらのフォームからどうぞ。</p>
      <br>
      <div class="form-item">
        <label>お名前:</label>
        <input type="text" name="name" required>
      </div>

      <div class="form-item">
        <label>E-mail:</label>
        <input type="email" name="email" required>
      </div>

      <div class="form-item">
        <label>お問い合わせ内容:</label>
        <textarea name="message" required></textarea>
      </div>

      <div class="submit">
        <button type="submit" class="submit-button">送信</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .contact {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #35495E;
  }

  .form {
    width: 80vw;
    height: 80vh;
    margin: 10vh auto 10vh;
    background-color: #fff;
    box-shadow: 0 0px 20px rgba(0,0,0,0.5);
    border-radius: 2px;
    padding: 5%;
    text-align: center;

    &-item {

      label {
        display: block;
        width: 80%;
        max-width: 700px;
        margin: 0 auto;
        text-align: left;
        font-weight: bold;
      }

      input,
      textarea {
        width: 80%;
        max-width: 700px;
        margin: 0 auto 1rem;
        padding: 0.5rem;
        outline: none;
        border: 2px solid #41b883;
        border-radius: 4px;
        background-color: #fff;
        transition: 0.5s;

        &:focus {
          background-color: rgba(65, 184, 131, 0.2);
          transition: 0.5s;
        }
      }

      textarea {
        height: 10rem;
      }
    }

    .submit {
      &-button {
        width: 40%;
        margin: 1rem 0 auto;
        padding: 1rem;
        background-color: #3b8070;
        color: #fff;
        border-radius: 4px;
        font-weight: bold;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          transition: 0.5s;
          background-color: #41b883;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .form {
      p, label {
        font-size: 1.2rem;
      }

      .submit {
        &-button {
          padding: 0 1rem;
        }
      }
    }
  }
</style>
