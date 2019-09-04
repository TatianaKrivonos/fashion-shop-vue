<template>
  <div class="countdown">
    <div class="timer" v-show="!expired">
      <div class="timer__box timer__box--days">
        <p class="timer__val">{{ theTime.days }}</p>
        <p class="timer__label">days</p>
      </div>
       <div class="timer__box timer__box--hours">
        <p class="timer__val">{{ theTime.hours }}</p>
        <p class="timer__label">hours</p>
      </div>
       <div class="timer__box timer__box--minutes">
        <p class="timer__val">{{ theTime.minutes }}</p>
        <p class="timer__label">minutes</p>
      </div>
       <div class="timer__box timer__box--seconds">
        <p class="timer__val">{{ theTime.seconds }}</p>
        <p class="timer__label">seconds</p>
      </div>
    </div>
     <div v-show="expired" class="expired-timer timer">
      <div class="timer__box">
        <p class="timer__value">It's over</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        deadline: 'Sep 3, 2020 22:13:00',
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        expired: false
      }
    },
    computed: {
      theTime () {
      var ctx = this;

     // Countdown loop
     // eslint-disable-next-line
      var x =  setInterval(function(){

       // Difference between the 2 dates
        var countDownDate = new Date(ctx.deadline).getTime(),
          now = new Date().getTime(),
          diff = countDownDate - now,

           // Time conversion to days, hours, minutes and seconds
          tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
          thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          tseconds = Math.floor((diff % (1000 * 60)) / 1000);

         // Keep 2 digits
         ctx.days = (tdays < 10) ? '0' + tdays : tdays;
         ctx.hours = (thours < 10) ? '0' + thours : thours;
         ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
         ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

         // Check for time expiration
         if (diff < 0) {
           clearInterval(x);
           ctx.expired = true;
         }
       }, 1000);

     // Return data
      return {
        days: ctx.days,
        hours: ctx.hours,
        minutes: ctx.minutes,
        seconds: ctx.seconds
      }
    }
  }
}
</script>
