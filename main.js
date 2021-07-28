/* creating an instance of Vue  
  const app = Vue.createApp({})
  the curly braces are where we 
  insert the 'options object'
  the example below returns the 
  'data' options object which returns
  a value
*/
const app = Vue.createApp({
  data() {
    return {
      cart: [],     
      premium: false,
      details: '', 
    }
  },
  methods: {
    updateCart(id){
      this.cart.push(id)
    },
    removeItem(id){
      this.cart.splice(this.cart.indexOf(id), 1)            
    }
  },
})
