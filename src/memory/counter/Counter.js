import Ractive from 'ractive';
import store from '../store/index'
import { createDecrementAction, createIncrementAction } from './actions'
import { createSelector } from 'reselect'

export default Ractive.extend({
  name: 'counter',
  data: {
    count: 0
  },
  oninit() {
    store.subscribe(()=>{
      this.set('count', store.getState().counter.count);
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
        <header class="card-header">Module Counter</header>
        <div class="card-content">
          <div class="inner">
            <div style="font-size: 20px">
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
