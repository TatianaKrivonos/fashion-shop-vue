<template>
  <hooper>
    <slide>
      <div class="slider-item">
        <p>Sale</p>
        <p>Up to 50% Off</p>
      </div>
    </slide>
    <slide>
      <div class="slider-item">
        <p>Sale</p>
        <p>Up to 50% Off</p>
      </div>
    </slide>
    <slide>
      <div class="slider-item">
        <p>Sale</p>
        <p>Up to 50% Off</p>
      </div>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import 'hooper/dist/hooper.css';
import {
  Hooper,
  Slide,
  Pagination as HooperPagination
  } from 'hooper';

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination
  }
}
</script>
<style>
  .slider-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10%;
    height: inherit;
    background-image: url(../assets/img/slider.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .slider-item p:first-child {
    font-size: 203px;
    font-weight: 800;
  }

  .slider-item p:last-child {
    font-size: 62px;
    font-weight: 600;
  }

  .hooper-indicator {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: transparent;
  }

  .hooper-indicator:hover {
    background-color: #fff;
  }

  .hooper-indicator.is-active {
    background-color: #fff;
  }

  .hooper {
    height: calc(100vh - 84px);
  }
</style>

