AFRAME.registerComponent("cursor-listener", {
  schema:{
    selectedItemID: {
      default:"",
      type:"string"
    }
  },

  init:function(){
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  handlePlacesListState:function(){
    this.el.addEventListener("mouseenter", ()=>{
    const id = this.el.getAttribute("id")
    const placesId = ["black-panther", "iron-man", "spider-man", "wonder-woman"]
    if(placesId.includes(id)){
      const placesContainer = document.querySelector("#places-container");
      placesContainer.setAttribute("cursor-listener", {
        selectedItemID:id
      })
      this.el.setAttribute("material", {
        color:"blue",
        opacity:1
      })
    }
  })
  },

  handleMouseLeaveEvents:function(){
    this.el.addEventListener("mouseleave", ()=>{
      const {selectedItemID} = this.data
      if(selectedItemID){
        const el = document.querySelector(`#${selectedItemID}`)
        const id = el.getAttribute("id")
        if(id === selectedItemID){
          el.setAttribute("material",{
            color:"black",
            opacity:1
          })
        }
      }
    })
  }

  
})
