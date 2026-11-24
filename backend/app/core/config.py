import os
from dataclasses import dataclass, field


def _split(value: str) -> list[str]:
    return [item.strip() for item in value.split(",") if item.strip()]


@dataclass(frozen=True)
class Settings:
    """App settings read from environment variables (see .env.example)."""

    cors_origins: list[str] = field(
        default_factory=lambda: _split(
            os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:5175,http://localhost:8085,http://127.0.0.1:5173,http://127.0.0.1:5175,http://127.0.0.1:8085")
        )
    )


settings = Settings()
