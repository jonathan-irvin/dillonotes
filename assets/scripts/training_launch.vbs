'====================================
' ESD Startup Script 04/02/10
' Created by Jeremy West
' Information Innovators, Inc. 
'====================================

'====================================
' Modified by Jonathan Irvin 07/16/10
' Indus
'====================================


'====================================
' Set Objects
'====================================
set oShell_1 = Wscript.CreateObject("WScript.Shell")
set oShell_2 = Wscript.CreateObject("WScript.Shell")
set oShell_3 = Wscript.CreateObject("WScript.Shell")
set oIE_1 = CreateObject("InternetExplorer.Application") 
set oIE_2 = CreateObject("InternetExplorer.Application")
set oIE_3 = CreateObject("InternetExplorer.Application")
Set objNetwork = WScript.CreateObject("WScript.Network")
Set colDrives = objNetwork.EnumNetworkDrives




'====================================
'Map Network Drives 
'don't end path with "\"
'====================================
DriveMapper "Z:", "\\52mpls-fs-109\67nww\690nsg\690NSS"

Sub DriveMapper(Drive, Share)
For i = 0 to colDrives.Count-1 Step 2
	If Drive = colDrives.Item(i) Then
		If not Share = colDrives.Item (i + 1) Then
                        Wscript.Echo "Drive " & Drive & " Share " & Share & " Does Not Exist, Next Line Removes the current Z: Drive"
			objNetwork.RemoveNetworkDrive Drive, true, true
		Else
			Exit Sub
		End If
	End If
Next
 
'Map Network Drive
objNetwork.MapNetworkDrive Drive, Share
End Sub


'====================================
'Launching TMetrics
'====================================
oShell_1.Run "%comspec% /c CD /D ""C:\Tmetrics\TMIACDAgentModule\"" && ACDAgentModule.exe", 0, False 


'====================================
'Check for TMetrics
'====================================

'const timeout = 9000
'const timepoll = 500

'set svc = getobject("winmgmts:root\cimv2")
'sQuery = "select * from win32_process where name='TMI_Network.exe'"
'set cproc=svc.execquery(sQuery)
'iniproc = cproc.count
'for i=0 to timeout\timepoll
'    set cproc=svc.execquery(sQuery)
'    if cproc.count=iniproc+1 then
'
'	exit for
'    else
'        if i=timeout\timepoll then
'	     oShell_1.Popup "Tmetrics may not have opened.  Attempt to manually launch Tmetrics. Click OK to proceed.", , ,0 + 48
'
'       else
'            wscript.sleep timepoll
'        end if
'    end if
'next
'set cproc = nothing
'set svc = nothing


'====================================
'DRA: Get User Names NOSC/Area52 
'====================================
Set objSysInfo = CreateObject("ADSystemInfo")

strUser = objSysInfo.UserName
Set objUser = GetObject("LDAP://" & strUser)

strDN = objUser.distinguishedName

arrDN = Split(strDN, ",")

For i = 0 to UBound(arrDN)
    intLength = Len(arrDN(i))
    intCounter = intLength - 3
    arrDN(i) = Right(arrDn(i), intCounter)
Next

vLogon = ReplaceTest("'", "")
strNewName = arrDN(0)

varServerVariable = strNewName
sName = Split(varServerVariable,".")

vLogon = "NOSC\" & sName(1) & "." & sName(0) & ".esd"
vMiddle = sName(2)
vEdi = "area52\" & sName(3) & ".adm"

'====================================
'Account for apostrophe in vLogon
'====================================
Function ReplaceTest(patrn, replStr)
  Dim regEx, str1

  str1 = vLogon

  ' Create regular expression.
  Set regEx = New RegExp
  regEx.Pattern = patrn
  regEx.IgnoreCase = True

  ' Make replacement.
  ReplaceTest = regEx.Replace(str1, replStr)
 
End Function
vLogon = ReplaceTest("'", "")

'====================================
'Account for Nosc length truncation
'====================================

If Len(sName(1) & "." & sName(0)) <= 20 Then
   
