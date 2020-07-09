const axios = require('axios');

async function makePostRequest() {
    params = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'gardener',
    };

    let res = await axios.post('http://localhost:3000/info/', params);

    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);

    console.log(res.data);
}

makePostRequest();
