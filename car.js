AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "./car.glb" },
    clickCounter: {type: "number", default: 0}
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: .5, y: .3, z: 3.5 };
    const rotation = { x: 0, y: 140, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },

  update: function(){
    window.addEventListener("click", e =>{
        this.data.clickCounter = this.data.clickCounter + 1;
        if (this.data.clickCounter === 1){
            const rotation = {x: 0, y: 240, z: 0};
            this.el.setAttribute("rotation", rotation);
            const position = {x: 2, y: .3, z: 3};
            this.el.setAttribute("position", position);
        } else if (this.data.clickCounter === 2){
            const rotation = {x: 0, y: 320, z:0}
            this.el.setAttribute("rotation", rotation);
            const position = { x: 1.5, y: .3, z: 2 };
            this.el.setAttribute("position", position);
        } else if (this.data.clickCounter === 3){
            const rotation = {x: 0, y: 40, z:0}
            this.el.setAttribute("rotation", rotation);
            const position = { x: 1, y: .3, z: 2 };
            this.el.setAttribute("position", position);
        }
        else if (this.data.clickCounter === 4){
            this.data.clickCounter = 0
            const rotation = {x: 0, y: 140, z:0}
            this.el.setAttribute("rotation", rotation);
            const position = { x: .5, y: .3, z: 3.5 };
            this.el.setAttribute("position", position);
        }
    })
  }
});