import Ractive from 'ractive';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';

new Ractive({
  name: 'root',
  target: '#app',
  components: {
    Step1,
    Step2,
    Step3
  },
  oninit() {
    console.log('Root App Init')
  },
  onteardown() {
    console.log('Root App Teardown')
  },
  data: {
    step: 1
  },
  template: `
    <h1>Memory Leak</h1>
    <div class="grid">
      {{#if step ===1}}
        <Step1 title="Step 1" step=1></Step1>
      {{elseif step ===2}}
        <Step2 title="Step 2" step=2></Step2>
      {{elseif step ===3}}
        <Step3 title="Step 3" step=3></Step3>
      {{/if}}
      <div class="btn-group">
        <button class="btn btn-default {{#if step!==1}}btn-ghost{{/if}}" on-click="@this.set('step', 1)">Step 1</button>
        <button class="btn btn-default {{#if step!==2}}btn-ghost{{/if}}" on-click="@this.set('step', 2)">Step 2</button>
        <button class="btn btn-default {{#if step!==3}}btn-ghost{{/if}}" on-click="@this.set('step', 3)">Step 3</button>
      </div>
    </div>
  `
})