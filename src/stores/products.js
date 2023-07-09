import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const categories = ref([
    {
      title: 'for him',
      subcategories: [
        { title: 'tops', image: '/categories/man-tops.jpg' },
        { title: 'bottoms', image: '/categories/man-bottoms.jpg' },
        { title: 'shoes', image: '/categories/man-shoes.jpg' }
      ]
    },
    {
      title: 'for her',
      subcategories: [
        { title: 'tops', image: '/categories/woman-tops.jpg' },
        { title: 'bottoms', image: '/categories/woman-bottoms.jpg' },
        { title: 'shoes', image: '/categories/woman-shoes.jpg' }
      ]
    },
    {
      title: 'for kids',
      subcategories: [
        { title: 'tops', image: '/categories/kid-tops.jpg' },
        { title: 'bottoms', image: '/categories/kid-bottoms.jpg' },
        { title: 'shoes', image: '/categories/kid-shoes.jpg' }
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