Else
	vLogon = "NOSC\" & Mid(sName(1),1,1) & "." & sName(0) & ".esd"
End If




'====================================
'Account for variance in area52
'====================================
If len(sName(2)) < 3 Then

	If len(sName(3)) < 3 Then
		
		If len(sName(4)) < 3 Then
		Else
		vEdi = "area52\" & sName(4) & ".adm"
		End If

	Else
	vEdi = "area52\" & sName(3) & ".adm"
	End If

	
Else
	vEdi = "area52\" & sName(2) & ".adm"

End If


wscript.sleep 1000

'====================================
'Launch client DRA Legacy
'====================================
oShell_3.Run "Runas /user:" & vLogon & " ""C:\Program Files\NetIQ\DRA\UserConsole.exe""", 1, True 

'====================================
'Launch client DRA AFNet
'====================================
oShell_3.Run "Runas /user:" & vEdi & " ""C:\Program Files\NetIQ\DRA\UserConsole.exe""", 1, True 


'====================================
'Launch Outlook
'====================================
oShell_2.Run "%comspec% /c CD /D ""C:\Program Files\Microsoft Office\Office12\"" && outlook.exe", 0, False 

'====================================
'Launch Remedy Client
'====================================
oShell_2.Run "%comspec% /c CD /D ""C:\Program Files\AR System\User\"" && aruser.exe", 0, False 


'====================================
'Launch COP, Wiki, & docs
'====================================
oIE_1.Visible = true 

'COP
oIE_1.Navigate "https://afkm.wpafb.af.mil/community/views/home.aspx?Filter=AE-SC-00-10" 
do until oIE_1.readyState = 4 : wscript.sleep 10 : loop  
if instr(oIE_1.document.body.innerText,"HTTP 40") then msgbox "Navigation error!"  
navOpenInBackgroundTab = &h1000 

'ESD Portal
oIE_1.Navigate2 "https://esd.us.af.mil", navOpenInBackgroundTab

'Call script
oIE_1.Navigate2 "https://afkm.wpafb.af.mil/ASPs/docman/Process/ProcessDOCFunctions.asp?DocID=3606163&Function=ViewDocument&FolderID=AE-SC-00-10-11-19-31&Filter=AE-SC-00-10", navOpenInBackgroundTab

'Remedy Action Summary
oIE_1.Navigate2 "https://afkm.wpafb.af.mil/ASPs/docman/Process/ProcessDOCFunctions.asp?DocID=3520792&Function=ViewDocument&FolderID=AE-SC-00-10-11-19-31&Filter=AE-SC-00-10", navOpenInBackgroundTab

'Priority Matrix
oIE_1.Navigate2 "https://afkm.wpafb.af.mil/ASPs/docman/Process/ProcessDOCFunctions.asp?DocID=4211921&Function=ViewDocument&FolderID=AE-SC-00-10-11-19-31&Filter=AE-SC-00-10", navOpenInBackgroundTab 

'Trusted Agent Validation
oIE_1.Navigate2 "https://afkm.wpafb.af.mil/ASPs/docman/Process/ProcessDOCFunctions.asp?DocID=5284872&Function=ViewDocument&FolderID=AE-SC-00-10-11-19-4&Filter=AE-SC-00-10", navOpenInBackgroundTab 


'====================================
'Launch AREA52 WEB DRA
'====================================
oIE_2.Navigate2 "https://52MPLS-ra-001/dra"
oIE_2.Visible = true 

'====================================
'Launch Web Remedy
'====================================
oIE_3.Visible = true 
'oIE_3.Navigate "https://chd.aetc.af.mil/arsys/shared/login.jsp" 
navOpenInBackgroundTab = &h1000 
oIE_3.Navigate2 "https://wwwmil.usafe.af.mil/remedy/shared/login.jsp", navOpenInBackgroundTab

'====================================
'Clean up Memory Used
'====================================
set oShell_1 = Nothing
set oShell_2 = Nothing
set oShell_3 = Nothing
set oIE_1 = Nothing
set oIE_2 = Nothing
set oIE_3 = Nothing
Set objNetwork = Nothing
Set colDrives = Nothing