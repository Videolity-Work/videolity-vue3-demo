<template>
  <div style="width: 100%">
    <iframe
      ref="videoIframe"
      style="width: 100%; height: 100%"
      :src="videoUrl"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // you can read the video ratio from the viewRatio value in the video URL
      // or you can write it statically here.
      aspectRatio: 1920 / 950, 
      videoUrl: "https://staging.vdlty.co/video-player?id=30ca1a03-c339-4ce7-85c1-920155b69dc4&viewRatio=1920:950",
    };
  },
  methods: {
    // works as the screen size changes.
    handleResize() {
      const iframe = this.$refs.videoIframe;
      const width = iframe.offsetWidth;
      iframe.style.height = `${width / this.aspectRatio}px`;
    },
  },
  mounted() {
    // listen for screen size change. 
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
