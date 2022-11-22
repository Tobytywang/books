import { useArraySome } from '@vueuse/shared'
import { createStore } from 'vuex'
import books from '/src/data/books.json'

const store = createStore({
    state: books,
    mutations: {

    },
    actions: {

    },
    getters: {
        getSpecificTypeBooks: (state, getters) => (type: string) => {
            // console.log('hello')
            // console.log(type)
            // console.log(state.books)
            // console.log(type)
            const ret = { books: new Array()}
            for (let i = 0; i < state.books.length; i++) {
                if (type.includes(state.books[i].type)) {
                    // console.log(state.books[i].type)
                    ret.books.push(state.books[i])
                }
            }
            // console.log(ret)
            return ret
        }
    },
    modules: {

    }
    // mutations: {
    //     increment (state) {
    //         state.count++
    //     }
    // }
})

export default store
