import http from 'k6/http';
import { sleep } from 'k6';

export let options = {

    stages: [
        { duration: '30m', target: 50 },  // Ramp up to 50 users over 30 minutes.
        { duration: '8h', target: 50 },   // Hold at 50 users for 8 hours.
        { duration: '30m', target: 0 }    // Ramp down to 0 users over 30 minutes.
    ],
    thresholds: {
        'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
};

export default function () {
    let response = http.get('https://test.k6.io');
}
