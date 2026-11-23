const API_URL: string = import.meta.env.VITE_API_URL ?? "http://localhost:8085";

export interface Health {
  status: string;
}

export async function getHealth(): Promise<Health> {
  const response = await fetch(`${API_URL}/health`);
  if (!response.ok) {
    throw new Error(`API responded with ${response.status}`);
  }
  return response.json();
}