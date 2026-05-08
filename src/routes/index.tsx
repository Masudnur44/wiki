import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to My App</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This is your clean, modern starting point. Build something amazing!
        </p>
      </div>
    </div>
  );
}
