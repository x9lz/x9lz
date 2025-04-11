<h1 align="center">
2025 Exploitation Management Computer Verification Methods
</h2>

<h3 align="center">Made by altercation (x9lz), with MAJOR help from:

     -   bioluminescent (Epic Games ERRS)
     -   Aminey (Epic Games ERRS)
     -   Allegiance (Hypixel)
     -   Korialites (Hypixel)
     -   HW.flows (Hypixel)

</h3>
  

  

  

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

<h3 align="center">Registry editor Keys

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════
</h3></h3></h3>



-   `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Tracing\`



-   `HKEY_LOCAL_MACHINE\SOFTWARE\Clients\StartMenuInternet`



-   `HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Uninstall`



-   `HKEY_CLASSES_ROOT\Local Settings\Software\Microsoft\Windows\Shell\MuiCache`



-   `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\RunMRU`



-   `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\bam\State\UserSettings`
       > (click on the file ending in 1001)



-   `HKEY_CURRENT_USERSoftware\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths`

  

-   `Computer\HKEY_CURRENT_USER\SOFTWARE\Microsoft\DirectInput\MostRecentApplication`

  

-   `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs`



-   `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\CIDSizeMRU`



-   `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU`



-   `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\FeatureUsage\AppSwitched`



-   `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\LastVisitedPidlMRU`


  
-   `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Compatibility Assistant\Store`




<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

<h3 align="center">USB finding (regedit, event viewer and more)

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════
</h3></h3></h3>
  


-   `Computer\HKEY_LOCAL_MACHINE\SYSTEM\MountedDevices`


-   `Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\USBSTOR`

  
-   `Computer\HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\STORAGE\Volume`


-   `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Search\VolumeInfoCache`

  

<br>  

-   [Download Process Hacker](https://processhacker.sourceforge.io/nightly.php) 
    > When downloaded, click options, then disk devices, when opened you will be able to see everything they've unplugged or ever used on their computer

  

-   [Download USB Devices Tool.](https://www.nirsoft.net/utils/usb_devices_view.html) 
    > Shows unplugged usb devices, can also be used to see if they were using a controller.

  <br>

-   `cd ~\Desktop & Get-WinEvent Microsoft-Windows-Kernel-PnP/Configuration | findstr 410 usb.log` 

       > Open Command Prompt as an Administrator, type `diskpart` and hit enter, and then type `list volume`. It should show a list of USBs or disk devices.

  <br>

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

<h3 align="center">VPN finding (powershell)

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

</h3></h3></h3>  

1.  Run powershell as admin.
2.  Paste `Test-NetConnection`.
3.  Any type of VPN will appear below.

  

  

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

<h3 align="center">Process Hacker Various Searches

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════
  
</h3></h3></h3>

> -   PCAClient 
    >     1.  Open Process Hacker as admin.
    >     2.  Search `explorer`.
    >     3.  Scan and filter strings with `pcaclient`.
    >     4.  Save to a text file and open it.

<br>  

> -   BFE Search
>     1.  Open Process Hacker as admin.
>     2.  Search up `BFE`.
>     3.  Scan and filter strings with `UDP QUERY USER` 
>     > Will show some .exe's that were executed under BFE.

<br>  

> -   Analyze CPU Usage
>     1.  Open Process Hacker.
>     2.  Search `explorer.exe`.
>     3.  Search and filter strings with cpu usage and analyze the results.

<br>  

> -   Diagtrack search
>     1.  Open Process Hacker as admin.
>     2.  Search `diagtrack`.
>     3.  Scan for strings. 
>     >  This is how we find out if they've deleted their journal, ect. You find this out by entering the following as filters in process hacker:
>     >> - Auto-Elimination code: `cmd.exe /C ping 1.1.1.1 -n 1 -w 3000 > Nul & Del /f /q \"%s\""`
>     
>     >> - Journal creation: `fsutil usn createjournal m=1000 a=100 c:`
>     
>     >> - Deleted Regedit values: `reg delete` 
>     >>    >Scan with Regex.
>     
>     >> - Diskpart creation: assign letter & volume select
>     
>     >> - Journal Deletion: `fsutil usn deletejournal /d c:`
>     
>     >> - ffmpeg recording: `-framerate`
>     
>     >> - Stopped Services: `sc stop`
>     
>     >> - Replaced file: `replace`
>     
<br>

> -  DLLhost Search
>     1.  Open Process Hacker.
>     2.  Search `dllhost`.
>     3.  Scan and filter strings with `\users\` then `.exe`.

<br>  

> - DNSCache
>     1.  Open Process Hacker.
>     2.  Search `dns cache`.
>     3.  Scan and filter the following:
>     > - `.gg`
>     > - `.wtf`
>     > - `.cf`
>     > - `.in`
>     > - `.xyz`
>     > - `.pro`
>     > - `.net`

<br>  

> - DPS Service
>     1.  Open Process Hacker.
>     2.  Search for DPS service.
>     3.  Filter the following:
>    > - `!!`
>    >    -  `.exe`
>    > -  `\device\harddiskvolume`
>    >    - `.exe`
>    > -  `\users\`
>    >    -  .exe

<br>  

> -   Event log
>     1.  Open Process Hacker.
>     2.  Search up `eventlog`.
>     3.  View the process and look for `c:\users`.
>     4.  Put `.exe`.

<br>  

> -   Explorer strings
>     1.  Open Process Hacker.
>     2.  Search `explorer.exe`.
>     3.  Scan and filter the following:
>     > -  `{"displayText"`
>     >    - `E.`
>     > -   `file:///`
>     >     -  `.exe`
>     >     -  `.jar`
>     >     -  `.dll`
>     > - `MonitorProcess`
>     > -  `.exe.config`
>     > -   `Zone.Identifier`
>     > -  `/C:/`

<br>

> -   PCASV
>     1.  Open Process Hacker.
>     2.  Search for the `pcasv` process.
>     3.  Scan and filter with
>     > -   `TRACE`
>     >     -   `:\`
>     >     - `.exe`
>     4. Save and analyze the results.

<br>  

> -   #### MPSSVC
>     1.  Open Process Hacker.
>     2.  Search for `mpssvc`.
>     3.  Scan and filter with the following:
>     > -  `\device\harddiskvolume`
>     >     -   `.exe`
>     > -   `UDP Query`
>     > -   `C:\users`
>     >     -   `.exe`

<br>

> -   MSMPENG
>     1.  Open Process Hacker as admin.
>     2.  Search `msmpeng` (and here we are going to see what was executed through cmd).
>     3.  Scan and filter with the following:
>     > -  Auto-Elimination code: `cmd.exe /C ping 1.1.1.1 -n 1 -w 3000 > Nul & Del /f /q \"%s\""`
>     
>     > -  Journal creation: `fsutil usn createjournal m=1000 a=100 c:`
>     
>     > -  VSSAdmin shadows deletion: `vssadmin delete shadows`
>     
>     > -  Deleted Regedit values: `reg delete` 
>     >    > Scan with Regex.
>     
>     > -  Diskpart creation: assign letter & volume select
>     
>     > - Journal Deletion: `fsutil usn deletejournal /d c:`
>     
>     > - replaced file (type) type  
>     >     >Scan with Regex.
>     
>     > - ffmpeg recording: `-framerate`
>     
>     > - Stopped Services: `sc stop`
>        
>     > - Replaced file: `replace`

<br>  

> -   Runtime Broker
>     1.  Open Process Hacker.
>     2.  Search and scan `RuntimeBroker.exe`.
>     3.  Filter with:
>     > -   `C:\Users\`
>     >     -   `.exe`
>     > - `File://`
>     >      -   `.exe`

<br>

> -   SearchApp
>     1.  Open Process Hacker.
>     2.  Search and scan `SearchApp.exe`.
>     3.  Filter the following:
>     > -  `System.Title`
>     >      -   `.exe`
>     > -   `:\`
>     >      -   `.exe`

<br>  

> -   SearchIndexer
>     1.  Open Process Hacker.
>     2.  Search and scan `SearchIndexer.exe`.
>     3.  Filter with the following:
>     > - `DESKTOP`
>     > - `C:/Users/`
>     > - `file:`
  
<br>

> -   SGRM Broker
>     1.  Open Process Hacker.
>     2.  Search and scan `sgrmbroker`.
>     3.  Filter with processID.
>     4.  Upload to [Echo](https://echo.ac/sgrm).

<br>  

> -   SiHost
>     1.  Open Process Hacker.
>     2.  Search and scan `sihost`.
>     3.  Filter with:
>     > -   `n:`
>     >      -   `.exe`

<br>

> -   SmartScreen
>     1.  Open Process Hacker.
>     2.  Search and scan `Smartscreen.exe`.
>     3.  Separate the values below:
>     > - `scenario`
>     > - `appcontrol`

  <br>

> -   SysMain
>     1.  Open Process Hacker.
>     2.  Search and scan `sysmain`.
>     3.  Filter with: 
>     > - `\device\harddisk` 
>     >      -  `.exe`

  

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

<h3 align="center">Command Prompt Methods

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

</h3></h3></h3>  

- `dir/b/s c:\users *.jar`
- `dir/b/s c:\users *.dll`
- `dir/b/s c:\users *.exe`

<br>  

>   Diskpart
> - Open cmd as admin.
> - Type `diskpart`
> - Press enter.
> - Type `list volume`. It should show a list of USB or disk devices.

  <br>

-   `cd c:\Users\%username%\Downloads`

  

-   `findstr /m /c:"!This program cannot be run in DOS mode." "*" 2>nul`

  <br>

-   `tasklist` 
    > (shows active tasks)

  

-   `tree` 
     >   Shows files created or modified.

<br>

 -    `cd c:\users\%username%\desktop && echo============= old file name ======== >> FIlesRNO.txt && fsutil usn readjournal c: csv | findstr /i /c:.exe | findstr /i /c:0x00001000 >> FIlesRNO.txt && echo ============= new name files ========= >> FIlesRNO.txt && fsutil usn readjournal c: csv | findstr /i /c:.exe | findstr /i /c:0x00002000 >> FIlesRNO.txt`

  

-   `cd c:\users\%username%\desktop && fsutil usn readjournal c: csv | findstr /i /C:".pf" | findstr /i /C:"%date%" | findstr /i /C:"net" /i /C:"net1" >> ProcessR.txt && notepad ProcessR.txt`

  

-   `cd c:\users\%username%\desktop && fsutil usn readjournal c: csv | findstr /i /C:".pf" | findstr /i /C:"0x80000200" >> DeletedPF.txt && notepad DeletedPF.txt`

  

-   `cd c:\users\%username%\desktop && fsutil usn readjournal c: csv | findstr /i /c:.exe | findstr /i /c:0x00002000 >> NEWNF.txt && notepad NEWNF.txt`

  

-   `cd c:\users\%username%\desktop && fsutil usn readjournal c: csv | findstr /i /c:.exe | findstr /i /c:0x00001000 >> OLDNF.txt && notepad OLDNF.txt`

  

-   `cd c:\users\%username%\desktop && fsutil usn readjournal c: csv | findstr /i /c:.exe | findstr /i /c:0x00000100 >> CreatedF.txt && notepad CreatedF.txt`

  

-   `cd c:\users\%username%\desktop && fsutil usn readjournal c: csv | findstr /i /c:.exe | findstr /i /c:0x80000200 >> DeletedF.txt && notepad DeletedF.txt`

  

-   `fsutil usn readjournal c: csv | findstr /i /c:.meta | findstr /i /c:0x80000200 >> DeletedMeta.txt`

  

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

<h3 align="center">Powershell Methods

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

  </h3></h3></h3>

-   `Get-ChildItem -Path $shareName | Where-Object { $_.psIsContainer -eq $true }`

  

-   `get-service | where-object {$_.status -eq 'stopped'}`

  

-   `get-service | findstr -i "pcasvc"; get-service | findstr -i "DPS"; get-service | findstr -i "Diagtrack"; get-service | findstr -i "sysmain"; get-service | findstr -i "eventlog"; get-service | findstr -i "sysmain"; get-service | findstr -i "eventlog"`

  

-  Powershell History: 
     > `Windows + R = C:\Users\%USERNAME%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine`
    
<br>
  
-  `Gci -Recurse -filter [.exe, .dll or .jar]` 
    > Command for .exe would be `Gci -Recurse -filter .exe`

  <br>

-   `get-eventlog -source "Service Control manager" -logname System | select message, timegenerated, username | out-gridview`

  

-   `cd ~\Desktop & Get-WinEvent Microsoft-Windows-Kernel-PnP/Configuration | findstr 410 > usb.log`

  

-   `Test-NetConnection` 
     > VPN detection.

  

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════

<h3 align="center">Event Viewer

<h3 align="center">══════════════════════ ⋆★⋆ ══════════════════════
<br>

</h3></h3></h3>

> -  Operational
>    1. Application And Service Registry.
>     2.  Microsoft.
>     3.  Windows.
>     4.  DriverFrameworks-UserMode.
>     5.  Operational.
>     6.  Enable registration.
>     7.  Reclick on operational.
>     8.  Filter current record.
>     9.  Paste these ids:
>     >  -  2003
>     > -   2004
>     > -   2006
>     > -   2010
>     > -   2100
>     > -   2101
>     > -   2105
>     > -   2106

 <br>

> -   Reg deletion detection
>     1.  Open eventviewer.
>     2.  Click Security.
>     3.  Filter current record.
>     4.  In  &lt;All events&gt; put `1102`.
  
<br>

> -   Journal Deletion
>     1.  Open eventviewer.
>     2.  Click Application.
>     3.  Filter current record.
>     4.  In "&lt;All events&gt;" Put `3079`.
<br>

> -   Kernel
>     1.  Applications and Services logs.
>     2.  Microsoft.
>     3.  Windows.
>     4.  Kernel-PnP.
>     5.  Device Configuration.
>     6.  Filter logs to `420` and only ban if any logs are from a USB.

-   `Microsoft-Windows-Partition/Diagnostic`
     > Shows every time a usb was plugged in.

  <br>

-   `Microsoft-Windows-Kernel-PnP/Device Configuration`
     > Checks what was deleted.

  <br>

-   `Microsoft-Windows-StorageSpaces-Driver/Operational`

  

-   `Microsoft-Windows-VolumeSnapshot-Driver/Operational`




