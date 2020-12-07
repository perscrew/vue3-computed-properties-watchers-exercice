const app = Vue.createApp({
  data() {
    return { total: 0 };
  },
  computed: {
    result() {
      if (this.total < 37) {
        return "Not there yet";
      } else if (this.total > 37) {
        return "Too much!";
      } else {
        return "You won !";
      }
    },
  },
  methods: {
    add(value) {
      this.total += value;
    },
  },
  watch: {
    total(value) {
      if (value > 37) {
        setTimeout(() => (this.total = 0), 5000);
      }
    },
  },
});

app.mount("#exercise");
