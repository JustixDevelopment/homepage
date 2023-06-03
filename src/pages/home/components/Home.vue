<template>
  <Hero>
    <div class="hero-wallpaper absolute top-0 -z-20 h-full w-full bg-cover bg-center"></div>
    <div class="flex flex-col items-center">
      <img class="rounded-full object-cover" src="@/assets/portrait.webp" width="142" height="142" alt="Justus G." />
      <h1 class="mt-5">Justus G.</h1>
      <p class="text-md mt-2.5 text-center font-title uppercase tracking-widest text-primary-300">
        Fix the cause,<br />not the symptom
      </p>
      <p
        class="mt-5 flex cursor-pointer items-center gap-1 rounded-full bg-primary-700 px-2.5 py-1 transition hover:bg-primary-800"
        @click="scrollDown()"
      >
        <span
          class="material-symbols-rounded animate-[bounce-negative_1.5s_ease-in-out_infinite]"
          style="font-size: 24px"
          >expand_more</span
        >Read more
      </p>
    </div>
  </Hero>

  <section class="skills-tools flex-wrap justify-around gap-8">
    <div class="skills">
      <!-- HTML5 -->
      <Icon fileName="html5.svg" alt="HTML5" :width="this.iconSize" :height="this.iconSize" />

      <!-- CSS3 -->
      <Icon fileName="css3.svg" alt="CSS3" :width="this.iconSize" :height="this.iconSize" />

      <!-- SASS/SCSS -->
      <Icon fileName="sass.svg" alt="SASS / SCSS" :width="this.iconSize" :height="this.iconSize" />

      <!-- JavaScript -->
      <Icon fileName="javascript.svg" alt="JavaScript" :width="this.iconSize" :height="this.iconSize" />

      <!-- Vue.js -->
      <Icon fileName="vue.svg" alt="Vue.js" :width="this.iconSize" :height="this.iconSize" />

      <!-- PHP -->
      <Icon fileName="php.svg" alt="PHP" :width="this.iconSize" :height="this.iconSize" />

      <!-- Java -->
      <Icon fileName="java.svg" alt="Java" :width="this.iconSize" :height="this.iconSize" />

      <!-- Spring -->
      <Icon fileName="spring.svg" alt="Spring" :width="this.iconSize" :height="this.iconSize" />

      <!-- Python -->
      <Icon fileName="python.svg" alt="Python" :width="this.iconSize" :height="this.iconSize" />

      <!-- bash -->
      <Icon fileName="bash.svg" alt="bash" :width="this.iconSize" :height="this.iconSize" />
    </div>

    <div class="tools">
      <!-- JetBrains -->
      <Icon fileName="jetbrains.svg" alt="JetBrains" :width="this.iconSize" :height="this.iconSize" />

      <!-- VSCode -->
      <Icon fileName="vscode.svg" alt="Visual Studio Code" :width="this.iconSize" :height="this.iconSize" />

      <!-- git -->
      <Icon fileName="git.svg" alt="git" :width="this.iconSize" :height="this.iconSize" />

      <!-- TailwindCSS -->
      <Icon fileName="tailwind.svg" alt="TailwindCSS" :width="this.iconSize" :height="this.iconSize" />

      <!-- MySQL -->
      <Icon fileName="mysql.svg" alt="MySQL" :width="this.iconSize" :height="this.iconSize" />

      <!-- Docker -->
      <Icon fileName="docker.svg" alt="Docker" :width="this.iconSize" :height="this.iconSize" />

      <!-- Figma -->
      <Icon fileName="figma.svg" alt="Figma" :width="this.iconSize" :height="this.iconSize" />

      <!-- Illustrator -->
      <Icon fileName="illustrator.svg" alt="Adobe Illustrator" :width="this.iconSize" :height="this.iconSize" />

      <!-- Photoshop -->
      <Icon fileName="photoshop.svg" alt="Adobe Photoshop" :width="this.iconSize" :height="this.iconSize" />

      <!-- Canva -->
      <Icon fileName="canva.svg" alt="Canva" :width="this.iconSize" :height="this.iconSize" />

      <!-- GitHub -->
      <Icon fileName="github.svg" alt="GitHub" :width="this.iconSize" :height="this.iconSize" />

      <!-- FileZilla -->
      <Icon fileName="filezilla.svg" alt="FileZilla" :width="this.iconSize" :height="this.iconSize" />
    </div>
  </section>

  <section class="career">
    <h2>Career</h2>
    <div class="career-items mx-auto mt-4 flex flex-col">
      <div class="career-item">
        <div class="career-item-details">
          <span class="career-item-time">
            2022
            <span class="material-symbols-rounded">horizontal_rule</span>
            present
          </span>
          <h3 class="career-item-title">duschdichtungsprofile.de</h3>
          <p class="career-item-description">Software engineer</p>
        </div>
      </div>
      <div class="career-item">
        <div class="career-item-details">
          <span class="career-item-time">2022</span>
          <h3 class="career-item-title">Digital Masters</h3>
          <p class="career-item-description">Internship</p>
        </div>
      </div>
      <div class="career-item">
        <div class="career-item-details">
          <span class="career-item-time">2021</span>
          <h3 class="career-item-title">CoreMedia</h3>
          <p class="career-item-description">Internship</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Icon
  },
  data() {
    return {
      iconSize: 48,
      iconGapSize: 6,
      currentAnimationDelay: 0
    };
  },
  methods: {
    isElementInView(element) {
      const { top, bottom } = element.getBoundingClientRect();

      return top <= window.innerHeight && bottom >= 0;
    },
    animateElements() {
      // skills + tools
      const skillsToolsContainer = document.querySelector('.skills-tools');

      if (this.isElementInView(skillsToolsContainer)) skillsToolsContainer.style.animationPlayState = 'running';

      // career
      const careerContainer = document.querySelector('.career');

      if (this.isElementInView(careerContainer)) careerContainer.style.animationPlayState = 'running';
    },
    alignIconsInLetterForm(iconsContainer, letterArray) {
      const iconNodes = iconsContainer.getElementsByTagName('IMG');

      const maxColumn = letterArray[0].length,
        maxRow = letterArray.length,
        letterIconCapacity = letterArray
          .map((line) => line.split('').filter((c) => c === '1').length)
          .reduce((length1, length2) => length1 + length2, 0);
      let column = 0,
        row = 0;

      for (let i = 0; i < letterIconCapacity; i++) {
        const icon = iconNodes[i];

        if (column === maxColumn) {
          row++;
          column = 0;

          if (row === maxRow) break;
        }

        while (letterArray[row].charAt(column) !== '1') {
          column++;

          if (column === maxColumn) {
            row++;
            column = 0;

            if (row === maxRow) break;
          }
        }

        if (row === maxRow) break;

        const left = column * this.iconSize + (column > 0 ? column * this.iconGapSize : 0);
        const top = row * this.iconSize + (row > 0 ? row * this.iconGapSize : 0);

        icon.style.position = 'absolute';
        icon.style.top = top + 'px';
        icon.style.left = left + 'px';
        icon.style.animationDelay = (this.currentAnimationDelay += 100) + 'ms';

        column++;
      }

      if (letterIconCapacity < iconNodes.length) {
        row += 1.5;
        column = 0;

        for (let i = letterIconCapacity; i < iconNodes.length; i++) {
          const icon = iconNodes[i];
          const left = column * this.iconSize + (column > 0 ? column * this.iconGapSize : 0);
          const top = row * this.iconSize + (row > 0 ? row * this.iconGapSize : 0);

          icon.style.position = 'absolute';
          icon.style.top = top + 'px';
          icon.style.left = left + 'px';
          icon.style.animationDelay = (this.currentAnimationDelay += 100) + 'ms';

          column++;

          if (column === maxColumn) {
            row++;
            column = 0;

            if (row === maxRow) break;
          }
        }
      }

      iconsContainer.style.width = maxColumn * this.iconSize + (maxColumn - 1) * this.iconGapSize + 'px';
      iconsContainer.style.height = (row + 1) * this.iconSize + row * this.iconGapSize + 'px';
    },
    scrollDown() {
      document.querySelector('.skills-tools').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },
  mounted() {
    // animate and align skills + tools icons
    this.alignIconsInLetterForm(document.querySelector('.skills'), ['1111', '   1', '   1', '1  1', ' 11 ']);
    this.alignIconsInLetterForm(document.querySelector('.tools'), [' 111', '1   ', '1 11', '1  1', ' 111']);

    // career
    let currentCareerAnimationDelay = 0;
    document.querySelectorAll('.career-item').forEach((careerItem) => {
      careerItem.style.animationDelay = (currentCareerAnimationDelay += 500) + 'ms';
    });

    // scroll animations
    window.addEventListener('scroll', this.animateElements, { passive: true });
    this.animateElements();
  }
};
</script>

