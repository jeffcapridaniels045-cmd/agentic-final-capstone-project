import { useEffect, useState } from "react";
import { getHealth } from "./lib/api";

type State =
  | { kind: "loading" }
  | { kind: "ok"; status: string }
  | { kind: "error"; message: string };

export default function App() {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    getHealth()
      .then((data) => setState({ kind: "ok", status: data.status }))
      .catch((err: Error) => setState({ kind: "error", message: err.message }));
  }, []);

  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>Averon</h1>
      {state.kind === "loading" && <p>Checking API…</p>}
      {state.kind === "ok" && <p>API status: {state.status}</p>}
      {state.kind === "error" && <p>Cannot reach API: {state.message}</p>}
    </main>
  );
}
