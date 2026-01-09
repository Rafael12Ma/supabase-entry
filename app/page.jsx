import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="flex min-h-screen items-center justify-center text-white bg-black font-sans dark:bg-black">
      {/* <h1>Hello {user.email}</h1> */}
      <form action="/auth/logout" method="post">
        <Button>Logout</Button>
      </form>
    </div>
  );
}
