import Login from './login';
import Admin from './admin';

let content;
let isLoggedIn = false;

if(isLoggedIn) {
  content = <Admin />
} else {
  content = <Login />
}

export default function ConditionalRendering() {
  return (
    <div>
      {content}
      {/* { isLoggedInV2 ? <Admin /> : <Login />} */}
    </div>
  )
}