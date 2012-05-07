'Version 7 - 24 Feb 2011
'Designed and Coded by Mr. Joshua Hale, CTR, USAF.  Level 2 Technician, Enterprise IT Service Desk (ESD).
'Concept developed by Mr. Randy L. Shallenberger, CTR, USAF.  Technical Writer, Planning and Implementation Cell.
'
'This script quickly displays a User's AFNet account information without any elevated privilages:  Display Name, First Name, Middle 'Initial, Last Name, Logon Name, Personnel Category Code (PCC), Account Lock Status, Account Enable Status, IA Training Date, Account 'Expiration Date, Account Last Modified Date,  Account Top OU Location, User's Distinguished Name and Full OU Path, Account Migration 'Status/Progression, Exchange Server, Exchange Store, if Email Forwarding is enabled, Account Alias, Hidden from GAL Status, Full list of 'Account SMTP addresses, Extension Attribute 14, and Group Memberships.
'
'Script is designed to be used on the AFNet only.  Request modifications to the people listed above.

Dim adoCommand, adoConnection, strBase, strFilter, strAttributes
Dim objRootDSE, strDNSDomain, strQuery, adoRecordset
Dim givenName, surname, UPName, strDN(15000), ListUser(15000), UserSelect, counter, acct_exist, selectedUser
cont_script="6"

'*************** Looping Script
'***************
While cont_script="6"
'***************
'***************

acct_exist = "no"
counter=1

'Ask for info to Query
gather_input()

'Runs query with given info
run_query()

If UserSelect = "" then
  msgbox("User not found. Rerun the script and ensure all information is correct.")   
  wscript.quit 
else
  selectedUser=inputbox("Enter the number corresponding to the AFNet User Account you wish to view." & vbcr & vbcr & UserSelect,"Account Selection")
       
  If IsEmpty(selectedUser) then
    wscript.quit
  End If
  
  while (IsNumeric(selectedUser) = false)
    msgbox("Incorrect data entered.")
    selectedUser=inputbox("Enter the number corresponding to the AFNet User Account you wish to view." & vbcr & vbcr & UserSelect,"Account Selection")
  
    If IsEmpty(selectedUser) then
      wscript.quit
    End If
  wend

end if

UserSelect=""
gather_acct_info()

cont_script=msgbox("Would you like search for another user?",vbYesNo+vbQuestion,"Search for another user?")

'*************** End Looping Script
'***************

wend

'***************
'***************

wscript.quit

'****************************************
'****************************************

sub gather_input()
  givenName = inputbox("Enter the User's First Name, if known; or leave blank.", "Account Information Query")
  If IsEmpty(givenName) then
    wscript.quit
  End If
  
  surname = inputbox("Enter User's Last Name, if known; or leave blank.", "Account Information Query")
  If IsEmpty(surname) then
    wscript.quit
  End If
  
  UPName = inputbox("Enter User's EDI-PI/Logon name, if known; or leave blank.", "Account Information Query")
  If IsEmpty(UPName) then
    wscript.quit
  End If
  
  While UPName="" and surname="" and givenName=""
    msgbox("No data was entered. Please enter data, or hit 'cancel'.")
  
    givenName = inputbox("Enter the User's First Name, if known; or leave blank.", "Account Information Query")
    If IsEmpty(givenName) then
      wscript.quit
    End If
  
    surname = inputbox("Enter User's Last Name, if known; or leave blank.", "Account Information Query")
    If IsEmpty(surname) then
      wscript.quit
    End If
  
    UPName = inputbox("Enter User's EDI-PI/Logon name, if known; or leave blank.", "Account Information Query")
    If IsEmpty(UPName) then
      wscript.quit
    End If
  wend
  
  trim(givenName)
  trim(surname)
  trim(UPName)
  
  x=Msgbox("A list is being populated with one or more User accounts based on the search information you provided.  If you do not see the account you were searching for, try utilizing the User's EDI-PI or more specific information.  More accurate and faster results will be provided based on how detailed you enter the search information.",vbInformation, "AFNet User Account Information Query")
