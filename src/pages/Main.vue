<template>
  <div id="main-wrap">
    <div id="block1" class="block">
      <div class="title-wrap">
        <div class="title">Engineer</div>
      </div>
      <div class="flex-wrap">
        <div class="left-content">
          <div class="card">
            <div class="msg">Message</div>
          </div>
        </div>
        <div class="right-content">
          <div class="name">Jerry Will</div>
          <div class="card">
            <div>
              <span>
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
              </span>
              <span class="info">New York, United States</span>
            </div>
            <div>
              <span>
                <font-awesome-icon :icon="['far', 'envelope']" />
              </span>
              <span class="info">New York, United States</span>
            </div>
            <div>
              <span>
                <font-awesome-icon :icon="['fas', 'laptop-code']" />
              </span>
              <div class="info skills">
                <div>Javascript</div>
                <div>Node.js</div>
                <div>jQuery</div>
                <div>Vue.js</div>
                <div>Node.js</div>
                <div>Angular.js</div>
                <div>MySQL</div>
                <div>Express.js</div>
                <div>React</div>
                <div>MongoDB</div>
              </div>
            </div>
            <div>
              <span class="flex-row">
                <font-awesome-icon :icon="['far', 'address-card']" />
              </span>
              <span class="info">
                <div class="flex-row">
                  <div class="round-img">
                    <img src="@/assets/github.png" />
                  </div>
                  <div class="round-img">
                    <img src="@/assets/stackover.png" />
                  </div>
                  <div class="round-img">
                    <img src="@/assets/linked.png" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="block2" class="block">
      <div class="title">About</div>
      <div class="card">
        As a full-stack developer, Isa has an abundance of experience in web development with a focus on JavaScript. Recently, he’s been
        collaborating with a variety of companies making him intimately familiar with all the stages of the web life cycle from the initial
        architecture to final deployment.
      </div>
    </div>
    <div id="block3" class="block">
      <div class="title">Top Skills</div>
      <div class="card">
        <div>
          <div>
            <div class="text1">Languages</div>
            <div class="text2">GraphQL, Javascript, PHP, Python</div>
          </div>
          <div>
            <div class="text1">Frameworks</div>
            <div class="text2">Bootstrap, Redux, Angular</div>
          </div>
          <div>
            <div class="text1">Libraries/APIs</div>
            <div class="text2">jQuery, Mobx, Vue.js, React, TensorFlow</div>
          </div>
          <div>
            <div class="text1">Paradigms</div>
            <div class="text2">Functional Programming, Testing</div>
          </div>
        </div>
        <div>
          <div>
            <div class="text1">Platforms</div>
            <div class="text2">AWS Lambda, AWS ECS, Firebase, Docker</div>
          </div>
          <div>
            <div class="text1">Storage</div>
            <div class="text2">MySQL, MongoDB</div>
          </div>
          <div>
            <div class="text1">Tools</div>
            <div class="text2">Mocha</div>
          </div>
          <div>
            <div class="text1">Other</div>
            <div class="text2">Front-end, Freelance Develope, Payment APIs</div>
          </div>
        </div>
      </div>
    </div>
    <div id="block4" class="block">
      <div class="title">Experience</div>
      <div class="card-wrap">
        <div class="card">
          <div class="experience-wrap">
            <div class="experience-card">
              <div class="round-div flex-row">
                <font-awesome-icon :icon="['far', 'check-square']" />
              </div>
              <div class="flex-col">
                <div class="text1">C#</div>
                <div class="text2">7 years</div>
              </div>
            </div>
            <div class="experience-card">
              <div class="round-div flex-row">
                <font-awesome-icon :icon="['far', 'check-square']" />
              </div>
              <div class="flex-col">
                <div class="text1">JacaScript</div>
                <div class="text2">5 years</div>
              </div>
            </div>
            <div class="experience-card">
              <div class="round-div flex-row">
                <font-awesome-icon :icon="['far', 'check-square']" />
              </div>
              <div class="flex-col">
                <div class="text1">Python</div>
                <div class="text2">5 years</div>
              </div>
            </div>
            <div class="experience-card">
              <div class="round-div flex-row">
                <font-awesome-icon :icon="['far', 'check-square']" />
              </div>
              <div class="flex-col">
                <div class="text1">React</div>
                <div class="text2">4 years</div>
              </div>
            </div>
            <div class="experience-card">
              <div class="round-div flex-row">
                <font-awesome-icon :icon="['far', 'check-square']" />
              </div>
              <div class="flex-col">
                <div class="text1">CSS</div>
                <div class="text2">7 years</div>
              </div>
            </div>
            <div class="experience-card">
              <div class="round-div flex-row">
                <font-awesome-icon :icon="['far', 'check-square']" />
              </div>
              <div class="flex-col">
                <div class="text1">Express.js</div>
                <div class="text2">2 years</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-shadow"></div>
      </div>
    </div>
    <div id="block5" class="block">
      <div class="title">Hightlight Projects</div>
      <div class="card">
        <ul id="stepProgressBar">
          <li class="step-container">
            <div class="bullet"></div>
            <div class="step">
              <div class="project-title">
                Node.js Back End
                <span>Tripcents</span>
              </div>
              <p class="step-text">A Node.js back-end API hosted on Firebase</p>
              <div class="project-detail">
                <div>Features:</div>
                <div>
                  <ul>
                    <li>Cloud functions, a real-time database, push notifications</li>
                    <li>Payment integration with Dwolla and Plaid</li>
                    <li>Third-party APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="step-container">
            <div class="bullet"></div>
            <div class="step">
              <div class="project-title">
                React Front-end Work
                <span>Holidu</span>
              </div>
              <p class="step-text">
                <a>http://www.holidu.com</a>
              </p>
              <div
                class="project-detail"
              >I build the React-based front-end along with developing the pxicel-perfect UI. I alsp used GraphQL and the Apollo client.</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMain",
  props: {}
};
</script>

