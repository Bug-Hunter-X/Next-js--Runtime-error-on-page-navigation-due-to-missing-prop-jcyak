```javascript
// pages/about.js
function About({ someProp = 'Default Value' }) {
  // Use optional chaining or nullish coalescing to safely access the prop
  console.log(someProp);
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. The prop is: {someProp}</p>
    </div>
  );
}

export default About;
```
```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about?someProp=Hello'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```