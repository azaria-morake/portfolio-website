# Stage 1: Build Stage
FROM python:3.10-slim AS build-stage

# Set working directory
WORKDIR /app

RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"


# Install build dependencies (temporary)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    libmariadb-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency requirements
COPY requirements.txt .

# Install dependencies in a temporary environment
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt --verbose

# Stage 2: Production Stage
FROM python:3.10-alpine AS production-stage

# Set working directory
WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache libpq mariadb-connector-c

# Copy Python dependencies from build stage
COPY --from=build-stage /install /usr/local

# Copy the Django project files
COPY . .

# Collect static files
RUN python manage.py collectstatic --no-input

# Expose application port
EXPOSE 8000

# Run the application
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
