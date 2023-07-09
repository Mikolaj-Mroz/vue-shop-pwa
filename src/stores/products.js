import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const categories = ref([
    {
      title: 'For Him',
      subcategories: [
        { title: 'tops', image: '/categories/man-tops.jpg' },
        { title: 'bottoms', image: '/categories/man-bottoms.jpg' },
        { title: 'shoes', image: '/categories/man-shoes.jpg' }
      ]
    },
    {
      title: 'For Her',
      subcategories: [
        { title: 'tops', image: '/categories/woman-tops.jpg' },
        { title: 'bottoms', image: '/categories/woman-bottoms.jpg' },
        { title: 'shoes', image: '/categories/woman-shoes.jpg' }
      ]
    },
    {
      title: 'For Kids',
      subcategories: [
        { title: 'tops', image: '/categories/kid-tops.jpg' },
        { title: 'bottoms', image: '/categories/kid-bottoms.jpg' },
        { title: 'shoes', image: '/categories/kid-shoes.jpg' }
      ]
    }
  ])

  const products = ref([
    {
      "name": "Stellar Denim Jacket",
      "price": 79.99,
      "image": "/products/stellar-denim-jacket.jpg",
      "category": "For Him",
      "subcategory": "Tops",
      "size": "M",
      "color": "Blue"
    },
    {
      "name": "Harmony Knit Sweater",
      "price": 59.99,
      "image": "/products/harmony-knit-sweater.jpg",
      "category": "For Her",
      "subcategory": "Tops",
      "size": "S",
      "color": "Pink"
    },
    {
      "name": "Radiant Sun Dress",
      "price": 89.99,
      "image": "/products/radiant-sun-dress.jpg",
      "category": "For Her",
      "subcategory": "Tops",
      "size": "S",
      "color": "White"
    },
    {
      "name": "Nova Active Leggings",
      "price": 69.99,
      "image": "/products/nova-active-leggings.jpg",
      "category": "For Her",
      "subcategory": "Bottoms",
      "size": "S",
      "color": "Black"
    },
    {
      "name": "Blissful Linen Shirt",
      "price": 79.99,
      "image": "/products/blissful-linen-shirt.jpg",
      "category": "For Him",
      "subcategory": "Tops",
      "size": "M",
      "color": "White"
    },
    {
      "name": "Cascade Waterfall Cardigan",
      "price": 69.99,
      "image": "/products/cascade-waterfall-cardigan.jpg",
      "category": "For Her",
      "subcategory": "Tops",
      "size": "S",
      "color": "Pattern"
    },
    {
      "name": "Celestial Pleated Skirt",
      "price": 59.99,
      "image": "/products/celestial-pleated-skirt.jpg",
      "category": "For Her",
      "subcategory": "Bottoms",
      "size": "S",
      "color": "Pattern"
    },
    {
      "name": "Aurora Performance Shorts",
      "price": 34.99,
      "image": "/products/aurora-performance-shorts.jpg",
      "category": "For Him",
      "subcategory": "Bottoms",
      "size": "M",
      "color": "Pattern"
    },
    {
      "name": "Euphoria Embroidered Blouse",
      "price": 59.99,
      "image": "/products/euphoria-embroidered-blouse.jpg",
      "category": "For Kids",
      "subcategory": "Tops",
      "size": "S",
      "color": "Pattern"
    },
    {
      "name": "Oasis Hiking Shoes",
      "price": 89.99,
      "image": "/products/oasis-hiking-shoes.jpg",
      "category": "For Kids",
      "subcategory": "Shoes",
      "size": "36",
      "color": "Pink"
    },
    {
      "name": "Essence Bamboo Socks",
      "price": 19.99,
      "image": "/products/essence-bamboo-socks.jpg",
      "category": "For Kids",
      "subcategory": "Socks",
      "size": "9",
      "color": "Pattern"
    },
    {
      "name": "Nova Sportswear Bra",
      "price": 29.99,
      "image": "/products/nova-sportswear-bra.jpg",
      "category": "For Her",
      "subcategory": "Tops",
      "size": "S",
      "color": "Black"
    },
  ])

  return { products, categories }
})

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  const addToCart = (product) => {
    cart.value.push(product)
  }

  const removeFromCart = (product) => {
    const index = cart.value.indexOf(product)
    cart.value.splice(index, 1)
  }

  return { cart, addToCart, removeFromCart }
})

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref([])

  const addToWishlist = (product) => {
    wishlist.value.push(product)
  }

  const removeFromWishlist = (product) => {
    const index = wishlist.value.indexOf(product)
    wishlist.value.splice(index, 1)
  }

  return { wishlist, addToWishlist, removeFromWishlist }
})
