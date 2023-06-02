<template>
  <Hero>
    <div class="hero-wallpaper"></div>
    <div class="flex flex-col items-center">
      <img class="portrait" src="@/assets/portrait.webp" width="142" height="142" alt="Justus G." />
      <h1 class="mt-5">Justus G.</h1>
      <p class="text-md mt-2.5 text-center font-title uppercase tracking-widest text-primary-300">
        Fix the cause,<br />not the symptom
      </p>
    </div>
  </Hero>

  <section class="skills-tools">
    <div class="skills">
      <h2>Skills</h2>

      <div class="icons">
        <!-- HTML5 -->
        <img
          src="@/assets/icons/html5.svg"
          alt="HTML5"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- CSS3 -->
        <img
          src="@/assets/icons/css3.svg"
          alt="CSS3"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- SASS/SCSS -->
        <img
          src="@/assets/icons/sass.svg"
          alt="SASS / SCSS"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- JavaScript -->
        <img
          src="@/assets/icons/javascript.svg"
          alt="JavaScript"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Vue.js -->
        <img
          src="@/assets/icons/vue.svg"
          alt="Vue.js"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- PHP -->
        <img
          src="@/assets/icons/php.svg"
          alt="PHP"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Java -->
        <img
          src="@/assets/icons/java.svg"
          alt="Java"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Spring -->
        <img
          src="@/assets/icons/spring.svg"
          alt="Spring"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Python -->
        <img
          src="@/assets/icons/python.svg"
          alt="Python"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- bash -->
        <img
          src="@/assets/icons/bash.svg"
          alt="bash"
          :width="this.iconSize"
          :height="this.iconSize"
        />
      </div>
    </div>

    <div class="tools">
      <h2>Tools</h2>

      <div class="icons">
        <!-- JetBrains -->
        <img
          src="@/assets/icons/jetbrains.svg"
          alt="JetBrains"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- VSCode -->
        <img
          src="@/assets/icons/vscode.svg"
          alt="Visual Studio Code"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- git -->
        <img
          src="@/assets/icons/git.svg"
          alt="git"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- TailwindCSS -->
        <img
          src="@/assets/icons/tailwind.svg"
          alt="TailwindCSS"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- MySQL -->
        <img
          src="@/assets/icons/mysql.svg"
          alt="MySQL"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Docker -->
        <img
          src="@/assets/icons/docker.svg"
          alt="Docker"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Figma -->
        <img
          src="@/assets/icons/figma.svg"
          alt="Figma"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Illustrator -->
        <img
          src="@/assets/icons/illustrator.svg"
          alt="Adobe Illustrator"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Photoshop -->
        <img
          src="@/assets/icons/photoshop.svg"
          alt="Adobe Photoshop"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- Canva -->
        <img
          src="@/assets/icons/canva.svg"
          alt="Canva"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- GitHub -->
        <img
          src="@/assets/icons/github.svg"
          alt="GitHub"
          :width="this.iconSize"
          :height="this.iconSize"
        />

        <!-- FileZilla -->
        <img
          src="@/assets/icons/filezilla.svg"
          alt="FileZilla"
          :width="this.iconSize"
          :height="this.iconSize"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'Home',
  components: {
    Hero
  },
  data() {
    return {
      iconSize: 48,
      iconGapSize: 6
    };
  },
  methods: {
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

        column++;

        if (column === maxColumn) {
          row++;
          column = 0;

          if (row === maxRow) break;
        }
      }

      if (letterIconCapacity <= iconNodes.length) {
        row++;
        column = 0;

        for (let i = letterIconCapacity; i < iconNodes.length; i++) {
          const icon = iconNodes[i];
          const left = column * this.iconSize + (column > 0 ? column * this.iconGapSize : 0);
          const top = row * this.iconSize + (row > 0 ? row * this.iconGapSize : 0);

          icon.style.position = 'absolute';
          icon.style.top = top + 'px';
          icon.style.left = left + 'px';

          column++;

          if (column === maxColumn) {
            row++;
            column = 0;

            if (row === maxRow) break;
          }
        }
      }

      iconsContainer.style.width =
        maxColumn * this.iconSize + (maxColumn - 1) * this.iconGapSize + 'px';
      iconsContainer.style.height = (row + 1) * this.iconSize + row * this.iconGapSize + 'px';
    }
  },
  mounted() {
    // skills
    this.alignIconsInLetterForm(document.querySelector('.skills .icons'), [
      '1111',
      '   1',
      '   1',
      '1  1',
      ' 11 '
    ]);

    // tools
    this.alignIconsInLetterForm(document.querySelector('.tools .icons'), [
      ' 111',
      '1   ',
      '1 11',
      '1  1',
      ' 111'
    ]);
  }
};
</script>

<style lang="scss" scoped>
/* Hero */

.hero-wallpaper {
  @apply absolute top-0 -z-20 h-full w-full bg-cover bg-center;
  background-image: url('@/assets/binnenalster.webp');

  &::after {
    @apply relative -z-10 block h-full w-full bg-primary-950 bg-opacity-90;
    content: '';
  }
}

.portrait {
  @apply rounded-full object-cover;
}

/* "Skills" + "Tools I use" */

.skills-tools {
  @apply mx-auto mt-4 flex max-w-2xl flex-wrap justify-around gap-8 p-8;

  > div {
    @apply inline-block text-center;

    .icons {
      @apply relative mx-auto mt-6;

      img {
        @apply rounded-xl bg-primary-800 p-2;
      }
    }
  }
}
</style>
