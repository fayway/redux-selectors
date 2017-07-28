import Ractive from 'ractive';
import store from '../store/index';
import Counter from '../counter/Counter';

export default Ractive.extend({
  name: 'step1',
  components: {
    Counter
  },
  oninit() {
    console.log('Step 1 Init');

    this.unsubscribe = store.subscribe(() => {
      console.log('Receiving a store notification', store.getState());
      this.set('count', store.getState().counter.count);
    });
  },
  onteardown() {
    console.log('Step 1 Teardown');
    this.unsubscribe();
  },
  template: `
    <div class="card">
      <header class="card-header">Step <span style="font-size: 40px; color: aquamarine">1</span></header>
      <div class="card-content">
        <div class="inner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Expedita, quas ex vero enim in doloribus officiis ullam vel nam esse sapiente velit incidunt. 
          Eaque quod et, aut maiores excepturi sint.
        </div>
        <div class="inner">
          <Counter></Counter>
        </div>
      </div>
    </div>
  `
})
