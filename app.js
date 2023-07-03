const app = Vue.createApp({
  data() {
    return {
      inputValue: '',
      user1Class: false,
      user2Class: false,
      colorInputValue: '',
      isPVisible: true,
    }
  },

  methods: {
    saveClass() {
      switch (true) {
        case this.inputValue === 'user1':
          this.user1Class = true;
          break;
        case this.inputValue === 'user2':
          this.user2Class = true;
          break;
        default:
          this.user1Class = false;
          this.user2Class = false;
          break;
      }

      this.inputValue = '';
    },

    toggleP() {
      this.isPVisible = !this.isPVisible;
    }
  },

  computed: {
    userStyleClasses() {
      return {
        user1: this.user1Class,
        user2: this.user2Class,
      }
    },

    visibilityStyleClasses() {
      return {
        hidden: !this.isPVisible,
        visible: this.isPVisible,
      }
    }
  },
})

app.mount('#assignment')