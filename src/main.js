import 'hack'
import 'hack/dist/dark.css'
import './style.css'
import Ractive from 'ractive';
import Module1 from './module1/Module1'
import Module2 from './module2/Module2'

new Ractive({
  target: '#app',
  components: {
    Module1,
    Module2
  },
  template: `
    <div class="main container">
      <h1>Redux Selector Demo</h1>
      <p>
        Try Module 1 & Module 2 in # order
      </p>
      <div class="grid">
        <Module1></Module1>
        <Module2></Module2>
      </div>
    </div>
  `
})