from fastapi import APIRouter, HTTPException, Form
from app.utils.security import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

# TEMP users (later DB)
users = {
    "student@test.com": {
        "password": "1234",
        "role": "student"
    },
    "admin@test.com": {
        "password": "admin",
        "role": "admin"
    }
}

@router.post("/login")
def login(email: str = Form(...), password: str = Form(...)):
    user = users.get(email)

    if not user or user["password"] != password:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({
        "sub": email,
        "role": user["role"]
    })

    return {
        "access_token": token,
        "role": user["role"]
    }
