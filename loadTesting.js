import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 50 },  // Ramp-up to 50 users over 1 minute.
        { duration: '3m', target: 50 },  // Sustain 50 users for 3 minutes.
        { duration: '1m', target: 0 },   // Ramp-down to 0 users over 1 minute
    ],
    thresholds: {
        'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
};

export default function () {
    let response = http.get('https://test.k6.io');
    sleep(1);
}
