import { SignIn } from '@/components/auth/sign-in';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';

import Link from 'next/link';

export default async function Home() {
  const user = await prisma.user.findMany();
  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">Auth.js</h1>
      <h2 className="text-center text-2xl font-semibold">Users</h2>
      <Button>
        <Link href="/settings">Setting</Link>
      </Button>
      <Button>
        <Link href="/admin">Admin</Link>
      </Button>

      <Button variant={'destructive'}>
        <Link href="/api/auth/signin"> signin</Link>
      </Button>

      {/* TODO: Display users here */}
      <ul className="list-disc list-inside">
        {user.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`} className='hover:underline '>
              {user.name ||  `User ${user.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
