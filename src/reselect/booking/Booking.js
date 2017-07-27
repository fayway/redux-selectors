import Ractive from 'ractive';
import axios from 'axios'
import store from '../store/index'
import { createAddAction } from './actions'
import { createSelector } from 'reselect'

export default Ractive.extend({
  data() {
    return {
      users: []
    }
  },
  oninit() {

    const myStuff = (booking) => {
      this.set('users', booking.users);
      if (booking.lastUser) {
        this.set('lastUserName', booking.lastUser.name);
        this.reportBooking(booking.lastUser);
      }
    };

    const myStuffSelector = createSelector(
      [state => state.booking],
      myStuff
    );

    store.subscribe(()=>{
      myStuffSelector(store.getState());
    });
  },
  addUser(){
    const { name, country} = this.get()
    if (name && country) {
      createAddAction({name, country});
      this.set({name: ''});
      this.find('#name').focus();
    }
  },
  reportBooking(user) {
    axios.get('http://www.fakeresponse.com/api/', {
      params: {
        data: user
      }
    })
    .then(response => {
      console.log('API Request result:', response);
    });
  },
  template: `
    <div class="cell module">
      <div class="card">
        <header class="card-header">Module Booking</header>
        <div class="card-content">
          <div class="inner">
            <div>
              <form class="form">
                <fieldset class="form-group">
                  <label for="name">Name:</label>
                  <input id="name" value="{{name}}" placeholder="type your name..." class="form-control">
                </fieldset>
                <fieldset class="form-group">
                  <label for="country">Country:</label>
                  <select id="country" value="{{country}}" class="form-control">
                    <option selected>France</option>
                    <option>U.S.</option>
                    <option>U.K.</option>
                    <option>Japan</option>
                    <option>China</option>
                  </select>
                </fieldset>
                <div class="form-actions">
                  <button on-click="@this.addUser()" type="button" class="btn btn-primary btn-block">Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h2>{{users.length}} Users</h2>
              <ul>
                {{#each users}}
                <li>{{name}} from {{country}}</li>
                {{/each}}
              </ul>
              {{#if lastUserName}}<div>(<i>Last username: {{lastUserName}}</i>)</div>{{/if}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
