app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img 
            :src="image" 
            alt="socks"
            :class="{ 'out-of-stock-img' : !inStock }"
            >
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="onSale"> {{ isOnSale }} </p>
          <p v-if="inStock">In Stock</p>          
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }} </p>
          <ul>
            <li v-for="detail in details"> {{detail}} </li>
          </ul>
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor : variant.color }">
          </div>
          <button 
            class="button" 
            :class="{ disabledButton : !inStock }"
            @click="addToCart" 
            :disabled="!inStock">
            Add to Cart
          </button>
          <button 
            className="button"
            @click="removeItems">
            Remove
          </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,

  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      inventory: 100,
      details: ['50% cotton', '30% Wool', '20% Polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50,
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
        },
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      onSale: true,
      reviews: [],
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    removeItems(){
      this.$emit('remove', this.variants[this.selectedVariant].id)
    },
    addReview(review){
      this.reviews.push(review)
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    isOnSale() {
      return this.title + ' is on sale'
    },
    shipping(){
      if(this.premium){
        return 'Free'
      }
      return '$2.99'
    }
  },
})