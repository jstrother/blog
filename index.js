import {Juris} from 'juris';

const HelloWorld = () => {
  return {
    render: () => {
      p: {
        text: "Hello, World!"
      }
    }
  }
};

const blog = new Juris({
  components: {
    HelloWorld
  },
  layout: {
    HelloWorld: {}
  }
});

blog.render(document.body);