import './waves.css'
import Waves from './waves.js'

module.exports = {
    install(Vue, options = { name: 'waves' }) {
        Vue.directive(options.name, {
            inserted(el, binding) {
                let classes = ['button', 'circle', 'block', 'float', 'light', 'classic']
                    .filter(cls => binding.modifiers[cls])
                    .map(cls => `waves-${cls}`)
                Waves.attach(el, classes)
            }
        })
        Vue.mixin({
            created: function() {
                Waves.init(options);
            }
        })
    }
}
