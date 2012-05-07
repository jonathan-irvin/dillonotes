echo off
taskkill /f /im iexplore.exe
RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 4351
exit