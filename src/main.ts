import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Custom Directives
app.directive('focus', {
    mounted: el => el.focus()
})

app.directive('color', (el, binding) =>{
    el.style.color = binding.value
})

app.directive('demo', (el, binding) => {
    el.style.fontSize = binding.value.fontSize
    el.style.color = binding.value.color
})


app.mount('#app')
