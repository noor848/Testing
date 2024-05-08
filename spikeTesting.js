import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 20 }, // low number of users for 10 seconds
        { duration: '5s', target: 20 },  // Hold
        { duration: '10s', target: 200 }, // Spike: ramp up to 200 users  10 seconds
        { duration: '10s', target: 200 }, // Hold spike for 10 seconds
        { duration: '5s', target: 20 },  // ramp down to over 5 seconds
        { duration: '10s', target: 20 }, // Hold
    ],
    thresholds: {
        'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5 seconds
    },
};

export default function () {
    let response = http.get('https://test.k6.io');
    sleep(1);
}
