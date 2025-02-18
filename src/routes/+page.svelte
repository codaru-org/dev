<svelte:head>
  <title>Codaru</title>
  <script src="https://cdn.jsdelivr.net/gh/saejin-moon/ski.js@1.9.6/src/main.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="/assets/js/krakow.js" defer async></script>
</svelte:head>

<!-- Hero Section -->
<div
  class="w-full h-screen flex justify-around items-center font-[league spartan]"
>
  <img
    class="ml-[-5vw] h-[75%]"
    src="/assets/images/krakow.svg"
    alt="retrofuturistic computer adorned with flowers"
  />
  <div class="flex flex-col justify-center items-center w-1/2 h-full">
    <div class="flex justify-center items-center">
      <img
        class="w-[12vmin] h-[12vmin]"
        loading="lazy"
        src="/assets/images/logo.svg"
        alt="The logo for Codaru."
      />
      <span class="text-[12vmin] font-bold">codaru</span>
    </div>
    <span class="text-[5vmin]">code. collaborate. compete.</span>

    <!-- Signup Button -->
    <div
      class="signup-button group
             mt-[9vh] bg-[#5e8f4c] h-[8vmin] rounded-[5px] flex justify-center items-center 
             cursor-pointer relative overflow-hidden transition-colors w-[60%] 
             text-[#f8f4dc] font-[varela] text-[5vmin] 
             active:bg-[#7e9f6c] active:transition-colors active:duration-300"
    >
      <!-- These nested spans can still have their own classes if you need JS to toggle states -->
      <span class="text absolute transition-transform duration-300 group-hover:translate-y-3/2">sign up</span>
      <span class="icons absolute font-[icons] transition-transform duration-300 transform -translate-y-3/2 group-hover:translate-y-0">arrow_forward</span>
    </div>
  </div>
</div>

<!-- Timeline Section -->
<div class="flex justify-between items-center w-full h-screen">
  <canvas class="w-[65%] h-full ml-[-2.5%]">
    A timeline of the events of Codaru. The timeline winds around in a reverse S pattern.
    The events are represented by circles and connected to text boxes by dashed lines.
    The events are as follows: Avatar Challenge (March 17), AI Challenge (March 24), 
    Under One Thousand Character Challenge (March 31), Escape Room Challenge (April 3), 
    Crossfit Challenge (April 7), Finale (April 14), and Awards Ceremony (April 28).
  </canvas>
  <img
    class="h-[120%] mr-[-5vw]"
    loading="lazy"
    src="/assets/images/clock.svg"
    alt="retrofuturistic clock adorned with flowers"
  />
</div>

<!-- About Section -->
<div class="flex justify-between items-center w-full h-screen">
  <img
    class="w-1/2 ml-[-5vw]"
    loading="lazy"
    src="/assets/images/compass.svg"
    alt="retrofuturistic compass adorned with flowers"
  />
  <div class="flex flex-col justify-center items-center w-1/2 h-full pl-[5vw] pr-[5vw]">
    <span class="text-[12vmin] font-bold font-[league spartan]">about</span>
    <p class="font-[outfit] text-[3vmin] font-light">
      Codaru is an annual spring coding competition open to programmers of all ages
      and skill levels—from complete beginners to seasoned professionals. Held entirely
      online, the competition is designed to fit your schedule, with each challenge 
      lasting a full week, allowing you to participate whenever it’s convenient. 
      You’ll join one of six teams, working together with your teammates to take on 
      challenges and compete against the others. Codaru’s mission is to provide an 
      inclusive and engaging space where everyone can develop their skills and grow 
      as programmers.
    </p>
  </div>
</div>