<style lang="scss" scoped>
/* Hero */

.hero-wallpaper {
  background-image: url('@/assets/binnenalster.webp');

  &::after {
    @apply relative -z-10 block h-full w-full bg-gradient-to-t from-primary-950 via-primary-900 opacity-[0.85];

    content: '';
  }
}

section {
  @apply mx-auto my-16 flex max-w-3xl;
}

/* skills + tools  */

.skills-tools {
  animation-play-state: paused;

  > div {
    @apply relative inline-block text-center;
    animation-play-state: inherit;

    img {
      @apply animate-[fade-in_0.5s_ease-out] rounded-xl bg-primary-800 p-2 opacity-0;

      animation-fill-mode: forwards;
      animation-play-state: inherit;
    }
  }
}

/* career */

.career {
  @apply flex-col;
  animation-play-state: paused;

  h2 {
    @apply text-center;
  }

  .career-items {
    animation-play-state: inherit;

    .career-item {
      @apply relative flex pl-8;
      animation-play-state: inherit;

      &::before {
        @apply absolute h-full max-h-0 animate-[grow-to-b_0.5s_linear] bg-primary-50;

        animation-delay: inherit;
        animation-fill-mode: forwards;
        animation-play-state: inherit;

        content: '';
        left: 4px;
        width: 2px;
      }

      &::after {
        @apply absolute left-0 top-0 animate-[fade-in_0.5s_linear] rounded-full bg-primary-50 opacity-0 sm:top-6;

        animation-delay: inherit;
        animation-fill-mode: forwards;
        animation-play-state: inherit;

        content: '';
        height: 10px;
        width: 10px;
      }

      .career-item-details {
        @apply flex animate-[fade-in_0.5s_ease-out] flex-col py-4 opacity-0;

        animation-delay: inherit;
        animation-fill-mode: forwards;
        animation-play-state: inherit;

        .career-item-time {
          @apply absolute top-1.5 flex translate-y-[-50%] items-center font-title text-xs uppercase text-primary-300 sm:-left-5 sm:top-7 sm:translate-x-[-100%];
        }

        .career-item-title {
          @apply text-xl;
        }

        .career-item-description {
          @apply text-primary-400;
        }
      }
    }
  }
}
</style>
