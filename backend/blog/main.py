from fastapi import FastAPI
from . import  models
from .database import engine
from  .routers import blog, user, Login
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(engine)

app.include_router(user.router)
app.include_router(Login.router)
app.include_router(blog.router)

