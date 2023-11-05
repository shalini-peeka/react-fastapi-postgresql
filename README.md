# Local development

### Required:

1.  Python 3.8
2.  NodeJS 18 or higher
3.  Postgresql

### Frontend

**Run Frontend**

```shell
cd frontend
# Skip if node modules are already installed
npm i
# Start the app
npm start
```

Now app will run on http://localhost:3000

**Build Frontend**

```shell
cd frontend
# Skip if node modules are already installed
npm i
# Build the app
npm run build
```

The build package will be created under the folder build.

### Backend

Before starting the app, make sure Postgresql server is up and running and set the environment variable on the terminal by running the command.

Linux/Mac :

`export DATABASE_URL="postgresql://postgres:123456789@20.101.160.159:5432/blogData"`

Windows Powershell :

`$Env:DATABASE_URL = "postgresql://postgres:123456789@20.101.160.159:5432/blogData"`

**Start Backend**

```shell
cd backend
# Skip if already installed python required packages
pip install -r ./requirements.txt
# Run backend
uvicorn blog.main:app --host 0.0.0.0 --port 8000 --reload
```

In case, if terminal throws an error unvicorn is not found, try adding python -m in beginning of the command