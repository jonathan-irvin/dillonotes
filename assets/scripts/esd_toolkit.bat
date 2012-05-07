@ECHO OFF
CLS
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** Starting Log %username% %date% %time% ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO START

:START
TITLE Jonathan's ESD Toolkit
ECHO Jonathan's ESD Toolkit v1.0
ECHO.
ECHO Type 'help' for a list of commands
GOTO CMDLINE


:HELP
ECHO.
ECHO  	Help Commands:
ECHO.
ECHO 	help-kill   - Show Kill Menu
ECHO 	help-run    - Show Launch Menu
ECHO 	help        - Show this menu
ECHO 	exit        - EXIT
ECHO.
GOTO CMDLINE

:HELPRUN
ECHO.
ECHO  	Launch Commands:
ECHO.
ECHO 	run-qrg         - Launch ESD CoP Quick Reference Guide (Unofficial)
ECHO 	run-shellrunas  - Launch ShellRunAs
ECHO 	run-afnet-dra   - Launch AFNet DRA Console
ECHO 	run-legacy-dra  - Launch Legacy DRA Console
ECHO 	run-all         - Launch All Required Apps and Docs
ECHO.
GOTO CMDLINE

:HELPKILL
ECHO.
ECHO  	Kill Commands:
ECHO.
ECHO 	kill-exp - Kill Explorer
ECHO 	kill-ie  - Kill IE
ECHO 	kill-ofc - Kill Office Apps (Outlook, Word, Excel)
ECHO 	kill-dra - Kill DRA
ECHO 	kill-rem - Kill Remedy
ECHO 	kill-acr - Kill Acrobat Reader
ECHO 	kill-tms - Kill T-Metrics
ECHO 	kill-all - Kill ALL
ECHO 	bye      - Kill All and GO HOME
ECHO.
GOTO CMDLINE

:CMDLINE
ECHO.
SET /P M=toolkit$ 
IF %M%==kill-exp 	GOTO ONE
IF %M%==kill-ie  	GOTO TWO
IF %M%==kill-ofc 	GOTO THREE
IF %M%==kill-dra 	GOTO FOUR
IF %M%==kill-rem 	GOTO FIVE
IF %M%==kill-acr 	GOTO SIX
IF %M%==kill-tms 	GOTO SEVEN
IF %M%==kill-all 	GOTO EIGHT
IF %M%==bye      	GOTO NINE
IF %M%==exit     	GOTO ZERO
IF %M%==help     	GOTO HELP
IF %M%==help-kill     	GOTO HELPKILL
IF %M%==help-run     	GOTO HELPRUN
IF %M%==run-qrg     	GOTO RUNQRG
IF %M%==run-shellrunas  GOTO RUNSHELLRUNAS
IF %M%==run-afnet-dra   GOTO RUNAFNETDRA
IF %M%==run-legacy-dra  GOTO RUNNOSCDRA
IF %M%==run-all     	GOTO RUNTLAUNCH
ECHO Invalid Command.  Type 'help' for a list of commands
GOTO CMDLINE

:ONE
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING EXPLORER ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt | >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im explorer.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt | >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE

:TWO
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING INTERNET EXPLORER ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im iexplore.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE

:THREE
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING OFFICE APPS ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im EXCEL.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im OUTLOOK.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im WINWORD.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE


:FOUR
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING DRA ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im UserConsole.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE


:FIVE
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING REMEDY ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im aruser.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE


:SIX
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING ACROBAT ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im AcroRd32.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE

:SEVEN
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING T-METRICS ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im ACDAgentModule.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE

:EIGHT
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING ALL ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im explorer.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im iexplore.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im EXCEL.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im OUTLOOK.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im WINWORD.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im UserConsole.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im aruser.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im AcroRd32.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im ACDAgentModule.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im notepad.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
GOTO CMDLINE

:NINE
ECHO. >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
ECHO ***** KILLING ALL AND RESTARTING ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im explorer.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im iexplore.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im EXCEL.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im OUTLOOK.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im WINWORD.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im UserConsole.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im aruser.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im AcroRd32.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im ACDAgentModule.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
taskkill /f /im notepad.exe >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
shutdown /r /f
GOTO ZERO

:RUNQRG
start iexplore.exe \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\index.htm
GOTO CMDLINE

:RUNSHELLRUNAS
start shellrunas.exe
GOTO CMDLINE

:RUNAFNETDRA
Runas /user:area52\1273644489.adm "C:\Program Files\NetIQ\DRA\UserConsole.exe"
GOTO CMDLINE

:RUNTLAUNCH
start training_launch.vbs
GOTO CMDLINE

:RUNAFNETDRA
start run_dra_afnet.vbs
GOTO CMDLINE

:RUNNOSCDRA
start run_dra_nosc.vbs
GOTO CMDLINE

:ZERO
ECHO ***** Ending Log %username% %date% %time% ***** >> \\52mpls-fs-109\67nww\690NSG\690NSS\ESD-L_Home\Jonathan.Irvin\cop_map\assets\scripts\log.txt
exit

GOTO CMDLINE