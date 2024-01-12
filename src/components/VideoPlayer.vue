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
      aspectRatio: 16 / 8, // Başlangıçta belirlenmiş en-boy oranı (16:9)
      videoUrl: "https://preview.dunh29xielhio.amplifyapp.com/video-player?id=JimmyKey",
    };
  },
  methods: {
    handleMessage(event) {
      if (event.data && event.data.for === 'videolityIframeResize') {
        this.aspectRatio = event.data.aspectRatio;
      }
    },
    handleResize() {
      const iframe = this.$refs.videoIframe;
      const width = iframe.offsetWidth;
      iframe.style.height = `${width / this.aspectRatio}px`;
    },
  },
  mounted() {
    window.addEventListener('message', this.handleMessage, false);
    window.addEventListener('resize', this.handleResize);

    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('message', this.handleMessage, false);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
