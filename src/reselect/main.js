import Ractive from 'ractive';
import Booking from './booking/Booking'
import Counter from './counter/Counter'

new Ractive({
  target: '#app',
  components: {
    Booking,
    Counter
  },
  template: `
    <h1>Redux Selector Demo</h1>
    <p>
      Try Module 1 & Module 2
    </p>
    <div class="grid">
      <Booking></Booking>
      <Counter></Counter>
    </div>
  `
})