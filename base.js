AFRAME.registerComponent("base",{
    
    schema: {
        radius: { type:"number", default: 6},
        height: { type: "number", default: 0.25}
    },

    init: function(){
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material", {color: "#1769aa"})
    }
})