import http from 'k6/http';
import { sleep } from 'k6';

export let options = {

    duration: '1s',
    vus:10,
    thresholds: {
        'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
};

export default function () {
    let response = http.get('https://test.k6.io');
    sleep(1);
}
