import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-background px-4'>
      <SignUp />
    </div>
  );
}

export const dynamic = 'force-dynamic';