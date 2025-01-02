# Next.js Runtime Error: Missing Prop

This repository demonstrates a common error in Next.js applications where navigating to a page throws a runtime error because it tries to access a property that doesn't exist.  The error occurs because of missing prop handling.

## Problem
The `about.js` page attempts to access `this.props.nonExistentProp`, which causes a runtime error when the page is loaded. 

## Solution
The solution involves adding proper error handling to check for the existence of the prop before attempting to access it. This can involve using optional chaining or the nullish coalescing operator.  Additionally, ensure that props are passed down correctly through components.
