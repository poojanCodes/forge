
import { Suspense } from "react";
import { WorkspaceClient } from "@/components/WorkspaceClient";
import {
  getWorkspaceUser,
  getWorkspaceById,
} from "@/actions/workspace";

interface WorkspacePageProps {
  searchParams: Promise<{ prompt?: string; id?: string }>;
}

export default function WorkspacePage({
  searchParams,
}: WorkspacePageProps) {
  return (
    <Suspense fallback={<div>Loading workspace...</div>}>
      <WorkspaceContent searchParams={searchParams} />
    </Suspense>
  );
}

async function WorkspaceContent({
  searchParams,
}: WorkspacePageProps) {
  const { prompt, id } = await searchParams;

  const user = await getWorkspaceUser();

  let workspace = null;

  if (id) {
    workspace = await getWorkspaceById(id, user.id);
  }

  return (
    <WorkspaceClient
      initialPrompt={prompt ?? null}
      workspace={workspace}
      userCredits={user.credits}
      userId={user.id}
      userPlan={user.plan}
    />
  );
}
