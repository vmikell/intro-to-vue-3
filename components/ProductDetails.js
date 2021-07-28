app.component('product-details',{
  props: {
    details: {
      type: String,
      required: true,
    }
  },
  template:
  /*html*/
  `<p> {{ listDetails }} </p>`,
  computed:{
    listDetails(){
      if (this.details != ''){
        return this.details
      }
      return 'blark'
    }
  }

})