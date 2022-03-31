import "./App.css";
import Booking from "./booking/Booking";

function App() {
  return (
    <div className="App">
      <div className="form">
        <h3>Booking Plus</h3>
        <Booking />
      </div>

      <div className="display-bookings">
        <h2>Bookings</h2>

        {/* <div className="first-roll">
          <p>Barbering</p>
          <p>merchant's Name</p>
          <button id="confirm">Confirm</button>
        </div> */}

        <table>
          <tr>
            <th>Service</th>
            <th>Time</th>
            <th>Shop</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Barber</td>
            <td>9:00AM - 5:00PM</td>
            <td>Spicy Hair Cut</td>
            <td>
            <button id="confirm">Confirm</button>
            </td>
          </tr>
          <tr>
            <td>Braiding</td>
            <td>9:00AM - 5:00PM</td>
            <td>Saloon De Montana</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
          <tr>
            <td>Nail Dressing</td>
            <td>9:00AM - 5:00PM</td>
            <td>Trish Nail Techniques</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
          <tr>
            <td>Laundry</td>
            <td>9:00AM - 5:00PM</td>
            <td>Loius Home Clean</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
          <tr>
            <td>Barbering</td>
            <td>9:00AM - 5:00PM</td>
            <td>The Last Two</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
          <tr>
            <td>Hair Dressing</td>
            <td>9:00AM - 5:00PM</td>
            <td>Beautiful Baby Saloon</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
          <tr>
            <td>Massage</td>
            <td>9:00AM - 5:00PM</td>
            <td>Escort Spa</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
          <tr>
            <td>Nail Dressing</td>
            <td>9:00AM - 5:00PM</td>
            <td>Trish Nail Techniques</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
          <tr>
            <td>Ocassional Decoration</td>
            <td>9:00AM - 5:00PM</td>
            <td>Beat's Deco</td>
            <td><button id="confirm">Confirm</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
