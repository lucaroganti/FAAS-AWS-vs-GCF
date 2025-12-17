import http from 'k6/http';
import { check, sleep } from 'k6';


const url = 'my_url; 
const payload = JSON.stringify({ 'n': 5 }); 

export let options = {
    scenarios: {
        sequential_test: {
            executor: 'constant-vus',
            vus: 1,
            duration: '48m',
            exec: 'default',
        },
    },
    thresholds: {
        'http_req_duration': ['p(99)<20000'],
        'http_req_failed': ['rate<0.01'],
    },    
};

export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

let res = http.post(url, payload, params);

    check(res, { 'status is 200': (r) => r.status === 200 });

   
    sleep(900); 
}