<style scoped lang="scss">
$base-font-size: 16px !default;
@function rem($target, $context: $base-font-size) {
  @if $target == 0 {
    @return 0;
  }
  @return ($target / $context) + 0rem;
}

#main-wrap {
  min-height: 100vh;
  // width: 90%;
  padding-bottom: 50px;
}

.block {
  padding: 0px 15%;
}
.flex-wrap {
  display: flex;
  height: 90%;
  max-width: 100%;

  > div {
    height: 100%;
  }
}

.card {
  height: 80%;
  width: 80%;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: left;
  color: #818181;
  font-size: rem(50px);
  font-weight: bold;
}

#block1 {
  height: 600px;
  max-width: 100%;
  background-color: #e6e6e6;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  font-size: rem(30px);

  .title-wrap {
    height: 12%;
    display: flex;
    align-items: center;
    .title {
      background-color: #3eb656;
      padding: 9px;
      border-radius: 10px;
      color: #fff;
      width: 100px;
      font-size: rem(30px);
      text-align: center;
      letter-spacing: 1px;
    }
  }

  .left-content {
    width: 30%;
    display: flex;
    flex-direction: column;
    // justify-content: first baseline;
    align-items: flex-start;

    .card {
      height: 90%;
      width: 80%;
      box-shadow: 1px 13px 20px 2px #c3c3c3;
      max-width: 320px;

      .msg {
        text-align: center;
        position: absolute;
        bottom: -20px;
        padding: 10px 40px;
        background-color: #7a88dd;
        border-radius: 10px;
        color: #fff;
        letter-spacing: 1px;
        font-weight: bold;
      }
    }
  }
  .right-content {
    width: 70%;
    .name {
      text-align: left;
      font-weight: bold;
      font-size: rem(40px);
      padding-bottom: 10px;
    }
    .card {
      // height: 75%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      padding: 0 6%;

      > div {
        display: flex;
      }

      .round-img {
        border-radius: 50%;
        height: 60px;
        width: 60px;

        img {
          height: 100%;
        }
      }

      &:before {
        content: "";
        position: absolute;
        z-index: 10;
        top: -3px;
        right: 0;
        width: 50%;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: blue;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;

        div {
          border: 1px solid blue;
          border-radius: 15px;
          color: blue;
          margin: 10px 10px;
          padding: 8px 15px;
          margin-left: 0px;
        }
      }
      svg {
        padding: 0 10px;
      }
      .info {
        padding: 0 10px;
        color: #6f6f6f;
      }
    }
  }
}

#block2 {
  height: 200px;

  .title {
    padding: 1% 0;
    text-align: left;
    color: #818181;
    font-size: rem(50px);
  }
  .card {
    height: 60%;
    width: 100%;
    padding: 0 4%;
    font-size: rem(22px);
    text-align: left;
    box-shadow: 1px 4px 10px 0px #dedede;

    &:before {
      content: "";
      position: absolute;
      z-index: 10;
      top: -3px;
      right: 0;
      width: 32%;
      height: 0;
      border-style: solid;
      border-width: 5px 5px 0 5px;
      border-color: blue;
    }
  }
}

