// import { SignIn , SignUp} from '@clerk/nextjs';
// import React from 'react'

// const Page = () => {
//   return (
//     // <div>
//       <SignUp />
//     // </div>
//   );
// };

// export default Page
// app/(auth)/sign-up/[[...sign-up]]/page.jsx
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
