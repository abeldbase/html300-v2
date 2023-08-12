<template>
  <div>
    <h2 v-randomColor>{{ title }}</h2>
    <div v-for="post in posts" :key="post.title">
      <button class="accordion">{{ post.title }}</button>
      <div class="panel">
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.show();
  },
  data() {
    return {
      title: 'Available Services',
      posts: [
        { title: 'Search with Model', description: 'This section shares the details about different types of car model from various dealer.' },
        { title: 'Search with Make', description: 'This section provides you the details about different makes of car from various dealer.' },
        { title: 'Search with Year of Make and Types', description: 'This section shares the details about different type of car engines and types from various dealer.' },
      ]
    }
  },
  methods: {
    show: function () {
      //accordion section
      var acc = document.getElementsByClassName("accordion");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("activeAccordian");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accordion {
  background-color: eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: .4s
}

.activeAccordian,
.accordion:hover {
  background-color: #ccc
}

.accordion:after {
  content: "+";
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px
}

.activeAccordian:after {
  content: "−"
}

.panel {
  padding: 0 18px;
  background-color: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height .2s ease-out
}
</style>