end sub

'****************************************
'****************************************

Sub run_query()
  ' Setup ADO objects.
  Set adoCommand = CreateObject("ADODB.Command")
  Set adoConnection = CreateObject("ADODB.Connection")
  adoConnection.Provider = "ADsDSOObject"
  adoConnection.Open "Active Directory Provider"
  Set adoCommand.ActiveConnection = adoConnection
  
  ' Search entire Active Directory domain.
  Set objRootDSE = GetObject("LDAP://RootDSE")
  
  strDNSDomain = objRootDSE.Get("defaultNamingContext")
  strBase = "<LDAP://" & strDNSDomain & ">"
  
  ' Filter on user objects.
  strFilter = "(&(objectCategory=person)(objectClass=user)(givenName=" & givenName & "*)(sn=" & surname & "*)(userprincipalName=" & UPName & "*))"
  
  ' Comma delimited list of attribute values to retrieve.
  strAttributes = "displayName,distinguishedName"

  ' Construct the LDAP syntax query.
  strQuery = strBase & ";" & strFilter & ";" & strAttributes & ";subtree"
  adoCommand.CommandText = strQuery
  adoCommand.Properties("Page Size") = 50
  adoCommand.Properties("Timeout") = 10
  adoCommand.Properties("Cache Results") = False

  ' Run the query.
  Set adoRecordset = adoCommand.Execute
  ' Enumerate the resulting recordset.

  Do Until adoRecordset.EOF

    ' Retrieve values and display.
    strDN(counter)= adoRecordset.Fields("distinguishedName").value
    ListUser(counter)=adoRecordset.Fields("displayName").Value

    If Len(UserSelect) < 900 then
      UserSelect = UserSelect & counter & ". " & ListUser(counter) & Vbcr
      counter=counter+1
    end if

    ' Move to the next record in the recordset.
    adoRecordset.MoveNext

  Loop
  
  'clean up
  adoRecordset.Close  
  adoConnection.Close 
end sub

'****************************************
'****************************************

