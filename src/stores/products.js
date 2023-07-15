import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const categories = ref([
    {
      name: 'For Him',
      subcategories: [
        { name: 'tops', image: '/categories/man-tops.jpg' },
        { name: 'bottoms', image: '/categories/man-bottoms.jpg' },
        { name: 'shoes', image: '/categories/man-shoes.jpg' }
      ]
    },
    {
      name: 'For Her',
      subcategories: [
        { name: 'tops', image: '/categories/woman-tops.jpg' },
        { name: 'bottoms', image: '/categories/woman-bottoms.jpg' },
        { name: 'shoes', image: '/categories/woman-shoes.jpg' }
      ]
    },
    {
      name: 'For Kids',
      subcategories: [
        { name: 'tops', image: '/categories/kid-tops.jpg' },
        { name: 'bottoms', image: '/categories/kid-bottoms.jpg' },
        { name: 'shoes', image: '/categories/kid-shoes.jpg' }
      ]
    }
  ])

  const products = ref([
    {
      name: "Stellar Denim Jacket",
      price: 79.99,
      image: "/products/stellar-denim-jacket.jpg",
      category: "For Him",
      subcategory: "Tops",
      color: "Blue",
      rating: 4.5,
      reviews: 12,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Harmony Knit Sweater",
      price: 59.99,
      image: "/products/harmony-knit-sweater.jpg",
      category: "For Her",
      subcategory: "Tops",
      color: "Pink",
      rating: 4,
      reviews: 8,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Radiant Sun Dress",
      price: 89.99,
      image: "/products/radiant-sun-dress.jpg",
      category: "For Her",
      subcategory: "Tops",
      color: "White",
      rating: 3,
      reviews: 4,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Nova Active Leggings",
      price: 69.99,
      image: "/products/nova-active-leggings.jpg",
      category: "For Her",
      subcategory: "Bottoms",
      color: "Black",
      rating: 5,
      reviews: 16,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Blissful Linen Shirt",
      price: 79.99,
      image: "/products/blissful-linen-shirt.jpg",
      category: "For Him",
      subcategory: "Tops",
      color: "White",
      rating: 4.5,
      reviews: 12,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Cascade Waterfall Cardigan",
      price: 69.99,
      image: "/products/cascade-waterfall-cardigan.jpg",
      category: "For Her",
      subcategory: "Tops",
      color: "Pattern",
      rating: 4,
      reviews: 8,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Celestial Pleated Skirt",
      price: 59.99,
      image: "/products/celestial-pleated-skirt.jpg",
      category: "For Her",
      subcategory: "Bottoms",
      color: "Pattern",
      rating: 3,
      reviews: 4,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Aurora Performance Shorts",
      price: 34.99,
      image: "/products/aurora-performance-shorts.jpg",
      category: "For Him",
      subcategory: "Bottoms",
      color: "Pattern",
      rating: 5,
      reviews: 16,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Euphoria Embroidered Blouse",
      price: 59.99,
      image: "/products/euphoria-embroidered-blouse.jpg",
      category: "For Kids",
      subcategory: "Tops",
      color: "Pattern",
      rating: 4.5,
      reviews: 12,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Oasis Hiking Shoes",
      price: 89.99,
      image: "/products/oasis-hiking-shoes.jpg",
      category: "For Kids",
      subcategory: "Shoes",
      color: "Pink",
      rating: 4,
      reviews: 8,
      sizes: [28, 29, 30, 31, 32, 33, 34]
    },
    {
      name: "Essence Bamboo Socks",
      price: 19.99,
      image: "/products/essence-bamboo-socks.jpg",
      category: "For Kids",
      subcategory: "Socks",
      color: "Pattern",
      rating: 3,
      reviews: 4,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      name: "Nova Sportswear Bra",
      price: 29.99,
      image: "/products/nova-sportswear-bra.jpg",
      category: "For Her",
      subcategory: "Tops",
      color: "Black",
      rating: 5,
      reviews: 16,
      sizes: ['80B', '85B', '90B', '95B', '70C', '75C', '80C', '85C', '90C', '95C']
    },
  ])

  const getProductByName = (name) => {
    return products.value.find(product => product.name === name)
  }

  const getProductsByCategory = (category) => {
    return products.value.filter(product => product.category === category)}

  const searchProducts = (query) => {
    return products.value.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
  }

  return { products, categories, getProductByName ,getProductsByCategory, searchProducts }
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
