from sqlalchemy import Column, Integer, String
from .database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(String, default="student")

class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True)
    program = Column(String)
    year = Column(Integer)
