<template>
  <section class="container">
    <!-- <img
      class="gundam__image"
      src="~/assets/images/gundam.gif"
      alt=""> -->
    <div class="gundam">
      <div class="gundam__color">
        <div class="red">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>

        <div class="blue">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>

        <div class="yellow">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>

        <div class="gray">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>

        <div class="gray2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
      <div class="head">
        <div class="head__color">
          <div>red</div>
          <div>red</div>
        </div>
        <div class="head__top"><span>o</span></div>

        <div class="left-helmet">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div class="right-helmet">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>

        <div class="left-v-antenna">
          <div class="left-v-antenna__color">0</div>
        </div>
        <div class="right-v-antenna">
          <div class="left-v-antenna__color">0</div>
        </div>

        <div class="forehead">
          <div>1</div>
          <div>2</div>
          <div class="forehead__bottom">0</div>
          <div class="forehead__bottom">0</div>
        </div>

        <div class="catapult">
          <div>0</div>
          <div>0</div>
        </div>
        <div class="face-top">0</div>

        <div class="left-eye">
          <div class="left-eye__color">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>

          <div class="left-eye__line">
            <div>0</div>
          </div>
        </div>

        <div class="right-eye">
          <div class="right-eye__color">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>

          <div class="right-eye__line">
            <div>0</div>
          </div>
        </div>

        <div class="nose">
          <div>
            <span>1</span>
            <span>2</span>
          </div>
        </div>

        <div class="chin">
          <div>1</div>
          <div>2</div>
          <div class="chin__left">0</div>
          <div class="chin__right">0</div>

          <div class="chin__color">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>

        <div class="left-face-line"><div>0</div></div>
        <div class="right-face-line"><div>0</div></div>
      </div>

      <div class="body">
        <div class="neck">
          <div class="neck__color">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>

          <div class="neck__line">0</div>
          <div class="helmet">
            <div>1</div>
            <div>2</div>
          </div>
        </div>

        <div class="left-beam-saber">
          <div class="left-beam-saber__item">
            <span>0</span>
          </div>
        </div>

        <div class="right-beam-saber">
          <div class="left-beam-saber__item">
            <span>0</span>
          </div>
        </div>

        <div class="scarf">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5<div>0</div></div>
        </div>

        <div class="cockpit">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </div>

      <div class="under">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <div class="body-left">
        <div class="outside">0</div>
        <div class="breast">
          <div>1</div>
          <div>2</div>
          <div class="shadow">0</div>
        </div>

        <div class="exhaust-port">
          <div class="exhaust-port__outside">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>

          <div class="exhaust-port__internal">
            <div>0</div>
          </div>

          <div class="exhaust-port__abdomen">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>

        <div class="hip">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>

        <div class="poket">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>

      <div class="body-right">
        <div class="outside">o</div>
        <div class="breast">
          <div>1</div>
          <div>2</div>
          <div class="shadow">0</div>
        </div>

        <div class="exhaust-port">
          <div class="exhaust-port__outside">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>

          <div class="exhaust-port__internal">
            <div>0</div>
          </div>

          <div class="exhaust-port__abdomen">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>

        <div class="hip">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>

        <div class="poket">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>

      <div class="left-arm">
        <div class="shoulder">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>

        <div class="arm">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
        </div>
      </div>

      <div class="right-arm">
        <div class="shoulder">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>

        <div class="arm">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
        </div>
      </div>

      <div class="left-hand">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <div class="right-hand">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
      </div>

      <div class="left-leg">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
      </div>

      <div class="right-leg">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
      </div>

      <div class="left-foot">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
      </div>

      <div class="right-foot">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$line-color: #000;
$ms-red: #c92222;
$ms-red--is-dark: #991a1a;
$ms-blue: #00489b;
$ms-blue--is-dark: #003066;
$ms-yellow: #fac000;
$ms-yellow--is-dark: #664e00;
$ms-white: #fff;
$ms-white--is-dark: #c4c8cc;
$ms-gray: #646466;

*,
*::before,
*::after {
  position: absolute !important;
}
*::before,
*::after {
  content: '' !important;
}

