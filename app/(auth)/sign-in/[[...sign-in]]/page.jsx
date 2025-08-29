// import { SignUp,SignIn } from '@clerk/nextjs';
// import React from 'react'

// const Page = () => {
//   return (
//     // <div>
//       <SignIn />
//     // </div>
//   );
// };

// export default Page

// app/(auth)/sign-in/[[...sign-in]]/page.jsx
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
