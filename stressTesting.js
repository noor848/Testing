import http from 'k6/http';
import { sleep } from 'k6';
export let options = {

    stages: [
        { duration: '2m', target: 100 },  // Ramp up to 100 users over 2 minutes.
        { duration: '5m', target: 100 },  // Hold at 100 users for 5 minutes.
        { duration: '2m', target: 200 },  // Increase to 200 users over 2 minutes.
        { duration: '5m', target: 200 },  // Hold at 200 users for 5 minutes.
        { duration: '2m', target: 300 },  // Increase to 300 users over 2 minutes.
        { duration: '5m', target: 300 },  // Hold at 300 users for 5 minutes.
        { duration: '2m', target: 400 },  // Increase to 400 users over 2 minutes.
        { duration: '5m', target: 400 },  // Hold at 400 users for 5 minutes.
        { duration: '10m', target: 0 },   // Ramp down to 0 users over 10 minutes.
    ],
    thresholds: {
        'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
};

export default function () {
    let response = http.get('https://test.k6.io');
}