.container {
  position: relative !important;
  width: 1280px;
  font-size: 0 !important;
}
.gundam__image {
  width: 100%;
}
.gundam {
  &__color {
    .red {
      top: 320px;
      left: 200px;
      width: 188px;
      height: 83px;
      background-color: $ms-red;
      z-index: -100;

      &::before,
      &::after {
        top: 0px;
        left: -15px;
        width: 12px;
        height: 54px;
        background-color: $ms-red;
        border-radius: 0 10px 0 10px;
        transform-origin: top left;
        transform: rotate(-13deg) skewY(-40deg);
      }
      &::after {
        top: 2px;
        left: 205px;
        transform: scale(-1, 1) rotate(-13deg) skewY(-40deg);
      }

      div:first-child {
        &::before,
        &::after {
          top: -8px;
          left: -5px;
          width: 60px;
          height: 30px;
          background-color: $ms-red;
          transform-origin: top left;
          transform: rotate(8deg);
        }
        &::after {
          left: 200px;
          height: 25px;
          transform: scale(-1, 1) rotate(7deg);
        }
      }

      div:nth-child(2) {
        top: 74px;
        left: 20px;
        width: 149px;
        height: 20px;
        background-color: $ms-red;

        &::before,
        &::after {
          top: -4px;
          left: -8px;
          width: 20px;
          height: 20px;
          background-color: $ms-red;
          transform: rotate(45deg);
        }
        &::after {
          left: 138px;
        }
      }

      div:nth-child(3) {
        top: 82px;
        left: 64px;
        width: 60px;
        height: 20px;
        background-color: $ms-white;
      }

      div:nth-child(4) {
        top: 92px;
        left: 72px;
        width: 45px;
        height: 66px;
        background-color: $ms-red;
        border-radius: 20%;
      }
    }

    .blue {
      top: 184px;
      left: 170px;
      width: 250px;
      height: 128px;
      background-color: $ms-blue;
      border-radius: 5px;
      z-index: -90;

      &::before,
      &::after {
        top: 1px;
        left: -4px;
        width: 10px;
        height: 120px;
        background-color: $ms-blue;
        border-radius: 5px;
        transform-origin: top left;
        transform: rotate(-1deg);
      }
      &::after {
        top: 2px;
        left: 255px;
        transform: scale(-1, 1) rotate(-2deg);
      }

      div:first-child {
        top: 122px;
        left: 86px;
        width: 78px;
        height: 84px;
        background-color: $ms-blue;
        transform-origin: top left;

        &::before,
        &::after {
          top: 90px;
          left: 4px;
          width: 13px;
          height: 10px;
          background-color: $ms-blue;
          transform: rotate(-26deg) skewY(-20deg);
        }
        &::after {
          top: 89px;
          left: 61px;
          transform: scale(-1, 1) rotate(-26deg) skewY(-20deg);
        }
      }

      div:nth-child(2) {
        top: 187px;
        left: 87px;
        width: 75px;
        height: 30px;
        background-color: $ms-blue;
        border-radius: 0 0 6px 6px;

        &::before,
        &::after {
          top: -188px;
          left: -89px;
          width: 68px;
          height: 10px;
          border-radius: 5px;
          background-color: $ms-blue;
          transform-origin: top left;
          transform: rotate(-5deg);
        }
        &::after {
          left: 165px;
          transform: scale(-1, 1) rotate(-4deg);
        }
      }

      div:nth-child(3) {
        &::before,
        &::after {
          top: 122px;
          left: 20px;
          width: 75px;
          height: 10px;
          background-color: $ms-blue;
          transform: rotate(8deg);
        }
        &::after {
          left: 156px;
          transform: scale(-1, 1) rotate(8deg);
        }
      }

      div:nth-child(4) {
        &::before,
        &::after {
          top: 116px;
          left: 2px;
          width: 20px;
          height: 20px;
          border-radius: 3px;
          background-color: $ms-blue;
          transform: rotate(34deg) skewY(10deg);
        }
        &::after {
          left: 228px;
          transform: scale(-1, 1) rotate(34deg) skewY(10deg);
        }
      }
    }

    .yellow {
      top: 154px;
      left: 253px;
      width: 80px;
      height: 74px;
      border-radius: 11px 6px 6px 6px;
      background: linear-gradient(
        $ms-yellow--is-dark 10%,
        $ms-yellow,
        $ms-yellow,
        $ms-yellow
      );
      z-index: -80;

      &::before,
      &::after {
        top: 22px;
        left: -24px;
        width: 24px;
        height: 44px;
        border-radius: 0 9px 0 2px;
        background-color: $ms-yellow;
        z-index: -80;
        transform-origin: top left;
        transform: rotate(-69deg) skewX(-42deg);
      }
      &::before {
        left: 106px;
        transform: scale(-1, 1) rotate(-70deg) skewX(-42deg);
      }

      div:first-child {
        &::before,
        &::after {
          top: 5px;
          left: -16px;
          width: 20px;
          height: 28px;
          background: linear-gradient(
            $ms-yellow--is-dark 10%,
            $ms-yellow,
            $ms-yellow
          );
          transform-origin: top left;
          transform: skewX(32deg);
        }
        &::after {
          left: 96px;
          transform: scale(-1, 1) skewX(28deg);
        }
      }

      div:nth-child(2) {
        top: 102px;
        left: -66px;
        width: 56px;
        height: 50px;
        border-radius: 5px;
        background-color: $ms-yellow;
        transform-origin: top left;
        transform: rotate(6deg);

        &::before {
          top: 3px;
          left: -4px;
          width: 20px;
          height: 44px;
          border-radius: 6px;
          background-color: $ms-yellow;
          transform: rotate(-5deg);
        }

        &::after {
          top: 1px;
          left: 45px;
          width: 20px;
          height: 44px;
          border-radius: 0 10px 0 0;
          background-color: $ms-yellow;
          transform: rotate(-3deg) skewY(10deg);
        }
      }
      div:nth-child(3) {
        top: 138px;
        left: -68px;
        width: 63px;
        height: 20px;
        border-radius: 15px;
        background-color: $ms-yellow;
        transform-origin: top left;
        transform: rotate(4deg);
      }

      div:nth-child(4) {
        top: 102px;
        left: 150px;
        width: 56px;
        height: 50px;
        border-radius: 5px;
        background-color: $ms-yellow;
        transform-origin: top left;
        transform: scale(-1, 1) rotate(6deg);

        &::before {
          top: 3px;
          left: -4px;
          width: 20px;
          height: 44px;
          border-radius: 6px;
          background-color: $ms-yellow;
          transform: rotate(-5deg);
        }

        &::after {
          top: 1px;
          left: 45px;
          width: 20px;
          height: 44px;
          border-radius: 0 10px 0 0;
          background-color: $ms-yellow;
          transform: rotate(-3deg) skewY(10deg);
        }
      }
      div:nth-child(5) {
        top: 138px;
        left: 153px;
        width: 63px;
        height: 20px;
        border-radius: 15px;
        background-color: $ms-yellow;
        transform-origin: top left;
        transform: scale(-1, 1) rotate(4deg);
      }

      div:nth-child(6) {
        top: 275px;
        left: -60px;
        width: 56px;
        height: 68px;
        border-radius: 5px 5px 7px 9px;
        background-color: $ms-yellow;

        &::before,
        &::after {
          top: 6px;
          left: -8px;
          width: 10px;
          height: 44px;
          background-color: $ms-yellow;
          transform: skewY(-42deg);
        }
        &::after {
          top: 5px;
          left: 50px;
          transform: scale(-1, 1) skewY(-42deg);
        }
      }
      div:nth-child(7) {
        &::before,
        &::after {
          top: 320px;
          left: -64px;
          width: 16px;
          height: 18px;
          background-color: $ms-yellow;
          transform: rotate(45deg);
        }
        &::after {
          top: 321px;
          left: -18px;
          transform: scale(-1, 1) rotate(45deg);
          border-radius: 2px;
        }
      }

      div:nth-child(8) {
        top: 275px;
        left: 88px;
        width: 56px;
        height: 68px;
        border-radius: 5px 5px 7px 9px;
        background-color: $ms-yellow;
        transform: scale(-1, 1);

        &::before,
        &::after {
          top: 6px;
          left: -8px;
          width: 10px;
          height: 44px;
          background-color: $ms-yellow;
          transform: skewY(-42deg);
        }
        &::after {
          top: 5px;
          left: 50px;
          transform: scale(-1, 1) skewY(-42deg);
        }
      }
      div:nth-child(9) {
        &::before,
        &::after {
          top: 322px;
          left: 86px;
          width: 16px;
          height: 18px;
          background-color: $ms-yellow;
          transform: scale(-1, 1) rotate(45deg);
        }
        &::after {
          top: 318px;
          left: 134px;
          transform: scale(-1, 1) rotate(45deg);
          border-radius: 2px;
        }
      }

      div:nth-child(10) {
        &::before,
        &::after {
          top: 260px;
          left: 27px;
          width: 8px;
          height: 24px;
          border: 5px solid transparent;
          border-bottom: 28px solid $ms-yellow;
          transform: rotate(-48deg);
        }
        &::after {
          left: 45px;
          transform: scale(-1, 1) rotate(-48deg);
        }
      }
    }

    .gray {
      top: 532px;
      left: 46px;
      width: 34px;
      height: 60px;
      border-radius: 0 3px 0 0;
      background-color: $ms-gray;
      z-index: -70;
      transform-origin: top left;
      transform: rotate(3deg);

      &::before {
        top: 19px;
        left: -2px;
        width: 65px;
        height: 30px;
        background-color: $ms-gray;
        transform: top left;
        transform: rotate(58deg);
      }
      &::after {
        top: 54px;
        left: 6px;
        width: 30px;
        height: 10px;
        background-color: $ms-gray;
        transform: rotate(18deg);
      }

      div:first-child {
        top: 26px;
        left: 55px;
        width: 10px;
        height: 30px;
        border-radius: 5px 5px 10px 0;
        background-color: $ms-gray;
        transform: rotate(5deg) skewY(-30deg);
      }

      div:nth-child(2) {
        top: 12px;
        left: 43px;
        width: 12px;
        height: 34px;
        border-radius: 2px 2px 5px 5px;
        background-color: $ms-gray;
        transform: rotate(-40deg) skewY(30deg);
      }
    }

    .gray2 {
      top: 532px;
      left: 544px;
      width: 34px;
      height: 60px;
      border-radius: 0 3px 0 0;
      background-color: $ms-gray;
      z-index: -70;
      transform-origin: top left;
      transform: scale(-1, 1) rotate(2deg);

      &::before {
        top: 19px;
        left: -2px;
        width: 65px;
        height: 30px;
        background-color: $ms-gray;
        transform: top left;
        transform: rotate(58deg);
      }
      &::after {
        top: 54px;
        left: 6px;
        width: 30px;
        height: 10px;
        background-color: $ms-gray;
        transform: rotate(18deg);
      }

      div:first-child {
        top: 26px;
        left: 55px;
        width: 10px;
        height: 30px;
        border-radius: 5px 5px 10px 0;
        background-color: $ms-gray;
        transform: rotate(5deg) skewY(-30deg);
      }

      div:nth-child(2) {
        top: 12px;
        left: 43px;
        width: 12px;
        height: 34px;
        border-radius: 2px 2px 5px 5px;
        background-color: $ms-gray;
        transform: rotate(-40deg) skewY(30deg);
      }
    }
  }

  .head {
    top: 46px;
    left: 250px;
    width: 90px;
    height: 110px;
    border: 1px solid $line-color;
    border-bottom: transparent;
    border-radius: 43%;
    background-color: $ms-white;

    &__color {
      top: 11px;
      left: 37px;
      width: 14px;
      height: 36px;
      background-color: $ms-red;
      z-index: 100;

      &::before,
      &::after {
        top: 0;
        left: -1px;
        width: 10px;
        height: 31px;
        background-color: $ms-red;
        transform-origin: top left;
        transform: rotate(13deg);
      }
      &::after {
        left: 14px;
        transform: scale(-1, 1) rotate(16deg);
      }
      div:first-child {
        &::before,
        &::after {
          top: 22px;
          left: -1px;
          width: 18px;
          height: 11px;
          background-color: $ms-red;
          transform-origin: top left;
          transform: rotate(38deg);
        }
        &::after {
          top: 21px;
          left: 15px;
          transform: scale(-1, 1) rotate(36deg);
        }
      }

      div:nth-child(2) {
        top: 19px;
        left: -5px;
        width: 25px;
        height: 10px;
        border-radius: 50%;
        background-color: $ms-red;
        z-index: 100;
      }
    }

    &__top {
      top: -17px;
      left: 28px;
      width: 32px;
      height: 34px;
      border: 1px solid $line-color;
      background-color: $ms-white;

      &::before,
      &::after {
        top: -5px;
        left: -5px;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-bottom: 1px solid $line-color;
        transform: rotate(-45deg);
      }

      &::after {
        left: 25px;
        transform: rotate(45deg);
      }

      span {
        top: 6px;
        left: 4px;
        width: 22px;
        height: 23px;
        border: 1px solid $line-color;
        background-color: $ms-red--is-dark;

        &::before,
        &::after {
          top: 0px;
          left: -6px;
          width: 12px;
          height: 5px;
          background-color: $ms-white;
          border-bottom: 1px solid $line-color;
          transform: rotate(-60deg);
        }

        &::after {
          left: 14px;
          transform: rotate(60deg);
        }
      }
    }

    .left-helmet,
    .right-helmet {
      top: 40px;
      left: -17px;
      width: 26px;
      height: 75px;
      border-left: 1px solid $line-color;
      border-radius: 20% 50% 50% 48%;
      background-color: $ms-white;
      transform: rotate(1deg);
      z-index: 1;

      &::before {
        top: -4px;
        left: -2px;
        width: 22px;
        height: 15px;
        border-top: 1px solid $line-color;
        border-radius: 13px 0 0 0;
        transform: rotate(-24deg);
      }

      &::after {
        top: 64px;
        left: 4px;
        width: 15px;
        height: 5px;
        border-top: 2px solid $line-color;
        border-radius: 5px 0 0 0;
      }

      div:first-child {
        top: 0px;
        left: 4px;
        width: 12px;
        height: 32px;
        border-top: 1px solid $line-color;
        border-right: 2px solid $line-color;
        border-left: 1px solid $line-color;
        border-radius: 0 2px 0 0;
        transform: rotate(-3deg);

        &::before {
          top: 30px;
          left: 0px;
          width: 12px;
          height: 8px;
          border-right: 2px solid $line-color;
          border-left: 1px solid $line-color;
          transform: rotate(-18deg) skewY(10deg);
          background-color: $ms-white;
        }

        &::after {
          top: 37px;
          left: 1px;
          width: 12px;
          height: 28px;
          border-left: 1px solid $line-color;
          border-right: 2px solid $line-color;
          background-color: $ms-white;
        }
      }

      div:nth-child(2) {
        top: 10px;
        left: 7px;
        width: 7px;
        height: 6px;
        background-color: $line-color;
        transform: rotate(-6deg) skewY(5deg);

        &::after {
          top: -1px;
          left: 14px;
          width: 1px;
          height: 20px;
          border-left: 1px solid $line-color;
          transform: rotate(5deg) skewY(0deg);
        }
      }

      div:nth-child(3) {
        top: 21px;
        left: 8px;
        width: 7px;
        height: 6px;
        background-color: $line-color;
        transform: rotate(-6deg) skewY(5deg);

        &::after {
          top: 7px;
          left: 16px;
          width: 1px;
          height: 10px;
          border-left: 1px solid $line-color;
          transform: rotate(-26deg) skewY(0deg);
        }
      }

      div:nth-child(4) {
        top: 32px;
        left: 10px;
        width: 7px;
        height: 6px;
        background-color: $line-color;
        transform: rotate(-23deg) skewY(23deg);

        &::after {
          top: 4px;
          left: 11px;
          width: 6px;
          height: 30px;
          border-left: 1px solid $line-color;
          transform: rotate(19deg) skewY(0deg);
          background-color: $ms-white;
        }
      }

      div:nth-child(5) {
        top: 42px;
        left: 11px;
        width: 7px;
        height: 7px;
        background-color: $line-color;
        transform: rotate(-3deg) skewY(3deg);

        &::before {
          top: 19px;
          left: 12px;
          width: 7px;
          height: 15px;
          border-left: 1px solid $line-color;
          border-right: 1px solid $line-color;
          transform: rotate(40deg) skewY(-20deg);
          background-color: $ms-white;
        }

        &::after {
          top: 12px;
          width: 7px;
          height: 6px;
          background-color: $line-color;
        }
      }
    }
    .right-helmet {
      left: 79px;
      transform: scale(-1, 1) rotate(1deg);
    }

    .left-v-antenna,
    .right-v-antenna {
      top: 0;
      left: -50px;
      width: 90px;
      height: 1px;
      border: 0.5px solid $line-color;
      transform: rotate(28deg);
      z-index: 10;

      &::before {
        top: -1px;
        left: 0px;
        width: 94px;
        height: 1px;
        border: 0.5px solid $line-color;
        transform-origin: top left;
        transform: rotate(10deg);
      }

      &__color {
        top: 0px;
        left: 0px;
        width: 94px;
        height: 8px;
        border: 8px solid transparent;
        border-right: 90px solid $ms-white;
        transform-origin: top right;
        transform: rotate(5deg);
      }
    }
    .right-v-antenna {
      top: 0;
      left: 48px;
      transform: scale(-1, 1) rotate(28deg);
    }

    .forehead {
      top: 10px;
      left: 36px;
      width: 16px;
      height: 10px;
      background-color: $ms-red;
      border-top: 1px solid $line-color;
      z-index: 100;

      &::before,
      &::after {
        top: -1px;
        left: 1px;
        width: 33px;
        height: 1px;
        border: 0.5px solid $line-color;
        transform-origin: top left;
        transform: rotate(103deg);
      }
      &::after {
        left: 16px;
        transform: rotate(75deg);
      }

      div:first-child {
        top: 27px;
        left: 7px;
        width: 1px;
        height: 14px;
        border: 0.5px solid $line-color;
      }

      &__bottom {
        top: 22px;
        left: 7px;
        width: 17px;
        height: 14px;
        border-bottom: 1px solid $line-color;
        transform: skewY(-34deg);
        z-index: 101;

        &::before {
          top: 0;
          left: 3px;
          width: 11px;
          border-bottom: 1px solid $line-color;
        }
      }

      &__bottom:last-child {
        top: 22px;
        left: -7px;
        width: 14px;
        height: 14px;
        transform: skewY(36deg);
      }
    }

    .catapult {
      div {
        top: 28px;
        left: 3px;
        width: 14px;
        height: 14px;
        border: 1px solid $line-color;
        border-radius: 50%;
        background-color: $ms-yellow;

        &::before {
          top: 2px;
          left: 2px;
          width: 8px;
          height: 8px;
          border: 1px solid $line-color;
          border-radius: 50%;
          background-color: $ms-yellow--is-dark;
        }

        &:last-child {
          left: 71px;
        }
      }
    }

    .face-top {
      top: 33px;
      left: -11px;
      width: 110px;
      height: 108px;
      border: 1px solid transparent;
      border-top: 1px solid $line-color;
      border-radius: 50%;
      z-index: 0;

      &::after {
        top: 2px;
        left: 10px;
        width: 88px;
        height: 18px;
        border: 1px solid transparent;
        border-bottom: 1px solid $line-color;
        border-radius: 50%;
        z-index: 0;
      }
    }

    .left-eye,
    .right-eye {
      top: 53px;
      left: 20px;
      width: 18px;
      height: 6px;
      transform: skewY(6deg);
      border-left: 3px solid $line-color;
      border-right: 3px solid $line-color;

      &::before {
        top: 6px;
        left: 3px;
        width: 12px;
        height: 7px;
        transform: skewY(-12deg);
        border-top: 2px solid $line-color;
        background-color: $ms-red--is-dark;
      }
      &::after {
        top: 6px;
        left: -3px;
        width: 6px;
        height: 8px;
        transform: skewY(21deg);
        border-top: 2px solid $line-color;
        background-color: $ms-red--is-dark;
      }

      &__color {
        top: 0px;
        left: -10px;
        width: 8px;
        height: 7px;
        background-color: $ms-gray;
        transform: rotate(4deg);
        z-index: -100;

        &::before,
        &::after {
          top: -2px;
          left: 24px;
          width: 7px;
          height: 4px;
          background-color: $ms-gray;
          transform: rotate(-4deg);
        }

        &::after {
          top: -1px;
          transform: rotate(-15deg);
        }

        div:first-child {
          top: 0px;
          left: 10px;
          width: 12px;
          height: 6px;
          background-color: $ms-yellow;
          transform: rotate(-4deg);
          z-index: -100;

          &::before {
            top: 5px;
            left: 10px;
            width: 12px;
            height: 5px;
            background-color: $ms-red--is-dark;
            transform: rotate(-22deg);
          }
        }
      }

      &__line {
        top: 6px;
        left: 2px;
        width: 13px;
        height: 8px;
        border-left: 1px solid $line-color;
        border-right: 1px solid $line-color;
        transform: skew(-6deg, -15deg);

        &::before {
          top: -4px;
          left: -14px;
          width: 9px;
          height: 8px;
          border-top: 1px solid $line-color;
          transform: skew(1deg, 15deg);
          background-color: $ms-red--is-dark;
        }
        &::after {
          top: 4px;
          left: -13px;
          width: 12px;
          height: 8px;
          border-top: 1px solid $line-color;
          transform: skew(-5deg, 28deg);
        }

        div {
          top: 7px;
          left: -1px;
          width: 8px;
          height: 8px;
          border-top: 2px solid $line-color;
          transform: skew(-5deg, 10deg);

          &::after {
            top: -3px;
            left: 7px;
            width: 5px;
            height: 8px;
            border-top: 2px solid $line-color;
            transform: skew(-5deg, -28deg);
          }
        }
      }
    }
    .right-eye {
      transform: skewY(-3deg) scale(-1, 1);
      left: 50px;
    }

    .nose {
      top: 53px;
      left: 43px;
      width: 0px;
      height: 10px;
      border: 0.5px solid $line-color;

      &::before,
      &::after {
        top: 3px;
        left: -6px;
        width: 8px;
        height: 8px;
        border-top: 2px solid $line-color;
        transform: rotate(-20deg);
      }
      &::after {
        left: -2px;
        transform: rotate(20deg);
      }

      div {
        &::before,
        &::after {
          top: 9px;
          left: -6px;
          width: 8px;
          height: 8px;
          border-top: 1px solid $line-color;
          transform: rotate(-20deg);
        }
        &::after {
          left: -2px;
          transform: rotate(20deg);
        }

        span {
          &::before,
          &::after {
            top: 13px;
            left: -6px;
            width: 8px;
            height: 8px;
            border-top: 2px solid $line-color;
            transform: rotate(-20deg);
          }
          &::after {
            left: -2px;
            transform: rotate(20deg);
          }

          &:last-child {
            &::before,
            &::after {
              top: 17px;
            }
          }
        }
      }
    }

    .chin {
      top: 86px;
      left: 39px;
      width: 10px;
      border-top: 1px solid $line-color;

      &::before,
      &::after {
        top: -4px;
        left: -6px;
        width: 13px;
        border-top: 1px solid $line-color;
        transform: rotate(-45deg);
      }
      &::after {
        left: 3px;
        transform: rotate(45deg);
      }

      div:first-child {
        top: 13px;
        left: 1px;
        width: 8px;
        border-bottom: 1px solid $line-color;

        &::before,
        &::after {
          top: -5px;
          left: -14px;
          width: 16px;
          border-top: 2px solid $line-color;
          transform: rotate(-83deg);
        }
        &::after {
          left: 6px;
          transform: rotate(83deg);
        }
      }

      div:nth-child(2) {
        top: 25px;
        left: -1px;
        width: 12px;
        border-bottom: 1px solid $line-color;

        &::before,
        &::after {
          top: -5px;
          left: -7px;
          width: 11px;
          border-top: 2px solid $line-color;
          transform: rotate(-112deg);
        }
        &::after {
          left: 8px;
          transform: rotate(112deg);
        }
      }

      &__left {
        top: -1px;
        left: 0px;
        width: 1px;
        height: 15px;
        border-left: 1px solid $line-color;
        transform: rotate(-4deg);

        &::before,
        &::after {
          top: 0;
          left: -1px;
          width: 1px;
          height: 18px;
          border-left: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(17deg);
        }
        &::after {
          top: 14px;
          height: 12px;
          transform: rotate(10deg);
        }
      }

      &__right {
        top: -1px;
        left: 9px;
        width: 1px;
        height: 15px;
        border-left: 1px solid $line-color;
        transform: rotate(4deg);

        &::before,
        &::after {
          top: 0;
          left: -1px;
          width: 1px;
          height: 18px;
          border-left: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-17deg);
        }
        &::after {
          top: 14px;
          height: 12px;
          transform: rotate(-10deg);
        }
      }

      &__color {
        &::before,
        &::after {
          top: 0;
          left: 1px;
          width: 5px;
          height: 13px;
          background-color: $ms-red;
          transform: skewX(4deg);
        }
        &::after {
          left: 4px;
          transform: scale(-1, 1) skewX(4deg);
        }

        span:first-child {
          top: 14px;
          left: 4px;
          &::before,
          &::after {
            top: 0;
            left: 0;
            width: 5px;
            height: 11px;
            background-color: $ms-red;
            border: transparent;
            transform: skewX(7deg);
          }
          &::after {
            left: -3px;
            transform: scale(-1, 1) skewX(7deg);
          }
        }

        span:nth-child(2) {
          &::before,
          &::after {
            top: 0px;
            left: -3px;
            width: 2px;
            height: 5px;
            border: 2px solid transparent;
            border-bottom: 13px solid $ms-red;
            transform: rotate(4deg);
          }
          &::after {
            left: 9px;
            transform: rotate(-4deg);
          }
        }

        span:nth-child(3) {
          &::before,
          &::after {
            top: 14px;
            left: -3px;
            width: 2px;
            height: 5px;
            border: 2px solid transparent;
            border-top: 11px solid $ms-red;
            transform: rotate(-4deg);
          }
          &::after {
            left: 9px;
            transform: rotate(4deg);
          }
        }
      }
    }

    .left-face-line {
      top: 103px;
      left: 27px;
      width: 8px;
      border-bottom: 3px solid $line-color;

      &::before {
        top: -12px;
        left: -4px;
        width: 7px;
        height: 13px;
        border: 1px solid $line-color;
        border-top: transparent;
        transform: skewX(33deg);
      }

      &::after {
        top: -35px;
        left: -3px;
        width: 3px;
        height: 24px;
        border-left: 1px solid $line-color;
        border-radius: 50%;
        transform: rotate(-2deg);
      }

      div {
        top: -26px;
        left: -9px;
        width: 1px;
        height: 28px;
        border-left: 2px solid $line-color;

        &::before {
          top: -10px;
          left: -4px;
          width: 1px;
          height: 12px;
          border-left: 1px solid $line-color;
          transform: rotate(-32deg);
        }

        &::after {
          top: -26px;
          left: -9px;
          width: 1px;
          height: 17px;
          border-left: 3px solid $line-color;
        }
      }
    }

    .right-face-line {
      top: 103px;
      left: 53px;
      width: 8px;
      border-bottom: 3px solid $line-color;

      &::before {
        top: -12px;
        left: 5px;
        width: 7px;
        height: 13px;
        border: 1px solid $line-color;
        border-top: transparent;
        transform: skewX(-33deg);
      }

      &::after {
        top: -35px;
        left: 8px;
        width: 3px;
        height: 24px;
        border-right: 1px solid $line-color;
        border-radius: 50%;
        transform: rotate(2deg);
      }

      div {
        top: -26px;
        left: 15px;
        width: 1px;
        height: 28px;
        border-left: 2px solid $line-color;

        &::before {
          top: -10px;
          left: 1px;
          width: 1px;
          height: 12px;
          border-left: 1px solid $line-color;
          transform: rotate(32deg);
        }

        &::after {
          top: -26px;
          left: 4px;
          width: 1px;
          height: 17px;
          border-left: 3px solid $line-color;
        }
      }
    }
  }

  .body {
    top: 180px;
    left: 250px;
    width: 90px;
    height: 370px;

    .neck {
      top: -22px;
      left: 36px;
      width: 16px;
      height: 10px;
      border-bottom: 3px solid $line-color;

      &::before,
      &::after {
        top: -8px;
        left: -1px;
        width: 18px;
        height: 17px;
        border-left: 1px solid $line-color;
        transform: rotate(-5deg);
      }
      &::after {
        border-left: transparent;
        border-right: 1px solid $line-color;
        transform: rotate(5deg);
      }

      &__color {
        span:first-child {
          top: -10px;
          left: -18px;
          width: 52px;
          height: 32px;
          background-color: $ms-gray;
          z-index: -10;
        }

        span:nth-child(2) {
          &::before,
          &::after {
            top: -13px;
            left: -16px;
            width: 10px;
            height: 12px;
            transform: skewY(60deg);
            background-color: $ms-gray;
          }
          &::after {
            left: 24px;
            transform: scale(-1, 1) skewY(60deg);
          }
        }

        span:nth-child(3) {
          &::before,
          &::after {
            top: -6px;
            left: -10px;
            width: 10px;
            height: 5px;
            background-color: $ms-gray;
            transform: skewX(25deg);
          }
          &::after {
            left: 17px;
            transform: scale(-1, 1) skewX(25deg);
          }
        }

        span:nth-child(4) {
          &::before,
          &::after {
            top: 6px;
            left: -20px;
            width: 10px;
            height: 16px;
            transform: skewX(-10deg);
            background-color: $ms-gray;
          }
          &::after {
            top: 1px;
            left: 27px;
            height: 20px;
            transform: scale(-1, 1) skewX(-10deg);
          }
        }
      }

      &__line {
        &::before,
        &::after {
          top: -8px;
          left: -20px;
          width: 13px;
          height: 30px;
          border-left: 2px solid $line-color;
          border-right: 1px solid $line-color;
          transform: rotate(10deg) skewY(-10deg);
        }
        &::after {
          left: 24px;
          transform: scale(-1, 1) rotate(10deg) skewY(-10deg);
        }
      }

      .helmet {
        &::before,
        &::after {
          top: 2px;
          left: -31px;
          width: 6px;
          height: 1px;
          border-bottom: 1px solid $line-color;
          transform: rotate(20deg);
          z-index: 10;
        }
        &::after {
          left: 43px;
          transform: rotate(-20deg);
        }

        div:first-child {
          &::before,
          &::after {
            top: -6px;
            left: -45px;
            width: 10px;
            height: 10px;
            border-radius: 1px 0 0 5px;
            border-left: 1px solid $line-color;
            border-bottom: 2px solid $line-color;
            transform: rotate(-40deg);
            z-index: 1;
          }
          &::after {
            left: 53px;
            border-right: transparent;
            border-left: 1px solid $line-color;
            transform: scale(-1, 1) rotate(-40deg);
          }
        }

        div:last-child {
          &::before,
          &::after {
            top: -3px;
            left: -44px;
            width: 12px;
            height: 10px;
            border-top: 1px solid $line-color;
            transform: rotate(40deg);
            z-index: 1;
          }
          &::after {
            left: 50px;
            transform: scale(-1, 1) rotate(40deg);
          }
        }
      }
    }

    .left-beam-saber {
      top: -166px;
      left: -82px;
      width: 25px;
      height: 170px;
      transform: rotate(-15deg);
      background-color: $ms-white;
      z-index: -300;

      &__item {
        top: 6px;
        left: -1px;
        width: 25px;
        height: 138px;
        border: 1px solid $line-color;
        background-color: $ms-white;

        &::before {
          top: -8px;
          left: 2px;
          width: 19px;
          height: 8px;
          border: 1px solid $line-color;
          background-color: $ms-white;
        }

        &::after {
          top: 136px;
          left: -4px;
          width: 31px;
          height: 12px;
          border: 1px solid $line-color;
          background-color: $ms-white;
        }

        span {
          top: 15px;
          left: -1px;
          width: 25px;
          height: 10px;
          border-top: 2px solid $line-color;
          border-bottom: 2px solid $line-color;

          &::after {
            top: 11px;
            left: 0px;
            width: 25px;
            height: 5px;
            border-bottom: 2px solid $line-color;
          }

          &::before {
            top: 130px;
            left: 0px;
            width: 25px;
            height: 10px;
            border: 1px solid $line-color;
          }
        }
      }
    }

    .right-beam-saber {
      top: -166px;
      left: 146px;
      width: 25px;
      height: 170px;
      transform: rotate(15deg);
      z-index: -300;

      &__item {
        top: 6px;
        left: -1px;
        width: 25px;
        height: 138px;
        border: 1px solid $line-color;
        background-color: $ms-white;

        &::before {
          top: -8px;
          left: 2px;
          width: 19px;
          height: 8px;
          border: 1px solid $line-color;
          background-color: $ms-white;
        }

        &::after {
          top: 136px;
          left: -4px;
          width: 31px;
          height: 12px;
          border: 1px solid $line-color;
          background-color: $ms-white;
        }

        span {
          top: 15px;
          left: -1px;
          width: 25px;
          height: 10px;
          border-top: 2px solid $line-color;
          border-bottom: 2px solid $line-color;

          &::after {
            top: 11px;
            left: 0px;
            width: 25px;
            height: 5px;
            border-bottom: 2px solid $line-color;
          }

          &::before {
            top: 130px;
            left: 0px;
            width: 25px;
            height: 10px;
            border: 1px solid $line-color;
          }
        }
      }
    }

    .scarf {
      top: -1px;
      left: -1px;
      width: 90px;
      border-top: 1px solid $line-color;

      &::before,
      &::after {
        top: 10px;
        left: 5px;
        width: 80px;
        border-top: 1px solid $line-color;
      }
      &::after {
        top: 23px;
        left: 10px;
        width: 70px;
      }

      div:first-child {
        top: 37px;
        left: 15px;
        width: 60px;
        border-top: 1px solid $line-color;

        &::before,
        &::after {
          top: -20px;
          left: -28px;
          width: 42px;
          border-top: 1px solid $line-color;
          transform: rotate(70deg);
        }
        &::after {
          left: 46px;
          transform: scale(-1, 1) rotate(70deg);
        }
      }

      div:nth-child(2) {
        &::before,
        &::after {
          top: -10px;
          left: -16px;
          width: 22px;
          border-top: 1px solid $line-color;
          transform: rotate(58deg);
        }
        &::after {
          left: 83px;
          transform: scale(-1, 1) rotate(58deg);
        }
      }

      div:nth-child(3) {
        &::before,
        &::after {
          top: -10px;
          left: -16px;
          width: 22px;
          border-top: 1px solid $line-color;
          transform: rotate(58deg);
        }
        &::after {
          left: 83px;
          transform: scale(-1, 1) rotate(58deg);
        }
      }

      div:nth-child(4) {
        &::before,
        &::after {
          top: -17px;
          left: -22px;
          width: 20px;
          height: 10px;
          border-top: 1px solid $line-color;
          border-right: 1px solid $line-color;
          border-radius: 0 5px 0 0;
          transform: rotate(-72deg);
        }
        &::after {
          left: 92px;
          transform: scale(-1, 1) rotate(-72deg);
        }
      }

      div:nth-child(5) {
        top: 47px;
        left: 10px;
        width: 70px;
        border-top: 1px solid $line-color;

        &::before,
        &::after {
          top: -28px;
          left: -45px;
          width: 60px;
          height: 4px;
          border-top: 1px solid $line-color;
          border-left: 1px solid $line-color;
          border-radius: 6px 0 0 0;
          transform: rotate(-117deg);
        }
        &::after {
          left: 54px;
          transform: scale(-1, 1) rotate(-117deg);
        }

        div {
          top: 0px;
          left: 0px;
          width: 68px;
          border-top: 0px solid transparent;

          &::before,
          &::after {
            top: -15px;
            left: -7px;
            width: 8px;
            height: 19px;
            border-top: 1px solid $line-color;
            border-right: 1px solid $line-color;
            transform: rotate(0deg) skewY(-58deg);
          }
          &::after {
            left: 69px;
            transform: scale(-1, 1) rotate(0deg) skewY(-58deg);
          }
        }
      }
    }

    .cockpit {
      top: 70px;
      left: 10px;
      width: 70px;
      border-top: 3px solid $line-color;

      &::before,
      &::after {
        top: -3px;
        left: -12px;
        width: 12px;
        height: 10px;
        border-top: 3px solid $line-color;
        transform-origin: top right;
        transform: rotate(-58deg);
      }
      &::after {
        top: -3px;
        left: 58px;
        transform: scale(-1, 1) rotate(-58deg);
      }

      div:first-child {
        top: 0;
        left: 12px;
        width: 45px;
        height: 150px;
        border-bottom: 3px solid $line-color;

        &::before,
        &::after {
          top: 7px;
          left: -18px;
          width: 40px;
          height: 150px;
          border-left: 3px solid $line-color;
          border-radius: 0 0 0 30%;
        }
        &::after {
          left: 24px;
          border: transparent;
          border-right: 3px solid $line-color;
          border-radius: 0 0 30% 0;
        }
      }

      div:nth-child(2) {
        top: 45px;
        left: 12px;
        width: 46px;
        border-top: 2px solid $line-color;

        &::before,
        &::after {
          top: -2px;
          left: -4px;
          width: 10px;
          height: 106px;
          border-left: 2px solid $line-color;
          border-radius: 5px 0 0 0;
          transform: rotate(2deg);
        }
        &::after {
          left: 40px;
          transform: scale(-1, 1) rotate(2deg);
        }
      }

      div:nth-child(3) {
        top: 6px;
        left: 7px;
        width: 55px;
        height: 5px;
        border: 1px solid $line-color;
        border-bottom: transparent;
        border-radius: 5px 5px 0 0;

        &::before,
        &::after {
          top: 3px;
          left: -1px;
          width: 1px;
          height: 27px;
          border-left: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-16deg);
        }
        &::after {
          left: 54px;
          transform: scale(-1, 1) rotate(-16deg);
        }
      }

      div:nth-child(4) {
        top: 6px;
        left: 15px;
        width: 40px;
        height: 32px;
        border-bottom: 3px double $line-color;

        &::before,
        &::after {
          top: 0px;
          left: -20px;
          width: 4px;
          height: 46px;
          border-left: 1px solid $line-color;
          border-right: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-19deg) skewY(-20deg);
        }
        &::after {
          top: -1px;
          left: 60px;
          transform: scale(-1, 1) rotate(-19deg) skewY(-20deg);
        }
      }

      div:nth-child(5) {
        top: 22px;
        left: 16px;
        width: 38px;
        height: 32px;
        border-bottom: 1px solid $line-color;

        &::before,
        &::after {
          top: 28px;
          left: -5px;
          height: 14px;
          width: 1px;
          border-left: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-45deg);
        }
        &::after {
          left: 42px;
          transform: rotate(45deg);
        }
      }
    }

    div:nth-child(6) {
      top: 59px;
      left: 21px;
      width: 28px;
      border-top: 1px solid $line-color;

      &::before,
      &::after {
        top: 0;
        left: -2px;
        width: 4px;
        height: 90px;
        border-left: 3px double $line-color;
        transform-origin: top left;
        transform: rotate(5deg);
      }
      &::after {
        left: 29px;
        transform: scale(-1, 1) rotate(5deg);
      }
    }

    div:nth-child(7) {
      top: 102px;
      left: 18px;
      width: 33px;
      border-top: 3px double $line-color;

      &::before,
      &::after {
        top: 42px;
        left: -6px;
        width: 4px;
        height: 12px;
        border-left: 3px solid $line-color;
        transform-origin: top left;
        transform: rotate(45deg);
      }
      &::after {
        top: 44px;
        left: 38px;
        transform: rotate(-45deg);
      }
    }
  }

  .under {
    top: 410px;
    left: 277px;
    width: 35px;
    border-top: 3px solid $line-color;

    &::before,
    &::after {
      top: -4px;
      left: -14px;
      width: 5px;
      height: 145px;
      border-left: 3px solid $line-color;
      border-radius: 0 0 50% 50%;
    }
    &::after {
      left: 44px;
      border-left: transparent;
      border-right: 3px solid $line-color;
    }

    div:first-child {
      top: 63px;
      left: 0px;
      width: 35px;
      border-top: 3px solid $line-color;

      &::before {
        top: -67px;
        left: -6px;
        width: 47px;
        height: 67px;
        border-left: 3px solid $line-color;
        border-right: 3px solid $line-color;
        border-radius: 20%;
      }

      &::after {
        top: -25px;
        left: -12px;
        width: 60px;
        border-top: 1px solid $line-color;
      }
    }

    div:nth-child(2) {
      top: 73px;
      left: 0px;
      width: 35px;
      height: 65px;
      border-top: 1px solid $line-color;
      border-bottom: 1px solid $line-color;

      &::before {
        top: -10px;
        left: -1px;
        width: 37px;
        height: 88px;
        border-left: 1px solid $line-color;
        border-right: 1px solid $line-color;
      }

      &::after {
        top: 70px;
        left: 0px;
        width: 35px;
        height: 9px;
        border-top: 1px solid $line-color;
        border-bottom: 3px solid $line-color;
      }
    }

    div:nth-child(3) {
      top: 16px;
      left: 16px;
      height: 9px;
      border-left: 2px solid $line-color;

      &::before,
      &::after {
        top: -6px;
        left: -16px;
        width: 16px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(24deg);
      }
      &::after {
        left: 14px;
        transform: scale(-1, 1) rotate(24deg);
      }
    }

    div:nth-child(4) {
      &::before,
      &::after {
        top: 11px;
        left: 2px;
        width: 25px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(52deg);
      }
      &::after {
        left: 32px;
        transform: scale(-1, 1) rotate(52deg);
      }
    }

    div:nth-child(5) {
      &::before,
      &::after {
        top: -8px;
        left: -6px;
        width: 11px;
        height: 11px;
        border: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(45deg);
      }
      &::after {
        left: 42px;
      }
    }

    div:nth-child(6) {
      &::before,
      &::after {
        top: 63px;
        left: -3px;
        width: 12px;
        height: 12px;
        border-left: 1px solid $line-color;
        border-bottom: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(60deg) skewY(-30deg);
      }
      &::after {
        left: 37px;
        transform: scale(-1, 1) rotate(60deg) skewY(-30deg);
      }
    }

    div:nth-child(7) {
      &::before,
      &::after {
        top: 134px;
        left: -12px;
        width: 16px;
        height: 7px;
        border-top: 1px solid $line-color;
        border-bottom: 2px solid $line-color;
        transform-origin: bottom left;
        transform: rotate(47deg) skewX(35deg);
      }
      &::after {
        left: 47px;
        transform: scale(-1, 1) rotate(47deg) skewX(35deg);
      }
    }
  }

  .body-left,
  .body-right {
    top: 178px;
    left: 166px;
    width: 64px;

    &::before {
      top: 0px;
      left: 4px;
      width: 60px;
      border-top: 1px solid $line-color;
      transform-origin: top right;
      transform: rotate(-5deg);
    }

    &::after {
      top: -14px;
      left: 57px;
      width: 12px;
      height: 16px;
      border-top: 1px solid $line-color;
      border-left: 1px solid $line-color;
      border-radius: 6px 0 0 0;
    }

    .outside {
      top: -14px;
      left: 3px;
      width: 27px;
      height: 20px;
      border: 1px solid $line-color;
      border-bottom: transparent;
      border-radius: 6px 6px 0 0;
      background-color: $ms-white;
      z-index: -200;

      &::before {
        top: 7px;
        left: 26px;
        width: 24px;
        height: 10px;
        border-top: 1px solid $line-color;
        border-right: 1px solid $line-color;
        background-color: $ms-white;
        transform: rotate(-16deg);
      }

      &::after {
        top: 21px;
        left: -4px;
        width: 5px;
        height: 38px;
        border-top: 1px solid $line-color;
        border-left: 1px solid $line-color;
        transform: rotate(-2deg) skewY(-50deg);
        z-index: -200;
      }
    }

    .breast {
      top: 50px;
      left: 10px;
      width: 50px;
      border-top: 1px solid $line-color;

      &::before {
        top: -45px;
        left: -2px;
        width: 1px;
        height: 46px;
        border-left: 1px solid $line-color;
        transform: rotate(-5deg);
      }

      &::after {
        top: -7px;
        left: 48px;
        width: 27px;
        border-top: 1px solid $line-color;
        transform: rotate(-25deg);
      }

      div:first-child {
        top: 4px;
        left: -3px;

        &::before {
          width: 7px;
          height: 20px;
          border-left: 1px solid $line-color;
          border-bottom: 2px solid $line-color;
          transform: rotate(-12deg) skewY(-25deg);
        }

        &::after {
          top: -2px;
          width: 7px;
          height: 22px;
          border-top: 1px solid $line-color;
          border-right: 1px solid $line-color;
          transform: rotate(-12deg) skewY(-37deg);
        }
      }

      div:nth-child(2) {
        top: 16px;
        left: -9px;
        width: 5px;
        height: 70px;
        border-left: 2px solid $line-color;
        border-radius: 50% 0 0 50%;
        transform: rotate(-3deg);

        &::before {
          top: 57px;
          left: 3px;
          width: 5px;
          height: 12px;
          border-top: 1px solid $line-color;
          border-left: 1px solid $line-color;
          transform: skewX(-25deg);
        }

        &::after {
          top: 61px;
          left: 3px;
          width: 15px;
          height: 17px;
          border-left: 1px solid $line-color;
          border-bottom: 1px solid $line-color;
          border-radius: 0 0 0 3px;
          transform: rotate(-55deg) skewX(-10deg);
        }
      }

      .shadow {
        top: -8px;
        left: -9px;
        width: 9px;
        height: 14px;
        border: 14px solid transparent;
        border-left: 5px solid $line-color;
      }
    }

    .exhaust-port {
      top: 76px;
      left: 24px;
      width: 53px;
      border-top: 2px solid $line-color;
      transform-origin: top left;
      transform: rotate(7deg);

      &::before {
        top: 3px;
        left: -7px;
        width: 10px;
        height: 40px;
        border-top: 2px solid $line-color;
        border-left: 2px solid $line-color;
        transform: rotate(-6deg) skewY(-40deg);
      }

      &::after {
        top: 2px;
        left: 53px;
        width: 10px;
        height: 40px;
        border-top: 2px solid $line-color;
        border-right: 2px solid $line-color;
        transform: rotate(-4deg) skewY(45deg);
      }

      &__outside {
        top: 55px;
        left: 8px;
        width: 65px;
        border-top: 1px solid $line-color;
        transform-origin: top left;

        &::before {
          top: -57px;
          left: -20px;
          width: 1px;
          height: 50px;
          border-left: 1px solid $line-color;
          transform: rotate(-6deg);
        }

        &::after {
          top: -63px;
          left: -17px;
          width: 64px;
          border-top: 1px solid $line-color;
          transform: rotate(-2deg);
        }

        div:first-child {
          top: -1px;
          left: 0px;
          width: 53px;
          border-top: 2px solid $line-color;
          transform-origin: top left;
          transform: rotate(-4deg);

          &::before {
            top: -12px;
            left: -11px;
            width: 16px;
            border-top: 2px solid $line-color;
            transform-origin: top left;
            transform: rotate(43deg);
          }

          &::after {
            top: -9px;
            left: 47px;
            width: 9px;
            border-top: 2px solid $line-color;
            transform-origin: top right;
            transform: rotate(-55deg);
          }
        }

        div:nth-child(2) {
          top: -50px;
          left: -6px;
          width: 50px;
          border-top: 2px solid $line-color;

          &::before {
            top: -1px;
            left: 3px;
            height: 42px;
            border-left: 2px solid $line-color;
            transform: rotate(-7deg);
          }

          &::after {
            top: -2px;
            left: 51px;
            width: 1px;
            height: 40px;
            border-right: 2px solid $line-color;
            transform: rotate(-7deg);
          }
        }

        div:last-child {
          top: -10px;
          left: 0px;
          width: 49px;
          border-top: 2px solid $line-color;
          transform: rotate(-2deg);

          &::before {
            top: -55px;
            left: 48px;
            width: 12px;
            border-top: 1px solid $line-color;
            transform-origin: top left;
            transform: rotate(20deg);
          }
        }
      }

      &__internal {
        top: 20px;
        left: 4px;
        width: 49px;
        border-top: 2px solid $line-color;

        &::before {
          top: -11px;
          left: -5px;
          width: 1px;
          height: 35px;
          border-left: 1px solid $line-color;
          transform: rotate(-7deg);
        }

        &::after {
          top: -11px;
          left: 54px;
          width: 1px;
          height: 35px;
          border-left: 1px solid $line-color;
          transform: rotate(-6deg);
        }

        div {
          top: 12px;
          left: 3px;
          width: 49px;
          border-top: 2px solid $line-color;
        }
      }

      &__abdomen {
        top: 104px;
        left: 38px;
        width: 40px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(-14deg);

        &::before {
          top: -46px;
          left: -23px;
          height: 42px;
          border-left: 2px solid $line-color;
          transform: rotate(-5deg);
        }

        &::after {
          top: -53px;
          left: -17px;
          height: 48px;
          border-left: 1px solid $line-color;
          transform: rotate(-6deg);
        }

        div:first-child {
          top: -7px;
          left: -9px;
          width: 50px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(0deg);

          &::before {
            top: -50px;
            left: -2px;
            height: 50px;
            border-left: 1px solid $line-color;
            transform: rotate(-6deg);
          }

          &::after {
            top: 1px;
            left: -11px;
            width: 12px;
            border-top: 1px solid $line-color;
            transform: rotate(-16deg);
          }
        }

        div:nth-child(2) {
          top: -1px;
          left: -15px;
          width: 16px;
          border-top: 2px solid $line-color;
          transform: rotate(-10deg);

          &::before {
            top: -5px;
            left: -6px;
            width: 9px;
            border-top: 2px solid $line-color;
            transform: rotate(55deg);
          }
          &::after {
            top: -7px;
            left: 5px;
            width: 7px;
            height: 6px;
            border-left: 1px solid $line-color;
            border-right: 1px solid $line-color;
            transform: rotate(-10deg) skewX(45deg);
          }
        }

        div:nth-child(3) {
          top: 0px;
          left: -14px;
          height: 36px;
          border-left: 2px solid $line-color;
          transform-origin: top left;
          transform: rotate(15deg);

          &::before {
            top: -1px;
            left: 4px;
            height: 37px;
            border-left: 1px solid $line-color;
          }

          &::after {
            top: -4px;
            left: 10px;
            height: 40px;
            border-left: 1px solid $line-color;
          }
        }
      }
    }

    .hip {
      top: 235px;
      left: 55px;
      width: 35px;
      border-top: 3px double $line-color;

      &::before {
        top: 0px;
        left: 33px;
        width: 10px;
        border-top: 3px double $line-color;
        transform: rotate(45deg);
      }

      &::after {
        top: -8px;
        left: -12px;
        width: 14px;
        border-top: 3px double $line-color;
        transform: rotate(45deg);
      }

      div:first-child {
        top: -13px;
        left: -34px;
        width: 25px;
        border-top: 3px double $line-color;

        &::before {
          top: -4px;
          left: -5px;
          height: 14px;
          border-left: 2px solid $line-color;
          transform: rotate(48deg);
        }

        &::after {
          top: 7px;
          left: -10px;
          height: 90px;
          border-left: 2px solid $line-color;
          transform-origin: top left;
          transform: rotate(12deg);
        }
      }

      div:nth-child(2) {
        top: -37px;
        left: -60px;
        width: 23px;
        border-top: 3px double $line-color;
        transform-origin: top left;
        transform: rotate(9deg);

        &::before {
          top: -3px;
          left: 23px;
          width: 12px;
          border-top: 2px solid $line-color;
          transform-origin: top left;
          transform: rotate(45deg);
        }

        &::after {
          top: 6px;
          left: 30px;
          height: 12px;
          border-right: 2px solid $line-color;
        }
      }

      div:nth-child(3) {
        top: -20px;
        left: -45px;
        width: 15px;
        height: 5px;
        border-top: 1px solid $line-color;
        border-bottom: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(15deg);

        &::before {
          top: -1px;
          left: -12px;
          width: 12px;
          border-top: 1px solid $line-color;
          transform-origin: top right;
          transform: rotate(-45deg);
        }

        &::after {
          top: 3px;
          left: 2px;
          width: 8px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(134deg);
        }
      }

      div:nth-child(4) {
        top: -15px;
        left: -55px;
        height: 98px;
        border-left: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(12deg);

        &::before {
          top: 2px;
          left: 4px;
          height: 84px;
          border-left: 1px solid $line-color;
        }

        &::after {
          top: -12px;
          left: -16px;
          height: 44px;
          border-left: 3px double $line-color;
        }
      }

      div:nth-child(5) {
        top: -37px;
        left: -70px;
        width: 12px;
        border-top: 3px double $line-color;
        transform-origin: top right;
        transform: rotate(-39deg);

        &::before {
          top: 25px;
          left: -44px;
          width: 11px;
          border-top: 2px solid $line-color;
          transform-origin: top right;
          transform: rotate(-35deg);
        }

        &::after {
          top: 25px;
          left: -53px;
          width: 20px;
          border-top: 2px solid $line-color;
          transform-origin: top right;
          transform: rotate(-85deg);
        }
      }

      div:nth-child(6) {
        top: 70px;
        left: -72px;
        width: 5px;
        border-top: 1px solid $line-color;
        transform-origin: top left;

        &::before {
          top: 0px;
          left: 5px;
          width: 10px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(45deg);
        }

        &::after {
          top: 8px;
          left: -3px;
          width: 15px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(50deg);
        }
      }

      div:nth-child(7) {
        top: 22px;
        left: -78px;
        width: 23px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(58deg);

        &::before {
          top: 23px;
          left: 64px;
          width: 25px;
          border-top: 2px solid $line-color;
          transform-origin: top left;
        }

        &::after {
          top: 23px;
          left: 64px;
          width: 8px;
          border-top: 2px solid $line-color;
          transform-origin: top left;
          transform: rotate(-120deg);
        }
      }

      div:nth-child(8) {
        top: 96px;
        left: -55px;
        width: 92px;
        height: 13px;
        border-top: 1px solid $line-color;
        border-bottom: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(12deg);

        &::before {
          top: -6px;
          left: -11px;
          width: 12px;
          height: 5px;
          border-top: 1px solid $line-color;
          transform: rotate(45deg);
        }

        &::after {
          top: -2px;
          left: -8px;
          width: 8px;
          height: 5px;
          border-top: 1px solid $line-color;
          transform-origin: top right;
          transform: rotate(-80deg);
        }
      }

      div:nth-child(9) {
        top: 115px;
        left: 35px;
        width: 10px;
        height: 10px;
        border-top: 1px solid $line-color;
        border-left: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(15deg);

        &::before {
          top: 0px;
          left: -6px;
          height: 10px;
          border-left: 1px solid $line-color;
        }

        &::after {
          top: -1px;
          left: -5px;
          width: 15px;
          border-top: 2px solid $line-color;
          transform-origin: top right;
          transform: rotate(-45deg);
        }
      }
    }

    .poket {
      top: 251px;
      left: 28px;
      width: 53px;
      border-top: 3px solid $line-color;

      &::before {
        top: -4px;
        left: -14px;
        width: 14px;
        border-top: 2px solid $line-color;
        transform-origin: top right;
        transform: rotate(-45deg);
      }

      &::after {
        top: -3px;
        left: 52px;
        width: 12px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(45deg);
      }

      div:first-child {
        top: -1px;
        left: -2px;
        width: 55px;
        height: 46px;
        border-left: 2px solid $line-color;
        border-right: 2px solid $line-color;

        &::before {
          top: 7px;
          left: -10px;
          height: 45px;
          border-left: 1px solid $line-color;
          transform-origin: top left;
        }

        &::after {
          top: 7px;
          left: 59px;
          height: 49px;
          border-right: 1px solid $line-color;
          transform-origin: top left;
        }
      }

      div:nth-child(2) {
        top: 52px;
        left: 8px;
        width: 36px;
        border-top: 2px solid $line-color;

        &::before {
          top: 0px;
          left: 0px;
          width: 14px;
          border-top: 2px solid $line-color;
          transform-origin: top left;
          transform: rotate(-140deg);
        }

        &::after {
          top: -1px;
          left: 34px;
          width: 14px;
          border-top: 2px solid $line-color;
          transform-origin: top left;
          transform: rotate(-45deg);
        }
      }

      div:nth-child(3) {
        top: 64px;
        left: 6px;
        width: 44px;
        border-top: 1px solid $line-color;

        &::before,
        &::after {
          top: 0;
          left: 0;
          width: 12px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-80deg);
        }
        &::after {
          left: 44px;
          width: 14px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-50deg);
        }
      }

      div:nth-child(4) {
        top: 44px;
        left: -2px;
        width: 21px;
        height: 10px;
        border-left: 1px solid $line-color;
        border-bottom: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(45deg);

        &::before {
          top: -38px;
          left: 36px;
          width: 14px;
          border-bottom: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(4deg);
        }

        &::after {
          top: -25px;
          left: 35px;
          width: 15px;
          border-bottom: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(10deg);
        }
      }

      div:nth-child(5) {
        top: -1px;
        left: 6px;
        width: 7px;
        height: 10px;
        border: 1px solid $line-color;
        transform-origin: top left;

        &::before {
          top: -1px;
          left: 27px;
          width: 7px;
          height: 10px;
          border: 1px solid $line-color;
          transform-origin: top left;
        }
      }
    }
  }
  .body-right {
    left: 360px;
    transform: scale(-1, 1);
  }

  .left-arm,
  .right-arm {
    top: 154px;
    left: 60px;
    width: 90px;
    border-top: 2px solid $line-color;

    &::before {
      top: 0;
      left: 1px;
      width: 23px;
      border-top: 2px solid $line-color;
      transform-origin: top left;
      transform: rotate(134deg);
    }

    &::after {
      top: -1px;
      left: 90px;
      width: 21px;
      border-top: 2px solid $line-color;
      transform-origin: top left;
      transform: rotate(45deg);
    }

    .shoulder {
      top: 4px;
      left: 4px;
      width: 82px;
      border-top: 1px solid $line-color;

      &::before {
        top: 0;
        left: 1px;
        width: 16px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(134deg);
      }

      &::after {
        top: -1px;
        left: 82px;
        width: 18px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(45deg);
      }

      div:first-child {
        top: 4px;
        left: 18px;
        width: 46px;
        height: 5px;
        border: 1px solid $line-color;

        &::before {
          top: -10px;
          left: -21px;
          width: 6px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(50deg);
        }

        &::after {
          top: -6px;
          left: 61px;
          width: 6px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-50deg);
        }
      }

      div:nth-child(2) {
        top: 8px;
        left: 98px;
        height: 90px;
        border-left: 2px solid $line-color;

        &::before {
          top: 37px;
          left: 0px;
          width: 3px;
          height: 32px;
          background-color: $line-color;
        }

        &::after {
          top: 3px;
          left: -7px;
          height: 83px;
          border-left: 1px solid $line-color;
        }
      }

      div:nth-child(3) {
        top: 10px;
        left: -20px;
        height: 84px;
        border-left: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(-18deg);

        &::before {
          top: 4px;
          left: 6px;
          height: 74px;
          border-left: 1px solid $line-color;
        }

        &::after {
          top: 0;
          left: 0;
          width: 8px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(30deg);
        }
      }

      div:nth-child(4) {
        top: 88px;
        left: 6px;
        width: 80px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(18deg);

        &::before {
          top: -10px;
          left: 4px;
          width: 72px;
          border-top: 1px solid $line-color;
        }

        &::after {
          top: -1px;
          left: 0;
          width: 10px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-60deg);
        }
      }

      div:nth-child(5) {
        top: 112px;
        left: 80px;
        width: 24px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(-40deg);

        &::before {
          top: -8px;
          left: 4px;
          width: 19px;
          border-top: 1px solid $line-color;
        }
      }
    }

    .arm {
      top: 96px;
      left: 10px;
      width: 10px;
      height: 90px;
      border-left: 2px solid $line-color;
      border-radius: 50%;
      transform: rotate(8deg);

      &::before {
        top: 9px;
        left: 52px;
        width: 10px;
        height: 86px;
        border-right: 2px solid $line-color;
        border-radius: 50%;
        transform: rotate(5deg);
      }

      &::after {
        top: 3px;
        left: 18px;
        height: 28px;
        border-left: 2px solid $line-color;
        transform: rotate(6deg);
      }

      div:first-child {
        top: 0px;
        left: 4px;
        width: 10px;
        height: 90px;
        border-left: 1px solid $line-color;
        border-radius: 50%;

        &::before {
          top: 9px;
          left: 40px;
          width: 10px;
          height: 86px;
          border-right: 1px solid $line-color;
          border-radius: 50%;
          transform: rotate(5deg);
        }

        &::after {
          top: 32px;
          left: 10px;
          width: 10px;
          height: 28px;
          border-left: 2px solid $line-color;
          border-top: 2px solid $line-color;
          transform: scale(-1, 1) rotate(-6deg) skewY(-30deg);
        }
      }

      div:nth-child(2) {
        top: 62px;
        left: 0;
        width: 60px;
        border-top: 1px solid $line-color;
        transform: rotate(2deg);

        &::before {
          top: 26px;
          left: 4px;
          width: 10px;
          border-top: 2px solid $line-color;
          transform: rotate(6deg);
        }
        &::after {
          top: 28px;
          left: 46px;
          width: 10px;
          border-top: 2px solid $line-color;
        }
      }

      div:nth-child(3) {
        top: 80px;
        left: 14px;
        width: 30px;
        height: 60px;
        border: 2px solid $line-color;
        border-radius: 5px;
        transform: rotate(2deg);
        background-color: $ms-gray;

        &::before {
          top: 0px;
          left: 11px;
          height: 58px;
          border-left: 3px double $line-color;
        }

        &::after {
          top: 26px;
          left: 0px;
          width: 28px;
          border-top: 1px solid $line-color;
        }
      }

      div:nth-child(4) {
        top: 125px;
        left: 14px;
        width: 30px;
        border-top: 3px double $line-color;
        transform: rotate(2deg);

        &::before {
          top: -38px;
          left: -8px;
          width: 44px;
          height: 32px;
          border-left: 1px solid $line-color;
          border-right: 1px solid $line-color;
        }

        &::after {
          top: 21px;
          left: 3px;
          width: 5px;
          height: 8px;
          border-top: 1px solid $line-color;
          border-left: 1px solid $line-color;
          transform: rotate(-180deg) skewX(-12deg);
        }
      }

      div:nth-child(5) {
        top: 149px;
        left: -7px;
        width: 69px;
        border-top: 1px solid $line-color;
        transform: rotate(2deg);

        &::before {
          top: -68px;
          left: -4px;
          width: 76px;
          height: 38px;
          border-left: 2px solid $line-color;
          border-right: 2px solid $line-color;
          border-radius: 5px;
        }

        &::after {
          top: -68px;
          left: -2px;
          width: 8px;
          border-top: 1px solid $line-color;
          transform: rotate(-12deg);
        }
      }

      div:nth-child(6) {
        top: 83px;
        left: 58px;
        width: 8px;
        border-top: 1px solid $line-color;
        transform: rotate(20deg);

        &::before {
          top: 54px;
          left: -50px;
          width: 24px;
          border-top: 1px solid $line-color;
          transform: rotate(-8deg);
        }

        &::after {
          top: 38px;
          left: -1px;
          width: 20px;
          border-top: 1px solid $line-color;
          transform: rotate(-30deg);
        }
      }

      div:nth-child(7) {
        top: 149px;
        left: -10px;
        width: 72px;
        height: 110px;
        border-left: 2px solid $line-color;
        border-right: 2px solid $line-color;
        transform: rotate(2deg);

        &::before {
          top: -28px;
          left: 2px;
          width: 10px;
          height: 30px;
          border-left: 2px solid $line-color;
          border-radius: 5px 0 0 0;
          transform: rotate(15deg);
        }

        &::after {
          top: -28px;
          left: 56px;
          width: 10px;
          height: 30px;
          border-right: 2px solid $line-color;
          border-radius: 0 5px 0 0;
          transform: rotate(-15deg);
        }
      }

      div:nth-child(8) {
        top: 258px;
        left: -10px;
        width: 70px;
        border-top: 1px solid $line-color;
        transform: rotate(2deg);

        &::before {
          top: -30px;
          left: 52px;
          width: 10px;
          height: 18px;
          border: 1px solid $line-color;
          border-right: transparent;
          border-radius: 2px 0 0 2px;
        }

        &::after {
          top: -110px;
          left: 5px;
          width: 58px;
          height: 110px;
          border-left: 1px solid $line-color;
          border-right: 1px solid $line-color;
        }
      }

      div:nth-child(9) {
        top: 224px;
        left: -10px;
        width: 7px;
        border-top: 2px solid $line-color;
        transform: rotate(2deg);

        &::before,
        &::after {
          top: -106px;
          left: 10px;
          height: 30px;
          border-left: 1px solid $line-color;
          transform: rotate(15deg);
        }
        &::after {
          left: 60px;
          transform: rotate(-15deg);
        }
      }

      div:nth-child(10) {
        top: 264px;
        left: -6px;
        width: 60px;
        border-top: 1px solid $line-color;
        transform: rotate(2deg);

        &::before,
        &::after {
          top: 0px;
          left: 0px;
          width: 9px;
          border-top: 1px solid $line-color;
          transform-origin: top left;
          transform: rotate(-140deg);
        }
        &::after {
          top: -6px;
          left: 66px;
          transform: rotate(140deg);
        }
      }

      div:nth-child(11) {
        top: 264px;
        left: -2px;
        width: 48px;
        height: 8px;
        border: 1px solid $line-color;
        transform: rotate(2deg);

        &::before {
          top: 6px;
          left: 16px;
          height: 10px;
          border-left: 2px solid $line-color;
          transform: rotate(-10deg);
        }

        &::after {
          top: 6px;
          left: 34px;
          height: 7px;
          border-left: 2px solid $line-color;
          transform: rotate(-10deg);
        }
      }
    }
  }
  .right-arm {
    left: 440px;
    transform: scale(-1, 1);
  }

  .left-hand,
  .right-hand {
    top: 532px;
    left: 44px;
    width: 30px;
    height: 60px;
    border-top: 1px solid $line-color;
    border-left: 2px solid $line-color;
    border-radius: 2px 0 0 4px;
    transform-origin: top left;
    transform: rotate(2deg) skewY(-2deg);

    &::before {
      top: 0px;
      left: 12px;
      height: 22px;
      border-left: 1px solid $line-color;
    }

    &::after {
      top: 22px;
      left: 12px;
      height: 16px;
      border-left: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(-45deg);
    }

    div:first-child {
      top: 32px;
      left: 23px;
      height: 18px;
      border-left: 1px solid $line-color;
      transform-origin: top left;

      &::before {
        top: 26px;
        left: -24px;
        width: 8px;
        border-top: 1px solid $line-color;
      }

      &::after {
        top: 26px;
        left: -16px;
        width: 18px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(-30deg);
      }
    }

    div:nth-child(2) {
      top: 8px;
      left: 17px;
      height: 58px;
      width: 14px;
      border: 1px solid $line-color;
      border-bottom: transparent;
      border-radius: 0 0 2px 2px;
      transform-origin: top left;
      transform: rotate(-30deg);

      &::before {
        top: 50px;
        left: 0px;
        width: 13px;
        height: 10px;
        border-radius: 50%;
        border-bottom: 2px solid $line-color;
      }

      &::after {
        top: 4px;
        left: 0px;
        width: 13px;
        height: 10px;
        border-bottom: 3px double $line-color;
      }
    }

    div:nth-child(3) {
      top: 35px;
      left: 33px;
      width: 13px;
      height: 5px;
      border-top: 1px solid $line-color;
      border-bottom: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(-30deg);

      &::before {
        top: -151px;
        left: 73px;
        height: 58px;
        border-left: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(36deg);
      }
      &::after {
        top: -106px;
        left: 40px;
        height: 28px;
        border-left: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(80deg);
      }
    }

    div:nth-child(4) {
      top: 33px;
      left: 24px;
      width: 7px;
      height: 24px;
      border-top: 1px solid $line-color;
      border-bottom: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(-30deg);

      &::before {
        top: 12px;
        left: -9px;
        width: 14px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(50deg);
      }

      &::after {
        top: 12px;
        left: -28px;
        width: 30px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(50deg);
      }
    }

    div:nth-child(5) {
      top: 50px;
      left: 22px;
      width: 13px;
      height: 14px;
      border-left: 1px solid $line-color;
      border-right: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(6deg) skewY(8deg);

      &::before {
        top: 9px;
        left: -9px;
        width: 10px;
        border-top: 1px solid $line-color;
        transform: rotate(-45deg);
      }

      &::after {
        top: 6px;
        left: 8px;
        width: 14px;
        border-top: 1px solid $line-color;
        transform: rotate(60deg);
      }
    }

    div:nth-child(6) {
      top: 69px;
      left: 32px;
      width: 28px;
      border-top: 2px solid $line-color;
      transform-origin: top left;
      transform: rotate(-28deg);

      &::before {
        top: -2px;
        left: 26px;
        width: 10px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(-25deg);
      }

      &::after {
        top: -24px;
        left: 50px;
        width: 22px;
        height: 15px;
        border-top: 2px solid $line-color;
        border-left: 2px solid $line-color;
        border-radius: 5px 0 0 6px;
        transform-origin: top left;
        transform: rotate(96deg) skewY(30deg);
      }
    }

    div:nth-child(7) {
      top: -1px;
      left: 28px;
      width: 7px;
      height: 13px;
      border-top: 1px solid $line-color;
      border-right: 1px solid $line-color;
      border-radius: 0 3px 0 0;
      transform-origin: top left;

      &::before {
        top: 16px;
        left: 10px;
        width: 7px;
        height: 16px;
        border-top: 1px solid $line-color;
        border-right: 2px solid $line-color;
        border-radius: 0 2px 0 0;
        transform-origin: top left;
        transform: skewX(40deg);
      }
    }
  }
  .right-hand {
    left: 546px;
    transform: scale(-1, 1);
  }

  .left-leg,
  .right-leg {
    top: 524px;
    left: 166px;
    width: 90px;
    height: 160px;
    border: 2px solid $line-color;
    border-bottom: transparent;
    border-radius: 5px 5px 20% 10%;
    transform-origin: top left;
    transform: rotate(12deg) skewX(3deg);

    &::before {
      top: -1px;
      left: 10px;
      width: 70px;
      height: 120px;
      border: 1px solid $line-color;
      border-bottom: transparent;
      border-radius: 5px 5px;
      transform-origin: top left;
      transform: skewX(-1deg);
    }

    div:first-child {
      top: 18px;
      left: 25px;
      width: 40px;
      border-top: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(-2deg);

      &::before,
      &::after {
        width: 22px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(-112deg);
      }
      &::after {
        left: 40px;
        transform: scale(-1, 1) rotate(-116deg);
      }
    }

    div:nth-child(2) {
      top: 115px;
      left: 14px;
      width: 58px;
      height: 80px;
      border-top: 2px solid $line-color;
      border-radius: 5px;

      &::before,
      &::after {
        top: 0px;
        left: 0px;
        width: 58px;
        height: 84px;
        border-left: 2px solid $line-color;
        border-radius: 2px;
        transform-origin: top left;
        transform: skewX(-15deg);
      }
      &::after {
        left: 58px;
        transform: scale(-1, 1) skewX(-13deg);
        background-color: $ms-white;
      }
    }

    div:nth-child(3) {
      top: 122px;
      left: 18px;
      width: 50px;
      height: 80px;
      border-top: 3px double $line-color;
      border-radius: 5px;

      &::before,
      &::after {
        top: 0px;
        left: 0px;
        width: 58px;
        height: 74px;
        border-left: 3px double $line-color;
        transform-origin: top left;
        transform: skewX(-10deg);
      }
      &::after {
        left: 50px;
        height: 70px;
        transform: scale(-1, 1) skewX(-8deg);
      }
    }

    div:nth-child(4) {
      top: 122px;
      left: 28px;
      width: 20px;
      height: 190px;
      border-bottom: 3px double $line-color;

      &::before,
      &::after {
        top: 77px;
        left: -23px;
        height: 70px;
        border-left: 3px double $line-color;
        transform-origin: top left;
        transform: skewX(6deg);
      }
      &::after {
        top: 73px;
        left: 50px;
        transform: scale(-1, 1) skewX(8deg);
      }
    }

    div:nth-child(5) {
      top: 220px;
      left: -17px;
      width: 10px;
      border-top: 2px solid $line-color;
      border-radius: 2px;
      transform-origin: top left;
      transform: rotate(-8deg);

      &::before,
      &::after {
        top: -22px;
        left: -48px;
        width: 60px;
        height: 84px;
        border-radius: 50% 0 0 0;
        border-top: 2px solid $line-color;
        border-left: 2px solid $line-color;
        transform-origin: top right;
        transform: rotate(-14deg) skewY(-47deg);
      }
      &::after {
        top: -17px;
        left: 4px;
        transform-origin: bottom right;
        transform: rotate(-12deg) scale(-1, -1) skewY(-47deg);
      }
    }

    div:nth-child(6) {
      top: 217px;
      left: 87px;
      width: 10px;
      border-top: 2px solid $line-color;
      border-radius: 2px;
      transform-origin: top left;
      transform: rotate(-8deg);

      &::before,
      &::after {
        top: -32px;
        left: -92px;
        height: 80px;
        border-left: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(1deg);
      }
      &::after {
        top: -18px;
        left: 6px;
        transform: scale(-1, 1) rotate(-18deg);
      }
    }

    div:nth-child(7) {
      top: 227px;
      left: -18px;
      width: 14px;
      border-top: 1px solid $line-color;
      border-radius: 2px;
      transform-origin: top left;
      transform: rotate(-8deg);

      &::before {
        top: -75px;
        left: 10px;
        width: 20px;
        height: 50px;
        border-top: 1px solid $line-color;
        border-left: 1px solid $line-color;
        border-radius: 5px 0 0 0;
        transform-origin: top left;
        transform: skewX(-10deg);
      }
      &::after {
        top: -25px;
        left: 1px;
        width: 10px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(25deg);
      }
    }

    div:nth-child(8) {
      top: 225px;
      left: 86px;
      width: 14px;
      border-top: 1px solid $line-color;
      border-radius: 2px;
      transform-origin: top left;
      transform: rotate(-8deg);

      &::before {
        top: -75px;
        left: 8px;
        width: 20px;
        height: 50px;
        border-top: 1px solid $line-color;
        border-right: 1px solid $line-color;
        border-radius: 0 5px 0 0;
        transform-origin: top right;
        transform: rotate(10deg) skewX(0deg);
      }
      &::after {
        top: -26px;
        left: 19px;
        width: 12px;
        border-top: 1px solid $line-color;
        transform-origin: top left;
        transform: scale(-1, 1) rotate(20deg);
      }
    }

    div:nth-child(9) {
      top: 325px;
      left: 30px;
      width: 14px;
      border-top: 1px solid $line-color;
      transform-origin: top left;

      &::before,
      &::after {
        top: -59px;
        left: -16px;
        width: 8px;
        height: 14px;
        border: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(25deg) skewX(-10deg);
      }
      &::after {
        top: -62px;
        left: 37px;
        transform: scale(-1, 1) rotate(25deg) skewX(0deg);
      }
    }

    div:nth-child(10) {
      top: 330px;
      left: 23px;
      width: 27px;
      border-top: 3px double $line-color;
      transform-origin: top left;

      &::before,
      &::after {
        top: -51px;
        left: -10px;
        height: 50px;
        border-left: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(-10deg);
      }
      &::after {
        left: 40px;
        transform: scale(-1, 1) rotate(-10deg);
      }
    }

    div:nth-child(11) {
      &::before,
      &::after {
        top: 270px;
        left: 18px;
        height: 56px;
        border-left: 3px double $line-color;
        transform-origin: top left;
        transform: rotate(-10deg);
      }
      &::after {
        left: 60px;
        transform: scale(-1, 1) rotate(-14deg);
      }
    }

    div:nth-child(12) {
      &::before,
      &::after {
        top: 279px;
        left: 2px;
        height: 180px;
        border-left: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(6deg);
      }
      &::after {
        left: 77px;
        height: 175px;
        transform: scale(-1, 1) rotate(3deg);
      }
    }

    div:nth-child(13) {
      &::before,
      &::after {
        top: 279px;
        left: 10px;
        height: 176px;
        border-left: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(2deg);
      }
      &::after {
        left: 67px;
        height: 170px;
        transform: scale(-1, 1) rotate(2deg);
      }
    }

    div:nth-child(14) {
      top: 439px;
      left: 4px;
      width: 69px;
      border-top: 1px solid $line-color;
      transform: rotate(-3deg);
    }
  }

  .right-leg {
    left: 422px;
    transform: scale(-1, 1) rotate(12deg) skewX(3deg);
  }

  .left-foot,
  .right-foot {
    top: 1030px;
    left: 35px;
    width: 165px;
    height: 100px;

    &::before {
      top: -54px;
      left: 44px;
      width: 90px;
      height: 53px;
      border-top: 2px solid $line-color;
      border-bottom: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(5deg);
    }

    &::after {
      top: 45px;
      left: 32px;
      width: 104px;
      height: 38px;
      border-radius: 3px 3px 0 0;
      border-top: 1px solid $line-color;
      border-bottom: 2px solid $line-color;
      transform-origin: top left;
    }

    div:first-child {
      top: -53px;
      left: 43px;
      width: 100px;
      height: 50px;
      border-left: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(6deg);

      &::before {
        top: -1px;
        left: 90px;
        width: 100px;
        height: 50px;
        border-left: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(-6deg);
      }

      &::after {
        top: 5px;
        left: 102px;
        width: 100px;
        height: 42px;
        border-left: 1px solid $line-color;
        transform-origin: top left;
        transform: rotate(-3deg);
      }
    }

    div:nth-child(2) {
      top: -45px;
      left: 33px;
      width: 100px;
      height: 40px;
      border-left: 1px solid $line-color;
      transform-origin: top left;
      transform: rotate(6deg);

      &::before {
        top: -10px;
        left: -33px;
        width: 40px;
        height: 10px;
        border-top: 2px solid $line-color;
        border-radius: 0 5px 0 0;
        transform-origin: top right;
        transform: rotate(-50deg);
      }
      &::after {
        top: -6px;
        left: 112px;
        width: 30px;
        height: 10px;
        border-top: 2px solid $line-color;
        transform-origin: top left;
        transform: rotate(60deg);
      }
    }
  }

  .right-foot {
    left: 388px;
    transform: scale(-1, 1);
  }
}
</style>
