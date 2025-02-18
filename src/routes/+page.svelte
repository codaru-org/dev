<svelte:head>
  <!-- <link rel="stylesheet" href="/assets/css/krakow.css" /> -->
  <title>Codaru</title>
  <script src="https://cdn.jsdelivr.net/gh/saejin-moon/ski.js@1.9.6/src/main.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="/assets/js/krakow.js" defer async></script>
</svelte:head>

<!--
<div class="hero w-full h-screen flex justify-around items-center font-[league spartan]">
  <img 
    class="hero-image ml-[-5vw] h-[75%]" 
    src="/assets/images/krakow.svg" 
    alt="retrofuturistic computer adorned with flowers" 
  />
  <div class="hero-content flex flex-col justify-center items-center w-1/2 h-full">
    <div class="hero-krakow flex justify-center items-center">
      <img 
        class="hero-logo w-[12vmin] h-[12vmin]" 
        loading="lazy" 
        src="/assets/images/logo.svg" 
        alt="The logo for Codaru, a spring coding competition for programmers of all skill levels and stages of learning. The logo is a line art traced flower with dark petals and a light center." 
      />
      <span class="hero-title text-[12vmin] font-bold">codaru</span>
    </div>
    <span class="hero-subtitle text-[5vmin]">
      code. collaborate. compete.
    </span>
    <div class="signup-button mt-[9vh] bg-[#5e8f4c] h-[8vmin] rounded-[5px] flex justify-center items-center cursor-pointer relative overflow-hidden transition-colors w-[60%] text-[#f8f4dc] font-[varela] text-[5vmin]">
      <span class="text absolute transition-transform">sign up</span>
      <span class="icons absolute font-[icons] transition-transform">arrow_forward</span>
    </div>
  </div>
</div>

<div class="timeline flex justify-between items-center w-full h-screen">
  <canvas class="timeline-canvas w-[65%] h-full ml-[-2.5%]">
      A timeline of the events of Codaru. The timeline winds around in a reverse S pattern. The events are represented by circles and connected to text boxes by dashed lines. The events are as follows: Avatar Challenge (March 17), AI Challenge (March 24), Under One Thousand Character Challenge (March 31), Escape Room Challenge (April 3), Crossfit Challenge (April 7), Finale (April 14), and Awards Ceremony (April 28)
  </canvas>
  <img 
    class="timeline-image h-[120%] mr-[-5vw]" 
    loading="lazy" 
    src="/assets/images/clock.svg" 
    alt="retrofuturistic clock adorned with flowers" 
  />
</div>

<div class="about flex justify-between items-center w-full h-screen">
  <img 
    class="about-image w-1/2 ml-[-10vw]" 
    loading="lazy" 
    src="/assets/images/compass.svg" 
    alt="retrofuturistic compass adorned with flowers" 
  />
  <div class="about-content flex flex-col justify-start items-center w-1/2 h-full pl-[5vw] pr-[4vw]">
    <span class="about-title text-[12vmin] font-bold font-[league spartan]">about</span>
    <p class="about-text font-[outfit] text-[3vmin] font-light">
      Codaru is an annual spring coding competition open to programmers of all ages and skill levels—from complete beginners to seasoned professionals. Held entirely online, the competition is designed to fit your schedule, with each challenge lasting a full week, allowing you to participate whenever it's convenient. You'll join one of six teams, working together with your teammates to take on challenges and compete against the others. Codaru's mission is to provide an inclusive and engaging space where everyone can develop their skills and grow as programmers.
    </p>
  </div>
</div>
-->

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
      class="mt-[9vh] bg-[#5e8f4c] h-[8vmin] rounded-[5px] flex justify-center items-center 
             cursor-pointer relative overflow-hidden transition-colors w-[60%] 
             text-[#f8f4dc] font-[varela] text-[5vmin] 
             active:bg-[#7e9f6c] active:transition-colors active:duration-300"
    >
      <!-- These nested spans can still have their own classes if you need JS to toggle states -->
      <span class="absolute transition-transform">sign up</span>
      <span class="absolute font-[icons] transition-transform">arrow_forward</span>
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
    class="w-1/2 ml-[-10vw]"
    loading="lazy"
    src="/assets/images/compass.svg"
    alt="retrofuturistic compass adorned with flowers"
  />
  <div class="flex flex-col justify-start items-center w-1/2 h-full pl-[5vw] pr-[4vw]">
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