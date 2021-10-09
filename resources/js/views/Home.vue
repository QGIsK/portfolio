<template>
  <header class="bg-main">
    <Particles
      id="tsparticles"
      class="particles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#3A3B3C',
          },
          links: {
            color: '#3A3B3C',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 2.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
    <div class="content h-100 w-100">
      <div class="d-block">
        <Navbar />
      </div>
      <div class="container h-75 d-flex align-items-center justify-content-start">
        <h3 class="text-white">I'm a <b>Web Developer</b><br />Based in <b>The Netherlands.</b></h3>
      </div>
    </div>
  </header>
</template>

<script setup>
import Navbar from '../components/layout/Navbar'
</script>

<style lang="scss" scoped>
header {
  height: 80vh;
  position: relative;
  .particles {
    position: absolute;
    z-index: 1;
    height: 80vh;
  }

  .content {
    z-index: 2;
    position: absolute;
  }
}

.bg-main {
  background-color: #171717;
}

.bg-secondary {
  background-color: #1b1a1a;
}

h3 {
  line-height: 1.5;
}
</style>
