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


'====================================
'Launching TMetrics
'====================================
oShell_1.Run "%comspec% /c CD /D ""C:\Tmetrics\TMIACDAgentModule\"" && ACDAgentModule.exe", 0, False 

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
'oShell_3.Run "Runas /user:" & vLogon & " ""C:\Program Files\NetIQ\DRA\UserConsole.exe""", 1, True 

'====================================
'Launch client DRA AFNet
'====================================
oShell_3.Run "Runas /user:" & vEdi & " ""C:\Program Files\NetIQ\DRA\UserConsole.exe""", 1, True 


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