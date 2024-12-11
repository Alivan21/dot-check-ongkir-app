import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-4">
      <SignIn fallbackRedirectUrl="/dashboard" />
    </main>
  );
}
