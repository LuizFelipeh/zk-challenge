const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

const lorenIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante erat, aliquet non convallis non, pellentesque vel massa. Pellentesque at gravida velit, nec dignissim nisi. Nam quis risus congue, vestibulum diam luctus, efficitur nisi. Sed orci tortor, elementum quis iaculis sed, lobortis et elit. Vivamus metus ex, venenatis convallis fermentum ac, imperdiet elementum diam. Pellentesque ullamcorper, magna eget euismod porta, lorem elit vehicula eros, a ultricies libero mi in justo. Cras sit amet tincidunt enim. In id mollis erat. Aliquam accumsan aliquam dolor, et sagittis arcu feugiat vel. Ut turpis purus, vehicula ornare laoreet quis, laoreet vitae nunc. Curabitur mauris erat, pulvinar ac diam id, congue lobortis est. Pellentesque id tempor arcu. Donec sollicitudin iaculis neque, a dignissim tellus. Phasellus quis blandit libero.';
const mockProfessional = {
  id: 1,
  profileUrl: 'https://live.mrf.io/statics/i/ps/www.psicologiasdobrasil.com.br/content/uploads/2017/11/37640a617c26a3f4f7000900a98d4499.jpg',
  name: 'Mafalda',
  profession: 'Psicóloga',
  description: lorenIpsum,
  addressCity: 'Lisboa',
  rating: 5,
  review_count: 27
};

const appointmentInfo = {
  price: {
    value: 160,
    currency: 'BRL'
  },
  duration: 50
};

const getDate = (date, hour) => {
  let copiedDate = new Date(date);
  copiedDate.setHours(hour);
  copiedDate.setMinutes(0);
  return copiedDate;
};

const availabilityResponse = (date) => {
  return {
    availabilities: [
      getDate(date, 8),
      getDate(date, 9),
      getDate(date, 10),
      getDate(date, 11),
      getDate(date, 12),
      getDate(date, 13),
      getDate(date, 14),
      getDate(date, 15),
      getDate(date, 16),
      getDate(date, 17),
      getDate(date, 18),
      getDate(date, 19)
    ].filter((_, idx) => idx !== Math.floor(Math.random() * 20))
  };
};

app.use(cors())
app.get('/professional/1', (req, res) => res.send(mockProfessional))
app.get('/professional/1/appointment-info', (req, res) => res.send(appointmentInfo))
app.get('/professional/1/availabilities', (req, res) => {
  const date = new Date(req.query.date);
  setTimeout((function() {res.send(availabilityResponse(date))}), 1000);
})

app.listen(port, () => console.log(`Mock server running on ${port}!`))
