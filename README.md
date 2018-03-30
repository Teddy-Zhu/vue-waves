# vue-waves

A Vue.js version of waves based on https://github.com/fians/Waves.

## How to Use

### SetUp

```bash
npm i -S vue-waves
```

then in the js file

```javascript
import Vue from 'vue';
import VueWaves from 'vue-waves';

Vue.use(VueWaves);
```

### Config

```javascript
Vue.use(VueWaves, {
  name: 'waves'   // Vue指令名称
  duration: 500,  // 涟漪效果持续时间
  delay: 200      // 延时显示涟漪效果
})
```

### Usage

```html
<button v-waves.button>Vue-Waves</button>
<i class="fa fa-times" v-waves.circle></i>
```

Vue directive:
```
v-waves.button  按钮
v-waves.circle  圆形
v-waves.block   块
v-waves.float   阴影效果
v-waves.light   亮色涟漪
v-waves.classic ??
```

Demo:

    git clone https://github.com/Teddy-Zhu/vue-waves.git
    open vue-waves/demo/index.html

# Contributes

```
$ npm i
$ npm run build
```
