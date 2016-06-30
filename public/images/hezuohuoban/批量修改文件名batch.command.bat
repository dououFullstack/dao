@echo off
SETLOCAL ENABLEDELAYEDEXPANSION
SET old=client
SET new=partner
for /f "tokens=*" %%f in ('dir /b *.png') do (
  SET newname=%%f
  SET newname=!newname:%old%=%new%!
  move "%%f" "!newname!"
)
