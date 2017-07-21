import Ractive from 'ractive';
import store from '../store/index'
import { createDecrementAction, createIncrementAction } from './actions'

export default Ractive.extend({
  data: {
    count: 0
  },
  oninit() {
    store.subscribe(()=>{
      this.set('count', store.getState().module2);
    });
  },
  inc(){
    createIncrementAction();
  },
  dec(){
    createDecrementAction();
  },
  template: `
    <div class="cell module">
      <div class="card">
        <header class="card-header">Module 2</header>
        <div class="card-content">
          <div class="inner">
            <div>
              Counter: {{count}}
            </div>
            <div>
              <button on-click="@this.inc()" class="btn btn-success">Increment</button>
              <button on-click="@this.dec()" class="btn btn-warning">Decrement</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
