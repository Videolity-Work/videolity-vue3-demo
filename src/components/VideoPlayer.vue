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
      aspectRatio: 1920 / 950,
      videoUrl: "https://preview.dunh29xielhio.amplifyapp.com/video-player?id=JimmyKey&viewRatio=90",
    };
  },
  methods: {
    handleResize() {
      const iframe = this.$refs.videoIframe;
      const width = iframe.offsetWidth;
      iframe.style.height = `${width / this.aspectRatio}px`;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
