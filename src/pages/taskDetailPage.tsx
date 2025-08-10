import { useParams } from "react-router-dom";

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="text-2xl font-bold">Task Detail</h1>
      <p>ID: {id}</p>
    </div>
  );
}
