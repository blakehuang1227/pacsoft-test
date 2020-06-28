<template>
  <header class="the-header">
    <div class="logo">
      <div></div>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item">
          <a>Hire an Engineer</a>
        </li>
        <li class="nav-item">
          <a>Apply as an Engineer</a>
        </li>
        <li class="nav-item">
          <input type="button" class="btn-login" value="LOG IN" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {};
  },
  methods: {},
  mounted() {}
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

.the-header {
  width: 100%;
  position: sticky;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 20px;
  color: black;

  .logo {
    margin: 0 5px;
    height: 50px;
    width: 200px;
    > div {
      text-decoration: none;
      background-color: #b5b5b5;
      height: 100%;
      width: 100%;
    }
  }

  .navigation-items {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      height: 100%;

      .nav-item {
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: rem(35px);
        a {
          text-decoration: none;
          color: blue;
        }

        .btn-login {
          color: blue;
          padding: 10px;
          border: 1.5px solid blue;
          border-radius: 10px;
          background-color: #fff;
          font-weight: bold;
          font-size: rem(35px);
        }
      }
    }
  }
}

a:visited {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
  color: black;
}
a:focus {
  text-decoration: none;
  color: black;
}
a:hover,
a:active {
  text-decoration: none;
  color: black;
}

.spacer {
  flex: 1;
}
</style>
