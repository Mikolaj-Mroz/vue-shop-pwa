import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    { id: 1,
      name: 'Product 1', 
      price: 100,
      img: 'https://picsum.photos/200/300',
      category: 'Category 1'
    },
    { id: 2,
      name: 'Product 2',
      price: 200,
      img: 'https://picsum.photos/200/300',
      category: 'Category 1'
    },
    { id: 3,
      name: 'Product 3',
      price: 300,
      img: 'https://picsum.photos/200/300',
      category: 'Category 2'
    },
    { id: 4,
      name: 'Product 4',
      price: 400,
      img: 'https://picsum.photos/200/300',
      category: 'Category 2'
    }
  ])
  
  return {products}
  })