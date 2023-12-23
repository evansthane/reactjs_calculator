import axios from 'axios';
import { useState } from 'react';

function AxiosTest(){

    var [data, setData] = useState([]); 
    // axios.get('	https://jsonplaceholder.org/users')
    // .then(response => {
    //     console.log(response.data);
    //     setData(response.data);
    // })
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    // });

    let url = 'https://jsonplaceholder.org/users';

    // fetch(url, {
    //     method: 'GET'
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log(data);
    //     setData(data);
    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // });
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true)
    xhr.send()

    xhr.onload = () => {
        if (xhr.status === 200) {
            setData(JSON.parse(xhr.responseText))
        }
    }



    return (
        <>  
        <div>Test</div>
        <div>
            {data.map(item => <div key = {item.id}>{item.firstname}</div>)};
        </div>

        </>
    )
}

export default AxiosTest;