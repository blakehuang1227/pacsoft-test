<template>
  <div class="footer">
    <div class="width-wrap">
      <div class="block block1">
        <div class="content-wrap">
          <div>Powered by</div>
          <div class="logo">
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="block block2">
        <div class="content-wrap">
          <div class="blue-text">Services</div>
          <div>Hire an Engineer</div>
          <div>Apply as an Engineer</div>
        </div>
      </div>
      <div class="block block3">
        <div class="content-wrap">
          <div>&nbsp;</div>
          <div>About Us</div>
          <div>Terms of Use</div>
          <div>Privacy Police</div>
        </div>
      </div>
      <div class="block block4">
        <div class="content-wrap">
          <div class="blue-text">Links</div>
          <div>Engineers</div>
          <div>Blog</div>
          <div>Scientists</div>
          <div>Company</div>
        </div>
      </div>
    </div>
    <div class="flex-row copyright">abc@abc.com</div>
    <div class="flex-row copyright">Copyright 2020 abc. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
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

.footer {
  background-color: #f9f9f9;
  width: 100%;
  min-height: 288px;
  display: block;
}

.blue-text {
  color: blue;
  font-weight: bold;
}

.block {
  line-height: 24px;
  font-size: rem(35px);
  letter-spacing: 0.8px;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  color: #787878;

  .content-wrap {
    > div {
      margin: 20px 0;
    }
  }
}

.block1 {
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
}

.block2 {
  width: 50%;
}
.width-wrap {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  padding: 20px 10%;
}

.copyright {
  font-size: rem(30px);
  margin-bottom: 10px;
}

@media screen and (max-width: 1275px) {
  .footer-items {
    width: 50%;
  }
}

/* for mobile screen view */

@media screen and (max-width: 660px) {
  .footer-items {
    width: 100%;
  }
}

@media screen and (max-width: 560px) {
  .width-wrap {
    flex-wrap: wrap;
  }
  .block {
    width: 100%;
  }
}
</style>
