import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const categories = ref([
    {
      type: 'for him',
      subcategories: [
        { title: 'tops', photo: 'https://picsum.photos/300/300' },
        { title: 'bottoms', photo: 'https://picsum.photos/300/300' },
        { title: 'shoes', photo: 'https://picsum.photos/300/300' },
        { title: 'accessories', photo: 'https://picsum.photos/300/300' }
      ]
    },
    {
      type: 'for her',
      subcategories: [
        { title: 'tops', photo: 'https://picsum.photos/300/300' },
        { title: 'bottoms', photo: 'https://picsum.photos/300/300' },
        { title: 'shoes', photo: 'https://picsum.photos/300/300' },
        { title: 'accessories', photo: 'https://picsum.photos/300/300' }
      ]
    },
    {
      type: 'for kids',
      subcategories: [
        { title: 'tops', photo: 'https://picsum.photos/300/300' },
        { title: 'bottoms', photo: 'https://picsum.photos/300/300' },
        { title: 'shoes', photo: 'https://picsum.photos/300/300' },
        { title: 'accessories', photo: 'https://picsum.photos/300/300' }
      ]
    }
  ])

  const products = ref([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      img: 'https://picsum.photos/300/300',
      category: 'Category 1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 300,
      img: 'https://picsum.photos/300/300',
      category: 'Category 1'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      img: 'https://picsum.photos/300/300',
      category: 'Category 2'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      img: 'https://picsum.photos/300/300',
      category: 'Category 2'
    }
  ])

  return { products, categories }
})