#block3 {
  // height: 300px;

  .title {
    padding: 1% 0;
    text-align: left;
    color: #818181;
    font-size: rem(50px);
  }
  .card {
    height: 80%;
    width: 100%;
    padding: 30px 4%;
    font-size: rem(22px);
    text-align: left;
    background: #828282;
    display: flex;
    justify-content: flex-start;

    > div {
      display: flex;
      flex-direction: column;
      width: 50%;
      color: white;
      > div {
        padding: 10px 0;
      }
    }

    .text1 {
      font-weight: bold;
      font-size: rem(30px);
      margin-bottom: 10px;
    }
  }
}

#block4 {
  height: 300px;

  .title {
    padding: 1% 0;
    text-align: left;
    color: #818181;
    font-size: rem(50px);
  }

  .card-wrap {
    position: relative;
    height: 60%;
  }

  .card {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 2%;
    font-size: rem(22px);
    text-align: left;
    box-shadow: 0px 0px 3px 0px #d6d2d2;
    z-index: 2;
    &:before {
      content: "";
      position: absolute;
      z-index: 10;
      top: -3px;
      right: 0;
      width: 32%;
      height: 0;
      border-style: solid;
      border-width: 5px 5px 0 5px;
      border-color: blue;
    }

    .experience-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .experience-card {
        margin: 0 30px;
        position: relative;
        width: 120px;
        height: 100px;
        border-radius: 15px;
        background-color: #a6bde4;

        .text1 {
          font-weight: bold;
          font-size: rem(33px);
        }
        .text2 {
          color: #818181;
        }

        .round-div {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background-color: #baf1cc;
          position: absolute;
          right: -12px;
          top: -15px;
        }
      }
    }
  }

  .card-shadow {
    z-index: 1;
    top: 30px;
    left: 30px;
    border: none;
    background-color: #b7bbb3;
    box-shadow: none;
    &:before {
      content: "";
      border: none;
    }
  }
}

:root {
  --color-theme-primary: #1c2833;
  --color-theme-secondary: #05f283;
  --color-theme-secondary-2: #d00070;
  --color-theme-secondary-3: #0084f8;
  --color-theme-secondary-4: #ffd100;
  --color-theme-grey: #95a5a6;
}

#block5 {
  .title {
    padding: 1% 0;
    text-align: left;
    color: #818181;
    font-size: rem(50px);
  }
  .card {
    height: auto;
    width: 100%;
    padding: 20px 2%;
    font-size: rem(22px);
    text-align: left;
    box-shadow: 1px 4px 10px 0px #dedede;
    display: flex;
    align-items: flex-start;

    &:before {
      content: "";
      position: absolute;
      z-index: 10;
      top: -3px;
      right: 0;
      width: 32%;
      height: 0;
      border-style: solid;
      border-width: 5px 5px 0 5px;
      border-color: blue;
    }

    #stepProgressBar {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: flex-start;
      list-style: none;
      width: 100%;
    }

    .project-detail {
      background-color: #f3f3e9;
      height: 50%;
      width: 95%;
      border-radius: 15px;
      padding: 20px 20px;

      ul {
        list-style-type: disc;
        padding: 0 20px;
      }

      > div:nth-child(1) {
        font-weight: bold;
      }
    }

    .project-title {
      line-height: 13px;
      font-weight: bold;
      font-size: rem(30px);
      > span {
        color: #146cbc;
        float: right;
      }
    }
    .step-container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      width: 100%;
      position: relative;
    }
    .step {
      margin-left: 1rem;
      margin-bottom: 3em;
      width: 100%;
    }

    .step-text {
      margin-bottom: 1em;
      color: var(--color-theme-primary);
      text-align: left;
      color: #8b8b8b;
      a {
        color: blue;
      }
    }

    .bullet {
      text-align: center;
      height: 1em;
      width: 1em;
      border-radius: 100%;
      display: inline-block;
      font-weight: 600;
      z-index: 10;
      background-color: blue;
    }
    .bullet::before {
      border-left: 1px dashed blue;
      top: 1em;
      position: absolute;
      transition: height 2s;
      z-index: 0;
      bottom: 0;
      content: "";
      height: 95%;
    }
  }
}
</style>