sub gather_acct_info()

  On Error Resume Next
  Set objSysInfo = CreateObject("ADSystemInfo")
  Set objUser = GetObject("LDAP://" & strDN(selectedUser))

  Acctdia = Acctdia & objUser.displayName & Vbcr & Vbcr
  Acctdia = Acctdia & "First Name: " & objUser.givenName & Vbcr
  Acctdia = Acctdia & "Middle Initial : " & objUser.initials & Vbcr
  Acctdia = Acctdia & "Last Name: " & objUser.sn & Vbcr
  Acctdia = Acctdia & Vbcr & "*************************" & Vbcr
  Acctdia = Acctdia & Vbcr & "Account Information:" & Vbcr

  Acctdia = Acctdia & "Logon Name: " & objUser.userPrincipalName & Vbcr
  Acctdia = Acctdia & "Personnel Category Code (PCC): " &   objUser.employeeType & vbcr

  If objUser.IsAccountLocked = FALSE Then
    Acctdia = Acctdia & "Account is Unlocked." & Vbcr
  Else
    Acctdia = Acctdia & "Account is Locked." & Vbcr
  End If

  If objUser.AccountDisabled = FALSE Then
    Acctdia = Acctdia & "Account is Enabled." & Vbcr
  Else
    Acctdia = Acctdia & "Account is Disabled." & Vbcr
  End If

  Acctdia = Acctdia & "IA Training Date: " & objUser.iaTrainingDate & Vbcr

  If Err.Number = -2147467259 OR dtmAccountExpiration = "1/1/1970" OR objUser.AccountExpirationDate = "1/1/1970" then
    Acctdia = Acctdia & "Account is set to Never Expire" & "." & Vbcr
  Else
    Acctdia = Acctdia & "Account Expiration: " & objUser.AccountExpirationDate & "." & Vbcr
  End If

  Acctdia = Acctdia & "Last modified on: " & objUser.whenChanged & " Zulu Time" & Vbcr

  ouLists = split(objUser.distinguishedName, ",OU=")

  If ouLists(1) = "A" or ouLists(1) = "B" or ouLists(1) = "C" or ouLists(1) = "D" or ouLists(1) = "E" or ouLists(1) = "F" or ouLists(1) = "G" or ouLists(1) = "H" or ouLists(1) = "I" or ouLists(1) = "J" or ouLists(1) = "K" or ouLists(1) = "L" or ouLists(1) = "M" or ouLists(1) = "N" or ouLists(1) = "O" or ouLists(1) = "Others"  or ouLists(1) = "P" or ouLists(1) = "Q" or ouLists(1) = "R" or ouLists(1) = "S" or ouLists(1) = "T" or ouLists(1) = "U" or ouLists(1) = "V" or ouLists(1) = "W" or ouLists(1) = "X" or ouLists(1) = "Y" or ouLists(1) = "Z" Then
    ouLists(1)="People OU"
  End If

  Acctdia = Acctdia & "Account is in the OU: " & ouLists(1)
  Acctdia = Acctdia & vbcr & vbcr & "Full OU Path: " & objUser.distinguishedName

  exhInfo = exhInfo & Vbcr & "*************************" & Vbcr
  exhInfo = exhInfo & Vbcr & "Exchange Account Information:" & Vbcr


  If (objUser.targetAddress <> "") and  (right(objUser.targetAddress,3)<>"qmm")then
    migrationTest = objUser.targetAddress
    migrationTest = right(migrationTest,3)

    if migrationTest = "qmm" then
      exhInfo = exhInfo & "This account has been Migrated but the mailbox has NOT." & vbcr
    else
      exhInfo = exhInfo & "This account is setup for email forwarding, the forwarding address is: " & Vbcr & objUser.targetAddress & Vbcr
    end if

  End If

  mig_stat="na"
  mig_complete="no"
  arrProxy = objUser.GetEx("proxyAddresses")  
  For Each strMailAddress in arrProxy  
    If right(strMailAddress,3) = "qmm" Then 
      mig_stat="started"
    End If 
    If right(strMailAddress,13) = "migration.qmm" Then 
      mig_complete="yes"
    End If 
  Next 

  if mig_stat="started" and mig_complete="no" then
    exhInfo = exhInfo & "This account is in the progress of migrating, but has not completed." & vbcr
  elseif mig_stat="started" and mig_complete="yes" then
    exhInfo = exhInfo & "This account has been fully migrated." & vbcr
  end if
  
  If objUser.msExchHomeServerName<>"" then
    exch_serv = split(objUser.msExchHomeServerName,"cn=")
    exch_store= Mid(objUser.homeMDB, 4)
    storeLst = split(exch_store, ",CN=")
    exhInfo = exhInfo & "Exchange Server: " & exch_serv(3) & Vbcr
    exhInfo = exhInfo & "Exchange Store: " & "/" & storeLst(0) & "/" &storeLst(1) &  Vbcr
  Else
    exhInfo = exhInfo & "Account does not have mailbox/exchange server. " & Vbcr
  End If

  If objUser.msExchHideFromAddressLists = FALSE Then
    exhInfo = exhInfo & "Account is NOT hidden from the GAL" & Vbcr
  Else
    exhInfo = exhInfo & "Account IS hidden from the GAL" & Vbcr
  End If

  If objUser.mailNickname<>"" then
    exhInfo = exhInfo & "Alias: " & objUser.mailNickname & vbcr
  End If
  
  arrProxy = objUser.GetEx("proxyAddresses")  
  
  strAllMailAddresses = "" 
  For Each strMailAddress in arrProxy  
  
    If Lcase(Left(strMailAddress,5))= "smtp:" Then 
      strAllMailAddresses = strAllMailAddresses & vbtab  & strMailAddress & vbcr
    End If 
  
  Next 
  
  exhInfo = exhInfo & "User's email addresses, all caps ''SMTP'' indicate primary SMTP: " & vbcr & strAllMailAddresses & Vbcr
  
  exhInfo = exhInfo & "Extension Attribute 14: " & objUser.extensionAttribute14 & Vbcr

  grouplists= "*************************" & Vbcr
  grouplists= grouplists & Vbcr & "User's groups:" & Vbcr
 
    group_check = "NoGroup"    
    objmemberOf  = objUser.GetEx("memberOf")
       For Each objGroup in objmemberOf
         strList = Mid(objGroup, 4)
         strLists = split(strList, ",OU=")
         grouplists = grouplists & strLists(0) & vbcr
         group_check = "NoGroup" & strLists(0)
       Next    

       if  group_check="NoGroup" then
         grouplists=grouplists & "User has no groups."
       end if

  finalDia= (Acctdia & Vbcr &exhInfo & Vbcr & grouplists & vbcr & "*******End of Data*******" & Vbcr &Vbcr)
  Acctdia = ""
  exhInfo = ""
  grouplists = ""
  Const OK_BUTTON = 0
  Const AUTO_DISMISS = 0

  Set objShell = CreateObject("Wscript.Shell")
  objShell.Popup finalDia, AUTO_DISMISS, "Account Information", OK_BUTTON

  textoutput=msgbox("Would you like to write the results to a text file?",vbYesNo+vbQuestion,"Output to text?")

  if textoutput="6" then
   
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set GrpLst = fso.CreateTextFile("Account Information for " & objUser.givenName & " " & objUser.sn & " with PCC code " & objUser.employeeType & ".txt", True)

    GrpLst.Writeline (objUser.displayName)
    GrpLst.Writeline ("")
    GrpLst.Writeline ("First Name: " & objUser.givenName)
    GrpLst.Writeline ( "Middle Initial : " & objUser.initials)
    GrpLst.Writeline ("Last Name: " & objUser.sn)
    GrpLst.Writeline ("")  
    GrpLst.Writeline ("")
    GrpLst.Writeline ("*************************")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("Account Information:")
  
    GrpLst.Writeline ("Logon Name: " & objUser.userPrincipalName)
    GrpLst.Writeline ("Personnel Type: " & objUser.employeeType)
  
    'Acctdia = Acctdia & "Logon Name: " & objUser.userPrincipalName & Vbcr
    'Acctdia = Acctdia & "Personnel Category Code (PCC): " &   objUser.employeeType & vbcr
  
    If objUser.IsAccountLocked = FALSE Then
      GrpLst.Writeline ("Account is Unlocked.")
    Else
      GrpLst.Writeline ("Account is Locked.")
    End If
  
    If objUser.AccountDisabled = FALSE Then
      GrpLst.Writeline ("Account is Enabled.")
    Else
      GrpLst.Writeline ("Account is Disabled.")
    End If
  
    GrpLst.Writeline ("IA Training Date: " & objUser.iaTrainingDate)
  
    If Err.Number = -2147467259 OR dtmAccountExpiration = "1/1/1970" OR objUser.AccountExpirationDate = "1/1/1970" then
      GrpLst.Writeline ("Account is set to Never Expire.")
    Else
      GrpLst.Writeline ("Account Expiration: " & objUser.AccountExpirationDate & ".")
    End If

    GrpLst.Writeline ("Last modified on: " & objUser.whenChanged & " Zulu Time")
  
    ouLists = split(objUser.distinguishedName, ",OU=")
  
    If ouLists(1) = "A" or ouLists(1) = "B" or ouLists(1) = "C" or ouLists(1) = "D" or ouLists(1) = "E" or ouLists(1) = "F" or ouLists(1) = "G" or ouLists(1) = "H" or ouLists(1) = "I" or ouLists(1) = "J" or ouLists(1) = "K" or ouLists(1) = "L" or ouLists(1) = "M" or ouLists(1) = "N" or ouLists(1) = "O" or ouLists(1) = "Others"  or ouLists(1) = "P" or ouLists(1) = "Q" or ouLists(1) = "R" or ouLists(1) = "S" or ouLists(1) = "T" or ouLists(1) = "U" or ouLists(1) = "V" or ouLists(1) = "W" or ouLists(1) = "X" or ouLists(1) = "Y" or ouLists(1) = "Z" Then
      ouLists(1)="People OU"
    End If
  
    GrpLst.Writeline ("Account is in the OU: " & ouLists(1))
    GrpLst.Writeline ("")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("Full OU Path: " & objUser.distinguishedName)

    GrpLst.Writeline ("")  
    GrpLst.Writeline ("")
    GrpLst.Writeline ("*************************")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("Exchange Account Information:")

    If (objUser.targetAddress <> "") and  (right(objUser.targetAddress,3)<>"qmm")then
      migrationTest = objUser.targetAddress
      migrationTest = right(migrationTest,3)
  
      if migrationTest = "qmm" then
        GrpLst.Writeline ("This account has been Migrated but the mailbox has NOT.")
      else
        GrpLst.Writeline ("This account is setup for email forwarding, the forwarding address is: ")
        GrpLst.Writeline (objUser.targetAddress)
      end if
    End If

    mig_stat="na"
    mig_complete="no"
    arrProxy = objUser.GetEx("proxyAddresses")  
  
    For Each strMailAddress in arrProxy  
      If right(strMailAddress,3) = "qmm" Then 
        mig_stat="started"
      End If 
      If right(strMailAddress,13) = "migration.qmm" Then 
        mig_complete="yes"
      End If 
    Next 
  
    if mig_stat="started" and mig_complete="no" then
      GrpLst.Writeline ("This account is in the progress of migrating, but has not completed.")
    elseif mig_stat="started" and mig_complete="yes" then
      GrpLst.Writeline ("This account has been fully migrated.")
    end if
  
    If objUser.msExchHomeServerName<>"" then
      exch_serv = split(objUser.msExchHomeServerName,"cn=")
      exch_store= Mid(objUser.homeMDB, 4)
      storeLst = split(exch_store, ",CN=")
      GrpLst.Writeline ("Exchange Server: " & exch_serv(3))
      GrpLst.Writeline ("Exchange Store: " & "/" & storeLst(0) & "/" &storeLst(1))
    Else
      GrpLst.Writeline ("Account does not have mailbox/exchange server. ")
    End If

    If objUser.mailNickname<>"" then
      GrpLst.Writeline ("Alias: " & objUser.mailNickname)
    End If
    
    If objUser.msExchHideFromAddressLists = FALSE Then
      GrpLst.Writeline ("Account is NOT hidden from the GAL")
    Else
      GrpLst.Writeline ("Account IS hidden from the GAL")
    End If

    GrpLst.Writeline("User's email addresses, all caps ''SMTP'' indicate primary SMTP: ")

    arrProxy = objUser.GetEx("proxyAddresses")  
  
    strAllMailAddresses = "" 
    For Each strMailAddress in arrProxy  
  
    If Lcase(Left(strMailAddress,5))= "smtp:" Then 
      GrpLst.Writeline("     "  & strMailAddress)
    End If 
  
    Next 
    GrpLst.Writeline("")

    GrpLst.Writeline (exhInfo & "Extension Attribute 14: " & objUser.extensionAttribute14)
    GrpLst.Writeline ("")  
    GrpLst.Writeline ("")
    GrpLst.Writeline ("*************************")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("User's groups:")

    group_check = "NoGroup"    
    objmemberOf  = objUser.GetEx("memberOf")

    For Each objGroup in objmemberOf
      strList = Mid(objGroup, 4)
      strLists = split(strList, ",OU=")
      GrpLst.Writeline (strLists(0)) 
      group_check = "NoGroup" & strLists(0)
    Next    
    
    if  group_check="NoGroup" then
      GrpLst.Writeline ("User has no groups.") 
      GrpLst.Close
    end if
    
    GrpLst.Writeline ("")  
    GrpLst.Writeline ("")
    GrpLst.Writeline ("*******End of Data*******")
    GrpLst.Writeline ("")
    GrpLst.Writeline ("") 
    GrpLst.Close
    x=msgbox("A .txt file has been created in the same directory where this script is located.",,"Output Complete")
  End if

end sub